"use client";

import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { Card } from "../ui/Card";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { profileData } from "@/src/data/profile";

export function Achievements() {
    return (
        <Section id="achievements">
            <Container>
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{profileData.ui.sections.achievements}</h2>
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
                    {profileData.achievements.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={{
                                hidden: { opacity: 0, y: 18 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                            }}
                        >
                            <Card interactive className="flex gap-4 items-start h-full">
                                <div className="p-3 rounded-full bg-yellow-500/10 text-yellow-500">
                                    <Trophy size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                    <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}
