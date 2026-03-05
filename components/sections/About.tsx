"use client";

import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const containerVariants = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export function About() {
    const { t } = useLanguage();
    const { about } = t;

    return (
        <Section id="about">
            <Container>
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.ui.sections.about}</h2>
                    <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                        {about.summary}
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {about.highlights.map((highlight) => (
                        <motion.div key={highlight.title} variants={itemVariants}>
                            <Card interactive className="flex flex-col gap-4 h-full">
                                <h3 className="text-xl font-semibold text-accent">{highlight.title}</h3>
                                <p className="text-foreground/60 text-sm leading-relaxed">
                                    {highlight.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}
