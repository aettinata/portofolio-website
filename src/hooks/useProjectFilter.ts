import { useState, useMemo } from "react";
import { FilterConfig } from "@/types";

/**
 * A highly generic, type-safe hook for filtering any array of objects.
 * Showcases advanced TypeScript generics and complex state management.
 */
export function useProjectFilter<T extends Record<string, any>>(config: FilterConfig<T>) {
  const [activeCategory, setActiveCategory] = useState<string>(config.activeCategory || "All");
  const [searchQuery, setSearchQuery] = useState<string>(config.searchQuery || "");

  const filteredData = useMemo(() => {
    return config.data.filter((item) => {
      // 1. Filter by Category
      if (config.categoryField && activeCategory !== "All") {
        const itemCategory = item[config.categoryField];
        if (itemCategory !== activeCategory) {
          return false;
        }
      }

      // 2. Filter by Search Query
      if (searchQuery.trim() !== "" && config.searchFields) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = config.searchFields.some((field) => {
          const value = item[field];
          if (typeof value === "string") {
            return value.toLowerCase().includes(query);
          }
          if (Array.isArray(value)) {
            return value.some((v: any) => typeof v === "string" && v.toLowerCase().includes(query));
          }
          return false;
        });

        if (!matchesSearch) {
          return false;
        }
      }

      return true;
    });
  }, [config.data, activeCategory, searchQuery, config.categoryField, config.searchFields]);

  return {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    filteredData,
  };
}
