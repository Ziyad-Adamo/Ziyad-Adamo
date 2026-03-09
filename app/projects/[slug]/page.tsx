import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Cpu,
  FileCode2,
  Layers3,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { profileDictionary } from "@/components/data/dictionary";
import type { ProjectItem } from "@/src/data/profile";
import { ProjectContent } from "./ProjectContent";

interface PageProps {
  params: Promise<{ slug: string }>;
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

  return {
    title: `${project.title} | Featured Project`,
    description: project.subtitle,
    openGraph: {
      title: project.title,
      description: project.subtitle,
      images: [{ url: project.heroImage }],
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
