'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { books } from '@/data/books';
import gsap from 'gsap';

// Background image mapping
const bookBackgrounds: Record<string, string> = {
  'pazhampadu-panai': '/images/hero_bg_panai.webp',
  'albert-enum-kalaikalanjiyam': '/images/hero_bg_albert.webp',
  'sathyajit-ray-kathaigal': '/images/hero_bg_ray.webp',
  'sagayam-seitha-sagayam': '/images/hero_bg_sagayam.webp',
  'nenjam-marapathillai': '/images/hero_bg_nenjam.webp'
};

const bannerOrder = [
  'pazhampadu-panai',
  'albert-enum-kalaikalanjiyam',
  'nenjam-marapathillai'
];

const heroBooks = bannerOrder.map(id => books.find(b => b.id === id)).filter(Boolean) as typeof books;

export default function Hero({ dict, lang }: { dict: any, lang: string }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const isTa = lang === 'ta';
  
  // Determine prefix based on language
  const langPrefix = isTa ? '' : `/${lang}`;

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  const prevSlide = () => {
    setActiveSlide((current) => (current === 0 ? heroBooks.length - 1 : current - 1));
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current === heroBooks.length - 1 ? 0 : current + 1));
  };

  // Animation
  useEffect(() => {
    if (slideRef.current) {
        gsap.fromTo(slideRef.current.querySelectorAll('.animate-element'), 
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power2.out' }
        );
    }
  }, [activeSlide]);

  const currentBook = heroBooks[activeSlide];
  const isPanai = currentBook?.id === 'pazhampadu-panai';
  const bgImage = bookBackgrounds[currentBook?.id] || '/images/alarbanner.webp';

  return (
    <section id="banner" className="w-full relative select-none mt-16 md:mt-20 min-h-[580px] md:h-[720px] overflow-hidden bg-black text-white flex items-center py-6 md:py-0">
       {/* Dynamic Background Image */}
       <div key={currentBook.id} className="absolute inset-0">
          <Image 
            src={bgImage} 
            alt="Background" 
            fill 
            className="object-cover opacity-35 animate-fade-in"
            priority
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
       </div>

       <div className="container mx-auto px-4 sm:px-6 h-full relative z-10 flex items-center my-auto pb-8 md:pb-0">
         <div key={activeSlide} className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-12" ref={slideRef}>
            
            {/* Book Cover (Top on mobile, Right on Desktop) */}
            <div className="w-full md:w-5/12 flex justify-center md:justify-end animate-element order-1 md:order-2">
                <div className={`relative ${
                  isPanai 
                    ? 'w-[190px] h-[190px] xs:w-[220px] xs:h-[220px] sm:w-[300px] sm:h-[300px] md:w-[420px] md:h-[420px]' 
                    : 'w-[140px] h-[210px] xs:w-[170px] xs:h-[255px] sm:w-[220px] sm:h-[330px] md:w-[320px] md:h-[480px] shadow-[0_16px_40px_rgba(0,0,0,0.8)] rounded-lg'
                } transform hover:scale-105 transition-transform duration-500`}>
                    <Image
                        src={currentBook.image}
                        alt={(currentBook.title as any)[lang]}
                        fill
                        className={`transition-all duration-300 ${isPanai ? 'object-contain drop-shadow-[0_18px_36px_rgba(0,0,0,0.9)]' : 'object-cover rounded-lg'}`}
                        sizes="(max-width: 640px) 220px, (max-width: 768px) 300px, 450px"
                        priority
                    />
                </div>
            </div>

            {/* Text Content (Bottom on mobile, Left on Desktop) */}
            <div className="w-full md:w-7/12 text-center md:text-left animate-element order-2 md:order-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[11px] sm:text-xs font-bold mb-3 md:mb-5 text-emerald-300 uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>
                      {isPanai 
                        ? (isTa ? 'சிறப்பு வெளியீடு · முன்பதிவுத் திட்டம்' : 'Special Release · Pre-order')
                        : `${dict.hero.release || 'வெளியீடு'} 0${activeSlide + 1}`}
                    </span>
                </div>

                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3 leading-tight font-serif">
                    {(currentBook.title as any)[lang]}
                </h2>

                {isPanai && (
                  <p className="text-xs sm:text-base md:text-lg text-emerald-400 font-medium mb-2 md:mb-3">
                    {isTa ? 'ஒரு மரம் · 100 எழுத்தாளர்கள் · 120 சிறுகதைகள்' : 'One Tree · 100 Writers · 120 Stories'}
                  </p>
                )}

                <p className="text-sm sm:text-base md:text-xl text-neutral-300 mb-2 md:mb-4 font-light">
                    {(currentBook.author as any)[lang]}
                </p>

                <p className="text-neutral-300/80 text-xs sm:text-sm md:text-base mb-4 md:mb-6 max-w-xl mx-auto md:mx-0 line-clamp-2 sm:line-clamp-3 leading-relaxed font-light">
                    {(currentBook.desc as any)[lang]}
                </p>

                {isPanai && (
                  <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 md:mb-6 bg-white/10 backdrop-blur-md border border-emerald-500/30 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl">
                    <span className="text-[11px] sm:text-xs text-neutral-300 font-medium">{isTa ? 'முன்பதிவு விலை:' : 'Pre-order:'}</span>
                    <span className="text-xl sm:text-2xl font-bold text-emerald-400">
                      {isTa ? 'ரூ. ' : 'Rs. '}{currentBook.salePrice || '675'} {isTa ? 'மட்டுமே' : 'only'}
                    </span>
                    {currentBook.originalPrice && (
                      <span className="text-xs sm:text-sm text-neutral-400 line-through">
                        {isTa ? 'ரூ. ' : 'Rs. '}{currentBook.originalPrice}
                      </span>
                    )}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <Link href={`${langPrefix}/books/${currentBook.id}`} className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-7 py-3 sm:px-8 sm:py-3.5 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2 text-sm sm:text-base">
                            <span>{dict.books_section.view_details}</span>
                        </button>
                    </Link>
                </div>
            </div>

         </div>
       </div>

        {/* Desktop Navigation Arrows */}
        <button onClick={prevSlide} className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/10 transition-all z-20 group" aria-label="Previous slide">
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button onClick={nextSlide} className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/10 transition-all z-20 group" aria-label="Next slide">
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Pagination Dots + Mobile Compact Nav */}
        <div className="absolute bottom-3 md:bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-20">
          <button 
            onClick={prevSlide} 
            className="sm:hidden p-1 text-white/70 hover:text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex gap-2">
            {heroBooks.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === index ? 'w-6 bg-emerald-400' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide} 
            className="sm:hidden p-1 text-white/70 hover:text-white"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
    </section>
  );
}
