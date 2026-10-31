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

export interface YouTubeVideoRef {
  title: string;
  channel: string;
  url: string;
  searchQuery: string;
  durationEstimate: string;
  description: string;
}

export interface IndustryApplication {
  itAndSoftware: string[];
  graphicsAndMultimedia: string[];
  ecommerceAndMarketing: string[];
  otherTechIndustries: string[];
}

export interface CourseSubsection {
  id: string;
  code: string;
  title: string;
  badge: string;
  description: string;
  certificationDetails: {
    issuer: string;
    difficulty: string;
    validity: string;
    examFormat: string;
    targetAudience: string;
    passingScore?: string;
    costEstimate?: string;
  };
  keyFormulasOrRules?: string[];
  examTrap?: string;
  theorySummary: string[];
  industryApplications: IndustryApplication;
  useCase: {
    scenarioTitle: string;
    clientSituation: string;
    actionTaken: string;
    aiAdvantage: string;
    clientResult?: string;
  };
  beyondCertification: {
    title: string;
    keyTakeaway: string;
    practicalAiTip: string;
  };
  kurakBriefcaseTip?: string;
  youtubeVideos: YouTubeVideoRef[];
  practiceQuestions: Question[];
}

export interface CourseSection {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  subsections: CourseSubsection[];
}

export interface ClientInterviewDialogue {
  category: string;
  pmQuestion: string;
  clientAnswerRaw: string;
  pmFollowUp: string;
  finalScopeSpec: string;
  kurakTip: string;
}

export interface LessonStep {
  title: string;
  explanation: string[];
  practicalRule?: string;
  aiPromptExample?: string;
  clientDialogue?: ClientInterviewDialogue[];
}

export interface Lesson {
  id: string;
  number: number;
  title: string;
  shortDesc: string;
  durationMinutes: number;
  badge: string;
  category: string;
  iconName: string;
  objective: string;
  steps: LessonStep[];
  clientInterviewSuite?: {
    overview: string;
    phases: {
      phaseName: string;
      phaseDescription: string;
      dialogues: ClientInterviewDialogue[];
    }[];
    ironcladScopeTemplate: string;
  };
  summaryTakeaways: string[];
  kurakLessonTip: string;
  quizQuestion: Question;
}

