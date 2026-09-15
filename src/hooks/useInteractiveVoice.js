/**
 * Formexai - useInteractiveVoice Hook
 * True Interactive Voice Engine: SpeechRecognition + SpeechSynthesis + Natural Intent Engine + Interruption
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SCENARIOS,
  INITIAL_GREETINGS,
  INITIAL_TICKETS,
  processUserInput,
} from '../data/conversationEngine.js';

export const VOICE_STATES = {
  IDLE: 'IDLE',
  CONNECTING: 'CONNECTING',
  LISTENING: 'LISTENING',
  THINKING: 'THINKING',
  SPEAKING: 'SPEAKING',
  COMPLETED: 'COMPLETED',
  ERROR: 'ERROR',
};

export function useInteractiveVoice(defaultScenario = SCENARIOS.HVAC) {
  const [scenario, setScenario] = useState(defaultScenario);
  const [voiceState, setVoiceState] = useState(VOICE_STATES.IDLE);
  const [transcriptHistory, setTranscriptHistory] = useState([]);
  const [liveInterimText, setLiveInterimText] = useState('');
  const [ticket, setTicket] = useState(INITIAL_TICKETS[defaultScenario]);
  const [isMuted, setIsMuted] = useState(false);
  const [speechRecognitionSupported, setSpeechRecognitionSupported] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // References to preserve state across async callbacks
  const recognitionRef = useRef(null);
  const selectedVoiceRef = useRef(null);
  const isRunningRef = useRef(false);
  const isMutedRef = useRef(isMuted);
  const dialogueStateRef = useRef({ step: 0 });
  const scenarioRef = useRef(scenario);
  const ticketRef = useRef(ticket);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  useEffect(() => {
    scenarioRef.current = scenario;
    ticketRef.current = INITIAL_TICKETS[scenario];
    setTicket(INITIAL_TICKETS[scenario]);
  }, [scenario]);

  // Load and discover best available English voice
  const initVoices = useCallback(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;

    const preferred =
      voices.find((v) => v.lang.startsWith('en') && (v.name.includes('Samantha') || v.name.includes('Natural') || v.name.includes('Google US English') || v.name.includes('Zira') || v.name.includes('Alex'))) ||
      voices.find((v) => v.lang.startsWith('en')) ||
      voices[0];

    selectedVoiceRef.current = preferred;
  }, []);

  useEffect(() => {
    initVoices();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = initVoices;
    }
  }, [initVoices]);

  // Audible speech synthesizer helper
  const speakText = useCallback((text, onComplete) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onComplete) onComplete();
      return;
    }

    // Always cancel previous speech
    window.speechSynthesis.cancel();

    if (isMutedRef.current) {
      // If muted, briefly simulate speech timing and finish
      setVoiceState(VOICE_STATES.SPEAKING);
      const simulatedDuration = Math.max(1600, text.length * 45);
      setTimeout(() => {
        if (!isRunningRef.current) return;
        if (onComplete) onComplete();
      }, simulatedDuration);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    if (selectedVoiceRef.current) {
      utterance.voice = selectedVoiceRef.current;
    }
    utterance.rate = 1.0;
    utterance.pitch = 1.02;
    utterance.volume = 1.0;

    utterance.onstart = () => {
      setVoiceState(VOICE_STATES.SPEAKING);
    };

    utterance.onend = () => {
      if (!isRunningRef.current) return;
      if (onComplete) onComplete();
    };

    utterance.onerror = () => {
      if (!isRunningRef.current) return;
      if (onComplete) onComplete();
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  // Listen for user speech using SpeechRecognition
  const startListening = useCallback(() => {
    if (!isRunningRef.current) return;

    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      setSpeechRecognitionSupported(false);
      setVoiceState(VOICE_STATES.LISTENING);
      return;
    }

    try {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }

      const rec = new SpeechRec();
      rec.continuous = false;
      rec.interimResults = true;
      rec.lang = 'en-US';

      rec.onstart = () => {
        setVoiceState(VOICE_STATES.LISTENING);
        setLiveInterimText('');
      };

      rec.onresult = (event) => {
        // Natural speech interruption: cancel TTS if Formexai was speaking
        if (window.speechSynthesis && window.speechSynthesis.speaking) {
          window.speechSynthesis.cancel();
        }

        let interim = '';
        let final = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final += event.results[i][0].transcript;
          } else {
            interim += event.results[i][0].transcript;
          }
        }

        if (interim) {
          setLiveInterimText(interim);
        }

        if (final) {
          setLiveInterimText('');
          handleUserUtterance(final);
        }
      };

      rec.onerror = (e) => {
        if (e.error === 'no-speech') {
          // Restart listening after silent pause
          if (isRunningRef.current && voiceState !== VOICE_STATES.SPEAKING && voiceState !== VOICE_STATES.COMPLETED) {
            setTimeout(() => {
              if (isRunningRef.current) startListening();
            }, 500);
          }
        } else if (e.error === 'not-allowed') {
          setErrorMessage('Microphone access was denied. You can continue using the text input below.');
          setVoiceState(VOICE_STATES.LISTENING);
        }
      };

      rec.onend = () => {
        // Handled through results or restart
      };

      recognitionRef.current = rec;
      rec.start();
    } catch {
      setVoiceState(VOICE_STATES.LISTENING);
    }
  }, [voiceState]);

  // Handle a complete statement from the user (spoken or typed)
  const handleUserUtterance = useCallback((userText) => {
    if (!userText || !userText.trim()) return;

    // Add user message to transcript history
    setTranscriptHistory((prev) => [
      ...prev,
      { speaker: 'Caller', text: userText.trim(), role: 'caller' },
    ]);

    setVoiceState(VOICE_STATES.THINKING);

    setTimeout(() => {
      if (!isRunningRef.current) return;

      const result = processUserInput(
        userText,
        scenarioRef.current,
        dialogueStateRef.current,
        ticketRef.current
      );

      dialogueStateRef.current = { step: result.nextStep };
      ticketRef.current = result.updatedTicket;
      setTicket(result.updatedTicket);

      // Add Formexai response to transcript
      setTranscriptHistory((prev) => [
        ...prev,
        { speaker: 'Formexai', text: result.response, role: 'receptionist' },
      ]);

      // Speak response audibly
      speakText(result.response, () => {
        if (result.isCompleted) {
          setVoiceState(VOICE_STATES.COMPLETED);
          isRunningRef.current = false;
        } else {
          startListening();
        }
      });
    }, 450);
  }, [speakText, startListening]);

  // Start Call (User Gesture)
  const startCall = useCallback(async () => {
    isRunningRef.current = true;
    setErrorMessage(null);
    setTranscriptHistory([]);
    setLiveInterimText('');
    dialogueStateRef.current = { step: 0 };
    ticketRef.current = INITIAL_TICKETS[scenario];
    setTicket(INITIAL_TICKETS[scenario]);

    // Request microphone permission if supported
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch {
        // If user blocks mic or mic unavailable, fall back smoothly to text input
        setErrorMessage('Microphone access not granted. Voice input is unavailable, but you can type in the box below and still hear Formexai speak!');
      }
    }

    setVoiceState(VOICE_STATES.CONNECTING);

    const greeting = INITIAL_GREETINGS[scenario];

    setTimeout(() => {
      if (!isRunningRef.current) return;

      setTranscriptHistory([
        { speaker: 'Formexai', text: greeting, role: 'receptionist' },
      ]);

      speakText(greeting, () => {
        startListening();
      });
    }, 600);
  }, [scenario, speakText, startListening]);

  // Stop Call
  const stopCall = useCallback(() => {
    isRunningRef.current = false;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {}
    }
    setVoiceState(VOICE_STATES.IDLE);
    setLiveInterimText('');
  }, []);

  // Restart Call
  const restartCall = useCallback(() => {
    stopCall();
    setTimeout(() => {
      startCall();
    }, 200);
  }, [stopCall, startCall]);

  // Change Scenario
  const handleSetScenario = useCallback((newScenario) => {
    stopCall();
    setScenario(newScenario);
    setTicket(INITIAL_TICKETS[newScenario]);
  }, [stopCall]);

  // Clean unmount
  useEffect(() => {
    return () => {
      isRunningRef.current = false;
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {}
      }
    };
  }, []);

  return {
    scenario,
    voiceState,
    transcriptHistory,
    liveInterimText,
    ticket,
    isMuted,
    speechRecognitionSupported,
    errorMessage,
    startCall,
    stopCall,
    restartCall,
    toggleMute: () => setIsMuted((prev) => !prev),
    handleSendText: handleUserUtterance,
    setScenario: handleSetScenario,
  };
}
