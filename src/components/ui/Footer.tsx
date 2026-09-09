import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border bg-brand-surface pt-20 pb-10 relative z-10">
      <div className="container mx-auto max-w-[1200px] px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col border-b border-brand-border pb-12 mb-8">
          <h2 className="text-4xl sm:text-6xl md:text-[6rem] font-heading font-bold uppercase tracking-widest text-brand-light leading-none mb-6">
            Let&apos;s <span className="text-brand-accent glow-cyan">Build</span>
          </h2>
          <p className="text-xl sm:text-2xl font-sans text-brand-gray max-w-2xl">
            Membangun solusi digital yang solid, terukur, dan berdampak.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-start">
            <Link href="/" className="text-2xl font-heading font-bold uppercase tracking-widest text-brand-light mb-2 group cursor-pointer">
              Portofolio<span className="animate-blink text-brand-accent">_</span>
            </Link>
            <div className="text-sm font-sans text-brand-dim mt-4">
              &copy; {currentYear} Faisal Adama.<br />
              All rights reserved.
            </div>
          </div>

          <div className="flex flex-wrap gap-4 md:justify-end items-end">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-brand-border text-brand-dim hover:border-brand-accent hover:text-brand-accent cursor-pointer transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-brand-border text-brand-dim hover:border-brand-accent hover:text-brand-accent cursor-pointer transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-brand-border text-brand-dim hover:border-brand-accent hover:text-brand-accent cursor-pointer transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-3 border border-brand-border text-brand-dim hover:border-brand-accent hover:text-brand-accent cursor-pointer transition-all duration-300 flex items-center gap-2 font-heading uppercase tracking-widest text-xs font-bold"
              aria-label="Email"
            >
              <Mail size={22} /> Get in touch
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
