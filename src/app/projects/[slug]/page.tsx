import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FadeIn } from "@/components/animations/FadeIn";
import projectsData from "@/data/projects.json";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex-1 py-12 md:py-20">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-4xl">
          <FadeIn>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-heading font-bold uppercase tracking-widest text-brand-dim hover:text-brand-light transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={16} /> Kembali ke Portofolio
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden border border-brand-border mb-12">
              {/* Placeholder image logic */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 z-10" />
              <div className="absolute inset-0 flex items-center justify-center bg-brand-dark">
                 <span className="text-2xl font-heading font-bold uppercase tracking-widest text-brand-dim/40">{project.title}</span>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <FadeIn delay={0.2}>
                <h1 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-widest text-brand-light">
                  {project.title}
                </h1>
                <p className="mt-4 text-lg text-brand-gray leading-relaxed">
                  {project.fullDescription}
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <h2 className="text-xl font-heading font-bold uppercase tracking-widest text-brand-light mb-4 flex items-center gap-3">
                  <span className="text-brand-dim">//</span> Tantangan
                </h2>
                <p className="text-brand-gray leading-relaxed">{project.challenges}</p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <h2 className="text-xl font-heading font-bold uppercase tracking-widest text-brand-light mb-4 flex items-center gap-3">
                  <span className="text-brand-dim">//</span> Solusi
                </h2>
                <p className="text-brand-gray leading-relaxed">{project.solutions}</p>
              </FadeIn>
            </div>

            <div className="space-y-8">
              <FadeIn delay={0.3} direction="left">
                <div className="border border-brand-border p-6">
                  <h3 className="text-sm font-heading font-bold uppercase tracking-widest text-brand-dim mb-4">Informasi</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="block text-xs font-heading uppercase tracking-widest text-brand-dim">Kategori</span>
                      <span className="font-medium text-brand-light">{project.category}</span>
                    </div>
                    <div>
                      <span className="block text-xs font-heading uppercase tracking-widest text-brand-dim">Tanggal</span>
                      <span className="font-medium text-brand-light">{project.date}</span>
                    </div>
                    
                    <div className="pt-4 border-t border-brand-border">
                      <span className="block text-xs font-heading uppercase tracking-widest text-brand-dim mb-2">Teknologi</span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="border border-brand-border text-brand-gray px-2 py-1 text-xs font-heading uppercase tracking-wider font-bold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-brand-border flex flex-col gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-heading font-bold uppercase tracking-widest text-brand-dim hover:text-brand-light transition-colors duration-300"
                        >
                          <ExternalLink size={16} /> Kunjungi Website
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-heading font-bold uppercase tracking-widest text-brand-dim hover:text-brand-light transition-colors duration-300"
                        >
                          <FaGithub size={16} /> Lihat Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
      </div>
    </div>
  );
}
