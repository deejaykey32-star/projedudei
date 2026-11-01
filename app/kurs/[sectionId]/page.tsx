import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllCourseSections,
  getCourseSectionById,
  getAllSubsections,
  findSubsectionByAnyId,
} from "@/lib/data";
import CourseSectionView from "@/components/CourseSectionView";
import CourseSubsectionView from "@/components/CourseSubsectionView";

export function generateStaticParams() {
  const sections = getAllCourseSections();
  const params: { sectionId: string }[] = [];

  // 1. Sekcje główne po ID
  sections.forEach((sec) => {
    params.push({ sectionId: sec.id });
    params.push({ sectionId: String(sec.number) });
  });

  // 2. Bezpośrednie aliasy podsekcji (np. /kurs/pmp/, /kurs/psm/, /kurs/pspo/ itp.)
  const allSub = getAllSubsections();
  allSub.forEach(({ subsection }) => {
    params.push({ sectionId: subsection.id });
    if (subsection.code.toLowerCase() !== subsection.id.toLowerCase()) {
      params.push({ sectionId: subsection.code.toLowerCase() });
    }
  });

  // 3. Dodatkowe powszechne aliasy
  params.push({ sectionId: "pm" });
  params.push({ sectionId: "scrum" });
  params.push({ sectionId: "po" });
  params.push({ sectionId: "agile" });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sectionId: string }>;
}): Promise<Metadata> {
  const { sectionId } = await params;
  const section = getCourseSectionById(sectionId);

  if (section) {
    return {
      title: `Sekcja ${section.number}: ${section.title} | Projedudei`,
      description: `${section.description} - Certyfikacje i praktyka z niebieskim Kurakiem.`,
    };
  }

  // Sprawdź czy to podsekcja bezpośrednia
  const directSub = findSubsectionByAnyId(sectionId);
  if (directSub) {
    return {
      title: `${directSub.subsection.code} - ${directSub.subsection.title} | Projedudei`,
      description: `${directSub.subsection.description} - Przygotowanie z Kurakiem.`,
    };
  }

  return {
    title: "Program Nauczania - Projedudei",
  };
}

export default async function CourseSectionPage({
  params,
}: {
  params: Promise<{ sectionId: string }>;
}) {
  const { sectionId } = await params;
  const section = getCourseSectionById(sectionId);

  if (section) {
    return <CourseSectionView section={section} />;
  }

  // Jeśli użytkownik wszedł np. na /kurs/pmp/ lub /kurs/psm/
  const directSub = findSubsectionByAnyId(sectionId);
  if (directSub) {
    return (
      <CourseSubsectionView
        section={directSub.section}
        subsection={directSub.subsection}
      />
    );
  }

  notFound();
}
