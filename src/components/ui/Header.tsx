"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NavItem } from "@/types";

const NAV_LINKS: NavItem<string>[] = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/about" },
  { name: "Portofolio", href: "/projects" },
  { name: "Kontak", href: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-border/80 bg-brand-dark/80 backdrop-blur-md">
      <div className="container mx-auto max-w-[1200px] px-6 sm:px-12 lg:px-20">
        <div className="flex h-16 items-stretch justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center text-xl font-heading font-bold uppercase tracking-widest text-brand-light group cursor-pointer">
            Portofolio<span className="animate-blink text-brand-accent">_</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-stretch border-l border-brand-border/80">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative flex items-center px-6 border-r border-brand-border/80 text-sm font-heading font-bold uppercase tracking-widest text-brand-dim hover:text-brand-light cursor-pointer transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-brand-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center border-l border-brand-border/80 pl-6">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-dim hover:text-brand-light cursor-pointer transition-colors duration-300"
              aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-brand-border/80 bg-brand-dark/95 backdrop-blur-md">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="border-b border-brand-border/50 px-6 py-4 text-sm font-heading font-bold uppercase tracking-widest text-brand-dim hover:bg-brand-surface hover:text-brand-light cursor-pointer transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
