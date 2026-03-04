"use client";

import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { Badge } from "../ui/Badge";
import { motion } from "framer-motion";
import { profileData } from "@/src/data/profile";

export function Skills() {
    return (
        <Section id="skills" className="bg-foreground/[0.02]">
            <Container>
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{profileData.ui.sections.skills}</h2>
                    <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
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
                    {profileData.skills.map((skillGroup) => (
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
                                {skillGroup.items.map((item) => (
                                    <Badge key={item} className="text-sm px-3 py-1 bg-white/5 border-white/10 text-foreground/80 hover:bg-accent/10 hover:text-accent hover:border-accent/25 transition-colors cursor-default">
                                        {item}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}
