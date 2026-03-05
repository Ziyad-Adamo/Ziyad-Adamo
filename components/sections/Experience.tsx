"use client";

import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { Timeline } from "../ui/Timeline";
import { useLanguage } from "../context/LanguageContext";

export function Experience() {
    const { t } = useLanguage();
    const timelineItems = t.experience.map((exp: any) => ({
        title: exp.role,
        subtitle: exp.company,
        date: exp.period,
        location: exp.location,
        responsibilities: exp.responsibilities,
        keyOutcomes: exp.keyOutcomes,
    }));

    return (
        <Section id="experience" className="bg-foreground/[0.02]">
            <Container>
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.ui.sections.experience}</h2>
                    <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Timeline items={timelineItems} />
                </div>
            </Container>
        </Section>
    );
}
