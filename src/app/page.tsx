import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import profileData from "@/data/profile.json";

export default function Home() {
  return (
    <section className="container mx-auto max-w-[1200px] px-6 sm:px-12 lg:px-20 pt-32 pb-20 relative z-10 flex-1 flex flex-col justify-center min-h-[calc(100vh-4rem)]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 relative">
        
        {/* Main Text */}
        <div className="lg:col-span-8 lg:pr-12 xl:pr-20 flex flex-col justify-center">
          {/* Status Badge */}
          <FadeIn delay={0}>
            <div className="flex items-center gap-3 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-accent" />
              </span>
              <span className="text-xs font-heading uppercase tracking-[0.2em] text-brand-accent">
                Available for hire
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.9] font-bold uppercase tracking-[-0.02em] text-brand-light">
              I Build<br />
              <span className="text-brand-accent glow-cyan">
                Digital
              </span><br />
              Experiences.
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="mt-10 border-l-2 border-brand-accent/30 pl-6">
              <h2 className="text-xl sm:text-2xl font-heading text-brand-gray uppercase tracking-widest mb-3">
                {profileData.title}
              </h2>
              <p className="text-brand-gray max-w-xl text-base sm:text-lg font-sans leading-relaxed">
                {profileData.tagline} {profileData.bio}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-12 flex flex-wrap gap-4 items-center">
              <Link href="/projects">
                <Button variant="neon" size="lg" className="gap-3">
                  View Work <ArrowRight size={18} />
                </Button>
              </Link>
              <a href="/cv-placeholder.pdf" target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg" className="gap-3">
                  Resume <Download size={18} />
                </Button>
              </a>
            </div>
          </FadeIn>

          {/* Tech Tags */}
          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-2">
              {profileData.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 border border-brand-border text-xs font-heading uppercase tracking-widest text-brand-dim hover:border-brand-accent/30 hover:text-brand-gray transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Asymmetrical Image Section */}
        <div className="lg:col-span-4 mt-16 lg:mt-0 relative group flex items-center justify-end">
          <FadeIn delay={0.1} direction="left">
            <div className="relative w-full sm:w-[70%] lg:w-full aspect-[3/4] border border-brand-border bg-brand-surface overflow-hidden transition-all duration-300 group-hover:border-brand-accent/50 group-hover:border-glow-cyan">
              {/* Fallback pattern / Placeholder for B&W Photo */}
              <div className="absolute inset-0 grayscale contrast-150 opacity-80 bg-[radial-gradient(circle_at_center,_var(--color-brand-border)_1px,_transparent_1px)] [background-size:20px_20px]" />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-noise">
                <span className="font-heading uppercase tracking-widest text-brand-dim text-sm transform -rotate-90">
                  Portrait_Placeholder
                </span>
              </div>

              {/* Corner accent lines */}
              <div className="absolute top-0 left-0 w-8 h-[1px] bg-brand-accent/50" />
              <div className="absolute top-0 left-0 h-8 w-[1px] bg-brand-accent/50" />
              <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-brand-accent/50" />
              <div className="absolute bottom-0 right-0 h-8 w-[1px] bg-brand-accent/50" />
            </div>
          </FadeIn>
          
          {/* Decorative accent block */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-accent/3 border border-brand-accent/10 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-300" />
        </div>

      </div>

      {/* Scroll indicator */}
      <FadeIn delay={0.25}>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] font-heading uppercase tracking-[0.3em] text-brand-dim">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-brand-accent/50 to-transparent" />
        </div>
      </FadeIn>
    </section>
  );
}
