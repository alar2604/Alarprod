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
    <section id="books" className="py-12 md:py-16 bg-neutral-50/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-3">{dict.books_section.title}</h2>
          <div className="w-12 h-1 bg-[#2D6A4F] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-[1100px] mx-auto space-y-10 md:space-y-12">
          {localizedBooks.map((book) => {
             const isPanai = book.id === 'pazhampadu-panai';
             const isTa = lang === 'ta';
             return (
               <div key={book.id} className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-10 border-b border-neutral-200/80 pb-10 md:pb-12 last:border-0 last:pb-0 bg-white p-5 sm:p-7 rounded-2xl shadow-2xs">
                  <div className="book-card w-full max-w-[220px] sm:max-w-[260px] md:max-w-[280px] mx-auto md:mx-0 flex-shrink-0">
                    <div className="relative group">
                      <div className={`aspect-2/3 overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.12)] rounded-xl ${isPanai ? 'bg-white flex items-center justify-center p-3' : 'bg-neutral-100'}`}>
                        <Link href={`${langPrefix}/books/${book.id}`} className="w-full h-full relative block">
                          <Image 
                            src={book.image} 
                            alt={book.title} 
                            fill
                            className={`transition-transform duration-300 group-hover:scale-105 ${isPanai ? 'object-contain' : 'object-cover'}`} 
                            sizes="(max-width: 640px) 220px, 280px"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 w-full md:max-w-[520px]">
                    {isPanai && (
                      <span className="inline-block text-xs font-bold text-[#2D6A4F] bg-[#EBF7EE] border border-[#B7E4C7] px-3 py-1 rounded-full mb-2">
                        {isTa ? 'சிறப்பு வெளியீடு · முன்பதிவுத் திட்டம்' : 'Special Release · Pre-order'}
                      </span>
                    )}
                    <h3 className="text-neutral-900 font-bold text-lg sm:text-xl md:text-2xl leading-snug mb-1.5 font-serif">{book.title}</h3>
                    <p className="text-neutral-600 text-sm sm:text-base font-medium mb-2.5">{book.author}</p>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex text-amber-400 text-sm">
                        {[...Array(book.rating)].map((_, i) => <span key={i}>★</span>)}
                      </div>
                      <span className="text-neutral-500 text-xs sm:text-sm">({book.rating}.0 / 5)</span>
                    </div>

                    {/* Price Block */}
                    <div className="flex items-baseline flex-wrap gap-2.5 mb-3.5">
                      <span className="text-neutral-900 font-bold text-xl text-[#2D6A4F]">
                        {dict.books_section.price_prefix}{book.salePrice || book.price} {isPanai && (isTa ? 'மட்டுமே' : 'only')}
                      </span>
                      {book.originalPrice && (
                        <span className="text-neutral-400 text-sm line-through">
                          {dict.books_section.price_prefix}{book.originalPrice}
                        </span>
                      )}
                      {isPanai && (
                        <span className="text-xs font-bold text-white bg-[#2D6A4F] rounded-full px-2.5 py-0.5 shadow-2xs">
                          {isTa
                            ? `${book.originalPrice && (book.salePrice || book.price) ? Math.round(((Number(book.originalPrice) - Number(book.salePrice || book.price)) / Number(book.originalPrice)) * 100) : 60}% தள்ளுபடி`
                            : `${book.originalPrice && (book.salePrice || book.price) ? Math.round(((Number(book.originalPrice) - Number(book.salePrice || book.price)) / Number(book.originalPrice)) * 100) : 60}% OFF`}
                        </span>
                      )}
                    </div>

                    <p className="text-neutral-600 text-sm leading-relaxed mb-5 line-clamp-3 font-light">
                      {book.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href={`${langPrefix}/books/${book.id}`} className="w-full sm:w-auto">
                        <button className="px-6 py-2.5 sm:py-3 bg-[#2D6A4F] hover:bg-[#1B4332] active:bg-[#153427] text-white rounded-xl text-sm font-semibold transition-all w-full sm:w-auto shadow-xs flex items-center justify-center">
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
