import React from 'react';
import Service from '../components/services';

export default function HomePage({ params }: { params: { lang: string } }) {
  const lang = params.lang; // Use the language from the URL parameter
  
  return (
    <div>
      <h1>{lang === 'bn' ? 'বাংলা হোমপেজ' : 'English Homepage'}</h1>
      <p>{lang === 'bn' ? 'এটি আমাদের ওয়েবসাইটের বাংলা সংস্করণ।' : 'This is the English version of our website.'}</p>
      
      {/* Include the Service component */}
      <Service lang={lang} />
    </div>
  );
}
