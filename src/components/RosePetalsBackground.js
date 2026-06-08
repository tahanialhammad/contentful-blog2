"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Types of rose petal SVGs available in public/images
const PETAL_TYPES = [1, 2, 3, 4];

export default function RosePetalsBackground() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate petals only on the client side to prevent Next.js hydration mismatch
    const generatedPetals = Array.from({ length: 24 }).map((_, index) => {
      const scale = 0.3 + Math.random() * 0.6; // Scale between 0.3 and 0.9
      const duration = 10 + Math.random() * 12; // Duration between 10s and 22s
      const delay = Math.random() * -20; // Start with negative delay so some petals are already on screen when page loads
      
      // Horizontal drift (sway effect)
      const swayOffset = 30 + Math.random() * 70; // 30px to 100px drift
      const xKeyframes = [
        0,
        swayOffset,
        -swayOffset / 2,
        swayOffset / 1.5,
        -swayOffset / 3,
        0
      ];

      return {
        id: index,
        type: PETAL_TYPES[index % PETAL_TYPES.length],
        left: `${Math.random() * 100}%`,
        scale,
        opacity: 0.3 + Math.random() * 0.5, // Opacity between 0.3 and 0.8
        duration,
        delay,
        xKeyframes,
        rotateXStart: Math.random() * 360,
        rotateYStart: Math.random() * 360,
        rotateZStart: Math.random() * 360,
        rotateZEnd: 360 + Math.random() * 720,
      };
    });

    setPetals(generatedPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute top-0"
          style={{
            left: petal.left,
            width: "48px",
            height: "48px",
            opacity: petal.opacity,
          }}
          initial={{
            y: "-10vh",
            x: 0,
            scale: petal.scale,
            rotate: petal.rotateZStart,
            rotateX: petal.rotateXStart,
            rotateY: petal.rotateYStart,
          }}
          animate={{
            y: "110vh",
            x: petal.xKeyframes,
            rotate: petal.rotateZEnd,
            rotateX: [petal.rotateXStart, petal.rotateXStart + 360, petal.rotateXStart + 720],
            rotateY: [petal.rotateYStart, petal.rotateYStart + 180, petal.rotateYStart + 360],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            ease: "linear",
            delay: petal.delay,
          }}
        >
          <img
            src={`/images/rose-petal-${petal.type}.svg`}
            alt=""
            className="w-full h-full object-contain pointer-events-none select-none"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
}
