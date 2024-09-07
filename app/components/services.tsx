import React from 'react';

interface ServicesProps {
  lang: string; // Add the lang prop to accept the language
}

export default function Services({ lang }: ServicesProps) {
  const isBengali = lang === 'bn';

  return (
    <section className="services">
      <h2>{isBengali ? 'আমাদের পরিষেবা' : 'Our Services'}</h2>
      <ul>
        <li>{isBengali ? 'পরিষেবা ১: পরিষেবা ১-এর বর্ণনা' : 'Service 1: Description of service 1'}</li>
        <li>{isBengali ? 'পরিষেবা ২: পরিষেবা ২-এর বর্ণনা' : 'Service 2: Description of service 2'}</li>
        <li>{isBengali ? 'পরিষেবা ৩: পরিষেবা ৩-এর বর্ণনা' : 'Service 3: Description of service 3'}</li>
      </ul>
    </section>
  );
}
