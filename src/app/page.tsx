import { Hero, ReadingsShowcase, AppShowcase } from "@/components/sections";
import { CosmicBackground } from "@/components/backgrounds";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Global Cosmic Background - Fixed for entire page */}
      <CosmicBackground intensity="medium" position="fixed" />

      {/* Content */}
      <div className="relative z-10">
        <Hero />

        {/* Gradient divider: Hero → Readings */}
        <div className="h-24 bg-gradient-to-b from-transparent via-[var(--bg-primary)]/50 to-transparent" />

        {/* YouTube & TikTok Readings */}
        <ReadingsShowcase />

        {/* Gradient divider: Readings → App Showcase */}
        <div className="section-divider mx-auto max-w-4xl" />

        {/* App Showcase */}
        <AppShowcase />
      </div>
    </div>
  );
}
