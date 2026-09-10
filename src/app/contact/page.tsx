"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Magnetic } from "@/components/animations/Magnetic";
import { Copy, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@example.com");
    alert("Email berhasil disalin!");
  };

  return (
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
            <Magnetic intensity={0.1}>
              <a href="mailto:hello@example.com" className="w-full inline-block">
                <Button variant="primary" className="w-full flex items-center justify-center gap-3">
                  <Mail size={18} /> hello@example.com
                </Button>
              </a>
            </Magnetic>
            <Magnetic intensity={0.1}>
              <div className="w-full inline-block">
                <Button variant="secondary" onClick={handleCopyEmail} className="w-full flex items-center justify-center gap-3">
                  <Copy size={18} /> Salin Alamat Email
                </Button>
              </div>
            </Magnetic>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex flex-col items-start justify-between p-6 bg-bg-secondary rounded-[18px] transition-colors duration-300 group hover:bg-[#E8E8ED]">
              <FaGithub size={24} className="text-text-secondary group-hover:text-text-primary mb-6 transition-colors" />
              <div className="flex w-full items-center justify-between">
                <span className="font-semibold text-[15px] text-text-primary">GitHub</span>
                <ArrowUpRight size={16} className="text-text-secondary group-hover:text-text-primary transition-colors" />
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex flex-col items-start justify-between p-6 bg-bg-secondary rounded-[18px] transition-colors duration-300 group hover:bg-[#E8E8ED]">
              <FaLinkedin size={24} className="text-text-secondary group-hover:text-text-primary mb-6 transition-colors" />
              <div className="flex w-full items-center justify-between">
                <span className="font-semibold text-[15px] text-text-primary">LinkedIn</span>
                <ArrowUpRight size={16} className="text-text-secondary group-hover:text-text-primary transition-colors" />
              </div>
            </a>
            <div className="sm:col-span-2 flex items-center justify-center gap-3 p-6 bg-bg-secondary rounded-[18px]">
              <MapPin size={18} className="text-text-secondary" />
              <span className="font-medium text-[15px] text-text-secondary">Semarang, Indonesia</span>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
