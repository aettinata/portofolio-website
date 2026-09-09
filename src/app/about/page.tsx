import { FadeIn } from "@/components/animations/FadeIn";
import { CertificationCard } from "@/components/ui/CertificationCard";
import profileData from "@/data/profile.json";
import certificationsData from "@/data/certifications.json";

export const metadata = {
  title: "Tentang Saya | Portofolio Pribadi",
  description: "Pelajari lebih lanjut tentang latar belakang dan keahlian saya.",
};

export default function AboutPage() {
  return (
    <div className="flex-1 py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-6 sm:px-12 lg:px-20 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-widest text-brand-light mb-12">
              Tentang Saya<span className="text-brand-accent glow-cyan">.</span>
            </h1>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Column - 7/12 */}
            <div className="md:col-span-7 space-y-12">
              <FadeIn delay={0.1}>
                <section>
                  <h2 className="text-xl font-heading font-bold uppercase tracking-widest text-brand-light mb-6 flex items-center gap-3">
                    <span className="text-brand-dim">//</span> Latar Belakang
                  </h2>
                  <div className="text-brand-gray leading-relaxed text-base sm:text-lg space-y-4">
                    <p>{profileData.bio}</p>
                    <p>Fokus saya adalah menciptakan arsitektur teknis yang kokoh dengan pengalaman pengguna (UX) yang tak terlupakan, memadukan performa dan estetika.</p>
                  </div>
                </section>
              </FadeIn>

              <FadeIn delay={0.2}>
                <section>
                  <h2 className="text-xl font-heading font-bold uppercase tracking-widest text-brand-light mb-6 flex items-center gap-3">
                    <span className="text-brand-dim">//</span> Pendidikan
                  </h2>
                  <div className="space-y-6">
                    {profileData.education.map((edu, index) => (
                      <div key={index} className="relative pl-6 border-l-2 border-brand-border hover:border-brand-accent transition-colors duration-300 group">
                        <div className="absolute w-2.5 h-2.5 bg-brand-dark border-2 border-brand-border rounded-full -left-[7px] top-1.5 group-hover:border-brand-accent group-hover:bg-brand-accent transition-colors"></div>
                        <h3 className="text-lg font-heading font-bold tracking-widest uppercase text-brand-light">{edu.degree}</h3>
                        <p className="text-brand-gray text-sm mt-1">{edu.institution}</p>
                        <p className="text-xs font-heading tracking-widest text-brand-accent mt-2">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <section>
                  <h2 className="text-xl font-heading font-bold uppercase tracking-widest text-brand-light mb-6 flex items-center gap-3">
                    <span className="text-brand-dim">//</span> Pengalaman
                  </h2>
                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-brand-border hover:border-brand-accent transition-colors duration-300 group">
                      <div className="absolute w-2.5 h-2.5 bg-brand-dark border-2 border-brand-border rounded-full -left-[7px] top-1.5 group-hover:border-brand-accent group-hover:bg-brand-accent transition-colors"></div>
                      <h3 className="text-lg font-heading font-bold tracking-widest uppercase text-brand-light">Freelance Web Developer</h3>
                      <p className="text-brand-gray text-sm mt-1">Mengerjakan berbagai proyek web modern.</p>
                      <p className="text-xs font-heading tracking-widest text-brand-accent mt-2">2026 — SEKARANG</p>
                    </div>
                  </div>
                </section>
              </FadeIn>
            </div>

            {/* Sidebar Column - 5/12 */}
            <div className="md:col-span-5 space-y-8">
              <FadeIn delay={0.4} direction="left">
                <section className="border border-brand-border bg-brand-surface/30 p-6 hover:border-brand-accent/30 transition-colors duration-300">
                  <h2 className="text-sm font-heading font-bold uppercase tracking-widest text-brand-dim mb-4">
                    Keahlian Teknis
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-brand-dark border border-brand-border text-brand-gray px-3 py-1.5 text-xs font-heading uppercase tracking-wider font-bold hover:border-brand-accent hover:text-brand-accent transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              </FadeIn>

              <FadeIn delay={0.5} direction="left">
                <section className="border border-brand-border bg-brand-surface/30 p-6 hover:border-brand-accent/30 transition-colors duration-300">
                  <h2 className="text-sm font-heading font-bold uppercase tracking-widest text-brand-dim mb-4">
                    Minat
                  </h2>
                  <ul className="space-y-3">
                    {profileData.interests.map((interest, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-brand-gray text-sm hover:text-brand-light transition-colors">
                        <span className="text-brand-accent text-xs glow-cyan">▸</span> {interest}
                      </li>
                    ))}
                  </ul>
                </section>
              </FadeIn>
              
              <FadeIn delay={0.6} direction="left">
                <section>
                  <h2 className="text-sm font-heading font-bold uppercase tracking-widest text-brand-dim mb-4">
                    Sertifikasi
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                    {certificationsData.map((cert) => (
                      <div key={cert.id} className="h-full">
                        <CertificationCard cert={cert} />
                      </div>
                    ))}
                  </div>
                </section>
              </FadeIn>
            </div>
          </div>
      </div>
    </div>
  );
}
