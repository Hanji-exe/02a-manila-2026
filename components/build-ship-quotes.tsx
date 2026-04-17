'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const quotes = [
  {
    text: "The best way to predict the future is to build it.",
    author: "Alan Kay",
  },
  {
    text: "Ship it. Then iterate. That's how you win.",
    author: "Patrick Collison",
  },
  {
    text: "Done is better than perfect. Ship fast, learn faster.",
    author: "Evan Spiegel",
  },
  {
    text: "Build something 100 people love, not something 1 million people kind of like.",
    author: "Brian Chesky",
  },
  {
    text: "The only way to win is to move fast and build better products.",
    author: "Mark Zuckerberg",
  },
  {
    text: "Your work is going to fill a large part of your life. Build what matters.",
    author: "Steve Jobs",
  },
];

export function BuildShipQuotes() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % quotes.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section className="relative w-full py-20 md:py-32 bg-black border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Label */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-cyan-400 text-sm md:text-base font-mono tracking-widest mb-4">
            INSPIRATION
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Build and Ship
          </h2>
        </div>

        {/* Quote Carousel */}
        <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative">
            {/* Quote Content */}
            <div className="space-y-6 min-h-56 flex flex-col justify-center">
              <blockquote className="space-y-4">
                <p className="text-2xl md:text-3xl font-light text-white leading-relaxed">
                  "{quotes[current].text}"
                </p>
                <footer className="flex items-center gap-3 pt-4 border-t border-gray-700">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <cite className="text-gray-400 not-italic text-sm md:text-base">
                    {quotes[current].author}
                  </cite>
                </footer>
              </blockquote>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12">
              <div className="flex gap-2">
                <Button
                  onClick={prev}
                  variant="outline"
                  size="icon"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-gray-400"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  onClick={next}
                  variant="outline"
                  size="icon"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-gray-400"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Indicators */}
              <div className="flex gap-2">
                {quotes.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-cyan-400 w-8' : 'bg-gray-600 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
