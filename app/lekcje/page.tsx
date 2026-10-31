import type { Metadata } from "next";
import { getAllLessons, getLessonsOverview } from "@/lib/data";
import LessonsCatalogView from "@/components/LessonsCatalogView";

export const metadata: Metadata = {
  title: "Akademia Krok po Kroku (10 Lekcji) - Wywiad z Klientem & Prowadzenie Projektów AI | Projedudei",
  description:
    "Przewodnik krok po kroku od pierwszego kontaktu z klientem, przez komplet pytań o zakres (Scope Statement), tworzenie aplikacji AI, po certyfikację PM, Scrum Master i Product Owner.",
};

export default function LessonsPage() {
  const lessons = getAllLessons();
  const overview = getLessonsOverview();

  return <LessonsCatalogView lessons={lessons} overview={overview} />;
}

