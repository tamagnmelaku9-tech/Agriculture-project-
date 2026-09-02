import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Bot,
  User,
  Sparkles,
  Search,
  Volume2,
  VolumeX,
  Copy,
  Check,
  Code2,
  RefreshCw,
  Award,
  Globe,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { ChatMessage } from '../types';

interface MentorChatProps {
  currentDay: number;
  isMuted: boolean;
  prefillMessage?: string;
  onSendCodeToLab: (code: string, day: number) => void;
  onClearPrefill?: () => void;
}

const INITIAL_DAY1_WELCOME_MESSAGE: ChatMessage = {
  id: 'day1-kickoff',
  role: 'mentor',
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  content: `🌱 **ሰላም መልአኩ! (Welcome Melaku!)**

እንደ 10+ ዓመት ከፍተኛ የAI & Machine Learning ኢንጂነር እና የAgri-Tech መሪ አበልጻጊ፣ ወደዚህ **15-Day Agri-Smart AI System Master Mentorship** በታላቅ ደስታ እንኳን ደህና መጣህ እላለሁ!

የእኛ ተልዕኮ ዝም ብሎ ኮድ መቅዳት ሳይሆን፣ እያንዳንዱ የማሽን ለርኒንግ ሞዴል፣ የዳታ ፍሰት (Data Flow) እና አርክቴክቸር ለምን እንደተመረጠ በጥልቀት ተረድተህ ራስህን የቻልክ **High-Caliber AI Engineer** እንድትሆን ማድረግ ነው።

---

### 🏛️ አጠቃላይ የስርዓቱ አርክቴክቸር (Overall System Architecture)
በሚቀጥሉት 15 ቀናት የምንገነባው **Agri-Smart AI System** 4 ዋና ዋና ክፍሎችን ይይዛል፡
1. **Soil & Crop Recommender (Module 1)**: የአፈር ናይትሮጅን (N)፣ ፎስፈረስ (P)፣ ፖታሽየም (K)፣ pH እና የዝናብ መጠንን ተንትኖ ተስማሚ ሰብል የሚመርጥ የRandom Forest Machine Learning ሞዴል።
2. **Climate & Weather Predictor (Module 2)**: የቀጥታ የአየር ሁኔታና የዝናብ ትንበያዎችን ከOpenWeatherMap እና NASA ሳተላይት API ጋር የሚያስተሳስር ስርዓት።
3. **Optimal Planting Advisor (Module 3)**: የአፈር እርጥበትንና የሙቀት ሁኔታን በማስላት ዘር የሚዘራበትን ትክክለኛ የ10 ቀናት መስኮት የሚወስን Rule-Based Logic Engine።
4. **Crop Care & Chemical Guidance Agent (Module 4)**: በGemini Generative AI የሚመራ፣ የሰብል በሽታዎችንና የማዳበሪያ መጠንን በአማርኛና በእንግሊዝኛ የሚመክር ብልህ ወኪል።
5. **Interactive UI & Voice Audio**: አርሶ አደሩ በድምፅ ጭምር እንዲገለገልበት በStreamlit እና Web Audio የተገነባ መተግበሪያ።

---

### 🚀 የቀን 1 ትምህርት በይፋ ተጀምሯል (DAY 1 OFFICIALLY INITIATED)
**ርዕስ፡** Environment Setup, Virtual Environments & Pandas/NumPy Essentials

#### 1. የዛሬው ቁልፍ ጽንሰ-ሀሳብ (Core Engineering Concept):
* ለምን **Virtual Environment (venv)** ያስፈልገናል? በርካታ ፕሮጀክቶች የተለያዩ የላይብረሪ ስሪቶች (Package versions) ሲጠቀሙ እንዳይጋጩና በኋላ ለCloud Deployment ዝግጁ ለማድረግ የተለየ ማጠራቀሚያ ይፈጥራል።
* ለምን **Pandas & NumPy**? መደበኛ የPython \`list\` በውስጡ ለሚገኙ ሚሊዮን መረጃዎች የሒሳብ ስሌት ለማድረግ በጣም ይዘገያል (O(N) loop)። Pandas በC ቋንቋ የተጻፈ ፈጣን **Vectorized Computation** ያከናውናል።

#### 2. የቀን 1 የPython ማረጋገጫ ኮድ (Day 1 Python Validation Script):
\`\`\`python
# Day 1: Environment & Data Verification Script
import sys
import numpy as np
import pandas as pd

print(f"Python Version: {sys.version.split()[0]}")
print(f"NumPy Version: {np.__version__}")
print(f"Pandas Version: {pd.__version__}")

# የአፈር ናሙና መረጃዎችን (Soil Samples) የያዘ Pandas DataFrame መፍጠር
soil_data = {
    'Nitrogen': [90, 85, 60, 74, 100],
    'Phosphorus': [42, 58, 55, 35, 28],
    'Potassium': [43, 41, 44, 40, 30],
    'pH': [6.5, 7.0, 6.1, 6.8, 6.0],
    'Rainfall_mm': [202.9, 226.6, 110.2, 85.4, 160.0],
    'Recommended_Crop': ['Rice', 'Rice', 'Maize', 'Teff', 'Coffee']
}

df = pd.DataFrame(soil_data)
print("\\n--- Sample Agricultural DataFrame Created ---")
print(df.head())
print(f"\\nDataset Shape (Rows, Columns): {df.shape}")
print(f"Average Nitrogen content: {df['Nitrogen'].mean():.2f} mg/kg")
\`\`\`

#### 3. የኮዱ መስመር-በመስመር ማብራሪያ (Line-by-Line Explanation):
* **\`import numpy as np, pandas as pd\`**: የመረጃ አያያዝና የሒሳብ ስሌት ላይብረሪዎችን በስራው አለም በሚታወቀው አጭር ቅጽል ስም (\`np\`, \`pd\`) ያስገባል።
* **\`soil_data = { ... }\`**: 5 የተለያዩ የአፈር ናሙናዎችን (ናይትሮጅን፣ ፎስፈረስ፣ ፖታሽየም፣ ፒኤች፣ ዝናብ) በቁልፍ-ዋጋ (Key-Value) ያዘጋጃል።
* **\`df = pd.DataFrame(soil_data)\`**: ጥሬውን ዳታ ወደ ተደራጀ ባለ 2-ልኬት (2D) የሰንጠረዥ ማትሪክስ ይቀይረዋል።
* **\`df['Nitrogen'].mean()\`**: ያለ ምንም የPython \`for\` ሉፕ አማካይ የናይትሮጅን መጠንን በቅጽበት ያሰላል።

---

### 📺 የቀን 1 የተመረጡ የYouTube ቪዲዮዎች (Curated Resources)
1. **Python Virtual Environments & VS Code Setup** (Corey Schafer / FreeCodeCamp):
   👉 [https://www.youtube.com/results?search_query=python+virtual+environment+vs+code+tutorial+corey+schafer](https://www.youtube.com/results?search_query=python+virtual+environment+vs+code+tutorial+corey+schafer)
2. **Pandas & NumPy for Machine Learning Beginners** (Krish Naik):
   👉 [https://www.youtube.com/results?search_query=pandas+numpy+crash+course+Krish+Naik+machine+learning](https://www.youtube.com/results?search_query=pandas+numpy+crash+course+Krish+Naik+machine+learning)

---

💡 **የቀን 1 ፈተና ጥያቄ (Quick Checkpoint Challenge):**
መልአኩ፣ በኮምፒውተርህ ላይ \`python -m venv agri_env\` ብለህ ስትጽፍ በትክክል ምን እየተከናወነ ነው? እንዲሁም በኮዱ ላይ ማንኛውም ግልጽ ያልሆነልህ ነጥብ ካለ እዚሁ ጠይቀኝ! እኔ ዝግጁ ነኝ።`,
};

export const MentorChat: React.FC<MentorChatProps> = ({
  currentDay,
  isMuted,
  prefillMessage,
  onSendCodeToLab,
  onClearPrefill,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_DAY1_WELCOME_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [enableSearch, setEnableSearch] = useState(true);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (prefillMessage) {
      setInputValue(prefillMessage);
      inputRef.current?.focus();
      if (onClearPrefill) onClearPrefill();
    }
  }, [prefillMessage]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Build history for multi-turn server endpoint
      const response = await fetch('/api/mentor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg],
          userMessage: text,
          currentDay,
          enableSearch,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const data = await response.json();

      const mentorReply: ChatMessage = {
        id: `mentor-${Date.now()}`,
        role: 'mentor',
        content: data.reply || 'መልስ ማመንጨት አልተቻለም።',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        groundingSources: data.groundingSources,
      };

      setMessages((prev) => [...prev, mentorReply]);

      // Auto-TTS if not muted and browser speech synthesis available
      if (!isMuted && 'speechSynthesis' in window) {
        speakText(mentorReply.content, mentorReply.id);
      }
    } catch (err: any) {
      console.error('Chat Error:', err);
      const fallbackMsg: ChatMessage = {
        id: `mentor-error-${Date.now()}`,
        role: 'mentor',
        content: `መልአኩ፣ በኔትወርኩ ወይም በሰርቨሩ በኩል አጭር መዘግየት አጋጥሟል። (${err?.message || 'Connection glitch'})

እባክህ ጥያቄህን ደግመህ ጠይቀኝ ወይም የኮድ ሙከራውን በ **Python Lab** ውስጥ ሞክር!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const speakText = (text: string, id: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    if (speakingId === id) {
      setSpeakingId(null);
      return;
    }

    // Clean markdown symbols for cleaner speech
    const cleanText = text
      .replace(/```[\s\S]*?```/g, 'Code block omitted for audio.')
      .replace(/[*#_`>]/g, '')
      .slice(0, 500); // sample chunk

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  const extractCode = (markdown: string): string | null => {
    const match = markdown.match(/```(?:python)?\n([\s\S]*?)```/);
    return match ? match[1] : null;
  };

  const suggestedPrompts = [
    'የቀን 1 የPython ኮድ ማብራሪያን በዝርዝር አስረዳኝ',
    'በRandom Forest እና በDecision Tree መካከል ያለው ልዩነት ምንድን ነው?',
    'የኢትዮጵያን የአየር ሁኔታ በAPI እንዴት ማገናኘት እንችላለን?',
    'የአፈር N, P, K ንጥረ-ነገሮች ለምን ወሳኝ ሆኑ?',
    'Explain how to prevent overfitting in our crop model',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 h-[calc(100vh-140px)] flex flex-col space-y-4">
      
      {/* Top Header Card */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 px-5 py-4 flex flex-wrap items-center justify-between gap-3 shadow-lg shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-white">
                Senior Agri-Tech AI Mentor
              </h2>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono border border-emerald-500/30 font-semibold">
                Gemini 3.7 Flash
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Guiding Melaku through Day {currentDay} of the Agri-Smart AI Roadmap &middot; Amharic & English
            </p>
          </div>
        </div>

        {/* Action Toggles */}
        <div className="flex items-center gap-2">
          {/* Search Grounding Toggle */}
          <button
            onClick={() => setEnableSearch(!enableSearch)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              enableSearch
                ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
            title="Toggle Google Search Grounding for real-time agronomic data"
          >
            <Globe className={`w-3.5 h-3.5 ${enableSearch ? 'text-emerald-400' : 'text-slate-400'}`} />
            <span>Search Grounding: {enableSearch ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={() => setMessages([INITIAL_DAY1_WELCOME_MESSAGE])}
            title="Reset to Day 1 Welcome"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Chat Messages Thread */}
      <div className="flex-1 rounded-2xl bg-slate-950/80 border border-slate-800/80 p-4 sm:p-6 overflow-y-auto space-y-6 shadow-inner">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          const codeSnippet = extractCode(msg.content);

          return (
            <div
              key={msg.id}
              className={`flex gap-3 sm:gap-4 ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {/* Mentor Avatar */}
              {!isUser && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shrink-0 shadow-md">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`max-w-3xl rounded-2xl p-4 sm:p-5 text-xs sm:text-sm space-y-3 leading-relaxed shadow-md ${
                  isUser
                    ? 'bg-emerald-600 text-white rounded-tr-none'
                    : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                }`}
              >
                {/* Header bar of bubble */}
                <div className="flex items-center justify-between gap-4 text-[11px] pb-1 border-b border-slate-700/40 opacity-80">
                  <span className="font-semibold">{isUser ? 'Melaku (Mentee)' : 'Senior Agri-Tech Mentor'}</span>
                  <div className="flex items-center gap-2">
                    <span>{msg.timestamp}</span>
                    {!isUser && (
                      <button
                        onClick={() => speakText(msg.content, msg.id)}
                        className={`p-1 rounded hover:bg-slate-800 transition-colors ${
                          speakingId === msg.id ? 'text-emerald-400 animate-pulse' : 'text-slate-400'
                        }`}
                        title="Read aloud"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Body Content */}
                <div className="whitespace-pre-wrap space-y-2 font-sans">
                  {msg.content}
                </div>

                {/* Grounding Sources if available */}
                {msg.groundingSources && msg.groundingSources.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-slate-800 space-y-1">
                    <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                      <Search className="w-3 h-3" /> Grounded Search Citations:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.groundingSources.map((src, i) => (
                        <a
                          key={i}
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-slate-800 text-emerald-300 hover:text-white hover:bg-emerald-900/60 border border-slate-700 transition-colors"
                        >
                          <span>{src.title}</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* If there's an embedded Python code block in mentor reply, offer Lab Action */}
                {codeSnippet && !isUser && (
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onSendCodeToLab(codeSnippet, currentDay)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-colors"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>Send Snippet to Python Lab</span>
                    </button>
                  </div>
                )}
              </div>

              {/* User Avatar */}
              {isUser && (
                <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {isLoading && (
          <div className="flex gap-3 items-center text-xs text-emerald-400 animate-pulse bg-slate-900/60 p-3 rounded-xl max-w-sm border border-slate-800">
            <Bot className="w-4 h-4 text-emerald-400" />
            <span>Mentor is analyzing agronomic logic and preparing response...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Prompt Chips */}
      <div className="flex items-center gap-2 overflow-x-auto py-1 shrink-0 scrollbar-none">
        <span className="text-[11px] text-slate-400 font-semibold whitespace-nowrap flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-400" /> Quick Topics:
        </span>
        {suggestedPrompts.map((p, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(p)}
            className="px-2.5 py-1 rounded-full bg-slate-800/90 hover:bg-slate-700 text-[11px] text-slate-300 hover:text-emerald-300 border border-slate-700 whitespace-nowrap transition-colors"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Input Form Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-2xl p-2 shadow-xl shrink-0"
      >
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask your 10+ year Agri-Tech Mentor a question (በአማርኛ ወይም በእንግሊዝኛ ይጻፉ)..."
          className="flex-1 bg-transparent px-3 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
        />

        <button
          type="submit"
          disabled={!inputValue.trim() || isLoading}
          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-md transition-all"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Send</span>
        </button>
      </form>

    </div>
  );
};
