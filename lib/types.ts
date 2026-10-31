export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  categoryTag?: string;
  kurakTip?: string;
}

export interface Category {
  id: string;
  name: string;
  shortDesc: string;
  badge: string;
  questions: Question[];
}

export interface QuestionBank {
  categories: Category[];
}

export interface ScenarioOption {
  id: string;
  text: string;
  isOptimal: boolean;
  scoreDelta: {
    clientSatisfaction: number;
    projectMargin: number;
    speed: number;
  };
  feedback: string;
  kurakComment: string;
}

export interface ClientScenario {
  id: string;
  title: string;
  clientName: string;
  clientRole: string;
  clientAvatar: string;
  brief: string;
  budget: string;
  timeline: string;
  aiChallenge: string;
  options: ScenarioOption[];
  learningOutcome: string;
}

export interface PlaybookTopic {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string[];
  recommendedTools: string[];
  promptTemplate?: string;
  kurakSecretTip: string;
}

