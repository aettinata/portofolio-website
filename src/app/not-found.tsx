"use client";

import Link from "next/link";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/animations/Magnetic";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background p-6 text-foreground">
      {/* 1. Subtle Grid Pattern Background */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <motion.div
        className="z-10 flex w-full max-w-md flex-col items-center text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* 2. Favicon Badge */}
        <motion.div variants={item} className="mb-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-[14px] bg-foreground text-background">
            <span className="font-sans text-2xl font-bold leading-none tracking-tight">
              FA
            </span>
          </div>
        </motion.div>

        {/* 3. Angka 404 Raksasa */}
        <motion.h1
          variants={item}
          className="text-[clamp(96px,20vw,180px)] font-bold leading-none tracking-[-0.04em] text-primary"
        >
          404
        </motion.h1>

        {/* 4. Heading */}
        <motion.h2
          variants={item}
          className="mt-4 text-2xl font-semibold md:text-3xl"
        >
          Halaman tidak ditemukan
        </motion.h2>

        {/* 5. Subtext */}
        <motion.p
          variants={item}
          className="mt-4 text-[17px] text-secondary text-foreground/60"
        >
          Sepertinya kamu tersesat. Mari kembali ke rumah.
        </motion.p>

        {/* 6. Call to Action Button */}
        <motion.div variants={item} className="mt-8">
          <Magnetic intensity={0.2}>
            {/* Link dibungkus focus-visible agar outline tampil di luar tombol saat tab */}
            <Link
              href="/"
              className="inline-block rounded-[980px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              tabIndex={-1}
            >
              <Button variant="primary" className="gap-2" tabIndex={0} aria-label="Kembali ke Beranda">
                <ArrowLeft className="h-5 w-5" />
                Kembali ke Beranda
              </Button>
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>
    </div>
  );
}
