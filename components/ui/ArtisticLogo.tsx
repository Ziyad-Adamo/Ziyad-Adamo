"use client";

import { motion } from "framer-motion";

export function ArtisticLogo() {
    return (
        <div className="relative group flex items-center justify-center w-10 h-10 cursor-pointer">
            <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-foreground transition-colors duration-300"
            >
                {/* Abstract Background Frame */}
                <motion.path
                    d="M10 20 L20 10 L80 10 L90 20 L90 80 L80 90 L20 90 L10 80 Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeOpacity="0.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* The 'Z' */}
                <motion.path
                    d="M25 35 L50 35 L25 65 L50 65"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-accent transition-colors duration-500"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                />

                {/* The 'A' (Positioned more to the right, avoiding overlap) */}
                <motion.path
                    d="M55 65 L70 35 L85 65 M60 55 L80 55"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-accent"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                />

                {/* Cyber Dot */}
                <motion.circle
                    cx="25"
                    cy="75"
                    r="4"
                    fill="currentColor"
                    className="fill-accent group-hover:animate-pulse"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.8, type: "spring" }}
                />
            </svg>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
        </div>
    );
}
