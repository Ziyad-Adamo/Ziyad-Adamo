"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

import { profileDictionary } from "../data/dictionary";

// Utility to convert literal string types to 'string' recursively and handle arrays
type DeepStringify<T> = T extends string
    ? string
    : T extends Array<infer U>
    ? Array<DeepStringify<U>>
    : T extends object
    ? { [K in keyof T]: DeepStringify<T[K]> }
    : T;

type Dictionary = DeepStringify<typeof profileDictionary.en>;

type Language = "en" | "pt";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Hydration matching
        setMounted(true);
        const storedLang = localStorage.getItem("za-portfolio-lang") as Language;
        if (storedLang === "en" || storedLang === "pt") {
            setLanguage(storedLang);
        } else {
            // Check browser language
            if (navigator.language.startsWith("pt")) {
                setLanguage("pt");
            }
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("za-portfolio-lang", lang);
    };

    if (!mounted) {
        // Prevent hydration mismatch by rendering default english silently first
        return (
            <LanguageContext.Provider value={{ language: "en", setLanguage: handleSetLanguage, t: profileDictionary["en"] }}>
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: profileDictionary[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
