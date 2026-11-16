import { getDictionary } from '@/i18n/settings';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamContainer from '@/components/team/TeamContainer';

export const metadata: Metadata = {
  title: 'எங்கள் குழு | அலர் வெளியீடு',
  description: 'அலர் வெளியீட்டின் பதிப்பாசிரியர்கள், வடிவமைப்பாளர்கள் மற்றும் ஆய்வாளர்கள் கொண்ட படைப்புக் குழு.',
};

export default async function TeamPage() {
  const lang = 'ta'; // Root language
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main className="flex-1 bg-[#FAF8F5]">
        <TeamContainer dict={dict} lang={lang} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
