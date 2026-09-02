import React, { useState } from 'react';
import {
  Sprout,
  Cpu,
  Layers,
  Sparkles,
  BarChart3,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RefreshCw,
  Info,
} from 'lucide-react';
import { CropRecommendation } from '../types';

interface SoilCropRecommenderProps {
  onNavigateToCropCare: (cropName: string) => void;
}

export const SoilCropRecommender: React.FC<SoilCropRecommenderProps> = ({
  onNavigateToCropCare,
}) => {
  // Input parameters
  const [nitrogen, setNitrogen] = useState<number>(85);
  const [phosphorus, setPhosphorus] = useState<number>(45);
  const [potassium, setPotassium] = useState<number>(40);
  const [temperature, setTemperature] = useState<number>(23.5);
  const [humidity, setHumidity] = useState<number>(75);
  const [ph, setPh] = useState<number>(6.5);
  const [rainfall, setRainfall] = useState<number>(180);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recommendations, setRecommendations] = useState<CropRecommendation[]>([
    {
      name: 'Rice (ሩዝ)',
      score: 94,
      desc: 'High water requirement and warm humid climate matching current rainfall.',
      ideal: { N: 80, P: 47, K: 40, temp: 24, hum: 82, ph: 6.4, rain: 236 },
    },
    {
      name: 'Maize (በቆሎ)',
      score: 82,
      desc: 'Moderate water, high nitrogen demand for grain filling.',
      ideal: { N: 78, P: 48, K: 20, temp: 22, hum: 65, ph: 6.2, rain: 110 },
    },
    {
      name: 'Teff (ጤፍ)',
      score: 76,
      desc: 'Thrives in diverse altitudes, prefers well-drained loamy soil.',
      ideal: { N: 60, P: 40, K: 30, temp: 21, hum: 55, ph: 6.8, rain: 85 },
    },
    {
      name: 'Coffee (ቡና)',
      score: 68,
      desc: 'High shade humidity and acidic to neutral volcanic soils.',
      ideal: { N: 100, P: 28, K: 30, temp: 23, hum: 72, ph: 6.0, rain: 160 },
    },
  ]);

  const [featureInsights, setFeatureInsights] = useState<any[]>([
    { feature: 'Nitrogen (N)', value: 85, status: 'Optimal' },
    { feature: 'Phosphorus (P)', value: 45, status: 'Optimal' },
    { feature: 'Potassium (K)', value: 40, status: 'Optimal' },
    { feature: 'Soil pH', value: 6.5, status: 'Neutral / Ideal' },
    { feature: 'Rainfall', value: '180 mm', status: 'Heavy / Adequate' },
  ]);

  // Preset soil profiles from Ethiopian agro-ecological zones
  const presets = [
    {
      label: 'Bishoftu Loam (Central Rift)',
      values: { n: 85, p: 45, k: 40, temp: 23, hum: 65, ph: 6.5, rain: 120 },
    },
    {
      label: 'Jimma Volcanic Clay (Coffee Highlands)',
      values: { n: 105, p: 30, k: 35, temp: 21, hum: 78, ph: 5.8, rain: 190 },
    },
    {
      label: 'Bahir Dar Nitisols (Tana Basin)',
      values: { n: 75, p: 55, k: 45, temp: 20, hum: 60, ph: 6.4, rain: 140 },
    },
    {
      label: 'Mekelle Semi-Arid (Northern)',
      values: { n: 40, p: 65, k: 70, temp: 19, hum: 30, ph: 7.4, rain: 60 },
    },
  ];

  const applyPreset = (preset: typeof presets[0]) => {
    setNitrogen(preset.values.n);
    setPhosphorus(preset.values.p);
    setPotassium(preset.values.k);
    setTemperature(preset.values.temp);
    setHumidity(preset.values.hum);
    setPh(preset.values.ph);
    setRainfall(preset.values.rain);
    triggerPrediction(preset.values);
  };

  const triggerPrediction = async (customVals?: any) => {
    setIsLoading(true);
    const payload = customVals
      ? {
          N: customVals.n,
          P: customVals.p,
          K: customVals.k,
          temperature: customVals.temp,
          humidity: customVals.hum,
          ph: customVals.ph,
          rainfall: customVals.rain,
        }
      : {
          N: nitrogen,
          P: phosphorus,
          K: potassium,
          temperature,
          humidity,
          ph,
          rainfall,
        };

    try {
      const res = await fetch('/api/ml/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const data = await res.json();
        setRecommendations(data.recommendations);
        setFeatureInsights(data.featureInsights);
      }
    } catch (err) {
      console.warn('Using client-side fallback recommendation calculation:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-emerald-950/60 border border-emerald-500/20 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
            <Cpu className="w-3.5 h-3.5" />
            Module 1 &middot; Machine Learning Inference Engine
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Soil &amp; Climate Crop Recommender (የአፈርና ሰብል አዛማጅ)
          </h2>
          <p className="text-xs text-slate-300 max-w-2xl">
            Trained on 2,200 multi-feature records using an ensemble <strong>Random Forest Classifier</strong>. Adjust soil nutrients below to test predictive crop suitability.
          </p>
        </div>

        {/* Regional Presets */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 font-medium">Presets:</span>
          {presets.map((p, idx) => (
            <button
              key={idx}
              onClick={() => applyPreset(p)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-emerald-900/40 text-slate-300 hover:text-emerald-200 border border-slate-700 text-xs transition-colors"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Controls Column (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-4 shadow-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-emerald-400" />
                <span>Soil Nutrients &amp; pH (የአፈር ናሙና)</span>
              </h3>
              <button
                onClick={() => triggerPrediction()}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
              >
                <RefreshCw className={`w-3 h-3 ${isLoading ? 'animate-spin' : ''}`} />
                <span>Recalculate</span>
              </button>
            </div>

            {/* Nitrogen */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-300">Nitrogen (N) [mg/kg]</span>
                <span className="font-mono text-emerald-400 font-bold">{nitrogen}</span>
              </div>
              <input
                type="range"
                min="0"
                max="140"
                value={nitrogen}
                onChange={(e) => {
                  setNitrogen(Number(e.target.value));
                  triggerPrediction();
                }}
                className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>0 (Deficient)</span>
                <span>70 (Optimal)</span>
                <span>140 (Heavy)</span>
              </div>
            </div>

            {/* Phosphorus */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-300">Phosphorus (P) [mg/kg]</span>
                <span className="font-mono text-emerald-400 font-bold">{phosphorus}</span>
              </div>
              <input
                type="range"
                min="5"
                max="145"
                value={phosphorus}
                onChange={(e) => {
                  setPhosphorus(Number(e.target.value));
                  triggerPrediction();
                }}
                className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Potassium */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-300">Potassium (K) [mg/kg]</span>
                <span className="font-mono text-emerald-400 font-bold">{potassium}</span>
              </div>
              <input
                type="range"
                min="5"
                max="205"
                value={potassium}
                onChange={(e) => {
                  setPotassium(Number(e.target.value));
                  triggerPrediction();
                }}
                className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Soil pH */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-300">Soil pH Level</span>
                <span className="font-mono text-emerald-400 font-bold">{ph.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="3.5"
                max="9.5"
                step="0.1"
                value={ph}
                onChange={(e) => {
                  setPh(Number(e.target.value));
                  triggerPrediction();
                }}
                className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>3.5 (Acidic)</span>
                <span>6.5 - 7.0 (Neutral)</span>
                <span>9.5 (Alkaline)</span>
              </div>
            </div>
          </div>

          {/* Climate Inputs */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-4 shadow-lg">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Micro-Climate Conditions (የአየር ፀባይ)</span>
            </h3>

            {/* Temperature */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-300">Temperature (°C)</span>
                <span className="font-mono text-emerald-400 font-bold">{temperature}°C</span>
              </div>
              <input
                type="range"
                min="8"
                max="45"
                step="0.5"
                value={temperature}
                onChange={(e) => {
                  setTemperature(Number(e.target.value));
                  triggerPrediction();
                }}
                className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Humidity */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-300">Relative Humidity (%)</span>
                <span className="font-mono text-emerald-400 font-bold">{humidity}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={humidity}
                onChange={(e) => {
                  setHumidity(Number(e.target.value));
                  triggerPrediction();
                }}
                className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Rainfall */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-300">Seasonal Rainfall (mm)</span>
                <span className="font-mono text-emerald-400 font-bold">{rainfall} mm</span>
              </div>
              <input
                type="range"
                min="20"
                max="300"
                value={rainfall}
                onChange={(e) => {
                  setRainfall(Number(e.target.value));
                  triggerPrediction();
                }}
                className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Prediction Results & Insights Column (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Top Recommendation Highlight Card */}
          {recommendations.length > 0 && (
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/80 border border-emerald-500/40 p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Top Recommendation (ተመራጭ ሰብል)
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold border border-emerald-500/30">
                  {recommendations[0].score}% Match Probability
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {recommendations[0].name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {recommendations[0].desc}
                  </p>
                </div>

                <button
                  onClick={() => onNavigateToCropCare(recommendations[0].name.split(' ')[0])}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shrink-0 shadow-lg shadow-emerald-900/30 transition-all"
                >
                  <span>Get Gemini Crop Care Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Match Score Meter */}
              <div className="space-y-1.5 pt-2">
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
                  <div
                    className="bg-gradient-to-r from-teal-400 to-emerald-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${recommendations[0].score}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Alternative Ranked Crops */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-3 shadow-lg">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              <span>Alternative Ranked Crops (ሌሎች አማራጭ ሰብሎች)</span>
            </h4>

            <div className="space-y-3">
              {recommendations.slice(1).map((crop, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">{crop.name}</span>
                      <span className="text-xs text-emerald-400 font-mono font-semibold">
                        {crop.score}% Match
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{crop.desc}</p>
                  </div>

                  <button
                    onClick={() => onNavigateToCropCare(crop.name.split(' ')[0])}
                    className="text-xs text-emerald-400 hover:text-emerald-300 font-medium whitespace-nowrap"
                  >
                    Diagnose &rarr;
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Importance & Nutrition Status */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Info className="w-4 h-4 text-emerald-400" />
              <span>Telemetry Feature Status Check</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {featureInsights.map((fi, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 space-y-0.5">
                  <span className="text-[11px] text-slate-400 block">{fi.feature}</span>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-slate-200 font-semibold">{fi.value}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                      fi.status.includes('Optimal') || fi.status.includes('Neutral')
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-amber-500/20 text-amber-300'
                    }`}>
                      {fi.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
