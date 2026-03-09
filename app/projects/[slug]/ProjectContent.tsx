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
  Wifi,
  MonitorSmartphone,
  CheckSquare,
  Network
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/components/context/LanguageContext";
import type { ProjectItem } from "@/src/data/profile";

interface DiagramCardProps {
  title: string;
  caption: string;
  src: unknown;
  alt: string;
  className?: string;
  imageClassName?: string;
}

function getSafeImageSrc(src: unknown): string | null {
  if (typeof src === "string") {
    const trimmed = src.trim();
    return trimmed.length > 0 ? trimmed : null;
  }

  if (src && typeof src === "object" && "src" in src) {
    const nested = (src as { src?: unknown }).src;
    if (typeof nested === "string") {
      const trimmed = nested.trim();
      return trimmed.length > 0 ? trimmed : null;
    }
  }

  return null;
}

function DiagramCard({
  title,
  caption,
  src,
  alt,
  className = "aspect-[16/10]",
  imageClassName = "object-contain p-4 md:p-6",
}: DiagramCardProps) {
  const safeSrc = getSafeImageSrc(src);

  return (
    <figure className="space-y-3">
      {safeSrc ? (
        <div
          className={`relative w-full overflow-hidden rounded-2xl border border-border/50 bg-background ${className}`}
        >
          <Image src={safeSrc} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className={imageClassName} />
        </div>
      ) : (
        <div
          className={`relative w-full overflow-hidden rounded-2xl border border-border/50 bg-foreground/[0.03] ${className}`}
          aria-hidden="true"
        />
      )}
      <figcaption className="space-y-1">
        {title && <h3 className="text-base font-semibold text-foreground">{title}</h3>}
        {caption && <p className="text-sm text-foreground/60">{caption}</p>}
      </figcaption>
    </figure>
  );
}

interface ProjectContentProps {
  slug: string;
  initialProject: ProjectItem;
}

interface ThesisRequestFormState {
  fullName: string;
  email: string;
  organization: string;
  roleTitle: string;
  requestReason: string;
  intendedUse: string;
  phoneOrLinkedIn: string;
}

const initialThesisRequestForm: ThesisRequestFormState = {
  fullName: "",
  email: "",
  organization: "",
  roleTitle: "",
  requestReason: "",
  intendedUse: "",
  phoneOrLinkedIn: "",
};

export function ProjectContent({ slug, initialProject }: ProjectContentProps) {
  const { t, language } = useLanguage();
  const isPortuguese = language === "pt";

  const project = t.projects.find((item: ProjectItem) => item.slug === slug) || initialProject;
  const isFlagship = Boolean(project.isFlagship);
  const heroImageSrc = getSafeImageSrc(project.heroImage);
  const documentAccess = project.documentAccess;

  const [isThesisRequestOpen, setIsThesisRequestOpen] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ThesisRequestFormState, string>>>({});
  const [thesisRequestForm, setThesisRequestForm] = useState<ThesisRequestFormState>(initialThesisRequestForm);

  const handleRequestFieldChange = (field: keyof ThesisRequestFormState, value: string) => {
    setThesisRequestForm((previous) => ({ ...previous, [field]: value }));

    if (formErrors[field]) {
      setFormErrors((previous) => {
        const nextErrors = { ...previous };
        delete nextErrors[field];
        return nextErrors;
      });
    }
  };

  const openThesisRequest = () => {
    setRequestSubmitted(false);
    setFormErrors({});
    setThesisRequestForm(initialThesisRequestForm);
    setIsThesisRequestOpen(true);
  };

  const closeThesisRequest = () => {
    setIsThesisRequestOpen(false);
  };

  const handleThesisRequestSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!documentAccess?.fullThesisRequest) {
      return;
    }

    const nextErrors: Partial<Record<keyof ThesisRequestFormState, string>> = {};

    if (!thesisRequestForm.fullName.trim()) {
      nextErrors.fullName = isPortuguese ? "O nome completo é obrigatório." : "Full name is required.";
    }
    if (!thesisRequestForm.email.trim()) {
      nextErrors.email = isPortuguese ? "O email é obrigatório." : "Email address is required.";
    }
    if (!thesisRequestForm.requestReason.trim()) {
      nextErrors.requestReason = isPortuguese
        ? "A razão do pedido é obrigatória."
        : "Reason for requesting the full thesis is required.";
    }
    if (!thesisRequestForm.intendedUse.trim()) {
      nextErrors.intendedUse = isPortuguese
        ? "O uso pretendido é obrigatório."
        : "Intended use of the document is required.";
    }

    if (Object.keys(nextErrors).length) {
      setFormErrors(nextErrors);
      setRequestSubmitted(false);
      return;
    }

    const sanitized = {
      fullName: thesisRequestForm.fullName.trim(),
      email: thesisRequestForm.email.trim(),
      organization: thesisRequestForm.organization.trim() || "Not provided",
      roleTitle: thesisRequestForm.roleTitle.trim() || "Not provided",
      requestReason: thesisRequestForm.requestReason.trim(),
      intendedUse: thesisRequestForm.intendedUse.trim(),
      phoneOrLinkedIn: thesisRequestForm.phoneOrLinkedIn.trim() || "Not provided",
    };

    const emailBody = [
      `Full name: ${sanitized.fullName}`,
      `Email: ${sanitized.email}`,
      `Organization / University / Company: ${sanitized.organization}`,
      `Role / Title: ${sanitized.roleTitle}`,
      `Reason for request: ${sanitized.requestReason}`,
      `Intended use: ${sanitized.intendedUse}`,
      `Phone / LinkedIn: ${sanitized.phoneOrLinkedIn}`,
      "",
      "Project requested:",
      documentAccess.fullThesisRequest.projectRequestedLabel,
    ].join("\n");

    const mailtoLink = `mailto:${encodeURIComponent(
      documentAccess.fullThesisRequest.recipientEmail
    )}?subject=${encodeURIComponent(documentAccess.fullThesisRequest.subject)}&body=${encodeURIComponent(
      emailBody
    )}`;

    setRequestSubmitted(true);
    window.location.href = mailtoLink;
  };

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
              {isPortuguese ? "Voltar aos Projectos" : "Back to Projects"}
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
              <h1 id="project-title" className={`font-bold tracking-tight ${isFlagship ? 'text-4xl md:text-6xl text-foreground' : 'text-3xl md:text-5xl'}`}>
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
                      {isPortuguese ? "Papel:" : "Role:"}
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
                <span>{isPortuguese ? "Tipo de Projecto:" : "Project Type:"}</span>
                <span className="font-medium text-foreground/65">{project.typeLabel}</span>
              </div>
            </article>

            {heroImageSrc && (
              <div className={`relative w-full overflow-hidden rounded-2xl border bg-background ${isFlagship ? 'aspect-[4/3] md:aspect-[16/10] border-accent/40 shadow-[0_0_30px_rgba(0,240,255,0.05)]' : 'aspect-[4/3] border-border/50'}`}>
                <Image
                  src={heroImageSrc}
                  alt={`${project.title} preview`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            )}
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
                {isPortuguese ? "Estudo de Caso de Engenharia" : "Engineering Case Study"}
              </h2>
            </header>

            {isFlagship ? (
              <>
                {project.shortSummary && (
                  <section aria-labelledby="short-summary" className="rounded-2xl border border-border/50 bg-background p-6">
                    <h3 id="short-summary" className="text-lg font-semibold">
                      {isPortuguese ? "Resumo Curto" : "Short Summary"}
                    </h3>
                    <p className="mt-3 leading-relaxed text-foreground/75">{project.shortSummary}</p>
                  </section>
                )}

                {documentAccess && (
                  <section
                    aria-labelledby="project-document-access"
                    className="rounded-2xl border border-accent/25 bg-accent/5 p-6"
                  >
                    <h3 id="project-document-access" className="text-lg font-semibold">
                      {isPortuguese ? "Acesso a Documentação" : "Project Documentation Access"}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                      {documentAccess.availabilityNote}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <a
                        href={documentAccess.brief.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-accent/40 bg-accent/15 px-4 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/25"
                      >
                        {documentAccess.brief.label}
                      </a>
                      <button
                        type="button"
                        onClick={openThesisRequest}
                        className="inline-flex items-center justify-center rounded-lg border border-border/60 bg-background px-4 py-2.5 text-sm font-semibold text-foreground/85 transition-colors hover:border-accent/30 hover:text-accent"
                      >
                        {documentAccess.fullThesisRequest.label}
                      </button>
                    </div>
                  </section>
                )}

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <article className="rounded-2xl border border-border/50 bg-background p-6 lg:col-span-3">
                    <h3 className="text-lg font-semibold">{isPortuguese ? "Visão Geral" : "Overview"}</h3>
                    <p className="mt-3 leading-relaxed text-foreground/75">{project.overview}</p>
                  </article>

                  <article className="rounded-2xl border border-border/50 bg-background p-6 lg:col-span-2">
                    <h3 className="text-lg font-semibold">{isPortuguese ? "Problema e Contexto" : "Problem & Context"}</h3>
                    <p className="mt-3 leading-relaxed text-foreground/75">{project.problem}</p>
                  </article>

                  <article className="rounded-2xl border border-border/50 bg-background p-6 lg:col-span-1">
                    <h3 className="text-lg font-semibold">{isPortuguese ? "Solução" : "Solution"}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/75">{project.solution}</p>
                  </article>
                </div>

                <section aria-labelledby="system-architecture" className="space-y-6">
                  <h3 id="system-architecture" className="flex items-center gap-2 text-2xl font-bold">
                    <Network size={24} className="text-accent" />
                    {isPortuguese ? "Arquitectura do Sistema" : "System Architecture"}
                  </h3>
                  <div className="rounded-3xl border border-accent/20 bg-accent/5 p-4 md:p-8">
                    <DiagramCard
                      title={isPortuguese ? "Arquitectura Integrada" : "Integrated System Architecture"}
                      caption={
                        project.systemArchitectureCaption ??
                        (isPortuguese
                          ? "Diagrama de integração e ligação ao nível do sistema."
                          : "System-level integration and wiring architecture.")
                      }
                      src={project.systemArchitectureImage}
                      alt={`${project.title} system architecture`}
                      className="aspect-[4/3] md:aspect-[16/9] bg-transparent border-none"
                      imageClassName="object-contain"
                    />
                  </div>
                </section>

                <section aria-labelledby="functional-prototype" className="space-y-6">
                  <h3 id="functional-prototype" className="flex items-center gap-2 text-2xl font-bold">
                    <Cpu size={24} className="text-accent" />
                    {isPortuguese ? "Protótipo Funcional" : "Functional Prototype"}
                  </h3>
                  {project.functionalPrototypeText && (
                    <p className="max-w-4xl text-base leading-relaxed text-foreground/80">{project.functionalPrototypeText}</p>
                  )}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {(project.functionalPrototypeImages ?? []).map((image, index) => {
                      const safeSrc = getSafeImageSrc(image.src);
                      const key = safeSrc ?? `functional-prototype-${index}`;

                      return (
                        <DiagramCard
                          key={key}
                          title=""
                          caption={image.caption}
                          src={safeSrc}
                          alt={image.alt}
                          className="aspect-[4/3] border-border/40"
                          imageClassName="object-cover"
                        />
                      );
                    })}
                  </div>
                </section>

                {project.localDisplayInterface && (
                  <section aria-labelledby="local-display" className="space-y-6">
                    <h3 id="local-display" className="flex items-center gap-2 text-2xl font-bold">
                      <MonitorSmartphone size={24} className="text-accent" />
                      {isPortuguese ? "Interface Local de Display" : "Local Display Interface"}
                    </h3>
                    <p className="max-w-4xl text-base leading-relaxed text-foreground/80">{project.localDisplayInterface.text}</p>
                    <DiagramCard
                      title=""
                      caption={project.localDisplayInterface.caption}
                      src={project.localDisplayInterface.image}
                      alt={project.localDisplayInterface.alt}
                      className="aspect-[16/10] border-border/40"
                      imageClassName="object-contain p-4 md:p-6"
                    />
                  </section>
                )}

                {project.webMonitoringControl && (
                  <section aria-labelledby="web-monitoring" className="space-y-6">
                    <h3 id="web-monitoring" className="flex items-center gap-2 text-2xl font-bold">
                      <Wifi size={24} className="text-accent" />
                      {isPortuguese ? "Monitorização e Controlo Web" : "Web Monitoring & Control"}
                    </h3>
                    <p className="max-w-4xl text-base leading-relaxed text-foreground/80">{project.webMonitoringControl.text}</p>
                    <DiagramCard
                      title=""
                      caption={project.webMonitoringControl.caption}
                      src={project.webMonitoringControl.image}
                      alt={project.webMonitoringControl.alt}
                      className="aspect-[16/9] border-border/40"
                      imageClassName="object-contain p-4 md:p-6"
                    />
                  </section>
                )}

                {project.sensingAutomationDetail && (
                  <section aria-labelledby="sensing-detail" className="space-y-6">
                    <h3 id="sensing-detail" className="flex items-center gap-2 text-2xl font-bold">
                      <CheckSquare size={24} className="text-accent" />
                      {isPortuguese ? "Detalhe de Detecção e Automação" : "Sensing & Automation Detail"}
                    </h3>
                    <p className="max-w-4xl text-base leading-relaxed text-foreground/80">{project.sensingAutomationDetail.text}</p>
                    <DiagramCard
                      title=""
                      caption={project.sensingAutomationDetail.caption}
                      src={project.sensingAutomationDetail.image}
                      alt={project.sensingAutomationDetail.alt}
                      className="aspect-[16/10] border-border/40"
                      imageClassName="object-cover"
                    />
                  </section>
                )}

                {project.embeddedLogicCommunicationText && (
                  <section aria-labelledby="embedded-layer" className="rounded-3xl border border-accent/20 bg-accent/5 p-6 md:p-10">
                    <h3 id="embedded-layer" className="mb-4 inline-flex items-center gap-2 text-2xl font-bold">
                      <FileCode2 size={24} className="text-accent" />
                      {isPortuguese
                        ? "Lógica Embutida e Camada de Comunicação"
                        : "Embedded Logic & Communication Layer"}
                    </h3>
                    <p className="max-w-4xl text-base leading-relaxed text-foreground/80">
                      {project.embeddedLogicCommunicationText}
                    </p>
                  </section>
                )}

                {project.keyFeatures?.length ? (
                  <section aria-labelledby="key-features" className="space-y-6">
                    <h3 id="key-features" className="text-2xl font-bold">
                      {isPortuguese ? "Funcionalidades-Chave" : "Key Features"}
                    </h3>
                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {project.keyFeatures.map((item) => (
                        <li key={item} className="flex items-start gap-3 rounded-2xl border border-border/40 bg-background/50 p-4 text-sm text-foreground/80">
                          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {project.validationOutcomes && (
                    <section className="rounded-2xl border border-border/50 bg-background p-6 md:p-8">
                      <h3 className="text-xl font-bold">
                        {isPortuguese ? "Validação e Resultados" : "Validation & Outcomes"}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                        {project.validationOutcomes}
                      </p>
                    </section>
                  )}

                  {project.limitationsFutureImprovements && (
                    <section className="rounded-2xl border border-border/50 bg-background p-6 md:p-8">
                      <h3 className="text-xl font-bold">
                        {isPortuguese
                          ? "Limitações e Melhorias Futuras"
                          : "Limitations & Future Improvements"}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                        {project.limitationsFutureImprovements}
                      </p>
                    </section>
                  )}
                </div>

                <section
                  aria-labelledby="tools-tech"
                  className="rounded-3xl border border-border/50 bg-background p-6 md:p-10"
                >
                  <h3 id="tools-tech" className="mb-6 flex items-center gap-2 text-2xl font-bold">
                    <Cpu size={24} className="text-accent" />
                    {isPortuguese ? "Tech Stack e Ferramentas" : "Tech Stack"}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {project.toolsAndTech.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-lg border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-medium text-accent hover:bg-accent/10 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>
              </>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <article className="rounded-2xl border border-border/50 bg-background p-6 md:col-span-3">
                    <h3 className="text-lg font-semibold">{isPortuguese ? "Resumo" : "Summary"}</h3>
                    <p className="mt-3 leading-relaxed text-foreground/75">{project.overview}</p>
                  </article>

                  <article className="rounded-2xl border border-border/50 bg-background p-6 md:col-span-3 lg:col-span-1">
                    <h3 className="text-lg font-semibold">{isPortuguese ? "Problema" : "Problem"}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/75">{project.problem}</p>
                  </article>

                  <article className="rounded-2xl border border-border/50 bg-background p-6 md:col-span-3 lg:col-span-2">
                    <h3 className="text-lg font-semibold">{isPortuguese ? "Solução" : "Solution"}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/75">{project.solution}</p>
                  </article>
                </div>

                <section aria-labelledby="control-logic" className="space-y-5">
                  <h3 id="control-logic" className="inline-flex items-center gap-2 text-xl font-semibold">
                    <FileCode2 size={18} className="text-accent" />
                    {isPortuguese ? "Implementação Lógica de Controlo" : "Control Logic Implementation"}
                  </h3>
                  <p className="leading-relaxed text-foreground/75">
                    {project.controlLogicImplementation}
                  </p>
                </section>

                <section aria-labelledby="diagrams" className="space-y-7">
                  <h3 id="diagrams" className="text-xl font-semibold">
                    {isPortuguese ? "Artefactos de Design do Sistema" : "System Design Artifacts"}
                  </h3>
                  <DiagramCard
                    title={isPortuguese ? "Diagrama de Blocos do Sistema" : "System Block Diagram"}
                    caption={
                      project.systemArchitectureCaption ??
                      (isPortuguese
                        ? "Arquitectura de componentes e fluxo de sinal de alto nível."
                        : "High-level component architecture and signal flow.")
                    }
                    src={project.systemArchitectureImage}
                    alt={`${project.title} block diagram`}
                    className="aspect-[16/8]"
                  />
                  <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
                    <DiagramCard
                      title={isPortuguese ? "Fluxograma de Controlo" : "Control Flowchart"}
                      caption={
                        isPortuguese
                          ? "Fluxo de decisão para avaliação do estado do sensor e actuador."
                          : "Decision flow for sensor-state evaluation and pump actuation."
                      }
                      src={project.controlLogicImage}
                      alt={`${project.title} control flowchart`}
                      className="aspect-[16/10]"
                    />
                    <DiagramCard
                      title={isPortuguese ? "Circuito Proteus" : "Proteus Circuit"}
                      caption={
                        isPortuguese
                          ? "Circuito embutido pronto para simulação com sensores, indicadores e estágio de controlo."
                          : "Simulation-ready embedded circuit with sensors, indicators, and control stage."
                      }
                      src={project.circuitDesignImage}
                      alt={`${project.title} circuit design`}
                      className="aspect-[16/10]"
                    />
                  </div>
                </section>

                {project.physicalPrototypeImage && (
                  <section aria-labelledby="physical-prototype" className="space-y-6">
                    <h3 id="physical-prototype" className="text-xl font-semibold">
                      {isPortuguese
                        ? "Prototipagem Física e Validação Funcional"
                        : "Physical Prototype & Functional Validation"}
                    </h3>
                    <p className="leading-relaxed text-foreground/75">
                      {isPortuguese
                        ? "Além da simulação, o projecto também atingiu a fase funcional de prototipagem física. Um protótipo de bancada real foi construído e testado usando recipientes de água, fiação de sensores, electrónica de controlo e execução de código em tempo real. Esta validação prática ajudou a confirmar a lógica de monitorização esperada, actuador da bomba e viabilidade do sistema de baixo custo."
                        : "Beyond simulation, the project also reached a functional physical prototyping stage. A real bench prototype was assembled and tested using water containers, sensor wiring, control electronics, and live code execution. This practical validation helped confirm the expected monitoring logic, pump-control behavior, and overall feasibility of the low-cost system design."}
                    </p>
                    <DiagramCard
                      title=""
                      caption={
                        isPortuguese
                          ? "Protótipo funcional usado para validação física da lógica de monitorização do tanque e controlo de bombeamento."
                          : "Functional prototype used for physical validation of tank-level monitoring and control logic."
                      }
                      src={project.physicalPrototypeImage}
                      alt={`${project.title} physical prototype`}
                      className="aspect-[3/4] md:aspect-[16/10]"
                      imageClassName="object-contain p-4 md:p-6"
                    />
                  </section>
                )}

                {project.technicalConstraintsNotes && (
                  <section
                    aria-labelledby="technical-constraints"
                    className="rounded-xl border border-border/40 bg-background/70 p-5 md:p-6"
                  >
                    <h3 id="technical-constraints" className="text-base font-semibold text-foreground/90">
                      {isPortuguese
                        ? "Restrições Técnicas e Notas Práticas"
                        : "Technical Constraints & Practical Notes"}
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
                    <h3 id="tools-tech" className="mb-4 inline-flex items-center gap-2 text-lg font-semibold">
                      <Cpu size={18} className="text-accent" />
                      {isPortuguese ? "Ferramentas e Tecnologias" : "Tools and Technologies"}
                    </h3>
                    <ul className="space-y-2">
                      {project.toolsAndTech.map((tool) => (
                        <li key={tool} className="flex items-start gap-2 text-sm text-foreground/75">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent/80" />
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
                      {isPortuguese ? "Aprendizagens Principais" : "Key Learnings"}
                    </h3>
                    <ul className="space-y-2">
                      {project.keyLearnings.map((learning) => (
                        <li key={learning} className="flex items-start gap-2 text-sm text-foreground/75">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent/80" />
                          {learning}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </>
            )}

            <section
              aria-labelledby="my-contribution"
              className={`rounded-3xl border p-6 md:p-10 ${isFlagship
                ? 'border-accent/40 bg-accent/10 shadow-[0_0_40px_rgba(0,240,255,0.08)]'
                : 'border-accent/25 bg-accent/5'
                }`}
            >
              <h3 id="my-contribution" className="flex items-center gap-2 text-2xl font-bold">
                <User size={24} className="text-accent" />
                {isFlagship
                  ? isPortuguese
                    ? "O Meu Papel"
                    : "My Role"
                  : isPortuguese
                    ? "A Minha Contribuição"
                    : "My Contribution"}
              </h3>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-foreground/80 md:text-lg">{project.myContribution}</p>
            </section>
          </div>
        </Container>
      </section>

      {isThesisRequestOpen && documentAccess?.fullThesisRequest && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            aria-label={isPortuguese ? "Fechar pedido de tese" : "Close thesis request"}
            onClick={closeThesisRequest}
            className="absolute inset-0 bg-background/70 backdrop-blur-[2px]"
          />
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="thesis-request-title"
            className="relative z-10 w-full max-w-2xl max-h-[92dvh] overflow-y-auto rounded-2xl border border-border/60 bg-background p-6 shadow-2xl md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 id="thesis-request-title" className="text-xl font-semibold">
                  {documentAccess.fullThesisRequest.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {documentAccess.fullThesisRequest.helperText}
                </p>
              </div>
              <button
                type="button"
                onClick={closeThesisRequest}
                className="rounded-md border border-border/50 px-3 py-1.5 text-xs font-medium text-foreground/75 transition-colors hover:border-accent/30 hover:text-accent"
              >
                {isPortuguese ? "Fechar" : "Close"}
              </button>
            </div>

            <form onSubmit={handleThesisRequestSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="space-y-1.5 text-sm">
                  <span className="font-medium text-foreground/85">Full name *</span>
                  <input
                    value={thesisRequestForm.fullName}
                    onChange={(event) => handleRequestFieldChange("fullName", event.target.value)}
                    className="w-full rounded-lg border border-border/60 bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                    required
                  />
                  {formErrors.fullName && <span className="text-xs text-red-500">{formErrors.fullName}</span>}
                </label>

                <label className="space-y-1.5 text-sm">
                  <span className="font-medium text-foreground/85">Email address *</span>
                  <input
                    type="email"
                    value={thesisRequestForm.email}
                    onChange={(event) => handleRequestFieldChange("email", event.target.value)}
                    className="w-full rounded-lg border border-border/60 bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                    required
                  />
                  {formErrors.email && <span className="text-xs text-red-500">{formErrors.email}</span>}
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="space-y-1.5 text-sm">
                  <span className="font-medium text-foreground/85">Organization / University / Company</span>
                  <input
                    value={thesisRequestForm.organization}
                    onChange={(event) => handleRequestFieldChange("organization", event.target.value)}
                    className="w-full rounded-lg border border-border/60 bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                  />
                </label>

                <label className="space-y-1.5 text-sm">
                  <span className="font-medium text-foreground/85">Role / Title</span>
                  <input
                    value={thesisRequestForm.roleTitle}
                    onChange={(event) => handleRequestFieldChange("roleTitle", event.target.value)}
                    className="w-full rounded-lg border border-border/60 bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                  />
                </label>
              </div>

              <label className="space-y-1.5 text-sm">
                <span className="font-medium text-foreground/85">Reason for requesting the full thesis *</span>
                <textarea
                  value={thesisRequestForm.requestReason}
                  onChange={(event) => handleRequestFieldChange("requestReason", event.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-border/60 bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                  required
                />
                {formErrors.requestReason && <span className="text-xs text-red-500">{formErrors.requestReason}</span>}
              </label>

              <label className="space-y-1.5 text-sm">
                <span className="font-medium text-foreground/85">Intended use of the document *</span>
                <textarea
                  value={thesisRequestForm.intendedUse}
                  onChange={(event) => handleRequestFieldChange("intendedUse", event.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-border/60 bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                  required
                />
                {formErrors.intendedUse && <span className="text-xs text-red-500">{formErrors.intendedUse}</span>}
              </label>

              <label className="space-y-1.5 text-sm">
                <span className="font-medium text-foreground/85">Phone or LinkedIn</span>
                <input
                  value={thesisRequestForm.phoneOrLinkedIn}
                  onChange={(event) => handleRequestFieldChange("phoneOrLinkedIn", event.target.value)}
                  className="w-full rounded-lg border border-border/60 bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                />
              </label>

              <p className="text-xs text-foreground/65">
                {documentAccess.fullThesisRequest.approvalNote}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg border border-accent/40 bg-accent/15 px-4 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/25"
                >
                  {isPortuguese ? "Enviar Pedido" : "Submit Request"}
                </button>
                <button
                  type="button"
                  onClick={closeThesisRequest}
                  className="inline-flex items-center justify-center rounded-lg border border-border/60 bg-background px-4 py-2.5 text-sm font-medium text-foreground/75 transition-colors hover:border-accent/30 hover:text-accent"
                >
                  {isPortuguese ? "Cancelar" : "Cancel"}
                </button>
              </div>

              {requestSubmitted && (
                <p className="text-sm text-accent">
                  {documentAccess.fullThesisRequest.approvalNote}
                </p>
              )}
            </form>
          </section>
        </div>
      )}
    </>
  );
}
