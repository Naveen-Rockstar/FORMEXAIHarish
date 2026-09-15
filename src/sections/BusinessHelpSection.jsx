/**
 * FORMEXAI — How Formexai Helps Your Business
 * Section: Universal Business Impact
 * 
 * 1. Central Visual Pipeline:
 *    CALL RECEIVED → INTENT DETECTED → HVAC OUTAGE → CUSTOMER DETAILS EXTRACTED → EMERGENCY RULE APPLIED → TEAM TRANSFER / BOOKING
 *    With live telemetry: EVENT_TYPE, LATENCY, INTENT, PRIORITY, STATUS.
 * 
 * 2. Built for Day-to-Day Operations:
 *    Editorial 2-column layout with 6 demonstrated operational concepts:
 *    01 Answer Every Call (Mini phone pickup simulation)
 *    02 Capture Every Opportunity (Pipeline lead-to-booking)
 *    03 Handle Routine Questions (Conversation snippet & resolved badge)
 *    04 Follow Your Rules (Conditional logic branching IF/THEN/ELSE)
 *    05 Keep Your Team Focused (Workload balance telemetry)
 *    06 Available Around the Clock (Coverage schedule & active indicator)
 */

import React, { useState, useEffect } from 'react';

export function BusinessHelpSection() {
  const [activePipelineStep, setActivePipelineStep] = useState(2); // 0 to 4
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const pipelineStages = [
    {
      id: 'call',
      stepNum: '01',
      title: 'CALL RECEIVED',
      badge: 'INBOUND_RING',
      headline: 'Instant connection in under 0.4 seconds.',
      summary: 'Carrier line signals inbound ring. Formexai answers immediately with custom company greeting.',
      telemetry: [
        { label: 'EVENT_TYPE', value: 'INBOUND_RING' },
        { label: 'LATENCY', value: '< 0.4s' },
        { label: 'SIP_STATUS', value: '200_OK' },
        { label: 'STATUS', value: '● CONNECTED' }
      ]
    },
    {
      id: 'intent',
      stepNum: '02',
      title: 'INTENT DETECTED',
      badge: 'NATURAL_SPEECH',
      headline: 'Classified: HVAC Cooling Outage.',
      summary: 'Natural language triage separates emergency cooling breakdown from routine maintenance inquiries.',
      telemetry: [
        { label: 'INTENT', value: 'HVAC_OUTAGE' },
        { label: 'PRIORITY', value: 'URGENT' },
        { label: 'CONFIDENCE', value: '99.4%' },
        { label: 'STATUS', value: '● INTENT_CLASSIFIED' }
      ]
    },
    {
      id: 'details',
      stepNum: '03',
      title: 'DETAILS EXTRACTED',
      badge: 'ENTITY_EXTRACTION',
      headline: 'Caller identity, address & symptoms captured.',
      summary: 'Captures caller name (David Miller), service location (42 Oak Street), and specific diagnostic symptom.',
      telemetry: [
        { label: 'CALLER', value: 'David Miller' },
        { label: 'ADDRESS', value: '42 Oak Street' },
        { label: 'SYMPTOM', value: 'Blowing Warm Air' },
        { label: 'STATUS', value: '● ENTITIES_PARSED' }
      ]
    },
    {
      id: 'rule',
      stepNum: '04',
      title: 'RULE APPLIED',
      badge: 'LOGIC_EVALUATION',
      headline: 'Emergency Dispatch Protocol activated.',
      summary: 'Evaluates business rule: Active cooling failure with indoor temp > 80°F unlocks same-day emergency slot.',
      telemetry: [
        { label: 'RULE_ID', value: '#08_EMERGENCY' },
        { label: 'CONDITION', value: 'Temp > 80°F & No Cooling' },
        { label: 'DISPATCH', value: 'Same-Day Priority Window' },
        { label: 'STATUS', value: '● RULE_EVALUATED' }
      ]
    },
    {
      id: 'action',
      stepNum: '05',
      title: 'ACTION & RESULT',
      badge: 'TWO_WAY_EXECUTION',
      headline: 'Calendar locked & technician alerted.',
      summary: 'Locks 2:30 PM slot in Google Calendar/ServiceTitan, texts instant SMS confirmation, and creates work order.',
      telemetry: [
        { label: 'CALENDAR_SLOT', value: 'Today @ 2:30 PM' },
        { label: 'SMS_DISPATCH', value: 'Confirmed to Caller' },
        { label: 'CRM_TICKET', value: 'Work Order #8842 Created' },
        { label: 'STATUS', value: '● ACTION_COMPLETED' }
      ]
    }
  ];

  // Auto-advance pipeline smoothly unless user manually selects a stage
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActivePipelineStep((prev) => (prev + 1) % pipelineStages.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isAutoPlaying, pipelineStages.length]);

  const currentStage = pipelineStages[activePipelineStep];

  return (
    <section className="business-help-section-root" id="how-formexai-helps" aria-label="How Formexai Helps Your Business">
      <div className="container">
        
        {/* Section Header */}
        <div className="help-header-cluster">
          <span className="eyebrow">Universal Business Impact</span>
          <h2 className="help-headline">
            Your customers don’t call on a schedule. <br />
            <span className="help-headline-sub">Formexai is ready when they do.</span>
          </h2>
          <p className="help-subhead">
            From the moment the phone rings to the moment the job is booked, Formexai handles the conversation according to your exact business rules.
          </p>
        </div>

        {/* Central Visual Pipeline: Realistic Operational System */}
        <div className="operational-pipeline-frame" role="region" aria-label="Live Call Processing Pipeline">
          
          {/* Pipeline Stepper Nodes */}
          <div className="pipeline-nodes-track">
            {pipelineStages.map((stage, idx) => {
              const isActive = idx === activePipelineStep;
              const isPast = idx < activePipelineStep;
              return (
                <button
                  key={stage.id}
                  type="button"
                  className={`pipeline-node-btn ${isActive ? 'node-active' : ''} ${isPast ? 'node-past' : ''}`}
                  onClick={() => {
                    setActivePipelineStep(idx);
                    setIsAutoPlaying(false);
                  }}
                  aria-label={`Jump to stage ${stage.stepNum}: ${stage.title}`}
                >
                  <div className="node-indicator-box">
                    <span className="node-num-label">{stage.stepNum}</span>
                    <span className="node-pulse-point" />
                  </div>
                  <span className="node-text-title">{stage.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Real-Time Console */}
          <div className="pipeline-telemetry-console">
            
            {/* Topbar */}
            <div className="console-top-strip">
              <div className="console-phase-indicator">
                <span className="live-status-dot" />
                <span className="phase-title">STAGE {currentStage.stepNum} OF 05 · {currentStage.title}</span>
              </div>
              <span className="telemetry-badge-mono">{currentStage.badge}</span>
            </div>

            {/* Main Stage Narrative & Live Telemetry Grid */}
            <div className="console-main-content">
              
              <div className="console-narrative-block">
                <h3 className="narrative-headline">{currentStage.headline}</h3>
                <p className="narrative-summary">{currentStage.summary}</p>
                <div className="narrative-tag-row">
                  <span className="tag-bolt">⚡</span>
                  <span className="tag-copy">AUTONOMOUS EXECUTION VIA FORMEXAI OPERATIONAL ENGINE</span>
                </div>
              </div>

              {/* Telemetry Metric Cards */}
              <div className="console-telemetry-grid">
                {currentStage.telemetry.map((item, idx) => (
                  <div key={idx} className="telemetry-cell">
                    <span className="cell-key">{item.label}</span>
                    <span className="cell-val">{item.value}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

        {/* Built for Day-to-Day Operations: Editorial 2-Column Demonstrated Values */}
        <div className="operations-values-section">
          
          <div className="values-section-header">
            <h3 className="values-main-title">Built for Day-to-Day Operations</h3>
            <p className="values-subtitle">Six tangible operational outcomes executed continuously across every customer call.</p>
          </div>

          <div className="editorial-values-grid">
            
            {/* 01 Answer Every Call */}
            <div className="editorial-value-card">
              <div className="card-meta-row">
                <span className="editorial-num">01</span>
                <span className="editorial-tag">INBOUND RELIABILITY</span>
              </div>
              <h4 className="editorial-title">Answer Every Call</h4>
              <p className="editorial-body">
                Never leave customers waiting on hold or lost in voicemail while your staff is busy or on a job site.
              </p>
              
              {/* Visual Demonstration: Phone Pickup Interface */}
              <div className="value-mini-demo call-pickup-demo">
                <div className="mini-status-bar">
                  <span className="mini-pulse-dot" />
                  <span className="mini-status-text">INCOMING CALL · CONNECTING</span>
                </div>
                <div className="mini-action-row">
                  <span className="mini-actor">FORMEXAI</span>
                  <span className="mini-speech">ANSWERING AUTONOMOUSLY...</span>
                </div>
                <div className="mini-result-row success-row">
                  <span className="check-mark">✓</span>
                  <span>CALL CONNECTED · 00:01</span>
                </div>
              </div>
            </div>

            {/* 02 Capture Every Opportunity */}
            <div className="editorial-value-card">
              <div className="card-meta-row">
                <span className="editorial-num">02</span>
                <span className="editorial-tag">REVENUE CONVERSION</span>
              </div>
              <h4 className="editorial-title">Capture Every Opportunity</h4>
              <p className="editorial-body">
                Turn raw inbound conversations into booked calendar slots, qualified leads, and detailed dispatch tickets.
              </p>

              {/* Visual Demonstration: Progression Pipeline */}
              <div className="value-mini-demo progression-pipeline-demo">
                <div className="pipe-nodes-row">
                  <span className="pipe-chip">INBOUND CALL</span>
                  <span className="pipe-sep">→</span>
                  <span className="pipe-chip">QUALIFIED LEAD</span>
                  <span className="pipe-sep">→</span>
                  <span className="pipe-chip">APPOINTMENT</span>
                  <span className="pipe-sep">→</span>
                  <span className="pipe-chip highlighted">CRM RECORD</span>
                </div>
                <div className="pipe-meta-footnote">
                  <span>● Direct Calendar Mutation &amp; ServiceTitan Work Order #8842</span>
                </div>
              </div>
            </div>

            {/* 03 Handle Routine Questions */}
            <div className="editorial-value-card">
              <div className="card-meta-row">
                <span className="editorial-num">03</span>
                <span className="editorial-tag">KNOWLEDGE VERIFICATION</span>
              </div>
              <h4 className="editorial-title">Handle Routine Questions</h4>
              <p className="editorial-body">
                Answers common questions about business hours, services, pricing guidance, and policies using your verified facts.
              </p>

              {/* Visual Demonstration: Compact Dialogue */}
              <div className="value-mini-demo conversation-snippet-demo">
                <div className="chat-line caller-line">
                  <span className="chat-speaker">CALLER:</span>
                  <span className="chat-text">"What time do you close tonight?"</span>
                </div>
                <div className="chat-line ai-line">
                  <span className="chat-speaker">FORMEXAI:</span>
                  <span className="chat-text">"We're open until 7:00 PM today. Can I help schedule a visit?"</span>
                </div>
                <div className="chat-resolution-tag">
                  <span className="res-dot" />
                  <span>RESOLVED · ZERO TEAM ACTION REQUIRED</span>
                </div>
              </div>
            </div>

            {/* 04 Follow Your Rules */}
            <div className="editorial-value-card">
              <div className="card-meta-row">
                <span className="editorial-num">04</span>
                <span className="editorial-tag">CONDITIONAL LOGIC</span>
              </div>
              <h4 className="editorial-title">Follow Your Rules</h4>
              <p className="editorial-body">
                Configure custom conditional guidelines: when to book, when to transfer emergencies, and how to qualify callers.
              </p>

              {/* Visual Demonstration: Logic Branching */}
              <div className="value-mini-demo conditional-logic-demo">
                <div className="logic-branch-box">
                  <div className="logic-clause">
                    <span className="kw-if">IF</span>
                    <span className="clause-text">Emergency detected (Burst pipe or active leak)</span>
                  </div>
                  <div className="logic-outcome then-branch">
                    <span className="kw-then">THEN</span>
                    <span className="outcome-text">Warm transfer to On-Call Manager with briefing notes</span>
                  </div>
                  <div className="logic-outcome else-branch">
                    <span className="kw-else">ELSE</span>
                    <span className="outcome-text">Offer next available standard appointment window</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 05 Keep Your Team Focused */}
            <div className="editorial-value-card">
              <div className="card-meta-row">
                <span className="editorial-num">05</span>
                <span className="editorial-tag">STAFF PRODUCTIVITY</span>
              </div>
              <h4 className="editorial-title">Keep Your Team Focused</h4>
              <p className="editorial-body">
                Shield your staff from constant ringing so they can focus on high-value clients and active job executions.
              </p>

              {/* Visual Demonstration: Workload Telemetry */}
              <div className="value-mini-demo workload-telemetry-demo">
                <div className="workload-stats-row">
                  <div className="stat-card stat-ai">
                    <span className="stat-big-num">87</span>
                    <span className="stat-lbl-sub">ROUTINE CALLS HANDLED BY FORMEXAI</span>
                  </div>
                  <div className="stat-card stat-team">
                    <span className="stat-big-num">3</span>
                    <span className="stat-lbl-sub">ACTIONS REQUIRING TEAM ATTENTION</span>
                  </div>
                </div>
                <div className="workload-caption">
                  <span>96.5% of repetitive operational interruptions filtered autonomously</span>
                </div>
              </div>
            </div>

            {/* 06 Available Around the Clock */}
            <div className="editorial-value-card">
              <div className="card-meta-row">
                <span className="editorial-num">06</span>
                <span className="editorial-tag">CONTINUOUS COVERAGE</span>
              </div>
              <h4 className="editorial-title">Available Around the Clock</h4>
              <p className="editorial-body">
                24/7/365 reliability that answers after-hours, on weekends, and on holidays without overtime staffing costs.
              </p>

              {/* Visual Demonstration: Coverage Schedule */}
              <div className="value-mini-demo coverage-schedule-demo">
                <div className="coverage-shifts-row">
                  <span className="shift-chip">AFTER-HOURS</span>
                  <span className="shift-chip">WEEKENDS</span>
                  <span className="shift-chip">HOLIDAYS</span>
                </div>
                <div className="coverage-active-status">
                  <span className="status-beacon-dot" />
                  <span className="coverage-status-text">100% OPERATIONAL COVERAGE ACTIVE</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Downward Conduit leading into Operational Lifecycle */}
      <div className="section-conduit-strip" aria-hidden="true">
        <div className="conduit-line">
          <span className="conduit-glow-dot" />
        </div>
      </div>

    </section>
  );
}
