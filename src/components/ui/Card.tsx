"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "hover";
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card = ({
  children,
  className,
  variant = "default",
  padding = "md",
}: CardProps) => {
  const baseStyles = clsx(
    "rounded-2xl transition-all duration-300",
    paddingStyles[padding],
    {
      "bg-[var(--bg-card)] border border-[var(--glass-border)]":
        variant === "default",
      "glass-card": variant === "glass",
      "bg-[var(--bg-card)] border border-[var(--glass-border)] hover:border-[var(--gold-dim)] hover:shadow-lg":
        variant === "hover",
    },
    className
  );

  if (variant === "hover") {
    return (
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className={baseStyles}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseStyles}>{children}</div>;
};
