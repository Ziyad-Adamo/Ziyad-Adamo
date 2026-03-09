import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { profileDictionary } from "@/components/data/dictionary";
import type { ProjectItem } from "@/src/data/profile";
import { ProjectContent } from "./ProjectContent";

interface PageProps {
  params: Promise<{ slug: string }>;
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

function getProjectBySlug(slug: string): ProjectItem | undefined {
  const englishMatch = profileDictionary.en.projects.find(
    (project) => project.slug === slug
  );

  if (englishMatch) {
    return englishMatch;
  }

  for (const data of Object.values(profileDictionary)) {
    const localizedMatch = data.projects.find((project) => project.slug === slug);
    if (localizedMatch) {
      return localizedMatch;
    }
  }

  return undefined;
}

function getAllProjectSlugs(): string[] {
  return Array.from(
    new Set(
      Object.values(profileDictionary).flatMap((data) =>
        data.projects.map((project) => project.slug)
      )
    )
  );
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project case study could not be found.",
    };
  }

  const heroImage = getSafeImageSrc(project.heroImage);

  return {
    title: `${project.title} | Featured Project`,
    description: project.subtitle,
    openGraph: {
      title: project.title,
      description: project.subtitle,
      images: heroImage ? [{ url: heroImage }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-24">
        <ProjectContent slug={project.slug} initialProject={project} />
      </main>
      <Footer />
    </div>
  );
}
