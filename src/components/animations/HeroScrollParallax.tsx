"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroScrollParallaxProps {
  children: ReactNode;
  className?: string;
}

export function HeroScrollParallax({ children, className }: HeroScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 1. Parallax Y drift (30px)
  const y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 30]);

  // 2. Subtle scale recession (1 -> 0.98)
  const scale = useTransform(scrollYProgress, [0, 1], [1, shouldReduceMotion ? 1 : 0.98]);

  // 3. Graceful fade-out saat keluar viewport (stay 1.0 sampai 40% scroll)
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, shouldReduceMotion ? 1 : 0]);

  return (
    <div ref={ref} className={cn("relative w-full", className)}>
      <motion.div
        style={{
          y,
          scale,
          opacity,
          willChange: shouldReduceMotion ? "auto" : "transform, opacity",
        }}
        className="w-full flex flex-col items-start"
      >
        {children}
      </motion.div>
    </div>
  );
}
