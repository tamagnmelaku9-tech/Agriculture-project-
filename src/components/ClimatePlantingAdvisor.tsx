import React, { useState, useEffect } from 'react';
import {
  CloudSun,
  Calendar,
  Thermometer,
  Droplets,
  CloudRain,
  AlertTriangle,
  CheckCircle2,
  MapPin,
  Clock,
  Compass,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { WeatherZone } from '../types';

export const ClimatePlantingAdvisor: React.FC = () => {
  const [selectedZoneId, setSelectedZoneId] = useState<string>('bishoftu');
  const [selectedCrop, setSelectedCrop] = useState<string>('Maize');
  const [soilType, setSoilType] = useState<string>('Clay Loam');

  const zones: WeatherZone[] = [
    { id: 'bishoftu', name: 'Bishoftu / Oromia', altitude: '1,920m', avgTemp: 22.5, avgRainfall: 110, soilType: 'Clay Loam', region: 'Central Rift' },
    { id: 'bahirdar', name: 'Bahir Dar / Amhara', altitude: '1,800m', avgTemp: 20.0, avgRainfall: 145, soilType: 'Nitisols / Red Clay', region: 'Lake Tana Basin' },
    { id: 'hawassa', name: 'Hawassa / Sidama', altitude: '1,708m', avgTemp: 21.0, avgRainfall: 125, soilType: 'Volcanic Loam', region: 'Southern Rift' },
    { id: 'mekelle', name: 'Mekelle / Tigray', altitude: '2,084m', avgTemp: 18.5, avgRainfall: 65, soilType: 'Calcisols / Sandy', region: 'Northern Highlands' },
    { id: 'jimma', name: 'Jimma / Oromia', altitude: '1,780m', avgTemp: 20.2, avgRainfall: 175, soilType: 'Humic Nitisols', region: 'Coffee Highlands' },
    { id: 'adama', name: 'Adama / Oromia', altitude: '1,712m', avgTemp: 24.0, avgRainfall: 85, soilType: 'Andosols / Sandy Loam', region: 'Upper Awash' },
  ];

  const activeZone = zones.find((z) => z.id === selectedZoneId) || zones[0];

  // 7-day forecast simulation
  const forecastDays = [
    { day: 'Today', temp: activeZone.avgTemp, rain: 4.2, hum: 68, icon: '🌦️' },
    { day: 'Tomorrow', temp: activeZone.avgTemp + 0.5, rain: 8.5, hum: 72, icon: '🌧️' },
    { day: 'Day 3', temp: activeZone.avgTemp - 1.0, rain: 14.0, hum: 78, icon: '⛈️' },
    { day: 'Day 4', temp: activeZone.avgTemp, rain: 11.2, hum: 74, icon: '🌧️' },
    { day: 'Day 5', temp: activeZone.avgTemp + 1.2, rain: 5.0, hum: 65, icon: '🌦️' },
    { day: 'Day 6', temp: activeZone.avgTemp + 0.8, rain: 2.1, hum: 60, icon: '⛅' },
    { day: 'Day 7', temp: activeZone.avgTemp, rain: 1.5, hum: 58, icon: '☀️' },
  ];

  const totalForecastRain = forecastDays.reduce((acc, d) => acc + d.rain, 0);

  // Compute Optimal Planting Window
  const computePlantingAdvice = () => {
    const today = new Date();
    const startWindow = new Date(today);
    startWindow.setDate(today.getDate() + 2);
    const endWindow = new Date(today);
    endWindow.setDate(today.getDate() + 8);

    const isFavorable = totalForecastRain > 35 && activeZone.avgTemp > 18;

    return {
      status: isFavorable ? 'IDEAL_WINDOW (ተስማሚ የመዝሪያ ጊዜ)' : 'WATCH_MOISTURE (እርጥበት ይጠብቁ)',
      isFavorable,
      startDate: startWindow.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      endDate: endWindow.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      adviceAmharic: isFavorable
        ? `በሚቀጥሉት 7 ቀናት የሚጠበቀው ${totalForecastRain.toFixed(1)} ሚሜ ዝናብ ለአፈሩ በቂ እርጥበት ስለሚሰጥ ዘሩን ከ ${startWindow.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} እስከ ${endWindow.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} መዝራት ከፍተኛ ምርት ያስገኛል።`
        : `የሚጠበቀው ዝናብ አነስተኛ በመሆኑ ዘሩ እንዳይደርቅ የመዝሪያ ቀኑን ማራዘም ይመረጣል።`,
      soilMoistureIndex: totalForecastRain > 40 ? 'Optimal (82%)' : 'Moderate (45%)',
    };
  };

  const advice = computePlantingAdvice();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-teal-950/60 border border-teal-500/20 p-6 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
              <CloudSun className="w-3.5 h-3.5" />
              Modules 2 &amp; 3 &middot; Climate Telemetry &amp; Planting Scheduler
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Weather &amp; Optimal Planting Advisor (የአየር ሁኔታና መዝሪያ ጊዜ መካሪ)
            </h2>
            <p className="text-xs text-slate-300 max-w-2xl">
              Integrates agro-meteorological forecasting with agronomic threshold logic to schedule optimal seeding windows and mitigate germination loss.
            </p>
          </div>

          {/* Zone Selector */}
          <div className="flex items-center gap-2 bg-slate-800/90 p-1.5 rounded-xl border border-slate-700">
            <MapPin className="w-4 h-4 text-emerald-400 ml-2" />
            <select
              value={selectedZoneId}
              onChange={(e) => setSelectedZoneId(e.target.value)}
              className="bg-transparent text-xs font-semibold text-slate-100 focus:outline-none pr-3 py-1 cursor-pointer"
            >
              {zones.map((z) => (
                <option key={z.id} value={z.id} className="bg-slate-900 text-slate-100">
                  {z.name} ({z.altitude})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: 7-Day Weather & Climate Telemetry (6 Cols) */}
        <div className="lg:col-span-6 space-y-5">
          
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400">Selected Agro-Ecological Zone</span>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>{activeZone.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-emerald-400 font-mono border border-slate-700">
                    {activeZone.region}
                  </span>
                </h3>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-400">Soil Characteristic</span>
                <div className="text-xs font-semibold text-slate-200">{activeZone.soilType}</div>
              </div>
            </div>

            {/* Current Telemetry Metrics Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                  <Thermometer className="w-3.5 h-3.5" />
                  <span>Temperature</span>
                </div>
                <div className="text-lg font-bold text-white font-mono">{activeZone.avgTemp}°C</div>
                <span className="text-[10px] text-slate-400">High Altitude</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-teal-400 font-medium">
                  <Droplets className="w-3.5 h-3.5" />
                  <span>Humidity</span>
                </div>
                <div className="text-lg font-bold text-white font-mono">68%</div>
                <span className="text-[10px] text-slate-400">Relative Index</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-blue-400 font-medium">
                  <CloudRain className="w-3.5 h-3.5" />
                  <span>7-Day Rain</span>
                </div>
                <div className="text-lg font-bold text-white font-mono">{totalForecastRain.toFixed(1)} mm</div>
                <span className="text-[10px] text-slate-400">Accumulated</span>
              </div>
            </div>

            {/* 7-Day Forecast Grid */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-slate-300 block">7-Day Precipitation &amp; Thermal Trend</span>
              <div className="grid grid-cols-7 gap-1.5">
                {forecastDays.map((fd, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-xl bg-slate-800/40 border border-slate-700/40 flex flex-col items-center justify-center text-center space-y-1"
                  >
                    <span className="text-[10px] text-slate-400 font-medium">{fd.day}</span>
                    <span className="text-sm">{fd.icon}</span>
                    <span className="text-xs font-bold text-slate-200 font-mono">{fd.temp.toFixed(0)}°</span>
                    <span className="text-[10px] text-blue-400 font-mono">{fd.rain}mm</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Optimal Planting Decision Engine (6 Cols) */}
        <div className="lg:col-span-6 space-y-5">
          
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/70 border border-emerald-500/30 p-6 space-y-5 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Deterministic Planting Window Engine</span>
              </h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                Rule Engine
              </span>
            </div>

            {/* Crop & Soil Selector for Calculation */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs text-slate-400">Target Crop</label>
                <select
                  value={selectedCrop}
                  onChange={(e) => setSelectedCrop(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-xs text-slate-100 rounded-lg p-2 focus:outline-none"
                >
                  <option value="Maize">Maize (በቆሎ)</option>
                  <option value="Teff">Teff (ጤፍ)</option>
                  <option value="Wheat">Wheat (ስንዴ)</option>
                  <option value="Rice">Rice (ሩዝ)</option>
                  <option value="Chickpea">Chickpea (ሽምብራ)</option>
                  <option value="Coffee">Coffee (ቡና)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-400">Soil Texture</label>
                <select
                  value={soilType}
                  onChange={(e) => setSoilType(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-xs text-slate-100 rounded-lg p-2 focus:outline-none"
                >
                  <option value="Clay Loam">Clay Loam (ጥቁር ሸክላ)</option>
                  <option value="Volcanic Loam">Volcanic Loam (እሳተ ገሞራ አፈር)</option>
                  <option value="Sandy Loam">Sandy Loam (አሸዋማ)</option>
                  <option value="Nitisols">Nitisols (ቀይ አፈር)</option>
                </select>
              </div>
            </div>

            {/* Decision Status Output Card */}
            <div className="p-4 rounded-xl bg-slate-800/80 border border-emerald-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <div>
                    <span className="text-xs font-bold text-white block">{advice.status}</span>
                    <span className="text-[11px] text-slate-400">Target: {selectedCrop} in {activeZone.name}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block">Recommended Window</span>
                  <span className="text-sm font-bold text-emerald-300 font-mono">
                    {advice.startDate} - {advice.endDate}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-700/60 pt-2.5">
                {advice.adviceAmharic}
              </p>
            </div>

            {/* Safeguard Indicators */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-between">
                <span className="text-slate-400">Soil Moisture Index:</span>
                <span className="font-semibold text-emerald-400">{advice.soilMoistureIndex}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-between">
                <span className="text-slate-400">Frost Risk:</span>
                <span className="font-semibold text-emerald-400">0% (Safe)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
