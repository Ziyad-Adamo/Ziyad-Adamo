"use client";

import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Mail, ArrowRight, Linkedin, Copy, Check } from "lucide-react";
import { useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { BackgroundLogo } from "../ui/BackgroundLogo";

export function Contact() {
    const { t } = useLanguage();
    const [isCopied, setIsCopied] = useState(false);
    const emailAddress = t.personal.email;

    const linkIcons = useMemo(
        () => ({
            Email: Mail,
            LinkedIn: Linkedin,
        }),
        []
    );

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(emailAddress);
            setIsCopied(true);
            window.setTimeout(() => setIsCopied(false), 1600);
        } catch {
            setIsCopied(false);
        }
    };

    return (
        <Section id="contact" className="relative overflow-hidden">
            <BackgroundLogo />
            <Container className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{t.ui.sections.contact}</h2>
                    <p className="text-lg text-foreground/70 mb-10 leading-relaxed max-w-2xl mx-auto">
                        {t.contact.message}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {t.contact.links.map((link: any) => {
                            const Icon = linkIcons[link.label as keyof typeof linkIcons] ?? ArrowRight;

                            return (
                                <Button key={link.label} size="lg" className="group" asChild>
                                    <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                                        <Icon className="mr-2 w-5 h-5" />
                                        {link.label}
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </Button>
                            );
                        })}

                        <Button variant="secondary" size="lg" onClick={copyEmail}>
                            {isCopied ? (
                                <>
                                    <Check className="mr-2 w-4 h-4 text-green-400" />
                                    {t.ui.copied}
                                </>
                            ) : (
                                <>
                                    <Copy className="mr-2 w-4 h-4" />
                                    {t.ui.copyEmail}
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
