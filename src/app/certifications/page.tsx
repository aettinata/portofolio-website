import { FadeIn } from "@/components/animations/FadeIn";
import { CertificationCard } from "@/components/ui/CertificationCard";
import certsData from "@/data/certifications.json";

export const metadata = {
  title: "Sertifikasi | Portofolio Pribadi",
  description: "Daftar sertifikasi dan pencapaian profesional.",
};

export default function CertificationsPage() {
  return (
    <div className="flex-1 py-16 md:py-24 bg-bg-primary">
      <div className="container mx-auto max-w-[1024px] px-6 sm:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-12">
              <h1 className="text-page-title text-text-primary mb-4">
                Sertifikasi
              </h1>
              <p className="text-body text-text-secondary">
                Sertifikasi dan lisensi profesional yang saya peroleh untuk terus mengembangkan keahlian.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certsData.map((cert, index) => (
              <FadeIn key={cert.id} delay={0.1 + index * 0.1}>
                <CertificationCard cert={cert} />
              </FadeIn>
            ))}
          </div>
          
          {certsData.length === 0 && (
            <div className="mt-12 text-center py-16 bg-bg-secondary rounded-[18px]">
              <span className="text-[14px] font-medium tracking-wide text-text-secondary uppercase">Belum ada sertifikasi yang ditambahkan.</span>
            </div>
          )}
      </div>
    </div>
  );
}
