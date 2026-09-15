/**
 * FORMEXAI — Implementation Process Section
 * Section: Implementation Process
 * 
 * Steps:
 * 01 Tell Formexai about your business
 * 02 Configure your receptionist
 * 03 Connect your workflows
 * 04 Let Formexai handle the conversation
 * 
 * Dynamic Product Visualizations Beside Timeline:
 * - STEP 01: Business Knowledge Base interface with checkmarks & verified FAQs
 * - STEP 02: Receptionist Configuration interface with controls, name, greeting, rules
 * - STEP 03: Workflow Connections diagram with live status indicators
 * - STEP 04: Voice System Live Telemetry with carrier connection & execution state
 */

import React, { useState } from 'react';

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Tell Formexai about your business.',
      sub: 'Define services, service areas, operating hours, pricing guidance and common customer questions.',
      visualTitle: 'BUSINESS KNOWLEDGE BASE',
      badge: 'Step 01 Config'
    },
    {
      num: '02',
      title: 'Configure your receptionist.',
      sub: 'Choose your receptionist’s name, tone, greeting and custom business rules.',
      visualTitle: 'RECEPTIONIST CONFIGURATION',
      badge: 'Step 02 Config'
    },
    {
      num: '03',
      title: 'Connect your workflows.',
      sub: 'Link your calendar system, CRM, phone routing and team notification channels.',
      visualTitle: 'WORKFLOW CONNECTIONS',
      badge: 'Step 03 Webhooks'
    },
    {
      num: '04',
      title: 'Let Formexai handle the conversation.',
      sub: 'Forward your inbound business line and let Formexai handle calls according to your rules.',
      visualTitle: 'LIVE VOICE SYSTEM',
      badge: 'Step 04 Production'
    }
  ];

  const current = steps[activeStep];

  return (
    <section className="how-it-works-root" id="how-it-works" aria-label="Implementation Timeline">
      <div className="container">
        
        {/* Section Header */}
        <div className="how-header-cluster">
          <span className="eyebrow">Implementation Process</span>
          <h2 className="how-headline">From setup to live calls in one week.</h2>
          <p className="how-subhead">
            Zero changes to your phone numbers. Our team configures your knowledge base, connects your calendar, and tests live calls with your staff before launch.
          </p>
        </div>

        {/* 2-Column Stepped Timeline + Dynamic Visual */}
        <div className="timeline-interactive-grid">
          
          {/* Left Column: Connected Vertical Timeline */}
          <div className="timeline-stepper-column">
            <div className="timeline-vertical-track">
              
              {/* Progress Line */}
              <div className="track-line-bg" />
              <div
                className="track-line-progress"
                style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />

              {/* Stepper Entries */}
              <div className="timeline-entries-list">
                {steps.map((st, idx) => {
                  const isActive = idx === activeStep;
                  const isPast = idx < activeStep;
                  return (
                    <div
                      key={st.num}
                      className={`timeline-entry ${isActive ? 'entry-active' : ''} ${isPast ? 'entry-past' : ''}`}
                      onClick={() => setActiveStep(idx)}
                      tabIndex={0}
                      role="button"
                      aria-pressed={isActive}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') setActiveStep(idx);
                      }}
                    >
                      <div className="entry-node-pin">
                        <span className="node-outer-glow" />
                        <span className="node-inner-dot" />
                      </div>

                      <div className="entry-card-content">
                        <div className="entry-num-row">
                          <span className="entry-num-tag">{st.num}</span>
                          {isActive && <span className="entry-active-chip">Active Step</span>}
                        </div>
                        <h3 className="entry-title">{st.title}</h3>
                        <p className="entry-sub">{st.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right Column: Dynamic Operations Interface Beside the Timeline */}
          <div className="timeline-visual-column">
            <div className="dynamic-timeline-monitor">
              
              {/* Monitor Window Topbar */}
              <div className="monitor-topbar">
                <div className="monitor-dots">
                  <span className="m-dot red" />
                  <span className="m-dot yellow" />
                  <span className="m-dot green" />
                </div>
                <span className="monitor-window-title">{current.visualTitle}</span>
                <span className="monitor-step-badge">{current.badge}</span>
              </div>

              {/* Monitor Body Content — Specific Miniature Product UI Per Step */}
              <div className="monitor-body-content">
                
                {/* STEP 01: BUSINESS KNOWLEDGE BASE INTERFACE */}
                {activeStep === 0 && (
                  <div className="operations-panel kb-panel">
                    <div className="panel-status-header">
                      <span className="panel-title-text">BUSINESS KNOWLEDGE BASE</span>
                      <span className="kb-synced-pill">
                        <span className="synced-dot" />
                        <span>● SYNCED</span>
                      </span>
                    </div>

                    <div className="kb-sub-section">
                      <div className="kb-sec-label">SERVICES CATALOG</div>
                      <div className="kb-service-row">
                        <span className="service-name">Emergency AC Repair</span>
                        <span className="check-badge">✓</span>
                      </div>
                      <div className="kb-service-row">
                        <span className="service-name">Annual Tune-Up</span>
                        <span className="check-badge">✓</span>
                      </div>
                      <div className="kb-service-row">
                        <span className="service-name">Diagnostic Service</span>
                        <span className="check-badge">✓</span>
                      </div>
                    </div>

                    <div className="kb-divider" />

                    <div className="kb-grid-two">
                      <div className="kb-cell">
                        <div className="kb-sec-label">OPERATING HOURS</div>
                        <div className="kb-val-bold">Mon–Fri · 7:00 AM – 7:00 PM</div>
                      </div>
                      <div className="kb-cell">
                        <div className="kb-sec-label">SERVICE TERRITORY</div>
                        <div className="kb-val-bold">Greater Metro (25-mi radius)</div>
                      </div>
                    </div>

                    <div className="kb-divider" />

                    <div className="kb-faqs-strip">
                      <span className="kb-sec-label">VERIFIED FAQS</span>
                      <span className="kb-faq-count">14 verified business answers</span>
                    </div>

                    <div className="kb-status-footer">
                      <span className="pulse-green-dot" />
                      <span className="status-copy">Knowledge verified · Ready for voice binding</span>
                    </div>
                  </div>
                )}

                {/* STEP 02: RECEPTIONIST CONFIGURATION INTERFACE */}
                {activeStep === 1 && (
                  <div className="operations-panel config-panel">
                    <div className="panel-status-header">
                      <span className="panel-title-text">RECEPTIONIST CONFIGURATION</span>
                      <span className="config-ready-pill">
                        <span className="ready-dot" />
                        <span>● READY</span>
                      </span>
                    </div>

                    <div className="config-fields-list">
                      <div className="config-field-row">
                        <span className="cfg-key">NAME</span>
                        <span className="cfg-pill">Alex</span>
                      </div>
                      <div className="config-field-row">
                        <span className="cfg-key">VOICE</span>
                        <span className="cfg-val">Professional (Articulate, Warm)</span>
                      </div>
                      <div className="config-field-row greeting-row">
                        <span className="cfg-key">CUSTOM GREETING</span>
                        <div className="cfg-greeting-box">
                          "Thanks for calling Northstar Heating &amp; Air. How can I help you today?"
                        </div>
                      </div>
                      <div className="config-field-row">
                        <span className="cfg-key">BUSINESS TONE</span>
                        <div className="tone-tags-row">
                          <span className="tone-chip">Calm</span>
                          <span className="tone-chip">Helpful</span>
                          <span className="tone-chip">Direct</span>
                        </div>
                      </div>
                      <div className="config-field-row">
                        <span className="cfg-key">RULES EVALUATED</span>
                        <span className="cfg-rules-badge">12 active rules loaded</span>
                      </div>
                    </div>

                    <div className="config-status-footer">
                      <span className="pulse-orange-dot" />
                      <span className="status-copy">Receptionist profile active · Persona calibrated</span>
                    </div>
                  </div>
                )}

                {/* STEP 03: WORKFLOW CONNECTIONS DIAGRAM */}
                {activeStep === 2 && (
                  <div className="operations-panel workflows-panel">
                    <div className="panel-status-header">
                      <span className="panel-title-text">WORKFLOW DISPATCH ARCHITECTURE</span>
                      <span className="hub-status-pill">
                        <span className="hub-dot" />
                        <span>● 4 CONNECTED</span>
                      </span>
                    </div>

                    <div className="workflow-connectors-diagram">
                      <div className="wf-hub-marker">
                        <span className="wf-hub-icon">F</span>
                        <span className="wf-hub-label">FORMEXAI ENGINE</span>
                      </div>

                      <div className="wf-routes-list">
                        <div className="wf-route-item connected">
                          <div className="wf-route-left">
                            <span className="wf-icon">📅</span>
                            <span className="wf-name">CALENDAR</span>
                          </div>
                          <div className="wf-route-status">
                            <span className="wf-status-dot" />
                            <span>CONNECTED · Two-way slot lock</span>
                          </div>
                        </div>

                        <div className="wf-route-item connected">
                          <div className="wf-route-left">
                            <span className="wf-icon">💼</span>
                            <span className="wf-name">CRM &amp; JOBS</span>
                          </div>
                          <div className="wf-route-status">
                            <span className="wf-status-dot" />
                            <span>CONNECTED · Work order creation</span>
                          </div>
                        </div>

                        <div className="wf-route-item connected">
                          <div className="wf-route-left">
                            <span className="wf-icon">☎</span>
                            <span className="wf-name">PHONE ROUTING</span>
                          </div>
                          <div className="wf-route-status">
                            <span className="wf-status-dot" />
                            <span>CONNECTED · Carrier forwarding</span>
                          </div>
                        </div>

                        <div className="wf-route-item connected">
                          <div className="wf-route-left">
                            <span className="wf-icon">⚡</span>
                            <span className="wf-name">TEAM ALERTS</span>
                          </div>
                          <div className="wf-route-status">
                            <span className="wf-status-dot" />
                            <span>CONNECTED · Slack &amp; SMS dispatch</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="wf-status-footer">
                      <span className="pulse-green-dot" />
                      <span className="status-copy">Two-way webhooks established · Instant synchronization</span>
                    </div>
                  </div>
                )}

                {/* STEP 04: VOICE SYSTEM LIVE TELEMETRY */}
                {activeStep === 3 && (
                  <div className="operations-panel live-voice-panel">
                    <div className="panel-status-header">
                      <span className="panel-title-text">VOICE SYSTEM PRODUCTION</span>
                      <span className="telemetry-live-pill">
                        <span className="live-pulse-dot" />
                        <span>● ACTIVE INBOUND</span>
                      </span>
                    </div>

                    <div className="voice-telemetry-metrics">
                      <div className="v-metric-row">
                        <span className="v-metric-key">PHONE LINE</span>
                        <span className="v-metric-val active-val">● ACTIVE (Carrier Connected)</span>
                      </div>
                      <div className="v-metric-row">
                        <span className="v-metric-key">INBOUND CALLS</span>
                        <span className="v-metric-val">Listening autonomously</span>
                      </div>
                      <div className="v-metric-row">
                        <span className="v-metric-key">INTENT</span>
                        <span className="v-metric-val accent-val">Classifying in real time</span>
                      </div>
                      <div className="v-metric-row">
                        <span className="v-metric-key">ACTION</span>
                        <span className="v-metric-val success-val">Executing business rules</span>
                      </div>
                      <div className="v-metric-row">
                        <span className="v-metric-key">CALL STATE</span>
                        <span className="v-metric-val">Connected (00:48 · Slot confirmed)</span>
                      </div>
                    </div>

                    <div className="voice-live-log">
                      <span className="log-caret">&gt;</span>
                      <span className="log-msg">Inbound call handled successfully. Appointment booked for 2:30 PM today. Confirmation SMS sent.</span>
                    </div>

                    <div className="voice-status-footer">
                      <span className="pulse-green-dot" />
                      <span className="status-copy">System live 24/7/365 · Zero hold times</span>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Downward Conduit into Ecosystem Section */}
      <div className="section-conduit-strip" aria-hidden="true">
        <div className="conduit-line">
          <span className="conduit-glow-dot" />
        </div>
      </div>

    </section>
  );
}
