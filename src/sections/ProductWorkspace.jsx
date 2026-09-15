/**
 * FORMEXAI — Product Workspace Section
 * Sections 12 & 13: Custom Formexai Workspace Interface (Directly in React)
 * Animated Sequence:
 * CALL RECEIVED → TRANSCRIPT → UNDERSTANDING → INTENT → ACTION → RESULT
 * Shows:
 * - Live Call (● Connected)
 * - Transcript (Customer & Formexai)
 * - Knowledge (Verified business rule)
 * - Call actions (Checking availability)
 * - Current state (Visibly changing)
 * - Result (Appointment confirmed)
 */

import React, { useState, useEffect } from 'react';

export function ProductWorkspace() {
  // 0: Call Received, 1: Transcript streaming, 2: Understanding, 3: Intent detected, 4: Action check, 5: Result confirmed
  const [workspaceStep, setWorkspaceStep] = useState(0);
  const [activeTab, setActiveTab] = useState('live-call'); // live-call | knowledge | activity

  useEffect(() => {
    const timer = setInterval(() => {
      setWorkspaceStep((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const stepTitles = [
    'CALL RECEIVED',
    'TRANSCRIPT STREAMING',
    'UNDERSTANDING REQUEST',
    'INTENT IDENTIFIED',
    'CALENDAR ACTION EXECUTED',
    'RESULT SECURED & LOGGED'
  ];

  return (
    <section className="workspace-section-root" id="workspace" aria-label="Product Workspace">
      <div className="container">
        
        {/* Section Header */}
        <div className="workspace-header-cluster">
          <span className="eyebrow">Product Workspace</span>
          <h2 className="workspace-headline">Inside the Formexai engine.</h2>
          <p className="workspace-subhead">
            Watch Formexai process a live inbound call in real time—verifying business knowledge, evaluating business rules, and locking in the confirmed appointment.
          </p>
        </div>

        {/* Custom React Formexai Workspace Interface */}
        <div className="workspace-app-shell" role="region" aria-label="Formexai Operations Console">
          
          {/* Top Window Bar */}
          <div className="workspace-window-topbar">
            <div className="window-controls-group">
              <span className="app-dot red" />
              <span className="app-dot yellow" />
              <span className="app-dot green" />
              <span className="app-window-title">FORMEXAI WORKSPACE v2.4 · RECEPTIONIST DISPATCH</span>
            </div>

            <div className="window-status-pill">
              <span className="pulse-orange-dot" />
              <span className="window-status-text">LIVE CALL · CONNECTED (00:48)</span>
            </div>
          </div>

          {/* Subheader Step Progress Track */}
          <div className="workspace-step-track-bar">
            {stepTitles.map((title, idx) => {
              const isActive = idx === workspaceStep;
              const isDone = idx < workspaceStep;
              return (
                <button
                  key={idx}
                  type="button"
                  className={`workspace-track-node ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
                  onClick={() => setWorkspaceStep(idx)}
                >
                  <span className="track-step-num">0{idx + 1}</span>
                  <span className="track-step-name">{title}</span>
                </button>
              );
            })}
          </div>

          {/* Main Workspace Body Grid */}
          <div className="workspace-main-grid">
            
            {/* Left Nav Sidebar */}
            <aside className="workspace-nav-column" aria-label="Workspace Sections">
              <div className="nav-group-heading">OPERATION CHANNELS</div>
              <nav className="workspace-nav-list">
                <button
                  type="button"
                  className={`ws-nav-btn ${activeTab === 'live-call' ? 'active' : ''}`}
                  onClick={() => setActiveTab('live-call')}
                >
                  <span className="ws-nav-icon">●</span>
                  <span className="ws-nav-text">Live Call Console</span>
                  <span className="ws-live-tag">Active</span>
                </button>

                <button
                  type="button"
                  className={`ws-nav-btn ${activeTab === 'knowledge' ? 'active' : ''}`}
                  onClick={() => setActiveTab('knowledge')}
                >
                  <span className="ws-nav-icon">📖</span>
                  <span className="ws-nav-text">Knowledge Rules</span>
                  <span className="ws-count-tag">18</span>
                </button>

                <button
                  type="button"
                  className={`ws-nav-btn ${activeTab === 'activity' ? 'active' : ''}`}
                  onClick={() => setActiveTab('activity')}
                >
                  <span className="ws-nav-icon">📋</span>
                  <span className="ws-nav-text">Recent Call Logs</span>
                  <span className="ws-count-tag">4</span>
                </button>
              </nav>

              <div className="workspace-system-stats">
                <div className="stat-row">
                  <span className="stat-lbl">VOICE LATENCY</span>
                  <span className="stat-val stat-val-accent">0.38s</span>
                </div>
                <div className="stat-row">
                  <span className="stat-lbl">TELEPHONY</span>
                  <span className="stat-val">Carrier Inbound</span>
                </div>
                <div className="stat-row">
                  <span className="stat-lbl">CALENDAR</span>
                  <span className="stat-val stat-val-success">Connected</span>
                </div>
              </div>
            </aside>

            {/* Middle: Live Transcript & Interaction Console */}
            <div className="workspace-center-console">
              
              <div className="console-meta-banner">
                <div className="caller-identity">
                  <span className="caller-name">Marcus Vance</span>
                  <span className="caller-phone">(212) 581-9042 · Inbound Line #1</span>
                </div>
                <div className="call-phase-chip">
                  <span>PHASE:</span>
                  <strong>{stepTitles[workspaceStep]}</strong>
                </div>
              </div>

              {/* Dynamic Transcript Stream */}
              <div className="workspace-transcript-feed">
                
                {/* 1. Customer Utterance */}
                <div className={`transcript-bubble customer ${workspaceStep >= 1 ? 'revealed' : ''}`}>
                  <div className="speaker-header">
                    <span>CUSTOMER (MARCUS)</span>
                    <span className="time-tag">10:48:12 AM</span>
                  </div>
                  <p className="speech-text">
                    "Hi, can you schedule a service appointment for our cooling unit? It's blowing warm air."
                  </p>
                </div>

                {/* 2. Formexai Real-time Response */}
                <div className={`transcript-bubble formexai ${workspaceStep >= 2 ? 'revealed' : ''}`}>
                  <div className="speaker-header">
                    <span className="formexai-label">FORMEXAI (RECEPTIONIST)</span>
                    <span className="time-tag">10:48:14 AM</span>
                  </div>
                  <p className="speech-text">
                    {workspaceStep === 2 && 'Listening and analyzing request...'}
                    {workspaceStep >= 3 && '"I can certainly take care of that for you, Marcus. Let me check our earliest diagnostic window for today."'}
                  </p>
                </div>

                {/* 3. Action Notification */}
                {workspaceStep >= 4 && (
                  <div className="system-action-alert">
                    <span className="action-bolt">⚡</span>
                    <span className="action-copy">
                      <strong>ACTION: Check availability</strong> — Queried Google Calendar &amp; ServiceTitan routes. Slot matched at 2:30 PM today.
                    </span>
                  </div>
                )}

                {/* 4. Formexai Confirmation Response */}
                {workspaceStep >= 5 && (
                  <div className="transcript-bubble formexai revealed">
                    <div className="speaker-header">
                      <span className="formexai-label">FORMEXAI (RECEPTIONIST)</span>
                      <span className="time-tag">10:48:22 AM</span>
                    </div>
                    <p className="speech-text">
                      "I've reserved our priority window between 2:00 PM and 4:00 PM today. I just sent a confirmation text with technician tracking. Is there anything else?"
                    </p>
                  </div>
                )}

              </div>

              {/* Console Action Bar */}
              <div className="console-action-footer">
                <div className="action-summary-left">
                  <span className="dot-indicator" />
                  <span>Receptionist Sarah actively executing business logic</span>
                </div>
                <div className="step-stepper-display">
                  <span className="step-counter-text">STAGE 0{workspaceStep + 1} / 06</span>
                </div>
              </div>

            </div>

            {/* Right: Technical Inspector & Knowledge Panel */}
            <aside className="workspace-inspector-column" aria-label="Live Inspector">
              
              <div className="inspector-panel-header">
                <h5>INTELLIGENCE INSPECTOR</h5>
                <span className="inspector-badge">Real-Time</span>
              </div>

              {/* Current State */}
              <div className="inspector-section">
                <span className="inspector-sec-title">CURRENT STATE</span>
                <div className="state-display-box">
                  <span className="state-name-tag">{stepTitles[workspaceStep]}</span>
                  <div className="state-progress-bar">
                    <div
                      className="state-bar-fill"
                      style={{ width: `${((workspaceStep + 1) / 6) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Detected Intent */}
              <div className="inspector-section">
                <span className="inspector-sec-title">INTENT CLASSIFICATION</span>
                <div className="intent-box">
                  <span className="intent-key">INTENT:</span>
                  <span className="intent-val">
                    {workspaceStep < 3 ? 'Classifying...' : 'Service Appointment (HVAC Cooling)'}
                  </span>
                </div>
                <div className="intent-box">
                  <span className="intent-key">URGENCY:</span>
                  <span className="intent-val val-accent">
                    {workspaceStep < 3 ? 'Assessing...' : 'Same-Day Priority'}
                  </span>
                </div>
              </div>

              {/* Knowledge Rule Used */}
              <div className="inspector-section">
                <span className="inspector-sec-title">KNOWLEDGE BASE RULE</span>
                <div className="knowledge-rule-card">
                  <span className="rule-id-chip">RULE #08 · DISPATCH</span>
                  <p className="rule-text">
                    "IF caller reports active cooling failure AND outdoor temperature &gt; 80°F, OFFER earliest same-day diagnostic window before booking next-day."
                  </p>
                  <span className="rule-status-tag">✓ Rule Evaluated &amp; Applied</span>
                </div>
              </div>

              {/* Result Outcome */}
              <div className="inspector-section">
                <span className="inspector-sec-title">DISPATCH RESULT</span>
                <div className={`result-box ${workspaceStep >= 5 ? 'result-complete' : 'result-pending'}`}>
                  {workspaceStep < 5 ? (
                    <div className="pending-state">
                      <span className="pending-spinner" />
                      <span>Awaiting final slot lock...</span>
                    </div>
                  ) : (
                    <div className="confirmed-state">
                      <div className="confirmed-badge">✓ APPOINTMENT CONFIRMED</div>
                      <div className="confirmed-detail">Slot: Today @ 2:30 PM</div>
                      <div className="confirmed-detail">SMS sent to (212) 581-9042</div>
                      <div className="confirmed-detail">CRM Work Order #8842 Created</div>
                    </div>
                  )}
                </div>
              </div>

            </aside>

          </div>

        </div>

      </div>

      {/* Downward Conduit into Implementation Section */}
      <div className="section-conduit-strip" aria-hidden="true">
        <div className="conduit-line">
          <span className="conduit-glow-dot" />
        </div>
      </div>

    </section>
  );
}
