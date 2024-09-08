import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Canonical tag for default homepage */}
        <link rel="canonical" href="http://localhost:3000/" />

        {/* Use hrefLang instead of hreflang */}
        <link rel="alternate" href="http://localhost:3000/" hrefLang="bn" /> {/* Bengali */}
        <link rel="alternate" href="http://localhost:3000/en" hrefLang="en" /> {/* English */}

        {/* Add more hreflang tags if you expand to more languages */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
