import { getDictionary } from '@/i18n/settings';
import type { Locale } from '@/i18n/settings';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import BookList from '@/components/BookList';
import ComingSoon from '@/components/ComingSoon';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main className="flex-1 relative">
        <Hero dict={dict} lang={lang} />
        <About dict={dict} />
        <BookList dict={dict} lang={lang} />
        <ComingSoon dict={dict} lang={lang} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
