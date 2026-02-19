"use client";

import { useRef, useEffect, useState } from "react";

interface ElementChartProps {
  signatur: {
    feuer: number;
    wasser: number;
    luft: number;
    erde: number;
  };
}

const elements = [
  { key: "feuer" as const, name: "Feuer", symbol: "\uD83D\uDD25", farbe: "#EF4444" },
  { key: "wasser" as const, name: "Wasser", symbol: "\uD83D\uDCA7", farbe: "#3B82F6" },
  { key: "luft" as const, name: "Luft", symbol: "\uD83D\uDCA8", farbe: "#A78BFA" },
  { key: "erde" as const, name: "Erde", symbol: "\uD83C\uDF0D", farbe: "#22C55E" },
];

export const ElementChart = ({ signatur }: ElementChartProps) => {
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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-5">
      {elements.map((el, index) => {
        const value = signatur[el.key];
        return (
          <div key={el.key} className="group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">{el.symbol}</span>
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  {el.name}
                </span>
              </div>
              <span
                className="text-sm font-bold tabular-nums"
                style={{ color: el.farbe }}
              >
                {value}%
              </span>
            </div>
            <div className="h-3 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full relative"
                style={{
                  width: isVisible ? `${value}%` : "0%",
                  background: `linear-gradient(90deg, ${el.farbe}CC, ${el.farbe})`,
                  boxShadow: `0 0 12px ${el.farbe}44`,
                  transition: `width 1s ease-out ${index * 0.15}s`,
                }}
              >
                {/* Shimmer effect */}
                <div
                  className="absolute inset-0 rounded-full opacity-40"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)`,
                    backgroundSize: "200% 100%",
                    animation: isVisible
                      ? `shimmer 2s ${0.8 + index * 0.15}s ease-in-out`
                      : "none",
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
