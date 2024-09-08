import React from 'react';
import Link from 'next/link';
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
      return '/en' + (pathname === '/' ? '' : pathname); // If on '/', switch to '/en'
    } else {
      return pathname === '/en' ? '/' : pathname.replace(/^\/en/, ''); // Switch from '/en' to root or appropriate path
    }
  };

  return (
    <nav>
      <ul>
        {/* Dynamic links based on language */}
        <li><Link href={lang === 'bn' ? '/' : '/en'}>Home</Link></li>
        <li><Link href={lang === 'bn' ? '/about' : '/en/about'}>About</Link></li>
        <li><Link href={lang === 'bn' ? '/services' : '/en/services'}>Services</Link></li>
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
