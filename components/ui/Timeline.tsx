"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { profileData } from "@/src/data/profile";

interface TimelineItemProps {
    title: string;
    subtitle: string;
    date: string;
    description?: string;
    location?: string;
    responsibilities?: string[];
    keyOutcomes?: string[];
    skills?: string[];
}

export function TimelineItem({
    title,
    subtitle,
    date,
    description,
    location,
    responsibilities,
    keyOutcomes,
    skills,
}: TimelineItemProps) {
    return (
        <div className="relative pl-8 md:pl-0">
            {/* Desktop Timeline Line */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border -translate-x-1/2" />

            {/* Mobile Timeline Line */}
            <div className="md:hidden absolute left-[15px] top-0 bottom-0 w-px bg-border" />

            {/* Node indicator desktop */}
            <div className="hidden md:block absolute left-[50%] top-6 w-3 h-3 rounded-full bg-accent -translate-x-1/2 ring-4 ring-background" />
            {/* Node indicator mobile */}
            <div className="md:hidden absolute left-[10px] top-6 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />

            <div className="md:grid md:grid-cols-2 gap-8 items-center pb-12">
                {/* Date for desktop, placed strategically */}
                <div className="hidden md:block text-right pr-12 text-sm text-foreground/60 font-mono">
                    {date}
                </div>

                {/* Content Card */}
                <div className="md:pl-12 w-full">
                    <Card interactive className="hover:border-accent/40 transition-colors">
                        <div className="md:hidden mb-2 text-sm text-accent font-mono">
                            {date}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>
                        <div className="text-foreground/80 mb-4 font-medium">{subtitle}</div>
                        {location && (
                            <div className="mb-4 inline-flex items-center gap-2 text-xs text-foreground/60">
                                <MapPin size={14} className="text-accent/85" />
                                {location}
                            </div>
                        )}

                        {description && (
                            <p className="text-foreground/60 text-sm leading-relaxed mb-5">
                                {description}
                            </p>
                        )}

                        {responsibilities && responsibilities.length > 0 && (
                            <div className="mb-5">
                                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45 mb-3">
                                    {profileData.ui.responsibilitiesTitle}
                                </h4>
                                <ul className="space-y-2">
                                    {responsibilities.map((responsibility, index) => (
                                        <li
                                            key={`${responsibility}-${index}`}
                                            className="text-sm text-foreground/70 leading-relaxed flex gap-2"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                                            <span>{responsibility}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {keyOutcomes && keyOutcomes.length > 0 && (
                            <div className="mb-6 rounded-xl border border-accent/25 bg-accent/5 p-4">
                                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                                    {profileData.ui.keyOutcomesTitle}
                                </h4>
                                <ul className="space-y-2">
                                    {keyOutcomes.map((outcome, index) => (
                                        <li
                                            key={`${outcome}-${index}`}
                                            className="text-sm text-foreground/80 leading-relaxed flex gap-2"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                            <span>{outcome}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {skills && skills.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <Badge key={index}>{skill}</Badge>
                                ))}
                            </div>
                        )}
                    </Card>
                </div>
            </div>
        </div>
    );
}

interface TimelineProps {
    items: TimelineItemProps[];
    className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
    return (
        <motion.div
            className={cn("relative py-8", className)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.14,
                    },
                },
            }}
        >
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    variants={{
                        hidden: { opacity: 0, y: 22 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                    }}
                >
                    <TimelineItem {...item} />
                </motion.div>
            ))}
        </motion.div>
    );
}
