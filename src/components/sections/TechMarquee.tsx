"use client";

import { useReducedMotion } from "framer-motion";

interface TechMarqueeProps {
  items: string[];
}

export function TechMarquee({ items }: TechMarqueeProps) {
  const shouldReduceMotion = useReducedMotion();
  
  // For CSS marquee, we duplicate enough to cover the screen width
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative flex w-full overflow-hidden border-y border-border bg-bg-secondary py-8 my-16">
      {/* Gradient masks for smooth fade in/out at edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-bg-secondary to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-bg-secondary to-transparent"></div>

      <div
        className={`flex shrink-0 items-center gap-16 px-8 ${shouldReduceMotion ? '' : 'animate-marquee'}`}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            <span className="text-[22px] font-semibold tracking-tight">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-border" />
          </div>
        ))}
      </div>
    </div>
  );
}
