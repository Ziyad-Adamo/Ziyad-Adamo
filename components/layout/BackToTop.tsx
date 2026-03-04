"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsVisible(window.scrollY > 420);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.22 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-5 right-5 z-40 rounded-full border border-accent/35 bg-background/85 p-3 text-accent backdrop-blur-md hover:-translate-y-1 hover:bg-accent/12 transition-all duration-300"
                    aria-label="Back to top"
                >
                    <ChevronUp size={18} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
