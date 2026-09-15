/**
 * FORMEXAI — Product-Led Hero Section
 * Two-Column Layout:
 * - Left: Eyebrow, Headline, Value Copy, Standard-sized CTAs (Get Started & Hear Formexai)
 * - Right: Real Formexai Product Interface with animated state transitions:
 *   INCOMING CALL → Customer Transcript → Formexai Listening → Understanding Request →
 *   Intent Detected → Action: Checking Availability → Result: Appointment Ready
 * - Visual Signal Line flowing down into the next section
 */

import React, { useState, useEffect } from 'react';
import { Link } from '../router.jsx';

export function Hero() {
  // Animation state: 0 = Incoming, 1 = Customer speaks, 2 = Formexai understands, 3 = Intent detected, 4 = Action check, 5 = Result ready
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section-root" aria-label="Hero">
      <div className="hero-container">
        
        <div className="hero-grid">
          
          {/* Left Column: Core Value Proposition */}
          <div className="hero-content-col">
            
            <div className="hero-eyebrow-pill">
              <span className="eyebrow-dot" />
              <span className="eyebrow-label">FORMEXAI AI RECEPTIONIST</span>
            </div>

            <h1 className="hero-display-heading">
              EVERY CALL ANSWERED. <br />
              <span className="heading-emphasis">EVERY CUSTOMER TAKEN CARE OF.</span>
            </h1>

            <p className="hero-supporting-text">
              Formexai answers customer calls, understands what they need, handles routine requests, books appointments, captures information and connects the right people — around the clock.
            </p>

            {/* Standard CTA Buttons */}
            <div className="hero-actions-group">
              <Link to="/get-started" className="btn btn-primary btn-lg">
                Get Started
              </Link>
              <Link to="/hear-formexai" className="btn btn-secondary btn-lg">
                Hear Formexai
              </Link>
            </div>

            {/* Product Proof Highlights */}
            <div className="hero-proof-strip">
              <div className="proof-item">
                <span className="proof-bullet">•</span>
                <span>Under 1-second pickup</span>
              </div>
              <div className="proof-item">
                <span className="proof-bullet">•</span>
                <span>Two-way calendar booking</span>
              </div>
              <div className="proof-item">
                <span className="proof-bullet">•</span>
                <span>Warm staff transfers</span>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Formexai Product Visualization */}
          <div className="hero-product-col">
            <div className="hero-product-interface" role="region" aria-label="Formexai Live Interface Preview">
              
              {/* Product Window Header */}
              <div className="product-window-header">
                <div className="window-brand-cluster">
                  <span className="product-brand-icon">F</span>
                  <div className="product-brand-meta">
                    <span className="product-title">FORMEXAI</span>
                    <span className="product-subtitle">AI RECEPTIONIST</span>
                  </div>
                </div>

                <div className="product-live-badge">
                  <span className="live-status-dot" />
                  <span className="live-status-text">LIVE CALL</span>
                </div>
              </div>

              {/* Caller Meta Bar */}
              <div className="caller-meta-bar">
                <div className="meta-cell">
                  <span className="meta-lbl">CALLER</span>
                  <span className="meta-val">David Miller · Inbound Line</span>
                </div>
                <div className="meta-cell">
                  <span className="meta-lbl">STATUS</span>
                  <span className="meta-val meta-val-active">
                    {activeStep === 0 && 'Connecting inbound line...'}
                    {activeStep === 1 && 'Caller speaking'}
                    {activeStep === 2 && 'Formexai listening & analyzing'}
                    {activeStep === 3 && 'Intent classified'}
                    {activeStep === 4 && 'Querying live schedule'}
                    {activeStep === 5 && 'Appointment confirmed'}
                  </span>
                </div>
              </div>

              {/* Dynamic Dialogue & Processing Flow */}
              <div className="product-dialogue-pane">
                
                {/* 1. Customer Speech Bubble */}
                <div className={`dialogue-bubble customer-bubble ${activeStep >= 1 ? 'bubble-visible' : ''}`}>
                  <div className="bubble-speaker-tag">
                    <span>CUSTOMER</span>
                    <span className="timestamp-tag">10:42 AM</span>
                  </div>
                  <p className="bubble-text">
                    "I need someone to come out and take a look at my AC."
                  </p>
                </div>

                {/* 2. Formexai Real-time Processing Card */}
                <div className={`formexai-processing-card ${activeStep >= 2 ? 'card-active' : ''}`}>
                  <div className="processing-header">
                    <div className="processing-speaker-tag">
                      <span className="speaker-bullet" />
                      <span>FORMEXAI</span>
                    </div>
                    <span className="processing-indicator">
                      {activeStep === 2 && 'Understanding request...'}
                      {activeStep >= 3 && 'Intent detected'}
                    </span>
                  </div>

                  {activeStep === 2 && (
                    <div className="analyzing-shimmer-bar">
                      <span className="shimmer-pulse" />
                    </div>
                  )}

                  {/* 3. Intent Detected Badge */}
                  {activeStep >= 3 && (
                    <div className="intent-detected-row">
                      <span className="intent-lbl">INTENT DETECTED</span>
                      <span className="intent-tag">SERVICE APPOINTMENT (AC DIAGNOSTIC)</span>
                    </div>
                  )}

                  {/* 4. Action in Progress */}
                  {activeStep >= 4 && (
                    <div className="action-step-row">
                      <div className="action-tag-pill">
                        <span className="action-spinner" />
                        <span>ACTION: Checking availability...</span>
                      </div>
                      <span className="action-calendar-note">Two-way Google Calendar Sync</span>
                    </div>
                  )}

                  {/* 5. Result Ready */}
                  {activeStep >= 5 && (
                    <div className="result-ready-card">
                      <div className="result-header">
                        <span className="result-check">✓</span>
                        <span className="result-title">RESULT: Appointment ready</span>
                      </div>
                      <div className="result-details-row">
                        <span className="result-slot">Tomorrow · 2:30 PM (Priority Slot)</span>
                        <span className="result-sms-tag">SMS dispatched to caller</span>
                      </div>
                    </div>
                  )}

                </div>

              </div>

              {/* Bottom Signal Footer */}
              <div className="product-card-footer">
                <div className="signal-status-group">
                  <span className="mini-signal-dot" />
                  <span className="signal-status-text">Autonomous Call Handling Active</span>
                </div>
                <Link to="/hear-formexai" className="interactive-demo-link">
                  Hear Live Voice Demo →
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Downward Continuous Call Signal (Flows into Section 9) */}
      <div className="hero-signal-conduit" aria-hidden="true">
        <div className="signal-rail">
          <span className="signal-pulse-dot" />
        </div>
        <span className="conduit-label">INBOUND CALL SIGNAL</span>
      </div>

    </section>
  );
}
