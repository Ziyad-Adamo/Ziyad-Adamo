"use client";

import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { Card } from "../ui/Card";
import { Globe } from "lucide-react";
import { Badge } from "../ui/Badge";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export function Languages() {
    const { t } = useLanguage();
    return (
        <Section id="languages" className="bg-foreground/[0.02]">
            <Container>
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.ui.sections.languages}</h2>
                    <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {t.languages.map((language: string) => (
                            <motion.div
                                key={language}
                                variants={{
                                    hidden: { opacity: 0, y: 16 },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                                }}
                            >
                                <Card interactive className="flex items-center gap-4 h-full">
                                    <div className="p-3 rounded-full bg-accent/10 text-accent">
                                        <Globe size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{language}</h3>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.35 }}
                    >
                        <Card className="h-full">
                            <h3 className="text-xl font-semibold mb-5">{t.ui.qualitiesTitle}</h3>
                            <div className="flex flex-wrap gap-2">
                                {t.qualities.map((quality: string) => (
                                    <Badge
                                        key={quality}
                                        className="px-3 py-1.5 text-sm bg-foreground/5 text-foreground/80 border-foreground/10 hover:bg-accent/10 hover:text-accent hover:border-accent/25 transition-colors"
                                    >
                                        {quality}
                                    </Badge>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
