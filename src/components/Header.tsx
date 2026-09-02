import React from 'react';
import { Sprout, Award, CheckCircle2, Volume2, VolumeX, User as UserIcon, Sparkles, BookOpen, Bot, Cpu, CloudSun, Stethoscope, Code2, LogIn, LogOut } from 'lucide-react';
import { User } from 'firebase/auth';
import { UserProgress } from '../types';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  progress: UserProgress;
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  currentDay: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  progress,
  user,
  onLogin,
  onLogout,
  isMuted,
  setIsMuted,
  currentDay,
}) => {
  const completedCount = progress.completedDays.length;
  const progressPercent = Math.min(100, Math.round((completedCount / 15) * 100));

  const navItems = [
    { id: 'roadmap', label: '15-Day Classroom', icon: BookOpen, badge: `Day ${currentDay}` },
    { id: 'chat', label: 'AI Mentor Chat', icon: Bot, highlight: true },
    { id: 'ml-recommender', label: '1. Crop Recommender', icon: Cpu },
    { id: 'weather-planting', label: '2 & 3. Weather & Planting', icon: CloudSun },
    { id: 'crop-care', label: '4. Gemini Crop Care', icon: Stethoscope },
    { id: 'playground', label: 'Python Lab', icon: Code2 },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-xl">
      {/* Top Banner with System Identity & Mentorship Status */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-900/30 text-white">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  Agri-Smart AI System
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium border border-emerald-500/30">
                    15-Day Master Roadmap
                  </span>
                </h1>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Senior Agri-Tech AI Mentor for <strong className="text-slate-200">Melaku</strong>
              </p>
            </div>
          </div>

          {/* Progress & Controls */}
          <div className="flex items-center flex-wrap gap-2 w-full md:w-auto justify-between md:justify-end">
            {/* 15-Day Progress Bar Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs">
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{completedCount}/15 Days</span>
              </div>
              <div className="w-20 bg-slate-700 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="font-mono text-emerald-400 font-semibold">{progressPercent}%</span>
            </div>

            {/* TTS Mute Toggle */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              title={isMuted ? 'Unmute Audio Assistance' : 'Mute Audio Assistance'}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>

            {/* User Auth Info / Sync */}
            {user ? (
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-200">
                <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white uppercase">
                  {user.displayName ? user.displayName[0] : 'M'}
                </div>
                <span className="max-w-[100px] truncate font-medium">{user.displayName || 'Melaku'}</span>
                <button
                  onClick={onLogout}
                  title="Sign out"
                  className="text-slate-400 hover:text-rose-400 p-0.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={onLogin}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-all"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Save Progress (Sign In)</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="flex items-center gap-1.5 overflow-x-auto pt-3 pb-1 border-t border-slate-800/80 mt-2 scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-emerald-400 font-mono border border-slate-700">
                    {item.badge}
                  </span>
                )}
                {item.highlight && (
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
