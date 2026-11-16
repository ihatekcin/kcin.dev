import type {Metadata} from 'next';
import {Geist, Geist_Mono, Newsreader} from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kcin.dev'),
  title: {
    default: 'Nick Luca — Portfolio',
    template: '%s',
  },
  description: 'Minimal portfolio by Nick Luca (kcin/ihatekcin), full-stack developer.',
  authors: [{ name: 'Nick Luca', url: 'https://kcin.dev' }],
  creator: 'Nick Luca',
  openGraph: {
    title: 'Nick Luca — Portfolio',
    description: 'Minimal portfolio by Nick Luca (kcin/ihatekcin).',
    url: 'https://kcin.dev',
    siteName: 'Nick Luca',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nick Luca — Portfolio',
    description: 'Minimal portfolio by Nick Luca (kcin/ihatekcin).',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <head>
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        />}
      </head>
      <body
        className="font-sans antialiased selection:bg-neutral-800 selection:text-neutral-100 dark:selection:bg-neutral-200 dark:selection:text-neutral-900"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
