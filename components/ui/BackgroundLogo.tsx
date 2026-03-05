"use client";

import { motion } from "framer-motion";

export function BackgroundLogo() {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.05] blur-[2px] flex items-center justify-center">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-foreground transition-colors duration-300"
            >
                {/* Abstract Background Frame */}
                <motion.path
                    d="M10 20 L20 10 L80 10 L90 20 L90 80 L80 90 L20 90 L10 80 Z"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeOpacity="0.2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* The 'Z' */}
                <motion.path
                    d="M25 35 L50 35 L25 65 L50 65"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-accent"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                />

                {/* The 'A' */}
                <motion.path
                    d="M55 65 L70 35 L85 65 M60 55 L80 55"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-accent"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                />

                {/* Cyber Dot */}
                <motion.circle
                    cx="25"
                    cy="75"
                    r="4"
                    fill="currentColor"
                    className="fill-accent"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 1, delay: 2, type: "spring" }}
                />
            </svg>
        </div>
    );
}
