'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from './context/LanguageContext';
import { getTranslation } from './lib/getTranslation';

interface Translations {
  home: {
    welcome: string;
  };
}

export default function HomePage() {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState<Translations | null>(null);

  useEffect(() => {
    const loadTranslations = async () => {
      const fetchedTranslations = await getTranslation(language);
      setTranslations(fetchedTranslations);
    };
    loadTranslations();
  }, [language]);

  if (!translations) {
    return <p>Loading...</p>; // Display this while translations are loading
  }

  return (
    <div>
      <h1>{translations.home.welcome}</h1>
    </div>
  );
}
