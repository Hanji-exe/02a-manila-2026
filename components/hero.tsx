"use client";

import { useEffect, useState } from "react";
import { GlobeVisualization } from "./globe-visualization";

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
            <div
              className={`flex items-center gap-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <img
                src="/vercel-icon.svg"
                alt="Vercel"
                className="w-10 h-10 invert"
              />
              <img src="/v0-icon.svg" alt="v0" className="w-10 h-10 invert" />
            </div>

            {/* Build Week Label */}
            <div
              className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <p className="text-[#b7b7b7] text-sm md:text-base font-mono tracking-widest">
                02A/GLOBAL BUILD WEEK
              </p>
            </div>

            {/* Main Headline */}
            <div
              className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <img
                src="/02a-title.svg"
                alt="Hero Headline"
                className="w-full h-auto"
              />
            </div>

            {/* Date */}
            <div
              className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <p className="text-lg md:text-xl text-gray-300 font-mono">
                04.25.26
              </p>
            </div>

            {/* Powered By */}
            <div
              className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div>
                <p className="text-gray-400 text-sm mb-3">Powered by</p>
                <img
                  src="/serpai-logo.svg"
                  alt="SerpApi"
                  className="w-24 h-24"
                />
              </div>
            </div>
          </div>

          {/* Right Content - Globe */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="relative w-full h-96">
              <GlobeVisualization />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
