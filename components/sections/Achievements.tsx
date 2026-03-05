"use client";

import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { Card } from "../ui/Card";
import { Trophy, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useFilter } from "../context/FilterContext";
import { cn } from "@/lib/utils";

export function Achievements() {
    const { t } = useLanguage();
    const { activeFilter } = useFilter();
    return (
        <Section id="achievements">
            <Container>
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.ui.sections.achievements}</h2>
                    <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {t.achievements.map((item: any) => {
                        // Filter matching logic
                        const itemString = JSON.stringify(item).toLowerCase();
                        const isMatch = activeFilter ? itemString.includes(activeFilter.toLowerCase()) : true;
                        const isDimmed = activeFilter && !isMatch;

                        return (
                            <motion.div
                                key={item.id}
                                variants={{
                                    hidden: { opacity: 0, y: 18 },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                                }}
                                className={cn("transition-opacity duration-500", isDimmed ? "opacity-30 grayscale-[50%]" : "opacity-100")}
                            >
                                <Card interactive className="flex gap-4 items-start h-full group overflow-hidden">
                                    <div className="p-3 rounded-full bg-yellow-500/10 text-yellow-500 shrink-0">
                                        <Trophy size={20} />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>

                                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                                            <div className="overflow-hidden">
                                                <p className="text-sm text-foreground/70 leading-relaxed max-w-sm">
                                                    {item.description}
                                                </p>
                                                {item.workflow && (
                                                    <p className="mt-2 text-xs font-mono text-accent/80 border-t border-accent/10 pt-2 inline-block">
                                                        {item.workflow}
                                                    </p>
                                                )}
                                                <div className="mt-3 text-xs text-accent font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                    {t.ui.viewDetails} <ArrowRight size={12} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Container>
        </Section>
    );
}
