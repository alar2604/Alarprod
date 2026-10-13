'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CommentBox from '@/components/CommentBox';
import { MapPin, Share2, Maximize2, X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

type LocalizedText = string | Record<string, string>;

interface BookQuote {
  text: LocalizedText;
  author: LocalizedText;
}

interface BookArticle {
  title: LocalizedText;
  excerpt: LocalizedText;
  link: string;
}

interface BookDetailsData {
  edition?: LocalizedText;
  category?: LocalizedText;
  pages?: LocalizedText;
  format?: LocalizedText;
  paper?: LocalizedText;
  layout?: LocalizedText;
  coverDesign?: LocalizedText;
  printer?: LocalizedText;
  size?: LocalizedText;
  isbn?: string;
  code?: string;
  buyLinks?: {
    dodo?: string;
  };
  authorBio?: LocalizedText;
  translatorBio?: LocalizedText;
  quotes?: BookQuote[];
  relatedArticles?: BookArticle[];
}

interface BookData {
  id: string;
  title: LocalizedText;
  author: LocalizedText;
  role?: string;
  translator?: LocalizedText;
  desc?: LocalizedText;
  image: string;
  fullCoverImage?: string;
  gallery?: string[];
  authorImage?: string;
  price?: string;
  details: BookDetailsData;
}

interface BookDetailsDictionary {
  book_details: {
    tabs: {
      book: string;
      author: string;
      articles: string;
    };
    labels: {
      title: string;
      compiler: string;
      editor: string;
      author: string;
      translator: string;
      edition: string;
      category: string;
      isbn: string;
      pages: string;
      format: string;
      paper: string;
      layout: string;
      cover_design: string;
      printer: string;
      size: string;
      code: string;
      buy_now: string;
      share: string;
      read_more: string;
    };
  };
  books_section: {
    view_details: string;
    price_prefix: string;
  };
}

interface BookDetailsTabsProps {
  book: BookData;
  dict: BookDetailsDictionary;
  lang: string;
}

export default function BookDetailsTabs({ book, dict, lang }: BookDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState('bookDetails');
  const [selectedImage, setSelectedImage] = useState<string>(book.image);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  useEffect(() => {
    setSelectedImage(book.image);
  }, [book.image]);

  // Helper to safely get localized string; returns string or undefined
  const getLoc = (obj: LocalizedText | undefined): string | undefined => {
    if (!obj) return undefined;
    if (typeof obj === 'object' && obj !== null) {
      return (obj as Record<string, string>)[lang];
    }
    if (typeof obj === 'string') return obj;
    return undefined;
  };

  const title = String(getLoc(book.title) ?? '');
  const author = String(getLoc(book.author) ?? '');
  const translator = book.translator ? String(getLoc(book.translator) ?? '') : undefined;
  const desc = String(getLoc(book.desc) ?? '');
  const details = book.details;
  const authorImage = book.authorImage;
  const authorBio = getLoc(details.authorBio);
  const hasAuthorSection = Boolean(authorBio);

  // Function to handle share
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: String(title),
          text: `Check out this book: ${String(title)}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const thumbnailList = book.gallery && book.gallery.length > 0 
    ? book.gallery 
    : (book.fullCoverImage ? [book.image, book.fullCoverImage] : [book.image]);

  const specsList = [
    { label: dict.book_details.labels.title, value: title },
    {
      label: book.id === 'kasi-ayya' || book.role === 'editor'
        ? dict.book_details.labels.editor 
        : (book.role === 'compiler' 
          ? dict.book_details.labels.compiler 
          : dict.book_details.labels.author),
      value: author
    },
    translator ? { label: dict.book_details.labels.translator, value: translator } : null,
    details.edition ? { label: dict.book_details.labels.edition, value: getLoc(details.edition) } : null,
    details.category ? { label: dict.book_details.labels.category, value: getLoc(details.category) } : null,
    details.isbn ? { label: dict.book_details.labels.isbn, value: details.isbn } : null,
    details.pages ? { label: dict.book_details.labels.pages, value: getLoc(details.pages) } : null,
    details.size ? { label: dict.book_details.labels.size, value: getLoc(details.size) } : null,
    details.format ? { label: dict.book_details.labels.format, value: getLoc(details.format) } : null,
    details.paper ? { label: dict.book_details.labels.paper, value: getLoc(details.paper) } : null,
    details.layout ? { label: dict.book_details.labels.layout, value: getLoc(details.layout) } : null,
    details.coverDesign ? { label: dict.book_details.labels.cover_design, value: getLoc(details.coverDesign) } : null,
    details.printer ? { label: dict.book_details.labels.printer, value: getLoc(details.printer) } : null,
    details.code ? { label: dict.book_details.labels.code, value: details.code } : null,
  ].filter(Boolean);

  return (
    <div className="py-6 sm:py-10 px-4 sm:px-6 md:px-10 bg-white rounded-3xl shadow-xs border border-neutral-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Tab Navigation */}
        <div className="border-b border-neutral-200 mb-6 sm:mb-8">
          <ul className="flex justify-center gap-6 sm:gap-10">
            {['bookDetails', 'bookAuthor', 'bookArticle'].map((tab) => {
               const dictKey = tab === 'bookDetails' ? 'book' : tab === 'bookAuthor' ? 'author' : 'articles';
               return (
                <li key={tab}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 font-semibold text-sm sm:text-base focus:outline-none transition-colors border-b-2 -mb-px ${
                      activeTab === tab
                        ? 'text-[#2D6A4F] border-[#2D6A4F]'
                        : 'text-neutral-500 border-transparent hover:text-neutral-900'
                    }`}
                  >
                    {dict.book_details.tabs[dictKey]}
                  </button>
                </li>
               );
            })}
          </ul>
        </div>

        <div>
          {/* BOOK DETAILS TAB */}
          {activeTab === 'bookDetails' && (
            <div className="w-full">
              <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full">
                
                {/* Left Column: Image + Thumbnails */}
                <div className="w-full md:w-5/12 lg:w-4/12 flex flex-col items-center md:items-start shrink-0">
                  <div className="w-full max-w-[240px] xs:max-w-[270px] sm:max-w-[300px] md:max-w-none mx-auto">
                    <div className="aspect-2/3 relative w-full shadow-md rounded-2xl overflow-hidden bg-neutral-50 group border border-neutral-100">
                        <Image
                            src={selectedImage}
                            alt={`${title} cover`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 270px, 350px"
                            priority
                        />
                        <button 
                            onClick={() => setIsImageFullscreen(true)}
                            className="absolute bottom-3 right-3 bg-black/60 hover:bg-black active:bg-black/90 text-white p-2 rounded-xl transition-all"
                            aria-label="View Fullscreen"
                        >
                            <Maximize2 className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Thumbnails */}
                    {thumbnailList.length > 1 && (
                        <div className="flex justify-center md:justify-start gap-2.5 mt-3.5">
                            {thumbnailList.map((imgSrc, idx) => (
                              <button 
                                  key={idx}
                                  onClick={() => setSelectedImage(imgSrc)}
                                  className={`relative w-14 h-20 rounded-xl overflow-hidden border-2 transition-all ${selectedImage === imgSrc ? 'border-[#2D6A4F] shadow-sm scale-105 ring-2 ring-emerald-500/20' : 'border-transparent opacity-70 hover:opacity-100'}`}
                              >
                                  <Image src={imgSrc} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                              </button>
                            ))}
                        </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Key Info, Pricing, Description, Actions, Specs */}
                <div className="w-full md:w-7/12 lg:w-8/12">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-neutral-900 mb-2 leading-tight">
                    {title}
                  </h1>
                  
                  <p className="text-base sm:text-lg font-medium text-neutral-600 mb-2">
                    {book.id === 'kasi-ayya' || book.role === 'editor'
                      ? dict.book_details.labels.editor 
                      : (book.role === 'compiler' 
                        ? dict.book_details.labels.compiler 
                        : dict.book_details.labels.author)}: <span className="text-neutral-900 font-semibold">{author}</span>
                  </p>
                  
                  {translator && (
                    <p className="text-sm sm:text-base font-medium text-neutral-600 mb-3">
                      {dict.book_details.labels.translator}: <span className="text-neutral-900 font-semibold">{translator}</span>
                    </p>
                  )}

                  {details.coverDesign ? (
                    <p className="text-xs sm:text-sm text-neutral-500 mb-4">
                      {dict.book_details.labels.cover_design}: {getLoc(details.coverDesign)}
                    </p>
                  ) : (
                    <p className="text-xs sm:text-sm text-neutral-500 mb-4">
                      {lang === 'ta' ? 'அட்டை வடிவமைப்பு' : 'Cover Designer'}: <a href="https://www.rohinimanicharcoal.com/" className="underline hover:text-[#2D6A4F]" target="_blank" rel="noopener noreferrer">{lang === 'ta' ? 'ரோகிணி மணி' : 'Rohini Mani'}</a>
                    </p>
                  )}

                  {/* Rating & Price */}
                  <div className="flex items-center gap-3 py-3 px-4 bg-neutral-50 rounded-2xl w-fit mb-6">
                    <div className="text-amber-400 text-base">★★★★★</div>
                    <span className="text-xs sm:text-sm text-neutral-500">(5.0 / 5)</span>
                    <span className="text-neutral-300">|</span>
                    <span className="text-xl sm:text-2xl font-bold text-[#2D6A4F]">{dict.books_section.price_prefix}{book.price}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6">
                     {details.buyLinks?.dodo && (
                        <a 
                          href={details.buyLinks.dodo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3 bg-[#832b5d] hover:bg-[#a13a74] active:bg-[#6e234e] px-6 py-3 rounded-xl transition-all text-white font-semibold shadow-xs w-full sm:w-auto"
                        >
                           <span className="bg-white rounded-lg p-1 h-7 w-7 flex items-center justify-center">
                              <Image 
                                  src="/images/dodo.svg" 
                                  alt="Dodo" 
                                  width={18} 
                                  height={18} 
                              />
                           </span>
                           <span className="text-sm sm:text-base">{dict.book_details.labels.buy_now}</span>
                        </a>
                     )}

                     <a 
                       href={`https://wa.me/917200111312?text=${encodeURIComponent(`I'm interested in buying ${title}`)}`} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="flex items-center justify-center gap-2 border-2 border-neutral-300 hover:border-emerald-600 text-neutral-800 hover:text-emerald-700 px-5 py-3 rounded-xl hover:bg-emerald-50/50 transition-colors w-full sm:w-auto font-semibold text-sm sm:text-base shadow-2xs"
                     >
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                        <span>Order on WhatsApp</span>
                     </a>
                     
                     {book.id === 'pazhampadu-panai' && (
                       <Link 
                         href={lang === 'ta' ? `/coordinators?book=${book.id}` : `/${lang}/coordinators?book=${book.id}`} 
                         className="flex items-center justify-center gap-2 bg-[#2d6a4f] text-white px-5 py-3 rounded-xl hover:bg-[#1b4332] active:bg-[#153427] transition-all shadow-xs font-semibold text-sm sm:text-base w-full sm:w-auto"
                       >
                          <MapPin className="w-4 h-4" />
                          <span>{lang === 'ta' ? 'கள ஒருங்கிணைப்பாளரைத் தேடுக' : 'Find a Field Coordinator'}</span>
                       </Link>
                     )}

                     <button 
                       onClick={handleShare} 
                       className="flex items-center justify-center gap-2 px-4 py-3 border border-neutral-200 rounded-xl bg-white text-neutral-700 hover:bg-neutral-50 active:bg-neutral-100 transition-colors text-sm font-semibold w-full sm:w-auto shadow-2xs"
                       aria-label="Share this book"
                     >
                        <Share2 className="w-4 h-4 text-neutral-500" />
                        <span>{dict.book_details.labels.share}</span>
                     </button>
                  </div>
                  
                  {/* Description / Quotes */}
                  <div className="text-neutral-700 leading-relaxed font-light text-sm sm:text-base space-y-4 py-4 border-t border-neutral-100">
                      {details.quotes && details.quotes.length > 0 ? (
                           details.quotes.map((quote: BookQuote, idx: number) => (
                               <blockquote key={idx} className="bg-neutral-50/70 p-4 sm:p-5 rounded-2xl border-l-4 border-[#2D6A4F] text-neutral-800 italic">
                                   “{getLoc(quote.text)}”
                                   <footer className="block mt-2 font-semibold not-italic text-xs sm:text-sm text-[#2D6A4F]">— {getLoc(quote.author)}</footer>
                               </blockquote>
                           ))
                      ) : (
                          <p>{desc}</p>
                      )}
                  </div>

                  {/* Book Specs List */}
                  <div className="mt-6 pt-6 border-t border-neutral-100">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-3">
                      {dict.book_details.tabs.book} {dict.books_section.view_details.replace('View Details', '')}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm">
                      {specsList.map((item: any, i: number) => (
                        <div key={i} className="flex justify-between py-1.5 border-b border-neutral-100 last:border-0 gap-2">
                          <span className="text-neutral-500 font-medium">{item.label}:</span>
                          <span className="font-semibold text-neutral-900 text-right">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* AUTHOR TAB */}
          {activeTab === 'bookAuthor' && (
              <div className="w-full max-w-3xl mx-auto py-4 flex flex-col items-center">
                {hasAuthorSection && (
                  <div className="w-full flex flex-col items-center text-center">
                    <h3 className="text-lg sm:text-xl font-bold font-serif mb-4 text-[#2D6A4F]">
                      {book.id === 'kasi-ayya' || book.role === 'editor'
                        ? dict.book_details.labels.editor
                        : (book.role === 'compiler'
                          ? dict.book_details.labels.compiler
                          : dict.book_details.labels.author)} : {author}
                    </h3>
                    
                    {authorImage && (
                      <div className="relative w-48 h-60 sm:w-56 sm:h-72 rounded-2xl overflow-hidden mb-5 shadow-md border border-neutral-100 bg-neutral-50">
                        <Image src={authorImage} alt={author} fill className="object-cover" />
                      </div>
                    )}
                    
                    <p className="text-neutral-700 leading-relaxed text-sm sm:text-base max-w-2xl font-light">
                      {authorBio}
                    </p>
                  </div>
                )}

                {translator && (
                  <div className={`${hasAuthorSection ? 'mt-8 pt-8 border-t border-neutral-200' : ''} w-full flex flex-col items-center text-center`}>
                    <h4 className="text-lg sm:text-xl font-bold font-serif mb-4 text-[#2D6A4F]">
                      {dict.book_details.labels.translator}: {translator}
                    </h4>
                    <p className="text-neutral-700 leading-relaxed text-sm sm:text-base max-w-2xl font-light">
                      {details.translatorBio ? getLoc(details.translatorBio) : 'Translator biography not available.'}
                    </p>
                  </div>
                )}
              </div>
          )}

          {/* RELATED ARTICLES TAB */}
          {activeTab === 'bookArticle' && (
              <div className="w-full max-w-3xl mx-auto py-4">
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-neutral-900 mb-6">{dict.book_details.tabs.articles}</h3>
                  <div className="grid grid-cols-1 gap-4 sm:gap-6">
                      {details.relatedArticles && details.relatedArticles.map((article: BookArticle, idx: number) => (
                          <a key={idx} href={article.link} target="_blank" rel="noopener noreferrer" className="group">
                              <div className="border border-neutral-200 rounded-2xl p-5 hover:border-[#2D6A4F] hover:shadow-md transition-all bg-white">
                                  <h4 className="font-semibold text-neutral-900 group-hover:text-[#2D6A4F] transition-colors mb-2 text-base sm:text-lg">{getLoc(article.title)}</h4>
                                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">{getLoc(article.excerpt)}</p>
                                  <span className="text-[#2D6A4F] font-semibold text-xs sm:text-sm mt-3 inline-flex items-center gap-1 group-hover:underline">{dict.book_details.labels.read_more} →</span>
                              </div>
                          </a>
                      ))}
                  </div>
              </div>
          )}
        </div>

        {/* Comments Section */}
        <div className="mt-12 pt-8 border-t border-neutral-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-neutral-900 mb-2 text-center sm:text-left">
              {lang === 'ta' ? 'வாசகர் கருத்துகள்' : 'Reader Comments'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mb-6 font-light text-center sm:text-left">
              {lang === 'ta'
                ? 'இந்நூல் குறித்த உங்கள் கருத்துகளைப் பகிர்ந்துகொள்ளுங்கள்.'
                : 'Share your thoughts and reviews about this book.'}
            </p>
            <CommentBox projectId="5747584295501824-proj" />
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {isImageFullscreen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8">
            <button 
                onClick={() => setIsImageFullscreen(false)}
                className="absolute top-4 right-4 text-white hover:text-neutral-300 p-2.5 bg-white/10 rounded-full z-10"
                aria-label="Close Fullscreen"
            >
                <X className="w-6 h-6" />
            </button>
            
            {book.fullCoverImage && (
                <button 
                    onClick={() => setSelectedImage(prev => prev === book.image ? book.fullCoverImage! : book.image)}
                    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-neutral-300 p-2.5 bg-black/60 hover:bg-black rounded-full transition-colors z-10"
                    aria-label="Previous Image"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
            )}

            <div className="relative w-full h-full max-w-4xl max-h-[85vh]">
                <Image
                    src={selectedImage}
                    alt={`${title} cover fullscreen`}
                    fill
                    className="object-contain"
                />
            </div>

            {book.fullCoverImage && (
                <button 
                    onClick={() => setSelectedImage(prev => prev === book.image ? book.fullCoverImage! : book.image)}
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-neutral-300 p-2.5 bg-black/60 hover:bg-black rounded-full transition-colors z-10"
                    aria-label="Next Image"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            )}
        </div>
      )}
    </div>
  );
}
