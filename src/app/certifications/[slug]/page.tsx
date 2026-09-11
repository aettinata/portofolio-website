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

export default async function CertificationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cert = certsData.find((c) => c.slug === slug);

  if (!cert) {
    notFound();
  }

  return (
    <div className="flex-1 py-12 md:py-24 bg-bg-primary">
      <div className="container mx-auto px-6 sm:px-12 max-w-[1024px]">
          <FadeIn>
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 mb-12"
            >
              <ArrowLeft size={16} /> Kembali ke Sertifikasi
            </Link>
          </FadeIn>

          <div className="bg-bg-secondary rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <FadeIn delay={0.1} className="w-full md:w-1/3 flex justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-bg-primary shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center text-text-secondary text-5xl font-semibold">
                  {cert.issuer.charAt(0)}
                </div>
              </FadeIn>
              
              <div className="w-full md:w-2/3 space-y-6">
                <FadeIn delay={0.2}>
                  <h1 className="text-page-title text-text-primary">
                    {cert.name}
                  </h1>
                  <p className="text-body text-text-secondary mt-2">{cert.issuer}</p>
                </FadeIn>

                <FadeIn delay={0.3} className="space-y-4 pt-6 border-t border-border">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-[12px] font-medium tracking-wide text-text-secondary uppercase mb-1">Diterbitkan</span>
                      <span className="text-[15px] font-medium text-text-primary">{cert.issueDate}</span>
                    </div>
                    {cert.expiryDate && (
                      <div>
                        <span className="block text-[12px] font-medium tracking-wide text-text-secondary uppercase mb-1">Berlaku Hingga</span>
                        <span className="text-[15px] font-medium text-text-primary">{cert.expiryDate}</span>
                      </div>
                    )}
                  </div>
                  
                  {cert.credentialId && (
                    <div>
                      <span className="block text-[12px] font-medium tracking-wide text-text-secondary uppercase mb-1">ID Kredensial</span>
                      <span className="text-[15px] font-medium text-text-primary font-mono">{cert.credentialId}</span>
                    </div>
                  )}
                </FadeIn>

                {cert.credentialUrl && (
                  <FadeIn delay={0.4} className="pt-6">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[14px] font-medium text-accent hover:opacity-80 transition-opacity duration-200"
                    >
                      Lihat Kredensial <ExternalLink size={14} />
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
