import { FadeIn } from "@/components/animations/FadeIn";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { NowSection } from "@/components/sections/NowSection";
import { SectionDivider } from "@/components/ui/SectionDivider";
import profileData from "@/data/profile.json";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Award, Languages, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Tentang Saya — Faisal Adama",
  description: "Profil profesional, pencapaian akademik, kemahiran bahasa internasional, dan perjalanan karir rekayasa perangkat lunak Faisal Adama.",
};

export default function AboutPage() {
  const experienceData = profileData.experience || [];
  const educationData = profileData.education || [];

  return (
    <div className="container mx-auto max-w-[1024px] px-6 sm:px-12 py-12 md:py-24 bg-bg-primary">
      {/* Profil Header */}
      <FadeIn>
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 md:gap-12 mb-16 md:mb-24 max-w-4xl">
          <div className="max-w-2xl">
            <h1 className="text-page-title text-text-primary mb-6">
              Tentang Saya
            </h1>
            <div className="space-y-4 text-body text-text-secondary leading-relaxed text-base sm:text-lg">
              <p>
                {profileData.bio}
              </p>
              <p className="text-sm sm:text-base text-text-secondary/90">
                Fokus kerja saya menitikberatkan pada arsitektur sistem yang bersih, performa tanpa kompromi, dan visual minimalis monokrom bernuansa Apple yang mengutamakan keterbacaan data. Selain rekayasa web modern, saya memiliki pengalaman memimpin tim program digitalisasi masyarakat serta mengembangkan aplikasi Android native.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden border border-border bg-bg-secondary shadow-xs">
              <Image
                src="/images/profile.jpg"
                alt={profileData.name}
                fill
                priority
                sizes="(max-width: 768px) 112px, 160px"
                className="object-cover grayscale contrast-[1.05]"
              />
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Seksi Aktivitas Terkini (Now) */}
      <NowSection className="mb-16 md:mb-20" />

      <SectionDivider className="mb-16 md:mb-20" />

      {/* Seksi Bento Grid (Highlight Persona, Statistik & Tech Stack) */}
      <BentoGrid className="mb-16 md:mb-20" />

      <SectionDivider className="mb-16 md:mb-20" />

      {/* Seksi Pencapaian & Kredensial Akademik/Bahasa */}
      <section aria-labelledby="achievements-heading" className="mb-16 md:mb-20">
        <FadeIn>
          <div className="mb-8 md:mb-12">
            <h2 id="achievements-heading" className="text-section-title text-text-primary mb-2">
              Pencapaian &amp; Kredensial
            </h2>
            <p className="text-body text-text-secondary">
              Pencapaian akademik, kemahiran bahasa internasional, dan lisensi kompetensi industri terverifikasi.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Akademik */}
          <FadeIn delay={0.1} className="h-full">
            <div className="h-full bg-bg-secondary border border-border/70 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-text-primary/20 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-10 h-10 rounded-full bg-bg-primary border border-border/60 flex items-center justify-center text-text-primary">
                    <GraduationCap size={18} aria-hidden="true" />
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-bg-primary border border-border text-text-primary">
                    IPK 3.72 · Cum Laude
                  </span>
                </div>
                <h3 className="text-card-title text-text-primary mb-1">
                  S1 Teknik Informatika
                </h3>
                <p className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">
                  Universitas Negeri Semarang · 2022 — 2026
                </p>
                <p className="text-body text-text-secondary text-sm leading-relaxed">
                  Lulus dengan predikat Cum Laude. Riset skripsi berfokus pada optimasi LightGBM dan Binary Grey Wolf Optimizer untuk deteksi insider threat pada dataset CERT r4.2.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Bahasa */}
          <FadeIn delay={0.2} className="h-full">
            <div className="h-full bg-bg-secondary border border-border/70 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-text-primary/20 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-10 h-10 rounded-full bg-bg-primary border border-border/60 flex items-center justify-center text-text-primary">
                    <Languages size={18} aria-hidden="true" />
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-bg-primary border border-border text-text-primary">
                    Skor 570 / 677
                  </span>
                </div>
                <h3 className="text-card-title text-text-primary mb-1">
                  TOEFL ITP
                </h3>
                <p className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">
                  Kemahiran Bahasa Inggris · 2025
                </p>
                <p className="text-body text-text-secondary text-sm leading-relaxed">
                  Pengujian resmi Institutional Testing Program yang mengukur kemampuan listening comprehension, structure &amp; written expression, dan reading standar profesional.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Card 3: Sertifikasi */}
          <FadeIn delay={0.3} className="h-full">
            <div className="h-full bg-bg-secondary border border-border/70 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-text-primary/20 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-10 h-10 rounded-full bg-bg-primary border border-border/60 flex items-center justify-center text-text-primary group-hover:text-accent transition-colors">
                    <Award size={18} aria-hidden="true" />
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-bg-primary border border-border text-text-primary">
                    9 Lisensi Resmi
                  </span>
                </div>
                <h3 className="text-card-title text-text-primary mb-1">
                  Dicoding Indonesia
                </h3>
                <p className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">
                  Google Partner Training · 2024
                </p>
                <p className="text-body text-text-secondary text-sm leading-relaxed">
                  9 sertifikasi kompetensi terakreditasi mencakup Android Intermediate (150 jam), Machine Learning on Android, Android Fundamental, Kotlin, dan Git.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50">
                <Link
                  href="/certifications"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:opacity-80 transition-opacity"
                >
                  <span>Buka Halaman Sertifikasi</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider className="mb-16 md:mb-20" />

      {/* Aktivitas GitHub */}
      <GitHubActivity className="mb-16 md:mb-20" />

      <SectionDivider className="mb-16 md:mb-20" />

      {/* Linimasa Pengalaman Karir & Pendidikan */}
      <ExperienceTimeline education={educationData} experience={experienceData} />
    </div>
  );
}
