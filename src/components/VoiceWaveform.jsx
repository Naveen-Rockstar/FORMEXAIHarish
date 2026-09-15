import React from 'react';

export function VoiceWaveform({
  state = 'IDLE', // 'IDLE', 'LISTENING', 'SPEAKING', etc.
  bars = 12,
  height = 32,
  className = ''
}) {
  const isSpeaking = state === 'SPEAKING';
  const isListening = state === 'LISTENING';
  const isActive = isSpeaking || isListening;

  const barColor = isSpeaking ? 'var(--color-primary)' : isListening ? 'var(--color-success)' : '#CBD5E1';

  return (
    <div
      className={`voice-waveform-wrap ${isActive ? 'waveform-live' : ''} ${className}`.trim()}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      {Array.from({ length: bars }).map((_, i) => {
        const delay = (i % 6) * 0.12;
        const duration = isSpeaking ? (0.7 + (i % 4) * 0.2) : (1.1 + (i % 3) * 0.25);

        return (
          <div
            key={i}
            className="waveform-bar-col"
            style={{
              backgroundColor: barColor,
              animationDuration: isActive ? `${duration}s` : '0s',
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
