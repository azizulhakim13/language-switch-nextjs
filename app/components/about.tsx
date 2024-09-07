import React from 'react';

interface AboutProps {
  lang: string; // Add the lang prop to accept the language
}

export default function About({ lang }: AboutProps) {
  const isBengali = lang === 'bn';

  return (
    <section className="about">
      <h2>{isBengali ? 'আমাদের সম্পর্কে' : 'About Us'}</h2>
      <p>
        {isBengali
          ? 'আমরা আপনার প্রয়োজন মেটাতে উচ্চ মানের পণ্য এবং পরিষেবা প্রদান করি।'
          : 'We provide high-quality products and services to meet your needs.'}
      </p>
    </section>
  );
}
