"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface CosmicParticlesProps {
  count?: number;
}

export const CosmicParticles = ({ count = 800 }: CosmicParticlesProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const frameCount = useRef(0);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 15 + Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }

    return pos;
  }, [count]);

  useFrame((state) => {
    // Throttle: update every 2nd frame
    frameCount.current++;
    if (frameCount.current % 2 !== 0) return;

    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#C9A35C"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

// Secondary teal particles
export const TealParticles = ({ count = 400 }: CosmicParticlesProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const frameCount = useRef(0);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 20 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }

    return pos;
  }, [count]);

  useFrame((state) => {
    frameCount.current++;
    if (frameCount.current % 2 !== 0) return;

    if (pointsRef.current) {
      pointsRef.current.rotation.y = -state.clock.elapsedTime * 0.015;
      pointsRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#2DD4BF"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};
