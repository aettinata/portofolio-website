import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { ProjectCard } from "@/components/ui/ProjectCard";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";

export function FeaturedProjects() {
  const featuredProjects = (projectsData as Project[])
    .filter((project) => project.featured)
    .slice(0, 3);

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-bg-primary">
      <div className="container mx-auto max-w-[1024px] px-6 sm:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-page-title text-text-primary">
              Karya Pilihan
            </h2>
            <p className="text-body text-text-secondary mt-2">
              Beberapa proyek yang saya banggakan
            </p>
          </div>
          <Link
            href="/projects"
            className="text-accent hover:opacity-80 inline-flex items-center gap-1 font-medium transition-opacity text-[15px]"
          >
            Lihat Semua <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1} className="h-full">
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
