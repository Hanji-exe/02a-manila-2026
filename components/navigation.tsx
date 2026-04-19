'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Event', href: '#event-details' },
  { label: 'Team', href: '#team' },
  { label: 'Register Now', href: '#get-involved' },
  { label: 'Policies', href: '#policies' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeItem, setActiveItem] = useState('#about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      const sections = navItems.map(item => {
        const el = document.querySelector(item.href);
        return {
          id: item.href,
          top: el ? el.getBoundingClientRect().top : 0
        };
      });

      const current = sections.find(s => s.top > -150 && s.top < 300);
      if (current) setActiveItem(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 flex flex-col items-center',
        isScrolled ? 'top-0' : 'top-0'
      )}
    >
      {/* Scroll Progress Scanning Line */}
      <div className="fixed top-0 left-0 w-full h-[1px] bg-white/5 z-[60]">
        <div
          className="h-full bg-white/40 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className={cn(
        "w-full max-w-7xl flex items-center justify-between transition-all duration-500 px-6 py-3 rounded-sm border border-transparent overflow-hidden",
        isScrolled && "bg-black/60 backdrop-blur-xl border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      )}>
        {/* Logo / Title Area */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col"
          >
            <span className="text-[10px] font-mono font-bold text-white tracking-[0.2em] uppercase">
              Zero to Agent
            </span>
          </button>
        </div>

        {/* Centered Pill Navigation (Refined) */}
        <div className="hidden md:flex items-center gap-1 px-1 py-1 rounded-sm bg-white/5 border border-white/5 backdrop-blur-sm relative group/nav">
          {/* Subtle Scanline on Nav */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover/nav:animate-[shimmer_3s_infinite] pointer-events-none" />

          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "px-5 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-500 rounded-sm relative overflow-hidden group/btn",
                activeItem === item.href
                  ? "bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  : "text-white/40 hover:text-white"
              )}
            >
              {activeItem !== item.href && (
                <div className="absolute inset-x-0 bottom-0 h-px bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform" />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.open('https://luma.com/bho2efmh?utm_id=97758_v0_s00_e0_tv0&fbclid=IwY2xjawRQFHxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeBYtzdx3cSoyVWB67R5ocjH8vVv2zuhGntHEy_f1jJMFCiPud5G2LHo4gom4_aem_FYXDh08gPP2NqtKIYgjSyw', '_blank')}
            className="hidden md:flex relative group px-12 py-3.5 bg-white/10 border border-white/20 hover:border-white/40 rounded-sm overflow-hidden transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            {/* Pulsing Alert Background */}
            <div className="absolute inset-0 bg-white/5 animate-pulse group-hover:bg-white/10 transition-colors" />
            
            {/* Continuous Orbiting Border (Simulated with rotating gradient) */}
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 rounded-sm opacity-30 group-hover:opacity-100 transition-opacity">
                 <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white to-transparent animate-[spin_4s_linear_infinite] opacity-20" />
               </div>
            </div>

            {/* Scanning Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none" />
            
            <span className="relative z-10 text-white font-mono font-bold text-[11px] tracking-[0.4em] uppercase text-shadow-glow">
              REGISTER
            </span>

            {/* Corner HUD Markers */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40 group-hover:border-white transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40 group-hover:border-white transition-colors" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white border border-white/10"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full mt-4 left-6 right-6 bg-black/95 border border-white/10 rounded-3xl backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-4 fade-in duration-300 overflow-hidden">
          <div className="p-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "block w-full text-left px-4 py-3 text-sm font-mono tracking-[0.2em] uppercase rounded-xl transition-colors",
                  activeItem === item.href ? "bg-white text-black font-bold" : "text-white/50 hover:text-white"
                )}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Button
                onClick={() => window.open('https://luma.com/bho2efmh?utm_id=97758_v0_s00_e0_tv0&fbclid=IwY2xjawRQFHxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeBYtzdx3cSoyVWB67R5ocjH8vVv2zuhGntHEy_f1jJMFCiPud5G2LHo4gom4_aem_FYXDh08gPP2NqtKIYgjSyw', '_blank')}
                className="w-full bg-white text-black h-12 rounded-2xl font-black text-xs tracking-widest uppercase"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
