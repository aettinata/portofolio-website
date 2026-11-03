import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { formatMonthYear } from "@/lib/time";
import { Certification } from "@/types";

interface CertificationCardProps {
  cert: Certification;
}

export function CertificationCard({ cert }: CertificationCardProps) {
  return (
    <div className="group flex flex-col justify-between bg-bg-secondary p-6 rounded-2xl border border-border/70 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:border-text-primary/20 h-full">
      <div>
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-bg-primary shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-border/50 text-text-secondary group-hover:text-accent transition-colors duration-300">
          <span className="text-[20px] font-semibold">{cert.issuer.charAt(0)}</span>
        </div>
        
        <Link href={`/certifications/${cert.slug}`}>
          <h3 className="text-card-title text-text-primary group-hover:text-accent transition-colors duration-200 cursor-pointer mb-2">
            {cert.name}
          </h3>
        </Link>
        <p className="text-[15px] font-medium text-text-secondary">{cert.issuer}</p>
        <p className="mt-1 text-[13px] text-text-secondary opacity-80">
          Diterbitkan: {formatMonthYear(cert.issueDate)}
        </p>

        {cert.skills && cert.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {cert.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="bg-bg-primary px-2.5 py-1 text-[11px] rounded-full font-medium tracking-wide text-text-secondary border border-border/40"
              >
                {skill}
              </span>
            ))}
            {cert.skills.length > 3 && (
              <span className="bg-bg-primary px-2 py-1 text-[11px] rounded-full font-medium tracking-wide text-text-secondary border border-border/40">
                +{cert.skills.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      {cert.credentialUrl && (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex items-center gap-2 text-[14px] font-medium text-accent hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          aria-label={`Lihat kredensial ${cert.name}`}
        >
          Lihat Kredensial <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
}
