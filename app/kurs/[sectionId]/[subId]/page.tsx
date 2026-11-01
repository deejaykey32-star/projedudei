import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSubsections, getSubsectionById } from "@/lib/data";
import CourseSubsectionView from "@/components/CourseSubsectionView";

export function generateStaticParams() {
  const all = getAllSubsections();
  const params: { sectionId: string; subId: string }[] = [];

  all.forEach(({ section, subsection }) => {
    // 1. Podstawowe: project-manager / pmp
    params.push({ sectionId: section.id, subId: subsection.id });
    // 2. Po numerze: 1 / pmp
    params.push({ sectionId: String(section.number), subId: subsection.id });

    // 3. Po kodzie (np. PMP -> pmp)
    const codeLower = subsection.code.toLowerCase();
    if (codeLower !== subsection.id.toLowerCase()) {
      params.push({ sectionId: section.id, subId: codeLower });
      params.push({ sectionId: String(section.number), subId: codeLower });
    }
  });

  return params;
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

