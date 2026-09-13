"use client";

import { useEffect, useState } from "react";
import { FolderGit2, Users, UserPlus, GitCommit, ArrowUpRight, AlertCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/Skeleton";
import { formatRelativeTime } from "@/lib/time";
import { cn } from "@/lib/utils";

interface GitHubData {
  user: {
    login: string;
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
  } | null;
  repos: Array<{
    name: string;
    description: string | null;
    url: string;
    language: string | null;
    stars: number;
  }>;
  commits: Array<{
    message: string;
    repo: string;
    date: string;
    url: string;
  }>;
  error?: string;
}

export function GitHubActivity({ className }: { className?: string }) {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setData({ user: null, repos: [], commits: [], error: "Koneksi bermasalah" });
        setLoading(false);
      });
  }, []);

  return (
    <section aria-label="Aktivitas GitHub" className={cn("w-full", className)}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-[11px] font-semibold tracking-widest uppercase text-text-secondary">
            Open Source & Repositori
          </span>
          <h2 className="text-section-title text-text-primary mt-1 tracking-tight">
            Aktivitas GitHub
          </h2>
          <p className="text-body text-text-secondary text-sm mt-1">
            Jejak kontribusi kode dan repositori publik di platform terbuka.
          </p>
        </div>

        <a
          href="https://github.com/aettinata"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-text-primary hover:text-accent transition-colors shrink-0"
        >
          <span>Lihat Profil GitHub</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>

      {loading ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Skeleton variant="card" className="h-24" />
            <Skeleton variant="card" className="h-24" />
            <Skeleton variant="card" className="h-24" />
          </div>
          <Skeleton variant="card" className="h-44" />
        </div>
      ) : data?.error && !data.user ? (
        <div className="bg-bg-secondary border border-border/70 rounded-2xl p-6 text-center">
          <AlertCircle className="w-8 h-8 text-text-secondary mx-auto mb-2 opacity-60" />
          <p className="text-sm text-text-primary font-medium">Aktivitas GitHub sedang tidak dapat dimuat</p>
          <p className="text-xs text-text-secondary mt-1">
            Kunjungi langsung profil pengembang di{" "}
            <a href="https://github.com/aettinata" target="_blank" rel="noopener noreferrer" className="underline text-text-primary">
              github.com/aettinata
            </a>
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-bg-secondary border border-border/70 rounded-2xl p-5 flex items-center gap-4 hover:border-text-primary/20 transition-colors">
              <div className="p-3 rounded-xl bg-bg-primary border border-border/50 text-text-primary shrink-0">
                <FolderGit2 size={20} aria-hidden="true" />
              </div>
              <div>
                <div className="text-2xl font-bold text-text-primary tracking-tight">
                  {data?.user?.public_repos ?? 0}
                </div>
                <div className="text-xs text-text-secondary">Repositori Publik</div>
              </div>
            </div>

            <div className="bg-bg-secondary border border-border/70 rounded-2xl p-5 flex items-center gap-4 hover:border-text-primary/20 transition-colors">
              <div className="p-3 rounded-xl bg-bg-primary border border-border/50 text-text-primary shrink-0">
                <Users size={20} aria-hidden="true" />
              </div>
              <div>
                <div className="text-2xl font-bold text-text-primary tracking-tight">
                  {data?.user?.followers ?? 0}
                </div>
                <div className="text-xs text-text-secondary">Pengikut</div>
              </div>
            </div>

            <div className="bg-bg-secondary border border-border/70 rounded-2xl p-5 flex items-center gap-4 hover:border-text-primary/20 transition-colors">
              <div className="p-3 rounded-xl bg-bg-primary border border-border/50 text-text-primary shrink-0">
                <UserPlus size={20} aria-hidden="true" />
              </div>
              <div>
                <div className="text-2xl font-bold text-text-primary tracking-tight">
                  {data?.user?.following ?? 0}
                </div>
                <div className="text-xs text-text-secondary">Mengikuti</div>
              </div>
            </div>
          </div>

          {/* Activity / Commits Feed */}
          <div className="bg-bg-secondary border border-border/70 rounded-2xl p-6 hover:border-text-primary/20 transition-colors">
            <div className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-4">
              Commit & Pembaruan Terkini
            </div>

            {data?.commits && data.commits.length > 0 ? (
              <div className="divide-y divide-border/40">
                {data.commits.map((commit, idx) => (
                  <div key={idx} className="py-3 first:pt-0 last:pb-0 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 min-w-0">
                      <GitCommit size={16} className="text-text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-text-primary truncate">{commit.message}</p>
                        <span className="text-xs text-text-secondary font-mono">{commit.repo}</span>
                      </div>
                    </div>
                    <span className="text-xs text-text-secondary shrink-0 whitespace-nowrap">
                      {formatRelativeTime(commit.date)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-4 text-center">
                <p className="text-sm text-text-primary font-medium">
                  Repositori Aktif: <span className="font-mono text-xs px-2 py-0.5 rounded bg-bg-primary border border-border/50">aettinata/portofolio-website</span>
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  Pengembangan dan perbaikan berkala terus didorong secara aktif.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
