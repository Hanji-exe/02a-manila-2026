'use client';

import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Zero to Agent</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              A global build week bringing together developers to build AI agents.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#event-details" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
                  Event Details
                </a>
              </li>
              <li>
                <a href="#team" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#policies" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
                  Policies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
                  Vercel Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
                  v0 Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
                  AI Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-4">Contact</h4>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@zeroagent.dev"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <p className="text-center text-foreground/60 text-sm">
            Part of the global Zero to Agent build week by Vercel
          </p>
          <p className="text-center text-foreground/50 text-xs mt-4">
            © 2026 Zero to Agent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
