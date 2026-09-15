/**
 * FORMEXAI — Integrations Page (/integrations)
 * Connects Formexai to calendars, CRMs, phone carriers, and messaging tools.
 */

import React from 'react';
import { Integrations } from '../sections/Integrations.jsx';
import { Link } from '../router.jsx';

export function IntegrationsPage({ onOpenDemoModal }) {
  return (
    <div className="subpage-root">
      {/* Header */}
      <section className="subpage-hero-section">
        <div className="container text-center">
          <span className="eyebrow">Connected Systems</span>
          <h1 className="subpage-display-title">
            Connect Formexai to the Tools You Already Use
          </h1>
          <p className="subpage-lead-para">
            Two-way calendar sync, automated CRM ticket creation, carrier forwarding, and instant SMS alerts.
          </p>
          <div className="subpage-header-actions">
            <Link to="/get-started" className="btn btn-primary btn-md">
              Get Started
            </Link>
            <Link to="/hear-formexai" className="btn btn-secondary btn-md">
              Hear Voice Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Main Integrations Grid */}
      <Integrations />

      {/* Carrier Forwarding Deep Dive */}
      <section className="carrier-guide-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Telephony Architecture</span>
            <h2>How Call Forwarding Works</h2>
            <p className="sub-intro">
              You never need to change your existing business phone number. Activate Formexai through standard carrier call forwarding.
            </p>
          </div>

          <div className="forwarding-methods-grid">
            <div className="method-card">
              <span className="method-badge">Option 01</span>
              <h4>24/7 Full Answering</h4>
              <p>Forward all incoming calls unconditionally to Formexai. Ideal for businesses with no full-time receptionist or high volume.</p>
              <div className="carrier-code-box">Carrier feature: *72 + [Your Formexai Line]</div>
            </div>

            <div className="method-card">
              <span className="method-badge">Option 02</span>
              <h4>Overflow &amp; Busy Line Answering</h4>
              <p>Your team answers when available. If the line rings more than 3 times or is busy, calls automatically roll over to Formexai.</p>
              <div className="carrier-code-box">Carrier feature: *71 + [Your Formexai Line]</div>
            </div>

            <div className="method-card">
              <span className="method-badge">Option 03</span>
              <h4>After-Hours &amp; Weekend Coverage</h4>
              <p>Calls forward to Formexai starting at 5:00 PM and on weekends, capturing emergencies and booking next-day slots.</p>
              <div className="carrier-code-box">Scheduled auto-forward in your VoIP portal</div>
            </div>
          </div>

          <div className="page-cta-strip">
            <div className="cta-strip-inner">
              <h3>Have a custom VoIP or SIP trunk setup?</h3>
              <p>Our telephony engineers support direct SIP interconnects, Twilio trunks, and enterprise ring-groups.</p>
              <div className="cta-strip-btns">
                <Link to="/get-started" className="btn btn-primary btn-lg">
                  Request Telephony Consultation →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
