/**
 * FORMEXAI — Home Page
 * Master 16-Part Product-Led Story Structure (Section 31 of Prompt):
 * 
 * 01 NAVIGATION (Global Navbar in App.jsx)
 * 02 HERO ("Every call answered. Every opportunity handled.")
 * 03 PROBLEM ("Your team can't answer every call. FormexAI can.")
 * 04 LIVE AI DEMO ("Don't take our word for it. Talk to FormexAI.")
 * 05 HOW IT WORKS ("From ringing phone to booked job" — 7 Stages)
 * 06 PRODUCT PREVIEW ("See what your team sees" — Dashboard & Sarah Mitchell Call Detail)
 * 07 REAL HVAC SCENARIOS ("Built for the calls your team actually gets")
 * 08 CORE CAPABILITIES (Answer, Understand, Qualify, Book, Route, Follow Up)
 * 09 BUSINESS WORKFLOW (Before FormexAI vs With FormexAI)
 * 10 INTEGRATIONS ("Connect FormexAI with your workflow")
 * 11 HUMAN CONTROL ("AI handles the routine. Your team handles what matters.")
 * 12 INDUSTRIES ("Built for HVAC. Designed for home services.")
 * 13 TRUST ("Designed around your business rules")
 * 14 FAQ (Direct HVAC contractor answers)
 * 15 FINAL CTA ("Stop sending customers to voicemail")
 * 16 FOOTER (Global Footer in App.jsx)
 */

import React from 'react';
import { Hero } from '../sections/Hero.jsx';
import { ProblemSection } from '../sections/ProblemSection.jsx';
import { LiveVoiceDemo } from '../sections/LiveVoiceDemo.jsx';
import { HowItWorks } from '../sections/HowItWorks.jsx';
import { ProductPreviewSection } from '../sections/ProductPreviewSection.jsx';
import { RealHvacScenarios } from '../sections/RealHvacScenarios.jsx';
import { CoreCapabilities } from '../sections/CoreCapabilities.jsx';
import { BusinessWorkflow } from '../sections/BusinessWorkflow.jsx';
import { Integrations } from '../sections/Integrations.jsx';
import { HumanControl } from '../sections/HumanControl.jsx';
import { IndustriesSection } from '../sections/IndustriesSection.jsx';
import { TrustSection } from '../sections/TrustSection.jsx';
import { FaqSection } from '../sections/FaqSection.jsx';
import { FinalCta } from '../sections/FinalCta.jsx';

export function HomePage({ onOpenDemoModal }) {
  return (
    <>
      {/* 02 HERO: Product-led headline, HVAC value proposition, and realistic call UI */}
      <Hero onOpenDemoModal={onOpenDemoModal} />

      {/* 03 PROBLEM: 6 real contractor situations why calls get missed */}
      <ProblemSection />

      {/* 04 LIVE AI DEMO: Interactive speech recognition + prompt chips + ticket */}
      <LiveVoiceDemo />

      {/* 05 HOW IT WORKS: 7-stage connected operational workflow */}
      <HowItWorks />

      {/* 06 PRODUCT PREVIEW: Operational metrics overview & Sarah Mitchell call detail */}
      <ProductPreviewSection />

      {/* 07 REAL HVAC SCENARIOS: Emergency, Service, Replacement, Maintenance */}
      <RealHvacScenarios />

      {/* 08 CORE CAPABILITIES: Answer, Understand, Qualify, Book, Route, Follow Up */}
      <CoreCapabilities />

      {/* 09 BUSINESS WORKFLOW: Before FormexAI vs With FormexAI */}
      <BusinessWorkflow />

      {/* 10 INTEGRATIONS: Truthful ecosystem connections (Calendar, SMS, CRM) */}
      <Integrations />

      {/* 11 HUMAN CONTROL: Routine to AI, emergencies and complex calls to humans */}
      <HumanControl />

      {/* 12 INDUSTRIES: Flagship HVAC + Home Services (Plumbing, Electrical, Roofing) */}
      <IndustriesSection />

      {/* 13 TRUST: Business rules, territories, pricing policies, test calls */}
      <TrustSection />

      {/* 14 FAQ: Practical contractor questions answered */}
      <FaqSection />

      {/* 15 FINAL CTA: Stop losing revenue to voicemail */}
      <FinalCta onOpenDemoModal={onOpenDemoModal} />
    </>
  );
}
