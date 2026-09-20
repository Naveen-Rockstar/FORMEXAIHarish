/**
 * FORMEXAI — How It Works Section (Minimal Black Icons + Vertical Timeline Refinement)
 * 
 * Layout Architecture:
 * - Minimalist section intro with breathing room
 * - Narrow central container (~760px) with generous side whitespace
 * - One thin central vertical timeline
 * - 7 Stages with alternating left/right layout on Desktop
 * - Strictly BLACK line icons in subtle white containers (#FFFFFF / #EAECF0)
 * - Subtle FormexAI orange accent ONLY on the active timeline node
 * - Clean 1-column layout on Mobile
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  PhoneCall, 
  Headset, 
  MessageCircle, 
  ClipboardCheck, 
  CalendarCheck, 
  UsersRound, 
  MailCheck 
} from 'lucide-react';

export function HowItWorks() {
  const [activeStage, setActiveStage] = useState(0);
  const stageRefs = useRef([]);

  const stages = [
    {
      num: '01',
      id: 'call',
      name: 'CALL',
      icon: PhoneCall,
      desc: 'A customer calls your business.'
    },
    {
      num: '02',
      id: 'answer',
      name: 'ANSWER',
      icon: Headset,
      desc: 'FormexAI answers immediately.'
    },
    {
      num: '03',
      id: 'understand',
      name: 'UNDERSTAND',
      icon: MessageCircle,
      desc: 'Understands what the customer needs.'
    },
    {
      num: '04',
      id: 'qualify',
      name: 'QUALIFY',
      icon: ClipboardCheck,
      desc: 'Collects the right information.'
    },
    {
      num: '05',
      id: 'book',
      name: 'BOOK',
      icon: CalendarCheck,
      desc: 'Schedules the appointment.'
    },
    {
      num: '06',
      id: 'route',
      name: 'ROUTE',
      icon: UsersRound,
      desc: 'Brings in your team when needed.'
    },
    {
      num: '07',
      id: 'followup',
      name: 'FOLLOW UP',
      icon: MailCheck,
      desc: 'Keeps the conversation going.'
    }
  ];

  // Set up IntersectionObserver to track active stage on scroll
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-stage-index'));
            if (!isNaN(index)) {
              setActiveStage(index);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-15% 0px -25% 0px'
      }
    );

    stageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="how-it-works-root minimal-workflow-root" id="how-it-works" aria-label="How FormexAI Works">
      <div className="container">
        
        {/* Minimal Section Header */}
        <div className="minimal-how-header">
          <span className="eyebrow">HOW IT WORKS</span>
          <h2 className="minimal-how-headline">From a call to a booked job.</h2>
          <p className="minimal-how-subhead">
            Seven simple steps. One seamless experience.<br />
            FormexAI handles the conversation so your team can focus on what matters.
          </p>
        </div>

        {/* Vertical Timeline Workflow Container */}
        <div className="minimal-workflow-container">
          
          {/* Thin Central Progress Timeline */}
          <div className="minimal-timeline-track" aria-hidden="true">
            <div 
              className="minimal-timeline-progress-bar"
              style={{
                height: `${((activeStage + 1) / stages.length) * 100}%`
              }}
            />
          </div>

          {/* 7 Minimal Vertical Stages */}
          <div className="minimal-stages-list">
            {stages.map((st, idx) => {
              const isIconLeft = idx % 2 === 0;
              const isActive = idx === activeStage;
              const isPast = idx < activeStage;
              const IconComp = st.icon;

              return (
                <div
                  key={st.id}
                  ref={(el) => (stageRefs.current[idx] = el)}
                  data-stage-index={idx}
                  className={`minimal-stage-row ${isIconLeft ? 'icon-left-row' : 'icon-right-row'} ${isActive ? 'stage-active' : ''} ${isPast ? 'stage-past' : ''}`}
                >
                  
                  {/* Center Node Dot */}
                  <div className="minimal-node-anchor">
                    <div className={`minimal-node-dot ${isActive ? 'dot-active' : ''} ${isPast ? 'dot-past' : ''}`} />
                  </div>

                  {/* Left Column (Icon or Text) */}
                  <div className="minimal-col col-left">
                    {isIconLeft ? (
                      <div className="minimal-icon-box">
                        <IconComp size={30} className="minimal-black-icon" strokeWidth={1.8} aria-hidden="true" />
                      </div>
                    ) : (
                      <div className="minimal-text-box text-align-right">
                        <span className="minimal-stage-num">{st.num}</span>
                        <h3 className="minimal-stage-title">{st.name}</h3>
                        <p className="minimal-stage-desc">{st.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Right Column (Text or Icon) */}
                  <div className="minimal-col col-right">
                    {isIconLeft ? (
                      <div className="minimal-text-box text-align-left">
                        <span className="minimal-stage-num">{st.num}</span>
                        <h3 className="minimal-stage-title">{st.name}</h3>
                        <p className="minimal-stage-desc">{st.desc}</p>
                      </div>
                    ) : (
                      <div className="minimal-icon-box">
                        <IconComp size={30} className="minimal-black-icon" strokeWidth={1.8} aria-hidden="true" />
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
