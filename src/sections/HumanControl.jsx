/**
 * FORMEXAI — Human Control Section
 * Section: Human-in-the-Loop Operations
 * Heading: AI handles the routine. Your team stays in control.
 * 
 * Demonstrates:
 * - Routine request → AI handles automatically
 * - Appointment → AI books into calendar
 * - Urgent issue → Team alerted immediately
 * - Complex question → Warm human transfer
 */

import React from 'react';

export function HumanControl() {
  const controlTiers = [
    {
      badge: 'ROUTINE INQUIRIES',
      type: 'Routine Request',
      trigger: 'Customer asks about operating hours, service territory, diagnostic fee, or maintenance scope.',
      action: 'AI handles automatically',
      actionClass: 'action-ai',
      detail: 'Answers immediately from your verified business policies. Zero staff interruption.',
      icon: '🤖'
    },
    {
      badge: 'SCHEDULED REPAIRS',
      type: 'Appointment Booking',
      trigger: 'Customer requests a cooling repair, seasonal tune-up, or estimate visit.',
      action: 'AI books into calendar',
      actionClass: 'action-book',
      detail: 'Queries live technician availability, confirms slot with customer, and sends SMS confirmation.',
      icon: '📅'
    },
    {
      badge: 'HIGH-PRIORITY ESCALATION',
      type: 'Urgent Situation',
      trigger: 'Customer reports active water leak, freezing temps without heat, or electrical burning smell.',
      action: 'On-call team alerted immediately',
      actionClass: 'action-urgent',
      detail: 'Sends high-priority SMS/Slack alert and triggers telephone bridge to on-call manager.',
      icon: '⚡'
    },
    {
      badge: 'CUSTOM INQUIRIES',
      type: 'Complex Question',
      trigger: 'Customer has unique commercial requirements, warranty disputes, or custom equipment inquiries.',
      action: 'Warm transfer to human staff',
      actionClass: 'action-transfer',
      detail: 'Bridges call to office team with complete briefing notes so caller never repeats themselves.',
      icon: '👥'
    }
  ];

  return (
    <section className="human-control-section-root" id="human-control" aria-label="Human Control">
      <div className="container">
        
        {/* Section Header */}
        <div className="control-header-cluster">
          <span className="eyebrow">Human Oversight &amp; Control</span>
          <h2 className="control-headline">
            AI handles the routine.<br />
            <span className="control-headline-accent">Your team stays in control.</span>
          </h2>
          <p className="control-subhead">
            FormexAI does not replace your team. It protects their time. Routine inquiries and bookings are handled autonomously, while critical and complex conversations are directed straight to your people.
          </p>
        </div>

        {/* 4-Tier Triage Flow Cards */}
        <div className="control-tiers-grid">
          {controlTiers.map((tier, idx) => (
            <div key={idx} className="control-tier-card">
              <div className="tier-top-row">
                <span className="tier-badge">{tier.badge}</span>
                <span className="tier-icon">{tier.icon}</span>
              </div>

              <h3 className="tier-type-title">{tier.type}</h3>
              
              <div className="tier-trigger-box">
                <span className="trigger-lbl">SITUATION:</span>
                <p className="trigger-text">{tier.trigger}</p>
              </div>

              <div className="tier-arrow-indicator">↓</div>

              <div className={`tier-action-box ${tier.actionClass}`}>
                <span className="action-lbl">RESOLUTION:</span>
                <h4 className="action-title">{tier.action}</h4>
                <p className="action-desc">{tier.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contractor Control Reassurance Banner */}
        <div className="control-reassurance-banner">
          <div className="reassurance-icon">🛡️</div>
          <div className="reassurance-text">
            <h4>You define the rules. You can change them at any time.</h4>
            <p>
              Before FormexAI answers a single live customer call, you configure your escalation numbers, service territories, and booking constraints. If you ever want to adjust a rule or take over a call, your team has complete administrative control.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
