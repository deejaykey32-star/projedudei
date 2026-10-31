import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllLessons, getLessonById } from "@/lib/data";
import LessonDetailView from "@/components/LessonDetailView";

export function generateStaticParams() {
  const lessons = getAllLessons();
  return lessons.map((l) => ({
    lessonId: l.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}): Promise<Metadata> {
  const { lessonId } = await params;
  const lesson = getLessonById(lessonId);

  if (!lesson) {
    return {
      title: "Lekcja nie znaleziona - Projedudei",
    };
  }

  return {
    title: `Lekcja ${lesson.number}: ${lesson.title} | Projedudei Akademia PM`,
    description: `${lesson.shortDesc} - Cel lekcji: ${lesson.objective}`,
  };
}

export default async function LessonDetailPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;
  const lesson = getLessonById(lessonId);
  const allLessons = getAllLessons();

  if (!lesson) {
    notFound();
  }

  return <LessonDetailView lesson={lesson} allLessons={allLessons} />;
}

