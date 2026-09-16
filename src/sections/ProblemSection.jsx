/**
 * FORMEXAI — Problem Section
 * Section: The Missed-Call Problem in Home Services
 * Heading: Your team can't answer every call. FormexAI can.
 * 
 * Demonstrates 6 realistic day-to-day situations HVAC & home service businesses face:
 * - Team is on another line
 * - Technician is working in an attic / field
 * - Office is closed / after hours
 * - Multiple simultaneous calls during weather spikes
 * - Customer needs an urgent emergency response
 * - Customer is ready to book a job right now
 */

import React from 'react';

export function ProblemSection() {
  const problems = [
    {
      num: '01',
      title: 'Your team is already on another call.',
      situation: 'Front desk is talking to a client, checking stock, or dispatching a technician. The second call goes to voicemail.',
      impact: '80% of residential callers do not leave a message when sent to voicemail.',
      statusLabel: 'INCOMING CALL MISSED'
    },
    {
      num: '02',
      title: 'Your technicians are working in the field.',
      situation: 'Hands deep in an air handler, on a 20-foot ladder, or in an attic. They cannot safely answer or schedule calls.',
      impact: 'High-value diagnostic requests get delayed or completely forgotten.',
      statusLabel: 'FIELD WORK INTERRUPTION'
    },
    {
      num: '03',
      title: 'Calls arrive after office hours & weekends.',
      situation: 'Cooling outages spike on Friday nights and 95°F Sunday afternoons when your office is closed.',
      impact: 'Emergency repair opportunities immediately call your nearest competitor.',
      statusLabel: 'AFTER-HOURS LOSS'
    },
    {
      num: '04',
      title: 'Multiple calls arrive at the exact same minute.',
      situation: 'The first seasonal heat wave or winter freeze hits town. Five homeowners call within 90 seconds.',
      impact: 'Single-line capacity is overwhelmed; callers receive busy signals or voicemail.',
      statusLabel: 'PEAK SURGE OVERFLOW'
    },
    {
      num: '05',
      title: 'Customer has an urgent emergency.',
      situation: 'Water leaking through the ceiling from a backed-up condensation line, or a furnace down in freezing temps.',
      impact: 'Requires instant human escalation according to rules, not a 4-hour voicemail callback.',
      statusLabel: 'CRITICAL ESCALATION'
    },
    {
      num: '06',
      title: 'Customer is ready to book right now.',
      situation: 'The homeowner has credit card in hand and wants a confirmed 2:30 PM diagnostic slot.',
      impact: 'If nobody confirms the slot within 2 minutes, they book with the next shop on Google.',
      statusLabel: 'LOST SERVICE REVENUE'
    }
  ];

  return (
    <section className="problem-section-root" id="problem" aria-label="The Business Problem">
      <div className="container">
        
        {/* Section Header */}
        <div className="problem-header-cluster">
          <span className="eyebrow">The Real Business Problem</span>
          <h2 className="problem-headline">
            Your team can't answer every call.<br />
            <span className="problem-headline-accent">FormexAI can.</span>
          </h2>
          <p className="problem-subhead">
            When a homeowner's AC breaks down, they don't wait on hold or leave voicemails. They call the next contractor on Google. Here is where jobs get lost every single day:
          </p>
        </div>

        {/* 6 Realistic Situations Grid */}
        <div className="problem-scenarios-grid">
          {problems.map((prob) => (
            <div key={prob.num} className="problem-scenario-card">
              <div className="card-top-indicator">
                <span className="prob-num-tag">{prob.num}</span>
                <span className="prob-status-pill">{prob.statusLabel}</span>
              </div>
              <h3 className="prob-card-title">{prob.title}</h3>
              <p className="prob-situation-text">{prob.situation}</p>
              <div className="prob-impact-box">
                <span className="impact-k">BUSINESS IMPACT:</span>
                <span className="impact-v">{prob.impact}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Takeaway Banner */}
        <div className="problem-resolution-banner">
          <div className="banner-left">
            <span className="resolution-badge">FORMEXAI SOLUTION</span>
            <h4 className="banner-title">Zero missed calls. Instant qualification. Automatic booking.</h4>
            <p className="banner-desc">
              FormexAI answers forwarded lines in under one second, talks to the customer with natural conversation, follows your business rules, and locks confirmed jobs into your calendar.
            </p>
          </div>
          <div className="banner-right">
            <div className="telemetry-mini-pill">
              <span className="pulse-dot-green" />
              <span>100% INBOUND LINE COVERAGE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
