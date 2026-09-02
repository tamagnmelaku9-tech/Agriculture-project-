import React, { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  Play,
  Copy,
  Check,
  ExternalLink,
  Youtube,
  HelpCircle,
  Sparkles,
  ArrowRight,
  BookOpen,
  Code2,
  Lightbulb,
  MessageSquare,
  Layers,
  Award,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ROADMAP_LESSONS } from '../data/roadmap';
import { DayLesson, UserProgress } from '../types';

interface RoadmapViewProps {
  progress: UserProgress;
  onUpdateProgress: (updated: UserProgress) => void;
  onNavigateToTab: (tab: string, prefillPrompt?: string) => void;
  onSendCodeToLab: (code: string, day: number) => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  progress,
  onUpdateProgress,
  onNavigateToTab,
  onSendCodeToLab,
}) => {
  const [selectedDayNum, setSelectedDayNum] = useState<number>(progress.currentDay || 1);
  const [copiedCode, setCopiedCode] = useState(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  const selectedLesson: DayLesson =
    ROADMAP_LESSONS.find((l) => l.day === selectedDayNum) || ROADMAP_LESSONS[0];

  const isDayCompleted = progress.completedDays.includes(selectedDayNum);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleQuizAnswer = (index: number) => {
    if (quizSubmitted) return;
    setSelectedQuizOption(index);
    setQuizSubmitted(true);

    const isCorrect = index === selectedLesson.quiz.correctIndex;
    if (isCorrect) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
      });

      // Mark day completed if not already
      if (!progress.completedDays.includes(selectedDayNum)) {
        const nextCompleted = [...progress.completedDays, selectedDayNum];
        const nextDay = Math.min(15, selectedDayNum + 1);
        onUpdateProgress({
          ...progress,
          completedDays: nextCompleted,
          currentDay: nextDay,
          quizScores: {
            ...progress.quizScores,
            [selectedDayNum]: 100,
          },
          lastActive: new Date().toISOString(),
        });
      }
    }
  };

  const phases = [
    { num: 1, name: 'Phase 1: Data Science & ML Fundamentals', days: [1, 2, 3] },
    { num: 2, name: 'Phase 2: Core Machine Learning Models', days: [4, 5, 6, 7, 8] },
    { num: 3, name: 'Phase 3: Frontend & Application Integration', days: [9, 10, 11, 12] },
    { num: 4, name: 'Phase 4: Deployment & Final Presentation', days: [13, 14, 15] },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Mentor Welcome & Roadmap Masterplan Overview Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/50 border border-emerald-500/20 p-6 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              15-Day Structured Agri-Tech Master Plan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Agri-Smart AI System &middot; Mentorship Classroom
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              እንኳን ወደ 15 ቀናት የተግባር AI ማሰልጠኛ በደህና መጡ መልአኩ! እዚህ የምንሰራው ኮድ መጻፍ ብቻ ሳይሆን፣ እያንዳንዱ የማሽን ለርኒንግ ሞዴል፣ የአየር ትንበያ API እና Generative AI ስርዓት እንዴት ተቀናጅተው የአርሶ አደሩን ችግር እንደሚፈቱ ከመሰረቱ እንማራለን።
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigateToTab('chat', `ሰላም Mentor! ስለ Day ${selectedDayNum} (${selectedLesson.title}) የበለጠ ማብራሪያና የኢትዮጵያ ግብርና አውድ ልጠይቅህ እፈልጋለሁ።`)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold shadow-lg shadow-emerald-900/30 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask Mentor about Day {selectedDayNum}</span>
            </button>
            <button
              onClick={() => onNavigateToTab('playground')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm font-medium transition-all"
            >
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>Open Python Lab</span>
            </button>
          </div>
        </div>

        {/* 15 Days Progress Strip */}
        <div className="mt-6 pt-5 border-t border-slate-800/80">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-semibold text-slate-300">Curriculum Progress Timeline</span>
            <span>{progress.completedDays.length} of 15 Days Mastered</span>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-15 gap-1.5">
            {ROADMAP_LESSONS.map((l) => {
              const isCompleted = progress.completedDays.includes(l.day);
              const isCurrent = l.day === selectedDayNum;
              return (
                <button
                  key={l.day}
                  onClick={() => {
                    setSelectedDayNum(l.day);
                    setSelectedQuizOption(null);
                    setQuizSubmitted(false);
                  }}
                  className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg text-xs font-medium transition-all border ${
                    isCurrent
                      ? 'bg-emerald-500 text-white border-emerald-400 ring-2 ring-emerald-500/30 font-bold'
                      : isCompleted
                      ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700/50 hover:bg-emerald-900/60'
                      : 'bg-slate-800/60 text-slate-400 border-slate-700/60 hover:bg-slate-800'
                  }`}
                >
                  <span className="text-[10px] opacity-80">Day</span>
                  <span className="text-sm font-mono">{l.day}</span>
                  {isCompleted && <Check className="w-3 h-3 text-emerald-400 mt-0.5" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Lesson Studio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Day Detail & Code Engine (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Lesson Header Card */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-emerald-400 font-mono font-medium border border-slate-700">
                {selectedLesson.phaseTitle}
              </span>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Estimated Time: ~{selectedLesson.durationHours} Hours</span>
                {isDayCompleted && (
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <Check className="w-3.5 h-3.5" /> Completed
                  </span>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {selectedLesson.title}
              </h3>
              <p className="text-emerald-400 text-sm font-medium mt-1">
                {selectedLesson.titleAmharic}
              </p>
            </div>

            {/* Architecture Role & Why This Matters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="rounded-xl bg-slate-800/60 border border-slate-700/60 p-3.5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                  <Layers className="w-4 h-4" />
                  <span>Architecture Role</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedLesson.architectureRole}
                </p>
              </div>

              <div className="rounded-xl bg-emerald-950/30 border border-emerald-800/30 p-3.5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <Lightbulb className="w-4 h-4" />
                  <span>Senior Mentor "Why This Matters"</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedLesson.whyThisMatters}
                </p>
                <p className="text-xs text-emerald-300/90 pt-1">
                  {selectedLesson.whyThisMattersAmharic}
                </p>
              </div>
            </div>

            {/* Key Learning Objectives */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                <span>Core Learning Objectives (የትምህርቱ ግቦች)</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedLesson.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/40 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div>{obj}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {selectedLesson.objectivesAmharic[i]}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Python Implementation Code Snippet */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-lg">
            <div className="bg-slate-800/90 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-slate-200">
                  Day {selectedLesson.day} Production Python Script
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyCode(selectedLesson.codeSnippet)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
                <button
                  onClick={() => onSendCodeToLab(selectedLesson.codeSnippet, selectedLesson.day)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Run in Python Lab</span>
                </button>
              </div>
            </div>

            <div className="p-4 bg-slate-950 font-mono text-xs overflow-x-auto max-h-96">
              <pre className="text-emerald-300 leading-relaxed">
                <code>{selectedLesson.codeSnippet}</code>
              </pre>
            </div>
          </div>

          {/* Line-by-Line Architectural Explanation */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Line-by-Line Architectural Breakdown (የኮድ ዝርዝር ትንታኔ)</span>
            </h4>

            <div className="space-y-3">
              {selectedLesson.codeExplanation.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50 space-y-1.5"
                >
                  <code className="text-xs font-mono text-emerald-300 bg-slate-950/80 px-2 py-0.5 rounded border border-emerald-900/40 inline-block">
                    {exp.line}
                  </code>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Technical Logic:</strong> {exp.explanation}
                  </p>
                  <p className="text-xs text-emerald-300/90">
                    <strong>በአማርኛ ማብራሪያ፡</strong> {exp.explanationAmharic}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Curated YouTube & Interactive Verification Quiz (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Curated YouTube Video Resources */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-4">
            <div className="flex items-center gap-2 text-rose-400">
              <Youtube className="w-5 h-5" />
              <h4 className="text-sm font-bold text-white">Recommended Video Lessons</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Selected high-yield video tutorials for Day {selectedLesson.day}. Click to open curated YouTube searches:
            </p>

            <div className="space-y-2.5">
              {selectedLesson.youtubeResources.map((res, i) => {
                const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(res.query)}`;
                return (
                  <a
                    key={i}
                    href={searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/70 hover:border-rose-500/40 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-200 group-hover:text-rose-300 transition-colors">
                        {res.title}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-400 shrink-0 mt-0.5" />
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400">
                      <span className="px-1.5 py-0.2 rounded bg-slate-900 text-slate-300 font-medium">
                        {res.channel}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Interactive Conceptual Challenge / Checkpoint Quiz */}
          <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/30 p-5 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-400">
                <HelpCircle className="w-5 h-5" />
                <h4 className="text-sm font-bold text-white">Day {selectedLesson.day} Mastery Quiz</h4>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Verification
              </span>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-200 leading-relaxed">
                {selectedLesson.quiz.question}
              </p>
              <p className="text-[11px] text-emerald-400 font-medium">
                {selectedLesson.quiz.questionAmharic}
              </p>
            </div>

            {/* Multiple Choice Options */}
            <div className="space-y-2">
              {selectedLesson.quiz.options.map((opt, optIdx) => {
                const isSelected = selectedQuizOption === optIdx;
                const isCorrect = optIdx === selectedLesson.quiz.correctIndex;
                let btnStyle = 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-300';

                if (quizSubmitted) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-900/60 border-emerald-500 text-emerald-200 ring-1 ring-emerald-500';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-rose-900/60 border-rose-500 text-rose-200';
                  }
                } else if (isSelected) {
                  btnStyle = 'bg-emerald-600 text-white border-emerald-500';
                }

                return (
                  <button
                    key={optIdx}
                    disabled={quizSubmitted}
                    onClick={() => handleQuizAnswer(optIdx)}
                    className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition-all ${btnStyle}`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-slate-900/80 flex items-center justify-center text-[10px] font-bold text-slate-300 shrink-0 mt-0.5">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="leading-snug">{opt}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quiz Result & Explanation */}
            {quizSubmitted && (
              <div
                className={`p-3.5 rounded-xl border text-xs space-y-2 animate-in fade-in duration-300 ${
                  selectedQuizOption === selectedLesson.quiz.correctIndex
                    ? 'bg-emerald-950/70 border-emerald-700 text-emerald-200'
                    : 'bg-rose-950/70 border-rose-800 text-rose-200'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold">
                  {selectedQuizOption === selectedLesson.quiz.correctIndex ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>በትክክል መልሰዋል! (Correct Understanding!)</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-4 h-4 text-rose-400" />
                      <span>እንደገና ያስቡበት (Review the Concept)</span>
                    </>
                  )}
                </div>
                <p className="text-[11px] leading-relaxed text-slate-300">
                  {selectedLesson.quiz.explanation}
                </p>
                <p className="text-[11px] leading-relaxed text-emerald-300">
                  {selectedLesson.quiz.explanationAmharic}
                </p>

                {selectedQuizOption === selectedLesson.quiz.correctIndex && selectedLesson.day < 15 && (
                  <button
                    onClick={() => {
                      setSelectedDayNum(selectedLesson.day + 1);
                      setSelectedQuizOption(null);
                      setQuizSubmitted(false);
                    }}
                    className="w-full mt-2 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Proceed to Day {selectedLesson.day + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Quick Navigator to Next Modules */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 space-y-2 text-xs">
            <span className="font-semibold text-slate-300 block">Active System Modules</span>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => onNavigateToTab('ml-recommender')}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-left border border-slate-700/60 transition-colors"
              >
                <span className="block font-semibold text-emerald-400">Module 1</span>
                <span className="text-[11px] text-slate-400">Crop Recommender</span>
              </button>
              <button
                onClick={() => onNavigateToTab('weather-planting')}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-left border border-slate-700/60 transition-colors"
              >
                <span className="block font-semibold text-emerald-400">Modules 2 & 3</span>
                <span className="text-[11px] text-slate-400">Climate & Planting</span>
              </button>
              <button
                onClick={() => onNavigateToTab('crop-care')}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-left border border-slate-700/60 transition-colors"
              >
                <span className="block font-semibold text-emerald-400">Module 4</span>
                <span className="text-[11px] text-slate-400">Gemini Crop Care</span>
              </button>
              <button
                onClick={() => onNavigateToTab('chat')}
                className="p-2 rounded-lg bg-emerald-950/50 hover:bg-emerald-900/50 text-emerald-300 text-left border border-emerald-800/40 transition-colors"
              >
                <span className="block font-semibold text-emerald-300">Live Mentor</span>
                <span className="text-[11px] text-emerald-400/80">Ask Melaku's AI</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
