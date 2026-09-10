import { FadeIn } from "@/components/animations/FadeIn";
import { Magnetic } from "@/components/animations/Magnetic";
import { TechMarquee } from "@/components/sections/TechMarquee";
import profileData from "@/data/profile.json";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col justify-center relative min-h-[85vh] bg-bg-primary">
      <div className="container mx-auto max-w-[1024px] px-6 sm:px-12 relative z-10 py-24 md:py-32">
        
        <FadeIn delay={0.1} className="w-full flex flex-col items-start max-w-3xl">
          <h1 className="text-hero text-text-primary mb-6 tracking-tight">
            Digital crafter & <br className="hidden md:block" />
            developer.
          </h1>
          
          <p className="text-body text-text-secondary max-w-xl mb-12">
            Halo, saya {profileData.name}. {profileData.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Magnetic intensity={0.1}>
              <Link href="/projects">
                <Button variant="primary">
                  Lihat Karya
                </Button>
              </Link>
            </Magnetic>
            <Magnetic intensity={0.1}>
              <Link href="/about">
                <Button variant="secondary">
                  Tentang Saya
                </Button>
              </Link>
            </Magnetic>
          </div>
        </FadeIn>
      </div>

      <div className="mt-auto opacity-70">
        <TechMarquee items={profileData.skills} />
      </div>
    </main>
  );
}
