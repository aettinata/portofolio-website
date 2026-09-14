import { MetadataRoute } from "next";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://adamaettinata.vercel.app";
  const now = new Date();

  const staticPages = [
    "",
    "/about",
    "/projects",
    "/certifications",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projectPages = (projectsData as Project[]).map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages];
}
