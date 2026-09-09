"use client";

import { ProjectCard } from "@/components/ui/ProjectCard";
import projectsData from "@/data/projects.json";
import { useProjectFilter } from "@/hooks/useProjectFilter";
import { Project, CardSize } from "@/types";
import { FadeIn } from "@/components/animations/FadeIn";

// Adding mock sizeHints to show asymmetrical grid
const typedProjects: Project[] = projectsData.map((p, i) => ({
  ...p,
  sizeHint: (i === 0 ? "large" : i % 4 === 0 ? "medium" : "small") as CardSize
}));

export default function ProjectsPage() {
  const {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    filteredData,
  } = useProjectFilter<Project>({
    data: typedProjects,
    categoryField: "category",
    searchFields: ["title", "description", "technologies"],
  });

  const categories = ["All", ...Array.from(new Set(typedProjects.map((p) => p.category)))];

  const getGridClass = (size?: CardSize) => {
    switch (size) {
      case "large":
        return "md:col-span-2 lg:col-span-2 lg:row-span-2"; // 2x2 in 3-col grid
      case "medium":
        return "md:col-span-2 lg:col-span-2"; // 2x1
      case "small":
      default:
        return "col-span-1 md:col-span-1"; // 1x1
    }
  };

  return (
    <div className="flex-1 py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-6 sm:px-12 lg:px-20 relative z-10">
          <FadeIn>
            <div className="max-w-4xl border-b border-brand-border pb-8 mb-12">
              <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-widest text-brand-light mb-6">
                Portofolio<span className="text-brand-accent glow-cyan">.</span>
              </h1>
              <p className="text-lg md:text-xl font-sans text-brand-gray">
                Koleksi karya digital pilihan dengan arsitektur teknis yang kokoh.
              </p>
            </div>
          </FadeIn>

          {/* Advanced Filter UI */}
          <FadeIn delay={0.1}>
            <div className="mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 border border-brand-border bg-brand-surface/30 p-6">
              <div className="md:col-span-8 flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-2 text-xs md:text-sm font-heading font-bold uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                      activeCategory === category
                        ? "border-brand-accent bg-brand-accent text-brand-dark"
                        : "border-brand-border text-brand-dim hover:border-brand-accent hover:text-brand-accent"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="md:col-span-4 relative group">
                <input
                  type="text"
                  placeholder="SEARCH TECH OR TITLE..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-brand-dark border border-brand-border px-4 py-3 text-sm font-heading tracking-widest text-brand-light focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-dim relative z-10"
                />
                <div className="absolute inset-0 bg-brand-accent opacity-0 group-focus-within:opacity-20 blur-md transition-opacity duration-500 z-0 pointer-events-none"></div>
              </div>
            </div>
          </FadeIn>

          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(350px,auto)]">
            {filteredData.map((project, index) => (
              <FadeIn key={project.id} delay={0.1 + (index * 0.05)} className={getGridClass(project.sizeHint)}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
          
          {filteredData.length === 0 && (
            <FadeIn delay={0.2}>
              <div className="mt-12 text-center text-brand-dim p-16 border border-brand-border bg-brand-surface/30">
                <span className="font-heading uppercase tracking-widest text-xl">NO PROJECTS FOUND.</span>
              </div>
            </FadeIn>
          )}
      </div>
    </div>
  );
}
