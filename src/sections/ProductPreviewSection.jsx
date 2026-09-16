/**
 * FORMEXAI — Product Preview Section
 * Section: Operational Visibility & Dashboard
 * Heading: See what your team sees.
 * 
 * Features:
 * - Overview Metrics (Calls 128, Answered 124, Qualified Leads 47, Appointments 31)
 *   Labeled clearly as PRODUCT PREVIEW / ILLUSTRATIVE EXAMPLE (Demo Data Rule)
 * - Recent Activity Feed (Sarah Mitchell, Michael R., David R.)
 * - Deep Call Detail Experience for Sarah Mitchell (Summary, preferences, automated AI actions)
 */

import React, { useState } from 'react';

export function ProductPreviewSection() {
  const [selectedCallId, setSelectedCallId] = useState('call-1');

  const recentCalls = [
    {
      id: 'call-1',
      customer: 'Sarah Mitchell',
      phone: '+1 (214) 555-0182',
      service: 'AC Repair',
      priority: 'High',
      status: 'Qualified · Booked',
      time: '10:48 AM',
      location: 'Dallas, TX',
      summary: 'Customer reports AC blowing warm air and unit making faint buzzing sound. Requested earliest afternoon visit.',
      preferredTime: 'Today after 2:00 PM',
      confirmedAppointment: 'Today @ 2:30 PM (Priority Slot)',
      actions: [
        'Customer qualified (Residential cooling outage verified)',
        'Availability checked (Google Calendar slot query)',
        'Appointment booked (Today @ 2:30 PM locked)',
        'Confirmation sent (Automated SMS dispatched to caller)'
      ]
    },
    {
      id: 'call-2',
      customer: 'Michael R.',
      phone: '+1 (214) 555-8492',
      service: 'System Replacement',
      priority: 'Normal',
      status: 'Estimate Requested',
      time: '9:15 AM',
      location: 'Plano, TX',
      summary: 'Homeowner inquiring about 16-SEER heat pump replacement for 2,400 sqft home. Existing unit is 14 years old.',
      preferredTime: 'Tomorrow morning',
      confirmedAppointment: 'Tomorrow @ 10:00 AM (Sales Estimate)',
      actions: [
        'Equipment age & square footage captured',
        'Sales consultant availability matched',
        'Estimate consultation scheduled',
        'Lead profile created in CRM'
      ]
    },
    {
      id: 'call-3',
      customer: 'David R.',
      phone: '+1 (214) 555-3920',
      service: 'Emergency Water Leak',
      priority: 'Emergency',
      status: 'Transferred to Tech',
      time: 'Yesterday 6:30 PM',
      location: 'Richardson, TX',
      summary: 'Condensation drain line overflowing through second-floor drywall. Triggered emergency escalation rule.',
      preferredTime: 'Immediate emergency',
      confirmedAppointment: 'Bridge to On-Call Tech',
      actions: [
        'Rule #08 (Water damage risk) evaluated',
        'Caller advised on main shutoff valve',
        'Warm phone transfer to on-call manager line',
        'Briefing notes sent to dispatch Slack channel'
      ]
    }
  ];

  const activeCall = recentCalls.find((c) => c.id === selectedCallId) || recentCalls[0];

  return (
    <section className="product-preview-section-root" id="product-preview" aria-label="Product Preview">
      <div className="container">
        
        {/* Section Header */}
        <div className="preview-header-cluster">
          <span className="eyebrow">Operational Visibility</span>
          <h2 className="preview-headline">See what your team sees.</h2>
          <p className="preview-subhead">
            FormexAI gives business owners, dispatchers, and office managers complete oversight. Every conversation is transcribed, qualified, and organized into structured dispatch records.
          </p>
        </div>

        {/* Product Workspace Interface Canvas */}
        <div className="dashboard-interface-frame" role="region" aria-label="Example Software Dashboard">
          
          {/* Dashboard Window Header Bar */}
          <div className="dashboard-window-topbar">
            <div className="window-dots">
              <span className="w-dot dot-red" />
              <span className="w-dot dot-yellow" />
              <span className="w-dot dot-green" />
            </div>
            <div className="window-system-title">
              FormexAI Operational Console — Apex Heating &amp; Air
            </div>
            <span className="preview-illustrative-pill">
              PRODUCT PREVIEW · ILLUSTRATIVE EXAMPLE
            </span>
          </div>

          {/* Top Operational Metrics Overview */}
          <div className="dashboard-metrics-strip">
            <div className="metric-box">
              <span className="m-label">TOTAL CALLS (PERIOD)</span>
              <span className="m-value">128</span>
              <span className="m-sub">Inbound line volume</span>
            </div>
            <div className="metric-box highlight-box">
              <span className="m-label">ANSWERED BY FORMEXAI</span>
              <span className="m-value">124</span>
              <span className="m-sub text-green">97% First-ring pickup</span>
            </div>
            <div className="metric-box">
              <span className="m-label">QUALIFIED LEADS</span>
              <span className="m-value">47</span>
              <span className="m-sub">Verified service needs</span>
            </div>
            <div className="metric-box highlight-orange">
              <span className="m-label">APPOINTMENTS BOOKED</span>
              <span className="m-value">31</span>
              <span className="m-sub text-orange">Locked into calendar</span>
            </div>
          </div>

          {/* Split View: Recent Activity List + Call Detail Experience */}
          <div className="dashboard-split-workspace">
            
            {/* Left: Recent Activity Feed */}
            <div className="activity-feed-column">
              <div className="feed-header-row">
                <span className="feed-title">RECENT CALL ACTIVITY</span>
                <span className="feed-meta">Select call to inspect</span>
              </div>

              <div className="activity-items-list" role="list">
                {recentCalls.map((call) => {
                  const isSelected = call.id === selectedCallId;
                  return (
                    <button
                      key={call.id}
                      type="button"
                      className={`activity-item-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedCallId(call.id)}
                      role="listitem"
                      aria-pressed={isSelected}
                    >
                      <div className="item-head">
                        <span className="item-caller-name">{call.customer}</span>
                        <span className="item-timestamp">{call.time}</span>
                      </div>
                      <div className="item-service-row">
                        <span className="item-service-tag">{call.service}</span>
                        <span className={`item-priority-badge ${call.priority.toLowerCase()}`}>
                          {call.priority}
                        </span>
                      </div>
                      <div className="item-status-pill">{call.status}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Deep Call Detail Experience (Sarah Mitchell by default) */}
            <div className="call-detail-column">
              <div className="detail-card-panel">
                
                {/* Detail Card Header */}
                <div className="detail-panel-top">
                  <div>
                    <div className="detail-eyebrow">CALL DETAIL RECORD</div>
                    <h3 className="detail-customer-name">{activeCall.customer}</h3>
                    <div className="detail-contact-meta">
                      <span>{activeCall.phone}</span>
                      <span className="meta-sep">•</span>
                      <span>{activeCall.location}</span>
                    </div>
                  </div>

                  <div className="detail-badge-group">
                    <span className="service-chip">{activeCall.service}</span>
                    <span className={`priority-chip ${activeCall.priority.toLowerCase()}`}>
                      {activeCall.priority} PRIORITY
                    </span>
                  </div>
                </div>

                {/* Call Summary Block */}
                <div className="detail-section-block">
                  <span className="block-title">CALL SUMMARY</span>
                  <p className="summary-paragraph">{activeCall.summary}</p>
                </div>

                {/* Appointment Information */}
                <div className="detail-grid-two">
                  <div className="detail-cell">
                    <span className="cell-k">PREFERRED WINDOW</span>
                    <span className="cell-v">{activeCall.preferredTime}</span>
                  </div>
                  <div className="detail-cell highlight-cell">
                    <span className="cell-k">CONFIRMED APPOINTMENT</span>
                    <span className="cell-v text-orange">{activeCall.confirmedAppointment}</span>
                  </div>
                </div>

                {/* Automated AI Actions Executed */}
                <div className="detail-actions-block">
                  <span className="block-title">AI ACTIONS EXECUTED</span>
                  <div className="actions-checklist">
                    {activeCall.actions.map((act, idx) => (
                      <div key={idx} className="action-row-verified">
                        <span className="check-bullet">✓</span>
                        <span className="action-text">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Footnote on Demo Data */}
          <div className="dashboard-footnote-strip">
            <span className="demo-notice-icon">ℹ️</span>
            <span>
              <strong>Product Preview:</strong> The records shown above illustrate FormexAI's dispatch layout and automated actions. Actual call volume, lead qualification, and appointment metrics depend on your business's customer call traffic.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
