import React, { useState, useEffect } from 'react';
import {
  Code2,
  Play,
  Terminal,
  RefreshCw,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  FileCode,
  CheckCircle2,
} from 'lucide-react';
import { ROADMAP_LESSONS } from '../data/roadmap';

interface CodePlaygroundProps {
  initialCode?: string;
  initialDay?: number;
  onAskMentor: (question: string) => void;
}

export const CodePlayground: React.FC<CodePlaygroundProps> = ({
  initialCode,
  initialDay = 1,
  onAskMentor,
}) => {
  const [selectedDay, setSelectedDay] = useState<number>(initialDay);
  const [code, setCode] = useState<string>(
    initialCode || ROADMAP_LESSONS.find((l) => l.day === initialDay)?.codeSnippet || ''
  );
  const [output, setOutput] = useState<string>(`[Python 3.11.8 Virtual Environment]
Press "Execute Python Script" to validate libraries and run simulation.`);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string>('');

  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
      if (initialDay) setSelectedDay(initialDay);
    }
  }, [initialCode, initialDay]);

  const handleSelectDay = (dayNum: number) => {
    setSelectedDay(dayNum);
    const lesson = ROADMAP_LESSONS.find((l) => l.day === dayNum);
    if (lesson) {
      setCode(lesson.codeSnippet);
      setOutput(`[Loaded Day ${dayNum}: ${lesson.title}]\nReady to execute.`);
      setFeedback('');
    }
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput('Compiling and executing script in Python environment...');
    setFeedback('');

    try {
      const res = await fetch('/api/code/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, day: selectedDay }),
      });

      if (res.ok) {
        const data = await res.json();
        setOutput(data.output);
        setFeedback(data.feedback);
      } else {
        setOutput('Error executing script.');
      }
    } catch (err: any) {
      setOutput(`Execution Error: ${err?.message || 'Network error'}`);
    } finally {
      setIsRunning(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/60 border border-emerald-500/20 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
            <Code2 className="w-3.5 h-3.5" />
            Interactive Python Lab &middot; Agri-Smart Runtime Sandbox
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Python Execution &amp; Testing Sandbox
          </h2>
          <p className="text-xs text-slate-300">
            Edit, test, and validate code snippets for any of the 15 roadmap days with simulated matrix operations and ML training checkpoints.
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex items-center gap-2 bg-slate-800 p-1.5 rounded-xl border border-slate-700">
          <FileCode className="w-4 h-4 text-emerald-400 ml-2" />
          <select
            value={selectedDay}
            onChange={(e) => handleSelectDay(Number(e.target.value))}
            className="bg-transparent text-xs font-semibold text-slate-100 focus:outline-none pr-3 py-1 cursor-pointer"
          >
            {ROADMAP_LESSONS.map((l) => (
              <option key={l.day} value={l.day} className="bg-slate-900 text-slate-100">
                Day {l.day}: {l.title.slice(0, 32)}...
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Editor (7 Cols) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
            <div className="bg-slate-800/90 px-4 py-2.5 border-b border-slate-700 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>agri_smart_day{selectedDay}.py</span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs transition-colors"
                  title="Copy Code"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-all"
                >
                  <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
                  <span>{isRunning ? 'Running...' : 'Execute Python Script'}</span>
                </button>
              </div>
            </div>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows={18}
              className="w-full bg-slate-950 p-4 text-xs font-mono text-emerald-300 focus:outline-none resize-none leading-relaxed border-none"
              spellCheck={false}
            />
          </div>
        </div>

        {/* Output & Terminal Feedback (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Terminal Stdout &amp; Logs</span>
              </h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-emerald-400 font-mono">
                Exit Code 0
              </span>
            </div>

            <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 overflow-x-auto min-h-[220px] max-h-[300px] leading-relaxed whitespace-pre-wrap">
              {output}
            </pre>

            {feedback && (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-700/60 text-xs text-emerald-300 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feedback}</span>
              </div>
            )}

            <button
              onClick={() => onAskMentor(`መልአኩ ነኝ፤ በዚህ የቀን ${selectedDay} የPython ኮድ ላይ ጥያቄ አለኝ:\n\n\`\`\`python\n${code.slice(0, 300)}\n\`\`\``)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Ask Mentor to Review This Code</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
