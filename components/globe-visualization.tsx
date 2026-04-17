'use client';

import { useEffect, useRef } from 'react';

interface LocationDot {
  lat: number;
  lng: number;
  label?: string;
}

export function GlobeVisualization() {
  const svgRef = useRef<SVGSVGElement>(null);

  // Major cities and locations participating in the event
  const locations: LocationDot[] = [
    // Asia
    { lat: 14.5994, lng: 120.9842, label: 'Manila' }, // Manila - highlighted
    { lat: 35.6762, lng: 139.6503, label: 'Tokyo' },
    { lat: 1.3521, lng: 103.8198, label: 'Singapore' },
    { lat: 22.3193, lng: 114.1694, label: 'Hong Kong' },
    { lat: 31.2304, lng: 121.4737, label: 'Shanghai' },
    { lat: 28.6139, lng: 77.209, label: 'Delhi' },
    // Europe
    { lat: 48.8566, lng: 2.3522, label: 'Paris' },
    { lat: 52.52, lng: 13.405, label: 'Berlin' },
    { lat: 51.5074, lng: -0.1278, label: 'London' },
    // Americas
    { lat: 40.7128, lng: -74.006, label: 'New York' },
    { lat: 34.0522, lng: -118.2437, label: 'Los Angeles' },
    { lat: -23.5505, lng: -46.6333, label: 'São Paulo' },
  ];

  useEffect(() => {
    if (!svgRef.current) return;

    // Simple equirectangular projection
    const width = 500;
    const height = 300;

    const projectPoint = (lat: number, lng: number) => {
      const x = ((lng + 180) / 360) * width;
      const y = ((90 - lat) / 180) * height;
      return { x, y };
    };

    const svg = svgRef.current;

    // Draw connection lines to Manila (main location)
    const manilaPos = projectPoint(14.5994, 120.9842);
    
    locations.slice(1).forEach((loc) => {
      const pos = projectPoint(loc.lat, loc.lng);
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', manilaPos.x.toString());
      line.setAttribute('y1', manilaPos.y.toString());
      line.setAttribute('x2', pos.x.toString());
      line.setAttribute('y2', pos.y.toString());
      line.setAttribute('stroke', 'rgba(168, 85, 247, 0.3)');
      line.setAttribute('stroke-width', '1');
      svg.appendChild(line);
    });

    // Draw location dots
    locations.forEach((loc, index) => {
      const pos = projectPoint(loc.lat, loc.lng);
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', pos.x.toString());
      circle.setAttribute('cy', pos.y.toString());
      
      const isManila = loc.label === 'Manila';
      
      circle.setAttribute('r', isManila ? '6' : '3');
      circle.setAttribute('fill', isManila ? 'rgb(168, 85, 247)' : 'rgb(255, 255, 255)');
      circle.setAttribute('opacity', isManila ? '1' : '0.8');
      
      if (isManila) {
        circle.setAttribute('filter', 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))');
      }
      
      svg.appendChild(circle);
    });

  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        ref={svgRef}
        className="w-full max-w-lg h-auto"
        viewBox="0 0 500 300"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Simplified world map outline */}
        <g stroke="rgb(200, 200, 200)" strokeWidth="0.5" fill="none" opacity="0.4">
          {/* North America */}
          <path d="M 50 80 Q 80 90 90 120 Q 85 140 70 150 Q 50 145 45 120 Z" />
          {/* South America */}
          <path d="M 70 150 Q 85 160 80 200 Q 65 210 60 190 Z" />
          {/* Europe */}
          <path d="M 180 70 Q 210 75 220 95 Q 210 110 180 105 Z" />
          {/* Africa */}
          <path d="M 230 90 Q 260 100 270 160 Q 250 180 230 170 Z" />
          {/* Asia */}
          <path d="M 280 60 Q 350 75 380 100 Q 370 150 320 160 Q 280 140 280 100 Z" />
          {/* Australia */}
          <path d="M 360 180 Q 380 185 385 210 Q 370 215 360 205 Z" />
        </g>
      </svg>
    </div>
  );
}
