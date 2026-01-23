import type { Metadata } from 'next';
import { JetBrains_Mono, Outfit } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ChadF // V4V × Nostr × PC2.0',
  description:
    'Building Value4Value apps, Nostr bots, and Podcasting 2.0 tools. Lightning-powered music platforms and open-source projects.',
  keywords: [
    'Value4Value',
    'V4V',
    'Nostr',
    'Podcasting 2.0',
    'Bitcoin Lightning',
    'WebLN',
  ],
  authors: [{ name: 'ChadF' }],
  openGraph: {
    title: 'ChadF // V4V × Nostr × PC2.0',
    description:
      'Building Value4Value apps, Nostr bots, and Podcasting 2.0 tools.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
