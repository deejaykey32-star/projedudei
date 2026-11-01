import questionsData from "@/data/questions.json";
import scenariosData from "@/data/scenarios.json";
import playbookData from "@/data/playbook.json";
import curriculumData from "@/data/curriculum.json";
import lessonsData from "@/data/lessons.json";
import type {
  Category,
  Question,
  ClientScenario,
  PlaybookTopic,
  CourseSection,
  CourseSubsection,
  Lesson,
} from "./types";

export function getAllCategories(): Category[] {
  return questionsData.categories as Category[];
}

export function getCategoryById(id: string): Category | undefined {
  const clean = id.toLowerCase().trim();
  const categories = questionsData.categories as Category[];
  const direct = categories.find((c) => c.id.toLowerCase() === clean);
  if (direct) return direct;

  // Wyszukiwanie po numerze sekcji lub aliasie
  if (clean === "1" || clean === "pm" || clean === "pmp" || clean === "project-management") {
    return categories.find((c) => c.id === "project-manager");
  }
  if (clean === "2" || clean === "scrum" || clean === "psm" || clean === "csm") {
    return categories.find((c) => c.id === "scrum-master");
  }
  if (clean === "3" || clean === "po" || clean === "pspo" || clean === "cspo") {
    return categories.find((c) => c.id === "product-owner");
  }
  if (clean === "4" || clean === "prod-manager" || clean === "cpm" || clean === "pragmatic") {
    return categories.find((c) => c.id === "product-manager");
  }
  if (clean === "5" || clean === "agile" || clean === "ba" || clean === "pmi-acp" || clean === "pmi-pba") {
    return categories.find((c) => c.id === "agile-analysis");
  }

  return undefined;
}

export function getAllQuestions(): Question[] {
  return (questionsData.categories as Category[]).flatMap((c) => c.questions);
}

export function getAllScenarios(): ClientScenario[] {
  return scenariosData.scenarios as ClientScenario[];
}

export function getScenarioById(id: string): ClientScenario | undefined {
  return (scenariosData.scenarios as ClientScenario[]).find((s) => s.id === id);
}

export function getAllPlaybookTopics(): PlaybookTopic[] {
  return playbookData.topics as PlaybookTopic[];
}

export function getAllCourseSections(): CourseSection[] {
  return curriculumData.sections as unknown as CourseSection[];
}

export function getCourseSectionById(id: string): CourseSection | undefined {
  const clean = id.toLowerCase().trim();
  const sections = curriculumData.sections as unknown as CourseSection[];
  const direct = sections.find((s) => s.id.toLowerCase() === clean);
  if (direct) return direct;

  if (clean === "1" || clean === "pm" || clean === "project-management") {
    return sections.find((s) => s.id === "project-manager");
  }
  if (clean === "2" || clean === "scrum") {
    return sections.find((s) => s.id === "scrum-master");
  }
  if (clean === "3" || clean === "po") {
    return sections.find((s) => s.id === "product-owner");
  }
  if (clean === "4" || clean === "prod-manager") {
    return sections.find((s) => s.id === "product-manager");
  }
  if (clean === "5" || clean === "agile" || clean === "ba") {
    return sections.find((s) => s.id === "agile-analysis");
  }

  return undefined;
}

export function getAllSubsections(): { section: CourseSection; subsection: CourseSubsection }[] {
  const sections = getAllCourseSections();
  const result: { section: CourseSection; subsection: CourseSubsection }[] = [];
  for (const section of sections) {
    for (const subsection of section.subsections) {
      result.push({ section, subsection });
    }
  }
  return result;
}

export function getSubsectionById(
  sectionId: string,
  subId: string
): { section: CourseSection; subsection: CourseSubsection } | undefined {
  const section = getCourseSectionById(sectionId);
  if (!section) return undefined;
  const subsection = section.subsections.find(
    (sub) => sub.id === subId || sub.code.toLowerCase() === subId.toLowerCase()
  );
  if (!subsection) return undefined;
  return { section, subsection };
}

export function findSubsectionByAnyId(
  idOrCode: string
): { section: CourseSection; subsection: CourseSubsection } | undefined {
  const clean = idOrCode.toLowerCase().trim();
  const sections = getAllCourseSections();
  for (const section of sections) {
    const sub = section.subsections.find(
      (s) => s.id.toLowerCase() === clean || s.code.toLowerCase() === clean
    );
    if (sub) {
      return { section, subsection: sub };
    }
  }
  return undefined;
}

export function getAllLessons(): Lesson[] {
  return lessonsData.lessons as unknown as Lesson[];
}

export function getLessonById(id: string): Lesson | undefined {
  const clean = id.toLowerCase().trim();
  const all = lessonsData.lessons as unknown as Lesson[];
  
  // 1. Dokładne dopasowanie ID lub numeru
  const direct = all.find(
    (l) =>
      l.id.toLowerCase() === clean ||
      String(l.number) === clean ||
      `lekcja-${l.number}` === clean ||
      `lesson-${l.number}` === clean
  );
  if (direct) return direct;

  // 2. Dopasowanie po słowach kluczowych
  if (clean.includes("wywiad") || clean.includes("zakres") || clean.includes("interview") || clean.includes("klient")) {
    return all.find((l) => l.number === 2);
  }
  if (clean.includes("spec") || clean.includes("prd") || clean.includes("driven")) {
    return all.find((l) => l.number === 3);
  }
  if (clean.includes("wycena") || clean.includes("pert") || clean.includes("budzet") || clean.includes("estymacj")) {
    return all.find((l) => l.number === 4);
  }
  if (clean.includes("sprint") || clean.includes("moscow") || clean.includes("zwinny")) {
    return all.find((l) => l.number === 5);
  }
  if (clean.includes("architektur") || clean.includes("cloudflare") || clean.includes("supabase")) {
    return all.find((l) => l.number === 6);
  }
  if (clean.includes("grafik") || clean.includes("multimedia") || clean.includes("3d")) {
    return all.find((l) => l.number === 7);
  }
  if (clean.includes("ecommerce") || clean.includes("marketing") || clean.includes("funnel") || clean.includes("sklep")) {
    return all.find((l) => l.number === 8);
  }
  if (clean.includes("scope-creep") || clean.includes("psycholog") || clean.includes("obrona")) {
    return all.find((l) => l.number === 9);
  }
  if (clean.includes("odbior") || clean.includes("uat") || clean.includes("sla") || clean.includes("wdrozen")) {
    return all.find((l) => l.number === 10);
  }
  if (clean.includes("era") || clean.includes("ai-pm") || clean.includes("wstep")) {
    return all.find((l) => l.number === 1);
  }

  return undefined;
}

export function getLessonsOverview() {
  return lessonsData.overview;
}

