import { getDictionary } from '@/i18n/settings';
import { books } from '@/data/books';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PanaiLanding from '@/components/PanaiLanding';

const BOOK_ID = 'pazhampadu-panai';

export async function generateMetadata(): Promise<Metadata> {
  const book = books.find((b) => b.id === BOOK_ID);
  const title = (book?.title as any)?.ta || 'பழம்படு பனை';
  const description = (book?.desc as any)?.ta || '';

  return {
    title: `${title} | அலர் வெளியீடு`,
    description,
    openGraph: {
      title: `${title} | அலர் வெளியீடு`,
      description,
      images: [book?.image || ''],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | அலர் வெளியீடு`,
      description,
      images: [book?.image || ''],
    },
  };
}

export default async function PazhampaduPanaiPage() {
  const lang = 'ta';
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
