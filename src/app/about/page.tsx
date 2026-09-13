import { FadeIn } from "@/components/animations/FadeIn";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { NowSection } from "@/components/sections/NowSection";
import { SectionDivider } from "@/components/ui/SectionDivider";
import profileData from "@/data/profile.json";
import Image from "next/image";

export default function AboutPage() {
  const experienceData = [
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      year: "2026 — SEKARANG",
      description: "Membangun berbagai aplikasi web modern menggunakan Next.js dan ekosistem React. Berfokus pada performa, aksesibilitas, dan desain UI/UX yang premium."
    },
    {
      role: "Frontend Developer Intern",
      company: "Tech Startup Inc.",
      year: "2025",
      description: "Membantu migrasi sistem lama ke React, mengimplementasikan design system baru, dan meningkatkan skor Core Web Vitals hingga 90+."
    }
  ];

  return (
    <div className="container mx-auto max-w-[1024px] px-6 sm:px-12 py-12 md:py-24 bg-bg-primary">
      <FadeIn>
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 md:gap-12 mb-16 md:mb-24 max-w-4xl">
          <div className="max-w-2xl">
            <h1 className="text-page-title text-text-primary mb-6">
              Tentang Saya
            </h1>
            <p className="text-body text-text-secondary leading-relaxed text-base sm:text-lg">
              {profileData.bio} Saya berfokus pada perpaduan antara desain antarmuka yang estetis dan performa sistem yang optimal.
            </p>
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

      <NowSection className="mb-16 md:mb-20" />

      <SectionDivider className="mb-16 md:mb-20" />

      <BentoGrid className="mb-16 md:mb-20" />

      <SectionDivider className="mb-16 md:mb-20" />

      <GitHubActivity className="mb-16 md:mb-20" />

      <SectionDivider className="mb-16 md:mb-20" />

      <ExperienceTimeline education={profileData.education} experience={experienceData} />
    </div>
  );
}
