"use client";

import { useLanguage } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={cn('flex items-center gap-1 text-sm', className)}>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          'px-2 py-1 transition-colors duration-300',
          language === 'en'
            ? 'text-black font-medium'
            : 'text-gray-400 hover:text-gray-600'
        )}
        aria-pressed={language === 'en'}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => setLanguage('da')}
        className={cn(
          'px-2 py-1 transition-colors duration-300',
          language === 'da'
            ? 'text-black font-medium'
            : 'text-gray-400 hover:text-gray-600'
        )}
        aria-pressed={language === 'da'}
        aria-label="Switch to Danish"
      >
        DA
      </button>
    </div>
  );
}
