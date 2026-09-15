/**
 * FORMEXAI — FAQ Section
 * Answers real operational questions with honest, concrete details.
 */

import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/siteData.js';

export function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState('faq-1');

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section-root" id="faq" aria-label="Frequently Asked Questions">
      <div className="faq-container">
        
        {/* Section Header */}
        <div className="faq-header-cluster">
          <span className="faq-eyebrow">Common Questions</span>
          <h2 className="faq-headline">Everything you need to know about Formexai.</h2>
          <p className="faq-subhead">
            Direct, practical answers about call answering, business customization, scheduling, and human escalation.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`answer-${faq.id}`}
                >
                  <span className="question-text">{faq.question}</span>
                  <span className="accordion-indicator" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`answer-${faq.id}`}
                    className="faq-answer-panel"
                    role="region"
                  >
                    <p className="answer-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
