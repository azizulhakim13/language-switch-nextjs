import React from 'react';

interface ServiceProps {
  lang: string; // This prop determines which language to display
}

export default function Service({ lang }: ServiceProps) {
  return (
    <section>
      <h2>{lang === 'bn' ? 'আমাদের পরিষেবা' : 'Our Services'}</h2>
      <ul>
        {lang === 'bn' ? (
          <>
            <li>পরিষেবা ১: বিবরণ</li>
            <li>পরিষেবা ২: বিবরণ</li>
            <li>পরিষেবা ৩: বিবরণ</li>
          </>
        ) : (
          <>
            <li>Service 1: Description</li>
            <li>Service 2: Description</li>
            <li>Service 3: Description</li>
          </>
        )}
      </ul>
    </section>
  );
}
