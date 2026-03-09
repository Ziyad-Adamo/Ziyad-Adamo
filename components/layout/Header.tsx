"use client";

import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";
import { NavItem } from "@/src/data/profile";
import { ArtisticLogo } from "../ui/ArtisticLogo";
import { ThemeToggle } from "../ui/ThemeToggle";
import { LanguageToggle } from "../ui/LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

export function Header() {
    const { t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Use translation object for nav
    const navLinks = useMemo(() => t.nav, [t]);
    const observedSections = useMemo(
        () => ["home", ...navLinks.map((link: NavItem) => link.href.replace("#", ""))],
        [navLinks]
    );

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            if (window.scrollY < 80) {
                setActiveSection("home");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sectionElements = observedSections
            .map((id) => document.getElementById(id))
            .filter((element): element is HTMLElement => Boolean(element));

        if (!sectionElements.length) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) => b.intersectionRatio - a.intersectionRatio
                    )[0];

                if (visibleEntry?.target?.id) {
                    setActiveSection(visibleEntry.target.id);
                }
            },
            {
                rootMargin: "-30% 0px -70% 0px",
                threshold: [0, 0.2, 0.5, 0.8],
            }
        );

        sectionElements.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [observedSections]);

    useEffect(() => {
        if (!isMenuOpen) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const handleNavClick = (href: string) => {
        setActiveSection(href.replace("#", ""));
        setIsMenuOpen(false);
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-sm"
                    : "bg-transparent py-5 pt-8"
            )}
        >
            {/* Scroll Progress Line */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent/30 origin-left"
                style={{ scaleX }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isScrolled ? 1 : 0 }}
            />
            <Container>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={() => handleNavClick("#home")}
                        aria-label="Home"
                    >
                        <ArtisticLogo />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link: NavItem) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={cn(
                                    "relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                                    activeSection === link.href.replace("#", "")
                                        ? "text-accent bg-foreground/[0.04]"
                                        : "text-foreground/80 hover:text-accent hover:bg-foreground/5"
                                )}
                            >
                                {link.label}
                                {activeSection === link.href.replace("#", "") && (
                                    <motion.span
                                        layoutId="activeSection"
                                        className="absolute left-3 right-3 -bottom-1 h-[2px] rounded-full bg-accent"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                        <div className="flex items-center gap-4 pl-4 border-l border-foreground/10">
                            <ThemeToggle />
                            <LanguageToggle />
                            <Button variant="ghost" size="sm" asChild>
                                <a href="/cv-ziyad-adamo.pdf" download>
                                    {t.ui.heroSecondaryCta}
                                </a>
                            </Button>
                        </div>
                    </nav>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center gap-3 relative">
                        <ThemeToggle />
                        <LanguageToggle />
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsMenuOpen((previous) => !previous)}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-navigation"
                        >
                            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                        </Button>

                        <AnimatePresence>
                            {isMenuOpen && (
                                <>
                                    <motion.button
                                        type="button"
                                        aria-label="Close mobile menu"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="fixed inset-0 z-[60] bg-background/55 backdrop-blur-[2px]"
                                    />
                                    <motion.div
                                        id="mobile-navigation"
                                        initial={{ opacity: 0, y: -14, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -14, scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                        className="fixed inset-x-4 top-24 z-[70] max-h-[calc(100dvh-7.5rem)] overflow-y-auto rounded-2xl border border-border/70 glass p-4 shadow-2xl"
                                    >
                                        <nav className="flex flex-col gap-2">
                                            {navLinks.map((link: NavItem) => (
                                                <Link
                                                    key={link.label}
                                                    href={link.href}
                                                    onClick={() => handleNavClick(link.href)}
                                                    className={cn(
                                                        "rounded-lg px-3 py-2 text-sm transition-colors relative",
                                                        activeSection === link.href.replace("#", "")
                                                            ? "bg-foreground/[0.06] text-accent font-medium leading-[1.2]"
                                                            : "text-foreground/80 hover:bg-foreground/5 hover:text-accent"
                                                    )}
                                                >
                                                    {link.label}
                                                    {activeSection === link.href.replace("#", "") && (
                                                        <motion.span
                                                            layoutId="activeMobileSection"
                                                            className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent rounded-r-full"
                                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                        />
                                                    )}
                                                </Link>
                                            ))}
                                            <a
                                                href="/cv-ziyad-adamo.pdf"
                                                download
                                                className="mt-4 rounded-lg border border-accent/20 bg-accent/5 px-3 py-2 text-sm font-medium text-accent hover:bg-accent/10 transition-colors text-center"
                                            >
                                                {t.ui.heroSecondaryCta}
                                            </a>
                                        </nav>
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </header>
    );
}
