import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllLessons, getLessonById } from "@/lib/data";
import LessonDetailView from "@/components/LessonDetailView";

export function generateStaticParams() {
  const lessons = getAllLessons();
  const params: { lessonId: string }[] = [];

  lessons.forEach((l) => {
    // 1. Pełne ID
    params.push({ lessonId: l.id });
    // 2. Sam numer
    params.push({ lessonId: String(l.number) });
    // 3. Prefix lekcja-X
    params.push({ lessonId: `lekcja-${l.number}` });
  });

  // Dodatkowe powszechne aliasy
  params.push({ lessonId: "wywiad" });
  params.push({ lessonId: "wywiad-z-klientem" });
  params.push({ lessonId: "zakres" });
  params.push({ lessonId: "spec-driven-development" });
  params.push({ lessonId: "prd" });

  return params;
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

