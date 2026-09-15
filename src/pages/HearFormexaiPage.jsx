/**
 * FORMEXAI — Dedicated Hear Formexai Page (/hear-formexai)
 * Features the complete interactive voice demonstration with two-speaker audio synthesis,
 * animated waveforms, multi-industry switching, and call outcomes.
 */

import React from 'react';
import { HearFormexaiSection } from '../sections/HearFormexaiSection.jsx';
import { Link } from '../router.jsx';

export function HearFormexaiPage({ onOpenDemoModal }) {
  return (
    <div className="subpage-root">
      
      {/* Page Header */}
      <section className="subpage-hero-section">
        <div className="container text-center">
          <span className="eyebrow">Flagship Demonstration</span>
          <h1 className="subpage-display-title">
            Experience Formexai Live
          </h1>
          <p className="subpage-lead-para">
            Listen to realistic two-speaker phone conversations across HVAC, Dental, Home Services, Retail, and Real Estate. Formexai answers naturally, qualifies requests, and executes actions.
          </p>
        </div>
      </section>

      {/* Main Interactive Demo Console */}
      <HearFormexaiSection onOpenDemoModal={onOpenDemoModal} />

      {/* Behind the Conversation Architecture */}
      <section className="demo-architecture-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Conversational Architecture</span>
            <h2>How the Voice Receptionist Operates</h2>
            <p className="sub-intro">
              Formexai processes natural spoken language in real time without forcing customers through keypad trees.
            </p>
          </div>

          <div className="architecture-grid">
            <div className="arch-card">
              <span className="arch-num">01</span>
              <h4>Immediate Inbound Pickup</h4>
              <p>Under one second latency. Greets callers using your brand's unique name, speaking tone, and custom greeting.</p>
            </div>
            <div className="arch-card">
              <span className="arch-num">02</span>
              <h4>Contextual Comprehension</h4>
              <p>Understands trade symptoms, medical urgency, customer names, addresses, and specific scheduling preferences.</p>
            </div>
            <div className="arch-card">
              <span className="arch-num">03</span>
              <h4>Live Calendar &amp; Routing Sync</h4>
              <p>Queries technician routes or provider availability in real time to lock confirmed appointments without double-booking.</p>
            </div>
            <div className="arch-card">
              <span className="arch-num">04</span>
              <h4>Warm Human Escalation</h4>
              <p>Instantly transfers complex emergencies or specific staff requests directly to your team with caller briefing notes.</p>
            </div>
          </div>

          <div className="page-cta-strip">
            <div className="cta-strip-inner">
              <h3>Ready to configure this voice for your business?</h3>
              <p>Setup takes approximately one week. We build your knowledge base and conduct thorough test calls with your team.</p>
              <div className="cta-strip-btns">
                <Link to="/get-started" className="btn btn-primary btn-lg">
                  Get Started →
                </Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-lg">
                  See How It Works
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
