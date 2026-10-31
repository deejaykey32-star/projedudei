import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSubsections, getSubsectionById } from "@/lib/data";
import CourseSubsectionView from "@/components/CourseSubsectionView";

export function generateStaticParams() {
  const all = getAllSubsections();
  return all.map(({ section, subsection }) => ({
    sectionId: section.id,
    subId: subsection.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sectionId: string; subId: string }>;
}): Promise<Metadata> {
  const { sectionId, subId } = await params;
  const data = getSubsectionById(sectionId, subId);

  if (!data) {
    return {
      title: "Certyfikacja nie znaleziona - Projedudei",
    };
  }

  const { subsection, section } = data;
  return {
    title: `${subsection.code} - ${subsection.title} | Projedudei`,
    description: `${subsection.description} - Przygotowanie do certyfikacji z mentorem Kurakiem, teoria, use case'y i praktyka z AI.`,
  };
}

export default async function CourseSubsectionPage({
  params,
}: {
  params: Promise<{ sectionId: string; subId: string }>;
}) {
  const { sectionId, subId } = await params;
  const data = getSubsectionById(sectionId, subId);

  if (!data) {
    notFound();
  }

  const { section, subsection } = data;
  return <CourseSubsectionView section={section} subsection={subsection} />;
}

