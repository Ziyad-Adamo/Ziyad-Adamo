"use client";

import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { BrainCircuit, GitBranch, TerminalSquare, ShieldCheck } from "lucide-react";

const icons = [
    <BrainCircuit key="brain" className="text-accent w-6 h-6" />,
    <GitBranch key="branch" className="text-accent w-6 h-6" />,
    <TerminalSquare key="terminal" className="text-accent w-6 h-6" />,
    <ShieldCheck key="shield" className="text-accent w-6 h-6" />
];

export function Process() {
    const { t } = useLanguage();
    const { process } = t;

    if (!process) return null;

    return (
        <Section id="process" className="bg-foreground/[0.02]">
            <Container>
                <div className="max-w-3xl mb-16 mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.ui.sections.process}</h2>
                    <div className="w-20 h-1 bg-accent rounded-full mb-6 mx-auto"></div>
                    <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                        {process.description}
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-border z-0">
                        <motion.div
                            className="absolute top-0 left-0 bottom-0 bg-accent/40"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {process.steps.map((step: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-24 h-24 rounded-2xl bg-background flex items-center justify-center mb-6 relative border border-border group-hover:border-accent/50 transition-colors shadow-lg shadow-background/50 z-10">
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-xs font-mono font-bold text-foreground/50 z-20">
                                        0{index + 1}
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="relative z-20"
                                    >
                                        {icons[index]}
                                    </motion.div>
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                                <h4 className="text-sm font-semibold text-accent mb-3 tracking-wide uppercase">{step.subtitle}</h4>
                                <p className="text-foreground/60 text-sm leading-relaxed px-2">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
