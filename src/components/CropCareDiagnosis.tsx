import React, { useState } from 'react';
import {
  Stethoscope,
  Sparkles,
  Bot,
  Volume2,
  VolumeX,
  Send,
  Leaf,
  FlaskConical,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';

interface CropCareDiagnosisProps {
  initialCrop?: string;
  isMuted: boolean;
}

export const CropCareDiagnosis: React.FC<CropCareDiagnosisProps> = ({
  initialCrop = 'Maize',
  isMuted,
}) => {
  const [cropName, setCropName] = useState<string>(initialCrop);
  const [symptoms, setSymptoms] = useState<string>(
    'የበቆሎው የታችኛው ቅጠሎች ወደ ቢጫነት ተቀይረዋል፤ እድገቱም ተገቷል (Yellowing of lower leaves and stunted growth).'
  );
  const [soilCondition, setSoilCondition] = useState<string>('Clay Loam, pH 6.2, moderate organic matter');
  const [organicPreference, setOrganicPreference] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const [diagnosisResult, setDiagnosisResult] = useState<string>(`🌱 **የሰብል ምርመራና የህክምና ማዘዣ (Crop Care Diagnosis)**

### 1. የችግሩ መነሻ (Probable Root Cause & Diagnosis)
የታየው ምልክት **የናይትሮጅን እጥረት (Nitrogen Deficiency / Chlorosis)** ነው። ናይትሮጅን በቅጠል ውስጥ ክሎሮፊል ለማምረት ወሳኝ ንጥረ-ነገር በመሆኑ፣ እጥረት ሲያጋጥም ተክሉ ከታችኞቹ ቅጠሎች ናይትሮጅን ወደ አዲሶቹ የላይኛው ቅጠሎች ስለሚያጓጉዝ የታችኞቹ ቅጠሎች ወደ ቢጫነት ይቀየራሉ።

### 2. አፋጣኝ መፍትሔ (Immediate Action Plan)
* **Top-Dressing Fertilizer Application**: በቆሎው የጉልበት ቁመት (Knee-high stage) ላይ ሲደርስ በፍጥነት የናይትሮጅን ማዳበሪያ ይስጡ።
* እርጥበት ባለበት አፈር ላይ ማዳበሪያውን ከተክሉ ግንድ በ 5-7 ሳ.ሜ ርቀት ላይ መቅበር።

### 3. የማዳበሪያ መጠን (Dosage & Application Rate)
* **ኬሚካል ማዳበሪያ (Urea / NPS)**: በሄክታር **100 ኪ.ግ ዩሪያ (Urea 46% N)** በ 2 ዙር ተከፍሎ ይሰጥ። (50 ኪ.ግ በመዝራት ወቅት፣ 50 ኪ.ግ በጉልበት ቁመት)።
* **ኦርጋኒክ አማራጭ (Organic Option)**: በደንብ የበሰበሰ ኮምፖስት ወይም ፍግ በሄክታር **5-8 ኩንታል** ከአፈሩ ጋር ይቀላቅሉ።

### 4. የወደፊት መከላከያ (Long-term Prevention)
* **የሰብል ፈረቃ (Crop Rotation)**: በሚቀጥለው ወቅት እንደ ቦሎቄ፣ አተር ወይም ሽምብራ የመሳሰሉ ጥራጥሬዎችን በመዝራት የአፈርን ናይትሮጅን በራስ-ሰር ያበልጽጉ።`);

  const handleDiagnose = async () => {
    if (!symptoms.trim() || isLoading) return;
    setIsLoading(true);

    try {
      const res = await fetch('/api/crop-care/diagnose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cropName,
          symptom: symptoms,
          soilCondition,
          organicPreference,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setDiagnosisResult(data.diagnosis);

        if (!isMuted && 'speechSynthesis' in window) {
          speakDiagnosis(data.diagnosis);
        }
      }
    } catch (err) {
      console.error('Diagnosis Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const speakDiagnosis = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    if (isSpeaking) {
      setIsSpeaking(false);
      return;
    }

    const clean = text.replace(/[*#_`>]/g, '').slice(0, 450);
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.rate = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(diagnosisResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/70 border border-emerald-500/20 p-6 shadow-xl">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
            <Stethoscope className="w-3.5 h-3.5" />
            Module 4 &middot; Gemini Generative AI Agronomist Agent
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Crop Care, Pest &amp; Fertilizer Diagnostic Agent (የሰብል ህክምናና ማዳበሪያ አማካሪ)
          </h2>
          <p className="text-xs text-slate-300 max-w-2xl">
            Describe crop symptoms in Amharic or English to receive AI-powered root cause diagnoses, precise chemical/organic dosages, and Integrated Pest Management (IPM) protocols.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Form Inputs (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-4 shadow-lg">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-emerald-400" />
              <span>Symptom Observation Form (የምልክት መግለጫ)</span>
            </h3>

            {/* Crop Selector */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Target Crop (የሰብል አይነት)</label>
              <input
                type="text"
                value={cropName}
                onChange={(e) => setCropName(e.target.value)}
                placeholder="e.g. Maize (በቆሎ), Teff (ጤፍ), Coffee (ቡና), Tomato"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Observed Symptoms */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Observed Symptoms / Damage (የታዩ ምልክቶች)</label>
              <textarea
                rows={4}
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="Describe leaf color, spots, wilting, insect damage, or root issues..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 leading-relaxed"
              />
            </div>

            {/* Soil Context */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Soil Condition &amp; pH (የአፈር ሁኔታ)</label>
              <input
                type="text"
                value={soilCondition}
                onChange={(e) => setSoilCondition(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none"
              />
            </div>

            {/* Organic vs Chemical Toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700">
              <div className="flex items-center gap-2 text-xs">
                <Leaf className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-200 font-medium">Prioritize Organic / Eco Solutions</span>
              </div>
              <input
                type="checkbox"
                checked={organicPreference}
                onChange={(e) => setOrganicPreference(e.target.checked)}
                className="accent-emerald-500 w-4 h-4 cursor-pointer"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleDiagnose}
              disabled={isLoading || !symptoms.trim()}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isLoading ? 'Diagnosing with Gemini AI...' : 'Run Agronomic Diagnosis (ምርመራ ጀምር)'}</span>
            </button>
          </div>
        </div>

        {/* Diagnosis Output (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-4 shadow-xl">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400">
                <Bot className="w-5 h-5" />
                <h3 className="text-sm font-bold text-white">Agronomic Prescription &amp; Treatment</h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => speakDiagnosis(diagnosisResult)}
                  className={`p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors ${
                    isSpeaking ? 'text-emerald-400 animate-pulse' : ''
                  }`}
                  title="Read Aloud in Amharic Audio"
                >
                  {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
                  title="Copy Diagnosis"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Diagnosis Result Text */}
            <div className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap leading-relaxed space-y-3 font-sans">
              {diagnosisResult}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
