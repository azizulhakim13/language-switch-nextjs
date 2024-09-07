import React from 'react';

interface TestimonialsProps {
  lang: string; // Add the lang prop to accept the language
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const isBengali = lang === 'bn';

  return (
    <section className="testimonials">
      <h2>{isBengali ? 'আমাদের ক্লায়েন্টরা কি বলে' : 'What Our Clients Say'}</h2>
      <blockquote>
        {isBengali
          ? '"এই কোম্পানিটি সেরা পরিষেবা প্রদান করেছে! অত্যন্ত সুপারিশকৃত।"'
          : '"This company provided the best services! Highly recommended."'}
      </blockquote>
      <blockquote>
        {isBengali
          ? '"আমরা পেশাদারিত্ব এবং বিশদ প্রতি মনোযোগ নিয়ে অত্যন্ত সন্তুষ্ট।"'
          : '"We were extremely satisfied with the professionalism and attention to detail."'}
      </blockquote>
    </section>
  );
}
