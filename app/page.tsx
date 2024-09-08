import React from 'react';
import Service from './components/services';

export default function HomePage() {
  const lang = 'bn'; // Hardcoding Bengali as it's the default homepage
  
  return (
    <div>
      <h1>বাংলা হোমপেজ</h1>
      <p>এটি আমাদের ওয়েবসাইটের বাংলা সংস্করণ।</p>
      
      {/* Include the Service component */}
      <Service lang={lang} />
    </div>
  );
}
