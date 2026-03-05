"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionTemplate } from "framer-motion";

export function MouseGlow() {
    const [isVisible, setIsVisible] = useState(false);

    // Smooth trailing springs for the mouse position
    const springX = useSpring(0, { stiffness: 100, damping: 20 });
    const springY = useSpring(0, { stiffness: 100, damping: 20 });

    useEffect(() => {
        // Only show glow on devices that support hover (rule out touch devices)
        const isHoverSupported = window.matchMedia("(hover: hover)").matches;
        // Check for reduced motion preference
        const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!isHoverSupported || isReducedMotion) return;

        const updateMousePosition = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            springX.set(e.clientX);
            springY.set(e.clientY);
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("pointermove", updateMousePosition);
        document.documentElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("pointermove", updateMousePosition);
            document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [isVisible, springX, springY]);

    const background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(0, 240, 255, 0.06), rgba(139, 92, 246, 0.04) 40%, transparent 80%)`;

    if (!isVisible) return null;

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
            style={{ background }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        />
    );
}
