"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  as?: "div" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as: Tag = "div",
  ...rest
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transforms: Record<string, string> = {
    up: "translateY(20px)",
    down: "translateY(-20px)",
    left: "translateX(-20px)",
    right: "translateX(20px)",
    none: "none",
  };

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLAnchorElement>}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : transforms[direction],
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
