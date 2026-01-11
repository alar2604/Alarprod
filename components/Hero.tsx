'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { books } from '@/data/books';
import gsap from 'gsap';

// Background image mapping
const bookBackgrounds: Record<string, string> = {
  'albert-enum-kalaikalanjiyam': '/images/hero_bg_albert.webp',
  'sathyajit-ray-kathaigal': '/images/hero_bg_ray.webp',
  'sagayam-seitha-sagayam': '/images/hero_bg_sagayam.webp',
  'nenjam-marapathillai': '/images/hero_bg_nenjam.webp'
};

export default function Hero({ dict, lang }: { dict: any, lang: string }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  
  // Determine prefix based on language
  const langPrefix = lang === 'ta' ? '' : `/${lang}`;

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeSlide]); // visual dependency for reset

  const prevSlide = () => {
    setActiveSlide((current) => (current === 0 ? books.length - 1 : current - 1));
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current === books.length - 1 ? 0 : current + 1));
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

  const currentBook = books[activeSlide];
  const bgImage = bookBackgrounds[currentBook.id] || '/images/hero_bg_albert.webp'; // fallback

  return (
    <section id="banner" className="w-full relative select-none mt-20 h-[600px] md:h-[700px] overflow-hidden bg-black text-white">
       {/* Dynamic Background Image */}
       <div key={currentBook.id} className="absolute inset-0">
          <Image 
            src={bgImage} 
            alt="Background" 
            fill 
            className="object-cover opacity-60 animate-fade-in"
            priority
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
       </div>

       <div className="container mx-auto px-4 h-full relative z-10 flex items-center">
         <div key={activeSlide} className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-16 pt-10 md:pt-0" ref={slideRef}>
            
            {/* Text Content (Left) */}
            <div className="w-full md:w-1/2 text-center md:text-left animate-element order-2 md:order-1">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium mb-6 text-neutral-200 uppercase tracking-widest">
                    {dict.hero.featured_release}
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                    {(currentBook.title as any)[lang]}
                </h2>
                <p className="text-xl md:text-2xl text-neutral-300 mb-6 font-light">
                    {(currentBook.author as any)[lang]}
                </p>
                <p className="text-neutral-400 text-base md:text-lg mb-8 max-w-xl mx-auto md:mx-0 line-clamp-3 md:line-clamp-none">
                    {(currentBook.desc as any)[lang]}
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link href={`${langPrefix}/books/${currentBook.id}`}>
                        <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            {dict.books_section.view_details}
                        </button>
                    </Link>
                </div>
            </div>

            {/* Book Cover (Right) */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-element order-1 md:order-2">
                <div className="relative w-[200px] h-[300px] md:w-[320px] md:h-[480px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-700 perspective-1000">
                    <Image
                        src={currentBook.image}
                        alt={(currentBook.title as any)[lang]}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 50vw, 33vw"
                        priority
                    />
                </div>
            </div>

         </div>
       </div>

        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/10 transition-all z-20 group">
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/10 transition-all z-20 group">
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {books.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'}`}
            />
          ))}
        </div>
    </section>
  );
}
