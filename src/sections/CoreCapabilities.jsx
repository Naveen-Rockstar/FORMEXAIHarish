/**
 * FORMEXAI — Core Capabilities Section
 * Section: Business Action Capabilities
 * Heading: Capabilities designed for daily operations.
 * 
 * Grouped into 6 business actions (not a generic feature grid):
 * - ANSWER (Every call gets an immediate response)
 * - UNDERSTAND (Every conversation becomes structured information)
 * - QUALIFY (Identify service type, urgency, location and customer requirements)
 * - BOOK (Schedule appointments based on availability)
 * - ROUTE (Transfer or escalate conversations that need human involvement)
 * - FOLLOW UP (Keep customers informed and recover missed opportunities)
 */

import React from 'react';

export function CoreCapabilities() {
  const capabilities = [
    {
      action: 'ANSWER',
      tagline: 'Every call gets an immediate response.',
      description: 'Zero ring delays or voicemail dumps. FormexAI answers in under one second with your custom brand name and articulation.',
      uiExample: {
        label: 'INBOUND PICKUP',
        badge: '< 0.4s Answer',
        text: 'Apex Heating & Air line answered · 24/7/365 active'
      }
    },
    {
      action: 'UNDERSTAND',
      tagline: 'Every conversation becomes structured information.',
      description: 'Separates natural speech into actionable parameters — distinguishing emergencies from routine pricing and maintenance questions.',
      uiExample: {
        label: 'SPEECH PARSING',
        badge: 'Natural Dialogue',
        text: 'Classified: AC Diagnostic · Refrigerant leak suspected'
      }
    },
    {
      action: 'QUALIFY',
      tagline: 'Identify service type, urgency, location and requirements.',
      description: 'Validates that the customer is within your service territory, determines homeowner status, and captures equipment symptoms.',
      uiExample: {
        label: 'FIELD QUALIFICATION',
        badge: 'Territory Validated',
        text: 'Dallas Metro (25-mi radius) · System age: 9 yrs'
      }
    },
    {
      action: 'BOOK',
      tagline: 'Schedule appointments based on availability.',
      description: 'Connects to your scheduling tools to check available technician slots, offer preferred arrival windows, and lock the job.',
      uiExample: {
        label: 'CALENDAR LOCK',
        badge: 'Two-Way Sync',
        text: 'Slot confirmed: Today @ 2:30 PM (Google Calendar)'
      }
    },
    {
      action: 'ROUTE',
      tagline: 'Transfer or escalate conversations that need humans.',
      description: 'When gas leaks, active water flooding, or high-value commercial accounts call, FormexAI bridges the line directly to your on-call supervisor.',
      uiExample: {
        label: 'WARM ESCALATION',
        badge: 'Zero Hold Time',
        text: 'Bridged to on-call manager line with caller notes'
      }
    },
    {
      action: 'FOLLOW UP',
      tagline: 'Keep customers informed and recover missed jobs.',
      description: 'Sends instant SMS appointment confirmations to the homeowner, logs complete records to your dispatch board, and eliminates manual data entry.',
      uiExample: {
        label: 'DISPATCH SYNC',
        badge: 'SMS Delivered',
        text: 'Confirmation text sent to caller · Ticket #8842 logged'
      }
    }
  ];

  return (
    <section className="capabilities-section-root" id="capabilities" aria-label="Core Capabilities">
      <div className="container">
        
        {/* Section Header */}
        <div className="capabilities-header-cluster">
          <span className="eyebrow">Core Capabilities</span>
          <h2 className="capabilities-headline">
            Capabilities organized around business actions.
          </h2>
          <p className="capabilities-subhead">
            Not an overwhelming list of AI buzzwords. Six core actions that keep your phone lines answered, your calendar filled, and your technicians working.
          </p>
        </div>

        {/* 6 Capability Action Cards */}
        <div className="capabilities-grid">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="capability-action-card">
              <div className="cap-header-row">
                <span className="cap-action-badge">{cap.action}</span>
                <span className="cap-index-tag">0{idx + 1}</span>
              </div>

              <h3 className="cap-title">{cap.tagline}</h3>
              <p className="cap-description">{cap.description}</p>

              {/* Realistic Miniature UI Snippet */}
              <div className="cap-mini-ui-snippet">
                <div className="mini-snippet-head">
                  <span className="snippet-lbl">{cap.uiExample.label}</span>
                  <span className="snippet-badge">{cap.uiExample.badge}</span>
                </div>
                <div className="mini-snippet-body">
                  <span className="snippet-bullet">●</span>
                  <span className="snippet-val">{cap.uiExample.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
