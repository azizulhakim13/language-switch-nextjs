import { ReactNode } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import LanguageSelector from './components/LanguageSelector';
import "./css/style.scss";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className='container'>
        <LanguageProvider>
          
          <nav>
            <ul className='list-unstyled d-flex flex-wrap gap-4 py-4 border-bottom'>
              <li><a href="/">Home</a></li>
              <li><a href="/about">about</a></li>
              <li><a href="/service">Services</a></li>
              <li><LanguageSelector /></li>
            </ul>
          </nav>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
