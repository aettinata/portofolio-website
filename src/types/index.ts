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
  featured?: boolean;
}

// Extended Project Type
export interface Project extends BaseProject {
  fullDescription?: string;
  challenges?: string;
  solutions?: string;
  date?: string;
  architectureDiagram?: string;
}

// Certification Type
export interface Certification {
  id: string;
  slug: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
  description?: string;
  skills?: string[];
}

// Experience Type
export interface Experience {
  role: string;
  company: string;
  year: string;
  description: string;
}

// Profile Type
export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
  education: Array<{
    degree: string;
    institution: string;
    year: string;
    gpa?: string;
    honors?: string;
    description?: string;
  }>;
  experience?: Experience[];
  achievements?: Array<{
    title: string;
    score?: string;
    year?: string;
    description?: string;
  }>;
  skills: string[];
  interests: string[];
  now?: {
    learning: string;
    reading: string;
    building: string;
    listening: string;
  };
}
