import { HeroHeadline } from "@/components/animations/HeroHeadline";
import { HeroScrollParallax } from "@/components/animations/HeroScrollParallax";
import { FadeIn } from "@/components/animations/FadeIn";
import { Magnetic } from "@/components/animations/Magnetic";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import profileData from "@/data/profile.json";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col relative bg-bg-primary min-w-0 w-full overflow-x-hidden">
      <div className="container mx-auto max-w-[1024px] px-6 sm:px-12 relative z-10 py-24 md:py-32">
        
        <HeroScrollParallax className="w-full">
          <div className="w-full flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 lg:gap-12">
            {/* Teks column */}
            <div className="flex-1 max-w-2xl">
              <HeroHeadline className="mb-6" />
              
              <FadeIn delay={0.6}>
                <p className="text-body text-text-secondary max-w-xl mb-12">
                  Halo, saya {profileData.name}. {profileData.bio}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Magnetic intensity={0.2}>
                    <Link href="/projects">
                      <Button variant="primary">
                        Lihat Karya
                      </Button>
                    </Link>
                  </Magnetic>
                  <Magnetic intensity={0.2}>
                    <Link href="/about">
                      <Button variant="secondary">
                        Tentang Saya
                      </Button>
                    </Link>
                  </Magnetic>
                </div>
              </FadeIn>
            </div>

            {/* Foto column */}
            <FadeIn delay={0.1} className="shrink-0">
              <div className="relative w-36 h-36 md:w-44 md:h-44 lg:w-72 lg:h-72 rounded-full overflow-hidden border border-border/80 bg-bg-secondary shadow-xs">
                <Image
                  src="/images/profile.jpg"
                  alt={profileData.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 144px, (max-width: 1024px) 176px, 288px"
                  className="object-cover grayscale contrast-[1.05]"
                />
              </div>
            </FadeIn>
          </div>
        </HeroScrollParallax>
      </div>

      <div className="mt-auto w-full overflow-hidden">
        <TechMarquee />
      </div>

      <FeaturedProjects />
    </div>
  );
}
