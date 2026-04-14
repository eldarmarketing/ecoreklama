"use client";

import { useEffect, useState } from "react";

interface Leaf {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export default function LeafParticles() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    setLeaves(
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 14 + Math.random() * 12,
        size: 12 + Math.random() * 10,
        opacity: 0.08 + Math.random() * 0.12,
      }))
    );
  }, []);

  if (!leaves.length) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {leaves.map((l) => (
        <div
          key={l.id}
          style={{
            position: "absolute",
            left: `${l.left}%`,
            top: "-5%",
            fontSize: `${l.size}px`,
            opacity: l.opacity,
            animation: `leaf-fall ${l.duration}s ${l.delay}s linear infinite`,
            willChange: "transform",
          }}
        >
          🍃
        </div>
      ))}
    </div>
  );
}
