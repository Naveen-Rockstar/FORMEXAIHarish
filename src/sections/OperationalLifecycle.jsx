/**
 * FORMEXAI — Operational Lifecycle
 * Section: Continuous Animated Journey
 * 01 CALL → 02 UNDERSTAND → 03 RESPOND → 04 ACT → 05 CONNECT
 * 
 * Includes:
 * - Continuous signal rail with glowing orange active progress track
 * - Interactive node selection + smooth scroll-linked progression
 * - Dark AI Execution Console with real-time telemetry (EVENT_TYPE, LATENCY, SIGNAL_STATUS, CURRENT_PHASE)
 */

import React, { useState, useEffect, useRef } from 'react';

export function OperationalLifecycle() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  const stages = [
    {
      num: '01',
      name: 'CALL',
      stageCode: 'STAGE_01_CALL',
      headline: 'Customer reaches your business.',
      subhead: 'Instant connection with zero hold times.',
      detail: 'Inbound calls connect in under one second. Formexai greets the caller using your company’s custom brand voice, tone, and opening greeting.',
      eventType: 'INBOUND_RING',
      latency: '< 0.4s',
      signalState: 'CALL_RECEIVED'
    },
    {
      num: '02',
      name: 'UNDERSTAND',
      stageCode: 'STAGE_02_UNDERSTAND',
      headline: 'Formexai identifies what the caller needs.',
      subhead: 'Contextual intent and urgency triage.',
      detail: 'Natural speech intelligence separates emergencies from routine inquiries. Formexai captures caller identity, service location, and specific problem details without keypad menus.',
      eventType: 'INTENT_CLASSIFICATION',
      latency: '0.38s',
      signalState: 'INTENT_CLASSIFIED'
    },
    {
      num: '03',
      name: 'RESPOND',
      stageCode: 'STAGE_03_RESPOND',
      headline: 'Formexai answers naturally.',
      subhead: 'Human-like dialogue grounded in verified knowledge.',
      detail: 'Speaks with natural pacing, clear pronunciation, and conversational empathy. Answers questions directly from your verified business policies and service scope.',
      eventType: 'DIALOGUE_SYNTHESIS',
      latency: '0.42s',
      signalState: 'RESPONSE_GENERATED'
    },
    {
      num: '04',
      name: 'ACT',
      stageCode: 'STAGE_04_ACT',
      headline: 'Formexai books, captures, routes or resolves.',
      subhead: 'Real-time two-way execution.',
      detail: 'Scans live provider calendars to lock confirmed appointments, reserves floor stock, or initiates warm phone transfers directly to on-call staff with caller context.',
      eventType: 'CALENDAR_MUTATION',
      latency: '0.51s',
      signalState: 'ACTION_EXECUTED'
    },
    {
      num: '05',
      name: 'CONNECT',
      stageCode: 'STAGE_05_CONNECT',
      headline: 'The result reaches your team and systems.',
      subhead: 'Zero manual data entry or missed handoffs.',
      detail: 'Instantly texts appointment confirmation to the caller, writes complete call summaries into your CRM (ServiceTitan, Jobber, etc.), and notifies dispatch via team alerts.',
      eventType: 'CRM_SYNC_COMPLETE',
      latency: '0.29s',
      signalState: 'WORKFLOW_CONNECTED'
    }
  ];

  // Auto-play through stages smoothly when in view
  useEffect(() => {
    if (!isAutoPlaying) return;
    timerRef.current = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % stages.length);
    }, 3200);
    return () => clearInterval(timerRef.current);
  }, [isAutoPlaying, stages.length]);

  // Scroll observer to activate first stage when user enters section
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isAutoPlaying) {
          // Re-engage auto sequence if user scrolls back into view
          setIsAutoPlaying(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isAutoPlaying]);

  const handleStageSelect = (idx) => {
    setActiveStageIndex(idx);
    setIsAutoPlaying(false); // User manually took control
  };

  const currentStage = stages[activeStageIndex];
  const progressPercent = (activeStageIndex / (stages.length - 1)) * 100;

  return (
    <section className="lifecycle-section-root" id="lifecycle" ref={sectionRef} aria-label="Operational Lifecycle">
      <div className="container">
        
        {/* Section Header */}
        <div className="lifecycle-header-cluster">
          <span className="eyebrow">Operational Lifecycle</span>
          <h2 className="lifecycle-headline">From first ring to booked result.</h2>
          <p className="lifecycle-subhead">
            One continuous, automated journey. Formexai guides every inbound conversation through five disciplined stages to drive work forward.
          </p>
        </div>

        {/* Continuous Animated Journey Interface */}
        <div className="continuous-journey-frame">
          
          {/* Top Continuous Signal Rail */}
          <div className="continuous-rail-wrapper">
            
            {/* Background Line */}
            <div className="rail-background-line" />
            
            {/* Glowing Orange Active Progress Line */}
            <div
              className="rail-active-progress"
              style={{ width: `${progressPercent}%` }}
            />

            {/* Station Nodes Along the Line */}
            <div className="rail-stations-row">
              {stages.map((st, idx) => {
                const isActive = idx === activeStageIndex;
                const isPast = idx < activeStageIndex;
                return (
                  <button
                    key={st.num}
                    type="button"
                    className={`rail-station-node ${isActive ? 'station-active' : ''} ${isPast ? 'station-past' : ''}`}
                    onClick={() => handleStageSelect(idx)}
                    aria-label={`Jump to stage ${st.num}: ${st.name}`}
                  >
                    <div className="node-marker">
                      <span className="node-pulse" />
                      <span className="node-core" />
                    </div>
                    <div className="node-label-group">
                      <span className="node-num">{st.num}</span>
                      <span className="node-spacer">&nbsp;</span>
                      <span className="node-name">{st.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Interactive Stage Canvas Display */}
          <div className="journey-canvas-card">
            
            {/* Left: Stage Narrative */}
            <div className="canvas-narrative-col">
              <div className="canvas-badge-row">
                <span className="stage-index-badge">STAGE {currentStage.num} OF 05</span>
                <span className="stage-state-indicator">
                  <span className="state-pulse-dot" />
                  <span>{currentStage.signalState}</span>
                </span>
              </div>

              <h3 className="canvas-stage-headline">{currentStage.headline}</h3>
              <h4 className="canvas-stage-subhead">{currentStage.subhead}</h4>
              <p className="canvas-stage-detail">{currentStage.detail}</p>

              {/* Station Deliverable Highlight */}
              <div className="canvas-deliverable-box">
                <span className="deliverable-label">OPERATIONAL DELIVERABLE</span>
                <span className="deliverable-value">{currentStage.subhead}</span>
              </div>
            </div>

            {/* Right: Technical State Terminal */}
            <div className="canvas-terminal-col">
              <div className="state-terminal-box">
                
                <div className="terminal-topbar">
                  <div className="terminal-dots">
                    <span className="t-dot" />
                    <span className="t-dot" />
                    <span className="t-dot" />
                  </div>
                  <span className="terminal-title">SIGNAL PIPELINE · STAGE {currentStage.num}</span>
                  <span className="terminal-chip">{currentStage.name}</span>
                </div>

                <div className="terminal-body">
                  
                  <div className="terminal-row">
                    <span className="t-key">EVENT_TYPE:</span>
                    <span className="t-val t-val-accent">{currentStage.eventType}</span>
                  </div>

                  <div className="terminal-row">
                    <span className="t-key">LATENCY:</span>
                    <span className="t-val">{currentStage.latency}</span>
                  </div>

                  <div className="terminal-row">
                    <span className="t-key">SIGNAL_STATUS:</span>
                    <span className="t-val t-val-success">● {currentStage.signalState}</span>
                  </div>

                  <div className="terminal-row">
                    <span className="t-key">CURRENT_PHASE:</span>
                    <span className="t-val">{currentStage.headline}</span>
                  </div>

                  <div className="terminal-log-output">
                    <span className="log-prefix">&gt;</span>
                    <span className="log-text">{currentStage.detail}</span>
                  </div>

                  {/* Micro-simulation signal waveform */}
                  <div className="terminal-waveform-bar" aria-hidden="true">
                    <span className={`w-segment ${activeStageIndex >= 0 ? 'active' : ''}`} />
                    <span className={`w-segment ${activeStageIndex >= 1 ? 'active' : ''}`} />
                    <span className={`w-segment ${activeStageIndex >= 2 ? 'active' : ''}`} />
                    <span className={`w-segment ${activeStageIndex >= 3 ? 'active' : ''}`} />
                    <span className={`w-segment ${activeStageIndex >= 4 ? 'active' : ''}`} />
                    <span className="w-segment" />
                    <span className="w-segment" />
                    <span className="w-segment" />
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Downward Conduit leading to Product Workspace */}
      <div className="section-conduit-strip" aria-hidden="true">
        <div className="conduit-line">
          <span className="conduit-glow-dot" />
        </div>
      </div>

    </section>
  );
}
