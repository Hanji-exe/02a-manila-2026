'use client';

import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { AboutSection } from '@/components/about-section';
import { EventDetails } from '@/components/event-details';
import { TeamSection } from '@/components/team-section';
import { GetInvolved } from '@/components/get-involved';
import { PoliciesSection } from '@/components/policies-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <AboutSection />
      <EventDetails />
      <TeamSection />
      <GetInvolved />
      <PoliciesSection />
      <Footer />
    </main>
  );
}
