import dynamic from "next/dynamic";
import { Hero, ShortsShowcase } from "@/components/sections";
import { CosmicBackground } from "@/components/backgrounds";

// Lazy load below-fold sections — code splitting defers JS until needed
const MiniReading = dynamic(
  () => import("@/components/sections/MiniReading").then((m) => m.MiniReading)
);
const SeelenProfilCTA = dynamic(
  () => import("@/components/sections/SeelenProfilCTA").then((m) => m.SeelenProfilCTA)
);

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Cosmic Background — CSS-based, GPU-friendly */}
      <CosmicBackground intensity="intense" position="fixed" />

      {/* Content */}
      <div className="relative z-10">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Mini-Reading — Kartenziehen */}
        <MiniReading />

        {/* Gradient divider */}
        <div className="section-divider mx-auto max-w-4xl" />

        {/* 3. Seelen-Profil CTA */}
        <SeelenProfilCTA />

        {/* Gradient divider */}
        <div className="section-divider mx-auto max-w-4xl" />

        {/* 4. Social Proof — Shorts + Social Stats */}
        <ShortsShowcase />
      </div>
    </div>
  );
}
