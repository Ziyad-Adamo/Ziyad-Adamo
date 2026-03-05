"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9 opacity-0" />;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors focus:outline-none"
            aria-label="Toggle theme"
        >
            <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                <motion.div
                    initial={false}
                    animate={{
                        y: theme === "dark" ? 0 : 24,
                        opacity: theme === "dark" ? 1 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute"
                >
                    <Moon size={16} className="text-foreground/80 hover:text-accent transition-colors" />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{
                        y: theme === "light" ? 0 : -24,
                        opacity: theme === "light" ? 1 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute"
                >
                    <Sun size={16} className="text-foreground/80 hover:text-accent transition-colors" />
                </motion.div>
            </div>
        </button>
    );
}
