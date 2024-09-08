"use client";

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Nav from './components/nav'; // Import the Nav component

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path
  const [language, setLanguage] = useState('bn'); // Default to Bengali

  // Detect language from the URL
  useEffect(() => {
    if (pathname.startsWith('/en')) {
      setLanguage('en'); // English content for `/en`
    } else {
      setLanguage('bn'); // Default to Bengali
    }
  }, [pathname]);

  // Handle language change in Nav component
  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang); // Update the language state
    if (newLang === 'en') {
      router.push('/en'); // Redirect to English version
    } else {
      router.push('/'); // Redirect to Bengali version
    }
  };

  return (
    <html lang={language}>
      <body>
        {/* Navigation with language switcher */}
        <Nav lang={language} onLanguageChange={handleLanguageChange} />
        {children} {/* Content will be rendered here */}
      </body>
    </html>
  );
}
