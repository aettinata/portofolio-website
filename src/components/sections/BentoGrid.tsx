import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";
import profileData from "@/data/profile.json";
import { MapPin, Briefcase } from "lucide-react";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiGit 
} from "react-icons/si";

interface BentoGridProps {
  className?: string;
}

const techStack = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiGit, name: "Git" },
];

export function BentoGrid({ className }: BentoGridProps) {
  const edu = profileData.education[0];

  return (
    <section aria-label="Highlight Profil & Keahlian" className={cn("w-full", className)}>
      <h2 className="sr-only">Sorotan Profil & Keahlian</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* KARTU 1: Persona & Fokus (2x1) */}
        <FadeIn delay={0.05} className="md:col-span-2 lg:col-span-2 h-full">
          <div className="h-full bg-bg-secondary border border-border/70 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-text-primary/20 transition-colors duration-200">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-text-secondary">
                  Persona & Fokus
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-text-primary/10 text-text-primary text-[11px] font-medium shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-primary animate-pulse" />
                  Tersedia untuk Kerja
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 tracking-tight">
                Membangun antarmuka web modern dengan presisi estetika tinggi.
              </h3>
              <p className="text-body text-text-secondary text-sm leading-relaxed">
                Menggabungkan ketelitian tipografi Apple-inspired, interaksi mikro yang halus, dan arsitektur performa tinggi berbasis Next.js & TypeScript.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-2 text-xs text-text-secondary">
              <MapPin size={12} aria-hidden="true" className="shrink-0" />
              <span>Semarang, Indonesia</span>
              <span className="text-text-secondary/50">•</span>
              <Briefcase size={12} aria-hidden="true" className="shrink-0" />
              <span>Remote / On-site</span>
            </div>
          </div>
        </FadeIn>

        {/* KARTU 2: Stats (1x1) */}
        <FadeIn delay={0.1} className="lg:col-span-1 h-full">
          <div className="h-full bg-bg-secondary border border-border/70 rounded-2xl p-6 flex flex-col justify-between hover:border-text-primary/20 transition-colors duration-200">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-text-secondary">
              Statistik
            </span>
            <div className="space-y-4 my-auto py-3">
              <div>
                <div className="text-2xl font-bold text-text-primary tracking-tight">10+</div>
                <div className="text-xs text-text-secondary mt-0.5">Proyek Diselesaikan</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-text-primary tracking-tight">6+</div>
                <div className="text-xs text-text-secondary mt-0.5">Teknologi Modern</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-text-primary tracking-tight">2+</div>
                <div className="text-xs text-text-secondary mt-0.5">Sertifikasi Cloud/Data</div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* KARTU 3: Tech Stack (1x1) */}
        <FadeIn delay={0.15} className="lg:col-span-1 h-full">
          <div className="h-full bg-bg-secondary border border-border/70 rounded-2xl p-6 flex flex-col justify-between hover:border-text-primary/20 transition-colors duration-200">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-text-secondary mb-3">
              Tech Stack
            </span>
            <div className="grid grid-cols-3 gap-2.5 my-auto py-1">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center justify-center p-2 rounded-xl bg-bg-primary/50 border border-border/50 hover:border-text-primary/20 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-text-primary" />
                    <span className="text-[8px] sm:text-[9px] text-text-secondary mt-1 font-medium text-center leading-tight">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* KARTU 4: Pendidikan (2x1) */}
        <FadeIn delay={0.2} className="md:col-span-2 lg:col-span-2 h-full">
          <div className="h-full bg-bg-secondary border border-border/70 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-text-primary/20 transition-colors duration-200">
            <div>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-text-secondary">
                Pendidikan Formal
              </span>
              <div className="mt-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary tracking-tight">
                      {edu?.degree || "S1 Teknik Informatika"}
                    </h4>
                    <p className="text-sm text-text-secondary mt-1">
                      {edu?.institution || "Universitas Negeri Semarang"}
                    </p>
                  </div>
                  <span className="text-xs text-text-secondary px-3 py-1 rounded-full bg-bg-primary/50 border border-border/50 shrink-0">
                    {edu?.year || "2022 — 2026"}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary mt-4 leading-relaxed">
                  Fondasi komputasi komprehensif mencakup Algoritma & Struktur Data, Rekayasa Perangkat Lunak, Jaringan Komputer, dan Basis Data.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* KARTU 5: Minat & Eksplorasi (2x1) */}
        <FadeIn delay={0.25} className="md:col-span-2 lg:col-span-2 h-full">
          <div className="h-full bg-bg-secondary border border-border/70 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-text-primary/20 transition-colors duration-200">
            <div>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-text-secondary">
                Minat & Eksplorasi
              </span>
              <h4 className="text-lg font-semibold text-text-primary mt-3 mb-2 tracking-tight">
                Bidang yang Terus Dieksplorasi
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary mb-4 leading-relaxed">
                Di luar pengembangan web frontend inti, saya aktif mendalami teknologi penunjang masa depan digital:
              </p>
              <div className="flex flex-wrap gap-2">
                {profileData.interests.map((interest) => (
                  <span
                    key={interest}
                    className="bg-bg-primary/50 border border-border/70 px-3.5 py-1.5 rounded-full text-xs font-medium text-text-primary"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
