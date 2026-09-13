import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FadeIn } from "@/components/animations/FadeIn";
import { Magnetic } from "@/components/animations/Magnetic";
import { Button } from "@/components/ui/Button";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { formatMonthYear } from "@/lib/time";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return (projectsData as Project[]).map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = (projectsData as Project[]).find((p) => p.slug === slug);

  if (!project) {
    return { title: "Proyek Tidak Ditemukan" };
  }

  return {
    title: `${project.title} — Faisal Adama`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = (projectsData as Project[]).find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex-1 py-12 md:py-24 bg-bg-primary">
      <div className="container mx-auto px-6 sm:px-12 max-w-[1024px]">
        {/* Back Link */}
        <FadeIn>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Kembali ke Portofolio</span>
          </Link>
        </FadeIn>

        {/* Hero Image */}
        <FadeIn delay={0.05}>
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border/70 bg-bg-secondary mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover object-top"
            />
          </div>
        </FadeIn>

        {/* Meta & Title Section */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-secondary border border-border text-xs font-medium text-text-primary">
              <Tag size={12} className="text-text-secondary" aria-hidden="true" />
              {project.category}
            </span>
            {project.date && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-secondary border border-border text-xs font-medium text-text-secondary">
                <Calendar size={12} aria-hidden="true" />
                {formatMonthYear(project.date)}
              </span>
            )}
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-text-primary/10 text-text-primary text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-text-primary animate-pulse" />
                Karya Pilihan
              </span>
            )}
          </div>

          <h1 className="text-page-title text-text-primary mb-4 tracking-tight">
            {project.title}
          </h1>

          <p className="text-body text-text-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
            {project.description}
          </p>
        </FadeIn>

        <SectionDivider className="mb-10 md:mb-12" />

        {/* Content Details */}
        <div className="space-y-10 mb-12">
          {project.fullDescription && (
            <FadeIn delay={0.15}>
              <h2 className="text-xl font-semibold text-text-primary mb-3 tracking-tight">
                Tentang Proyek
              </h2>
              <p className="text-body text-text-secondary leading-relaxed max-w-3xl">
                {project.fullDescription}
              </p>
            </FadeIn>
          )}

          {project.challenges && (
            <FadeIn delay={0.2}>
              <h2 className="text-xl font-semibold text-text-primary mb-3 tracking-tight">
                Tantangan
              </h2>
              <p className="text-body text-text-secondary leading-relaxed max-w-3xl">
                {project.challenges}
              </p>
            </FadeIn>
          )}

          {project.solutions && (
            <FadeIn delay={0.25}>
              <h2 className="text-xl font-semibold text-text-primary mb-3 tracking-tight">
                Solusi & Pendekatan
              </h2>
              <p className="text-body text-text-secondary leading-relaxed max-w-3xl">
                {project.solutions}
              </p>
            </FadeIn>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <FadeIn delay={0.3}>
              <h2 className="text-xl font-semibold text-text-primary mb-4 tracking-tight">
                Teknologi & Tools
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-bg-secondary border border-border/80 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </FadeIn>
          )}
        </div>

        {/* CTA Actions */}
        {(project.demoUrl || project.githubUrl) && (
          <>
            <SectionDivider className="mb-8" />
            <FadeIn delay={0.35}>
              <div className="flex flex-wrap items-center gap-4">
                {project.demoUrl && (
                  <Magnetic intensity={0.2}>
                    <Button variant="primary" asChild>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <span>Lihat Demo</span>
                        <ExternalLink size={16} aria-hidden="true" />
                      </a>
                    </Button>
                  </Magnetic>
                )}
                {project.githubUrl && (
                  <Magnetic intensity={0.2}>
                    <Button variant="secondary" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <FaGithub size={16} aria-hidden="true" />
                        <span>Source Code</span>
                      </a>
                    </Button>
                  </Magnetic>
                )}
              </div>
            </FadeIn>
          </>
        )}
      </div>
    </div>
  );
}
