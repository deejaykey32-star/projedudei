import questionsData from "@/data/questions.json";
import scenariosData from "@/data/scenarios.json";
import playbookData from "@/data/playbook.json";
import curriculumData from "@/data/curriculum.json";
import type {
  Category,
  Question,
  ClientScenario,
  PlaybookTopic,
  CourseSection,
  CourseSubsection,
} from "./types";

export function getAllCategories(): Category[] {
  return questionsData.categories as Category[];
}

export function getCategoryById(id: string): Category | undefined {
  return (questionsData.categories as Category[]).find((c) => c.id === id);
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
  return (curriculumData.sections as unknown as CourseSection[]).find((s) => s.id === id);
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
