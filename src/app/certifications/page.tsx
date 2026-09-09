import { FadeIn } from "@/components/animations/FadeIn";
import { CertificationCard } from "@/components/ui/CertificationCard";
import certsData from "@/data/certifications.json";

export const metadata = {
  title: "Sertifikasi | Portofolio Pribadi",
  description: "Daftar sertifikasi dan pencapaian profesional.",
};

export default function CertificationsPage() {
  return (
    <div className="flex-1 py-16 md:py-24">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-widest text-brand-light mb-4">
                Sertifikasi
              </h1>
              <p className="text-lg text-brand-gray">
                Sertifikasi dan lisensi profesional yang saya peroleh untuk terus mengembangkan keahlian.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certsData.map((cert, index) => (
              <FadeIn key={cert.id} delay={0.1 + index * 0.1}>
                <CertificationCard cert={cert} />
              </FadeIn>
            ))}
          </div>
          
          {certsData.length === 0 && (
            <div className="mt-12 text-center text-brand-dim py-12 border border-dashed border-brand-border">
              <span className="font-heading uppercase tracking-widest text-sm">Belum ada sertifikasi yang ditambahkan.</span>
            </div>
          )}
      </div>
    </div>
  );
}
