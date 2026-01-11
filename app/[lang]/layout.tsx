import type { Metadata } from 'next';
import { Fraunces, Nunito } from 'next/font/google';
import '../globals.css';
import { locales } from '@/i18n/settings';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Alar Veliyeedu Books - Tamil Books, Authors & Literary Events',
  description: 'Alar Veliyeedu - Quality Tamil books, new releases, award-winning fiction, non-fiction and children\'s books. Read from leading Tamil publishers.',
  verification: {
    google: 'googlef9a309a900abd01c',
  },
  openGraph: {
    title: 'Alar Veliyeedu Books',
    description: 'Quality Tamil books, new releases, and literary events.',
    url: 'https://alarveliyeedu.com/en',
    siteName: 'Alar Veliyeedu',
    images: [
      {
        url: '/images/alarlogo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alar Veliyeedu Books',
    description: 'Quality Tamil books, new releases, and literary events.',
    images: ['/images/alarlogo.png'],
  },
  icons: {
    icon: '/favicon.png',
  },
  keywords: ['Tamil Books Online', 'Buy Tamil Books', 'Indian Literature', 'Alar Veliyeedu', 'English Translations of Tamil Books', 'Classic Tamil Novels', 'Contemporary Tamil Literature'],
};

// Only generate params for 'en', as 'ta' is at root
export async function generateStaticParams() {
  return [{ lang: 'en' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  return (
    <html lang={(await params).lang} className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
