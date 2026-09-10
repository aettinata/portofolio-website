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
    primary: "bg-[#0071E3] text-white hover:bg-[#0077ED]",
    secondary: "bg-bg-secondary text-text-primary hover:bg-[#E8E8ED]",
    outline: "border border-[#0071E3] text-[#0071E3] hover:bg-[#0071E3] hover:text-white"
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
