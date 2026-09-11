"use client";

import { useRef, KeyboardEvent } from "react";
import { motion } from "framer-motion";

interface AnimatedTabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}

export function AnimatedTabs({ tabs, activeTab, onChange }: AnimatedTabsProps) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: KeyboardEvent, index: number) => {
    let nextIndex: number | null = null;

    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = tabs.length - 1;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      onChange(tabs[nextIndex]);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div
      className="flex space-x-1 bg-bg-secondary p-1 rounded-full w-max"
      role="tablist"
      aria-label="Filter kategori proyek"
    >
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab;

        return (
          <button
            key={tab}
            ref={(el) => { tabRefs.current[index] = el; }}
            onClick={() => onChange(tab)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            className={`relative px-6 py-2 text-[14px] font-medium transition-colors duration-300 z-10 outline-none cursor-pointer rounded-full ${
              isActive ? "text-white" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-accent rounded-full -z-10 shadow-[0_2px_8px_rgba(0,113,227,0.3)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {tab}
          </button>
        );
      })}
    </div>
  );
}
