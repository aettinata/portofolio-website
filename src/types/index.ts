/**
 * Complex TypeScript Types for Neo-Brutalist Architecture
 */

// 1. Generic Navigation Type
export type NavItem<T extends string> = {
  name: string;
  href: T;
  external?: boolean;
};

// 2. Base Project Type
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

// 3. Layout Sizes (Bento Grid)
export type CardSize = "small" | "medium" | "large";

// 4. Mapped Types for Configuration
export type SizeConfigMap = {
  [K in CardSize]: {
    spanClass: string;
    aspectRatio: string;
  };
};

// 5. Extended Project Type combining BaseProject with Layout hints
export interface Project extends BaseProject {
  sizeHint?: CardSize; // Let the UI hint which size to use in the grid
}

// 6. Generic Filter State Configuration
export type FilterConfig<T> = {
  data: T[];
  searchQuery?: string;
  searchFields?: (keyof T)[];
  activeCategory?: string;
  categoryField?: keyof T;
};
