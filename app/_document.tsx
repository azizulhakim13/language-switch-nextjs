import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Canonical tag for default homepage */}
        <link rel="canonical" href="http://localhost:3000/" />

        {/* Hreflang tags with proper typing for React */}
        <link
          rel="alternate"
          href="http://localhost:3000/"
          hrefLang="bn-BD" // Note: Use "hrefLang" instead of "hreflang" to align with JSX/TSX standards
        />
        <link
          rel="alternate"
          href="http://localhost:3000/en"
          hrefLang="en-US" // Proper casing for JSX/TSX
        />

        {/* Add more hreflang tags for future languages if necessary */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
