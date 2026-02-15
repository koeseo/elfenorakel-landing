import dynamic from "next/dynamic";
import { Hero, ShortsShowcase } from "@/components/sections";
import { CosmicBackground } from "@/components/backgrounds";

// Lazy load below-fold sections — code splitting defers JS until needed
const ReadingsShowcase = dynamic(
  () => import("@/components/sections/ReadingsShowcase").then((m) => m.ReadingsShowcase)
);
const SeelenProfilCTA = dynamic(
  () => import("@/components/sections/SeelenProfilCTA").then((m) => m.SeelenProfilCTA)
);
const AppShowcase = dynamic(
  () => import("@/components/sections/AppShowcase").then((m) => m.AppShowcase)
);
const TikTokShowcase = dynamic(
  () => import("@/components/sections/TikTokShowcase").then((m) => m.TikTokShowcase)
);

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

        {/* Seelen-Profil CTA */}
        <SeelenProfilCTA />

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
