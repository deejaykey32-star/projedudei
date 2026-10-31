import { notFound } from "next/navigation";
import { getAllCourseSections, getCourseSectionById } from "@/lib/data";
import CourseSectionView from "@/components/CourseSectionView";

export function generateStaticParams() {
  const sections = getAllCourseSections();
  return sections.map((sec) => ({
    sectionId: sec.id,
  }));
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

