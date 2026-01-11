import type { Metadata } from 'next';
import { Fraunces, Nunito } from 'next/font/google';
import './globals.css';

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
  title: 'அலர் வெளியீடு புத்தகங்கள் - தமிழ் புத்தகங்கள், எழுத்தாளர்கள் & இலக்கிய நிகழ்வுகள்',
  description: 'அலர் வெளியீடு - சிறந்த தமிழ் புத்தகங்கள், புதிய வெளியீடுகள், விருது பெற்ற புனைகதை, புனைவு அல்லாதவை மற்றும் சிறுவர் புத்தகங்கள். முன்னணி தமிழ் வெளியீட்டாளரிடமிருந்து வாசிக்கவும்.',
  verification: {
    google: 'googlef9a309a900abd01c',
  },
  openGraph: {
    title: 'அலர் வெளியீடு புத்தகங்கள்',
    description: 'சிறந்த தமிழ் புத்தகங்கள், புதிய வெளியீடுகள் மற்றும் இலக்கிய நிகழ்வுகள்.',
    url: 'https://alarveliyeedu.com',
    siteName: 'அலர் வெளியீடு',
    images: [
      {
        url: '/images/alarlogo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'ta_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'அலர் வெளியீடு புத்தகங்கள்',
    description: 'சிறந்த தமிழ் புத்தகங்கள், புதிய வெளியீடுகள் மற்றும் இலக்கிய நிகழ்வுகள்.',
    images: ['/images/alarlogo.png'],
  },
  icons: {
    icon: '/favicon.png',
  },
  keywords: ['அலர் வெளியீடு', 'தமிழ் புத்தகங்கள்', 'புதினம்', 'சிறுகதை', 'கவிதை', 'Tamil Books', 'Alar Veliyeedu', 'Tamil Literature', 'Tamil Novels'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ta" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
