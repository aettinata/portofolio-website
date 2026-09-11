import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "avatar" | "card" | "image" | "title";
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = "text", ...props }, ref) => {
    const variants = {
      text: "h-5 w-full rounded",
      avatar: "h-12 w-12 rounded-full",
      title: "h-10 w-3/4 rounded-lg",
      card: "h-full w-full rounded-2xl",
      image: "h-full w-full rounded-xl",
    };

    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(
          "skeleton-shimmer animate-pulse",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";
