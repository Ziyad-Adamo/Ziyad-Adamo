"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    CheckCircle2,
    ChevronRight,
    Cpu,
    FileCode2,
    Layers3,
    User,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/components/context/LanguageContext";
import type { ProjectItem } from "@/src/data/profile";

interface DiagramCardProps {
    title: string;
    caption: string;
    src: string;
    alt: string;
    className?: string;
}

function DiagramCard({
    title,
    caption,
    src,
    alt,
    className = "aspect-[16/10]",
}: DiagramCardProps) {
    return (
        <figure className="space-y-3">
            <div
                className={`relative w-full overflow-hidden rounded-2xl border border-border/50 bg-background ${className}`}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-4 md:p-6"
                />
            </div>
            <figcaption className="space-y-1">
                <h3 className="text-base font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-foreground/60">{caption}</p>
            </figcaption>
        </figure>
    );
}

interface ProjectContentProps {
    slug: string;
    initialProject: ProjectItem;
}

export function ProjectContent({ slug, initialProject }: ProjectContentProps) {
    const { t, language } = useLanguage();

    // Find localized project based on slug, fallback to initial/English if not found
    const project = t.projects.find((p: ProjectItem) => p.slug === slug) || initialProject;

    return (
        <>
            <nav
                aria-label="Breadcrumb"
                className="sticky top-16 z-40 border-y border-border/40 bg-background/90 backdrop-blur-md"
            >
                <Container>
                    <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-4 text-sm text-foreground/60">
                        <Link
                            href="/#projects"
                            className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                        >
                            <ArrowLeft size={14} />
                            {language === "pt" ? "Voltar aos Projectos" : "Back to Projects"}
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-foreground">{project.title}</span>
                    </div>
                </Container>
            </nav>

            <section className="py-10 lg:py-14" aria-labelledby="project-title">
                <Container>
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                        <article>
                            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                                <CheckCircle2 size={14} />
                                {project.category}
                            </p>
                            <h1
                                id="project-title"
                                className="text-3xl font-bold tracking-tight md:text-5xl"
                            >
                                {project.title}
                            </h1>
                            <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
                                {project.subtitle}
                            </p>

                            {project.role && (
                                <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2.5 text-sm font-medium text-foreground/90 shadow-sm md:text-base">
                                    <User size={18} className="text-accent" />
                                    <span>
                                        <span className="font-semibold text-accent">
                                            {language === "pt" ? "Papel Técnico:" : "Role:"}
                                        </span>{" "}
                                        {project.role}
                                    </span>
                                </div>
                            )}
                            {project.contributionSummary && (
                                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/75">
                                    {project.contributionSummary}
                                </p>
                            )}
                            {project.credibilityPhrase && (
                                <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground/80">
                                    <CheckCircle2 size={16} className="text-accent" />
                                    {project.credibilityPhrase}
                                </p>
                            )}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.badges.map((badge: string) => (
                                    <span
                                        key={badge}
                                        className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-6 inline-flex items-center gap-2 text-xs text-foreground/50 opacity-80 md:text-sm">
                                <Layers3 size={14} className="opacity-70" />
                                <span>{language === "pt" ? "Tipo de Projecto:" : "Project Type:"}</span>
                                <span className="font-medium text-foreground/65">{project.typeLabel}</span>
                            </div>
                        </article>

                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/50 bg-background">
                            <Image
                                src={project.heroImage}
                                alt={`${project.title} circuit simulation`}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            <section
                className="border-y border-border/30 bg-foreground/[0.02] py-14 lg:py-20"
                aria-labelledby="case-study"
            >
                <Container>
                    <div className="mx-auto max-w-5xl space-y-14">
                        <header>
                            <h2 id="case-study" className="text-2xl font-bold md:text-3xl">
                                {language === "pt" ? "Estudo de Caso de Engenharia" : "Engineering Case Study"}
                            </h2>
                        </header>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <article className="rounded-2xl border border-border/50 bg-background p-6 md:col-span-3">
                                <h3 className="text-lg font-semibold">{language === "pt" ? "Resumo" : "Summary"}</h3>
                                <p className="mt-3 leading-relaxed text-foreground/75">
                                    {project.overview}
                                </p>
                            </article>

                            <article className="rounded-2xl border border-border/50 bg-background p-6 md:col-span-3 lg:col-span-1">
                                <h3 className="text-lg font-semibold">{language === "pt" ? "Problema" : "Problem"}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                                    {project.problem}
                                </p>
                            </article>

                            <article className="rounded-2xl border border-border/50 bg-background p-6 md:col-span-3 lg:col-span-2">
                                <h3 className="text-lg font-semibold">{language === "pt" ? "Solução" : "Solution"}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                                    {project.solution}
                                </p>
                            </article>
                        </div>

                        <section aria-labelledby="control-logic" className="space-y-5">
                            <h3
                                id="control-logic"
                                className="inline-flex items-center gap-2 text-xl font-semibold"
                            >
                                <FileCode2 size={18} className="text-accent" />
                                {language === "pt" ? "Implementação Lógica de Controlo" : "Control Logic Implementation"}
                            </h3>
                            <p className="leading-relaxed text-foreground/75">
                                {project.controlLogicImplementation}
                            </p>
                        </section>

                        <section aria-labelledby="diagrams" className="space-y-7">
                            <h3 id="diagrams" className="text-xl font-semibold">
                                {language === "pt" ? "Artefactos de Design do Sistema" : "System Design Artifacts"}
                            </h3>
                            <DiagramCard
                                title={language === "pt" ? "Diagrama de Blocos do Sistema" : "System Block Diagram"}
                                caption={language === "pt" ? "Arquitectura de componentes e fluxo de sinal de alto nível." : "High-level component architecture and signal flow."}
                                src={project.systemArchitectureImage}
                                alt={`${project.title} block diagram`}
                                className="aspect-[16/8]"
                            />
                            <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
                                <DiagramCard
                                    title={language === "pt" ? "Fluxograma de Controlo" : "Control Flowchart"}
                                    caption={language === "pt" ? "Fluxo de decisão para avaliação do estado do sensor e actuador." : "Decision flow for sensor-state evaluation and pump actuation."}
                                    src={project.controlLogicImage}
                                    alt={`${project.title} control flowchart`}
                                    className="aspect-[16/10]"
                                />
                                <DiagramCard
                                    title={language === "pt" ? "Circuito Proteus" : "Proteus Circuit"}
                                    caption={language === "pt" ? "Circuito embutido pronto para simulação com sensores, indicadores e estágio de controlo." : "Simulation-ready embedded circuit with sensors, indicators, and control stage."}
                                    src={project.circuitDesignImage}
                                    alt={`${project.title} Proteus circuit`}
                                    className="aspect-[16/10]"
                                />
                            </div>
                        </section>

                        {project.physicalPrototypeImage && (
                            <section aria-labelledby="physical-prototype" className="space-y-6">
                                <h3 id="physical-prototype" className="text-xl font-semibold">
                                    {language === "pt" ? "Prototipagem Física e Validação Funcional" : "Physical Prototype & Functional Validation"}
                                </h3>
                                <p className="leading-relaxed text-foreground/75">
                                    {language === "pt"
                                        ? "Além da simulação, o projecto também atingiu a fase funcional de prototipagem física. Um protótipo de bancada real foi construído e testado usando recipientes de água, fiação de sensores, electrónica de controlo e execução de código em tempo real. Esta validação prática ajudou a confirmar a lógica de monitorização esperada, actuador da bomba e viabilidade do sistema de baixo custo."
                                        : "Beyond simulation, the project also reached a functional physical prototyping stage. A real bench prototype was assembled and tested using water containers, sensor wiring, control electronics, and live code execution. This practical validation helped confirm the expected monitoring logic, pump-control behavior, and overall feasibility of the low-cost system design."}
                                </p>
                                <figure className="space-y-3 rounded-2xl border border-border/50 bg-background p-4 md:p-6">
                                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-foreground/[0.03] md:aspect-[16/10]">
                                        <Image
                                            src={project.physicalPrototypeImage}
                                            alt={`${project.title} physical prototype`}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 80vw"
                                            className="object-contain"
                                        />
                                    </div>
                                    <figcaption className="text-sm text-foreground/60">
                                        {language === "pt" ? "Protótipo funcional usado para validação física da lógica de monitorização do tanque e controlo de bombeamento." : "Functional prototype used for physical validation of tank-level monitoring and control logic."}
                                    </figcaption>
                                </figure>
                            </section>
                        )}

                        {project.technicalConstraintsNotes && (
                            <section
                                aria-labelledby="technical-constraints"
                                className="rounded-xl border border-border/40 bg-background/70 p-5 md:p-6"
                            >
                                <h3 id="technical-constraints" className="text-base font-semibold text-foreground/90">
                                    {language === "pt" ? "Restrições Técnicas e Notas Práticas" : "Technical Constraints & Practical Notes"}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                                    {project.technicalConstraintsNotes}
                                </p>
                            </section>
                        )}

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            <section
                                aria-labelledby="tools-tech"
                                className="rounded-2xl border border-border/50 bg-background p-6"
                            >
                                <h3
                                    id="tools-tech"
                                    className="mb-4 inline-flex items-center gap-2 text-lg font-semibold"
                                >
                                    <Cpu size={18} className="text-accent" />
                                    {language === "pt" ? "Ferramentas e Tecnologias" : "Tools and Technologies"}
                                </h3>
                                <ul className="space-y-2">
                                    {project.toolsAndTech.map((tool: string) => (
                                        <li
                                            key={tool}
                                            className="flex items-start gap-2 text-sm text-foreground/75"
                                        >
                                            <CheckCircle2
                                                size={14}
                                                className="mt-0.5 shrink-0 text-accent/80"
                                            />
                                            {tool}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section
                                aria-labelledby="key-learnings"
                                className="rounded-2xl border border-border/50 bg-background p-6"
                            >
                                <h3 id="key-learnings" className="mb-4 text-lg font-semibold">
                                    {language === "pt" ? "Aprendizagens Principais" : "Key Learnings"}
                                </h3>
                                <ul className="space-y-2">
                                    {project.keyLearnings.map((learning: string) => (
                                        <li
                                            key={learning}
                                            className="flex items-start gap-2 text-sm text-foreground/75"
                                        >
                                            <CheckCircle2
                                                size={14}
                                                className="mt-0.5 shrink-0 text-accent/80"
                                            />
                                            {learning}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        <section
                            aria-labelledby="my-contribution"
                            className="rounded-2xl border border-accent/25 bg-accent/5 p-6"
                        >
                            <h3 id="my-contribution" className="text-lg font-semibold">
                                {language === "pt" ? "A Minha Contribuição" : "My Contribution"}
                            </h3>
                            <p className="mt-3 leading-relaxed text-foreground/80">
                                {project.myContribution}
                            </p>
                        </section>
                    </div>
                </Container>
            </section>
        </>
    );
}
