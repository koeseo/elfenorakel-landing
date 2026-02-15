"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { CosmicParticles, TealParticles } from "./CosmicParticles";
import { FloatingCards } from "./FloatingCards";

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate={false}
      />

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#C9A35C" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2DD4BF" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#FFD700"
      />

      {/* Particles */}
      <CosmicParticles count={1500} />
      <TealParticles count={800} />

      {/* Cards */}
      <Suspense fallback={null}>
        <FloatingCards />
      </Suspense>
    </>
  );
};

export const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};
