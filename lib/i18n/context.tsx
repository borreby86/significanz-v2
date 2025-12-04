"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Language, LanguageContextType, TranslationKeys } from './types';
import { translations } from './translations';

const STORAGE_KEY = 'significanz-language';
const DEFAULT_LANGUAGE: Language = 'en';

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = useState(false);

  // Load saved preference on mount (client-side only)
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved && (saved === 'en' || saved === 'da')) {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  // Persist language changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  };

  const t: TranslationKeys = translations[language];

  // Prevent hydration mismatch by always using default language until mounted
  const contextValue: LanguageContextType = {
    language: mounted ? language : DEFAULT_LANGUAGE,
    setLanguage,
    t: mounted ? t : translations[DEFAULT_LANGUAGE],
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function useTranslation() {
  const { t, language } = useLanguage();
  return { t, language };
}
