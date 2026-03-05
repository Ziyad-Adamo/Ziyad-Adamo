"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function NetworkPulse() {
    const [isReducedMotion, setIsReducedMotion] = useState(false);

    useEffect(() => {
        setIsReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }, []);

    // Simple static fallback for reduced motion
    if (isReducedMotion) {
        return (
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0 flex items-center justify-center">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20%" cy="30%" r="2" fill="var(--color-accent)" />
                    <circle cx="80%" cy="40%" r="2" fill="var(--color-accent)" />
                    <circle cx="40%" cy="70%" r="2" fill="var(--color-accent)" />
                    <path d="M 20% 30% L 80% 40% L 40% 70% Z" stroke="var(--color-accent)" strokeWidth="0.5" fill="none" opacity="0.2" />
                </svg>
            </div>
        );
    }

    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute w-full h-full">
                <defs>
                    <radialGradient id="nodeGlow">
                        <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="1" />
                        <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                    </radialGradient>
                </defs>
                {/* Lines */}
                <motion.g stroke="var(--color-accent)" strokeWidth="0.5" strokeOpacity="0.2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }}>
                    <path d="M 15% 25% L 40% 15% L 75% 30% L 85% 65% L 55% 85% L 20% 75% Z" fill="none" />
                    <path d="M 40% 15% L 55% 45% L 75% 30%" fill="none" />
                    <path d="M 15% 25% L 35% 55% L 20% 75%" fill="none" />
                    <path d="M 35% 55% L 55% 45% L 55% 85%" fill="none" />
                </motion.g>

                {/* Nodes */}
                <motion.g fill="var(--color-accent)">
                    {/* Node 1 */}
                    <motion.circle cx="15%" cy="25%" r="1.5"
                        animate={{ opacity: [0.3, 1, 0.3], r: [1.5, 2.5, 1.5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />

                    {/* Node 2 */}
                    <motion.circle cx="40%" cy="15%" r="2"
                        animate={{ opacity: [0.4, 0.9, 0.4] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} />

                    {/* Node 3 */}
                    <motion.circle cx="75%" cy="30%" r="1.5"
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

                    {/* Node 4 */}
                    <motion.circle cx="85%" cy="65%" r="2"
                        animate={{ opacity: [0.5, 1, 0.5], r: [2, 3, 2] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />

                    {/* Node 5 */}
                    <motion.circle cx="55%" cy="85%" r="1.5"
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />

                    {/* Node 6 */}
                    <motion.circle cx="20%" cy="75%" r="2"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} />

                    {/* Central connecting nodes */}
                    <motion.circle cx="55%" cy="45%" r="2.5"
                        animate={{ opacity: [0.6, 1, 0.6], r: [2.5, 4, 2.5], filter: "drop-shadow(0 0 4px var(--color-accent))" }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />

                    <motion.circle cx="35%" cy="55%" r="1.5"
                        animate={{ opacity: [0.3, 0.9, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
                </motion.g>
            </svg>
        </div>
    );
}
