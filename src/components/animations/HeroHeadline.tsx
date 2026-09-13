"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Fragment } from "react";

interface HeroHeadlineProps {
  className?: string;
}

const words = [
  { text: "Digital", breakAfterMd: false },
  { text: "crafter", breakAfterMd: false },
  { text: "&", breakAfterMd: true },
  { text: "developer.", breakAfterMd: false },
];

export function HeroHeadline({ className = "" }: HeroHeadlineProps) {
  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0 : 0.5;

  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.2,
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const wordVariants: Variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={`text-hero text-text-primary tracking-tight ${className}`}
    >
      {words.map((item, index) => (
        <Fragment key={index}>
          <motion.span
            variants={wordVariants}
            className="inline-block mr-[0.25em]"
          >
            {item.text}
          </motion.span>
          {item.breakAfterMd && <br className="hidden md:block" />}
        </Fragment>
      ))}
    </motion.h1>
  );
}
