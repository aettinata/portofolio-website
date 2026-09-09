import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <div className={`group flex flex-col overflow-hidden rounded-[4px] border border-brand-border bg-brand-surface/50 hover:border-brand-accent/50 transition-all duration-500 h-full relative card-futuristic cursor-pointer ${className}`}>
      <Link href={`/projects/${project.slug}`} className="relative h-48 md:h-64 w-full overflow-hidden border-b border-brand-border">
        {/* Decorative Grid on Image */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 z-10" />
        <div className="absolute inset-0 bg-noise mix-blend-overlay z-20 grayscale contrast-150 group-hover:opacity-0 transition-opacity duration-700" />
        
        <div className="absolute inset-0 bg-brand-dark flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
          <span className="text-3xl font-heading font-bold uppercase tracking-widest text-brand-dim/30 transform -rotate-12 group-hover:text-brand-accent/30 transition-colors duration-500">
            {project.title}
          </span>
        </div>
      </Link>
      
      <div className="flex flex-1 flex-col p-6 lg:p-8 bg-brand-dark relative z-10">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-2xl font-heading font-bold uppercase tracking-widest text-brand-light group-hover:text-brand-accent transition-colors duration-300">
            {project.title}
          </h3>
        </Link>
        <p className="mt-4 text-sm md:text-base font-sans text-brand-gray flex-1 line-clamp-3">
          {project.description}
        </p>
        
        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="border border-brand-border bg-brand-surface/30 px-3 py-1 text-xs font-heading uppercase tracking-wider font-bold text-brand-dim group-hover:border-brand-accent/30 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="border border-brand-border bg-brand-surface/30 px-3 py-1 text-xs font-heading uppercase tracking-wider font-bold text-brand-dim">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        
        <div className="mt-8 flex items-center justify-between border-t border-brand-border pt-6">
          <span className="text-xs font-heading font-bold text-brand-dim uppercase tracking-widest">
            {project.category}
          </span>
          <div className="flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-brand-dim hover:text-brand-accent transition-colors duration-300"
                aria-label="GitHub Repository"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={20} />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-brand-dim hover:text-brand-accent transition-colors duration-300"
                aria-label="Live Demo"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Brutalist Accent Block on Hover */}
      <div className="absolute top-0 right-0 w-10 h-10 bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
    </div>
  );
}
