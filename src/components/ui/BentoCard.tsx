"use client";

import { useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils"; 

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  layoutId?: string;
}

export function BentoCard({ children, className, onClick, layoutId }: BentoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      layoutId={layoutId}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={cn(
        "group relative flex flex-col overflow-hidden border border-brand-border bg-brand-surface/30 p-6 transition-all duration-500",
        onClick && "cursor-pointer hover:border-brand-accent/50",
        className
      )}
    >
      {/* Mouse Tracking Glow Background */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 255, 209, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Corner Accent for Brutalist look */}
      <div 
        className={cn(
          "absolute top-0 right-0 w-8 h-8 bg-brand-accent opacity-0 transition-opacity duration-500 z-0",
          onClick && "group-hover:opacity-100"
        )} 
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} 
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}
