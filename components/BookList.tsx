import Link from 'next/link';
import Image from 'next/image';
import { books } from '@/data/books';

export default function BookList({ dict, lang }: { dict: any, lang: string }) {
  // Determine prefix based on language
  const langPrefix = lang === 'ta' ? '' : `/${lang}`;

  // Determine text based on language
  const localizedBooks = books.map(book => ({
    ...book,
    title: (book.title as any)[lang],
    author: (book.author as any)[lang],
    desc: (book.desc as any)[lang]
  }));

  return (
    <section id="books" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{dict.books_section.title}</h2>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 py-6 space-y-12">
          {localizedBooks.map((book) => {
             const isPanai = book.id === 'pazhampadu-panai';
             const isTa = lang === 'ta';
             return (
               <div key={book.id} className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-12 border-b border-neutral-200 pb-12 last:border-0 last:pb-0">
                  <div className="book-card w-full md:w-[300px]">
                    <div className="relative group">
                      <div className={`aspect-[2/3] overflow-hidden mb-4 shadow-[0_4px_10px_rgba(0,0,0,0.15)] rounded-lg ${isPanai ? 'bg-[#F4F1EA] flex items-center justify-center p-4' : 'bg-neutral-200'}`}>
                        <Link href={`${langPrefix}/books/${book.id}`} className="w-full h-full relative block">
                          <Image 
                            src={book.image} 
                            alt={book.title} 
                            fill
                            className={`transition-transform duration-300 group-hover:scale-105 ${isPanai ? 'object-contain' : 'object-cover'}`} 
                            sizes="(max-width: 768px) 100vw, 300px"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 w-full md:max-w-[400px]">
                    {isPanai && (
                      <span className="inline-block text-xs font-bold text-[#2D6A4F] bg-[#EBF7EE] border border-[#B7E4C7] px-2.5 py-0.5 rounded-full mb-2">
                        {isTa ? 'சிறப்பு வெளியீடு · முன்பதிவுத் திட்டம்' : 'Special Release · Pre-order'}
                      </span>
                    )}
                    <h3 className="text-neutral-900 font-semibold text-lg md:text-xl leading-tight mb-2">{book.title}</h3>
                    <p className="text-neutral-600 text-sm mb-2">{book.author}</p>
                     <div className="flex items-center gap-2 mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(book.rating)].map((_, i) => <span key={i}>★</span>)}
                      </div>
                      <span className="text-neutral-500 text-sm">({book.rating}.0 / 5)</span>
                    </div>

                    {/* Price Block */}
                    <div className="flex items-baseline flex-wrap gap-2 mb-3">
                      <span className="text-neutral-900 font-bold text-xl text-[#2D6A4F]">
                        {dict.books_section.price_prefix}{book.salePrice || book.price} {isPanai && (isTa ? 'மட்டுமே' : 'only')}
                      </span>
                      {book.originalPrice && (
                        <span className="text-neutral-400 text-sm line-through">
                          {dict.books_section.price_prefix}{book.originalPrice}
                        </span>
                      )}
                      {isPanai && (
                        <span className="text-xs font-bold text-white bg-[#2D6A4F] rounded-full px-2 py-0.5 shadow-2xs">
                          {isTa ? '64% தள்ளுபடி' : '64% OFF'}
                        </span>
                      )}
                    </div>

                    <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                      {book.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href={`${langPrefix}/books/${book.id}`}>
                        <button className="px-5 py-2.5 bg-[#2D6A4F] hover:bg-[#1B4332] text-white rounded-md text-sm font-semibold transition-colors w-full sm:w-auto shadow-xs">
                          {isPanai ? (isTa ? 'முன்பதிவு செய்ய' : 'Pre-order') : dict.books_section.view_details}
                        </button>
                      </Link>
                    </div>
                  </div>
               </div>
             );
          })}
        </div>
      </div>
    </section>
  );
}
