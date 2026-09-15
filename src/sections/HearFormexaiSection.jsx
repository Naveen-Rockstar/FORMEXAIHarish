/**
 * FORMEXAI — Hear Formexai Interactive Voice Experience
 * Real two-speaker conversation (Customer + Formexai AI Receptionist) generated live.
 * Features:
 * - Dynamic synthetic voice synthesis
 * - Animated waveform (animates only when active speaker is talking)
 * - Real-time speaker states (CUSTOMER IS SPEAKING vs FORMEXAI IS SPEAKING)
 * - Progressive transcript reveal
 * - Call duration counter, pause, resume, and restart
 * - Multi-industry switcher (HVAC, Dental, Home Services, Retail, Real Estate)
 * - Structured outcome card on call completion
 */

import React from 'react';
import { useConversationDemo, CONVERSATION_SCENARIOS } from '../hooks/useConversationDemo.js';
import { Button } from '../components/Button.jsx';

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function HearFormexaiSection({ onOpenDemoModal }) {
  const {
    scenario,
    industryKey,
    callStatus,
    activeSpeaker,
    currentTurnIndex,
    revealedTurns,
    elapsedSeconds,
    activeTurn,
    startCall,
    pauseCall,
    resumeCall,
    restartCall,
    selectIndustry,
  } = useConversationDemo('hvac');

  const isCallInProgress = callStatus === 'ACTIVE' || callStatus === 'CONNECTING';
  const isSpeaking = activeSpeaker !== 'none';

  return (
    <section className="hear-demo-section-root" id="hear-formexai" aria-label="Interactive Voice Demonstration">
      <div className="demo-container">
        
        {/* Section Header */}
        <div className="hear-header-cluster">
          <span className="eyebrow">Interactive Voice Demonstration</span>
          <h2 className="hear-headline">Hear Formexai in a real conversation.</h2>
          <p className="hear-subhead">
            Listen to a two-speaker call. Experience how Formexai understands customer intent, answers questions naturally, and takes action.
          </p>
        </div>

        {/* Industry Switcher */}
        <div className="industry-switcher-bar" role="tablist" aria-label="Select industry scenario">
          {Object.values(CONVERSATION_SCENARIOS).map((scen) => {
            const isSelected = scen.id === industryKey;
            return (
              <button
                key={scen.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`industry-tab-pill ${isSelected ? 'active' : ''}`}
                onClick={() => selectIndustry(scen.id)}
              >
                {scen.name}
              </button>
            );
          })}
        </div>

        {/* Premium Phone Call Interface Container */}
        <div className="phone-call-console-frame" role="region" aria-label="Live Call Console">
          
          {/* Top Call Info Bar */}
          <div className="console-top-bar">
            <div className="console-caller-info">
              <div className="console-brand-icon">F</div>
              <div>
                <div className="console-business-name">{scenario.businessName}</div>
                <div className="console-receptionist-name">AI Receptionist: {scenario.receptionistName}</div>
              </div>
            </div>

            <div className="console-live-status">
              <span
                className={`status-indicator-dot ${isCallInProgress ? 'pulse' : ''}`}
                style={{
                  backgroundColor:
                    callStatus === 'COMPLETED'
                      ? 'var(--color-success)'
                      : isCallInProgress
                      ? 'var(--color-accent)'
                      : 'var(--color-ink-muted)'
                }}
              />
              <span className="status-text-label">
                {callStatus === 'IDLE' && 'READY TO CONNECT'}
                {callStatus === 'CONNECTING' && 'CONNECTING CALL...'}
                {callStatus === 'ACTIVE' && `CALL ACTIVE · ${formatDuration(elapsedSeconds)}`}
                {callStatus === 'PAUSED' && `CALL PAUSED · ${formatDuration(elapsedSeconds)}`}
                {callStatus === 'COMPLETED' && `CALL COMPLETED · ${formatDuration(elapsedSeconds)}`}
              </span>
            </div>
          </div>

          {/* Active Speaker Banner */}
          <div className="speaker-banner-strip">
            <div className="speaker-identity">
              {activeSpeaker === 'customer' && (
                <span className="speaker-badge customer-badge">
                  CUSTOMER IS SPEAKING
                </span>
              )}
              {activeSpeaker === 'receptionist' && (
                <span className="speaker-badge receptionist-badge">
                  FORMEXAI ({scenario.receptionistName.toUpperCase()}) IS SPEAKING
                </span>
              )}
              {activeSpeaker === 'none' && isCallInProgress && (
                <span className="speaker-badge listening-badge">
                  FORMEXAI IS LISTENING &amp; ROUTING...
                </span>
              )}
              {callStatus === 'IDLE' && (
                <span className="speaker-badge idle-badge">
                  CLICK "START CALL" TO BEGIN INTERACTIVE DEMO
                </span>
              )}
              {callStatus === 'COMPLETED' && (
                <span className="speaker-badge completed-badge">
                  CALL FINISHED · ACTION COMPLETED
                </span>
              )}
            </div>

            {/* Dynamic Waveform (Animates only while speaking) */}
            <div className={`dynamic-waveform-cluster ${isSpeaking ? 'speaking-active' : ''}`} aria-hidden="true">
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
            </div>
          </div>

          {/* Progressive Conversation Transcript */}
          <div className="call-transcript-viewport" role="log" aria-live="polite">
            {revealedTurns.length === 0 && callStatus === 'IDLE' && (
              <div className="transcript-empty-state">
                <div className="empty-state-badge">Scenario: {scenario.scenarioTitle}</div>
                <h4 className="empty-title">Experience Formexai Live</h4>
                <p className="empty-desc">
                  Click the button below to simulate an incoming customer call to <strong>{scenario.businessName}</strong>. You will hear both the caller and Formexai converse in real time.
                </p>
                <button
                  type="button"
                  className="btn btn-electric btn-lg"
                  onClick={startCall}
                >
                  Start Call Demonstration →
                </button>
              </div>
            )}

            {revealedTurns.map((turn, idx) => {
              const isAi = turn.role === 'receptionist';
              const isCurrent = currentTurnIndex === idx;

              return (
                <div
                  key={turn.id}
                  className={`transcript-message-row ${isAi ? 'message-ai' : 'message-customer'} ${isCurrent ? 'message-speaking' : ''}`}
                >
                  <div className="message-header-meta">
                    <span className="message-speaker">{turn.speaker}</span>
                    {turn.action && isCurrent && (
                      <span className="message-action-pill">{turn.action}</span>
                    )}
                  </div>
                  <div className="message-bubble">
                    <p>{turn.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Taken Notification Bar */}
          {activeTurn && activeTurn.action && isCallInProgress && (
            <div className="action-taken-strip">
              <span className="action-tag-icon">⚡</span>
              <span className="action-tag-text"><strong>Real-Time Action:</strong> {activeTurn.action}</span>
            </div>
          )}

          {/* Call Controls Bar */}
          <div className="console-controls-bar">
            {callStatus === 'IDLE' && (
              <Button variant="electric" size="md" onClick={startCall}>
                Start Call Demo
              </Button>
            )}

            {callStatus === 'ACTIVE' && (
              <div className="controls-active-group">
                <Button variant="secondary" size="sm" onClick={pauseCall}>
                  Pause Call
                </Button>
                <Button variant="secondary" size="sm" onClick={restartCall}>
                  Restart Call ↺
                </Button>
              </div>
            )}

            {callStatus === 'PAUSED' && (
              <div className="controls-active-group">
                <Button variant="electric" size="sm" onClick={resumeCall}>
                  Resume Call
                </Button>
                <Button variant="secondary" size="sm" onClick={restartCall}>
                  Restart ↺
                </Button>
              </div>
            )}

            {callStatus === 'COMPLETED' && (
              <div className="controls-active-group">
                <Button variant="secondary" size="sm" onClick={restartCall}>
                  Hear Call Again ↺
                </Button>
                <Button variant="primary" size="sm" onClick={onOpenDemoModal}>
                  Get Started for Your Business →
                </Button>
              </div>
            )}

            <div className="controls-right-info">
              <span className="scenario-label">SCENARIO:</span>
              <span className="scenario-value">{scenario.scenarioTitle}</span>
            </div>
          </div>

          {/* Structured Call Outcome Card */}
          {callStatus === 'COMPLETED' && (
            <div className="call-outcome-summary-panel">
              <div className="outcome-header-row">
                <div className="outcome-title-group">
                  <span className="outcome-check-icon">✓</span>
                  <h4>{scenario.outcome.title}</h4>
                </div>
                <span className="outcome-badge">Automated Result</span>
              </div>

              <div className="outcome-fields-grid">
                {scenario.outcome.details.map((detail, idx) => (
                  <div key={idx} className="outcome-field-box">
                    <span className="field-lbl">{detail.label}</span>
                    <span className="field-val">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
