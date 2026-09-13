"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";
import { Magnetic } from "@/components/animations/Magnetic";
import { Download, Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/about" },
    { name: "Portofolio", href: "/projects" },
    { name: "Sertifikasi", href: "/certifications" },
    { name: "Kontak", href: "/contact" },
  ];

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setMobileOpen(false);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [mobileOpen, handleKeyDown]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full glass-panel">
        <div className="container mx-auto max-w-[1024px] px-6 sm:px-12">
          <div className="flex h-14 items-center justify-between">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-text-primary group cursor-pointer transition-opacity hover:opacity-70"
              aria-label="Beranda"
            >
              Faisal Adama
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center space-x-6">
              {links.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-[13px] font-medium tracking-wide transition-colors duration-200 py-2 ${
                      isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Magnetic intensity={0.2} className="hidden sm:inline-flex">
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  <Button variant="primary" className="min-h-[44px] px-4 py-0 text-[12px] gap-2 ml-2">
                    <Download size={14} /> Resume
                  </Button>
                </a>
              </Magnetic>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden flex items-center justify-center w-[44px] h-[44px] rounded-full text-text-secondary hover:bg-bg-secondary hover:text-text-primary transition-colors duration-200 ml-1"
                aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
              className="fixed top-14 right-0 bottom-0 z-50 w-72 bg-bg-primary border-l border-border md:hidden overflow-y-auto"
              role="navigation"
              aria-label="Menu mobile"
            >
              <div className="flex flex-col px-6 py-8 gap-1">
                {links.map((link, index) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                  
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.05, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-colors duration-200 ${
                          isActive
                            ? "text-text-primary bg-bg-secondary"
                            : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + links.length * 0.05, duration: 0.25 }}
                  className="mt-6 pt-6 border-t border-border"
                >
                  <a href="/resume.pdf" target="_blank" rel="noreferrer" className="block">
                    <Button variant="primary" className="w-full flex items-center justify-center gap-2">
                      <Download size={14} /> Resume
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
