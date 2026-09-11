import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface CertificationCardProps {
  cert: {
    id: string;
    slug: string;
    name: string;
    issuer: string;
    issueDate: string;
    credentialUrl?: string;
  };
}

export function CertificationCard({ cert }: CertificationCardProps) {
  return (
    <div className="group flex flex-col justify-between bg-bg-secondary p-6 rounded-[18px] transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] h-full">
      <div>
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-bg-primary shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-text-secondary group-hover:text-accent transition-colors duration-300">
          <span className="text-[20px] font-semibold">{cert.issuer.charAt(0)}</span>
        </div>
        
        <Link href={`/certifications/${cert.slug}`}>
          <h3 className="text-card-title text-text-primary group-hover:text-accent transition-colors duration-200 cursor-pointer mb-2">
            {cert.name}
          </h3>
        </Link>
        <p className="text-[15px] font-medium text-text-secondary">{cert.issuer}</p>
        <p className="mt-1 text-[13px] text-text-secondary opacity-80">Diterbitkan: {cert.issueDate}</p>
      </div>

      {cert.credentialUrl && (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex items-center gap-2 text-[14px] font-medium text-accent hover:opacity-80 transition-opacity duration-200 cursor-pointer"
        >
          Lihat Kredensial <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
}
