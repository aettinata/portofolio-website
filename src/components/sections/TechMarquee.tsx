"use client";

import { useReducedMotion } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFramer,
  SiGit,
  SiGithub,
} from "react-icons/si";

export interface TechItem {
  name: string;
  icon: IconType;
}

const DEFAULT_TECH_ITEMS: TechItem[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

interface TechMarqueeProps {
  items?: TechItem[];
}

export function TechMarquee({ items = DEFAULT_TECH_ITEMS }: TechMarqueeProps) {
  const shouldReduceMotion = useReducedMotion();

  const duplicatedItems = shouldReduceMotion
    ? items
    : [...items, ...items, ...items, ...items];

  return (
    <div className="group/marquee relative flex w-full max-w-full overflow-hidden border-y border-border bg-bg-secondary py-8 my-16">
      {/* Gradient masks for smooth fade in/out at edges */}
      {!shouldReduceMotion && (
        <>
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 md:w-32 bg-gradient-to-r from-bg-secondary to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 md:w-32 bg-gradient-to-l from-bg-secondary to-transparent" />
        </>
      )}

      <div
        className={`flex items-center px-6 md:px-8 group-hover/marquee:[animation-play-state:paused] ${
          shouldReduceMotion
            ? "flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mx-auto max-w-4xl"
            : "shrink-0 gap-12 md:gap-16 animate-marquee"
        }`}
      >
        {duplicatedItems.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.name}-${index}`}
              className="group flex flex-col items-center justify-center gap-2 md:gap-3 text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-default shrink-0"
            >
              <Icon className="w-7 h-7 md:w-9 md:h-9 transition-transform duration-200 group-hover:scale-105" />
              <span className="text-xs md:text-sm font-medium tracking-wider select-none">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
