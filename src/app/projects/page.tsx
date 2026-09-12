"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { AnimatedTabs } from "@/components/ui/AnimatedTabs";
import { ProjectCard } from "@/components/ui/ProjectCard";
import projectsData from "@/data/projects.json";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("Semua");
  const filteredProjects = activeTab === "Semua" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  return (
    <div className="container mx-auto max-w-[1024px] px-6 sm:px-12 py-12 md:py-24 bg-bg-primary">
      <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <h1 className="text-page-title text-text-primary mb-4">
            Karya Pilihan
          </h1>
          <p className="text-body text-text-secondary">Eksplorasi teknis dan visual dari proyek-proyek terbaru saya.</p>
        </div>
        <AnimatedTabs 
          tabs={["Semua", "Web", "Mobile", "AI"]} 
          activeTab={activeTab} 
          onChange={setActiveTab} 
        />
      </FadeIn>

      <h2 className="sr-only">Daftar Proyek</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <FadeIn key={project.id} delay={0.1 + (index * 0.1)}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
        {filteredProjects.length === 0 && (
          <div className="col-span-full py-24 text-center">
            <span className="text-[14px] font-medium tracking-wide text-text-secondary uppercase">Tidak ada proyek dalam kategori ini.</span>
          </div>
        )}
      </div>
    </div>
  );
}
