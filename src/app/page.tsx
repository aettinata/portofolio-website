import { HeroHeadline } from "@/components/animations/HeroHeadline";
import { FadeIn } from "@/components/animations/FadeIn";
import { Magnetic } from "@/components/animations/Magnetic";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import profileData from "@/data/profile.json";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col relative bg-bg-primary min-w-0 w-full overflow-x-hidden">
      <div className="container mx-auto max-w-[1024px] px-6 sm:px-12 relative z-10 py-24 md:py-32">
        
        <div className="w-full flex flex-col items-start max-w-3xl">
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
      </div>

      <div className="mt-auto w-full overflow-hidden">
        <TechMarquee />
      </div>

      <FeaturedProjects />
    </div>
  );
}
