"use client";

import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { Card } from "../ui/Card";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { profileData } from "@/src/data/profile";

export function Certificates() {
    return (
        <Section id="certifications" className="bg-foreground/[0.02]">
            <Container>
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{profileData.ui.sections.certifications}</h2>
                    <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                    {profileData.coursesAndCertifications.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                            }}
                        >
                            <Card interactive className="h-full">
                                <div className="flex items-start justify-between gap-3 mb-4">
                                    <div className="p-3 rounded-full bg-accent/10 text-accent">
                                        <Award size={18} />
                                    </div>
                                    <span className="text-xs rounded-full border border-accent/25 bg-accent/5 px-3 py-1 text-accent">
                                        {item.type}
                                    </span>
                                </div>
                                <h3 className="font-semibold text-lg leading-tight">{item.name}</h3>
                                <p className="text-sm text-foreground/60 mt-2">{item.organization}</p>
                                <p className="text-sm text-foreground/50 mt-1">{item.date}</p>
                                {item.focus && (
                                    <p className="text-sm text-foreground/70 mt-4 leading-relaxed">{item.focus}</p>
                                )}
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}
