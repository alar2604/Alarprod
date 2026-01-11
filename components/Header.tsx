"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

export default function Header({ dict, lang }: { dict: any, lang: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBooksOpen, setIsBooksOpen] = useState(false);
  const [isMobileBooksOpen, setIsMobileBooksOpen] = useState(false);
  const [isImprintOpen, setIsImprintOpen] = useState(false);
  const [isMobileImprintOpen, setIsMobileImprintOpen] = useState(false);

  const pathname = usePathname();
  
  // Determine prefix based on language
  const langPrefix = lang === 'ta' ? '' : `/${lang}`;
  
  // Determine target language for toggle
  // If current is 'ta' (root), target is '/en' + current path
  // If current is 'en', target is current path without '/en'
  const targetPath = lang === 'ta' 
    ? `/en${pathname === '/' ? '' : pathname}` 
    : (pathname.replace(/^\/en($|\/)/, '$1') || '/');

  return (
    <header id="header" className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="mx-auto relative">
        <nav className="flex justify-between md:justify-center gap-4 items-center px-4 h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`${langPrefix}/`} className="text-2xl font-bold text-neutral-800">
              <Image 
                src="/images/alarlogo.png"
                alt="Alar veliyeedu" 
                width={80} 
                height={80}
                className="h-20 w-auto" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href={`${langPrefix}/`} className="text-neutral-700 hover:text-neutral-900 text-base transition-colors duration-300">
              {dict.nav.home}
            </Link>
            
            <Link href={`${langPrefix}/#about-us`} className="text-neutral-700 hover:text-neutral-900 text-base transition-colors duration-300">
              {dict.nav.about}
            </Link>
            
            {/* Books Dropdown Trigger */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsBooksOpen(true)}
              onMouseLeave={() => setIsBooksOpen(false)}
            >
              <button 
                className="text-neutral-700 hover:text-neutral-900 text-base transition-colors duration-300 inline-flex items-center outline-none"
              >
                {dict.nav.books}
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              
              {/* Mega Menu Dropdown */}
              <div 
                className={`absolute left-1/2 transform -translate-x-1/2 mt-0 w-80 bg-white shadow-lg border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isBooksOpen ? 'max-h-[300px] opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`}
              >
                 <div className="flex flex-col">
                   <Link href={`${langPrefix}/books/sathyajit-ray-kathaigal`} className="text-neutral-700 hover:text-neutral-900 block px-4 py-2 hover:bg-gray-50 text-sm whitespace-nowrap">{lang === 'ta' ? 'சத்யஜித் ரே கதைகள்' : 'Sathyajit Ray Stories'}</Link>
                   <Link href={`${langPrefix}/books/nenjam-marapathillai`} className="text-neutral-700 hover:text-neutral-900 block px-4 py-2 hover:bg-gray-50 text-sm whitespace-nowrap">{lang === 'ta' ? 'நெஞ்சம் மறப்பதில்லை' : 'Nenjam Marapathillai'}</Link>
                   <Link href={`${langPrefix}/books/albert-enum-kalaikalanjiyam`} className="text-neutral-700 hover:text-neutral-900 block px-4 py-2 hover:bg-gray-50 text-sm whitespace-nowrap">{lang === 'ta' ? 'ஆல்பர்ட் எனும் கலைக்களஞ்சியம்' : 'Albert Enum Kalaikalanjiyam'}</Link>
                   <Link href={`${langPrefix}/books/sagayam-seitha-sagayam`} className="text-neutral-700 hover:text-neutral-900 block px-4 py-2 hover:bg-gray-50 text-sm whitespace-nowrap">{lang === 'ta' ? 'சகாயம் செய்த சகாயம்' : 'Sagayam Seitha Sagayam'}</Link>
                </div>
              </div>
            </div>

            {/* Imprint Dropdown Trigger */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsImprintOpen(true)}
              onMouseLeave={() => setIsImprintOpen(false)}
            >
              <button 
                className="text-neutral-700 hover:text-neutral-900 text-base transition-colors duration-300 inline-flex items-center outline-none"
              >
                {/* Fallback string if dict key is missing temporarily during dev */}
                {dict.nav.imprint || "Imprint"}
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              
              {/* Imprint Dropdown */}
              <div 
                className={`absolute left-1/2 transform -translate-x-1/2 mt-0 w-48 bg-white shadow-lg border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isImprintOpen ? 'max-h-[200px] opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`}
              >
                  <div className="flex flex-col">
                    <div className="text-neutral-400 px-4 py-2 text-sm whitespace-nowrap">
                      {dict.nav.yaa_veliyeedu || "Yaa Veliyeedu"}
                    </div>
                  </div>
              </div>
            </div>

            <Link href={`${langPrefix}/#coming-soon`} className="text-neutral-700 hover:text-neutral-900 text-base transition-colors duration-300">
              {dict.nav.coming_soon}
            </Link>
            
            <Link href={`${langPrefix}/#our-team`} className="text-neutral-700 hover:text-neutral-900 text-base transition-colors duration-300">
              {dict.nav.our_team}
            </Link>
            
            <Link href={`${langPrefix}/contact`} className="text-neutral-700 hover:text-neutral-900 text-base transition-colors duration-300">
              {dict.nav.contact}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center p-2 text-neutral-700" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="flex flex-col p-4 space-y-2">
            <Link href={`${langPrefix}/`} className="py-2 text-neutral-700 hover:text-neutral-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {dict.nav.home}
            </Link>
            
            <Link href={`${langPrefix}/#about-us`} className="py-2 text-neutral-700 hover:text-neutral-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {dict.nav.about}
            </Link>

            {/* Mobile Books Dropdown */}
            <div>
              <button 
                className="w-full text-left py-2 flex justify-between items-center text-neutral-700 font-medium"
                onClick={() => setIsMobileBooksOpen(!isMobileBooksOpen)}
              >
                <span>{dict.nav.books}</span>
                <ChevronDown className={`h-4 w-4 transform transition-transform ${isMobileBooksOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`pl-4 bg-gray-50 rounded-md overflow-hidden transition-all duration-300 ${isMobileBooksOpen ? 'max-h-96 py-2' : 'max-h-0'}`}>
                <Link href={`${langPrefix}/books/albert-enum-kalaikalanjiyam`} className="block py-2 text-neutral-600 hover:text-neutral-900">{lang === 'ta' ? 'ஆல்பர்ட் எனும் கலைக்களஞ்சியம்' : 'Albert Enum Kalaikalanjiyam'}</Link>
                <Link href={`${langPrefix}/books/sathyajit-ray-kathaigal`} className="block py-2 text-neutral-600 hover:text-neutral-900">{lang === 'ta' ? 'சத்யஜித் ரே கதைகள்' : 'Sathyajit Ray Stories'}</Link>
                <Link href={`${langPrefix}/books/sagayam-seitha-sagayam`} className="block py-2 text-neutral-600 hover:text-neutral-900">{lang === 'ta' ? 'சகாயம் செய்த சகாயம்' : 'Sagayam Seitha Sagayam'}</Link>
                <Link href={`${langPrefix}/books/nenjam-marapathillai`} className="block py-2 text-neutral-600 hover:text-neutral-900">{lang === 'ta' ? 'நெஞ்சம் மறப்பதில்லை' : 'Nenjam Marapathillai'}</Link>
              </div>
            </div>

            {/* Mobile Imprint Dropdown */}
            <div>
              <button 
                className="w-full text-left py-2 flex justify-between items-center text-neutral-700 font-medium"
                onClick={() => setIsMobileImprintOpen(!isMobileImprintOpen)}
              >
                <span>{dict.nav.imprint || "Imprint"}</span>
                <ChevronDown className={`h-4 w-4 transform transition-transform ${isMobileImprintOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`pl-4 bg-gray-50 rounded-md overflow-hidden transition-all duration-300 ${isMobileImprintOpen ? 'max-h-24 py-2' : 'max-h-0'}`}>
                <div className="py-2 text-neutral-400">
                  {dict.nav.yaa_veliyeedu || "Yaa Veliyeedu"}
                </div>
              </div>
            </div>

            <Link href={`${langPrefix}/#coming-soon`} className="py-2 text-neutral-700 hover:text-neutral-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {dict.nav.coming_soon}
            </Link>
             <Link href={`${langPrefix}/#our-team`} className="py-2 text-neutral-700 hover:text-neutral-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {dict.nav.our_team}
            </Link>
            <Link href={`${langPrefix}/contact`} className="py-2 text-neutral-700 hover:text-neutral-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {dict.nav.contact}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Language Switcher */}
      <div className="fixed top-20 right-4 md:right-8 z-50 md:top-5">
        <Link href={targetPath}>
             <Image 
                src="/images/switchlang.svg" 
                alt="Switch Language" 
                width={40} 
                height={40}
                className="w-10 h-auto hover:scale-110 transition-transform duration-200"
              />
          <span className="sr-only">Switch Language</span>
        </Link>
      </div>
    </header>
  );
}
