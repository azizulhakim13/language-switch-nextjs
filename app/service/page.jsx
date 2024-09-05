'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../lib/getTranslation';

export default function ServicesPage() {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    const loadTranslations = async () => {
      const fetchedTranslations = await getTranslation(language);
      setTranslations(fetchedTranslations);
    };
    loadTranslations();
  }, [language]);

  if (!translations) {
    return <p>Loading...</p>;
  }

  // Convert services to an array for easy iteration
  const servicesArray = Object.values(translations.services);

  return (
    <div>
      <h1>Our Services</h1>
      <div>
        {servicesArray.map((service, index) => (
          <div key={index} className="service">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
