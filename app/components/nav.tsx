import React from 'react';

interface NavProps {
  language: string;
  onLanguageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Nav({ language, onLanguageChange }: NavProps) {
  return (
    <nav>
      <ul>
        <li><a href={language === 'bn' ? '/' : '/en'}>Home</a></li>
        {/* Add other navigational links here, like About, Services, etc. */}
      </ul>

      {/* Language Selector Dropdown */}
      <select onChange={onLanguageChange} value={language}>
        <option value="bn">বাংলা</option>
        <option value="en">English</option>
      </select>
    </nav>
  );
}
