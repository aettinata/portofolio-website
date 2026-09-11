/**
 * TypeScript Types for Portfolio Website
 */

// Navigation Type
export type NavItem<T extends string> = {
  name: string;
  href: T;
  external?: boolean;
};

// Base Project Type
export interface BaseProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category: string;
  demoUrl?: string;
  githubUrl?: string;
}

// Extended Project Type
export interface Project extends BaseProject {}
