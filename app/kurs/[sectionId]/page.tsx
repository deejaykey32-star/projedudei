import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllCourseSections, getCourseSectionById } from "@/lib/data";
import CourseSectionView from "@/components/CourseSectionView";

export function generateStaticParams() {
  const sections = getAllCourseSections();
  return sections.map((sec) => ({
    sectionId: sec.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sectionId: string }>;
}): Promise<Metadata> {
  const { sectionId } = await params;
  const section = getCourseSectionById(sectionId);

  if (!section) {
    return {
      title: "Sekcja nie znaleziona - Projedudei",
    };
  }

  return {
    title: `Sekcja ${section.number}: ${section.title} | Projedudei`,
    description: `${section.description} - Certyfikacje i praktyka z niebieskim Kurakiem.`,
  };
}

export default async function CourseSectionPage({
  params,
}: {
  params: Promise<{ sectionId: string }>;
}) {
  const { sectionId } = await params;
  const section = getCourseSectionById(sectionId);

  if (!section) {
    notFound();
  }

  return <CourseSectionView section={section} />;
}
