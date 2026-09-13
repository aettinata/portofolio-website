import { FadeIn } from "@/components/animations/FadeIn";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { NowSection } from "@/components/sections/NowSection";
import { SectionDivider } from "@/components/ui/SectionDivider";
import profileData from "@/data/profile.json";

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
        <div className="max-w-3xl mb-16 md:mb-24">
          <h1 className="text-page-title text-text-primary mb-6">
            Tentang Saya
          </h1>
          <p className="text-body text-text-secondary leading-relaxed">
            {profileData.bio} Saya berfokus pada perpaduan antara desain antarmuka yang estetis dan performa sistem yang optimal.
          </p>
        </div>
      </FadeIn>

      <NowSection className="mb-16 md:mb-20" />

      <SectionDivider className="mb-16 md:mb-20" />

      <BentoGrid className="mb-16 md:mb-20" />

      <SectionDivider className="mb-16 md:mb-20" />

      <ExperienceTimeline education={profileData.education} experience={experienceData} />
    </div>
  );
}
