"use client";
import { motion } from "framer-motion";

const spores = Array.from({ length: 20 });

export default function GlowingSpores() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {spores.map((_, i) => (
                <motion.span
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-yellow-300"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        y: [Math.random() * window.innerHeight, -50],
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
            ))}
        </div>
    );
}
