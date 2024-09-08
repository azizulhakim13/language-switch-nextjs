"use client";

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Nav from './components/nav'; // Import your language switcher component

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState('bn'); // Default to Bengali

  // Dynamically set the <html> lang attribute based on the current route
  useEffect(() => {
    if (pathname.startsWith('/en')) {
      document.documentElement.lang = 'en'; // English page
      setLanguage('en');
    } else {
      document.documentElement.lang = 'bn'; // Bengali page
      setLanguage('bn');
    }
  }, [pathname]);

  // Handle language switching between Bengali and English
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value;
    if (newLang === 'en') {
      router.push('/en');
    } else {
      router.push('/');
    }
  };

  return (
    <html lang={language}>
      <body>
        {/* Render the navigation with language switcher */}
        <Nav language={language} onLanguageChange={handleLanguageChange} />
        {children} {/* Render page-specific content */}
      </body>
    </html>
  );
}
