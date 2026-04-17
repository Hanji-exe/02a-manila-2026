'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full px-4 py-16 md:py-24 lg:py-32',
        className
      )}
    >
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn(
      'text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance',
      className
    )}>
      {children}
    </h2>
  );
}

export function SectionDescription({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn(
      'text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl text-balance',
      className
    )}>
      {children}
    </p>
  );
}
