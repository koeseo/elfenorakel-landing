import { Hero, ShortsShowcase, ReadingsShowcase, AppShowcase, TikTokShowcase } from "@/components/sections";
import { CosmicBackground } from "@/components/backgrounds";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Global Cosmic Background - Fixed for entire page */}
      <CosmicBackground intensity="medium" position="fixed" />

      {/* Content */}
      <div className="relative z-10">
        <Hero />

        {/* YouTube Shorts Strip */}
        <ShortsShowcase />

        {/* Readings Overview */}
        <ReadingsShowcase />

        {/* Gradient divider */}
        <div className="section-divider mx-auto max-w-4xl" />

        {/* YouTube Showcase */}
        <AppShowcase />

        {/* Gradient divider */}
        <div className="section-divider mx-auto max-w-4xl my-4" />

        {/* TikTok Conversion Section */}
        <TikTokShowcase />
      </div>
    </div>
  );
}
