/**
 * FORMEXAI — Industries Explorer Section
 * "ONE RECEPTIONIST. DIFFERENT BUSINESSES."
 * Editorial explorer revealing common customer calls, conversation snippets,
 * and business rules for each supported sector.
 */

import React, { useState } from 'react';
import { INDUSTRY_CATEGORIES, INDUSTRIES_LIST } from '../data/industriesData.js';
import { Button } from '../components/Button.jsx';

export function IndustriesSection({ onOpenDemoModal, onScrollToLiveDemo }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState('home-services');
  const [selectedIndustryId, setSelectedIndustryId] = useState('hvac');

  // Filter industries matching current category
  const filteredIndustries = INDUSTRIES_LIST.filter((ind) => ind.categoryId === selectedCategoryId);

  // Active industry detail
  const activeIndustry = INDUSTRIES_LIST.find((ind) => ind.id === selectedIndustryId) || filteredIndustries[0] || INDUSTRIES_LIST[0];

  const handleSelectCategory = (catId) => {
    setSelectedCategoryId(catId);
    const firstInCat = INDUSTRIES_LIST.find((ind) => ind.categoryId === catId);
    if (firstInCat) {
      setSelectedIndustryId(firstInCat.id);
    }
  };

  return (
    <section className="industries-section-root" id="industries" aria-label="Supported Industries">
      <div className="industries-container">
        
        {/* Section Header */}
        <div className="industries-header-cluster">
          <span className="industries-eyebrow">Industry Adaptability</span>
          <h2 className="industries-headline">One receptionist. Different businesses.</h2>
          <p className="industries-subhead">
            Every industry has different conversations, rules, and urgency requirements. Formexai adapts its conversation to fit how your customers actually talk.
          </p>
        </div>

        {/* Category Tabs Nav */}
        <div className="category-tabs-bar" role="tablist" aria-label="Industry Categories">
          {INDUSTRY_CATEGORIES.map((cat) => {
            const isCatSelected = cat.id === selectedCategoryId;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isCatSelected}
                className={`category-tab-btn ${isCatSelected ? 'active' : ''}`}
                onClick={() => handleSelectCategory(cat.id)}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Sub-Pills within Active Category */}
        <div className="industry-subpills-row" role="tablist" aria-label="Select specific industry">
          {filteredIndustries.map((ind) => {
            const isIndSelected = ind.id === activeIndustry.id;
            return (
              <button
                key={ind.id}
                type="button"
                role="tab"
                aria-selected={isIndSelected}
                className={`industry-subpill ${isIndSelected ? 'active' : ''}`}
                onClick={() => setSelectedIndustryId(ind.id)}
              >
                {ind.name}
              </button>
            );
          })}
        </div>

        {/* Large Editorial Detail Experience Frame */}
        <div className="industry-detail-frame">
          <div className="industry-detail-grid">
            
            {/* Left Column: Scope & Capabilities */}
            <div className="industry-scope-col">
              <span className="sector-tag">{activeIndustry.name.toUpperCase()}</span>
              <h3 className="scope-headline">{activeIndustry.tagline}</h3>

              <div className="scope-block">
                <h5 className="scope-title">Common Customer Calls</h5>
                <ul className="common-calls-list">
                  {activeIndustry.commonCalls.map((call, idx) => (
                    <li key={idx} className="common-call-item">
                      <span className="call-bullet">•</span>
                      <span>"{call}"</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="scope-block">
                <h5 className="scope-title">What Formexai Handles Automatically</h5>
                <ul className="handled-actions-list">
                  {activeIndustry.handledActions.map((action, idx) => (
                    <li key={idx} className="handled-action-item">
                      <span className="action-check">✓</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Dialogue Excerpt & Logic Rule */}
            <div className="industry-dialogue-col">
              
              {/* Conversational Sample Card */}
              <div className="industry-conversation-card">
                <div className="card-header-bar">
                  <span className="card-tag">SAMPLE CONVERSATION EXCERPT</span>
                  <span className="live-indicator">● NATURAL SPEECH</span>
                </div>

                <div className="dialogue-flow">
                  <div className="dialogue-line caller-line">
                    <span className="line-speaker">CALLER</span>
                    <p className="line-quote">"{activeIndustry.dialogue.caller}"</p>
                  </div>

                  <div className="dialogue-line receptionist-line">
                    <span className="line-speaker">FORMEXAI RECEPTIONIST</span>
                    <p className="line-quote">"{activeIndustry.dialogue.receptionist}"</p>
                  </div>
                </div>
              </div>

              {/* Active Business Rule Card */}
              <div className="industry-rule-card">
                <div className="rule-header">
                  <span className="rule-badge">Configured Business Rule</span>
                </div>
                <div className="rule-body">
                  <span className="code-text">{activeIndustry.rule}</span>
                </div>
              </div>

              {/* CTA Action Bar */}
              <div className="industry-cta-banner">
                <div className="cta-left">
                  <strong>Ready to deploy for {activeIndustry.name}?</strong>
                  <span>Onboarding and live testing takes approximately one week.</span>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={onOpenDemoModal}
                >
                  Configure This Industry →
                </Button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
