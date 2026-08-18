'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles, MapPin } from 'lucide-react';
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
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
        );
    }
  }, [activeSlide]);

  const currentBook = heroBooks[activeSlide];
  const isPanai = currentBook?.id === 'pazhampadu-panai';
  const bgImage = bookBackgrounds[currentBook?.id] || '/images/alarbanner.webp';

  return (
    <section id="banner" className="w-full relative select-none mt-20 h-[640px] md:h-[720px] overflow-hidden bg-black text-white">
       {/* Dynamic Background Image */}
       <div key={currentBook.id} className="absolute inset-0">
          <Image 
            src={bgImage} 
            alt="Background" 
            fill 
            className="object-cover opacity-40 animate-fade-in"
            priority
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
       </div>

       <div className="container mx-auto px-4 sm:px-6 h-full relative z-10 flex items-center">
         <div key={activeSlide} className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-12 pt-8 md:pt-0" ref={slideRef}>
            
            {/* Text Content (Left) */}
            <div className="w-full md:w-7/12 text-center md:text-left animate-element order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold mb-5 text-emerald-300 uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>
                      {isPanai 
                        ? (isTa ? 'சிறப்பு வெளியீடு · முன்பதிவுத் திட்டம்' : 'Special Release · Pre-order')
                        : `${dict.hero.release || 'வெளியீடு'} 0${activeSlide + 1}`}
                    </span>
                </div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight font-serif">
                    {(currentBook.title as any)[lang]}
                </h2>

                {isPanai && (
                  <p className="text-base md:text-lg text-emerald-400 font-medium mb-3">
                    {isTa ? 'ஒரு மரம் · 100 எழுத்தாளர்கள் · 120 சிறுகதைகள்' : 'One Tree · 100 Writers · 120 Stories'}
                  </p>
                )}

                <p className="text-lg md:text-xl text-neutral-300 mb-4 font-light">
                    {(currentBook.author as any)[lang]}
                </p>

                <p className="text-neutral-300/80 text-sm md:text-base mb-6 max-w-xl mx-auto md:mx-0 line-clamp-3 leading-relaxed font-light">
                    {(currentBook.desc as any)[lang]}
                </p>

                {isPanai && (
                  <div className="inline-flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-md border border-emerald-500/30 px-4 py-2 rounded-xl">
                    <span className="text-xs text-neutral-300 font-medium">{isTa ? 'முன்பதிவு விலை:' : 'Pre-order:'}</span>
                    <span className="text-2xl font-bold text-emerald-400">
                      {isTa ? 'ரூ. ' : 'Rs. '}{currentBook.salePrice || '675'} {isTa ? 'மட்டுமே' : 'only'}
                    </span>
                    {currentBook.originalPrice && (
                      <span className="text-sm text-neutral-400 line-through">
                        {isTa ? 'ரூ. ' : 'Rs. '}{currentBook.originalPrice}
                      </span>
                    )}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link href={`${langPrefix}/books/${currentBook.id}`}>
                        <button className="px-8 py-3.5 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2 text-sm sm:text-base">
                            <span>{dict.books_section.view_details}</span>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Book Cover (Right) */}
            <div className="w-full md:w-5/12 flex justify-center md:justify-end animate-element order-1 md:order-2">
                <div className={`relative ${
                  isPanai 
                    ? 'w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px]' 
                    : 'w-[200px] h-[300px] md:w-[320px] md:h-[480px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-lg'
                } transform hover:scale-105 transition-transform duration-500`}>
                    <Image
                        src={currentBook.image}
                        alt={(currentBook.title as any)[lang]}
                        fill
                        className={`transition-all duration-300 ${isPanai ? 'object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.9)]' : 'object-cover rounded-lg'}`}
                        sizes="(max-width: 768px) 80vw, 450px"
                        priority
                    />
                </div>
            </div>

         </div>
       </div>

        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/10 transition-all z-20 group" aria-label="Previous slide">
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/10 transition-all z-20 group" aria-label="Next slide">
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {heroBooks.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === index ? 'w-8 bg-emerald-400' : 'w-2 bg-white/30 hover:bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
    </section>
  );
}

