/**
 * FORMEXAI — useAudioPlayer Hook
 * Manages audio playback, synchronized transcript tracking, scrubbing,
 * and industry switching for both real audio recordings and simulated demo conversations.
 */

import { useState, useEffect, useRef, useCallback } from 'react';

export function useAudioPlayer(industryData) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(industryData.duration || 87);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [isCompleted, setIsCompleted] = useState(false);

  const audioRef = useRef(null);
  const animFrameRef = useRef(null);
  const timerRef = useRef(null);

  // Initialize audio element when industryData changes
  useEffect(() => {
    // Stop any existing audio or timers
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    setIsPlaying(false);
    setCurrentTime(0);
    setIsCompleted(false);
    setDuration(industryData.duration || 87);

    if (industryData.hasRealAudio && industryData.audioSrc) {
      const audio = new Audio(industryData.audioSrc);
      audio.playbackRate = playbackRate;

      audio.onloadedmetadata = () => {
        if (audio.duration && !isNaN(audio.duration)) {
          setDuration(audio.duration);
        }
      };

      audio.onended = () => {
        setIsPlaying(false);
        setIsCompleted(true);
        setCurrentTime(audio.duration || industryData.duration);
      };

      audioRef.current = audio;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [industryData.id, industryData.hasRealAudio, industryData.audioSrc, industryData.duration]);

  // Sync playback rate to audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  // Update time for real audio via requestAnimationFrame
  const trackAudioTime = useCallback(() => {
    if (audioRef.current && !audioRef.current.paused) {
      setCurrentTime(audioRef.current.currentTime);
      animFrameRef.current = requestAnimationFrame(trackAudioTime);
    }
  }, []);

  const startSimulatedPlayback = useCallback(() => {
    setIsPlaying(true);
    const intervalMs = 100;
    const stepSec = (intervalMs / 1000) * playbackRate;

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setCurrentTime((prev) => {
        const next = prev + stepSec;
        if (next >= industryData.duration) {
          clearInterval(timerRef.current);
          setIsPlaying(false);
          setIsCompleted(true);
          return industryData.duration;
        }
        return next;
      });
    }, intervalMs);
  }, [industryData.duration, playbackRate]);

  const play = useCallback(() => {
    setIsCompleted(false);

    if (industryData.hasRealAudio && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            animFrameRef.current = requestAnimationFrame(trackAudioTime);
          })
          .catch((err) => {
            console.warn('Audio play request blocked or unsupported in current browser, falling back to simulated playback:', err);
            setIsPlaying(false);
            // Fall back seamlessly so the interactive UI remains functional
            startSimulatedPlayback();
          });
      } else {
        setIsPlaying(true);
        animFrameRef.current = requestAnimationFrame(trackAudioTime);
      }
    } else {
      // Simulated playback for demo industries without pre-recorded audio file
      startSimulatedPlayback();
    }
  }, [industryData.hasRealAudio, startSimulatedPlayback, trackAudioTime]);

  const pause = useCallback(() => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  const seek = useCallback((timeInSec) => {
    const clamped = Math.max(0, Math.min(timeInSec, duration));
    setCurrentTime(clamped);
    setIsCompleted(clamped >= duration);

    if (audioRef.current) {
      audioRef.current.currentTime = clamped;
    }
  }, [duration]);

  const replay = useCallback(() => {
    pause();
    seek(0);
    setTimeout(() => {
      play();
    }, 100);
  }, [pause, seek, play]);

  const toggleSpeed = useCallback(() => {
    setPlaybackRate((prev) => (prev === 1.0 ? 1.25 : 1.0));
  }, []);

  // Compute active transcript items and current speaker status
  const currentTurn = industryData.transcript.find(
    (turn) => currentTime >= turn.startTime && currentTime < turn.endTime
  ) || null;

  // Determine current active call state
  let callState = 'IDLE';
  if (isCompleted || currentTime >= duration - 0.5) {
    callState = 'COMPLETED';
  } else if (isPlaying) {
    if (currentTurn) {
      callState = currentTurn.role === 'receptionist' ? 'RESPONDING' : 'LISTENING';
    } else {
      callState = 'IN_PROGRESS';
    }
  } else if (currentTime > 0) {
    callState = 'PAUSED';
  }

  // Find latest active timeline event
  const activeEvent = [...industryData.timelineEvents]
    .reverse()
    .find((evt) => currentTime >= evt.time) || industryData.timelineEvents[0];

  return {
    isPlaying,
    currentTime,
    duration,
    playbackRate,
    isCompleted,
    callState,
    currentTurn,
    activeEvent,
    play,
    pause,
    togglePlayPause,
    seek,
    replay,
    toggleSpeed,
  };
}
