import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent1" | "accent2" | "outline" | "transparent";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "accent1",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none rounded-[2rem]";

  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90 shadow-soft hover:shadow-lg hover:-translate-y-0.5",
    accent1: "bg-accent1 text-white hover:bg-opacity-90 shadow-soft hover:shadow-lg hover:-translate-y-0.5",
    accent2: "bg-accent2 text-white hover:bg-opacity-90 shadow-soft hover:shadow-lg hover:-translate-y-0.5",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    transparent: "bg-transparent text-primary hover:bg-primary/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
