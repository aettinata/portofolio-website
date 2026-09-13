import { BookOpen, Code2, Music, Bookmark } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import profileData from "@/data/profile.json";
import { Profile } from "@/types";

interface NowSectionProps {
  className?: string;
}

export function NowSection({ className = "" }: NowSectionProps) {
  const data = profileData as Profile;
  const nowData = data.now;

  if (!nowData) return null;

  const items = [
    {
      key: "learning",
      label: "SEDANG BELAJAR",
      value: nowData.learning,
      icon: Code2,
    },
    {
      key: "reading",
      label: "SEDANG DIBACA",
      value: nowData.reading,
      icon: BookOpen,
    },
    {
      key: "building",
      label: "SEDANG DIBANGUN",
      value: nowData.building,
      icon: Bookmark,
    },
    {
      key: "listening",
      label: "SEDANG DIDENGAR",
      value: nowData.listening,
      icon: Music,
    },
  ];

  return (
    <section className={`w-full ${className}`}>
      <FadeIn>
        <div className="mb-8 md:mb-12">
          <h2 className="text-section-title text-text-primary mb-2">
            Sekarang
          </h2>
          <p className="text-body text-text-secondary">
            Aktivitas, fokus, dan hal yang sedang saya eksplorasi saat ini.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <FadeIn key={item.key} delay={index * 0.1} className="h-full">
              <div className="bg-bg-secondary rounded-2xl p-6 h-full flex flex-col justify-between border border-transparent hover:border-text-primary/10 transition-all duration-200">
                <div>
                  <div className="flex items-center gap-2 mb-4 text-text-secondary">
                    <Icon size={16} aria-hidden="true" />
                    <span className="text-[11px] font-medium tracking-widest text-text-secondary uppercase">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-[15px] font-medium text-text-primary leading-snug">
                    {item.value}
                  </p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
