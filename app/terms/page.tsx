import { getDictionary } from '@/i18n/settings';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function TermsPage() {
  const lang = 'ta';
  const dict = await getDictionary(lang);
  
  return (
    <>
      <Header dict={dict} lang={lang} />
     <main className="flex-1 min-h-screen pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-3xl font-bold mb-6">விதிமுறைகள் மற்றும் நிபந்தனைகள்</h1>
          <p className="mb-4">அலர் வெளியீட்டிற்கு வரவேற்கிறோம் (<a href="https://alarveliyeedu.com" className="text-blue-600 underline">https://alarveliyeedu.com</a>). எங்கள் வலைத்தளத்தை அணுகுவதன் மூலம் அல்லது பயன்படுத்துவதன் மூலம், இந்த விதிமுறைகள் மற்றும் நிபந்தனைகளுக்கு இணங்க ஒப்புக்கொள்கிறீர்கள்.</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-2">1. வலைத்தள பயன்பாடு</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>அனைத்து உள்ளடக்கங்களும் (உரை, படங்கள், வடிவமைப்பு) அலர் வெளியீட்டின் சொத்து.</li>
            <li>தனிப்பட்ட, வணிக ரீதியற்ற நோக்கங்களுக்காக மட்டுமே நீங்கள் வலைத்தளத்தைப் பயன்படுத்தலாம்.</li>
             <li>எழுத்துப்பூர்வ அனுமதியின்றி உள்ளடக்கத்தை நகலெடுப்பது, விநியோகிப்பது அல்லது வணிக ரீதியாக பயன்படுத்துவது தடைசெய்யப்பட்டுள்ளது.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">2. பயனர் நடத்தை</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
             <li>சட்டவிரோதமான, அவதூறான அல்லது தீங்கு விளைவிக்கும் பொருட்களை இடுகையிடவோ அல்லது அனுப்பவோ வேண்டாம்.</li>
             <li>வலைத்தளத்தின் பாதுகாப்பை சீர்குலைக்க அல்லது சமரசம் செய்ய முயற்சிக்காதீர்கள்.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">3. பொறுப்புத் துறப்பு</h2>
          <p className="mb-4">துல்லியமான மற்றும் புதுப்பித்த தகவல்களை வழங்க நாங்கள் முயற்சி செய்கிறோம். இருப்பினும், உள்ளடக்கத்தின் முழுமை அல்லது துல்லியத்திற்கு நாங்கள் உத்தரவாதம் அளிக்கவில்லை.</p>

          <h2 className="text-xl font-semibold mt-8 mb-2">4. எங்களை தொடர்பு கொள்ள</h2>
          <p className="mb-4">இந்த விதிமுறைகள் குறித்து உங்களுக்கு ஏதேனும் கேள்விகள் இருந்தால், எங்களை தொடர்பு கொள்ளவும்: <a href="mailto:alarveliyeedu@gmail.com" className="text-blue-600 underline">alarveliyeedu@gmail.com</a>.</p>
          
          <p className="text-neutral-500 mt-8">கடைசியாக புதுப்பிக்கப்பட்டது: ஏப்ரல் 2025</p>
        </div>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
