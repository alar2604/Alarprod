import { getDictionary, Locale } from '@/i18n/settings';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoordinatorsContainer from '@/components/coordinators/CoordinatorsContainer';

export const metadata: Metadata = {
  title: 'Coordinators | Alar Veliyeedu',
  description: 'Find Alar Veliyeedu coordinators in your city.',
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ta' }];
}

export default async function CoordinatorsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main className="flex-1 bg-white">
        <CoordinatorsContainer dict={dict} lang={lang} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
