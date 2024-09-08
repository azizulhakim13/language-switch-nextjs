import React from 'react';

interface AboutProps {
  lang: string;
}

export default function About({ lang }: AboutProps) {
  return (
    <section className="about">
      <h2>{lang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}</h2>
      <p>
        {lang === 'bn'
          ? 'আমরা উচ্চ মানের পণ্য এবং পরিষেবা প্রদান করি।'
          : 'We provide high-quality products and services.'}
      </p>
    </section>
  );
}
