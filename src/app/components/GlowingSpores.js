"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const spores = Array.from({ length: 20 });

export default function GlowingSpores() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // set dimensions after mount
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!dimensions.width || !dimensions.height) return null; // render nothing until ready

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {spores.map((_, i) => {
        const randomX = Math.random() * dimensions.width;
        const randomY = Math.random() * dimensions.height;

        return (
          <motion.span
            key={i}
            className="absolute w-2 h-2 rounded-full bg-yellow-300"
            initial={{
              x: randomX,
              y: randomY,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              y: [randomY, -50],
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
              boxShadow: [
                "0 0 4px rgba(255,255,150,0.6)",
                "0 0 12px rgba(255,255,150,0.9)",
                "0 0 4px rgba(255,255,150,0.6)",
              ],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
}
