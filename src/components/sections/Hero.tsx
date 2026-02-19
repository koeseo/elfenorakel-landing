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

  const scrollToMiniReading = () => {
    document.getElementById("mini-reading")?.scrollIntoView({
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

      {/* Mystical Circles */}
      <div className="mystical-circle mystical-circle-outer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]" />
      <div className="mystical-circle mystical-circle-middle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px]" />
      <div className="mystical-circle mystical-circle-inner absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[350px] md:h-[350px]" />

      {/* Floating Runes */}
      <span className="floating-rune top-[15%] left-[8%] text-[var(--teal)] hidden md:block" style={{ animationDelay: '0s', animationDuration: '8s' }}>✦</span>
      <span className="floating-rune top-[35%] right-[10%] text-[var(--gold)] hidden md:block" style={{ animationDelay: '2s', animationDuration: '10s' }}>☽</span>
      <span className="floating-rune bottom-[20%] left-[12%] text-[var(--teal)] hidden md:block" style={{ animationDelay: '4s', animationDuration: '12s' }}>★</span>
      <span className="floating-rune top-[60%] right-[15%] text-[var(--teal-light)] hidden md:block" style={{ animationDelay: '1s', animationDuration: '9s' }}>⊹</span>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Corner Accents */}
        <div className="corner-accent corner-accent-tl -top-4 -left-4 hidden md:block" style={{ animationDelay: '0s' }} />
        <div className="corner-accent corner-accent-tr -top-4 -right-4 hidden md:block" style={{ animationDelay: '0.75s' }} />
        <div className="corner-accent corner-accent-bl -bottom-4 -left-4 hidden md:block" style={{ animationDelay: '1.5s' }} />
        <div className="corner-accent corner-accent-br -bottom-4 -right-4 hidden md:block" style={{ animationDelay: '2.25s' }} />

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
            <span className="text-gradient-gold text-glow-teal">Elfenorakel</span>
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
            <Button size="lg" onClick={scrollToMiniReading} className="btn-cta-teal">
              <Sparkles className="w-5 h-5" />
              Karte ziehen ✦
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
            onClick={scrollToMiniReading}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
