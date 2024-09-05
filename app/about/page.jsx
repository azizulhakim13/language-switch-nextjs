'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../lib/getTranslation';

export default function AboutPage() {
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
      <h1>{translations?.about?.description}</h1>
      <div className='m-3'>
        <a href="#" className='btn btn-dark'>{translations?.about?.description}</a>
      </div>
    </div>
  );
}
