'use client';

import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5 pt-32 pb-16 overflow-hidden">
      {/* Background Atmospheric Glows */}
      <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-medium text-white tracking-widest uppercase mb-2">
                Zero to Agent
              </h3>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-white/20" />
                <span className="text-[10px] font-mono text-white/40 tracking-[0.4em] uppercase">
                  v0.1_Manila
                </span>
              </div>
            </div>
            <p className="text-white/40 text-[11px] font-mono leading-relaxed max-w-xs uppercase tracking-wider">
              The ultimate 7-day sprint to build and scale autonomous intelligence.
              Join the world's most ambitious builders in Manila.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-[0.5em]">
              Navigation
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="group flex items-center gap-3 text-white/40 hover:text-white transition-all">
                  <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">01/</span>
                  <span className="text-xs font-mono uppercase tracking-widest">About Page</span>
                </a>
              </li>
              <li>
                <a href="#event-details" className="group flex items-center gap-3 text-white/40 hover:text-white transition-all">
                  <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">02/</span>
                  <span className="text-xs font-mono uppercase tracking-widest">Event Details</span>
                </a>
              </li>
              <li>
                <a href="#team" className="group flex items-center gap-3 text-white/40 hover:text-white transition-all">
                  <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">03/</span>
                  <span className="text-xs font-mono uppercase tracking-widest">Organizing Team </span>
                </a>
              </li>
              <li>
                <a href="#policies" className="group flex items-center gap-3 text-white/40 hover:text-white transition-all">
                  <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">04/</span>
                  <span className="text-xs font-mono uppercase tracking-widest">Policies</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-[0.5em]">
              Resources
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                  <span className="text-xs font-mono uppercase tracking-widest">Vercel Intelligence</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                  <span className="text-xs font-mono uppercase tracking-widest">v0 Generator</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                  <span className="text-xs font-mono uppercase tracking-widest">Core Documentation</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-[0.5em]">
              Transmission
            </h4>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-3 bg-white/5 border border-white/10 rounded-sm text-white/40 hover:text-white hover:border-white/30 transition-all group"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
              © 2026 Zero to Agent // Manila Chapter
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-4 bg-white/10" />
              <span className="text-[8px] font-mono text-white/10 tracking-[0.5em] uppercase">
                End of Transmission
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <img src="/vercel-icon.svg" className="w-5 h-5 opacity-20 hover:opacity-100 transition-opacity invert" alt="Vercel" />
            <div className="h-4 w-px bg-white/10" />
            <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
              Powered by SerpAPI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
