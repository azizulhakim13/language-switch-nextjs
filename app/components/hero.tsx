import React from 'react';

interface HeroProps {
  lang: string; // Add the lang prop to accept the language
}

export default function Hero({ lang }: HeroProps) {
  const isBengali = lang === 'bn';

  return (
    <section className="hero">
      <h1>{isBengali ? 'আমাদের ওয়েবসাইটে স্বাগতম' : 'Welcome to Our Website'}</h1>
      <p>
        {isBengali
          ? 'আপনার জন্য সেরা পরিষেবা এবং পণ্যগুলির প্রবেশদ্বার।'
          : 'Your gateway to the best services and products.'}
      </p>
    </section>
  );
}
