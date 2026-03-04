"use client";

import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { Card } from "../ui/Card";
import { profileData } from "@/src/data/profile";
import { motion } from "framer-motion";

export function Education() {
    const higherEducation = profileData.education.find((item) => item.level === "higher");
    const previousEducation = profileData.education.filter((item) => item.level !== "higher");

    return (
        <Section id="education">
            <Container>
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{profileData.ui.sections.education}</h2>
                    <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {higherEducation && (
                        <Card interactive className="border border-accent/20">
                            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
                                {profileData.ui.educationLevels.higher}
                            </p>
                            <h3 className="text-xl md:text-2xl font-semibold mb-2">
                                {higherEducation.title}
                            </h3>
                            <p className="text-foreground/80 mb-1">{higherEducation.institution}</p>
                            <p className="text-sm text-foreground/60 mb-1">{higherEducation.period}</p>
                            {higherEducation.location && (
                                <p className="text-sm text-foreground/50">{higherEducation.location}</p>
                            )}
                        </Card>
                    )}

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{
                            hidden: {},
                            show: { transition: { staggerChildren: 0.1 } },
                        }}
                        className="space-y-3"
                    >
                        {previousEducation.map((education) => (
                            <motion.div
                                key={education.id}
                                variants={{
                                    hidden: { opacity: 0, y: 14 },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                                }}
                            >
                                <details className="group rounded-xl border border-border/70 bg-white/[0.02] px-4 py-3 transition-colors hover:border-accent/25">
                                    <summary className="list-none cursor-pointer select-none">
                                        <div className="flex items-center justify-between gap-4">
                                            <div>
                                                <p className="text-xs uppercase tracking-[0.2em] text-foreground/55 mb-1">
                                                    {education.level === "secondary"
                                                        ? profileData.ui.educationLevels.secondary
                                                        : profileData.ui.educationLevels.primary}
                                                </p>
                                                <p className="text-sm font-semibold text-foreground/90">{education.title}</p>
                                            </div>
                                            <span className="text-xs text-foreground/50 transition-transform group-open:rotate-180">
                                                ▼
                                            </span>
                                        </div>
                                    </summary>

                                    <div className="mt-3 pt-3 border-t border-border/60">
                                        <p className="text-sm text-foreground/70">{education.institution}</p>
                                        <p className="text-sm text-foreground/60 mt-1">{education.period}</p>
                                        {education.location && (
                                            <p className="text-sm text-foreground/50 mt-1">{education.location}</p>
                                        )}
                                    </div>
                                </details>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
