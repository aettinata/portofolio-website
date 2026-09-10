"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";
import { Download } from "lucide-react";

export function Header() {
  const pathname = usePathname();

  const links = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/about" },
    { name: "Portofolio", href: "/projects" },
    { name: "Sertifikasi", href: "/certifications" },
    { name: "Kontak", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel">
      <div className="container mx-auto max-w-[1024px] px-6 sm:px-12">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight text-text-primary group cursor-pointer transition-opacity hover:opacity-70">
            Faisal Adama
          </Link>

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
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <Button variant="primary" className="h-8 px-4 py-0 text-[12px] gap-2 ml-2">
                <Download size={14} /> Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
