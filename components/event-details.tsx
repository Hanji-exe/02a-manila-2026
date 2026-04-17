'use client';

import { Code2, Zap, Trophy, Users } from 'lucide-react';
import { Section, SectionTitle } from './section';
import { ScrollObserver } from './scroll-observer';

const details = [
  {
    icon: Users,
    title: 'Who Should Join',
    items: [
      'Software engineers',
      'Data engineers',
      'Indie hackers',
      'Startup founders'
    ]
  },
  {
    icon: Code2,
    title: 'What You\'ll Do',
    items: [
      'Build AI agents using v0 + Vercel',
      'Deploy a working product',
      'Collaborate with developers globally',
      'Learn cutting-edge AI tools'
    ]
  },
  {
    icon: Trophy,
    title: 'Rewards',
    items: [
      'Global prizes worth $6,000+',
      'Networking opportunities',
      'Mentorship from Vercel team',
      'Showcase your work globally'
    ]
  },
  {
    icon: Zap,
    title: 'Format',
    items: [
      'Solo participation (no teams)',
      'One-day intensive build',
      'Live event in Metro Manila',
      'Online participation available'
    ]
  }
];

export function EventDetails() {
  return (
    <Section id="event-details">
      <ScrollObserver>
        <div>
          <SectionTitle className="mb-16">Event Details</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {details.map((detail) => {
          const Icon = detail.icon;
          return (
            <div key={detail.title} className="border border-border/50 rounded-lg p-6 bg-card/30 hover:bg-card/50 transition-colors">
              <Icon className="w-8 h-8 text-foreground mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">{detail.title}</h3>
              <ul className="space-y-2">
                {detail.items.map((item, idx) => (
                  <li key={idx} className="text-foreground/70 text-sm leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
          </div>
        </div>
      </ScrollObserver>
    </Section>
  );
}
