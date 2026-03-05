"use client";

import { Container } from "./Container";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ArtisticLogo } from "../ui/ArtisticLogo";

export function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();
    const emailLink = `mailto:${t.personal.email}`;

    return (
        <footer className="bg-background border-t border-border mt-20">
            <Container className="py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link
                            href="/"
                            onClick={() => window.scrollTo(0, 0)}
                            aria-label="Home"
                            className="inline-block mb-4"
                        >
                            <ArtisticLogo />
                        </Link>
                        <p className="text-foreground/60 max-w-sm mb-6">
                            {t.personal.headline} focused on practical engineering outcomes in IoT, telecommunications, and automation.
                        </p>
                        <div className="flex gap-4">
                            <a href={t.personal.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:text-accent hover:border-accent/50 transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href={emailLink} className="p-2 glass rounded-full hover:text-accent hover:border-accent/50 transition-colors">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t.ui.quickLinks}</h4>
                        <ul className="space-y-2">
                            <li><Link href="#about" className="text-foreground/60 hover:text-accent transition-colors">{t.ui.footerLinks.about}</Link></li>
                            <li><Link href="#experience" className="text-foreground/60 hover:text-accent transition-colors">{t.ui.footerLinks.experience}</Link></li>
                            <li><Link href="#skills" className="text-foreground/60 hover:text-accent transition-colors">{t.ui.footerLinks.skills}</Link></li>
                            <li><Link href="/cv-ziyad-adamo.pdf" className="text-foreground/60 hover:text-accent transition-colors">{t.ui.footerLinks.downloadCv}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/40 font-mono">
                    <p>&copy; {currentYear} {t.personal.fullName}. All rights reserved.</p>
                    <p>{t.ui.builtWith.replace("{heart}", "❤️")}</p>
                </div>
            </Container>
        </footer>
    );
}
