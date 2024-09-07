"use client";
import { Lato } from "next/font/google";
import "./css/style.scss";

import 'swiper/css';
import BootstrapClient from './components/BootstrapClient'

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Nav from './components/nav'; // Import the Nav component

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState('en'); // Default to English

  // Detect the current language from the URL or localStorage on initial load
  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage'); // Check localStorage
    if (storedLanguage && pathname.startsWith(`/${storedLanguage}`)) {
      setLanguage(storedLanguage); // Set language from localStorage
    } else if (pathname.startsWith('/bn')) {
      setLanguage('bn'); // Set to Bengali if the URL starts with /bn
    } else {
      setLanguage('en'); // Otherwise, set to English
    }
  }, [pathname]);

  // Handle language change and navigate to the correct URL
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value;
    const currentPath = pathname.replace(/^\/(en|bn)/, ''); // Remove the current language prefix

    // Save the selected language to localStorage
    localStorage.setItem('selectedLanguage', newLang);

    // Redirect to the selected language
    if (newLang === 'en') {
      router.push(`/en${currentPath}`);
    } else {
      router.push(`/bn${currentPath}`);
    }
  };

  return (
    <html lang={language}>
      <body className={lato.className}>
        {/* Include the Nav component and pass props */}
        <Nav language={language} handleLanguageChange={handleLanguageChange} />

        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
