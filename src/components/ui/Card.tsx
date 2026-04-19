import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "solid" | "glass";
  hoverable?: boolean;
}

export function Card({
  className,
  variant = "solid",
  hoverable = false,
  children,
  ...props
}: CardProps) {
  const baseStyles = "rounded-[2rem] overflow-hidden transition-all duration-300";
  
  const variants = {
    solid: "bg-white shadow-soft border border-gray-100",
    glass: "bg-white/70 backdrop-blur-md shadow-soft border border-white/10",
  };

  const hoverStyles = hoverable
    ? "hover:scale-105 hover:shadow-xl hover:z-10"
    : "";

  return (
    <div
      className={cn(baseStyles, variants[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
