import { getDictionary, Locale } from '@/i18n/settings';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamContainer from '@/components/team/TeamContainer';

export const metadata: Metadata = {
  title: 'Our Team | Alar Veliyeedu',
  description: 'Meet the curators, editors, typographers, and field coordinators behind Alar Veliyeedu.',
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ta' }];
}

export default async function TeamPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main className="flex-1 bg-[#FAF8F5]">
        <TeamContainer dict={dict} lang={lang} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
