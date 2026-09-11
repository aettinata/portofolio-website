"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface ExperienceItem {
  role?: string;
  degree?: string;
  institution?: string;
  company?: string;
  year: string;
  description?: string;
}

interface ExperienceTimelineProps {
  education: ExperienceItem[];
  experience: ExperienceItem[];
}

export function ExperienceTimeline({ education, experience }: ExperienceTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-section-title text-text-primary mb-4">
          Perjalanan Karir
        </h2>
        <p className="text-body text-text-secondary">Jejak langkah pendidikan dan pengalaman profesional.</p>
      </div>

      <div className="relative">
        {/* Background track line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-border" />
        
        {/* Animated fill line */}
        <motion.div 
          className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-[1px] bg-accent"
          style={{ height: lineHeight }}
        />

        <div className="space-y-8 md:space-y-16">
          <div className="relative">
            {experience.map((item, idx) => (
              <TimelineItem key={`exp-${idx}`} item={item} index={idx} isLeft={idx % 2 === 0} />
            ))}
          </div>

          <div className="relative pt-8 md:pt-16">
            {education.map((item, idx) => (
              <TimelineItem key={`edu-${idx}`} item={item} index={idx + experience.length} isLeft={(idx + experience.length) % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ item, index, isLeft }: { item: ExperienceItem, index: number, isLeft: boolean }) {
  const title = item.role || item.degree;
  const subtitle = item.company || item.institution;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div 
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Apple ease out
      className={`relative flex flex-col md:flex-row items-start md:items-center w-full my-8 ${isLeft ? "md:justify-start" : "md:justify-end"}`}
    >
      {/* Node indicator */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bg-primary border-[3px] border-border z-10 transition-colors duration-300 hover:border-accent" />
      
      {/* Content Card */}
      <div className={`ml-12 md:ml-0 w-full md:w-[45%] p-6 md:p-8 bg-bg-secondary rounded-2xl transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] group ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}>
        <span className="inline-block mb-3 text-[12px] font-medium tracking-wide text-text-secondary uppercase">
          {item.year}
        </span>
        <h3 className="text-card-title text-text-primary mb-1">
          {title}
        </h3>
        <p className="text-[15px] font-medium text-text-secondary mb-3">{subtitle}</p>
        
        {item.description && (
          <p className="text-body text-text-secondary">
            {item.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
