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
    <div className="group relative flex flex-col justify-between border border-brand-border bg-brand-surface/50 p-5 hover:border-brand-accent/50 hover:bg-brand-surface transition-all duration-300 card-futuristic">
      <div>
        <div className="mb-4 flex h-10 w-10 items-center justify-center border border-brand-border text-brand-dim group-hover:text-brand-accent group-hover:border-brand-accent/50 group-hover:glow-cyan transition-colors duration-300">
          <span className="text-lg font-heading font-bold">{cert.issuer.charAt(0)}</span>
        </div>
        
        <Link href={`/certifications/${cert.slug}`}>
          <h3 className="text-sm font-heading font-bold uppercase tracking-widest text-brand-light group-hover:text-brand-accent transition-colors duration-300 cursor-pointer">
            {cert.name}
          </h3>
        </Link>
        <p className="mt-2 text-xs text-brand-gray">{cert.issuer}</p>
        <p className="mt-1 text-[10px] font-heading tracking-widest text-brand-dim">DITERBITKAN: {cert.issueDate}</p>
      </div>

      {cert.credentialUrl && (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex items-center gap-2 text-[10px] font-heading font-bold uppercase tracking-widest text-brand-dim hover:text-brand-accent transition-colors duration-300 cursor-pointer"
        >
          Lihat Kredensial <ExternalLink size={12} />
        </a>
      )}
      
      {/* Corner accent block */}
      <div className="absolute top-0 right-0 w-4 h-4 bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
    </div>
  );
}
