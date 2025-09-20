import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Session, User } from '@supabase/supabase-js';

type Theme = 'light' | 'dark';
type FontSize = 'sm' | 'base' | 'lg' | 'xl';

interface UserProgress {
  completedDays: number[];
  favorites: number[];
  notes: { [key: number]: string };
  quizAnswers: { [key: number]: { [key: number]: string } };
}

interface AppContextType {
  session: Session | null;
  user: User | null;
  theme: Theme;
  toggleTheme: () => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  progress: UserProgress;
  updateProgress: (day: number) => Promise<void>;
  toggleFavorite: (day: number) => Promise<void>;
  updateNote: (day: number, note: string) => Promise<void>;
  updateQuizAnswer: (day: number, questionIndex: number, answer: string) => Promise<void>;
  loading: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  const [theme, setTheme] = useState<Theme>('light');
  const [fontSize, setFontSize] = useState<FontSize>('base');
  const [progress, setProgress] = useState<UserProgress>({
    completedDays: [],
    favorites: [],
    notes: {},
    quizAnswers: {},
  });

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    };
    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        if (_event === 'SIGNED_OUT') {
          setProgress({ completedDays: [], favorites: [], notes: {}, quizAnswers: {} });
          setTheme('light');
          setFontSize('base');
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);
  
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    document.body.className = `bg-stone-50 dark:bg-gray-900 font-size-${fontSize}`;
  }, [fontSize]);

  const fetchUserData = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const [progressRes, favoritesRes, notesRes, quizRes, profileRes] = await Promise.all([
        supabase.from('progress').select('day_id').eq('user_id', user.id),
        supabase.from('favorites').select('day_id').eq('user_id', user.id),
        supabase.from('notes').select('day_id, content').eq('user_id', user.id),
        supabase.from('quiz_answers').select('day_id, question_index, answer').eq('user_id', user.id),
        supabase.from('profiles').select('*').eq('id', user.id).single(),
      ]);

      if (profileRes.data) {
        setTheme((profileRes.data as any).theme as Theme || 'light');
        setFontSize((profileRes.data as any).font_size as FontSize || 'base');
      }

      const newProgress: UserProgress = {
        completedDays: progressRes.data?.map(p => p.day_id) || [],
        favorites: favoritesRes.data?.map(f => f.day_id) || [],
        notes: notesRes.data?.reduce((acc, note) => ({ ...acc, [note.day_id]: note.content }), {}) || {},
        quizAnswers: quizRes.data?.reduce((acc, qa) => {
          if (!acc[qa.day_id]) acc[qa.day_id] = {};
          acc[qa.day_id][qa.question_index] = qa.answer || '';
          return acc;
        }, {} as UserProgress['quizAnswers']) || {},
      };
      setProgress(newProgress);

    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const updatePreference = async (key: 'theme' | 'font_size', value: string) => {
    if (!user) return;
    await supabase.from('profiles').upsert({ id: user.id, [key]: value });
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    updatePreference('theme', newTheme);
  };
  
  const handleSetFontSize = (size: FontSize) => {
    setFontSize(size);
    updatePreference('font_size', size);
  }

  const updateProgress = async (day: number) => {
    if (!user || progress.completedDays.includes(day)) return;
    setProgress(prev => ({ ...prev, completedDays: [...new Set([...prev.completedDays, day])] }));
    await supabase.from('progress').upsert({ user_id: user.id, day_id: day });
  };

  const toggleFavorite = async (day: number) => {
    if (!user) return;
    const isFavorite = progress.favorites.includes(day);
    setProgress(prev => ({
      ...prev,
      favorites: isFavorite ? prev.favorites.filter(d => d !== day) : [...prev.favorites, day],
    }));
    if (isFavorite) {
      await supabase.from('favorites').delete().match({ user_id: user.id, day_id: day });
    } else {
      await supabase.from('favorites').upsert({ user_id: user.id, day_id: day });
    }
  };

  const updateNote = async (day: number, note: string) => {
    if (!user) return;
    setProgress(prev => ({ ...prev, notes: { ...prev.notes, [day]: note } }));
    await supabase.from('notes').upsert({ user_id: user.id, day_id: day, content: note });
  };

  const updateQuizAnswer = async (day: number, questionIndex: number, answer: string) => {
    if (!user) return;
    setProgress(prev => ({
      ...prev,
      quizAnswers: {
        ...prev.quizAnswers,
        [day]: { ...(prev.quizAnswers[day] || {}), [questionIndex]: answer },
      },
    }));
    await supabase.from('quiz_answers').upsert(
      { user_id: user.id, day_id: day, question_index: questionIndex, answer: answer },
      { onConflict: 'user_id,day_id,question_index' }
    );
  };

  return (
    <AppContext.Provider value={{ session, user, theme, toggleTheme, fontSize, setFontSize: handleSetFontSize, progress, updateProgress, toggleFavorite, updateNote, updateQuizAnswer, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
