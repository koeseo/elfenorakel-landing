import { Hero, ShortsShowcase, ReadingsShowcase, AppShowcase } from "@/components/sections";
import { CosmicBackground } from "@/components/backgrounds";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Global Cosmic Background - Fixed for entire page */}
      <CosmicBackground intensity="medium" position="fixed" />

      {/* Content */}
      <div className="relative z-10">
        <Hero />

        {/* YouTube Shorts Strip - Bridge between Hero and Content */}
        <ShortsShowcase />

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
