import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';
import { UserProgress } from '../types';

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId || undefined);
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.warn('Google sign-in popup prevented or canceled, falling back to guest session:', error);
    try {
      const anon = await signInAnonymously(auth);
      return anon.user;
    } catch (anonErr) {
      console.error('Anonymous sign in error:', anonErr);
      return null;
    }
  }
};

export const loginAsGuest = async (): Promise<User | null> => {
  try {
    const anon = await signInAnonymously(auth);
    return anon.user;
  } catch (error) {
    console.error('Guest login failed:', error);
    return null;
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Sign out error:', error);
  }
};

export const loadUserProgress = async (userId: string): Promise<UserProgress> => {
  const defaultProgress: UserProgress = {
    completedDays: [1], // Day 1 active
    currentDay: 1,
    quizScores: {},
    notes: {},
    lastActive: new Date().toISOString(),
  };

  try {
    // Try localStorage fallback first or local state
    const local = localStorage.getItem(`agri_progress_${userId}`);
    if (local) {
      try {
        return JSON.parse(local);
      } catch (e) {
        // ignore
      }
    }

    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data() as UserProgress;
      localStorage.setItem(`agri_progress_${userId}`, JSON.stringify(data));
      return data;
    } else {
      await setDoc(docRef, defaultProgress);
      localStorage.setItem(`agri_progress_${userId}`, JSON.stringify(defaultProgress));
      return defaultProgress;
    }
  } catch (err) {
    console.warn('Firestore fetch fallback to local cache:', err);
    const local = localStorage.getItem(`agri_progress_${userId}`);
    return local ? JSON.parse(local) : defaultProgress;
  }
};

export const saveUserProgress = async (userId: string, progress: UserProgress): Promise<void> => {
  try {
    localStorage.setItem(`agri_progress_${userId}`, JSON.stringify(progress));
    const docRef = doc(db, 'users', userId);
    await setDoc(docRef, progress, { merge: true });
  } catch (err) {
    console.warn('Could not sync progress to Firestore, preserved in local storage:', err);
  }
};
