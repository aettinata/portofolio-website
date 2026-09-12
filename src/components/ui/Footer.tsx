import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-secondary pt-16 pb-8 relative z-10">
      <div className="container mx-auto max-w-[1024px] px-6 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-border pb-12 mb-8 gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-[24px] font-semibold tracking-tight text-text-primary mb-2">
              Faisal Adama
            </p>
            <p className="text-[15px] text-text-secondary max-w-sm">
              Membangun solusi digital yang elegan, terukur, dan berdampak melalui kode.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-bg-primary text-text-secondary hover:text-text-primary shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-bg-primary text-text-secondary hover:text-text-primary shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-bg-primary text-text-secondary hover:text-text-primary shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <div className="text-[12px] text-text-secondary">
            &copy; {currentYear} Faisal Adama. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[12px] text-text-secondary">
            <Link href="/about" className="hover:text-text-primary transition-colors py-2 px-1 inline-block">
              Tentang
            </Link>
            <Link href="/projects" className="hover:text-text-primary transition-colors py-2 px-1 inline-block">
              Portofolio
            </Link>
            <Link href="/certifications" className="hover:text-text-primary transition-colors py-2 px-1 inline-block">
              Sertifikasi
            </Link>
            <Link href="/contact" className="hover:text-text-primary transition-colors py-2 px-1 inline-block">
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
