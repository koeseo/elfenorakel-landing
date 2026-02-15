"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown, Youtube } from "lucide-react";
import { Button } from "@/components/ui";

// Dynamic import for 3D scene (no SSR)
const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 hero-cosmic-bg" />
    ),
  }
);

export const Hero = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const scrollToReadings = () => {
    document.getElementById("readings-showcase")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden hero-cosmic-bg">
      {/* 3D Background */}
      {mounted && !reducedMotion && <HeroScene />}

      {/* Fallback gradient for reduced motion */}
      {reducedMotion && (
        <div className="absolute inset-0 hero-cosmic-bg" />
      )}

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-[#0A0A0C]/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-[var(--gold)]" />
            <span className="text-[var(--gold)] text-sm uppercase tracking-widest">
              Mystische Guidance
            </span>
            <Sparkles className="w-5 h-5 text-[var(--gold)]" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-gradient-gold">Elfenorakel</span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Persönliche Readings auf YouTube & TikTok – ehrlich, tiefgründig
            und direkt aus dem Herzen.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" onClick={scrollToReadings}>
              <Sparkles className="w-5 h-5" />
              Zu den Readings
            </Button>

            <Button variant="outline" size="lg" onClick={() => window.open("https://youtube.com/@elfenorakel", "_blank")}>
              <Youtube className="w-5 h-5" />
              YouTube
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[var(--text-muted)] cursor-pointer"
            onClick={scrollToReadings}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
