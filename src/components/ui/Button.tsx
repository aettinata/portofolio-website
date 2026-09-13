import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils"; // Assumes clsx and tailwind-merge exist here

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  asChild?: boolean;
}

export function Button({ children, variant = "primary", className, asChild = false, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-[980px] px-6 py-3 font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";
  
  const variants = {
    primary: "bg-accent text-white hover:opacity-90",
    secondary: "bg-bg-secondary text-text-primary hover:bg-border/50",
    outline: "border border-accent text-accent hover:bg-accent hover:text-white"
  };

  const combinedClassName = cn(baseStyles, variants[variant], className);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
      className: cn(combinedClassName, (children.props as { className?: string }).className),
      ...props,
    });
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
