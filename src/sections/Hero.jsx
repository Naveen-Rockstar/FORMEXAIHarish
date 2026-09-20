/**
 * FORMEXAI — Hero Section (Centered Editorial Composition)
 * 
 * Layout Architecture:
 * - Centered vertical reading flow (No left/right columns)
 * - Eyebrow -> Large Headline -> Controlled Max-Width Description -> CTAs
 * - Centered Proof/Stat Row with dividers
 * - Centered Industry Context Strip
 */

import React from 'react';

export function Hero({ onOpenDemoModal }) {
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
    <section className="hero-editorial-root centered-hero-root" aria-label="FormexAI Hero">
      <div className="hero-editorial-container hero-centered-container">
        
        {/* Centered Main Content Block */}
        <div className="hero-content-centered">
          
          {/* Eyebrow with orange accent bar */}
          <div className="hero-eyebrow-line-wrap centered-eyebrow">
            <span className="eyebrow-accent-bar" aria-hidden="true" />
            <span className="hero-eyebrow-heading">AI RECEPTIONIST FOR CUSTOMER CALLS</span>
            <span className="eyebrow-accent-bar" aria-hidden="true" />
          </div>

          {/* Headline with FormexAI Orange Highlight */}
          <h1 className="hero-headline-editorial centered-headline">
            Every call answered.<br />
            <span className="headline-orange-span">Every opportunity handled.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-description-editorial centered-description">
            FormexAI answers customer calls, understands what they need, qualifies requests, books appointments and routes important conversations — even when your team is busy.
          </p>

          {/* CTA Group */}
          <div className="hero-cta-button-row centered-cta-row">
            <a
              href="#demo"
              onClick={handleScrollToDemo}
              className="btn-hero-hear"
              aria-label="Hear FormexAI voice demo"
            >
              <span className="cta-waveform-glyph" aria-hidden="true">
                <span className="cg-bar cg-1" />
                <span className="cg-bar cg-2" />
                <span className="cg-bar cg-3" />
                <span className="cg-bar cg-4" />
              </span>
              <span>Hear FormexAI</span>
            </a>

            <button
              type="button"
              onClick={onOpenDemoModal}
              className="btn-hero-demo"
              aria-label="Book a Product Demo"
            >
              Book a Demo
            </button>
          </div>

          {/* Supporting Micro-copy */}
          <div className="hero-cta-footnote centered-footnote">
            Try the AI voice. No signup needed.
          </div>

          {/* Horizontal Separator */}
          <div className="hero-center-divider" aria-hidden="true" />

          {/* 3-Item Benefit Proof Row */}
          <div className="hero-benefits-strip centered-benefits">
            <div className="benefit-item">
              <span className="benefit-title">24/7</span>
              <span className="benefit-sub">Always on</span>
            </div>

            <span className="benefit-sep" aria-hidden="true" />

            <div className="benefit-item">
              <span className="benefit-title">No missed calls</span>
              <span className="benefit-sub">Turn calls into opportunities</span>
            </div>

            <span className="benefit-sep" aria-hidden="true" />

            <div className="benefit-item">
              <span className="benefit-title">Your team in control</span>
              <span className="benefit-sub">Escalate when needed</span>
            </div>
          </div>

          {/* Horizontal Separator */}
          <div className="hero-center-divider" aria-hidden="true" />

          {/* Bottom Industry Context Strip */}
          <div className="hero-industries-bar centered-industries">
            <span className="ind-lead-label">BUILT FOR BUSINESSES LIKE YOURS:</span>
            <div className="ind-tags-row">
              <span className="ind-tag">Home Services</span>
              <span className="ind-dot" aria-hidden="true">•</span>
              <span className="ind-tag">Healthcare</span>
              <span className="ind-dot" aria-hidden="true">•</span>
              <span className="ind-tag">Dental</span>
              <span className="ind-dot" aria-hidden="true">•</span>
              <span className="ind-tag">Beauty &amp; Wellness</span>
              <span className="ind-dot" aria-hidden="true">•</span>
              <span className="ind-tag">Professional Services</span>
              <span className="ind-dot" aria-hidden="true">•</span>
              <span className="ind-tag">Trades</span>
              <span className="ind-dot" aria-hidden="true">•</span>
              <span className="ind-tag muted">And more</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
