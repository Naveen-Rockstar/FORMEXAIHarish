/**
 * FORMEXAI — FAQ Section
 * Section: Frequently Asked Questions
 * HVAC & Home Service Contractor Focus
 */

import React, { useState } from 'react';

export function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState('faq-1');

  const faqs = [
    {
      id: 'faq-1',
      question: 'Do we have to change our existing business phone number?',
      answer: 'No. You keep your existing business phone number with your current carrier (AT&T, Verizon, T-Mobile, RingCentral, Vonage, etc.). You simply enable standard carrier call forwarding (*72 or conditional busy/after-hours forwarding) to your dedicated FormexAI routing line. Setup takes less than 5 minutes.'
    },
    {
      id: 'faq-2',
      question: 'How does FormexAI handle emergencies like water leaks or freezing temperatures?',
      answer: 'You define your custom emergency thresholds. When a caller reports an urgent issue (such as water spraying, gas odor, or an elderly resident in a freezing home with no heat), FormexAI flags the call as High Priority, applies your escalation rule, and immediately initiates a warm telephone transfer to your on-call technician line with briefing notes.'
    },
    {
      id: 'faq-3',
      question: 'Does FormexAI sound like an automated robotic phone tree?',
      answer: 'No. FormexAI never uses "Press 1 for service, press 2 for billing." It speaks with natural conversational cadence, clear articulation, and human empathy from the moment it answers. Homeowners speak in natural sentences, describe their problem in their own words, and get direct, immediate answers.'
    },
    {
      id: 'faq-4',
      question: 'How do appointments get booked into our calendar?',
      answer: 'FormexAI performs real-time two-way synchronization with Google Calendar and Microsoft Outlook. It queries your technicians\' available arrival windows, offers the best matching slots to the customer, locks the window, and automatically dispatches an SMS confirmation to the caller with arrival details.'
    },
    {
      id: 'faq-5',
      question: 'What happens if a customer asks a question FormexAI doesn\'t know?',
      answer: 'FormexAI is strictly grounded in your verified business knowledge base. It will never guess, hallucinate prices, or promise unapproved service terms. If a question is outside your rules, it politely informs the customer, captures their contact info and details, and logs an alert for your office staff to follow up.'
    },
    {
      id: 'faq-6',
      question: 'Can we listen to recordings and inspect call transcripts?',
      answer: 'Yes. Every call answered by FormexAI generates an immediate verbatim transcript, audio playback file, and structured dispatch ticket in your dashboard. You have 100% oversight into what every customer asked and what actions were taken.'
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section-root" id="faq" aria-label="Frequently Asked Questions">
      <div className="container">
        
        {/* Section Header */}
        <div className="faq-header-cluster">
          <span className="eyebrow">Common Questions</span>
          <h2 className="faq-headline">Everything contractors ask about FormexAI.</h2>
          <p className="faq-subhead">
            Direct, practical answers about call answering, carrier forwarding, emergency escalation, and calendar scheduling.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {faqs.map((faq) => {
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
