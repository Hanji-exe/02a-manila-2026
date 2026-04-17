'use client';

import { Section, SectionTitle, SectionDescription } from './section';
import { ScrollObserver } from './scroll-observer';

export function AboutSection() {
  return (
    <Section id="about" className="bg-card/50 border-b border-border/50">
      <ScrollObserver>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTitle>About Zero to Agent</SectionTitle>
          <SectionDescription className="mb-6">
            Zero to Agent is a global hackathon bringing together developers, founders, and builders to create AI agents from scratch using modern tools and frameworks.
          </SectionDescription>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm uppercase tracking-wide text-foreground/60 font-mono mb-2">Global Reach</p>
              <p className="text-foreground/80">Happening across 20+ countries worldwide</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-foreground/60 font-mono mb-2">Hands-On Building</p>
              <p className="text-foreground/80">Learn by doing in an intensive one-day format</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-foreground/60 font-mono mb-2">Real Deployment</p>
              <p className="text-foreground/80">Ship a working AI agent product by end of day</p>
            </div>
          </div>
        </div>
        
        <div className="relative h-96 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-lg border border-border/50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-bold text-foreground/20 mb-4">20+</div>
            <p className="text-foreground/60">Countries</p>
          </div>
        </div>
      </div>
      </ScrollObserver>
    </Section>
  );
}
