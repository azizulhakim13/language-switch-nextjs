'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from './context/LanguageContext';
import { getTranslation } from './lib/getTranslation';

export default function HomePage() {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const loadTranslations = async () => {
      const fetchedTranslations = await getTranslation(language);
      setTranslations(fetchedTranslations);
    };
    loadTranslations();
  }, [language]);

  return (
    <div>
      <h1>{translations?.home?.welcome}</h1>
    </div>
  );
}
