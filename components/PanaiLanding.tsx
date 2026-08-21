'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Check,
  MapPin,
  ExternalLink,
  ChevronDown,
  Sparkles,
  BookOpen,
  ShieldCheck,
  Truck,
  MessageCircle,
  Phone,
  Trees,
  Feather,
  Calendar,
  Award
} from 'lucide-react';

interface LocalizedText {
  ta: string;
  en: string;
}

interface PanaiBook {
  id: string;
  title: LocalizedText;
  subtitle?: LocalizedText;
  author: LocalizedText;
  role?: string;
  price?: string;
  salePrice?: string;
  originalPrice?: string;
  volumeInfo?: LocalizedText;
  image: string;
  fullCoverImage?: string;
  gallery?: string[];
  desc: LocalizedText;
  longDesc?: LocalizedText;
  highlights?: LocalizedText[];
  details: {
    edition?: LocalizedText;
    category?: LocalizedText;
    pages?: LocalizedText;
    format?: LocalizedText;
    paper?: LocalizedText;
    size?: LocalizedText;
    publisher?: LocalizedText;
    coverDesign?: LocalizedText;
    foreword?: LocalizedText;
    preorderDates?: LocalizedText;
    dispatchDate?: LocalizedText;
    copiesLimit?: LocalizedText;
    contactPhones?: string[];
    isbn?: string;
    buyLinks?: { dodo?: string };
    quotes?: { text: LocalizedText; author: LocalizedText }[];
  };
}

// ── Smooth Count Animation Component ──
function AnimatedCount({ target, suffix = '', duration = 1600 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    let animId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [hasStarted, target, duration]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

// ── Scroll Reveal Wrapper: gentle rise + fade on entry ──
function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.02, rootMargin: '120px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-500 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function PanaiLanding({ book, lang }: { book: PanaiBook; lang: string }) {
  const isTa = lang === 'ta';
  const t = (obj: LocalizedText | undefined): string => (obj ? obj[isTa ? 'ta' : 'en'] : '');
  const langPrefix = isTa ? '' : '/en';

  const title = t(book.title);
  const author = t(book.author);
  const desc = t(book.desc);
  const longDesc = t(book.longDesc);
  const quotes = book.details.quotes || [];
  const highlights = book.highlights || [];

  const galleryImages = book.gallery && book.gallery.length > 0
    ? book.gallery
    : [book.image, '/images/pazhampadu_panai_vol1.webp', '/images/pazhampadu_panai_vol2.webp'];

  const [selectedImage, setSelectedImage] = useState<string>(book.image);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const discountPercent = book.originalPrice && (book.salePrice || book.price)
    ? Math.round(((Number(book.originalPrice) - Number(book.salePrice || book.price)) / Number(book.originalPrice)) * 100)
    : 60;

  const forewordScholars = [
    { name: isTa ? 'ஆ. சிவசுப்பிரமணியன்' : 'A. Sivasubramanian', role: isTa ? 'பண்பாட்டு ஆய்வாளர்' : 'Cultural Historian' },
    { name: isTa ? 'கு. வி. கிருஷ்ணமூர்த்தி' : 'Ku. Vi. Krishnamurthy', role: isTa ? 'தாவரவியல் பேராசிரியர்' : 'Botanist & Scholar' },
    { name: isTa ? 'பெருமாள்முருகன்' : 'Perumal Murugan', role: isTa ? 'எழுத்தாளர்' : 'Renowned Author' },
    { name: isTa ? 'காட்சன் சாமுவேல்' : 'Godson Samuel', role: isTa ? 'பனை ஆர்வலர்' : 'Palmyra Activist' },
  ];

  const faqs = [
    {
      q: isTa ? 'முன்பதிவுத் திட்டம் எந்த தேதி வரை செயல்படும்?' : 'What are the dates for the pre-order scheme?',
      a: isTa
        ? 'இத்திட்டம் செப்டம்பர் 01 முதல் அக்டோபர் 15 வரை மட்டுமே செயல்படும். 2000 பிரதிகள் மட்டுமே மக்கள் பதிப்பாக அச்சிடப்படுகின்றன.'
        : 'The scheme runs from September 01 to October 15 only. Limited strictly to 2000 copies as a special People Edition.'
    },
    {
      q: isTa ? 'முன்பதிவு செய்த நூல்கள் எப்போது அனுப்பிவைக்கப்படும்?' : 'When will the pre-ordered books be dispatched?',
      a: isTa
        ? 'நூல் அக்டோபர் 20க்குப் பிறகு அஞ்சல் / கூரியர் மூலமாக உங்கள் முகவரிக்கு அனுப்பிவைக்கப்படும்.'
        : 'Books will be dispatched after October 20 via postal/courier directly to your address.'
    },
    {
      q: isTa ? 'கள ஒருங்கிணைப்பாளர் மூலம் எப்படி முன்பதிவு செய்வது?' : 'How to pre-order via local coordinator?',
      a: isTa
        ? 'தமிழ்நாடு முழுவதும் 25+ மையங்களில் கள ஒருங்கிணைப்பாளர்கள் உள்ளனர். உங்கள் ஊர் ஒருங்கிணைப்பாளருக்கு நேரடியாக வாட்ஸ்அப் / போன் மூலம் தொடர்புகொண்டு அஞ்சல் கட்டணமின்றி முன்பதிவு செய்து பெற்றுக்கொள்ளலாம்.'
        : 'We have coordinators across 25+ centers in Tamil Nadu. You can connect directly on WhatsApp with zero postal fees.'
    },
    {
      q: isTa ? 'இத்தொகுப்பில் என்னென்ன கதைகள் இடம்பெற்றுள்ளன?' : 'What stories are included in this anthology?',
      a: isTa
        ? '1 மரம் · 100 எழுத்தாளர்கள் · 120 சிறுகதைகள். நூற்றாண்டு கண்ட தமிழ்ச் சிறுகதைப் பரப்பிலிருந்து பனை மரத்தை மையமாகக் கொண்ட 120 அரிய கதைகள் இதில் ஆவணப்படுத்தப்பட்டுள்ளன.'
        : '1 Tree · 100 Writers · 120 Short Stories. Curated across a century of Tamil fiction celebrating the palmyra tree.'
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#1E1B18] pt-20 sm:pt-28 pb-20 sm:pb-24 selection:bg-emerald-100 selection:text-emerald-900 font-sans">

      {/* ── HERO SECTION: 3D Showcase & Dynamic Aura ── */}
      <section className="relative max-w-5xl mx-auto px-4 text-center overflow-hidden">

        {/* Soft Ambient Background Aura */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[450px] bg-emerald-500/5 blur-[90px] sm:blur-[120px] pointer-events-none rounded-full" />

        {/* 1. 3D Image Showcase */}
        <div className="relative max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 z-10">
          <div className="relative w-full h-[260px] xs:h-[320px] sm:h-[480px] md:h-[600px] flex items-center justify-center p-2">
            <Image
              src={selectedImage}
              alt={title}
              fill
              priority
              className="object-contain drop-shadow-[0_18px_36px_rgba(0,0,0,0.15)] sm:drop-shadow-[0_28px_56px_rgba(0,0,0,0.18)] transition-all duration-300"
              sizes="(max-width: 640px) 95vw, (max-width: 768px) 80vw, 850px"
            />
          </div>

          {/* Interactive Thumbnails */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
            {galleryImages.map((imgSrc, idx) => {
              const labels = [
                isTa ? 'இரு தொகுதிகள்' : 'Complete Set',
                isTa ? 'தொகுதி 1' : 'Volume 1',
                isTa ? 'தொகுதி 2' : 'Volume 2'
              ];
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(imgSrc)}
                  className={`group relative flex flex-col items-center gap-1 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl border-2 transition-all bg-white ${
                    selectedImage === imgSrc
                      ? 'border-[#2D6A4F] shadow-md scale-105 ring-2 sm:ring-4 ring-emerald-500/15'
                      : 'border-[#E7E1D8] opacity-75 hover:opacity-100 hover:border-neutral-400'
                  }`}
                  aria-label={`View ${labels[idx] || `image ${idx + 1}`}`}
                >
                  <div className="relative w-12 h-16 xs:w-14 xs:h-18 sm:w-20 sm:h-24 rounded-lg sm:rounded-xl overflow-hidden bg-[#FAF8F5]">
                    <Image
                      src={imgSrc}
                      alt={labels[idx] || `Thumbnail ${idx + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className={`text-[9px] sm:text-xs font-semibold px-1.5 py-0.5 rounded-full ${
                    selectedImage === imgSrc ? 'bg-[#2D6A4F] text-white' : 'text-neutral-600'
                  }`}>
                    {labels[idx] || `படம் ${idx + 1}`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Book Title & Details */}
        <div className="relative max-w-3xl mx-auto mt-6 sm:mt-8 z-10">

          {/* Top Banner Tag */}
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#2D6A4F] bg-[#EBF7EE] border border-[#B7E4C7] px-3 py-1 rounded-full shadow-2xs">
              {isTa ? 'விரைவில் மக்கள் பதிப்பாக...' : 'Coming Soon as People\'s Edition...'}
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full shadow-2xs">
              {isTa ? 'முன்பதிவுத் திட்டம்' : 'Pre-order Scheme'}
            </span>
          </div>

          <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#181614] leading-tight mb-2">
            {title}
          </h1>

          {/* Tagline */}
          <div className="my-3 sm:my-4">
            <p className="font-serif text-lg sm:text-2xl text-[#2D6A4F] font-bold tracking-wide">
              {isTa ? 'ஒரு மரம்' : 'One Tree'}
            </p>
            <p className="font-serif text-sm sm:text-lg text-[#655E57] mt-0.5 sm:mt-1 font-medium">
              {isTa ? '100 எழுத்தாளர்கள் · 120 சிறுகதைகள்' : '100 Writers · 120 Short Stories'}
            </p>
          </div>

          {/* Compilers */}
          <p className="text-xs sm:text-base text-[#655E57] mb-3 sm:mb-4">
            {isTa ? 'தொகுப்பாசிரியர்கள்' : 'Compiled by'} · <span className="font-semibold text-[#1E1B18]">{author}</span>
          </p>

          {/* Specs Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-[#2D6A4F] bg-[#EBF7EE] border border-[#B7E4C7] rounded-full px-3.5 py-1.5 mb-5 sm:mb-6">
            <span>Paper back</span>
            <span>•</span>
            <span>{isTa ? 'டெமி Size' : 'Demy Size'}</span>
            <span>•</span>
            <span>{isTa ? '1500 பக்கங்கள்' : '1500 Pages'}</span>
            <span>•</span>
            <span>{isTa ? 'இரு தொகுதிகள்' : 'Two Volumes'}</span>
          </div>

          <p className="text-sm sm:text-lg text-[#1E1B18] leading-relaxed font-light max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            {desc}
          </p>

          {/* Pricing Highlight Card */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3.5 bg-white border-2 border-[#B7E4C7] px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl shadow-xs mb-6 sm:mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-[11px] sm:text-xs text-[#655E57] uppercase font-semibold">
                {isTa ? 'முன்பதிவுத் திட்டத்தில்:' : 'Pre-order Price:'}
              </span>
              <span className="text-2xl sm:text-4xl font-bold text-[#2D6A4F]">
                {isTa ? 'ரூ. ' : 'Rs. '}{book.salePrice || '750'} {isTa ? 'மட்டுமே' : 'only'}
              </span>
            </div>
            {book.originalPrice && (
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-lg text-[#655E57] line-through">
                  {isTa ? 'ரூ. ' : 'Rs. '}{book.originalPrice}
                </span>
                <span className="text-xs font-bold text-white bg-[#2D6A4F] rounded-full px-2.5 py-0.5 shadow-2xs">
                  {isTa ? `${discountPercent}% தள்ளுபடி` : `${discountPercent}% OFF`}
                </span>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-2">
            {book.details.buyLinks?.dodo && (
              <a
                href={book.details.buyLinks.dodo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2D6A4F] hover:bg-[#1B4332] active:bg-[#153427] text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-transform hover:-translate-y-0.5 active:translate-y-0 shadow-md"
              >
                <span>{isTa ? 'முன்பதிவு செய்க' : 'Pre-order'}</span>
                <ExternalLink className="w-4 h-4 opacity-85" />
              </a>
            )}
            <Link
              href={`${langPrefix}/coordinators?book=${book.id}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border-2 border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#EBF7EE] active:bg-emerald-100 px-7 py-3.5 rounded-xl font-semibold text-base transition-colors shadow-2xs"
            >
              <MapPin className="w-4 h-4" />
              <span>{isTa ? 'ஒருங்கிணைப்பாளர்கள்' : 'Find Coordinators'}</span>
            </Link>
          </div>

          {/* Contact Hotline Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-semibold text-[#655E57]">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>{isTa ? 'முன்பதிவிற்கு:' : 'Pre-order Hotline:'}</span>
            </span>
            <a href="tel:7200111312" className="text-[#2D6A4F] hover:underline font-bold">7200111312</a>
            <span>|</span>
            <a href="tel:8015469260" className="text-[#2D6A4F] hover:underline font-bold">8015469260</a>
          </div>

        </div>

      </section>

      {/* ── PRE-ORDER SCHEME TIMELINE BANNER ── */}
      <section className="max-w-4xl mx-auto px-4 mt-12 sm:mt-20">
        <Reveal>
        <div className="bg-white border border-[#E7E1D8] rounded-3xl p-5 sm:p-8 shadow-xs text-center">

          <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2D6A4F] bg-[#EBF7EE] border border-[#B7E4C7] px-3.5 py-1.5 rounded-full mb-3 sm:mb-4">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{isTa ? 'முன்பதிவுத் திட்ட முக்கிய விவரங்கள்' : 'Pre-order Scheme Timeline'}</span>
          </div>

          <div className="space-y-1.5 sm:space-y-2 text-[#181614] font-serif text-base sm:text-xl font-bold leading-relaxed mb-3 sm:mb-4">
            <p>
              {isTa
                ? 'இத்திட்டம் செப்டம்பர் 01 முதல் அக்டோபர் 15 வரை மட்டுமே...'
                : 'Scheme valid from September 01 to October 15 only...'}
            </p>
            <p className="text-sm sm:text-lg text-[#2D6A4F]">
              {isTa
                ? 'நூல் அக்டோபர் 20க்குப் பிறகு அனுப்பிவைக்கப்படும்.'
                : 'Books will be dispatched after October 20.'}
            </p>
          </div>

          <div className="inline-block bg-amber-50 border border-amber-300 text-amber-900 font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-2xs">
            {isTa ? '✨ 2000 பிரதிகள் மட்டுமே...' : '✨ Limited to 2000 copies only...'}
          </div>

        </div>
        </Reveal>
      </section>

      {/* ── ANIMATED NUMBERS METRICS GRID ── */}
      <section className="max-w-4xl mx-auto px-4 mt-10 sm:mt-12">
        <div className="bg-white border border-[#E7E1D8] rounded-3xl p-5 sm:p-8 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">

            <div className="p-3 bg-neutral-50/70 rounded-2xl md:bg-transparent md:p-0">
              <span className="block font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D6A4F] mb-1">
                <AnimatedCount target={1} duration={1000} />
              </span>
              <span className="text-xs sm:text-sm text-[#655E57] font-semibold leading-snug">
                {isTa ? 'ஒரு மரம்' : 'One Tree'}
              </span>
            </div>

            <div className="p-3 bg-neutral-50/70 rounded-2xl md:bg-transparent md:p-0">
              <span className="block font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D6A4F] mb-1">
                <AnimatedCount target={100} duration={1600} />
              </span>
              <span className="text-xs sm:text-sm text-[#655E57] font-semibold leading-snug">
                {isTa ? 'எழுத்தாளர்கள்' : 'Writers'}
              </span>
            </div>

            <div className="p-3 bg-neutral-50/70 rounded-2xl md:bg-transparent md:p-0">
              <span className="block font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D6A4F] mb-1">
                <AnimatedCount target={120} duration={1600} />
              </span>
              <span className="text-xs sm:text-sm text-[#655E57] font-semibold leading-snug">
                {isTa ? 'சிறுகதைகள்' : 'Short Stories'}
              </span>
            </div>

            <div className="p-3 bg-neutral-50/70 rounded-2xl md:bg-transparent md:p-0">
              <span className="block font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D6A4F] mb-1">
                <AnimatedCount target={1500} duration={1800} />
              </span>
              <span className="text-xs sm:text-sm text-[#655E57] font-semibold leading-snug">
                {isTa ? 'பக்கங்கள் (இரு தொகுதிகள்)' : 'Pages (2 Volumes)'}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOREWORDS (அணிந்துரை நல்கியோர்) ── */}
      <section className="max-w-4xl mx-auto px-4 mt-14 sm:mt-20">
        <div className="bg-white border border-[#E7E1D8] rounded-3xl p-5 sm:p-9 shadow-xs">

          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2D6A4F] bg-[#EBF7EE] border border-[#B7E4C7] px-3.5 py-1.5 rounded-full mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>{isTa ? 'சிறப்பு அணிந்துரைகள்' : 'Scholarly Forewords'}</span>
            </div>
            <h3 className="font-serif text-xl sm:text-3xl font-bold text-[#181614]">
              {isTa ? 'அணிந்துரை நல்கிய மூத்த அறிஞர்கள்' : 'Distinguished Scholars & Writers'}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            {forewordScholars.map((scholar, idx) => (
              <div key={idx} className="bg-[#FAF8F5] border border-[#E7E1D8] rounded-2xl p-3 sm:p-4.5 flex flex-col items-center justify-center">
                <span className="font-serif text-sm sm:text-lg font-bold text-[#181614] mb-1">
                  {scholar.name}
                </span>
                <span className="text-[11px] sm:text-xs text-[#655E57] font-light">
                  {scholar.role}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#655E57] mt-5 sm:mt-6 italic">
            {isTa ? '— ஆகியோரின் விரிவான ஆய்வு அணிந்துரையுடன் வெளிவருகிறது.' : '— Published with extensive analytical forewords by these eminent figures.'}
          </p>

        </div>
      </section>

      {/* ── TWO VOLUMES SHOWCASE ── */}
      <section className="max-w-4xl mx-auto px-4 mt-16 sm:mt-24">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2D6A4F] mb-1.5 sm:mb-2">
            {isTa ? 'இரு தொகுதிகள்' : 'Two Volumes Breakdown'}
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#181614]">
            {isTa ? 'ஒரு கதைக்காலம், இரு பெரும் தொகுதிகள்' : 'One Century of Stories, Two Grand Volumes'}
          </h2>
          <p className="text-xs sm:text-sm text-[#655E57] mt-2 max-w-lg mx-auto font-light">
            {isTa
              ? 'பனை சார்ந்த நூறாண்டு கதைகளின் இருவேறு காலகட்டங்களை இரு பாகங்கள் வழியாக இந்த ஆவணம் பேசுகிறது.'
              : 'Two volumes documenting the classical roots and modern socio-political perspectives of Tamil palmyra life.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          {/* Volume 1 */}
          <div className="bg-white border border-[#E7E1D8] rounded-3xl p-5 sm:p-8 flex flex-col hover:border-[#2D6A4F] hover:shadow-lg transition-all">
            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-5 sm:mb-6 bg-[#FAF8F5] p-2 flex items-center justify-center">
              <Image
                src="/images/pazhampadu_panai_vol1.webp"
                alt="Volume 1 Cover"
                fill
                className="object-contain drop-shadow-md"
              />
            </div>

            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-[#EBF7EE] border border-[#B7E4C7] px-3.5 py-1 rounded-full">
                {isTa ? 'தொகுதி 1' : 'Volume 1'}
              </span>
              <span className="text-xs text-[#655E57] font-medium">
                {isTa ? '60 கதைகள்' : '60 Stories'}
              </span>
            </div>

            <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#181614] mb-2 sm:mb-3">
              {isTa ? 'மரபும் வாழ்வியலும் — தொடக்க கால கதைகள்' : 'Heritage & Folklore — The Classical Roots'}
            </h3>

            <p className="text-xs sm:text-sm text-[#655E57] leading-relaxed font-light mb-5 sm:mb-6 flex-1">
              {isTa
                ? 'தமிழர் தொல் பண்பாடு, பனை சார்ந்த நம்பிக்கைகள், கிராமிய வாழ்வியல் மற்றும் தொடக்க கால இலக்கிய ஆளுமைகளின் அரிய கதைகளின் தொகுப்பு.'
                : 'Focuses on ancient folkways, rural traditions, cultural beliefs, and early literary masterpieces exploring palmyra roots.'}
            </p>

            <div className="pt-4 border-t border-[#E7E1D8] flex items-center gap-2 text-xs font-semibold text-[#2D6A4F]">
              <Trees className="w-4 h-4" />
              <span>{isTa ? 'தொல்மரபு & நாட்டாரியல் சிறுகதைகள்' : 'Classical Roots & Folklore'}</span>
            </div>
          </div>

          {/* Volume 2 */}
          <div className="bg-white border border-[#E7E1D8] rounded-3xl p-5 sm:p-8 flex flex-col hover:border-[#2D6A4F] hover:shadow-lg transition-all">
            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-5 sm:mb-6 bg-[#FAF8F5] p-2 flex items-center justify-center">
              <Image
                src="/images/pazhampadu_panai_vol2.webp"
                alt="Volume 2 Cover"
                fill
                className="object-contain drop-shadow-md"
              />
            </div>

            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-[#EBF7EE] border border-[#B7E4C7] px-3.5 py-1 rounded-full">
                {isTa ? 'தொகுதி 2' : 'Volume 2'}
              </span>
              <span className="text-xs text-[#655E57] font-medium">
                {isTa ? '60 கதைகள்' : '60 Stories'}
              </span>
            </div>

            <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#181614] mb-2 sm:mb-3">
              {isTa ? 'உழைப்பும் அரசியலும் — சமகால எழுத்துகள்' : 'Labor & Politics — Modern Perspectives'}
            </h3>

            <p className="text-xs sm:text-sm text-[#655E57] leading-relaxed font-light mb-5 sm:mb-6 flex-1">
              {isTa
                ? 'பனைத்தொழிலாளர்களின் உழைப்பு, சந்தைக் கலாச்சாரம் எதிர்கொள்ளும் சவால்கள் மற்றும் சமகால அரசியல் சூழலின் கதைகள் அடங்கிய தொகுதி.'
                : 'Documents the toil of climbers, market transitions, ecological degradation, and contemporary socio-political short fiction.'}
            </p>

            <div className="pt-4 border-t border-[#E7E1D8] flex items-center gap-2 text-xs font-semibold text-[#2D6A4F]">
              <Feather className="w-4 h-4" />
              <span>{isTa ? 'சமகால உழைப்பு & சூழலியல் கதைகள்' : 'Contemporary Labor & Ecology'}</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── LITERARY NOTE: வாழ்வியல் தளங்கள் ── */}
      <section className="max-w-3xl mx-auto px-4 mt-14 sm:mt-20">
        <div className="bg-white border-l-4 border-[#2D6A4F] border border-[#E7E1D8] rounded-2xl p-5 sm:p-8 shadow-xs">

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#2D6A4F] mb-3">
            <BookOpen className="w-4 h-4" />
            <span>{isTa ? 'நூல் குறிப்பு · வாழ்வியல் தளங்கள்' : 'Publisher Note · Core Dimensions'}</span>
          </div>

          <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#181614] mb-3 sm:mb-4">
            {isTa ? 'நூலில் பதிவாகியுள்ள 4 முதன்மை வாழ்வியல் தளங்கள்' : 'Four Core Dimensions of the Anthology'}
          </h3>

          <div className="space-y-3 text-xs sm:text-base text-[#655E57] leading-relaxed">
            <p>
              <strong className="font-semibold text-[#181614]">{isTa ? 'பண்பாட்டு மரபு' : 'Cultural Heritage'} :</strong>{' '}
              {isTa
                ? 'பனை தமிழரின் தொல் அடையாளமாகவும், உணவாகவும், வழிபாட்டு மரபாகவும் விளங்கும் விதம்.'
                : 'How the palmyra stands as an ancient Tamil identity, food heritage, and sacred lore.'}
            </p>
            <p>
              <strong className="font-semibold text-[#181614]">{isTa ? 'வட்டார மணங்கள்' : 'Regional Scent'} :</strong>{' '}
              {isTa
                ? 'கொங்கு, கரிசல், நாஞ்சில், டெல்டா உள்ளிட்ட தமிழ்நாடு முழுவதும் உள்ள வட்டார பேச்சு வழக்குகளும் நிலப்பரப்பும்.'
                : 'Dialects and regional nuances across diverse Tamil Nadu landscapes.'}
            </p>
            <p>
              <strong className="font-semibold text-[#181614]">{isTa ? 'உழைப்பும் தொழிலும்' : 'Toil & Labor'} :</strong>{' '}
              {isTa
                ? 'பனை ஏறி வாழ்வோரின் அன்றாட உழைப்பு, உடல் வலி, வாழ்க்கைச் சவால்கள் மற்றும் அவர்களின் ஆளுமை.'
                : 'The daily toil, physical pain, and resilience of palm workers.'}
            </p>
            <p>
              <strong className="font-semibold text-[#181614]">{isTa ? 'சூழலியல் அரசியல்' : 'Ecology & Politics'} :</strong>{' '}
              {isTa
                ? 'பனை மர அழிவு, கள் தடை விவாதங்கள், சந்தைக் கலாச்சாரம் மற்றும் எதிர்கால சூழலியல் பாதுகாப்பு.'
                : 'Deforestation, prohibition discourse, market culture, and ecological balance.'}
            </p>
          </div>

        </div>
      </section>

      {/* ── CINEMATIC FULL-BLEED DARK QUOTE BAND ── */}
      <section className="bg-[#0B1E17] text-white mt-16 sm:mt-24 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mx-auto mb-4 sm:mb-6 opacity-80" />
          <blockquote className="font-serif text-lg xs:text-xl sm:text-3xl md:text-4xl text-[#F4F1EA] leading-relaxed font-medium mb-4 sm:mb-6 px-2">
            “{quotes.length > 0 ? t(quotes[0].text) : (isTa ? 'பனை என்பது மரமல்ல; அது தமிழரின் தொல் பண்பாட்டின், உழைப்பின், வாழ்வின் அடையாளம்.' : 'The palmyra is not just a tree; it is the living symbol of Tamil antiquity, toil, and life.')}”
          </blockquote>
          <footer className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            {quotes.length > 0 ? t(quotes[0].author) : (isTa ? '— பதிப்புரை, அலர் வெளியீடு' : '— Publisher Preface, Alar Veliyeedu')}
          </footer>
        </div>
      </section>

      {/* ── EDITORIAL OVERVIEW & HIGHLIGHTS ── */}
      <section className="max-w-3xl mx-auto px-4 mt-16 sm:mt-24">

        <div className="text-center mb-8 sm:mb-10 pb-4 border-b border-[#E7E1D8]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2D6A4F] mb-1.5 sm:mb-2">
            {isTa ? 'நூல் பற்றி' : 'About the Anthology'}
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#181614]">
            {isTa ? 'நூற்றாண்டு கண்ட தமிழ்ச் சிறுகதைப் பரப்பில் பனை' : 'The Palmyra in a Century of Tamil Short Fiction'}
          </h2>
        </div>

        {longDesc && (
          <div className="space-y-4 sm:space-y-6 text-[#1E1B18] leading-relaxed font-light text-sm sm:text-lg">
            {longDesc.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}

        {/* Highlights Checklist */}
        {highlights.length > 0 && (
          <div className="mt-8 sm:mt-12 bg-white border border-[#E7E1D8] rounded-3xl p-5 sm:p-8 shadow-xs">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#181614] mb-4 sm:mb-5 flex items-center gap-2">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D6A4F]" />
              <span>{isTa ? 'தொகுப்பின் சிறப்பம்சங்கள்' : 'Key Highlights of the Edition'}</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#1E1B18]">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#EBF7EE] text-[#2D6A4F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </span>
                  <span>{t(h)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      </section>

      {/* ── BIBLIOGRAPHIC SPECIFICATIONS MATRIX ── */}
      <section className="max-w-3xl mx-auto px-4 mt-14 sm:mt-20">
        <div className="bg-white border border-[#E7E1D8] rounded-3xl p-5 sm:p-8 shadow-xs">
          <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#181614] mb-5 sm:mb-6 text-center">
            {isTa ? 'நூல் விவரக் குறிப்புகள்' : 'Book Details & Specifications'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 sm:gap-y-3.5 gap-x-8 text-xs sm:text-sm">
            {[
              { label: isTa ? 'நூல் பெயர்' : 'Title', value: title },
              { label: isTa ? 'தொகுப்பாசிரியர்கள்' : 'Compilers', value: author },
              { label: isTa ? 'அணிந்துரை' : 'Forewords', value: isTa ? 'ஆ. சிவசுப்பிரமணியன், கு. வி. கிருஷ்ணமூர்த்தி, பெருமாள்முருகன், காட்சன் சாமுவேல்' : 'A. Sivasubramanian, Ku. Vi. Krishnamurthy, Perumal Murugan, Godson Samuel' },
              { label: isTa ? 'முகப்பு ஓவியம் & வடிவமைப்பு' : 'Cover Art & Design', value: isTa ? 'ரோஹிணி மணி' : 'Rohini Mani' },
              { label: isTa ? 'பதிப்பகம்' : 'Publisher', value: t(book.details.publisher) || (isTa ? 'அலர் வெளியீடு' : 'Alar Veliyeedu') },
              { label: isTa ? 'பதிப்பு வகை' : 'Edition', value: isTa ? 'மக்கள் பதிப்பு (2000 பிரதிகள் மட்டுமே)' : 'People Edition (2000 copies)' },
              { label: isTa ? 'வடிவம்' : 'Format', value: 'Paper back · ' + (isTa ? 'இரு தொகுதிகள்' : 'Two Volumes') },
              { label: isTa ? 'பக்கங்கள்' : 'Total Pages', value: '1500' },
              { label: isTa ? 'அளவு' : 'Size', value: isTa ? 'டெமி Size (1/8 Demy)' : 'Demy Size' },
              { label: isTa ? 'தாள் தரம்' : 'Paper Quality', value: '70 GSM நேச்சுரல் ஷேட்' },
              { label: isTa ? 'ISBN' : 'ISBN', value: book.details.isbn || '978-81-987267-0-4' },
            ].map((spec, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-[#E7E1D8]/60 gap-0.5 sm:gap-3">
                <span className="text-[#655E57] font-medium text-xs sm:text-sm">{spec.label}</span>
                <span className="font-semibold text-[#181614] text-left sm:text-right text-xs sm:text-sm">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE FAQ SECTION ── */}
      <section className="max-w-3xl mx-auto px-4 mt-14 sm:mt-20">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2D6A4F] mb-1.5 sm:mb-2">
            {isTa ? 'கேள்விகள்' : 'FAQ'}
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#181614]">
            {isTa ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'Frequently Asked Questions'}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="bg-white border border-[#E7E1D8] rounded-2xl overflow-hidden transition-all">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-4.5 text-left flex items-center justify-between gap-3 font-semibold text-[#181614] hover:text-[#2D6A4F] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-base font-serif">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#2D6A4F]' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-1 sm:px-6 sm:pb-5 text-xs sm:text-sm text-[#655E57] leading-relaxed font-light border-t border-[#E7E1D8]/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── UNIFIED GRAND PURCHASE & COORDINATORS BANNER ── */}
      <section className="max-w-3xl mx-auto px-4 mt-16 sm:mt-24">
        <div className="bg-white border-2 border-[#B7E4C7] rounded-3xl p-6 sm:p-12 text-center shadow-lg relative overflow-hidden">

          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#2D6A4F] uppercase tracking-wider bg-[#EBF7EE] border border-[#B7E4C7] px-3.5 py-1.5 rounded-full mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isTa ? 'சிறப்பு முன்பதிவு சலுகை' : 'Special Pre-order Offer'}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-[#181614] mb-2 sm:mb-3">
            {isTa ? 'பழம்படு பனை முழுத் தொகுப்பை இன்றே முன்பதிவு செய்யுங்கள்' : 'Pre-order the Complete Set Today'}
          </h3>

          <p className="text-xs sm:text-base text-[#655E57] mb-2 max-w-md mx-auto leading-relaxed font-light">
            {isTa
              ? 'தொகுதி 1 மற்றும் தொகுதி 2 இரண்டும் இணைந்த முழுமையான மக்கள் பதிப்பு பெருந்தொகுப்பு.'
              : 'Both Volumes 1 & 2 together in one definitive People\'s Edition.'}
          </p>

          <p className="text-[11px] sm:text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200 rounded-full px-3.5 py-1 w-fit mx-auto mb-5 sm:mb-6">
            {isTa ? 'செப்டம்பர் 01 முதல் அக்டோபர் 15 வரை மட்டுமே · 2000 பிரதிகள் மட்டுமே' : 'Sept 01 - Oct 15 Only · 2000 Copies Limit'}
          </p>

          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <span className="text-3xl sm:text-5xl font-bold text-[#2D6A4F]">
              {isTa ? 'ரூ. ' : 'Rs. '}{book.salePrice || '750'} {isTa ? 'மட்டுமே' : 'only'}
            </span>
            {book.originalPrice && (
              <span className="text-lg sm:text-2xl text-[#655E57] line-through">
                {isTa ? 'ரூ. ' : 'Rs. '}{book.originalPrice}
              </span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            {book.details.buyLinks?.dodo && (
              <a
                href={book.details.buyLinks.dodo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2D6A4F] hover:bg-[#1B4332] active:bg-[#153427] text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-transform hover:-translate-y-0.5 active:translate-y-0 shadow-md"
              >
                <span>{isTa ? 'முன்பதிவு செய்க' : 'Pre-order'}</span>
                <ExternalLink className="w-4 h-4 opacity-85" />
              </a>
            )}
            <Link
              href={`${langPrefix}/coordinators?book=${book.id}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#2D6A4F] hover:bg-emerald-50 active:bg-emerald-100 border-2 border-[#2D6A4F] px-8 py-3.5 rounded-xl font-semibold text-base transition-colors shadow-2xs"
            >
              <MapPin className="w-4 h-4" />
              <span>{isTa ? 'ஒருங்கிணைப்பாளர்கள்' : 'Find Coordinators'}</span>
            </Link>
          </div>

          {/* Hotline */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-[#655E57] mb-5 sm:mb-6">
            <span>{isTa ? 'நேரடி முன்பதிவிற்கு:' : 'Direct Helpline:'}</span>
            <a href="tel:7200111312" className="text-[#2D6A4F] hover:underline font-bold">7200111312</a>
            <span>/</span>
            <a href="tel:8015469260" className="text-[#2D6A4F] hover:underline font-bold">8015469260</a>
          </div>

          {/* Reassurance Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-[#E7E1D8] text-xs text-[#2D6A4F] font-medium">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{isTa ? 'அலர் வெளியீட்டின் மக்கள் பதிப்பு' : 'Direct Publisher Edition'}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Truck className="w-4 h-4 shrink-0" />
              <span>{isTa ? 'அக்டோபர் 20க்கு பின் விநியோகம்' : 'Dispatched After Oct 20'}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>{isTa ? 'வாட்ஸ்அப் உதவி சேவை' : 'Instant WhatsApp Support'}</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
