import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "neon";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-[4px] font-heading font-medium uppercase tracking-widest cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-50",
          {
            "border border-brand-border bg-transparent text-brand-light hover:border-brand-accent/40 hover:bg-brand-accent/5": variant === "primary",
            "border border-brand-border bg-transparent text-brand-dim hover:border-brand-light/20 hover:text-brand-gray": variant === "outline",
            "bg-transparent text-brand-dim hover:text-brand-light": variant === "ghost",
            "border-[1.5px] border-brand-accent bg-transparent text-brand-accent hover:bg-brand-accent hover:text-brand-dark": variant === "neon",
            "h-9 px-4 text-xs": size === "sm",
            "h-10 px-6 py-2 text-sm": size === "md",
            "h-12 px-8 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
