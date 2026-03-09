"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { Card } from "../ui/Card";
import { useLanguage } from "../context/LanguageContext";
import { useFilter } from "../context/FilterContext";
import { cn } from "@/lib/utils";
import type { ProjectItem } from "@/src/data/profile";

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

export function Projects() {
  const { t, language } = useLanguage();
  const { activeFilter } = useFilter();
  const sortedProjects = [...t.projects].sort(
    (a: ProjectItem, b: ProjectItem) => (b.priority ?? 0) - (a.priority ?? 0)
  );

  if (!sortedProjects.length) {
    return null;
  }

  return (
    <Section id="projects" className="bg-foreground/[0.02]">
      <Container>
        <div className="mb-16 max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            {t.ui.sections.projects}
          </h2>
          <div className="mb-8 h-1 w-20 rounded-full bg-accent"></div>
          <p className="text-base leading-relaxed text-foreground/65">
            Selected engineering builds with full technical breakdowns, from
            system design to implementation and validation.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-8"
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
          {sortedProjects.map((project: ProjectItem) => {
            const itemString = JSON.stringify(project).toLowerCase();
            const isMatch = activeFilter
              ? itemString.includes(activeFilter.toLowerCase())
              : true;
            const isDimmed = activeFilter && !isMatch;
            const isFlagship = Boolean(project.isFlagship);
            const heroImageSrc = getSafeImageSrc(project.heroImage);

            return (
              <motion.article
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                }}
                className={cn(
                  "transition-opacity duration-500",
                  isDimmed ? "opacity-35 grayscale-[55%]" : "opacity-100"
                )}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block"
                  aria-label={`Open project: ${project.title}`}
                >
                  <Card
                    interactive
                    className={cn(
                      "group overflow-hidden border p-0",
                      isFlagship
                        ? "border-accent/45 shadow-[0_0_0_1px_rgba(0,240,255,0.12)]"
                        : "border-border/60"
                    )}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-5">
                      <div className="relative aspect-[4/3] overflow-hidden bg-foreground/[0.03] md:col-span-2 md:aspect-auto md:min-h-[260px]">
                        {heroImageSrc ? (
                          <Image
                            src={heroImageSrc}
                            alt={`${project.title} preview`}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-accent/5" />
                        )}
                        <div className="absolute left-4 top-4 rounded-full border border-background/60 bg-background/85 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                          {project.category}
                        </div>
                        {isFlagship && (
                          <div className="absolute right-4 top-4 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
                            {language === "pt" ? "Caso Principal" : "Primary Case Study"}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col p-6 md:col-span-3 md:p-8">
                        <p className={cn("mb-2 text-sm font-medium", isFlagship ? "text-accent" : "text-accent/90")}>
                          {project.typeLabel}
                        </p>
                        <h3
                          className={cn(
                            "mb-3 text-2xl font-bold transition-colors duration-300 group-hover:text-accent",
                            isFlagship && "md:text-[1.7rem]"
                          )}
                        >
                          {project.title}
                        </h3>
                        <p className="mb-6 line-clamp-3 text-foreground/70">
                          {project.shortSummary ?? project.subtitle}
                        </p>

                        <div className="mt-auto flex flex-wrap gap-2">
                          {project.badges.slice(0, isFlagship ? 7 : 5).map((badge) => (
                            <span
                              key={badge}
                              className="rounded-md border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs text-accent"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground/85 transition-colors group-hover:text-accent">
                          {t.ui.viewDetails}
                          <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
