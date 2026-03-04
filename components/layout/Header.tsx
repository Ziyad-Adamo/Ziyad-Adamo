"use client";

import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import { Container } from "./Container";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";
import { profileData } from "@/src/data/profile";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = useMemo(() => profileData.nav, []);
    const observedSections = useMemo(
        () => ["home", ...navLinks.map((link) => link.href.replace("#", ""))],
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

    const handleNavClick = (href: string) => {
        setActiveSection(href.replace("#", ""));
        setIsMenuOpen(false);
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border py-4 shadow-sm"
                    : "bg-transparent py-6"
            )}
        >
            <Container>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl font-bold tracking-tighter text-foreground group"
                        onClick={() => handleNavClick("#home")}
                    >
                        ZA<span className="text-accent group-hover:animate-pulse">.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={cn(
                                    "relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                                    activeSection === link.href.replace("#", "")
                                        ? "text-accent bg-accent/10"
                                        : "text-foreground/80 hover:text-accent hover:bg-white/5"
                                )}
                            >
                                {link.label}
                                <span
                                    className={cn(
                                        "absolute left-3 right-3 -bottom-1 h-px bg-accent transition-opacity",
                                        activeSection === link.href.replace("#", "")
                                            ? "opacity-100"
                                            : "opacity-0"
                                    )}
                                />
                            </Link>
                        ))}
                        <Button variant="ghost" size="sm" asChild>
                            <a href="/cv-ziyad-adamo.pdf" download>
                                {profileData.ui.heroSecondaryCta}
                            </a>
                        </Button>
                    </nav>

                    <div className="md:hidden relative">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsMenuOpen((previous) => !previous)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                        </Button>

                        {isMenuOpen && (
                            <div className="absolute right-0 mt-3 w-64 glass rounded-xl p-4 border border-border/70 shadow-xl">
                                <nav className="flex flex-col gap-2">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            onClick={() => handleNavClick(link.href)}
                                            className={cn(
                                                "rounded-lg px-3 py-2 text-sm transition-colors",
                                                activeSection === link.href.replace("#", "")
                                                    ? "bg-accent/10 text-accent"
                                                    : "text-foreground/80 hover:bg-white/5 hover:text-accent"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <a
                                        href="/cv-ziyad-adamo.pdf"
                                        download
                                        className="mt-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-sm font-medium text-accent hover:bg-accent/20 transition-colors"
                                    >
                                        {profileData.ui.heroSecondaryCta}
                                    </a>
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </header>
    );
}
