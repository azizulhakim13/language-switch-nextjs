import React from 'react';

interface ServicesProps {
  lang: string;
}

export default function Services({ lang }: ServicesProps) {
  return (
    <section className="services">
      <h2>{lang === 'bn' ? 'আমাদের পরিষেবা' : 'Our Services'}</h2>
      <ul>
        <li>{lang === 'bn' ? 'পরিষেবা ১' : 'Service 1'}</li>
        <li>{lang === 'bn' ? 'পরিষেবা ২' : 'Service 2'}</li>
        <li>{lang === 'bn' ? 'পরিষেবা ৩' : 'Service 3'}</li>
      </ul>
    </section>
  );
}
