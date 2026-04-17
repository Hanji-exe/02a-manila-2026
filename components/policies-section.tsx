'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Section, SectionTitle } from './section';
import { ScrollObserver } from './scroll-observer';

const policies = [
  {
    title: 'Code of Conduct',
    content: 'Zero to Agent is committed to providing a safe, respectful, and inclusive environment for all participants. All attendees are expected to follow our code of conduct, which includes treating others with respect, refraining from harassment, and contributing positively to the community. Violations may result in removal from the event.'
  },
  {
    title: 'Participation Rules',
    content: 'Participants must build their projects during the event day (April 25, 2026). Code written before the event cannot be used. Teams are not allowed—this is an individual competition. Projects must be original work created during the hackathon. Judges will assess creativity, functionality, and use of AI technologies.'
  },
  {
    title: 'Intellectual Property',
    content: 'All projects remain the property of the creators. Vercel does not claim ownership of your work. However, you grant Vercel the right to showcase your project for promotional purposes. You are free to use your project for personal or commercial use after the event.'
  },
  {
    title: 'Prizes & Eligibility',
    content: 'Global prizes totaling $6,000+ will be awarded to the top projects. All participants are eligible to win regardless of location. Winners will be announced within 48 hours of the event. Prize distribution will follow applicable laws and regulations.'
  },
  {
    title: 'Privacy Notice',
    content: 'We collect minimal personal information to process your registration. Your data will not be shared with third parties without your consent. For questions about your data, please contact us at privacy@zeroagent.dev. You can request deletion of your information at any time.'
  },
  {
    title: 'Technical Requirements',
    content: 'Participants need a laptop with internet access. We provide guidance on required tools including v0, Vercel, and various AI platforms. Setup assistance will be available on the morning of the event. All software tools are free to use during the hackathon.'
  }
];

export function PoliciesSection() {
  return (
    <Section id="policies" className="bg-card/50 border-b border-border/50">
      <ScrollObserver>
        <div>
          <SectionTitle className="mb-16">Policies & Guidelines</SectionTitle>
          
          <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {policies.map((policy, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-border/50">
              <AccordionTrigger className="text-foreground hover:text-foreground/80">
                {policy.title}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed">
                {policy.content}
              </AccordionContent>
            </AccordionItem>
          ))}
          </Accordion>
          </div>
        </div>
      </ScrollObserver>
    </Section>
  );
}
