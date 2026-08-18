import { getDictionary, Locale } from '@/i18n/settings';
import { books } from '@/data/books';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PanaiLanding from '@/components/PanaiLanding';

const BOOK_ID = 'pazhampadu-panai';

export async function generateStaticParams() {
  return [{ lang: 'en' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const book = books.find((b) => b.id === BOOK_ID);
  const title = (book?.title as any)?.[lang] || (book?.title as any)?.en;
  const description = (book?.desc as any)?.[lang] || '';

  return {
    title: `${title} | Alar Veliyeedu`,
    description,
    openGraph: {
      title: `${title} | Alar Veliyeedu`,
      description,
      images: [book?.image || ''],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Alar Veliyeedu`,
      description,
      images: [book?.image || ''],
    },
  };
}

export default async function PazhampaduPanaiPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const book = books.find((b) => b.id === BOOK_ID);

  if (!book) return <div>Book not found</div>;

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main className="flex-1 bg-[#FAF8F5]">
        <PanaiLanding book={book as any} lang={lang} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
