"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CosmicBackgroundProps {
  /** Intensity level: subtle, medium, or intense */
  intensity?: "subtle" | "medium" | "intense";
  /** Show animated nebula orbs */
  showNebula?: boolean;
  /** Show floating particles */
  showParticles?: boolean;
  /** Show twinkling stars */
  showStars?: boolean;
  /** Show firefly effects */
  showFireflies?: boolean;
  /** Show aurora effect */
  showAurora?: boolean;
  /** Fixed position (full viewport) or absolute (container-relative) */
  position?: "fixed" | "absolute";
  /** Custom className */
  className?: string;
}

// Configuration per intensity level
const intensityConfig = {
  subtle: {
    nebulaOpacity: 0.2,
    particleCount: 20,
    starCount: 60,
    fireflyCount: 8,
    nebulaScale: 0.9,
    auroraOpacity: 0.1,
  },
  medium: {
    nebulaOpacity: 0.3,
    particleCount: 30,
    starCount: 100,
    fireflyCount: 15,
    nebulaScale: 1,
    auroraOpacity: 0.15,
  },
  intense: {
    nebulaOpacity: 0.45,
    particleCount: 50,
    starCount: 150,
    fireflyCount: 25,
    nebulaScale: 1.2,
    auroraOpacity: 0.2,
  },
};

export function CosmicBackground({
  intensity = "subtle",
  showNebula = true,
  showParticles = true,
  showStars = true,
  showFireflies = true,
  showAurora = true,
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
      {/* Dark gradient base with enhanced depth */}
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

      {/* Aurora Effect */}
      {showAurora && <AuroraEffect opacity={config.auroraOpacity} />}

      {/* Animated Nebula Orbs with enhanced blur */}
      {showNebula && (
        <>
          {/* Teal Orb - Top Left */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 450 * config.nebulaScale,
              height: 450 * config.nebulaScale,
              left: "-5%",
              top: "-10%",
              background: `radial-gradient(circle, var(--teal) 0%, transparent 70%)`,
              filter: "blur(80px)",
              opacity: config.nebulaOpacity * 0.7,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Gold Orb - Bottom Right */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 500 * config.nebulaScale,
              height: 500 * config.nebulaScale,
              right: "-10%",
              bottom: "-10%",
              background: `radial-gradient(circle, var(--gold) 0%, transparent 70%)`,
              filter: "blur(100px)",
              opacity: config.nebulaOpacity * 0.6,
            }}
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />

          {/* Purple/Violet Orb - Top Right */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 320 * config.nebulaScale,
              height: 320 * config.nebulaScale,
              right: "10%",
              top: "30%",
              background: `radial-gradient(circle, #A78BFA 0%, transparent 70%)`,
              filter: "blur(80px)",
              opacity: config.nebulaOpacity * 0.4,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
          />

          {/* Center Teal Glow */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 380 * config.nebulaScale,
              height: 380 * config.nebulaScale,
              left: "40%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(circle, rgba(94, 234, 212, ${config.nebulaOpacity * 0.6}) 0%, transparent 70%)`,
              filter: "blur(60px)",
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
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

// Aurora Effect Component
function AuroraEffect({ opacity }: { opacity: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute"
        style={{
          width: "150%",
          height: "150%",
          top: "-25%",
          left: "-25%",
          background: `
            radial-gradient(ellipse 80% 50% at 20% 30%, rgba(45, 212, 191, ${opacity * 2}) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 70% 60%, rgba(201, 163, 92, ${opacity * 1.5}) 0%, transparent 50%),
            radial-gradient(ellipse 70% 60% at 40% 80%, rgba(139, 105, 20, ${opacity}) 0%, transparent 50%)
          `,
          mixBlendMode: "screen",
        }}
        animate={{
          x: ["0%", "3%", "-2%", "-3%", "0%"],
          y: ["0%", "-2%", "3%", "-1%", "0%"],
          rotate: [0, 1, -1, 0.5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

// Fireflies Component - Magical floating wisps
function Fireflies({ count }: { count: number }) {
  const [fireflies, setFireflies] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    moveX: number;
    moveY: number;
    isTeal: boolean;
  }>>([]);

  useEffect(() => {
    const generated = [...Array(count)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 4 + Math.random() * 6,
      duration: 12 + Math.random() * 10,
      delay: Math.random() * 8,
      moveX: (Math.random() - 0.5) * 150,
      moveY: -50 - Math.random() * 150,
      isTeal: Math.random() > 0.7,
    }));

    setFireflies(generated);
  }, [count]);

  return (
    <>
      {fireflies.map((firefly) => (
        <motion.div
          key={firefly.id}
          className="absolute rounded-full"
          style={{
            left: `${firefly.x}%`,
            top: `${firefly.y}%`,
            width: firefly.size,
            height: firefly.size,
            background: firefly.isTeal
              ? `radial-gradient(circle, rgba(94, 234, 212, 0.9) 0%, rgba(45, 212, 191, 0.6) 40%, transparent 70%)`
              : `radial-gradient(circle, rgba(244, 227, 177, 0.9) 0%, rgba(201, 163, 92, 0.6) 40%, transparent 70%)`,
            boxShadow: firefly.isTeal
              ? `0 0 ${firefly.size * 2}px rgba(94, 234, 212, 0.8), 0 0 ${firefly.size * 4}px rgba(45, 212, 191, 0.4)`
              : `0 0 ${firefly.size * 2}px rgba(244, 227, 177, 0.8), 0 0 ${firefly.size * 4}px rgba(201, 163, 92, 0.4)`,
            filter: "blur(1px)",
          }}
          animate={{
            x: [0, firefly.moveX * 0.5, firefly.moveX, firefly.moveX * 0.8, 0],
            y: [0, firefly.moveY * 0.3, firefly.moveY * 0.6, firefly.moveY * 0.9, firefly.moveY],
            opacity: [0, 0.9, 1, 0.7, 0],
            scale: [0.5, 1.1, 1, 0.9, 0.5],
          }}
          transition={{
            duration: firefly.duration,
            repeat: Infinity,
            delay: firefly.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

// Floating Particles Component - Enhanced with glow
function FloatingParticles({ count }: { count: number }) {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    color: string;
    glowColor: string;
  }>>([]);

  useEffect(() => {
    const colors = [
      { main: "rgba(201, 163, 92, 0.7)", glow: "rgba(201, 163, 92, 0.5)" },
      { main: "rgba(45, 212, 191, 0.7)", glow: "rgba(45, 212, 191, 0.5)" },
      { main: "rgba(94, 234, 212, 0.6)", glow: "rgba(94, 234, 212, 0.4)" },
      { main: "rgba(244, 227, 177, 0.6)", glow: "rgba(244, 227, 177, 0.4)" },
    ];

    const generated = [...Array(count)].map((_, i) => {
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
      };
    });

    setParticles(generated);
  }, [count]);

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.glowColor}`,
          }}
          animate={{
            y: [0, -40 - Math.random() * 30, 0],
            x: [0, Math.random() > 0.5 ? 25 : -25, 0],
            opacity: [0.2, 0.9, 0.2],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

// Twinkling Stars Component - Enhanced with varied sizes
function TwinklingStars({ count }: { count: number }) {
  const [stars, setStars] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    brightness: number;
  }>>([]);

  useEffect(() => {
    const generated = [...Array(count)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 0.5 + Math.random() * 2.5,
      duration: 1.5 + Math.random() * 4,
      delay: Math.random() * 4,
      brightness: 0.5 + Math.random() * 0.5,
    }));

    setStars(generated);
  }, [count]);

  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            background: `radial-gradient(circle, rgba(255, 255, 255, ${star.brightness}) 0%, rgba(255, 255, 255, ${star.brightness * 0.5}) 50%, transparent 100%)`,
            boxShadow: star.size > 1.5 ? `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.3)` : undefined,
          }}
          animate={{
            opacity: [0.2, star.brightness, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
