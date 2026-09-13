"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Magnetic } from "@/components/animations/Magnetic";
import { Copy, Mail, MapPin, ArrowUpRight, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();

  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@example.com");
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  return (
    <>
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-bg-secondary border border-border px-4 py-2 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] text-[13px] font-medium text-text-primary"
            role="alert"
          >
            <Check size={14} className="text-accent" /> Email berhasil disalin
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto max-w-[1024px] px-6 sm:px-12 py-12 md:py-24 min-h-[80vh] flex flex-col justify-center bg-bg-primary">
        <FadeIn className="max-w-3xl">
          <h1 className="text-page-title text-text-primary mb-6">
            Mari Bekerja Sama
          </h1>
          <p className="text-body text-text-secondary mb-16">
            Tertarik untuk berkolaborasi, memiliki pertanyaan, atau sekadar ingin menyapa? Kotak masuk saya selalu terbuka.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Email Actions */}
            <div className="flex flex-col gap-6">
              <Magnetic intensity={0.15} className="w-full">
                <a href="mailto:hello@example.com" className="w-full inline-block">
                  <Button variant="primary" className="w-full flex items-center justify-center gap-3">
                    <Mail size={18} /> hello@example.com
                  </Button>
                </a>
              </Magnetic>
              <Magnetic intensity={0.15} className="w-full">
                <div className="w-full inline-block">
                  <Button variant="secondary" onClick={handleCopyEmail} className="w-full flex items-center justify-center gap-3">
                    <Copy size={18} /> Salin Alamat Email
                  </Button>
                </div>
              </Magnetic>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Magnetic intensity={0.08} className="w-full h-full">
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Kunjungi profil GitHub" className="flex flex-col items-start justify-between p-6 bg-bg-secondary rounded-2xl transition-colors duration-300 group hover:bg-border/50 h-full">
                  <FaGithub size={24} className="text-text-secondary group-hover:text-text-primary mb-6 transition-colors" />
                  <div className="flex w-full items-center justify-between">
                    <span className="font-semibold text-[15px] text-text-primary">GitHub</span>
                    <ArrowUpRight size={16} className="text-text-secondary group-hover:text-text-primary transition-colors" />
                  </div>
                </a>
              </Magnetic>
              <Magnetic intensity={0.08} className="w-full h-full">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Kunjungi profil LinkedIn" className="flex flex-col items-start justify-between p-6 bg-bg-secondary rounded-2xl transition-colors duration-300 group hover:bg-border/50 h-full">
                  <FaLinkedin size={24} className="text-text-secondary group-hover:text-text-primary mb-6 transition-colors" />
                  <div className="flex w-full items-center justify-between">
                    <span className="font-semibold text-[15px] text-text-primary">LinkedIn</span>
                    <ArrowUpRight size={16} className="text-text-secondary group-hover:text-text-primary transition-colors" />
                  </div>
                </a>
              </Magnetic>
              <div className="sm:col-span-2 flex items-center justify-center gap-3 p-6 bg-bg-secondary rounded-2xl">
                <MapPin size={18} className="text-text-secondary" />
                <span className="font-medium text-[15px] text-text-secondary">Semarang, Indonesia</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  );
}
