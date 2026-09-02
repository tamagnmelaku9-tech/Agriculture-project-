import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth, loginWithGoogle, loginAsGuest, logoutUser, loadUserProgress, saveUserProgress } from './lib/firebase';
import { UserProgress } from './types';
import { Header } from './components/Header';
import { RoadmapView } from './components/RoadmapView';
import { MentorChat } from './components/MentorChat';
import { SoilCropRecommender } from './components/SoilCropRecommender';
import { ClimatePlantingAdvisor } from './components/ClimatePlantingAdvisor';
import { CropCareDiagnosis } from './components/CropCareDiagnosis';
import { CodePlayground } from './components/CodePlayground';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('roadmap');
  const [user, setUser] = useState<User | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [chatPrefill, setChatPrefill] = useState<string>('');
  const [playgroundCode, setPlaygroundCode] = useState<string>('');
  const [playgroundDay, setPlaygroundDay] = useState<number>(1);
  const [cropCareInitialCrop, setCropCareInitialCrop] = useState<string>('Maize');

  // User progress across 15 days
  const [progress, setProgress] = useState<UserProgress>({
    completedDays: [1],
    currentDay: 1,
    quizScores: {},
    notes: {},
    lastActive: new Date().toISOString(),
  });

  // Track Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const loaded = await loadUserProgress(currentUser.uid);
        setProgress(loaded);
      }
    });
    return () => unsubscribe();
  }, []);

  // Update progress helper
  const handleUpdateProgress = async (updated: UserProgress) => {
    setProgress(updated);
    if (user) {
      await saveUserProgress(user.uid, updated);
    } else {
      localStorage.setItem('agri_progress_guest', JSON.stringify(updated));
    }
  };

  const handleLogin = async () => {
    const signedIn = await loginWithGoogle();
    if (signedIn) {
      setUser(signedIn);
      const loaded = await loadUserProgress(signedIn.uid);
      setProgress(loaded);
    }
  };

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
  };

  // Cross-module navigations
  const handleNavigateToTab = (tab: string, prefillPrompt?: string) => {
    if (prefillPrompt && tab === 'chat') {
      setChatPrefill(prefillPrompt);
    }
    setCurrentTab(tab);
  };

  const handleSendCodeToLab = (code: string, day: number) => {
    setPlaygroundCode(code);
    setPlaygroundDay(day);
    setCurrentTab('playground');
  };

  const handleNavigateToCropCare = (cropName: string) => {
    setCropCareInitialCrop(cropName);
    setCurrentTab('crop-care');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Persistent System Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        progress={progress}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        currentDay={progress.currentDay || 1}
      />

      {/* Main View Area */}
      <main className="flex-1 pb-12">
        {currentTab === 'roadmap' && (
          <RoadmapView
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            onNavigateToTab={handleNavigateToTab}
            onSendCodeToLab={handleSendCodeToLab}
          />
        )}

        {currentTab === 'chat' && (
          <MentorChat
            currentDay={progress.currentDay || 1}
            isMuted={isMuted}
            prefillMessage={chatPrefill}
            onSendCodeToLab={handleSendCodeToLab}
            onClearPrefill={() => setChatPrefill('')}
          />
        )}

        {currentTab === 'ml-recommender' && (
          <SoilCropRecommender
            onNavigateToCropCare={handleNavigateToCropCare}
          />
        )}

        {currentTab === 'weather-planting' && (
          <ClimatePlantingAdvisor />
        )}

        {currentTab === 'crop-care' && (
          <CropCareDiagnosis
            initialCrop={cropCareInitialCrop}
            isMuted={isMuted}
          />
        )}

        {currentTab === 'playground' && (
          <CodePlayground
            initialCode={playgroundCode}
            initialDay={playgroundDay}
            onAskMentor={(q) => handleNavigateToTab('chat', q)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-4 px-6 text-center text-xs text-slate-400 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Agri-Smart AI System &middot; 15-Day Master Learning Roadmap for Melaku</span>
          <span className="text-emerald-400/90 font-medium">Powered by Random Forest ML &amp; Gemini 3.7 Flash</span>
        </div>
      </footer>

    </div>
  );
}
