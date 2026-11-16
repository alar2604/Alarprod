'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  teamMembers,
  departments,
  publishingPillars,
  editorialStats,
  TeamMember,
  Department
} from '@/data/team';
import {
  BookOpen,
  Feather,
  Sparkles,
  Users,
  Search,
  Award,
  Layers,
  HeartHandshake,
  Compass,
  ArrowRight,
  Mail,
  CheckCircle2,
  Filter
} from 'lucide-react';

interface TeamContainerProps {
  dict: any;
  lang: string;
}

export default function TeamContainer({ dict, lang }: TeamContainerProps) {
  const isTa = lang === 'ta';
  const langPrefix = isTa ? '' : `/${lang}`;
  const t = (obj: { ta: string; en: string }) => (isTa ? obj.ta : obj.en);

  const [activeDept, setActiveDept] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filtered members
  const filteredMembers = useMemo(() => {
    return teamMembers.filter((member) => {
      const matchesDept = activeDept === 'all' || member.department === activeDept;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesDept;

      const nameTa = member.name.ta.toLowerCase();
      const nameEn = member.name.en.toLowerCase();
      const roleTa = member.role.ta.toLowerCase();
      const roleEn = member.role.en.toLowerCase();
      const focusTa = member.focus.ta.toLowerCase();
      const focusEn = member.focus.en.toLowerCase();

      const matchesSearch =
        nameTa.includes(query) ||
        nameEn.includes(query) ||
        roleTa.includes(query) ||
        roleEn.includes(query) ||
        focusTa.includes(query) ||
        focusEn.includes(query);

      return matchesDept && matchesSearch;
    });
  }, [activeDept, searchQuery]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#1E1B18] pt-24 sm:pt-32 pb-24 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* ── 1. HERO HEADER: Penguin-Style Editorial Ethos ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-5 sm:mb-6 shadow-2xs">
          <Users className="w-3.5 h-3.5 text-emerald-700" />
          <span>{isTa ? 'அலர் பதிப்பகக் குழு · எங்கள் மனிதர்கள்' : 'Alar Publishing House · Our People'}</span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#181614] leading-tight mb-4 sm:mb-6">
          {isTa ? 'எழுத்தின் பின்னிருக்கும் மனிதர்கள்' : 'The People Behind the Pages'}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#655E57] font-light max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10">
          {isTa
            ? 'வணிக சமரசங்களைத் தாண்டி, நிலைத்து நிற்கும் செவ்விலக்கியங்களையும் மண்ணின் மரபையும் அடுத்த தலைமுறைக்குக் கொண்டுசேர்க்கும் பதிப்பாசிரியர்கள், ஓவியர்கள், ஆய்வாளர்கள் மற்றும் களப்பணியாளர்கள்.'
            : 'Dedicated curators, typographers, archivists, and grassroots coordinators united by a shared devotion to craftsmanship, oral history, and enduring Tamil literature.'}
        </p>

        {/* Penguin-Style Literary Credo Quote */}
        <div className="max-w-2xl mx-auto bg-white border border-[#E7E1D8] rounded-2xl p-5 sm:p-6 shadow-xs relative">
          <div className="flex items-start gap-3 text-left">
            <Feather className="w-5 h-5 text-[#2D6A4F] shrink-0 mt-1" />
            <div>
              <p className="font-serif italic text-sm sm:text-base text-[#181614] leading-relaxed">
                {isTa
                  ? '“ஒரு பதிப்பகத்தின் பலம் அதன் விற்பனை எண்களில் இல்லை; அது தலைமுறைகள் தாண்டியும் வாசிக்கப்படக்கூடிய எத்தனை நூல்களைப் பாதுகாத்து உருவாக்கியிருக்கிறது என்பதிலேயே உள்ளது.”'
                  : '“A publishing house is measured not by transient bestseller charts, but by how faithfully it nurtures the words that outlive their century.”'}
              </p>
              <span className="block mt-2 text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider">
                — {isTa ? 'அலர் வெளியீட்டு நெறிமுறை' : 'Alar Editorial Credo'}
              </span>
            </div>
          </div>
        </div>

      </section>

      {/* ── 2. EDITORIAL PILLARS: How We Publish (Penguin Philosophy) ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24">
        
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2D6A4F] bg-[#EBF7EE] border border-[#B7E4C7] px-3 py-1 rounded-full mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{isTa ? 'எங்கள் பதிப்புக் கோட்பாடுகள்' : 'Publishing Philosophy'}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#181614]">
            {isTa ? 'அலர் பதிப்பகத்தின் நான்கு தூண்கள்' : 'Four Pillars of Our Publishing House'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {publishingPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white border border-[#E7E1D8] rounded-2xl p-6 sm:p-7 flex flex-col hover:border-[#2D6A4F] hover:shadow-md transition-all group"
            >
              <span className="font-serif text-2xl font-bold text-[#2D6A4F] mb-3 group-hover:scale-105 transition-transform inline-block">
                {pillar.number}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#181614] mb-2 leading-snug">
                {t(pillar.title)}
              </h3>
              <p className="text-xs sm:text-sm text-[#655E57] font-light leading-relaxed flex-1">
                {t(pillar.desc)}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ── 3. FILTER TABS & SEARCH BAR ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24">
        
        <div className="bg-white border border-[#E7E1D8] rounded-3xl p-4 sm:p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Department Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full md:w-auto">
            {departments.map((dept) => {
              const isActive = activeDept === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => setActiveDept(dept.id)}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#2D6A4F] text-white shadow-xs'
                      : 'bg-[#FAF8F5] text-[#655E57] hover:text-[#181614] hover:bg-[#EFECE6]'
                  }`}
                >
                  <span>{t(dept.name)}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#989087] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isTa ? 'பெயர், துறை அல்லது பணியைத் தேடுக...' : 'Search by name, role, or focus...'}
              className="w-full bg-[#FAF8F5] border border-[#E7E1D8] focus:border-[#2D6A4F] focus:bg-white text-xs sm:text-sm text-[#181614] rounded-xl pl-9 pr-3.5 py-2.5 outline-none transition-all placeholder:text-[#989087]"
            />
          </div>

        </div>

        {/* Active Department Description & Result Count */}
        <div className="flex items-center justify-between text-xs text-[#655E57] px-2 mt-3">
          <span>
            {t(departments.find((d) => d.id === activeDept)?.description || departments[0].description)}
          </span>
          <span className="font-semibold text-[#181614]">
            {filteredMembers.length} {isTa ? 'உறுப்பினர்கள்' : 'members'}
          </span>
        </div>

      </section>

      {/* ── 4. TEAM MEMBERS GRID ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10">
        
        {filteredMembers.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E7E1D8]">
            <Users className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-neutral-800 mb-1">
              {isTa ? 'பொருத்தமான உறுப்பினர்கள் காணப்படவில்லை' : 'No team members found'}
            </h3>
            <p className="text-sm text-neutral-500 mb-4">
              {isTa ? 'வேறு தேடல் சொல்லைப் பயன்படுத்திப் பார்க்கவும்' : 'Try adjusting your search query or department filter'}
            </p>
            <button
              onClick={() => {
                setActiveDept('all');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-[#2D6A4F] underline"
            >
              {isTa ? 'அனைத்தையும் காட்டுக' : 'Reset filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className={`bg-white border rounded-3xl p-6 sm:p-7 flex flex-col transition-all hover:shadow-md ${
                  member.featured
                    ? 'border-[#B7E4C7] ring-1 ring-[#2D6A4F]/10 hover:border-[#2D6A4F]'
                    : 'border-[#E7E1D8] hover:border-[#2D6A4F]'
                }`}
              >
                
                {/* Header: Avatar Monogram + Department Tag */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  
                  {/* Monogram Badge */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.avatarColor} text-white flex items-center justify-center font-serif text-lg font-bold shadow-xs shrink-0 tracking-wider`}>
                    {member.initials}
                  </div>

                  {/* Department Pill */}
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#2D6A4F] bg-[#EBF7EE] border border-[#B7E4C7] px-2.5 py-0.5 rounded-full">
                      {t(member.departmentName)}
                    </span>
                    {member.featured && (
                      <span className="text-[9px] font-bold uppercase tracking-wide text-amber-800 mt-1 flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                        <span>{isTa ? 'முதன்மைப் பொறுப்பு' : 'Key Lead'}</span>
                      </span>
                    )}
                  </div>

                </div>

                {/* Member Name */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#181614] mb-1">
                  {t(member.name)}
                </h3>

                {/* Role */}
                <p className="text-xs sm:text-sm font-semibold text-[#2D6A4F] mb-3">
                  {t(member.role)}
                </p>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-[#655E57] font-light leading-relaxed mb-5 flex-1">
                  {t(member.bio)}
                </p>

                {/* Literary Focus Footer Tag */}
                <div className="pt-3.5 border-t border-[#E7E1D8] flex items-center gap-2 text-xs text-[#2D6A4F] font-medium bg-[#FAF8F5] -mx-6 -mb-6 p-4 rounded-b-3xl">
                  <Feather className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
                  <span className="truncate">
                    <strong className="font-semibold text-[#181614]">{isTa ? 'களப்பணி:' : 'Focus:'}</strong>{' '}
                    {t(member.focus)}
                  </span>
                </div>

              </div>
            ))}
          </div>
        )}

      </section>

      {/* ── 5. PUBLISHING HOUSE METRICS (Penguin-Style Stats) ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24">
        <div className="bg-[#0B1E17] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-400 bg-white/10 px-3.5 py-1 rounded-full mb-3">
              {isTa ? 'எங்கள் பணிப் பயணம்' : 'Our Collective Impact'}
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold">
              {isTa ? 'எழுத்தும் உழைப்பும் இணைந்த பயணம்' : 'Crafting Culture Through Independent Publishing'}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {editorialStats.map((stat, i) => (
              <div key={i} className="border-t border-white/10 pt-4">
                <span className="block font-serif text-3xl sm:text-5xl font-bold text-emerald-400 mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-neutral-300 font-medium">
                  {t(stat.label)}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. MANUSCRIPT SUBMISSIONS & JOIN US (Penguin-Style Editorial Desk) ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24 text-center">
        <div className="bg-white border-2 border-[#B7E4C7] rounded-3xl p-8 sm:p-12 shadow-xs">
          
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2D6A4F] bg-[#EBF7EE] border border-[#B7E4C7] px-3.5 py-1.5 rounded-full mb-3 sm:mb-4">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{isTa ? 'எங்களுடன் இணையுங்கள்' : 'Work With Our Editorial Desk'}</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#181614] mb-3">
            {isTa ? 'செறிவான கையெழுத்துப் பிரதியா?' : 'Have a Significant Manuscript?'}
          </h3>

          <p className="text-xs sm:text-base text-[#655E57] max-w-xl mx-auto leading-relaxed font-light mb-6 sm:mb-8">
            {isTa
              ? 'வரலாறு, சிறுகதை, நாட்டார் வழக்காறுகள், சூழலியல் அல்லது இலக்கிய மொழிபெயர்ப்புகளில் தீவிரமாக இயங்கும் எழுத்தாளர்களையும் ஆய்வாளர்களையும் அலர் வெளியீடு எப்போதும் வரவேற்கிறது.'
              : 'Whether you are researching indigenous folklore, archiving oral traditions, or translating world literature, our editorial desk welcomes manuscripts that contribute to enduring knowledge.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href={`${langPrefix}/contact`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2D6A4F] hover:bg-[#1B4332] active:bg-[#153427] text-white px-8 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all shadow-md"
            >
              <span>{isTa ? 'பதிப்புக் குழுவைத் தொடர்பு கொள்க' : 'Contact Editorial Team'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={`${langPrefix}/coordinators`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#2D6A4F] hover:bg-emerald-50 active:bg-emerald-100 border-2 border-[#2D6A4F] px-8 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-colors shadow-2xs"
            >
              <span>{isTa ? 'கள ஒருங்கிணைப்பாளர்கள்' : 'Field Coordinators'}</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
