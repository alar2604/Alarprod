import { getDictionary } from '@/i18n/settings';
import { books } from '@/data/books';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import BookDetailsTabs from '@/components/BookDetailsTabs';

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  const lang = 'en'; // Only generate for English
  books.forEach((book) => {
    params.push({ lang, slug: book.id });
  });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const book = books.find((b) => b.id === slug);
  
  if (!book) return { title: 'Book Not Found' };

  const title = (book.title as any)[lang];
  const description = (book.desc as any)[lang];

  return {
    title: `${title} | Alar Veliyeedu`,
    description: description,
    keywords: [title, 'Tamil Book', 'Alar Veliyeedu', 'Literature', 'Fiction'],
    openGraph: {
      title: `${title} | Alar Veliyeedu`,
      description: description,
      images: [book.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Alar Veliyeedu`,
      description: description,
      images: [book.image],
    },
  };
}

export default async function BookPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang as any);
  
  const book = books.find((b) => b.id === slug);

  if (!book) {
    return <div className="min-h-screen flex items-center justify-center">Book not found</div>;
  }

  const title = (book.title as any)[lang];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: title,
    description: (book.desc as any)[lang],
    image: `https://alarveliyeedu.com${book.image}`,
    url: `https://alarveliyeedu.com/${lang === 'en' ? 'en/' : ''}books/${slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Alar Veliyeedu',
      logo: {
        '@type': 'ImageObject',
        url: 'https://alarveliyeedu.com/images/alarlogo.png'
      }
    },
    offers: {
      '@type': 'Offer',
      price: (book.price?.toString().replace('₹', '') ?? '0'),
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header dict={dict} lang={lang} />
      <main className="flex-1 min-h-screen bg-gray-50 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
           {/* Breadcrumb */}
           <div className="mb-4 sm:mb-6 text-xs sm:text-sm text-neutral-500 flex items-center flex-wrap gap-1.5">
             <Link href={`/${lang}`} className="hover:text-black transition-colors shrink-0">{dict.nav.home}</Link>
             <span className="text-neutral-400">/</span>
             <Link href={`/${lang}#books`} className="hover:text-black transition-colors shrink-0">{dict.nav.books}</Link>
             <span className="text-neutral-400">/</span>
             <span className="text-neutral-900 font-medium truncate max-w-[200px] sm:max-w-none">{title}</span>
           </div>

           <BookDetailsTabs book={book} dict={dict} lang={lang} />
        </div>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
