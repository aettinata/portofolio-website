import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import certsData from "@/data/certifications.json";

export async function generateStaticParams() {
  return certsData.map((cert) => ({
    slug: cert.slug,
  }));
}

export default function CertificationDetail({ params }: { params: { slug: string } }) {
  const cert = certsData.find((c) => c.slug === params.slug);

  if (!cert) {
    notFound();
  }

  return (
    <div className="flex-1 py-12 md:py-20">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-3xl">
          <FadeIn>
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 text-sm font-heading font-bold uppercase tracking-widest text-brand-dim hover:text-brand-light transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={16} /> Kembali ke Sertifikasi
            </Link>
          </FadeIn>

          <div className="border border-brand-border p-8 md:p-12 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <FadeIn delay={0.1} className="w-full md:w-1/3 flex justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 border border-brand-border flex items-center justify-center text-brand-light text-5xl font-heading font-bold">
                  {cert.issuer.charAt(0)}
                </div>
              </FadeIn>
              
              <div className="w-full md:w-2/3 space-y-6">
                <FadeIn delay={0.2}>
                  <h1 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-widest text-brand-light">
                    {cert.name}
                  </h1>
                  <p className="text-lg text-brand-gray mt-2">{cert.issuer}</p>
                </FadeIn>

                <FadeIn delay={0.3} className="space-y-4 pt-6 border-t border-brand-border">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-xs font-heading uppercase tracking-widest text-brand-dim">Diterbitkan</span>
                      <span className="font-medium text-brand-light">{cert.issueDate}</span>
                    </div>
                    {cert.expiryDate && (
                      <div>
                        <span className="block text-xs font-heading uppercase tracking-widest text-brand-dim">Berlaku Hingga</span>
                        <span className="font-medium text-brand-light">{cert.expiryDate}</span>
                      </div>
                    )}
                  </div>
                  
                  {cert.credentialId && (
                    <div>
                      <span className="block text-xs font-heading uppercase tracking-widest text-brand-dim">ID Kredensial</span>
                      <span className="font-medium text-brand-light font-mono text-sm">{cert.credentialId}</span>
                    </div>
                  )}
                </FadeIn>

                {cert.credentialUrl && (
                  <FadeIn delay={0.4} className="pt-6">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 border border-brand-border text-brand-light hover:border-brand-light/40 hover:bg-brand-light/5 px-6 py-3 font-heading font-bold uppercase tracking-widest text-sm transition-all duration-300"
                    >
                      Tampilkan Kredensial <ExternalLink size={16} />
                    </a>
                  </FadeIn>
                )}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
