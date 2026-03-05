"use client";

import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { MouseGlow } from "../ui/MouseGlow";
import { NetworkPulse } from "../ui/NetworkPulse";

export function Hero() {
    const { t } = useLanguage();
    const { personal } = t;

    return (
        <Section className="min-h-screen flex items-center justify-center pt-32 pb-20 relative overflow-hidden" id="home">
            <MouseGlow />
            <NetworkPulse />
            {/* Background animated gradient (Layer C) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,240,255,0.06),transparent_60%)] animate-pulse-slow pointer-events-none" />

            {/* Background glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-20 pointer-events-none" />
            <div className="absolute top-24 right-[-120px] w-80 h-80 bg-accent/15 rounded-full blur-[100px] pointer-events-none" />

            <Container className="relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-accent/30 text-accent text-sm font-medium"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    {personal.status}
                </motion.div>

                <motion.p
                    className="text-sm md:text-base uppercase tracking-[0.2em] text-foreground/70 mb-5 pl-1"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
                >
                    {personal.fullName}
                </motion.p>

                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-accent/80 to-accent">
                        {personal.headline}
                    </span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-foreground/65 max-w-3xl mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                >
                    {personal.subheadline}
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                    <Button size="lg" className="group" asChild>
                        <a href="#experience">
                            {t.ui.heroPrimaryCta}
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>
                    <Button variant="secondary" size="lg" asChild>
                        <a href="/cv-ziyad-adamo.pdf" download>
                            <Download className="mr-2 w-4 h-4" />
                            {t.ui.heroSecondaryCta}
                        </a>
                    </Button>
                </motion.div>

                <motion.div
                    className="mt-10 flex flex-wrap justify-center gap-3"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.4, ease: "easeOut" }}
                >
                    {personal.quickFacts.map((fact) => (
                        <div
                            key={fact.label}
                            className="glass rounded-full px-4 py-2 text-sm text-foreground/80 border border-foreground/10 hover:border-accent/35 hover:text-accent transition-colors"
                        >
                            <span className="text-foreground/60">{fact.label}:</span>{" "}
                            <span className="font-medium">{fact.value}</span>
                        </div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}
