import React from 'react';
import { useLanguage } from '../locales/LanguageContext';
import { Button } from './ui/button';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2 bg-black/100 backdrop-blur-sm rounded-lg p-1">
      <Button
        variant="ghost"
        onClick={() => setLanguage('en')}
        className={`w-12 h-10 text-sm font-semibold transition-all ${
          language === 'en' 
            ? 'bg-cyan-500 text-white hover:bg-cyan-600' 
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        onClick={() => setLanguage('ru')}
        className={`w-12 h-10 text-sm font-semibold transition-all ${
          language === 'ru' 
            ? 'bg-cyan-500 text-white hover:bg-cyan-600' 
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
      >
        RU
      </Button>
      <Button
        variant="ghost"
        onClick={() => setLanguage('kz')}
        className={`w-12 h-10 text-sm font-semibold transition-all ${
          language === 'kz' 
            ? 'bg-cyan-500 text-white hover:bg-cyan-600' 
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
      >
        KZ
      </Button>
    </div>
  );
};