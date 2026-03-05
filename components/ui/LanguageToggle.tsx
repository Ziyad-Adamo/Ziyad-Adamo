"use client";

import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleLang = (lang: "en" | "pt") => {
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm font-medium text-foreground/80 hover:text-accent focus:outline-none"
                aria-label="Change language"
            >
                <Globe size={14} />
                <span className="uppercase">{language}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-28 glass rounded-xl overflow-hidden border border-border/70 shadow-xl z-50 origin-top-right"
                    >
                        <div className="flex flex-col">
                            <button
                                onClick={() => toggleLang("en")}
                                className={cn(
                                    "px-4 py-2 text-sm text-left transition-colors hover:bg-white/5",
                                    language === "en" ? "text-accent font-medium bg-white/[0.03]" : "text-foreground/80"
                                )}
                            >
                                English
                            </button>
                            <button
                                onClick={() => toggleLang("pt")}
                                className={cn(
                                    "px-4 py-2 text-sm text-left transition-colors hover:bg-white/5",
                                    language === "pt" ? "text-accent font-medium bg-white/[0.03]" : "text-foreground/80"
                                )}
                            >
                                Português
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
