import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface NavProps {
  lang: string;
  onLanguageChange: (newLang: string) => void;
}

export default function Nav({ lang, onLanguageChange }: NavProps) {
  const pathname = usePathname(); // Get the current URL path
  const router = useRouter();

  // Generate the correct path when switching languages
  const getLanguageSwitchPath = (newLang: string) => {
    if (newLang === 'en') {
      return '/en'; // Switch to English homepage
    } else {
      return '/'; // Switch to Bengali homepage
    }
  };

  return (
    <nav>
      <ul>
        {/* Only homepage link */}
        <li><a href={lang === 'bn' ? '/' : '/en'}>Home</a></li>
      </ul>

      {/* Language Switcher */}
      <select
        onChange={(event) => {
          const newLang = event.target.value;
          const newPath = getLanguageSwitchPath(newLang); // Get the correct path
          onLanguageChange(newLang); // Notify parent component of the language change
          router.push(newPath); // Navigate to the new path
        }}
        value={lang}
      >
        <option value="bn">বাংলা</option>
        <option value="en">English</option>
      </select>
    </nav>
  );
}
