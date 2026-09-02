export interface DayLesson {
  day: number;
  phase: number;
  phaseTitle: string;
  title: string;
  titleAmharic: string;
  durationHours: number;
  objectives: string[];
  objectivesAmharic: string[];
  whyThisMatters: string;
  whyThisMattersAmharic: string;
  architectureRole: string;
  codeSnippet: string;
  codeExplanation: { line: string; explanation: string; explanationAmharic: string }[];
  youtubeResources: { title: string; query: string; channel: string }[];
  quiz: {
    question: string;
    questionAmharic: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    explanationAmharic: string;
  };
}

export interface UserProgress {
  completedDays: number[];
  currentDay: number;
  quizScores: Record<number, number>;
  notes: Record<number, string>;
  lastActive: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'mentor';
  content: string;
  timestamp: string;
  groundingSources?: { title: string; url: string }[];
}

export interface CropRecommendation {
  name: string;
  score: number;
  desc: string;
  ideal: {
    N: number;
    P: number;
    K: number;
    temp: number;
    hum: number;
    ph: number;
    rain: number;
  };
}

export interface WeatherZone {
  id: string;
  name: string;
  altitude: string;
  avgTemp: number;
  avgRainfall: number;
  soilType: string;
  region: string;
}
