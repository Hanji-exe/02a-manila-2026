'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';
import { Section, SectionTitle } from './section';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ScrollObserver } from './scroll-observer';

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Event Lead',
    initials: 'AC',
    social: { twitter: '#', linkedin: '#', github: '#' }
  },
  {
    name: 'Maria Santos',
    role: 'Tech Organizer',
    initials: 'MS',
    social: { twitter: '#', linkedin: '#', github: '#' }
  },
  {
    name: 'David Park',
    role: 'Operations',
    initials: 'DP',
    social: { twitter: '#', linkedin: '#', github: '#' }
  },
  {
    name: 'Jessica Wong',
    role: 'Community',
    initials: 'JW',
    social: { twitter: '#', linkedin: '#', github: '#' }
  },
  {
    name: 'Miguel Rodriguez',
    role: 'Mentorship',
    initials: 'MR',
    social: { twitter: '#', linkedin: '#', github: '#' }
  },
  {
    name: 'Sophie Laurent',
    role: 'Partnerships',
    initials: 'SL',
    social: { twitter: '#', linkedin: '#', github: '#' }
  }
];

export function TeamSection() {
  return (
    <Section id="team" className="bg-card/50 border-b border-border/50">
      <ScrollObserver>
        <div>
          <SectionTitle className="mb-16">Organizing Team</SectionTitle>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="group border border-border/50 rounded-lg p-6 bg-card/30 hover:bg-card/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <Avatar className="h-12 w-12 bg-foreground/10">
                <AvatarFallback className="text-foreground font-bold bg-foreground/10">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-foreground/60">{member.role}</p>
              </div>
            </div>
            
            <div className="flex gap-3 pt-4 border-t border-border/30">
              <a
                href={member.social.twitter}
                className="text-foreground/50 hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={member.social.linkedin}
                className="text-foreground/50 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={member.social.github}
                className="text-foreground/50 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
          </div>
        </div>
      </ScrollObserver>
    </Section>
  );
}
