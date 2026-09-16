/**
 * FORMEXAI — Live AI Voice Demo Section
 * Section: Live Product Demonstration
 * Heading: Don't take our word for it. Talk to FormexAI.
 * 
 * Features:
 * - Interactive Microphone with explicit states: IDLE, READY, LISTENING, PROCESSING, RESPONDING, SPEAKING, ERROR
 * - Graceful fallback text input for permission-denied / unsupported mobile browsers
 * - Animated voice waveform during active speech
 * - 4 Clickable Example Prompts:
 *   1. "My AC isn't cooling."
 *   2. "I need an appointment tomorrow."
 *   3. "Do you service my area?"
 *   4. "I need a quote for a new AC."
 * - Live transcript feed showing caller & FormexAI receptionist turns
 * - Real-time extracted ticket (clearly labeled DEMO DATA / PRODUCT PREVIEW)
 */

import React, { useState } from 'react';
import { useInteractiveVoice, VOICE_STATES } from '../hooks/useInteractiveVoice.js';

export function LiveVoiceDemo() {
  const {
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
    toggleMute,
    handleSendText,
  } = useInteractiveVoice('hvac');

  const [typedInput, setTypedInput] = useState('');

  const examplePrompts = [
    "My AC isn't cooling.",
    "I need an appointment tomorrow.",
    "Do you service my area?",
    "I need a quote for a new AC."
  ];

  const handlePromptClick = (promptText) => {
    // If call is idle, start it first, then send prompt
    if (voiceState === VOICE_STATES.IDLE || voiceState === VOICE_STATES.COMPLETED) {
      startCall();
      setTimeout(() => {
        handleSendText(promptText);
      }, 700);
    } else {
      handleSendText(promptText);
    }
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (!typedInput.trim()) return;
    if (voiceState === VOICE_STATES.IDLE || voiceState === VOICE_STATES.COMPLETED) {
      startCall();
      setTimeout(() => {
        handleSendText(typedInput.trim());
        setTypedInput('');
      }, 700);
    } else {
      handleSendText(typedInput.trim());
      setTypedInput('');
    }
  };

  const isCallActive = voiceState !== VOICE_STATES.IDLE && voiceState !== VOICE_STATES.COMPLETED;
  const isSpeaking = voiceState === VOICE_STATES.SPEAKING;
  const isListening = voiceState === VOICE_STATES.LISTENING;
  const isThinking = voiceState === VOICE_STATES.THINKING;

  return (
    <section className="live-demo-section-root" id="demo" aria-label="Live Voice Demo">
      <div className="container">
        
        {/* Section Header */}
        <div className="demo-header-cluster">
          <span className="eyebrow">Real Interactive Experience</span>
          <h2 className="demo-headline">
            Don't take our word for it.<br />
            <span className="demo-headline-accent">Talk to FormexAI.</span>
          </h2>
          <p className="demo-subhead">
            Experience our conversational voice receptionist in real time. Use your microphone or click any common HVAC question below to test live understanding and booking.
          </p>
        </div>

        {/* Quick-Test Example Prompts */}
        <div className="example-prompts-bar">
          <span className="prompts-label">CLICK AN EXAMPLE PROMPT:</span>
          <div className="prompts-pills-row">
            {examplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                className="example-prompt-pill"
                onClick={() => handlePromptClick(prompt)}
              >
                <span className="pill-quote">“</span>
                <span>{prompt}</span>
                <span className="pill-action-tag">Test →</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Demo Console Frame */}
        <div className="live-voice-console-frame" role="region" aria-label="Interactive Receptionist Console">
          
          {/* Console Header Bar */}
          <div className="console-top-header">
            <div className="console-header-brand">
              <span className="c-brand-icon">F</span>
              <div>
                <div className="c-brand-title">Apex Heating &amp; Air — Receptionist Alex</div>
                <div className="c-brand-sub">Dallas Metro Territory · Forwarded Carrier Line</div>
              </div>
            </div>

            <div className="console-header-badges">
              <span className="preview-pill">DEMO PREVIEW</span>
              <span className={`live-state-chip ${isCallActive ? 'active' : ''}`}>
                <span className="state-pulse-point" />
                <span>
                  {voiceState === VOICE_STATES.IDLE && 'STANDBY · READY'}
                  {voiceState === VOICE_STATES.CONNECTING && 'CONNECTING LINE...'}
                  {voiceState === VOICE_STATES.LISTENING && 'LISTENING TO CALLER'}
                  {voiceState === VOICE_STATES.THINKING && 'UNDERSTANDING INTENT'}
                  {voiceState === VOICE_STATES.SPEAKING && 'FORMEXAI SPEAKING'}
                  {voiceState === VOICE_STATES.COMPLETED && 'CALL RESOLVED'}
                  {voiceState === VOICE_STATES.ERROR && 'VOICE NOTICE'}
                </span>
              </span>
            </div>
          </div>

          {/* Console Main Body: Split between Live Conversation and Live Dispatch Ticket */}
          <div className="console-split-grid">
            
            {/* Left: Call Controls & Live Transcript */}
            <div className="console-conversation-col">
              
              {/* Primary Call Action Zone */}
              <div className="voice-action-dock">
                
                {voiceState === VOICE_STATES.IDLE && (
                  <button
                    type="button"
                    className="btn btn-primary voice-cta-btn"
                    onClick={startCall}
                    aria-label="Start Voice Demo with Microphone"
                  >
                    <svg className="mic-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" y1="19" x2="12" y2="23" />
                      <line x1="8" y1="23" x2="16" y2="23" />
                    </svg>
                    <span>Talk to FormexAI</span>
                  </button>
                )}

                {voiceState === VOICE_STATES.CONNECTING && (
                  <div className="voice-status-pill connecting-pill">
                    <span className="spinner-dot" />
                    <span>Connecting audio stream...</span>
                  </div>
                )}

                {isListening && (
                  <div className="voice-status-pill listening-pill">
                    <span className="mic-pulse-ring" />
                    <span>Listening... speak now or pick an example prompt</span>
                  </div>
                )}

                {isThinking && (
                  <div className="voice-status-pill thinking-pill">
                    <span className="spinner-dot" />
                    <span>Understanding request &amp; checking business rules...</span>
                  </div>
                )}

                {isSpeaking && (
                  <div className="voice-status-pill speaking-pill">
                    <span className="speaking-wave-icon">🔊</span>
                    <span>FormexAI is responding audibly...</span>
                  </div>
                )}

                {voiceState === VOICE_STATES.COMPLETED && (
                  <div className="voice-status-pill completed-pill">
                    <span>✓ Call Completed</span>
                  </div>
                )}

                {/* Secondary Controls (Mute / Stop / Restart) */}
                {isCallActive && (
                  <div className="secondary-controls-row">
                    <button
                      type="button"
                      className="control-btn"
                      onClick={toggleMute}
                      title={isMuted ? 'Unmute FormexAI voice' : 'Mute FormexAI voice'}
                    >
                      {isMuted ? '🔇 Unmute Voice' : '🔊 Mute Voice'}
                    </button>
                    <button
                      type="button"
                      className="control-btn"
                      onClick={restartCall}
                    >
                      ↻ Restart Call
                    </button>
                    <button
                      type="button"
                      className="control-btn end-btn"
                      onClick={stopCall}
                    >
                      End Call
                    </button>
                  </div>
                )}

              </div>

              {/* Dynamic Waveform Visualization */}
              <div className={`console-waveform-display ${isSpeaking || isListening ? 'active-audio' : ''}`} aria-hidden="true">
                <span className="w-bar" />
                <span className="w-bar" />
                <span className="w-bar" />
                <span className="w-bar" />
                <span className="w-bar" />
                <span className="w-bar" />
                <span className="w-bar" />
                <span className="w-bar" />
                <span className="w-bar" />
                <span className="w-bar" />
                <span className="w-bar" />
                <span className="w-bar" />
              </div>

              {/* Error Notice if microphone restricted */}
              {errorMessage && (
                <div className="demo-error-notice" role="alert">
                  <span className="notice-icon">⚠️</span>
                  <div className="notice-text">
                    <strong>Microphone note:</strong> {errorMessage}
                  </div>
                </div>
              )}

              {/* Live Transcript Stream */}
              <div className="console-transcript-stream" role="log" aria-live="polite">
                <div className="transcript-label-bar">
                  <span>CONVERSATION TRANSCRIPT</span>
                  <span className="transcript-turns-count">{transcriptHistory.length} turns</span>
                </div>

                <div className="transcript-bubbles-list">
                  {transcriptHistory.length === 0 ? (
                    <div className="empty-transcript-state">
                      <p>Click <strong>"Talk to FormexAI"</strong> or any prompt above to start the conversation.</p>
                      <span className="hint-text">Simulates real caller inbound line with two-way voice response.</span>
                    </div>
                  ) : (
                    transcriptHistory.map((entry, index) => (
                      <div
                        key={index}
                        className={`transcript-bubble-entry ${entry.role === 'caller' ? 'caller-entry' : 'receptionist-entry'}`}
                      >
                        <div className="bubble-meta-head">
                          <span className="speaker-name-tag">
                            {entry.role === 'caller' ? '👤 CUSTOMER (CALLER)' : '⚡ FORMEXAI RECEPTIONIST'}
                          </span>
                        </div>
                        <div className="bubble-speech-text">{entry.text}</div>
                      </div>
                    ))
                  )}

                  {liveInterimText && (
                    <div className="transcript-bubble-entry caller-entry interim">
                      <div className="bubble-meta-head">
                        <span className="speaker-name-tag">👤 CUSTOMER (SPEAKING...)</span>
                      </div>
                      <div className="bubble-speech-text interim-text">"{liveInterimText}"</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Fallback Text Input (Ensures 100% testability on any device) */}
              <form onSubmit={handleTextSubmit} className="demo-text-fallback-bar">
                <input
                  type="text"
                  value={typedInput}
                  onChange={(e) => setTypedInput(e.target.value)}
                  placeholder="Or type a question (e.g. 'Can you send someone today?')..."
                  className="fallback-input"
                  aria-label="Type a statement to test FormexAI"
                />
                <button type="submit" className="fallback-submit-btn">
                  Send
                </button>
              </form>

            </div>

            {/* Right: Live Extracted Ticket & Workflow Execution */}
            <div className="console-dispatch-col">
              <div className="live-ticket-card">
                
                <div className="ticket-card-header">
                  <span className="ticket-card-title">DISPATCH TICKET PREVIEW</span>
                  <span className="ticket-badge-demo">ILLUSTRATIVE EXAMPLE</span>
                </div>

                <div className="ticket-details-list">
                  
                  <div className="ticket-row">
                    <span className="t-key">INDUSTRY</span>
                    <span className="t-val">{ticket.industry || 'HVAC & Home Services'}</span>
                  </div>

                  <div className="ticket-row">
                    <span className="t-key">SERVICE TYPE</span>
                    <span className="t-val highlight-service">{ticket.serviceType || 'Pending classification'}</span>
                  </div>

                  <div className="ticket-row">
                    <span className="t-key">ISSUE SUMMARY</span>
                    <span className="t-val">{ticket.issue || 'Listening for problem symptoms...'}</span>
                  </div>

                  <div className="ticket-row">
                    <span className="t-key">PRIORITY LEVEL</span>
                    <span className={`t-val priority-pill ${ticket.priority === 'HIGH' ? 'urgent' : 'normal'}`}>
                      {ticket.priority || 'Normal'}
                    </span>
                  </div>

                  <div className="ticket-row">
                    <span className="t-key">APPOINTMENT</span>
                    <span className="t-val booked-slot">
                      {ticket.appointment !== 'Not scheduled' ? ticket.appointment : 'Slot queried upon qualification'}
                    </span>
                  </div>

                  <div className="ticket-row">
                    <span className="t-key">WORKFLOW STATUS</span>
                    <span className="t-val status-val">
                      <span className="status-live-dot" />
                      {ticket.status || 'LISTENING'}
                    </span>
                  </div>

                </div>

                {/* Integration Webhook Confirmation */}
                <div className="ticket-actions-footnote">
                  <div className="webhook-status-line">
                    <span className="webhook-check">✓</span>
                    <span>Calendar sync: Google Calendar / Dispatch locked</span>
                  </div>
                  <div className="webhook-status-line">
                    <span className="webhook-check">✓</span>
                    <span>SMS confirmation: Automated customer dispatch note</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
