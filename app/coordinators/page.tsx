import { getDictionary } from '@/i18n/settings';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoordinatorsContainer from '@/components/coordinators/CoordinatorsContainer';

export const metadata: Metadata = {
  title: 'கள ஒருங்கிணைப்பாளர்கள் | அலர் வெளியீடு',
  description: 'Find Alar Veliyeedu coordinators in your city.',
};

export default async function CoordinatorsPage() {
  const lang = 'ta'; // Hardcoded for root path
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main className="flex-1 bg-white">
        <CoordinatorsContainer dict={dict} lang={lang} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
