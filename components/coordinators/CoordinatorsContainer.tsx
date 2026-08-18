'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Search,
  MapPin,
  Phone,
  X,
  Copy,
  Check,
  MessageCircle,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { cities, coordinators } from '@/data/coordinators';
import { books } from '@/data/books';

function CoordinatorsContent({ dict, lang }: { dict: any; lang: string }) {
  const searchParams = useSearchParams();
  const bookSlugFromUrl = searchParams.get('book') || searchParams.get('post');

  const isTa = lang === 'ta';

  const [activeBookSlug, setActiveBookSlug] = useState<string | null>(bookSlugFromUrl);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  useEffect(() => {
    if (bookSlugFromUrl) {
      setActiveBookSlug(bookSlugFromUrl);
    }
  }, [bookSlugFromUrl]);

  const activeBook = useMemo(() => {
    if (!activeBookSlug) return null;
    return books.find(b => b.id === activeBookSlug) || null;
  }, [activeBookSlug]);

  const cityById = useMemo(() => new Map(cities.map(c => [c.id, c])), []);

  // Filter coordinators by search query and region
  const filteredCoordinators = useMemo(() => {
    return coordinators.filter(coord => {
      const city = cityById.get(coord.location);

      const matchesSearch =
        coord.name.ta.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coord.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coord.area.ta.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coord.area.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (city && (
          city.name.ta.toLowerCase().includes(searchQuery.toLowerCase()) ||
          city.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (city.region && (
            city.region.ta.toLowerCase().includes(searchQuery.toLowerCase()) ||
            city.region.en.toLowerCase().includes(searchQuery.toLowerCase())
          ))
        ));

      const matchesRegion =
        selectedRegion === 'all' ||
        (city && (
          (selectedRegion === 'delta' && city.region?.en === 'Delta') ||
          (selectedRegion === 'south' && city.region?.en === 'South TN') ||
          (selectedRegion === 'north' && city.region?.en === 'North TN') ||
          (selectedRegion === 'west' && city.region?.en === 'West TN') ||
          (selectedRegion === 'online' && coord.location === 'online')
        ));

      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion, cityById]);

  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const activeBookTitle = activeBook
    ? (typeof activeBook.title === 'object' ? activeBook.title[isTa ? 'ta' : 'en'] : activeBook.title)
    : '';

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#1E1B18] pt-20 sm:pt-28 pb-16 sm:pb-24 selection:bg-emerald-100 selection:text-emerald-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <section className="text-center mb-8 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2D6A4F] mb-2.5 sm:mb-4">
            {isTa ? 'அலர் வெளியீடு · கள வலையமைப்பு' : 'Alar Veliyeedu · Field Network'}
          </p>
          <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#181614] mb-3 sm:mb-4 leading-tight">
            {isTa ? 'உங்கள் ஊரில் ஒருங்கிணைப்பாளர்' : 'Find your local coordinator'}
          </h1>
          <p className="text-sm sm:text-lg text-[#655E57] max-w-xl mx-auto leading-relaxed font-light px-2">
            {isTa
              ? 'அலர் வெளியீட்டின் நூல்களை அஞ்சல் கட்டணமின்றி, உங்கள் ஊரிலேயே நேரடியாகப் பெறுங்கள்.'
              : 'Get Alar Veliyeedu books directly in your city — no postal charges.'}
          </p>
        </section>

        {/* ── Active Book Enquiry (if ?book=) ── */}
        {activeBook && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 bg-[#EBF7EE] border border-[#B7E4C7] rounded-2xl p-4 sm:p-5 mb-8 sm:mb-10 shadow-2xs">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative w-12 h-16 rounded-lg overflow-hidden shrink-0 shadow-xs border border-emerald-200 bg-white">
                <Image
                  src={activeBook.image}
                  alt={activeBookTitle}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] font-bold text-[#2D6A4F] uppercase tracking-wider mb-0.5">
                  {isTa ? 'நூல் விசாரணை' : 'Book Enquiry'}
                </p>
                <h3 className="font-serif text-sm sm:text-lg font-bold text-[#181614] line-clamp-1">
                  {activeBookTitle}
                </h3>
                <p className="text-xs text-[#655E57]">
                  {isTa
                    ? 'ஒருங்கிணைப்பாளரைத் தொடர்புகொண்டு இந்நூலைப் பெறுங்கள்.'
                    : 'Contact a coordinator below to get this title.'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setActiveBookSlug(null)}
              className="flex items-center gap-1 text-xs font-semibold text-[#655E57] hover:text-[#181614] bg-white/90 hover:bg-white px-3 py-1.5 rounded-lg border border-[#D9CFC3] transition-colors shrink-0 self-end sm:self-center"
            >
              <X className="w-3.5 h-3.5" />
              <span>{isTa ? 'அகற்று' : 'Clear'}</span>
            </button>
          </div>
        )}

        {/* ── Search ── */}
        <div className="relative mb-4 sm:mb-5">
          <Search className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 pointer-events-none" />
          <input
            type="text"
            placeholder={isTa ? 'ஊர், மாவட்டம் அல்லது பெயரைத் தேடுக…' : 'Search city, district or coordinator…'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 sm:pl-12 pr-10 py-3 sm:py-3.5 bg-white border-2 border-[#D9CFC3] rounded-xl text-[#181614] placeholder:text-neutral-400 focus:outline-none focus:border-[#2D6A4F] transition-all text-sm sm:text-base shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-700 rounded-full"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* ── Region filters (horizontal swipe on mobile, wrap on desktop) ── */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar sm:flex-wrap -mx-4 px-4 sm:mx-0 sm:px-0">
          {[
            { id: 'all', label: isTa ? 'அனைத்தும்' : 'All' },
            { id: 'south', label: isTa ? 'தென் தமிழகம்' : 'South TN' },
            { id: 'north', label: isTa ? 'வட தமிழகம்' : 'North TN' },
            { id: 'delta', label: isTa ? 'டெல்டா' : 'Delta' },
            { id: 'west', label: isTa ? 'மேற்கு தமிழகம்' : 'West TN' },
            { id: 'online', label: isTa ? 'ஆன்லைன்' : 'Online' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedRegion(tab.id)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                selectedRegion === tab.id
                  ? 'bg-[#2D6A4F] text-white shadow-xs'
                  : 'bg-white text-[#655E57] border border-[#D9CFC3] hover:border-[#2D6A4F] hover:text-[#2D6A4F]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Count ── */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-[#655E57] mb-4 font-medium px-1">
          <span>
            {isTa
              ? `${filteredCoordinators.length} ஒருங்கிணைப்பாளர்கள்`
              : `${filteredCoordinators.length} coordinators`}
          </span>
          {selectedRegion !== 'all' && (
            <button
              onClick={() => setSelectedRegion('all')}
              className="text-[#2D6A4F] hover:underline font-semibold text-xs"
            >
              {isTa ? 'அனைத்தையும் காட்டு' : 'Show all'}
            </button>
          )}
        </div>

        {/* ── Coordinator cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {filteredCoordinators.map((coord) => {
            const city = cityById.get(coord.location);
            const cityName = city ? city.name[isTa ? 'ta' : 'en'] : '';
            const regionName = city?.region ? city.region[isTa ? 'ta' : 'en'] : '';

            let waMessage = '';
            if (activeBook) {
              waMessage = isTa
                ? `வணக்கம், அலர் வெளியீடு வெளியிட்டுள்ள '${activeBookTitle}' புத்தகம் வேண்டும் (${cityName}). விபரம் தேவை.\n\nhttps://alarveliyeedu.com/books/${activeBook.id}`
                : `Hello, I would like to purchase the book '${activeBookTitle}' from Alar Veliyeedu in ${cityName}. Please share details.\n\nhttps://alarveliyeedu.com/books/${activeBook.id}`;
            } else {
              waMessage = isTa
                ? `வணக்கம், அலர் வெளியீட்டின் புத்தகங்கள் பற்றி அறிய விரும்புகிறேன் (${cityName}).`
                : `Hello, I would like to enquire about Alar Veliyeedu books in ${cityName}.`;
            }
            const waUrl = `https://wa.me/${coord.waNum}?text=${encodeURIComponent(waMessage)}`;

            return (
              <div
                key={coord.id}
                className="bg-white border border-[#E7E1D8] rounded-2xl p-4 sm:p-5 hover:border-[#2D6A4F] hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div className="mb-3">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#181614] leading-snug">
                      {coord.name[isTa ? 'ta' : 'en']}
                    </h4>
                    {regionName && (
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-[#2D6A4F] bg-[#EBF7EE] border border-[#B7E4C7] rounded-full px-2 py-0.5 shrink-0">
                        {regionName}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#655E57] mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#2D6A4F]/70 shrink-0" />
                    <span>{cityName}</span>
                    {coord.area[isTa ? 'ta' : 'en'] && (
                      <>
                        <span className="text-neutral-300">·</span>
                        <span className="text-neutral-600">{coord.area[isTa ? 'ta' : 'en']}</span>
                      </>
                    )}
                  </p>
                </div>

                {/* Phone row */}
                <div className="flex items-center justify-between gap-2 bg-[#FAF8F5] border border-[#E7E1D8] rounded-xl p-2.5 sm:p-3 mb-3">
                  <a
                    href={`tel:${coord.phone}`}
                    className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#1B4332] hover:text-[#2D6A4F] min-w-0"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{coord.phone}</span>
                  </a>
                  <button
                    onClick={() => handleCopyPhone(coord.phone)}
                    className="p-1.5 text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 rounded-lg transition-colors flex items-center gap-1 text-xs shrink-0"
                    title={isTa ? 'நகலெடு' : 'Copy phone'}
                  >
                    {copiedPhone === coord.phone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold text-[11px]">{isTa ? 'நகலெடுக்கப்பட்டது' : 'Copied'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">{isTa ? 'நகலெடு' : 'Copy'}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] active:bg-[#19a550] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{isTa ? 'வாட்ஸ்அப் மூலம் தொடர்புகொள்ள' : 'Contact via WhatsApp'}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            );
          })}
        </div>

        {/* ── Empty state ── */}
        {filteredCoordinators.length === 0 && (
          <div className="text-center py-12 px-4">
            <div className="w-12 h-12 rounded-full bg-[#EBF7EE] flex items-center justify-center text-[#2D6A4F] mx-auto mb-3">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#181614] mb-1">
              {isTa ? 'எதுவும் பொருந்தவில்லை' : 'No coordinators matched'}
            </h3>
            <p className="text-xs sm:text-sm text-[#655E57] mb-4 max-w-sm mx-auto">
              {isTa
                ? 'வேறு எழுத்துக்களில் தேடவும், அல்லது ஆன்லைன் வழியைத் தேர்ந்தெடுக்கவும்.'
                : 'Try a different search, or select the Online coordinator.'}
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedRegion('all'); }}
              className="px-4 py-2 bg-[#2D6A4F] text-white text-xs font-semibold rounded-lg hover:bg-[#1B4332] transition-colors"
            >
              {isTa ? 'அனைத்தையும் காட்டு' : 'Clear filters'}
            </button>
          </div>
        )}

        {/* ── Flagship link ── */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href={`${isTa ? '' : '/en'}/books/pazhampadu-panai`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2D6A4F] hover:text-[#1B4332] transition-colors"
          >
            <span>{isTa ? 'பழம்படு பனை — சிறப்பு வெளியீடு பக்கம்' : 'Pazhampadu Panai — featured publication'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </main>
    </div>
  );
}

export default function CoordinatorsContainer({ dict, lang }: { dict: any; lang: string }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF8F5] pt-28 text-center text-sm text-neutral-500">Loading coordinators…</div>}>
      <CoordinatorsContent dict={dict} lang={lang} />
    </Suspense>
  );
}
