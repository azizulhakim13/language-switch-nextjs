import React from 'react';

interface HeroProps {
  lang: string; // Accepts 'bn' for Bengali or 'en' for English
}

export default function Hero({ lang }: HeroProps) {
  return (
    <section className="hero">
      {lang === 'bn' ? (
        <>
          <h1>আমাদের ওয়েবসাইটে স্বাগতম</h1>
          <p>বাংলায় সেরা পরিষেবা এবং পণ্যগুলি অন্বেষণ করুন।</p>
        </>
      ) : (
        <>
          <h1>Welcome to Our Website</h1>
          <p>Explore the best services and products in English.</p>
        </>
      )}
    </section>
  );
}
