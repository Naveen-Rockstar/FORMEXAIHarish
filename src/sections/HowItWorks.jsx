/**
 * FORMEXAI — How It Works Section
 * Section: Operational Call Journey
 * Heading: From ringing phone to booked job.
 * 
 * Continuous Operational Flow (7 Stages):
 * 01 CALL - Customer calls the business.
 * 02 ANSWER - FormexAI answers immediately.
 * 03 UNDERSTAND - It identifies the customer's request.
 * 04 QUALIFY - It collects relevant information.
 * 05 BOOK - It checks availability and schedules the job.
 * 06 ROUTE - Urgent or complex conversations are transferred or escalated.
 * 07 FOLLOW UP - The customer and team receive the appropriate confirmation/details.
 */

import React, { useState } from 'react';

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const stages = [
    {
      num: '01',
      name: 'CALL',
      title: 'Customer calls the business.',
      desc: 'Homeowner rings your existing business phone number via standard carrier line.',
      telemetry: 'INBOUND_SIP · 10:48 AM',
      actionTitle: 'Inbound Line Signal',
      actionDetail: 'Call connects via existing carrier forwarding (*72). No phone number change required.',
      badge: 'Step 01 Carrier'
    },
    {
      num: '02',
      name: 'ANSWER',
      title: 'FormexAI answers immediately.',
      desc: 'Answers in under one second with your custom brand name, articulate tone, and greeting.',
      telemetry: 'LATENCY < 0.4s · PICKUP CONFIRMED',
      actionTitle: 'Instant Voice Greeting',
      actionDetail: '"Thanks for calling Northstar Heating & Air. How can I help you today?"',
      badge: 'Step 02 Reception'
    },
    {
      num: '03',
      name: 'UNDERSTAND',
      title: 'It identifies the customer\'s request.',
      desc: 'Natural language engine separates cooling emergencies, tune-ups, quotes, and routine questions.',
      telemetry: 'INTENT_CLASSIFIED · AC_REPAIR',
      actionTitle: 'Intent Classification',
      actionDetail: 'Caller states AC is blowing hot air. FormexAI identifies diagnostic repair triage.',
      badge: 'Step 03 AI Triage'
    },
    {
      num: '04',
      name: 'QUALIFY',
      title: 'It collects relevant information.',
      desc: 'Captures caller name, property address, system age, and specific equipment symptoms without keypad menus.',
      telemetry: 'TERRITORY_VALIDATED · DALLAS_TX',
      actionTitle: 'Customer Data Capture',
      actionDetail: 'Verified address within 25-mi service radius. Homeowner notes air handler making buzzing sound.',
      badge: 'Step 04 Qualification'
    },
    {
      num: '05',
      name: 'BOOK',
      title: 'It checks availability and schedules the job.',
      desc: 'Connects directly to your Google Calendar or scheduling tool to offer and lock verified slots.',
      telemetry: 'SLOT_LOCKED · TODAY_2:30PM',
      actionTitle: 'Live Calendar Lock',
      actionDetail: 'Direct two-way availability query confirms technician dispatch window for 2:30 PM today.',
      badge: 'Step 05 Scheduling'
    },
    {
      num: '06',
      name: 'ROUTE',
      title: 'Urgent or complex conversations are transferred or escalated.',
      desc: 'Gas leaks, active water damage, or VIP accounts trigger immediate warm phone transfers to on-call staff.',
      telemetry: 'RULE_EVALUATED · DISPATCH_OK',
      actionTitle: 'Conditional Rule Engine',
      actionDetail: 'If emergency threshold is exceeded, FormexAI bridges the line directly to on-call technician with notes.',
      badge: 'Step 06 Escalation'
    },
    {
      num: '07',
      name: 'FOLLOW UP',
      title: 'The customer and team receive the appropriate details.',
      desc: 'Instant confirmation SMS sent to caller; call summary, recording, and ticket logged into your workflow.',
      telemetry: 'SMS_DISPATCHED · TICKET_SYNCED',
      actionTitle: 'Two-Way Confirmation',
      actionDetail: 'Homeowner receives appointment text; office manager receives dispatch summary with zero manual entry.',
      badge: 'Step 07 Completion'
    }
  ];

  const current = stages[activeStep];
  const progressPercent = (activeStep / (stages.length - 1)) * 100;

  return (
    <section className="how-it-works-root" id="how-it-works" aria-label="How FormexAI Works">
      <div className="container">
        
        {/* Section Header */}
        <div className="how-header-cluster">
          <span className="eyebrow">Operational Workflow</span>
          <h2 className="how-headline">From ringing phone to booked job.</h2>
          <p className="how-subhead">
            FormexAI guides every customer conversation through seven disciplined operational stages so zero opportunities slip away.
          </p>
        </div>

        {/* 7-Step Continuous Operational Flow Container */}
        <div className="operational-journey-wrapper">
          
          {/* Top Stage Rail with Connected Progress Line */}
          <div className="flow-rail-container">
            <div className="flow-rail-bg-line" />
            <div
              className="flow-rail-active-line"
              style={{ width: `${progressPercent}%` }}
            />

            <div className="flow-rail-nodes-row">
              {stages.map((st, idx) => {
                const isActive = idx === activeStep;
                const isPast = idx < activeStep;
                return (
                  <button
                    key={st.num}
                    type="button"
                    className={`flow-rail-btn ${isActive ? 'active-node' : ''} ${isPast ? 'past-node' : ''}`}
                    onClick={() => setActiveStep(idx)}
                    aria-label={`Jump to stage ${st.num}: ${st.name}`}
                  >
                    <div className="flow-node-bullet">
                      <span className="flow-bullet-dot" />
                    </div>
                    <div className="flow-node-text">
                      <span className="flow-node-num">{st.num}</span>
                      <span className="flow-node-name">{st.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Detailed Breakdown Panel */}
          <div className="flow-stage-detail-card">
            
            {/* Left Column: Stage Explanation */}
            <div className="stage-explanation-col">
              <div className="stage-top-meta">
                <span className="stage-badge-pill">STAGE {current.num} OF 07</span>
                <span className="stage-badge-name">{current.badge}</span>
              </div>
              <h3 className="stage-main-title">{current.title}</h3>
              <p className="stage-main-desc">{current.desc}</p>
              
              <div className="stage-stepper-controls">
                <button
                  type="button"
                  className="step-nav-btn prev"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                >
                  ← Previous Stage
                </button>
                <button
                  type="button"
                  className="step-nav-btn next"
                  disabled={activeStep === stages.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(stages.length - 1, prev + 1))}
                >
                  Next Stage →
                </button>
              </div>
            </div>

            {/* Right Column: Execution Monitor Terminal */}
            <div className="stage-execution-col">
              <div className="stage-terminal-box">
                <div className="terminal-topbar">
                  <div className="terminal-dots">
                    <span className="t-dot" />
                    <span className="t-dot" />
                    <span className="t-dot" />
                  </div>
                  <span className="terminal-title">WORKFLOW EXECUTION · STAGE {current.num}</span>
                  <span className="terminal-tag">{current.name}</span>
                </div>

                <div className="terminal-body">
                  <div className="terminal-row">
                    <span className="t-key">SIGNAL_STATE:</span>
                    <span className="t-val t-val-accent">{current.telemetry}</span>
                  </div>

                  <div className="terminal-row">
                    <span className="t-key">ACTION:</span>
                    <span className="t-val">{current.actionTitle}</span>
                  </div>

                  <div className="terminal-log-output">
                    <span className="log-prefix">&gt;</span>
                    <span className="log-text">{current.actionDetail}</span>
                  </div>

                  <div className="terminal-waveform-bar" aria-hidden="true">
                    {stages.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-segment ${idx <= activeStep ? 'active' : ''}`}
                      />
                    ))}
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
