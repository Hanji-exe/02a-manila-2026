'use client';

import { useEffect, useState } from 'react';
import { GlobeVisualization } from './globe-visualization';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center px-4 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Logo Area */}
            <div className={`flex items-center gap-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="w-8 h-8 bg-white flex items-center justify-center transform rotate-45">
                <div className="w-4 h-4 bg-black" />
              </div>
              <span className="text-white text-2xl font-bold tracking-tight">v0</span>
            </div>

            {/* Build Week Label */}
            <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <p className="text-cyan-400 text-sm md:text-base font-mono tracking-widest">
                02A/GLOBAL BUILD WEEK
              </p>
            </div>

            {/* Main Headline */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Zero to<br />Agent
              </h1>
            </div>

            {/* Date */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <p className="text-lg md:text-xl text-gray-300 font-mono">
                04.25.26
              </p>
            </div>

            {/* Powered By */}
            <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="pt-4 border-t border-gray-700">
                <p className="text-gray-400 text-sm mb-3">Powered by</p>
                <div className="w-16 h-16 bg-white flex items-center justify-center rounded">
                  <span className="text-black font-bold text-xs">SerpApi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Globe */}
          <div className={`hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative w-full h-96">
              <GlobeVisualization />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
