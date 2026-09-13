"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl bg-bg-secondary border border-border/70 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:border-text-primary/20 h-full",
        className
      )}
    >
      <div className="relative z-10 flex flex-col h-full">
        <Link href={`/projects/${project.slug}`} className="relative h-48 md:h-64 w-full overflow-hidden block bg-bg-secondary border-b border-border/50">
          {project.image && !imgError ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-bg-secondary flex items-center justify-center p-4 text-center transition-transform duration-500 group-hover:scale-[1.02]">
              <span className="text-[22px] sm:text-[28px] font-semibold tracking-tight text-border line-clamp-2">
                {project.title}
              </span>
            </div>
          )}
        </Link>
        
        <div className="flex flex-1 flex-col p-6 lg:p-8">
          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-card-title text-text-primary mb-2 transition-colors group-hover:text-accent">
              {project.title}
            </h3>
          </Link>
          <p className="text-body text-text-secondary flex-1 line-clamp-3">
            {project.description}
          </p>
          
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="bg-bg-primary px-4 py-1.5 text-[12px] rounded-full font-medium tracking-wide text-text-secondary shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="bg-bg-primary px-4 py-1.5 text-[12px] rounded-full font-medium tracking-wide text-text-secondary shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
          
          <div className="mt-8 flex items-center justify-between border-t border-border pt-4">
            <span className="text-[13px] font-medium text-text-secondary tracking-wide">
              {project.category}
            </span>
            <div className="flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors duration-200 relative z-20"
                  aria-label={`Repositori GitHub ${project.title}`}
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
                  className="text-text-secondary hover:text-accent transition-colors duration-200 relative z-20"
                  aria-label={`Demo Live ${project.title}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
