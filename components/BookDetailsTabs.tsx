'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BookDetailsTabsProps {
  book: any;
  dict: any;
  lang: string;
}

export default function BookDetailsTabs({ book, dict, lang }: BookDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState('bookDetails');

  // Helper to safely get localized string
  const getLoc = (obj: any) => (typeof obj === 'object' && obj !== null && lang in obj ? obj[lang] : obj);

  const title = getLoc(book.title);
  const author = getLoc(book.author);
  const translator = getLoc(book.translator);
  const desc = getLoc(book.desc);
  const details = book.details;

  // Function to handle share
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out this book: ${title}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Sharing is not supported on this browser. You can copy the link.');
    }
  };

  return (
    <div className="py-12 mt-12 px-4 md:px-8 lg:px-12 bg-white">
      <div className="container mx-auto max-w-[1280px] mt-8">
        <div className="border-gray-200 mb-8 md:ml-12">
          <ul className="flex justify-center gap-4 md:gap-8">
            {['bookDetails', 'bookAuthor', 'bookArticle'].map((tab) => {
               // Map internal tab keys to dictionary keys
               const dictKey = tab === 'bookDetails' ? 'book' : tab === 'bookAuthor' ? 'author' : 'articles';
               return (
                <li key={tab}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`tab-button pb-2 font-medium text-base focus:outline-none transition-colors border-b-4 ${
                      activeTab === tab
                        ? 'text-black border-orange-500'
                        : 'text-gray-600 border-transparent hover:text-black'
                    }`}
                  >
                    {dict.book_details.tabs[dictKey]}
                  </button>
                </li>
               );
            })}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Tab Content Area */}
          <div className="w-full">
            
            {/* BOOK DETAILS TAB */}
            {activeTab === 'bookDetails' && (
              <div className="tab-content flex flex-col md:flex-row gap-12 mx-auto bg-white py-6 px-4 md:px-8 lg:px-16 leading-8 rounded-lg">
                {/* Left Column: Image + Details List */}
                <div className="w-full md:w-1/3">
                  <div className="top-24">
                    <div className="aspect-[2/3] relative w-full shadow-lg rounded overflow-hidden">
                        <Image
                            src={book.image}
                            alt={`${title} cover`}
                            fill
                            className="object-cover"
                        />
                    </div>
                    
                    <div className="mt-6 flex flex-col space-y-4">
                      <div className="mb-8">
                        <h3 className="text-lg font-normal text-gray-900 mb-4">{dict.book_details.tabs.book} {dict.books_section.view_details.replace('View Details', '')}</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base">
                          {/* Book Details List */}
                          <li><span className="font-semibold text-gray-900">{dict.book_details.labels.title} :</span> {title}</li>
                          <li><span className="font-semibold text-gray-900">{book.id === 'albert-enum-kalaikalanjiyam' ? dict.book_details.labels.compiler : dict.book_details.labels.author} :</span> {author}</li>
                          {translator && <li><span className="font-semibold text-gray-900">{dict.book_details.labels.translator} :</span> {translator}</li>}
                          {details.edition && <li><span className="font-semibold text-gray-900">{dict.book_details.labels.edition} :</span> {getLoc(details.edition)}</li>}
                          <li><span className="font-semibold text-gray-900">{dict.book_details.labels.language} :</span> {getLoc(details.language)}</li>
                          {details.category && <li><span className="font-semibold text-gray-900">{dict.book_details.labels.category} :</span> {getLoc(details.category)}</li>}
                          {details.isbn && <li><span className="font-semibold text-gray-900">{dict.book_details.labels.isbn} :</span> {details.isbn}</li>}
                          {details.pages && <li><span className="font-semibold text-gray-900">{dict.book_details.labels.pages} :</span> {getLoc(details.pages)}</li>}
                          {details.binding && <li><span className="font-semibold text-gray-900">{dict.book_details.labels.binding} :</span> {getLoc(details.binding)}</li>}
                          {details.paper && <li><span className="font-semibold text-gray-900">{dict.book_details.labels.paper} :</span> {getLoc(details.paper)}</li>}
                          {details.code && <li><span className="font-semibold text-gray-900">{dict.book_details.labels.code} :</span> {details.code}</li>}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Key Info & Description */}
                <div className="w-full md:w-2/3">
                  <h1 className="text-xl font-bold mb-2">{title}</h1>
                  {/* Short one-liner if exists, otherwise desc intro? Used hardcoded quote in legacy. Using desc for now. */}
                  {/* <p className="text-lg text-gray-600 mb-4">"A collection..."</p> */} 
                  
                  <p className="text-md font-semibold text-gray-700 mb-2">{book.id === 'albert-enum-kalaikalanjiyam' ? dict.book_details.labels.compiler : dict.book_details.labels.author}: {author}</p>
                  {translator && <p className="text-md font-semibold text-gray-700 mb-4">{dict.book_details.labels.translator}: {translator}</p>}
                  <p className="text-md font-semibold text-gray-700 mb-4">Cover Designer: <a href="https://www.rohinimanicharcoal.com/" className="underline" target="_blank">Rohini Mani</a></p>

                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                    <span className="ml-2 text-gray-600">(5.0 / 5)</span>
                    <span className="ml-4 text-xl font-bold text-green-600">{dict.books_section.price_prefix}{book.price}</span>
                  </div>

                  <div className="space-y-4 mb-6">
                     {/* Buy Buttons */}
                     {details.buyLinks?.dodo && (
                        <a href={details.buyLinks.dodo} target="_blank" rel="noopener noreferrer"
                            className="flex items-center mb-6 w-fit gap-3 group bg-[#832b5d] hover:bg-[#a13a74] p-3 rounded-md transition text-white font-semibold shadow-md">
                             <span className="bg-white rounded p-1 h-10 w-10 flex items-center justify-center">
                                <Image 
                                    src="/images/dodo.svg" 
                                    alt="Dodo" 
                                    width={24} 
                                    height={24} 
                                />
                             </span>
                             <span className="text-base group-hover:underline">{dict.book_details.labels.buy_now}</span>
                        </a>
                     )}
                     {/* WhatsApp fallback/addition */}
                     <a href={`https://wa.me/917200111312?text=I'm interested in buying ${title}`} target="_blank" rel="noopener noreferrer" className="flex items-center w-fit gap-3 border border-neutral-300 text-neutral-900 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                        <span>Order on WhatsApp</span>
                     </a>
                  </div>
                  
                  {/* Description / Quotes */}
                  <div className="text-gray-700 mb-4">
                      {/* If quotes exist, render them. If not, fallback to regular desc */}
                      {details.quotes && details.quotes.length > 0 ? (
                           details.quotes.map((quote: any, idx: number) => (
                               <p key={idx} className="text-gray-700 mb-4">
                                   {getLoc(quote.text)}
                                   <br className="mt-2" />
                                   <span className="block mt-2 font-semibold text-sm">{getLoc(quote.author)}</span>
                               </p>
                           ))
                      ) : (
                          <p>{desc}</p>
                      )}
                  </div>


                  <div className="border-t py-4 mt-8">
                    <div className="mb-6 flex items-center space-x-3">
                        <button onClick={handleShare} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 hover:bg-gray-100 transition">
                             {dict.book_details.labels.share}
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="currentColor">
                                <path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"/>
                              </svg>
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* AUTHOR TAB */}
            {activeTab === 'bookAuthor' && (
                <div className="tab-content mx-auto bg-white py-6 md:px-8 lg:px-16 leading-8 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{dict.book_details.tabs.author}</h3>
                    <div className="flex gap-4 flex-col items-center md:items-start text-center md:text-left md:flex-row">
                        <div>
                             {/* Use author image if available, else placeholder or keep specific image for Arputharaj */}
                             <div className="relative w-[288px] h-[300px] rounded-md overflow-hidden">
                                 <Image src="/images/s_arputharaj.webp" alt={author} fill className="object-cover" />
                             </div>
                        </div>
                        <div>
                            <p className="text-gray-700 mb-4">
                                {details.authorBio ? getLoc(details.authorBio) : 'Biography not available.'}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* RELATED ARTICLES TAB */}
            {activeTab === 'bookArticle' && (
                <div className="tab-content mx-auto bg-white py-6 px-4 md:px-8 lg:px-16 leading-8 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{dict.book_details.tabs.articles}</h3>
                    <div className="grid grid-cols-1 gap-6">
                        {details.relatedArticles && details.relatedArticles.map((article: any, idx: number) => (
                            <a key={idx} href={article.link} target="_blank" rel="noopener noreferrer">
                                <div className="border border-gray-200 rounded-md p-4 hover:shadow-md transition duration-300">
                                    <h4 className="font-semibold text-gray-900 mb-2">{getLoc(article.title)}</h4>
                                    <p className="text-gray-700 text-sm">{getLoc(article.excerpt)}</p>
                                    <span className="text-blue-600 hover:underline text-sm mt-2 inline-block">{dict.book_details.labels.read_more} →</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
