'use client';

export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/5 via-background to-background" />
      <div className="absolute top-0 -left-1/2 w-96 h-96 bg-foreground/10 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 -right-1/2 w-96 h-96 bg-foreground/5 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}
