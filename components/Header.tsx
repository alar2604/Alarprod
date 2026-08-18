"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ChevronDown, Globe, BookOpen } from 'lucide-react';

export default function Header({ dict, lang }: { dict: any, lang: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBooksOpen, setIsBooksOpen] = useState(false);
  const [isMobileBooksOpen, setIsMobileBooksOpen] = useState(false);

  const pathname = usePathname();
  
  // Determine prefix based on language
  const langPrefix = lang === 'ta' ? '' : `/${lang}`;
  
  // Determine target language for toggle
  // If current is 'ta' (root), target is '/en' + current path
  // If current is 'en', target is current path without '/en'
  const targetPath = lang === 'ta' 
    ? `/en${pathname === '/' ? '' : pathname}` 
    : (pathname.replace(/^\/en($|\/)/, '$1') || '/');

  // Close mobile menu on route change or ESC
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header id="header" className="bg-white/95 backdrop-blur-md shadow-xs fixed w-full top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <nav className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`${langPrefix}/`} className="flex items-center gap-2 group">
              <Image 
                src="/images/alarlogo.png"
                alt="Alar veliyeedu" 
                width={80} 
                height={80}
                className="h-12 md:h-18 w-auto object-contain transition-transform group-hover:scale-105" 
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href={`${langPrefix}/`} className="text-neutral-700 hover:text-neutral-950 text-sm lg:text-base font-medium transition-colors">
              {dict.nav.home}
            </Link>
            
            <Link href={`${langPrefix}/#about-us`} className="text-neutral-700 hover:text-neutral-950 text-sm lg:text-base font-medium transition-colors">
              {dict.nav.about}
            </Link>
            
            {/* Books Dropdown Trigger */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsBooksOpen(true)}
              onMouseLeave={() => setIsBooksOpen(false)}
            >
              <button 
                className="text-neutral-700 hover:text-neutral-950 text-sm lg:text-base font-medium transition-colors inline-flex items-center outline-none py-2"
                aria-expanded={isBooksOpen}
              >
                {dict.nav.books}
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isBooksOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mega Menu Dropdown */}
              <div 
                className={`absolute left-1/2 transform -translate-x-1/2 mt-1 w-84 bg-white shadow-xl rounded-xl border border-neutral-100 overflow-hidden transition-all duration-200 ease-in-out ${isBooksOpen ? 'max-h-[500px] opacity-100 py-2 visible' : 'max-h-0 opacity-0 py-0 invisible'}`}
              >
                 <div className="flex flex-col py-1">
                   <Link href={`${langPrefix}/books/albert-enum-kalaikalanjiyam`} className="text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 px-4 py-2.5 text-sm transition-colors">{lang === 'ta' ? 'ஆல்பர்ட் எனும் கலைக்களஞ்சியம்' : 'Albert Enum Kalaikalanjiyam'}</Link>
                   <Link href={`${langPrefix}/books/nenjam-marapathillai`} className="text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 px-4 py-2.5 text-sm transition-colors">{lang === 'ta' ? 'நெஞ்சம் மறப்பதில்லை' : 'Nenjam Marappathillai'}</Link>
                   <Link href={`${langPrefix}/books/sagayam-seitha-sagayam`} className="text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 px-4 py-2.5 text-sm transition-colors">{lang === 'ta' ? 'சகாயம் செய்த சகாயம்' : 'Sagayam Seitha Sagayam'}</Link>
                   <Link href={`${langPrefix}/books/sathyajit-ray-kathaigal`} className="text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 px-4 py-2.5 text-sm transition-colors">{lang === 'ta' ? 'சத்யஜித் ரே கதைகள்' : 'Sathyajit Ray Stories'}</Link>
                   <Link href={`${langPrefix}/books/melliya-kodugal`} className="text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 px-4 py-2.5 text-sm transition-colors">{lang === 'ta' ? 'மெல்லிய கோடுகள்' : 'Melliya Kodugal'}</Link>
                   <Link href={`${langPrefix}/books/kannisangu`} className="text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 px-4 py-2.5 text-sm transition-colors">{lang === 'ta' ? 'கன்னிச்சங்கு' : 'Kannichangu'}</Link>
                   <Link href={`${langPrefix}/books/kasi-ayya`} className="text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 px-4 py-2.5 text-sm transition-colors">{lang === 'ta' ? 'காசி அய்யா' : 'Kasi Ayya'}</Link>
                   <Link href={`${langPrefix}/books/nainthazum-kural`} className="text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 px-4 py-2.5 text-sm transition-colors">{lang === 'ta' ? 'நைந்தழும் குரல்' : 'Nainthazum Kural'}</Link>
                   <Link href={`${langPrefix}/books/lankesh-kathaigal`} className="text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 px-4 py-2.5 text-sm transition-colors">{lang === 'ta' ? 'லங்கேஷ் கதைகள்' : 'Lankesh Kathaigal'}</Link>
                   <div className="border-t border-neutral-100 my-1"></div>
                   <Link href={`${langPrefix}/books/pazhampadu-panai`} className="text-neutral-900 bg-emerald-50/70 hover:bg-emerald-100/70 px-4 py-2.5 text-sm font-semibold flex items-center justify-between transition-colors">
                     <span>{lang === 'ta' ? 'பழம்படு பனை (பனை கதைகள் 120)' : 'Pazhampadu Panai'}</span>
                     <span className="text-[10px] font-bold uppercase tracking-wide text-white bg-[#2D6A4F] rounded-full px-2 py-0.5">{lang === 'ta' ? 'சிறப்பு' : 'Featured'}</span>
                   </Link>
                </div>
              </div>
            </div>

            <Link href={`${langPrefix}/#coming-soon`} className="text-neutral-700 hover:text-neutral-950 text-sm lg:text-base font-medium transition-colors">
              {dict.nav.coming_soon}
            </Link>
            
            <Link href={`${langPrefix}/#our-team`} className="text-neutral-700 hover:text-neutral-950 text-sm lg:text-base font-medium transition-colors">
              {dict.nav.our_team}
            </Link>
            
            <Link href={`${langPrefix}/contact`} className="text-neutral-700 hover:text-neutral-950 text-sm lg:text-base font-medium transition-colors">
              {dict.nav.contact}
            </Link>

            {/* Desktop Language Switcher */}
            <Link 
              href={targetPath}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 hover:border-neutral-300 text-neutral-700 text-xs font-semibold transition-all shadow-2xs ml-2"
              title={lang === 'ta' ? 'Switch to English' : 'தமிழுக்கு மாறவும்'}
            >
              <Globe className="w-3.5 h-3.5 text-neutral-500" />
              <span>{lang === 'ta' ? 'English' : 'தமிழ்'}</span>
            </Link>
          </div>

          {/* Mobile Actions: Language Toggle + Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link 
              href={targetPath}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 active:bg-neutral-100 text-neutral-800 text-xs font-bold transition-all shadow-2xs"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-neutral-600" />
              <span>{lang === 'ta' ? 'EN' : 'தமிழ்'}</span>
            </Link>

            <button 
              className="flex items-center justify-center p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 transition-colors" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown / Drawer */}
      <div 
        className={`md:hidden bg-white border-t border-neutral-200 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-4 space-y-1 overflow-y-auto max-h-[80vh]">
          <Link 
            href={`${langPrefix}/`} 
            className="px-3 py-2.5 text-neutral-800 hover:bg-neutral-50 active:bg-neutral-100 rounded-lg font-medium text-base transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {dict.nav.home}
          </Link>
          
          <Link 
            href={`${langPrefix}/#about-us`} 
            className="px-3 py-2.5 text-neutral-800 hover:bg-neutral-50 active:bg-neutral-100 rounded-lg font-medium text-base transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {dict.nav.about}
          </Link>

          {/* Mobile Books Accordion */}
          <div className="rounded-lg overflow-hidden">
            <button 
              className="w-full text-left px-3 py-2.5 flex justify-between items-center text-neutral-800 hover:bg-neutral-50 active:bg-neutral-100 rounded-lg font-medium text-base transition-colors"
              onClick={() => setIsMobileBooksOpen(!isMobileBooksOpen)}
              aria-expanded={isMobileBooksOpen}
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#2D6A4F]" />
                <span>{dict.nav.books}</span>
              </span>
              <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 text-neutral-400 ${isMobileBooksOpen ? 'rotate-180 text-neutral-800' : ''}`} />
            </button>
            <div className={`pl-3 pr-2 bg-neutral-50/80 rounded-xl overflow-hidden transition-all duration-300 ${isMobileBooksOpen ? 'max-h-[600px] py-2 mt-1' : 'max-h-0'}`}>
              <div className="flex flex-col space-y-1">
                <Link 
                  href={`${langPrefix}/books/pazhampadu-panai`} 
                  className="px-3 py-2 text-sm font-bold text-[#2D6A4F] bg-emerald-100/60 rounded-lg flex items-center justify-between"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{lang === 'ta' ? 'பழம்படு பனை' : 'Pazhampadu Panai'}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wide text-white bg-[#2D6A4F] rounded-full px-1.5 py-0.5">{lang === 'ta' ? 'சிறப்பு' : 'Featured'}</span>
                </Link>
                <Link href={`${langPrefix}/books/albert-enum-kalaikalanjiyam`} className="px-3 py-2 text-sm text-neutral-700 hover:text-neutral-950 hover:bg-white rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'ta' ? 'ஆல்பர்ட் எனும் கலைக்களஞ்சியம்' : 'Albert Enum Kalaikalanjiyam'}</Link>
                <Link href={`${langPrefix}/books/nenjam-marapathillai`} className="px-3 py-2 text-sm text-neutral-700 hover:text-neutral-950 hover:bg-white rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'ta' ? 'நெஞ்சம் மறப்பதில்லை' : 'Nenjam Marappathillai'}</Link>
                <Link href={`${langPrefix}/books/sagayam-seitha-sagayam`} className="px-3 py-2 text-sm text-neutral-700 hover:text-neutral-950 hover:bg-white rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'ta' ? 'சகாயம் செய்த சகாயம்' : 'Sagayam Seitha Sagayam'}</Link>
                <Link href={`${langPrefix}/books/sathyajit-ray-kathaigal`} className="px-3 py-2 text-sm text-neutral-700 hover:text-neutral-950 hover:bg-white rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'ta' ? 'சத்யஜித் ரே கதைகள்' : 'Sathyajit Ray Stories'}</Link>
                <Link href={`${langPrefix}/books/melliya-kodugal`} className="px-3 py-2 text-sm text-neutral-700 hover:text-neutral-950 hover:bg-white rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'ta' ? 'மெல்லிய கோடுகள்' : 'Melliya Kodugal'}</Link>
                <Link href={`${langPrefix}/books/kannisangu`} className="px-3 py-2 text-sm text-neutral-700 hover:text-neutral-950 hover:bg-white rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'ta' ? 'கன்னிச்சங்கு' : 'Kannichangu'}</Link>
                <Link href={`${langPrefix}/books/kasi-ayya`} className="px-3 py-2 text-sm text-neutral-700 hover:text-neutral-950 hover:bg-white rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'ta' ? 'காசி அய்யா' : 'Kasi Ayya'}</Link>
                <Link href={`${langPrefix}/books/nainthazum-kural`} className="px-3 py-2 text-sm text-neutral-700 hover:text-neutral-950 hover:bg-white rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'ta' ? 'நைந்தழும் குரல்' : 'Nainthazum Kural'}</Link>
                <Link href={`${langPrefix}/books/lankesh-kathaigal`} className="px-3 py-2 text-sm text-neutral-700 hover:text-neutral-950 hover:bg-white rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'ta' ? 'லங்கேஷ் கதைகள்' : 'Lankesh Kathaigal'}</Link>
              </div>
            </div>
          </div>

          <Link 
            href={`${langPrefix}/#coming-soon`} 
            className="px-3 py-2.5 text-neutral-800 hover:bg-neutral-50 active:bg-neutral-100 rounded-lg font-medium text-base transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {dict.nav.coming_soon}
          </Link>
          
          <Link 
            href={`${langPrefix}/#our-team`} 
            className="px-3 py-2.5 text-neutral-800 hover:bg-neutral-50 active:bg-neutral-100 rounded-lg font-medium text-base transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {dict.nav.our_team}
          </Link>
          
          <Link 
            href={`${langPrefix}/contact`} 
            className="px-3 py-2.5 text-neutral-800 hover:bg-neutral-50 active:bg-neutral-100 rounded-lg font-medium text-base transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {dict.nav.contact}
          </Link>

          {/* Language Switcher Row in Mobile Menu */}
          <div className="pt-3 pb-1 border-t border-neutral-100">
            <Link
              href={targetPath}
              className="flex items-center justify-between px-3 py-2.5 bg-neutral-100/70 hover:bg-neutral-100 rounded-xl transition-colors font-semibold text-sm text-neutral-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-neutral-600" />
                <span>{lang === 'ta' ? 'Switch Language' : 'மொழி மாற்றம்'}</span>
              </span>
              <span className="text-xs bg-white px-2.5 py-1 rounded-full border border-neutral-200 text-neutral-900 font-bold">
                {lang === 'ta' ? 'English' : 'தமிழ்'}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
