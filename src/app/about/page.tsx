import { FadeIn } from "@/components/animations/FadeIn";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
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
        <div className="max-w-3xl mb-24">
          <h1 className="text-page-title text-text-primary mb-6">
            Tentang Saya
          </h1>
          <p className="text-body text-text-secondary leading-relaxed">
            {profileData.bio} Saya berfokus pada perpaduan antara desain antarmuka yang estetis dan performa sistem yang optimal.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div>
            <h3 className="text-[14px] font-semibold tracking-wide text-text-secondary mb-6 border-b border-border pb-3 uppercase">Keahlian Teknis</h3>
            <div className="flex flex-wrap gap-2">
              {profileData.skills.map((skill: string) => (
                <span key={skill} className="bg-bg-secondary px-4 py-2 rounded-[980px] text-[13px] font-medium tracking-wide text-text-primary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[14px] font-semibold tracking-wide text-text-secondary mb-6 border-b border-border pb-3 uppercase">Minat & Eksplorasi</h3>
            <div className="flex flex-wrap gap-2">
              {profileData.interests.map((interest: string) => (
                <span key={interest} className="bg-white border border-border px-4 py-2 rounded-[980px] text-[13px] font-medium tracking-wide text-text-primary">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      <ExperienceTimeline education={profileData.education} experience={experienceData} />
    </div>
  );
}
