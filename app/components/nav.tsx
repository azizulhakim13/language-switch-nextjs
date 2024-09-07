import React from 'react';
import Link from 'next/link';

interface NavProps {
  language: string;
  handleLanguageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Nav({ language, handleLanguageChange }: NavProps) {
  return (
    <div className="nav">
      <div className="container">
        <ul className="list-unstyled">
          {/* Dynamically update the links based on the current language */}
          <li><Link href={`/${language}`}>Home</Link></li>
          <li><Link href={`/${language}/about`}>About</Link></li>
          <li><Link href={`/${language}/services`}>Services</Link></li>
          <li><Link href={`/${language}/contact`}>Contact</Link></li>
        </ul>

        {/* Language Selector */}
        <select onChange={handleLanguageChange} value={language}>
          <option value="en">English</option>
          <option value="bn">বাংলা</option>
        </select>
      </div>
    </div>
  );
}
