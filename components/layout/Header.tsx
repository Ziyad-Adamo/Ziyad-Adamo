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
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Open menu"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-navigation"
                        >
                            <Menu size={18} />
                        </Button>

                        <AnimatePresence>
                            {isMenuOpen && (
                                <motion.div
                                    id="mobile-navigation"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-2xl flex flex-col"
                                >
                                    <div className="flex justify-end p-5 pt-8">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => setIsMenuOpen(false)}
                                            aria-label="Close menu"
                                            className="mr-1"
                                        >
                                            <X size={24} />
                                        </Button>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center items-center pb-24 overflow-y-auto">
                                        <nav className="flex flex-col gap-7 items-center text-center">
                                            {navLinks.map((link: NavItem, i: number) => (
                                                <motion.div
                                                    key={link.label}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                                                >
                                                    <Link
                                                        href={link.href}
                                                        onClick={() => handleNavClick(link.href)}
                                                        className={cn(
                                                            "text-2xl sm:text-3xl font-semibold tracking-tight transition-colors relative",
                                                            activeSection === link.href.replace("#", "")
                                                                ? "text-accent"
                                                                : "text-foreground/90 hover:text-accent"
                                                        )}
                                                    >
                                                        {link.label}
                                                        {activeSection === link.href.replace("#", "") && (
                                                            <motion.span
                                                                layoutId="activeMobileSection"
                                                                className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] w-8 rounded-full bg-accent"
                                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                            />
                                                        )}
                                                    </Link>
                                                </motion.div>
                                            ))}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 + navLinks.length * 0.04, duration: 0.4 }}
                                                className="mt-8"
                                            >
                                                <a
                                                    href="/cv-ziyad-adamo.pdf"
                                                    download
                                                    className="inline-flex items-center justify-center rounded-full border border-accent/40 bg-accent/10 px-8 py-3.5 text-lg font-medium text-accent hover:bg-accent/20 transition-all shadow-[0_0_15px_rgba(0,240,255,0.1)]"
                                                >
                                                    {t.ui.heroSecondaryCta}
                                                </a>
                                            </motion.div>
                                        </nav>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </header>
    );
}
