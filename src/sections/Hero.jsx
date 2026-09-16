/**
 * FORMEXAI — Product-Led Hero Section
 * HVAC & Home Services Focus
 * 
 * Eyebrow: AI FRONT DESK FOR HVAC & HOME SERVICES
 * Headline: Every call answered. Every opportunity handled.
 * Supporting Copy: FormexAI answers customer calls, understands what they need,
 * qualifies the job, books appointments and routes important conversations — even when your team is busy.
 * Primary CTA: Hear FormexAI
 * Secondary CTA: Book a Demo
 * 
 * Right Column: Real FormexAI call/product interface (labeled as Product Preview / Illustrative Example)
 */

import React, { useState, useEffect } from 'react';

export function Hero({ onOpenDemoModal }) {
  // Animation progression across realistic call stages
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToDemo = (e) => {
    e.preventDefault();
    const demoEl = document.getElementById('demo');
    if (demoEl) {
      demoEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/hear-formexai';
    }
  };

  return (
    <section className="hero-section-root" aria-label="Hero">
      <div className="hero-container">
        
        <div className="hero-grid">
          
          {/* Left Column: Core Value Proposition */}
          <div className="hero-content-col">
            
            <div className="hero-eyebrow-pill">
              <span className="eyebrow-dot" />
              <span className="eyebrow-label">AI FRONT DESK FOR HVAC &amp; HOME SERVICES</span>
            </div>

            <h1 className="hero-display-heading">
              Every call answered.<br />
              <span className="heading-emphasis">Every opportunity handled.</span>
            </h1>

            <p className="hero-supporting-text">
              FormexAI answers customer calls, understands what they need, qualifies the job, books appointments and routes important conversations — even when your team is busy.
            </p>

            {/* Standard CTA Buttons */}
            <div className="hero-actions-group">
              <a
                href="#demo"
                onClick={handleScrollToDemo}
                className="btn btn-primary btn-lg"
              >
                Hear FormexAI
              </a>
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="btn btn-secondary btn-lg"
              >
                Book a Demo
              </button>
            </div>

            {/* Product Proof Highlights */}
            <div className="hero-proof-strip">
              <div className="proof-item">
                <span className="proof-bullet">•</span>
                <span>Under 1-second answer</span>
              </div>
              <div className="proof-item">
                <span className="proof-bullet">•</span>
                <span>Two-way calendar booking</span>
              </div>
              <div className="proof-item">
                <span className="proof-bullet">•</span>
                <span>Direct on-call escalation</span>
              </div>
            </div>

          </div>

          {/* Right Column: Custom FormexAI Product Visualization */}
          <div className="hero-product-col">
            <div className="hero-product-interface" role="region" aria-label="FormexAI Live Interface Preview">
              
              {/* Product Window Header */}
              <div className="product-window-header">
                <div className="window-brand-cluster">
                  <span className="product-brand-icon">F</span>
                  <div className="product-brand-meta">
                    <span className="product-title">FORMEXAI</span>
                    <span className="product-subtitle">AI RECEPTIONIST</span>
                  </div>
                </div>

                <div className="product-header-right">
                  <span className="preview-demo-tag">PRODUCT PREVIEW</span>
                  <div className="product-live-badge">
                    <span className="live-status-dot" />
                    <span className="live-status-text">INCOMING CALL</span>
                  </div>
                </div>
              </div>

              {/* Caller Phone Bar */}
              <div className="caller-meta-bar">
                <div className="meta-cell">
                  <span className="meta-lbl">INCOMING LINE</span>
                  <span className="meta-val">+1 (214) 555-0182</span>
                </div>
                <div className="meta-cell">
                  <span className="meta-lbl">ROUTING</span>
                  <span className="meta-val meta-val-active">Connected · Forwarded Line</span>
                </div>
              </div>

              {/* Dialogue & Detection Pane */}
              <div className="product-dialogue-pane">
                
                {/* 1. Customer Utterance */}
                <div className="dialogue-bubble customer-bubble bubble-visible">
                  <div className="bubble-speaker-tag">
                    <span>CUSTOMER (CALLER)</span>
                    <span className="timestamp-tag">10:48 AM</span>
                  </div>
                  <p className="bubble-text">
                    "My AC stopped blowing cold air and it's already 85 degrees inside."
                  </p>
                </div>

                {/* 2. FormexAI Structured Extraction Card */}
                <div className="detected-specs-card">
                  <div className="specs-top-row">
                    <span className="specs-title-lbl">DETECTED INTENT &amp; CRITERIA</span>
                    <span className="specs-rule-tag">Rule #04 (Cooling Outage)</span>
                  </div>

                  <div className="specs-grid-three">
                    <div className="spec-item">
                      <span className="spec-k">SERVICE</span>
                      <span className="spec-v highlight-v">AC Repair</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-k">URGENCY</span>
                      <span className="spec-v urgent-v">High (Heat Risk)</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-k">LOCATION</span>
                      <span className="spec-v">Dallas, TX</span>
                    </div>
                  </div>
                </div>

                {/* 3. Real-Time Execution Status */}
                <div className="execution-status-box">
                  <div className="status-checklist">
                    <div className="check-item verified">
                      <span className="check-icon">✓</span>
                      <span>Lead qualified &amp; service territory verified</span>
                    </div>
                    <div className="check-item verified">
                      <span className="check-icon">✓</span>
                      <span>Calendar queried (Google Cal / Dispatch route)</span>
                    </div>
                    <div className={`check-item ${activeStep >= 1 ? 'verified' : 'pending'}`}>
                      <span className="check-icon">{activeStep >= 1 ? '✓' : '○'}</span>
                      <span>Appointment booked: Today · 2:30 PM (Priority Slot)</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Card Footer */}
              <div className="product-card-footer">
                <div className="signal-status-group">
                  <span className="mini-signal-dot" />
                  <span className="signal-status-text">Autonomous Lead Capture Active</span>
                </div>
                <a
                  href="#demo"
                  onClick={handleScrollToDemo}
                  className="interactive-demo-link"
                >
                  Talk to FormexAI →
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Downward Continuous Call Signal */}
      <div className="hero-signal-conduit" aria-hidden="true">
        <div className="signal-rail">
          <span className="signal-pulse-dot" />
        </div>
        <span className="conduit-label">CALL WORKFLOW CONDUIT</span>
      </div>

    </section>
  );
}
