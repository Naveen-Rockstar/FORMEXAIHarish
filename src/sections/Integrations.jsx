/**
 * FORMEXAI — Ecosystem & Connectivity Section
 * Section: Operational Architecture & Central Hub
 * 
 * Flow:
 * CUSTOMER CALL → FORMEXAI CENTRAL HUB → CALENDAR / CRM / MESSAGING / TEAM
 * 
 * Animated Signal Paths:
 * CALL RECEIVED (Orange) → UNDERSTAND (Blue) → ACT (Green / Destination Systems)
 * 
 * 3 Interactive Scenarios:
 * 1. Calendar Booking Flow (Shows miniature Appointment Confirmed card)
 * 2. CRM Record Logging (Shows miniature ServiceTitan Work Order record)
 * 3. Urgent Team Transfer (Shows miniature Warm Emergency Escalation alert)
 */

import React, { useState } from 'react';

export function Integrations() {
  const [activeScenario, setActiveScenario] = useState('booking'); // booking | crm | emergency

  const scenarios = {
    booking: {
      id: 'booking',
      title: 'Appointment Scheduling Flow',
      flowSummary: 'CALL → INTENT → AVAILABILITY CHECK → SLOT SELECTED → CALENDAR BOOKED',
      activeTarget: 'calendar',
      outcomeType: 'calendar',
      steps: [
        { actor: 'CUSTOMER', text: '"I\'d like to schedule an appointment for AC repair."' },
        { actor: 'FORMEXAI', text: 'Understands request: Urgent cooling diagnostic inquiry.' },
        { actor: 'CALENDAR', text: 'Scans Google Calendar & Outlook routes: 2:30 PM slot matched.' },
        { actor: 'ACTION', text: 'Locks calendar window & sends instant SMS confirmation.' }
      ]
    },
    crm: {
      id: 'crm',
      title: 'Automated CRM Record Logging',
      flowSummary: 'CALL → CUSTOMER DETAILS → SERVICE REQUEST → CRM RECORD CREATED',
      activeTarget: 'crm',
      outcomeType: 'crm',
      steps: [
        { actor: 'CUSTOMER', text: '"My name is David Miller at 42 Oak Ridge Terrace."' },
        { actor: 'FORMEXAI', text: 'Captures caller identity, verified address, and symptom.' },
        { actor: 'CRM', text: 'Creates customer profile & opens Work Order #8842 in ServiceTitan.' },
        { actor: 'TEAM', text: 'Dispatch board refreshed with caller history and diagnostic notes.' }
      ]
    },
    emergency: {
      id: 'emergency',
      title: 'Urgent Warm Staff Transfer',
      flowSummary: 'CALL → EMERGENCY DETECTED → RULE APPLIED → ON-CALL TEAM ALERTED',
      activeTarget: 'team',
      outcomeType: 'emergency',
      steps: [
        { actor: 'CUSTOMER', text: '"We have water spraying from a burst pipe in the basement!"' },
        { actor: 'FORMEXAI', text: 'Detects critical emergency criteria according to business rules.' },
        { actor: 'PHONE', text: 'Initiates immediate warm phone transfer to on-call manager line.' },
        { actor: 'TEAM', text: 'Supervisor briefed with caller notes before line connects.' }
      ]
    }
  };

  const current = scenarios[activeScenario];

  return (
    <section className="integrations-section-root" id="integrations" aria-label="Ecosystem and Connectivity">
      <div className="container">
        
        {/* Section Header */}
        <div className="integrations-header-cluster">
          <span className="eyebrow">Ecosystem &amp; Connectivity</span>
          <h2 className="integrations-headline">Formexai connects to your entire operation.</h2>
          <p className="integrations-subhead">
            A central conversation hub. Formexai takes natural phone calls and instantly syncs appointments, customer data, and alerts with the tools your business already relies on.
          </p>
        </div>

        {/* Central Formexai Connection Architecture Frame */}
        <div className="ecosystem-graph-frame" role="region" aria-label="Central Connection System Graph">
          
          {/* Top Control Bar: Scenario Switcher */}
          <div className="graph-scenario-switcher" role="tablist" aria-label="Simulate connection scenarios">
            <span className="switcher-lbl">LIVE FLOW SIMULATION:</span>
            <button
              type="button"
              role="tab"
              aria-selected={activeScenario === 'booking'}
              className={`scenario-pill ${activeScenario === 'booking' ? 'active' : ''}`}
              onClick={() => setActiveScenario('booking')}
            >
              1. Calendar Booking Flow
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeScenario === 'crm'}
              className={`scenario-pill ${activeScenario === 'crm' ? 'active' : ''}`}
              onClick={() => setActiveScenario('crm')}
            >
              2. CRM Record Logging
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeScenario === 'emergency'}
              className={`scenario-pill ${activeScenario === 'emergency' ? 'active' : ''}`}
              onClick={() => setActiveScenario('emergency')}
            >
              3. Urgent Team Transfer
            </button>
          </div>

          {/* Architecture Visual Diagram: Top-Down Operational Flow */}
          <div className="architecture-diagram-canvas">
            
            {/* Top Inbound Call Source */}
            <div className="diagram-top-source">
              <div className="source-node-box">
                <span className="source-icon">☎</span>
                <div className="source-info">
                  <span className="source-label">INCOMING CUSTOMER CALL</span>
                  <span className="source-meta">Inbound Carrier Line · Carrier SIP</span>
                </div>
                <span className="source-signal-pulse" />
              </div>
            </div>

            {/* Downward Conduit into Formexai Hub */}
            <div className="diagram-vertical-conduit">
              <span className="conduit-signal-tracer orange-tracer" />
            </div>

            {/* Central Formexai Hub Engine */}
            <div className="diagram-central-engine">
              <div className="engine-card-box">
                <div className="engine-top-badge">
                  <span className="engine-pulse-dot" />
                  <span className="engine-badge-text">FORMEXAI OPERATIONAL HUB</span>
                </div>
                <h4 className="engine-action-title">One Conversation → Multi-System Execution</h4>
                <div className="engine-phases-row">
                  <span className="phase-pill phase-call">1. CALL RECEIVED</span>
                  <span className="phase-arrow">→</span>
                  <span className="phase-pill phase-understand">2. UNDERSTAND</span>
                  <span className="phase-arrow">→</span>
                  <span className="phase-pill phase-act">3. ACT</span>
                </div>
              </div>
            </div>

            {/* Downward Branching Connectors SVG */}
            <div className="diagram-branch-connectors" aria-hidden="true">
              <svg className="branch-svg" viewBox="0 0 800 60" preserveAspectRatio="none">
                <path d="M400 0 L400 30 L100 30 L100 60" className="branch-path" />
                <path d="M400 0 L400 30 L300 30 L300 60" className="branch-path" />
                <path d="M400 0 L400 30 L500 30 L500 60" className="branch-path" />
                <path d="M400 0 L400 30 L700 30 L700 60" className="branch-path" />
              </svg>
            </div>

            {/* Destination System Nodes Row */}
            <div className="diagram-destinations-row">
              
              {/* 1. Calendar Node */}
              <div className={`destination-node-card ${current.activeTarget === 'calendar' ? 'active-destination' : ''}`}>
                <div className="node-head">
                  <span className="node-icon">📅</span>
                  <span className="node-title">CALENDAR</span>
                </div>
                <div className="node-status-line">
                  <span className="status-dot" />
                  <span>{current.activeTarget === 'calendar' ? 'SLOT BOOKED' : 'CONNECTED'}</span>
                </div>
                <div className="node-subhead">Google Cal · Outlook</div>
              </div>

              {/* 2. CRM Node */}
              <div className={`destination-node-card ${current.activeTarget === 'crm' ? 'active-destination' : ''}`}>
                <div className="node-head">
                  <span className="node-icon">💼</span>
                  <span className="node-title">CRM &amp; JOBS</span>
                </div>
                <div className="node-status-line">
                  <span className="status-dot" />
                  <span>{current.activeTarget === 'crm' ? 'RECORD CREATED' : 'CONNECTED'}</span>
                </div>
                <div className="node-subhead">ServiceTitan · Jobber</div>
              </div>

              {/* 3. Messaging Node */}
              <div className="destination-node-card">
                <div className="node-head">
                  <span className="node-icon">💬</span>
                  <span className="node-title">MESSAGING</span>
                </div>
                <div className="node-status-line">
                  <span className="status-dot" />
                  <span>CONFIRMED</span>
                </div>
                <div className="node-subhead">Instant SMS Dispatched</div>
              </div>

              {/* 4. Team Dispatch Node */}
              <div className={`destination-node-card ${current.activeTarget === 'team' ? 'active-destination' : ''}`}>
                <div className="node-head">
                  <span className="node-icon">👥</span>
                  <span className="node-title">TEAM ALERTS</span>
                </div>
                <div className="node-status-line">
                  <span className="status-dot" />
                  <span>{current.activeTarget === 'team' ? 'STAFF ALERTED' : 'CONNECTED'}</span>
                </div>
                <div className="node-subhead">Slack · Warm Phone Transfer</div>
              </div>

            </div>

          </div>

          {/* Scenario Event Trail & Miniature Product Outcome Card */}
          <div className="scenario-trail-window">
            
            <div className="trail-topbar">
              <div className="trail-meta">
                <span className="trail-tag">DATA TRAIL:</span>
                <strong className="trail-title">{current.title}</strong>
              </div>
              <span className="trail-flow-summary">{current.flowSummary}</span>
            </div>

            <div className="trail-content-grid">
              
              {/* Step Sequence Narrative */}
              <div className="trail-steps-sequence">
                {current.steps.map((step, idx) => (
                  <div key={idx} className="trail-step-item">
                    <div className="step-actor-col">
                      <span className="actor-badge">{step.actor}</span>
                      {idx < current.steps.length - 1 && <span className="actor-arrow">↓</span>}
                    </div>
                    <div className="step-text-col">
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Miniature Product Outcome Card */}
              <div className="trail-outcome-col">
                
                {/* 1. Calendar Booking Outcome Card */}
                {current.outcomeType === 'calendar' && (
                  <div className="mini-product-card appointment-card">
                    <div className="card-top-status">
                      <span className="status-badge success">✓ APPOINTMENT CONFIRMED</span>
                      <span className="timestamp">10:48 AM</span>
                    </div>
                    <div className="appointment-main-info">
                      <div className="info-time">Today @ 2:30 PM</div>
                      <div className="info-desc">Emergency AC Cooling Diagnostic</div>
                    </div>
                    <div className="appointment-meta-details">
                      <div className="meta-detail-row">
                        <span className="detail-key">CALENDAR:</span>
                        <span className="detail-val">Google Calendar Locked (Slot #4)</span>
                      </div>
                      <div className="meta-detail-row">
                        <span className="detail-key">SMS CONFIRMATION:</span>
                        <span className="detail-val">Delivered to (212) 581-9042</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. CRM Record Logging Card */}
                {current.outcomeType === 'crm' && (
                  <div className="mini-product-card crm-record-card">
                    <div className="card-top-status">
                      <span className="status-badge crm">✓ CRM WORK ORDER CREATED</span>
                      <span className="timestamp">#8842</span>
                    </div>
                    <div className="crm-main-info">
                      <div className="customer-name">David Miller</div>
                      <div className="customer-address">42 Oak Ridge Terrace</div>
                    </div>
                    <div className="crm-meta-details">
                      <div className="meta-detail-row">
                        <span className="detail-key">PLATFORM:</span>
                        <span className="detail-val">ServiceTitan · Field Ops</span>
                      </div>
                      <div className="meta-detail-row">
                        <span className="detail-key">SYMPTOMS:</span>
                        <span className="detail-val">AC running, blowing warm air</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Urgent Team Transfer Card */}
                {current.outcomeType === 'emergency' && (
                  <div className="mini-product-card emergency-alert-card">
                    <div className="card-top-status">
                      <span className="status-badge urgent">⚡ EMERGENCY ESCALATION</span>
                      <span className="timestamp">PRIORITY_1</span>
                    </div>
                    <div className="emergency-main-info">
                      <div className="emergency-title">Warm Transfer to On-Call Supervisor</div>
                      <div className="emergency-reason">Rule #08 Triggered: Active Water Leak</div>
                    </div>
                    <div className="emergency-meta-details">
                      <div className="meta-detail-row">
                        <span className="detail-key">STAFF BRIEFING:</span>
                        <span className="detail-val">Briefing notes transferred to line</span>
                      </div>
                      <div className="meta-detail-row">
                        <span className="detail-key">HOLD TIME:</span>
                        <span className="detail-val">0 seconds · Direct bridge</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>

          {/* Carrier Forwarding Banner */}
          <div className="graph-carrier-footnote">
            <span className="carrier-badge">NO PHONE NUMBER CHANGES</span>
            <p className="carrier-body">
              Works seamlessly with your existing line via standard unconditional (*72) or conditional after-hours forwarding across AT&amp;T, Verizon, T-Mobile, RingCentral, Vonage, and SIP trunks.
            </p>
          </div>

        </div>

      </div>

      {/* Downward Conduit into Next Section */}
      <div className="section-conduit-strip" aria-hidden="true">
        <div className="conduit-line">
          <span className="conduit-glow-dot" />
        </div>
      </div>

    </section>
  );
}
