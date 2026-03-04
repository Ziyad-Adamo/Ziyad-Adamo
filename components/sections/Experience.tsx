"use client";

import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { Timeline } from "../ui/Timeline";
import { profileData } from "@/src/data/profile";

export function Experience() {
    const timelineItems = profileData.experience.map((exp) => ({
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
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{profileData.ui.sections.experience}</h2>
                    <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
                    <p className="text-lg text-foreground/70">
                        Hands-on internships in telecommunications broadcasting and automotive electronic diagnostics.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Timeline items={timelineItems} />
                </div>
            </Container>
        </Section>
    );
}
