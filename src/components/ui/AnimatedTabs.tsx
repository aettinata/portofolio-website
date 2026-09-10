"use client";

import { motion } from "framer-motion";

interface AnimatedTabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}

export function AnimatedTabs({ tabs, activeTab, onChange }: AnimatedTabsProps) {
  return (
    <div className="flex space-x-1 bg-bg-secondary p-1 rounded-full w-max">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`relative px-6 py-2 text-[14px] font-medium transition-colors duration-300 z-10 outline-none cursor-pointer rounded-full ${
            activeTab === tab ? "text-white" : "text-text-secondary hover:text-text-primary"
          }`}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-accent rounded-full -z-10 shadow-[0_2px_8px_rgba(0,113,227,0.3)]"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          {tab}
        </button>
      ))}
    </div>
  );
}
