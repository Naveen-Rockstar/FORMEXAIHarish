/**
 * FORMEXAI — Core Capabilities Feature Grid Section
 * Inspired by Blue Planet & Smith.ai premium B2B SaaS design language.
 * 
 * Layout:
 * - Section Eyebrow, Heading, and Supporting Intro Paragraph
 * - 3-Column Grid (2 rows x 3 columns on Desktop, 2-col on Tablet, 1-col on Mobile)
 * - Subtle Cards with Lucide Icons, Clean Titles, Concise Descriptions & Arrow Links
 */

import React from 'react';
import { 
  PhoneCall, 
  MessageSquareText, 
  UserCheck, 
  CalendarCheck, 
  PhoneForwarded, 
  Send 
} from 'lucide-react';

export function ProblemSection() {
  const features = [
    {
      id: '01',
      icon: PhoneCall,
      title: '24/7 Call Coverage',
      description: 'Answer every inbound customer call, including evenings, weekends and busy periods.',
      linkText: 'Learn capability'
    },
    {
      id: '02',
      icon: MessageSquareText,
      title: 'Natural Conversations',
      description: 'Understand what customers need without forcing them through rigid phone menus.',
      linkText: 'Learn capability'
    },
    {
      id: '03',
      icon: UserCheck,
      title: 'Lead Qualification',
      description: 'Collect the right customer and service information before handing the conversation to your team.',
      linkText: 'Learn capability'
    },
    {
      id: '04',
      icon: CalendarCheck,
      title: 'Appointment Booking',
      description: 'Check availability and schedule appointments automatically.',
      linkText: 'Learn capability'
    },
    {
      id: '05',
      icon: PhoneForwarded,
      title: 'Smart Call Routing',
      description: 'Transfer important calls to the right person when human involvement is required.',
      linkText: 'Learn capability'
    },
    {
      id: '06',
      icon: Send,
      title: 'Follow-Up & Messaging',
      description: 'Capture messages and continue customer communication through supported messaging workflows.',
      linkText: 'Learn capability'
    }
  ];

  return (
    <section className="problem-section-root" id="capabilities" aria-label="Platform Capabilities">
      <div className="container">
        
        {/* Section Header Introduction */}
        <div className="feature-grid-header">
          <span className="feature-grid-eyebrow">PLATFORM CAPABILITIES</span>
          <h2 className="feature-grid-headline">
            One receptionist. <span className="headline-orange-span">Every customer conversation.</span>
          </h2>
          <p className="feature-grid-subhead">
            FormexAI handles the conversations your team cannot always get to — answering questions, qualifying requests, booking appointments and routing important calls.
          </p>
        </div>

        {/* 3-Column Feature Grid (2 rows x 3 cols) */}
        <div className="features-three-col-grid">
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="feature-card-minimal">
                <div className="feature-icon-badge">
                  <IconComponent size={20} className="feature-icon" aria-hidden="true" />
                </div>
                <h3 className="feature-card-title">{item.title}</h3>
                <p className="feature-card-desc">{item.description}</p>
                <a href="#demo" className="feature-card-link" aria-label={`Learn more about ${item.title}`}>
                  <span>{item.linkText}</span>
                  <span className="link-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
