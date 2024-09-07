import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define supported languages
const supportedLanguages = ['en', 'bn'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignore requests to assets and static files
  if (pathname.startsWith('/_next') || pathname.includes('.')) {
    return NextResponse.next();
  }

  // Check if the pathname already includes a language prefix
  const langPrefix = pathname.split('/')[1];

  // If no valid language prefix is found, redirect to default language ('en')
  if (!supportedLanguages.includes(langPrefix)) {
    const defaultLang = 'en'; // Set the default language
    return NextResponse.redirect(new URL(`/${defaultLang}${pathname}`, req.url));
  }

  // Otherwise, continue with the request
  return NextResponse.next();
}
