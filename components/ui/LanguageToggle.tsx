"use client";

import { useLanguage } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface LanguageToggleProps {
  className?: string;
  scrolled?: boolean;
}

export function LanguageToggle({ className, scrolled = true }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={cn('flex items-center gap-1 text-sm', className)}>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          'px-2 py-1 transition-colors duration-300',
          language === 'en'
            ? scrolled ? 'text-black font-medium' : 'text-white font-medium'
            : scrolled ? 'text-gray-400 hover:text-gray-600' : 'text-white/50 hover:text-white/80'
        )}
        aria-pressed={language === 'en'}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className={scrolled ? 'text-gray-300' : 'text-white/30'}>|</span>
      <button
        onClick={() => setLanguage('da')}
        className={cn(
          'px-2 py-1 transition-colors duration-300',
          language === 'da'
            ? scrolled ? 'text-black font-medium' : 'text-white font-medium'
            : scrolled ? 'text-gray-400 hover:text-gray-600' : 'text-white/50 hover:text-white/80'
        )}
        aria-pressed={language === 'da'}
        aria-label="Switch to Danish"
      >
        DA
      </button>
    </div>
  );
}
