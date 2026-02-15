"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "glass";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  /** Add pulsing glow effect for CTAs */
  glow?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    relative overflow-visible
    bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)]
    hover:from-[var(--gold-light)] hover:to-[var(--gold)]
    text-white font-semibold
    shadow-[0_4px_24px_rgba(201,163,92,0.3)]
    hover:shadow-[0_8px_40px_rgba(201,163,92,0.5)]
  `,
  secondary: `
    relative overflow-visible
    bg-gradient-to-br from-[var(--teal)] to-[var(--teal-dim)]
    hover:from-[var(--teal-light)] hover:to-[var(--teal)]
    text-white font-semibold
    shadow-[0_4px_24px_rgba(45,212,191,0.3)]
    hover:shadow-[0_8px_40px_rgba(45,212,191,0.5)]
  `,
  ghost:
    "bg-transparent hover:bg-[var(--bg-card)] text-[var(--text-primary)]",
  outline: `
    bg-transparent
    border border-[var(--glass-border-gold)]
    text-[var(--gold)]
    hover:bg-[rgba(201,163,92,0.1)]
    hover:border-[var(--gold)]
    hover:shadow-[0_0_20px_rgba(201,163,92,0.2)]
  `,
  glass: `
    bg-[var(--glass-bg)]
    backdrop-blur-[10px]
    border border-[var(--glass-border)]
    text-[var(--text-primary)]
    hover:bg-[var(--glass-bg-strong)]
    hover:border-[var(--teal-glow)]
    hover:text-[var(--teal-light)]
    hover:shadow-[0_0_20px_rgba(94,234,212,0.2)]
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm tracking-wide",
  md: "px-6 py-2.5 text-base tracking-wide",
  lg: "px-8 py-3.5 text-lg tracking-wide",
};

export const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  onClick,
  type = "button",
  glow = false,
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={isDisabled ? {} : { scale: 1.02, y: -2 }}
      whileTap={isDisabled ? {} : { scale: 0.98 }}
      disabled={isDisabled}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "uppercase tracking-wider text-[0.85em]",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      style={{ position: "relative" }}
    >
      {/* Glow effect for primary/secondary buttons */}
      {(isPrimary || isSecondary) && (
        <motion.span
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: isPrimary
              ? "linear-gradient(135deg, var(--gold), var(--teal-glow), var(--gold))"
              : "linear-gradient(135deg, var(--teal), var(--gold), var(--teal))",
            filter: "blur(15px)",
            opacity: 0,
            zIndex: -1,
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Pulsing CTA glow */}
      {glow && (isPrimary || isSecondary) && (
        <motion.span
          className="absolute -inset-1 rounded-xl pointer-events-none"
          style={{
            background: isPrimary
              ? "linear-gradient(135deg, var(--gold), var(--gold-light), var(--gold))"
              : "linear-gradient(135deg, var(--teal), var(--teal-light), var(--teal))",
            filter: "blur(15px)",
            zIndex: -1,
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : null}
      {children}
    </motion.button>
  );
};
