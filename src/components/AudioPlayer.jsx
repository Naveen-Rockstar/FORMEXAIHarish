/**
 * FORMEXAI — Branded Audio Player Component
 * Custom audio controls: play, pause, progress scrubber, waveform bars,
 * formatted timestamps, speed toggle, and replay button.
 */

import React from 'react';

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function AudioPlayer({
  isPlaying,
  currentTime,
  duration,
  playbackRate,
  callState,
  onTogglePlayPause,
  onSeek,
  onReplay,
  onToggleSpeed,
  hasRealAudio
}) {
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleScrubberChange = (e) => {
    const newPercent = parseFloat(e.target.value);
    const newTime = (newPercent / 100) * duration;
    onSeek(newTime);
  };

  // Generate 48 stylized waveform bars that illuminate according to playback progress
  const waveformBars = Array.from({ length: 48 }, (_, i) => {
    const barProgress = (i / 48) * 100;
    const isBarActive = barProgress <= progressPercent;
    // Controlled pseudorandom heights to mimic natural voice audio frequencies
    const heights = [
      24, 38, 55, 42, 68, 85, 70, 45, 30, 52, 78, 92,
      64, 40, 58, 75, 88, 62, 35, 48, 72, 90, 76, 50,
      32, 60, 82, 94, 66, 44, 56, 74, 86, 68, 42, 30,
      50, 70, 84, 95, 65, 38, 54, 72, 80, 58, 36, 22
    ];
    const height = heights[i % heights.length];

    return (
      <div
        key={i}
        className={`audio-wave-bar ${isBarActive ? 'active' : ''} ${isPlaying && isBarActive ? 'pulsing' : ''}`}
        style={{
          height: `${height}%`,
          animationDelay: `${(i % 6) * 0.1}s`
        }}
      />
    );
  });

  return (
    <div className="audio-player-root" role="region" aria-label="Call Audio Player">
      
      {/* Top Meta Bar */}
      <div className="audio-player-header">
        <div className="call-state-badge">
          <span className={`state-dot ${isPlaying ? 'state-pulse' : ''}`} />
          <span className="state-label">
            {callState === 'RESPONDING' && 'Formexai Speaking'}
            {callState === 'LISTENING' && 'Customer Speaking'}
            {callState === 'IN_PROGRESS' && 'Call in Progress'}
            {callState === 'PAUSED' && 'Call Paused'}
            {callState === 'COMPLETED' && 'Call Completed'}
            {callState === 'IDLE' && 'Ready to Play'}
          </span>
          {hasRealAudio && (
            <span className="audio-type-tag">Recorded Call Reference</span>
          )}
        </div>

        <div className="audio-time-counter">
          <span className="time-current">{formatTime(currentTime)}</span>
          <span className="time-divider">/</span>
          <span className="time-total">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Waveform Scrubber Visualizer */}
      <div className="waveform-scrubber-container">
        <div className="waveform-bars-track">
          {waveformBars}
        </div>
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={progressPercent}
          onChange={handleScrubberChange}
          className="waveform-range-slider"
          aria-label="Seek audio position"
        />
      </div>

      {/* Control Buttons Strip */}
      <div className="audio-controls-row">
        
        {/* Play / Pause Main CTA */}
        <button
          type="button"
          className={`player-main-btn ${isPlaying ? 'btn-playing' : ''}`}
          onClick={onTogglePlayPause}
          aria-label={isPlaying ? 'Pause conversation' : 'Play conversation'}
        >
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1.5" />
              <rect x="14" y="4" width="4" height="16" rx="1.5" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 4.5v15l13-7.5-13-7.5z" />
            </svg>
          )}
          <span>{isPlaying ? 'Pause' : currentTime > 0 ? 'Resume' : 'Hear Conversation'}</span>
        </button>

        {/* Replay Button */}
        <button
          type="button"
          className="player-secondary-btn"
          onClick={onReplay}
          aria-label="Replay call from beginning"
          title="Replay call"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          <span>Replay</span>
        </button>

        {/* Speed Switcher */}
        <button
          type="button"
          className="player-speed-btn"
          onClick={onToggleSpeed}
          aria-label={`Playback speed: ${playbackRate}x`}
        >
          {playbackRate}x Speed
        </button>

      </div>

    </div>
  );
}
