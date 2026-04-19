"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Section, SectionTitle, ScrollObserver } from "./Layout";

/**
 * TeamPage Component
 *
 * Structure:
 *   - Organization Directors (2 cards, centered top row)
 *   - Organizing Team grouped by role (3 per row)
 *   - Speakers (separate section, 2 cards centered)
 *
 * HOW TO ADD PHOTOS:
 * 1. Place your team photos in:  public/team/
 * 2. Name each file to match the "photo" field below, e.g. "france-khalil.jpg"
 * 3. Supported formats: .jpg, .png, .webp
 * 4. Recommended size: 400x400px (square crop works best for the circle)
 */

// ─── ORGANIZATION DIRECTORS ─────────────────────────────────────
const directors = [
  {
    name: "France Khalil",
    role: "Organization Director Head",
    initials: "FK",
    photo: "/team/france-khalil.jpg",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Marvin Barrios",
    role: "Organization Director Head",
    initials: "MB",
    photo: "/team/marvin-barrios.jpg",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
];

// ─── ORGANIZING TEAM (grouped by department) ────────────────────
const organizers = [
  // Technical
  {
    name: "Lawrence Panes",
    role: "Technical Lead",
    initials: "LP",
    photo: "/team/lawrence-panes.JPG",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Dave Aillerr Rivas",
    role: "Technical Lead",
    initials: "DR",
    photo: "/team/dave-rivas.jpg",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  // Logistics
  {
    name: "Fahad Hadji Esmael",
    role: "Logistics Lead",
    initials: "FE",
    photo: "/team/fahad-esmael.JPG",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Alpie Obas",
    role: "Logistics Officer",
    initials: "AO",
    photo: "/team/alpie-obas.jpg",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Arjhine Ty",
    role: "Logistics Officer",
    initials: "AT",
    photo: "/team/arjhine-ty.jpg",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Chloe Bejar-Fong",
    role: "Logistics Officer",
    initials: "CB",
    photo: "/team/chloe-bejar-fong.jpg",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  // Registration
  {
    name: "Mary Jean Navarro",
    role: "Registration Head",
    initials: "MN",
    photo: "/team/mary-jean-navarro.png",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Lanz Kristoffer G. Mañalac",
    role: "Registration Officer",
    initials: "LM",
    photo: "/team/lanz-manalac.jpg",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  // Media, Marketing & External
  {
    name: "Nate Dy",
    role: "Media & Marketing Head",
    initials: "ND",
    photo: "/team/nate-dy.jpg",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Will Vincent Parrone",
    role: "External Head",
    initials: "WP",
    photo: "/team/will-parrone.jpg",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  // Emcees / Hosts
  {
    name: "Anam Iqbal",
    role: "Emcee / Host",
    initials: "AI",
    photo: "/team/anam-iqbal.png",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Larr Gallos",
    role: "Emcee / Host",
    initials: "LG",
    photo: "/team/larr-gallos.jpg",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
];

// ─── REUSABLE CARD COMPONENT ────────────────────────────────────
type TeamMember = {
  name: string;
  role: string;
  initials: string;
  photo: string;
  social: { twitter: string; linkedin: string; github: string };
};

function TeamCard({ member, isLarge = false }: { member: TeamMember; isLarge?: boolean }) {
  return (
    <div className={`group relative bg-[#0a0a0a] border border-white/5 rounded-sm transition-all duration-300 hover:bg-white/[0.03] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] flex items-center gap-6 overflow-hidden ${isLarge ? "p-8" : "p-6"}`}>
      {/* Corner HUD Ornaments */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-white/40 transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-white/40 transition-colors" />
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />

      {/* Large circular photo */}
      <Avatar className="w-24 h-24 shrink-0 bg-white/10 border border-white/10 group-hover:border-white/40 transition-colors">
        {member.photo && (
          <AvatarImage
            src={member.photo}
            alt={member.name}
            className="object-cover"
          />
        )}
        <AvatarFallback className="text-white font-bold text-xl">
          {member.initials}
        </AvatarFallback>
      </Avatar>

      {/* Name, Role, Socials — stacked vertically alongside the photo */}
      <div className="flex flex-col justify-center gap-2 min-h-[96px]">
        <div>
          <h3 className={`font-medium text-white tracking-tight leading-tight ${isLarge ? "text-2xl" : "text-lg"}`}>
            {member.name}
          </h3>
          <p className={`${isLarge ? "text-sm" : "text-[11px]"} text-white/40 mt-1 font-mono uppercase tracking-[0.2em]`}>
            {member.role}
          </p>
        </div>

        {/* Clickable Social Links */}
        <div className={`flex items-center gap-3 ${isLarge ? "mt-2" : "mt-1"}`}>
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {member.social.github && (
            <a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────
export function TeamPage() {
  return (
    <Section id="team" className="relative border-b border-border/50 overflow-hidden">
      {/* Background atmospheric glows */}
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] opacity-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,transparent_70%)] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[30%] h-[30%] opacity-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] blur-[80px] pointer-events-none" />

      <ScrollObserver>
        {/* ── ORGANIZING TEAM ── */}
        <div className="mb-20">
          <div className="mb-16 text-center">
            <SectionTitle 
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-medium tracking-tight text-white mb-2"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, white 50%, rgba(255,255,255,0.2) 100%)",
                maskImage: "linear-gradient(to bottom, white 50%, rgba(255,255,255,0.2) 100%)",
              }}
            >
              Organizing Team
            </SectionTitle>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-px w-12 bg-white/10" />
              <span className="text-[10px] font-mono text-white/40 tracking-[0.4em] uppercase">
                The Architects
              </span>
              <div className="h-px w-12 bg-white/10" />
            </div>
          </div>

          {/* Directors – 2 cards, centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-6 ">
            {directors.map((member) => (
              <TeamCard key={member.name} member={member} isLarge={true} />
            ))}
          </div>

          {/* Rest of the team – 3 per row, grouped by role */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </ScrollObserver>
    </Section>
  );
}
