"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

// Shared geometry — created once, reused by all cards
const sharedGeometry = new THREE.PlaneGeometry(1.4, 2.4);

interface CardProps {
  position: [number, number, number];
  rotation: [number, number, number];
  image: string;
  delay?: number;
}

const Card = ({ position, rotation, image, delay = 0 }: CardProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(image);
  const { pointer } = useThree();
  const frameCount = useRef(0);

  useFrame((state) => {
    // Throttle: update every 2nd frame
    frameCount.current++;
    if (frameCount.current % 2 !== 0) return;

    if (!meshRef.current) return;

    const time = state.clock.elapsedTime + delay;

    // Floating animation
    meshRef.current.position.y = position[1] + Math.sin(time * 0.8) * 0.15;

    // Subtle rotation
    meshRef.current.rotation.y = rotation[1] + Math.sin(time * 0.5) * 0.1;
    meshRef.current.rotation.x = rotation[0] + Math.cos(time * 0.3) * 0.05;

    // Mouse interaction - subtle follow
    meshRef.current.rotation.y += pointer.x * 0.1;
    meshRef.current.rotation.x += pointer.y * 0.05;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} geometry={sharedGeometry}>
      <meshStandardMaterial
        map={texture}
        side={THREE.DoubleSide}
        transparent
        opacity={0.95}
      />
    </mesh>
  );
};

export const FloatingCards = () => {
  const cards = useMemo(() => [
    {
      position: [-2.5, 0.3, 0] as [number, number, number],
      rotation: [0, 0.3, 0] as [number, number, number],
      image: "/cards/tarot/major-00-narr.webp",
      delay: 0,
    },
    {
      position: [0, 0.5, 0.5] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number],
      image: "/cards/tarot/major-01-magier.webp",
      delay: 1,
    },
    {
      position: [2.5, 0.2, 0] as [number, number, number],
      rotation: [0, -0.3, 0] as [number, number, number],
      image: "/cards/tarot/major-17-stern.webp",
      delay: 2,
    },
  ], []);

  return (
    <group>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </group>
  );
};
