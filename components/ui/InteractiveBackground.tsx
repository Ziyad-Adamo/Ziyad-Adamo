"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function InteractiveBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none opacity-40 mix-blend-screen transition-opacity duration-1000">
            {/* AI Accent Glow (Deep Purple/Indigo) */}
            <motion.div
                animate={{
                    x: ["-20%", "20%", "-10%", "-20%"],
                    y: ["-10%", "30%", "-20%", "-10%"],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="absolute w-[60vw] h-[60vh] rounded-full blur-[120px] bg-ai-accent/30 pointer-events-none top-[10%] left-[10%]"
            />

            {/* Tech Accent Glow (Cyan) */}
            <motion.div
                animate={{
                    x: ["10%", "-30%", "20%", "10%"],
                    y: ["20%", "-10%", "40%", "20%"],
                    scale: [1.1, 0.9, 1.2, 1.1],
                }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="absolute w-[50vw] h-[50vh] rounded-full blur-[100px] bg-accent/20 pointer-events-none bottom-[10%] right-[10%]"
            />
        </div>
    );
}
