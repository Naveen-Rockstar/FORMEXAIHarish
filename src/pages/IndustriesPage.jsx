/**
 * FORMEXAI — Master Industries Page Component (/industries & /industries/:sector)
 * Premium B2B Editorial SaaS Design Architecture inspired by Smith.ai & modern enterprise web standards.
 * Supports Overview mode (/industries) and Dedicated Sector pages (/industries/home-services, etc.).
 */

import React, { useEffect } from 'react';
import { useRouter, Link } from '../router.jsx';
import { SECTOR_MAP, ALL_SECTORS } from '../data/industriesData.js';
import { 
  HelpCircle, 
  CheckCircle2, 
  Calendar, 
  GitFork, 
  PhoneCall, 
  BrainCircuit, 
  ClipboardCheck, 
  CalendarCheck, 
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Zap,
  PhoneForwarded,
  MessageSquare,
  Users
} from 'lucide-react';

export function IndustriesPage({ onOpenDemoModal }) {
  const { currentPath } = useRouter();

  // Determine current mode & target sector
  const rawSegment = currentPath.startsWith('/industries/')
    ? currentPath.replace(/^\/industries\//, '').trim().toLowerCase()
    : null;

  const sectorData = rawSegment && SECTOR_MAP[rawSegment] ? SECTOR_MAP[rawSegment] : null;

  // SEO updates
  useEffect(() => {
    if (sectorData) {
      document.title = `FormexAI for ${sectorData.name} | AI Receptionist Solution`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          `FormexAI AI receptionist for ${sectorData.name}. ${sectorData.heroSubhead}`
        );
      }
    } else {
      document.title = 'FormexAI AI Receptionist for Businesses | Industry Solutions';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'FormexAI AI receptionist for businesses that answers calls, qualifies customers, books appointments and routes conversations across Home Services, Healthcare, Dental, Beauty, Professional Services and Trades.'
        );
      }
    }
  }, [sectorData]);

  const capabilities = [
    {
      num: '01',
      title: 'CUSTOMER QUESTIONS',
      desc: 'Answers common inquiries instantly using your exact business policies, hours, and service parameters.',
      icon: HelpCircle
    },
    {
      num: '02',
      title: 'QUALIFICATION',
      desc: 'Collects the critical caller details your team needs before taking action or dispatching staff.',
      icon: CheckCircle2
    },
    {
      num: '03',
      title: 'LIVE BOOKING',
      desc: 'Checks live calendar availability and reserves appointment slots directly without double booking.',
      icon: Calendar
    },
    {
      num: '04',
      title: 'SMART ROUTING',
      desc: 'Transfers high-priority hazards or complex inquiries directly to human team members.',
      icon: GitFork
    }
  ];

  // =========================================================================
  // DEDICATED SECTOR MODE (/industries/:sector)
  // =========================================================================
  if (sectorData) {
    return (
      <div className="subpage-root sector-page-root">
        
        {/* Breadcrumb Navigation */}
        <div className="sector-breadcrumb-bar">
          <div className="container">
            <nav className="breadcrumb-nav" aria-label="Breadcrumb">
              <Link to="/" className="bc-link">Home</Link>
              <ChevronRight size={14} className="bc-sep" />
              <Link to="/industries" className="bc-link">Industries</Link>
              <ChevronRight size={14} className="bc-sep" />
              <span className="bc-current" aria-current="page">{sectorData.name}</span>
            </nav>
          </div>
        </div>

        {/* 1. Split Editorial Hero Section */}
        <section className="sector-hero-section">
          <div className="container">
            <div className="sector-hero-grid">
              
              {/* Left Column: Text & Actions */}
              <div className="sector-hero-left">
                <div className="hero-eyebrow-line-wrap text-left" style={{ justifyContent: 'flex-start' }}>
                  <span className="eyebrow-accent-bar" aria-hidden="true" />
                  <span className="hero-eyebrow-heading">{sectorData.badge.toUpperCase()}</span>
                </div>

                <h1 className="subpage-display-title text-left">
                  {sectorData.heroHeadline}
                </h1>

                <p className="subpage-lead-para text-left">
                  {sectorData.heroSubhead}
                </p>

                <div className="hero-cta-button-row text-left">
                  <Link to="/hear-formexai" className="btn-hero-hear" aria-label={`Hear FormexAI for ${sectorData.name}`}>
                    <span className="cta-waveform-glyph" aria-hidden="true">
                      <span className="cg-bar cg-1" />
                      <span className="cg-bar cg-2" />
                      <span className="cg-bar cg-3" />
                      <span className="cg-bar cg-4" />
                    </span>
                    <span>Hear FormexAI</span>
                  </Link>

                  <button
                    type="button"
                    onClick={onOpenDemoModal}
                    className="btn-hero-demo"
                    aria-label="Book a Product Demo"
                  >
                    Book a Demo
                  </button>
                </div>

                {/* Stat Bar */}
                <div className="sector-stats-row">
                  {sectorData.stats.map((st, i) => (
                    <div key={i} className="sector-stat-box">
                      <span className="sector-stat-val">{st.value}</span>
                      <span className="sector-stat-lbl">{st.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Editorial Photograph */}
              <div className="sector-hero-right">
                <div className="editorial-photo-wrapper">
                  <img
                    src={sectorData.image}
                    alt={sectorData.alt}
                    className="editorial-hero-image"
                    loading="eager"
                  />
                  <div className="photo-caption-badge">
                    <ShieldCheck size={16} className="badge-icon" />
                    <span>FormexAI Sector Solution • {sectorData.name}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Operational Reality & Long-Form Editorial Paragraphs */}
        <section className="sector-narrative-section">
          <div className="container">
            <div className="narrative-content-card">
              <span className="eyebrow orange-eyebrow">THE OPERATIONAL REALITY</span>
              <h2 className="narrative-headline">Built specifically for the way {sectorData.name.toLowerCase()} businesses handle calls.</h2>
              <div className="narrative-two-col">
                {sectorData.overviewParagraphs.map((para, i) => (
                  <p key={i} className="narrative-para">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Editorial Deep-Dive Feature Sections (Alternating Layout) */}
        {sectorData.editorialSections.map((sec, idx) => (
          <section key={idx} className={`sector-feature-section ${idx % 2 === 1 ? 'dark-bg-section' : ''}`}>
            <div className="container">
              <div className="sector-feature-grid">
                
                <div className="sf-left">
                  <span className="eyebrow">{sec.subtitle}</span>
                  <h2 className="sf-title">{sec.title}</h2>
                  <p className="sf-paragraph">{sec.paragraph}</p>

                  <ul className="sf-bullets-list">
                    {sec.bullets.map((b, bi) => (
                      <li key={bi} className="sf-bullet-item">
                        <CheckCircle2 size={18} className="bullet-check-icon" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sf-right">
                  <div className="sf-metric-card">
                    <span className="sf-metric-num">{sec.metricNumber}</span>
                    <p className="sf-metric-lbl">{sec.metricLabel}</p>
                    <div className="sf-metric-footer">
                      <Zap size={16} className="zap-icon" />
                      <span>Configured around your exact operational rules</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}

        {/* 4. Custom Sector Operational Workflow Steps */}
        <section className="sector-workflow-section">
          <div className="container">
            <div className="section-header-cluster text-center">
              <span className="eyebrow centered-eyebrow">HOW IT HANDLES A CALL</span>
              <h2 className="subpage-section-headline centered-headline">
                The four-step workflow for {sectorData.name.toLowerCase()}.
              </h2>
              <p className="subpage-lead-para centered-description" style={{ maxWidth: '680px', margin: '0 auto' }}>
                From the moment a customer dials your line to the post-call notification in your CRM.
              </p>
            </div>

            <div className="sector-steps-grid">
              {sectorData.customWorkflowSteps.map((st) => (
                <div key={st.step} className="sector-step-card">
                  <span className="step-num-badge">{st.step}</span>
                  <h3 className="step-card-title">{st.title}</h3>
                  <p className="step-card-desc">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Realistic Call Scenario Transcript Card */}
        <section className="sector-scenario-section">
          <div className="container">
            <div className="scenario-card-wrapper">
              <div className="scenario-header">
                <MessageSquare size={20} className="scen-icon" />
                <h3 className="scen-title">Real {sectorData.name} Call Conversation Example</h3>
              </div>

              <div className="scenario-chat-body">
                <div className="chat-bubble caller-bubble">
                  <span className="speaker-tag">CALLER:</span>
                  <p className="bubble-text">"{sectorData.callScenario.caller}"</p>
                </div>

                <div className="chat-bubble receptionist-bubble">
                  <span className="speaker-tag">FORMEXAI RECEPTIONIST:</span>
                  <p className="bubble-text">"{sectorData.callScenario.receptionist}"</p>
                </div>
              </div>

              <div className="scenario-rule-footer">
                <span className="rule-label">ACTIVE TRIAGE RULE:</span>
                <code className="rule-code">{sectorData.callScenario.ruleApplied}</code>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Human + AI Collaboration Banner */}
        <section className="sector-human-ai-section">
          <div className="container">
            <div className="human-ai-card">
              <div className="ha-left">
                <div className="ha-icon-wrap">
                  <Users size={28} className="ha-icon" />
                </div>
              </div>
              <div className="ha-right">
                <h3 className="ha-title">Human + AI Collaboration</h3>
                <p className="ha-desc">{sectorData.humanAiIntegration}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Dedicated Sector Final CTA */}
        <section className="industries-final-cta-section">
          <div className="container text-center">
            <span className="eyebrow">READY FOR YOUR TEAM</span>
            <h2 className="final-cta-headline">Transform your {sectorData.name.toLowerCase()} call operations today.</h2>
            <p className="final-cta-subhead">
              Give your clients an immediate answer, clear booking options, and a seamless reception experience.
            </p>

            <div className="hero-cta-button-row centered-cta-row" style={{ marginTop: '28px' }}>
              <Link to="/hear-formexai" className="btn-hero-hear" aria-label="Hear FormexAI voice demo">
                <span className="cta-waveform-glyph" aria-hidden="true">
                  <span className="cg-bar cg-1" />
                  <span className="cg-bar cg-2" />
                  <span className="cg-bar cg-3" />
                  <span className="cg-bar cg-4" />
                </span>
                <span>Hear FormexAI</span>
              </Link>

              <button
                type="button"
                onClick={onOpenDemoModal}
                className="btn-hero-demo"
                aria-label="Book a Product Demo"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </section>

      </div>
    );
  }

  // =========================================================================
  // OVERVIEW MODE (/industries)
  // =========================================================================
  return (
    <div className="subpage-root industries-page-root">
      
      {/* 1. CENTERED EDITORIAL HERO SECTION */}
      <section className="industries-hero-section">
        <div className="container text-center">
          
          <div className="hero-eyebrow-line-wrap centered-eyebrow">
            <span className="eyebrow-accent-bar" aria-hidden="true" />
            <span className="hero-eyebrow-heading">INDUSTRIES</span>
            <span className="eyebrow-accent-bar" aria-hidden="true" />
          </div>

          <h1 className="subpage-display-title centered-headline">
            One AI receptionist.<br />
            <span className="headline-orange-span">Built around your business.</span>
          </h1>

          <p className="subpage-lead-para centered-description">
            Every business handles customers differently. FormexAI adapts conversations, questions, bookings and routing to the way your team actually works across all key verticals.
          </p>

          <div className="hero-cta-button-row centered-cta-row">
            <Link to="/hear-formexai" className="btn-hero-hear" aria-label="Hear FormexAI voice demo">
              <span className="cta-waveform-glyph" aria-hidden="true">
                <span className="cg-bar cg-1" />
                <span className="cg-bar cg-2" />
                <span className="cg-bar cg-3" />
                <span className="cg-bar cg-4" />
              </span>
              <span>Hear FormexAI</span>
            </Link>

            <button
              type="button"
              onClick={onOpenDemoModal}
              className="btn-hero-demo"
              aria-label="Book a Product Demo"
            >
              Book a Demo
            </button>
          </div>

          <div className="hero-center-divider" aria-hidden="true" style={{ margin: '36px auto 24px auto' }} />

          {/* Hero Supporting Navigation Chips */}
          <div className="hero-supporting-chips-wrap">
            <span className="chips-lead-label">Select your industry to see tailored workflows:</span>
            <div className="ind-chips-row">
              {ALL_SECTORS.map((sec) => (
                <Link key={sec.id} to={`/industries/${sec.id}`} className="ind-chip interactive-chip">
                  {sec.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 2. EDITORIAL SHOWCASE OF ALL 6 VERTICALS (ALTERNATING LARGE PHOTOGRAPHY & STORYTELLING) */}
      <section className="editorial-showcase-section">
        <div className="container">
          
          <div className="section-header-cluster text-left" style={{ marginBottom: '56px' }}>
            <span className="eyebrow">TAILORED RECEPTIONIST EXPERIENCES</span>
            <h2 className="subpage-section-headline">Different businesses. Different conversations.</h2>
            <p className="subpage-lead-para" style={{ maxWidth: '720px' }}>
              FormexAI adapts its tone, questions, calendar integration, and emergency escalation to match the unique expectations of callers in each industry.
            </p>
          </div>

          <div className="showcase-verticals-stack">
            {ALL_SECTORS.map((sec, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={sec.id} className={`showcase-row-card ${!isEven ? 'row-reversed' : ''}`}>
                  
                  {/* Photo Column */}
                  <div className="showcase-photo-col">
                    <div className="showcase-photo-frame">
                      <img
                        src={sec.image}
                        alt={sec.alt}
                        className="showcase-img"
                        loading="lazy"
                      />
                      <span className="showcase-tag-badge">{sec.badge}</span>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className="showcase-text-col">
                    <span className="showcase-num">0{idx + 1}</span>
                    <h3 className="showcase-sec-title">{sec.name}</h3>
                    <p className="showcase-tagline">{sec.heroHeadline}</p>
                    <p className="showcase-desc">{sec.overviewParagraphs[0]}</p>

                    <div className="showcase-workflows-strip">
                      <span className="sw-label">KEY WORKFLOWS:</span>
                      <ul className="sw-list">
                        {sec.workflows.slice(0, 3).map((wf, wfi) => (
                          <li key={wfi} className="sw-item">• {wf}</li>
                        ))}
                      </ul>
                    </div>

                    <Link to={`/industries/${sec.id}`} className="showcase-explore-btn">
                      <span>Explore {sec.name} Solution</span>
                      <ArrowRight size={16} className="btn-arrow" />
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. "ADAPTS TO YOUR BUSINESS" 4-CAPABILITY MATRIX */}
      <section className="adapts-matrix-section">
        <div className="container">
          
          <div className="matrix-header text-left">
            <span className="eyebrow">ADAPTS TO YOUR BUSINESS</span>
            <h2 className="matrix-headline">
              The receptionist changes with the conversation.
            </h2>
            <p className="matrix-subhead">
              FormexAI can be configured around the questions customers ask, the information your team needs, the services you provide and the actions that should happen next.
            </p>
          </div>

          <div className="matrix-four-col-grid">
            {capabilities.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div key={cap.num} className="matrix-cap-card">
                  <div className="cap-top-row">
                    <span className="cap-num">{cap.num}</span>
                    <IconComp size={20} className="cap-icon" aria-hidden="true" />
                  </div>
                  <h3 className="cap-title">{cap.title}</h3>
                  <p className="cap-desc">{cap.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. COMPACT WORKFLOW VISUAL SEQUENCE */}
      <section className="compact-workflow-section">
        <div className="container">
          <div className="workflow-sequence-strip">
            
            <div className="seq-step">
              <PhoneCall size={16} className="seq-icon" />
              <span className="seq-txt">CUSTOMER CALL</span>
            </div>
            
            <span className="seq-arrow" aria-hidden="true">→</span>
            
            <div className="seq-step">
              <BrainCircuit size={16} className="seq-icon" />
              <span className="seq-txt">UNDERSTAND</span>
            </div>
            
            <span className="seq-arrow" aria-hidden="true">→</span>

            <div className="seq-step">
              <ClipboardCheck size={16} className="seq-icon" />
              <span className="seq-txt">QUALIFY</span>
            </div>

            <span className="seq-arrow" aria-hidden="true">→</span>

            <div className="seq-step">
              <CalendarCheck size={16} className="seq-icon" />
              <span className="seq-txt">BOOK</span>
            </div>

            <span className="seq-arrow" aria-hidden="true">→</span>

            <div className="seq-step highlight-step">
              <GitFork size={16} className="seq-icon" />
              <span className="seq-txt">ROUTE / FOLLOW UP</span>
            </div>

          </div>
        </div>
      </section>

      {/* 5. HUMAN + AI POSITIONING BLOCK */}
      <section className="human-ai-positioning-section">
        <div className="container">
          <div className="human-position-card">
            <div className="hp-content">
              <span className="eyebrow orange-eyebrow">HUMAN + AI SYNERGY</span>
              <h2 className="hp-headline">Never isolated from your actual team.</h2>
              <p className="hp-para">
                FormexAI is not designed to replace human oversight or isolate callers in a robotic black box. It acts as your front-line assistant that takes off call pressure, logs accurate notes, and hand-offs high-priority calls directly to your team members whenever human intervention is required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CENTERED CTA SECTION */}
      <section className="industries-final-cta-section">
        <div className="container text-center">
          <span className="eyebrow">READY WHEN YOUR TEAM ISN'T</span>
          <h2 className="final-cta-headline">Let FormexAI handle the next call.</h2>
          <p className="final-cta-subhead">
            Give customers a fast answer, a clear next step and a better way to reach your business.
          </p>

          <div className="hero-cta-button-row centered-cta-row" style={{ marginTop: '28px' }}>
            <Link to="/hear-formexai" className="btn-hero-hear" aria-label="Hear FormexAI voice demo">
              <span className="cta-waveform-glyph" aria-hidden="true">
                <span className="cg-bar cg-1" />
                <span className="cg-bar cg-2" />
                <span className="cg-bar cg-3" />
                <span className="cg-bar cg-4" />
              </span>
              <span>Hear FormexAI</span>
            </Link>

            <button
              type="button"
              onClick={onOpenDemoModal}
              className="btn-hero-demo"
              aria-label="Book a Product Demo"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
