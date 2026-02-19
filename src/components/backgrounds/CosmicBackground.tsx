"use client";

import { useEffect, useState, useMemo } from "react";

interface CosmicBackgroundProps {
  intensity?: "subtle" | "medium" | "intense";
  showNebula?: boolean;
  showParticles?: boolean;
  showStars?: boolean;
  showFireflies?: boolean;
  position?: "fixed" | "absolute";
  className?: string;
}

const intensityConfig = {
  subtle: {
    nebulaOpacity: 0.2,
    particleCount: 8,
    starCount: 20,
    fireflyCount: 4,
    nebulaScale: 0.9,
  },
  medium: {
    nebulaOpacity: 0.3,
    particleCount: 10,
    starCount: 30,
    fireflyCount: 6,
    nebulaScale: 1,
  },
  intense: {
    nebulaOpacity: 0.45,
    particleCount: 15,
    starCount: 45,
    fireflyCount: 10,
    nebulaScale: 1.2,
  },
};

export function CosmicBackground({
  intensity = "subtle",
  showNebula = true,
  showParticles = true,
  showStars = true,
  showFireflies = true,
  position = "absolute",
  className = "",
}: CosmicBackgroundProps) {
  const [isMounted, setIsMounted] = useState(false);
  const config = intensityConfig[intensity];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`${position} inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    >
      {/* Dark gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 20%, rgba(13, 148, 136, ${config.nebulaOpacity * 0.3}) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(201, 163, 92, ${config.nebulaOpacity * 0.25}) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(94, 234, 212, ${config.nebulaOpacity * 0.15}) 0%, transparent 70%),
            linear-gradient(180deg, #0D0D0F 0%, #0A0A0C 50%, #0D0D0F 100%)
          `,
        }}
      />

      {/* Animated Nebula Orbs — reduced to 2 with lower blur */}
      {showNebula && (
        <>
          <div
            className="absolute rounded-full cosmic-nebula-1"
            style={{
              width: 450 * config.nebulaScale,
              height: 450 * config.nebulaScale,
              left: "-5%",
              top: "-10%",
              background: `radial-gradient(circle, var(--teal) 0%, transparent 70%)`,
              filter: "blur(50px)",
              opacity: config.nebulaOpacity * 0.7,
              willChange: "transform",
            }}
          />
          <div
            className="absolute rounded-full cosmic-nebula-2"
            style={{
              width: 500 * config.nebulaScale,
              height: 500 * config.nebulaScale,
              right: "-10%",
              bottom: "-10%",
              background: `radial-gradient(circle, var(--gold) 0%, transparent 70%)`,
              filter: "blur(60px)",
              opacity: config.nebulaOpacity * 0.6,
              willChange: "transform",
            }}
          />
        </>
      )}

      {/* Fireflies */}
      {showFireflies && <Fireflies count={config.fireflyCount} />}

      {/* Floating Particles */}
      {showParticles && <FloatingParticles count={config.particleCount} />}

      {/* Twinkling Stars */}
      {showStars && <TwinklingStars count={config.starCount} />}

      {/* Vignette overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, rgba(13, 13, 15, 0.3) 50%, rgba(13, 13, 15, 0.7) 100%)`,
        }}
      />
    </div>
  );
}

// Fireflies — CSS animated
function Fireflies({ count }: { count: number }) {
  const fireflies = useMemo(() =>
    [...Array(count)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 4 + Math.random() * 6,
      duration: 12 + Math.random() * 10,
      delay: Math.random() * 8,
      moveX: (Math.random() - 0.5) * 150,
      moveY: -50 - Math.random() * 150,
      isTeal: Math.random() > 0.7,
    })), [count]);

  return (
    <>
      {fireflies.map((f) => (
        <div
          key={f.id}
          className="absolute rounded-full cosmic-firefly"
          style={{
            left: `${f.x}%`,
            top: `${f.y}%`,
            width: f.size,
            height: f.size,
            background: f.isTeal
              ? `radial-gradient(circle, rgba(94, 234, 212, 0.9) 0%, rgba(45, 212, 191, 0.6) 40%, transparent 70%)`
              : `radial-gradient(circle, rgba(244, 227, 177, 0.9) 0%, rgba(201, 163, 92, 0.6) 40%, transparent 70%)`,
            boxShadow: f.isTeal
              ? `0 0 ${f.size * 2}px rgba(94, 234, 212, 0.8), 0 0 ${f.size * 4}px rgba(45, 212, 191, 0.4)`
              : `0 0 ${f.size * 2}px rgba(244, 227, 177, 0.8), 0 0 ${f.size * 4}px rgba(201, 163, 92, 0.4)`,
            ["--move-x" as string]: `${f.moveX}px`,
            ["--move-y" as string]: `${f.moveY}px`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </>
  );
}

// Floating Particles — CSS animated
function FloatingParticles({ count }: { count: number }) {
  const particles = useMemo(() => {
    const colors = [
      { main: "rgba(201, 163, 92, 0.7)", glow: "rgba(201, 163, 92, 0.5)" },
      { main: "rgba(45, 212, 191, 0.7)", glow: "rgba(45, 212, 191, 0.5)" },
      { main: "rgba(94, 234, 212, 0.6)", glow: "rgba(94, 234, 212, 0.4)" },
      { main: "rgba(244, 227, 177, 0.6)", glow: "rgba(244, 227, 177, 0.4)" },
    ];

    return [...Array(count)].map((_, i) => {
      const colorSet = colors[Math.floor(Math.random() * colors.length)];
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 5,
        duration: 6 + Math.random() * 10,
        delay: Math.random() * 6,
        color: colorSet.main,
        glowColor: colorSet.glow,
        driftX: Math.random() > 0.5 ? 25 : -25,
      };
    });
  }, [count]);

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full cosmic-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, ${p.color} 0%, transparent 70%)`,
            boxShadow: `0 0 ${p.size * 3}px ${p.glowColor}`,
            ["--drift-x" as string]: `${p.driftX}px`,
            ["--drift-y" as string]: `${-40 - Math.random() * 30}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </>
  );
}

// Twinkling Stars — CSS animated
function TwinklingStars({ count }: { count: number }) {
  const stars = useMemo(() =>
    [...Array(count)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 0.5 + Math.random() * 2.5,
      duration: 1.5 + Math.random() * 4,
      delay: Math.random() * 4,
      brightness: 0.5 + Math.random() * 0.5,
    })), [count]);

  return (
    <>
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full cosmic-star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background: `radial-gradient(circle, rgba(255, 255, 255, ${s.brightness}) 0%, rgba(255, 255, 255, ${s.brightness * 0.5}) 50%, transparent 100%)`,
            boxShadow: s.size > 1.5 ? `0 0 ${s.size * 2}px rgba(255, 255, 255, 0.3)` : undefined,
            ["--star-brightness" as string]: s.brightness,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            willChange: "opacity, transform",
          }}
        />
      ))}
    </>
  );
}
