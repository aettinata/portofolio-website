import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache 1 jam

const API_BASE = "https://api.github.com";
const username = "aettinata";

export async function GET() {
  const headers: HeadersInit = {
    "User-Agent": "portfolio-website",
    Accept: "application/vnd.github.v3+json",
  };

  try {
    const [userRes, reposRes, eventsRes] = await Promise.all([
      fetch(`${API_BASE}/users/${username}`, { headers, next: { revalidate: 3600 } }),
      fetch(`${API_BASE}/users/${username}/repos?sort=updated&per_page=6`, { headers, next: { revalidate: 3600 } }),
      fetch(`${API_BASE}/users/${username}/events/public?per_page=10`, { headers, next: { revalidate: 3600 } }),
    ]);

    if (!userRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub profile", user: null, repos: [], commits: [] },
        { status: userRes.status === 403 ? 200 : userRes.status }
      );
    }

    const userData = await userRes.json();
    const reposData = reposRes.ok ? await reposRes.json() : [];
    const eventsData = eventsRes.ok ? await eventsRes.json() : [];

    // Filter commits dari PushEvent
    const commits: Array<{ message: string; repo: string; date: string; url: string }> = [];
    if (Array.isArray(eventsData)) {
      for (const event of eventsData) {
        if (event.type === "PushEvent" && event.payload?.commits) {
          for (const c of event.payload.commits) {
            commits.push({
              message: c.message,
              repo: event.repo.name.replace(new RegExp(`^${username}/`), ""),
              date: event.created_at,
              url: `https://github.com/${event.repo.name}`,
            });
          }
        }
      }
    }

    // Format repos
    const repos = Array.isArray(reposData)
      ? reposData.slice(0, 3).map((r: { name: string; description: string | null; html_url: string; language: string | null; stargazers_count: number }) => ({
          name: r.name,
          description: r.description,
          url: r.html_url,
          language: r.language,
          stars: r.stargazers_count,
        }))
      : [];

    return NextResponse.json({
      user: {
        login: userData.login,
        name: userData.name || userData.login,
        public_repos: userData.public_repos ?? 0,
        followers: userData.followers ?? 0,
        following: userData.following ?? 0,
        html_url: userData.html_url,
      },
      repos,
      commits: commits.slice(0, 5),
    });
  } catch {
    return NextResponse.json(
      { error: "Internal error fetching GitHub data", user: null, repos: [], commits: [] },
      { status: 500 }
    );
  }
}
