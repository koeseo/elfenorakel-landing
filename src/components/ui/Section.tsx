import { type ReactNode } from "react";
import { clsx } from "clsx";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "primary" | "secondary" | "cosmic";
  padding?: "sm" | "md" | "lg" | "xl";
}

const bgStyles = {
  primary: "bg-[var(--bg-primary)]",
  secondary: "bg-[var(--bg-secondary)]",
  cosmic: "bg-cosmic",
};

const paddingStyles = {
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-24 md:py-32",
};

export const Section = ({
  children,
  className,
  id,
  background = "primary",
  padding = "lg",
}: SectionProps) => {
  return (
    <section
      id={id}
      className={clsx(bgStyles[background], paddingStyles[padding], className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};

export const SectionTitle = ({
  children,
  subtitle,
  centered = true,
  className,
}: {
  children: ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) => {
  return (
    <div className={clsx(centered && "text-center", "mb-12", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
