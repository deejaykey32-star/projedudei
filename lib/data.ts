import questionsData from "@/data/questions.json";
import scenariosData from "@/data/scenarios.json";
import playbookData from "@/data/playbook.json";
import type { Category, Question, ClientScenario, PlaybookTopic } from "./types";

export function getAllCategories(): Category[] {
  return questionsData.categories as Category[];
}

export function getCategoryById(id: string): Category | undefined {
  return questionsData.categories.find((c) => c.id === id) as Category | undefined;
}

export function getAllQuestions(): Question[] {
  return questionsData.categories.flatMap((c) => c.questions) as Question[];
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

