"use client";

import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { Badge } from "../ui/Badge";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useFilter } from "../context/FilterContext";
import { X } from "lucide-react";

export function Skills() {
    const { t } = useLanguage();
    const { activeFilter, setActiveFilter } = useFilter();
    return (
        <Section id="skills" className="bg-foreground/[0.02]">
            <Container>
                <div className="max-w-3xl mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.ui.sections.skills}</h2>
                    <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
                </div>

                <div className="mb-10 flex items-center justify-between">
                    <p className="text-sm text-foreground/50">{t.ui.filterHint}</p>
                    <AnimatePresence>
                        {activeFilter && (
                            <motion.button
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                onClick={() => setActiveFilter(null)}
                                className="flex items-center gap-2 text-sm font-medium text-accent hover:text-background transition-colors bg-accent/10 hover:bg-accent/80 px-3 py-1.5 rounded-full"
                            >
                                <X size={14} /> {t.ui.clearFilter}
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                    {t.skills.map((skillGroup: any) => (
                        <motion.div
                            key={skillGroup.category}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                            }}
                            className="flex flex-col gap-5"
                        >
                            <h3 className="text-xl font-semibold text-foreground/90 border-b border-border pb-2">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item: string) => {
                                    const isActive = activeFilter === item;
                                    return (
                                        <button
                                            key={item}
                                            onClick={() => setActiveFilter(isActive ? null : item)}
                                            className="focus:outline-none"
                                        >
                                            <Badge
                                                className={`text-sm px-3 py-1 border transition-all duration-300 cursor-pointer ${isActive
                                                    ? "bg-accent text-background border-accent shadow-[0_0_10px_rgba(0,240,255,0.4)]"
                                                    : "bg-foreground/5 border-foreground/10 text-foreground/80 hover:bg-accent/10 hover:text-accent hover:border-accent/25"
                                                    }`}
                                            >
                                                {item}
                                            </Badge>
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}
