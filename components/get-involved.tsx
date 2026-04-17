'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Section, SectionTitle } from './section';
import { ScrollObserver } from './scroll-observer';

const opportunities = [
  {
    title: 'Join as a Participant',
    description: 'Build your AI agent idea from scratch. No experience necessary—just bring your ideas and determination.',
    color: 'from-foreground/10'
  },
  {
    title: 'Partner with Us',
    description: 'Collaborate with Vercel and reach thousands of developers building AI agents. Showcase your platform.',
    color: 'from-foreground/5'
  },
  {
    title: 'Sponsor the Event',
    description: 'Support the next generation of AI builders. Connect with talented engineers and build brand visibility.',
    color: 'from-foreground/10'
  }
];

export function GetInvolved() {
  return (
    <Section id="get-involved">
      <ScrollObserver>
        <div>
          <SectionTitle className="mb-16">Get Involved</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {opportunities.map((opp) => (
          <div
            key={opp.title}
            className={`bg-gradient-to-br ${opp.color} to-background border border-border/50 rounded-lg p-8 hover:border-border transition-colors`}
          >
            <h3 className="text-xl font-bold text-foreground mb-3">{opp.title}</h3>
            <p className="text-foreground/70 leading-relaxed">{opp.description}</p>
          </div>
        ))}
          </div>
          
          <div className="text-center">
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          Ready to join the global AI agent building movement? Register now and be part of something incredible.
        </p>
        <Button
          size="lg"
          className="bg-foreground text-background hover:bg-foreground/90 text-base h-12 px-8"
        >
          Register Now
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
          </div>
        </div>
      </ScrollObserver>
    </Section>
  );
}
