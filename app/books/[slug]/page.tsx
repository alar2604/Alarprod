import { getDictionary } from '@/i18n/settings';
import { books } from '@/data/books';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import BookDetailsTabs from '@/components/BookDetailsTabs';

// Generate static params for all books (no lang param needed as this is root/ta)
export async function generateStaticParams() {
  return books.map((book) => ({
    slug: book.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const lang = 'ta';
  const book = books.find((b) => b.id === slug);
  
  if (!book) return { title: 'புத்தகம் காணப்படவில்லை' };

  const title = (book.title as any)[lang];
  const description = (book.desc as any)[lang];

  return {
    title: `${title} | அலர் வெளியீடு`,
    description: description,
    openGraph: {
      title: `${title} | அலர் வெளியீடு`,
      description: description,
      images: [book.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | அலர் வெளியீடு`,
      description: description,
      images: [book.image],
    },
  };
}

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lang = 'ta'; // Hardcoded for root
  const dict = await getDictionary(lang);
  
  const book = books.find((b) => b.id === slug);

  if (!book) {
    return <div>Book not found</div>;
  }

  const title = (book.title as any)[lang];

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main className="flex-1 min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
           {/* Breadcrumb */}
           <div className="mb-6 text-sm text-neutral-500">
             <Link href="/" className="hover:text-black">{dict.nav.home}</Link> / 
             <Link href="/#books" className="hover:text-black mx-1">{dict.nav.books}</Link> / 
             <span className="text-black mx-1">{title}</span>
           </div>

           <BookDetailsTabs book={book} dict={dict} lang={lang} />
        </div>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
