import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils"; // Assumes clsx and tailwind-merge exist here

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-[980px] px-6 py-3 font-medium transition-colors duration-200";
  
  const variants = {
    primary: "bg-accent text-white hover:opacity-90",
    secondary: "bg-bg-secondary text-text-primary hover:bg-border/50",
    outline: "border border-accent text-accent hover:bg-accent hover:text-white"
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
