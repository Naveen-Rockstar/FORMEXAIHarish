/**
 * FORMEXAI — Core Industries Section Component
 * 3-Column Industry Grid inspired by Blue Planet and Smith.ai SaaS design language.
 * Covers 6 primary business verticals: Home Services, Healthcare, Dental, Beauty & Wellness, Professional Services, Trades.
 */

import React from 'react';
import { Link } from '../router.jsx';
import { 
  Wrench, 
  HeartPulse, 
  Smile, 
  Sparkles, 
  Briefcase, 
  HardHat, 
  ArrowRight 
} from 'lucide-react';

export function IndustriesSection({ onOpenDemoModal }) {
  const industries = [
    {
      id: 'home-services',
      num: '01',
      icon: Wrench,
      name: 'Home Services',
      description: 'Handle calls from homeowners, qualify service requests, schedule appointments and route urgent jobs while your team is in the field.',
      workflows: [
        'Service requests',
        'Appointment booking',
        'Emergency calls',
        'Lead qualification'
      ],
      linkText: 'Explore Home Services'
    },
    {
      id: 'healthcare',
      num: '02',
      icon: HeartPulse,
      name: 'Healthcare',
      description: 'Help patients reach the right information, capture appointment requests and route conversations to the appropriate team.',
      workflows: [
        'Appointment requests',
        'Patient questions',
        'Intake information',
        'Call routing'
      ],
      linkText: 'Explore Healthcare'
    },
    {
      id: 'dental',
      num: '03',
      icon: Smile,
      name: 'Dental',
      description: 'Make it easier for patients to ask questions, request appointments and reach your team without waiting on hold.',
      workflows: [
        'New patient calls',
        'Appointment scheduling',
        'Treatment questions',
        'Follow-ups'
      ],
      linkText: 'Explore Dental'
    },
    {
      id: 'beauty-wellness',
      num: '04',
      icon: Sparkles,
      name: 'Beauty & Wellness',
      description: 'Turn calls into booked appointments while your staff stays focused on clients.',
      workflows: [
        'Appointment booking',
        'Service questions',
        'Availability requests',
        'Customer follow-ups'
      ],
      linkText: 'Explore Beauty & Wellness'
    },
    {
      id: 'professional-services',
      num: '05',
      icon: Briefcase,
      name: 'Professional Services',
      description: 'Capture new inquiries, understand what prospects need and connect qualified conversations with the right person.',
      workflows: [
        'New inquiries',
        'Lead qualification',
        'Consultation booking',
        'Call routing'
      ],
      linkText: 'Explore Professional Services'
    },
    {
      id: 'trades',
      num: '06',
      icon: HardHat,
      name: 'Trades',
      description: 'Handle service calls while your team is working on the job.',
      workflows: [
        'Service requests',
        'Job scheduling',
        'Emergency calls',
        'Customer updates'
      ],
      linkText: 'Explore Trades'
    }
  ];

  const handleAction = (e) => {
    e.preventDefault();
    if (onOpenDemoModal) {
      onOpenDemoModal();
    } else {
      const demoEl = document.getElementById('demo');
      if (demoEl) demoEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="industries-section-root" id="industries" aria-label="Industries Focus">
      <div className="container">
        
        {/* Section Header */}
        <div className="industries-header-cluster text-left">
          <span className="eyebrow">BUILT AROUND YOUR WORKFLOW</span>
          <h2 className="industries-headline">
            Different businesses.<br />
            <span className="industries-headline-accent">Different conversations. One receptionist.</span>
          </h2>
          <p className="industries-subhead">
            A customer calling a plumber needs a different conversation than someone booking a dental appointment. FormexAI adapts the questions, information, scheduling and routing to fit the business behind the call.
          </p>
        </div>

        {/* 3-Column Industry Cards Grid (6 Verticals) */}
        <div className="industries-three-col-grid">
          {industries.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="industry-card-b2b">
                
                <div className="ind-card-topbar">
                  <div className="ind-icon-badge">
                    <IconComponent size={22} className="ind-icon" aria-hidden="true" />
                  </div>
                  <span className="ind-num-tag">{item.num}</span>
                </div>

                <h3 className="ind-card-title">{item.name}</h3>
                <p className="ind-card-desc">{item.description}</p>

                <div className="ind-workflows-block">
                  <span className="ind-wf-label">COMMON WORKFLOWS:</span>
                  <ul className="ind-wf-list">
                    {item.workflows.map((wf, idx) => (
                      <li key={idx} className="ind-wf-item">
                        <span className="ind-wf-bullet" aria-hidden="true">•</span>
                        <span>{wf}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to={`/industries/${item.id}`}
                  className="ind-card-link"
                  aria-label={`${item.linkText} with FormexAI`}
                >
                  <span>{item.linkText}</span>
                  <ArrowRight size={14} className="link-arrow-icon" aria-hidden="true" />
                </Link>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
