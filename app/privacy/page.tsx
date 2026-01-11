import { getDictionary } from '@/i18n/settings';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function PrivacyPage() {
  const lang = 'ta';
  const dict = await getDictionary(lang);
  
  return (
    <>
      <Header dict={dict} lang={lang} />
      <main className="flex-1 min-h-screen pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-3xl font-bold mb-6">தனியுரிமைக் கொள்கை</h1>
          <p className="mb-4">அலர் வெளியீட்டில் (<a href="https://alarveliyeedu.com" className="text-blue-600 underline">https://alarveliyeedu.com</a>), உங்கள் தனியுரிமையை பாதுகாக்க நாங்கள் உறுதிபூண்டுள்ளோம். எங்கள் வலைத்தளத்தை நீங்கள் பார்வையிடும்போது அல்லது எங்கள் சேவைகளுடன் தொடர்பு கொள்ளும்போது உங்கள் தகவலை நாங்கள் எவ்வாறு சேகரிக்கிறோம், பயன்படுத்துகிறோம் மற்றும் பாதுகாக்கிறோம் என்பதை இந்தக் கொள்கை விளக்குகிறது.</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-2">1. நாங்கள் சேகரிக்கும் தகவல்கள</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>தனிப்பட்ட தகவல்கள்:</strong> பெயர், மின்னஞ்சல் முகவரி மற்றும் தொடர்பு விவரங்கள் (நீங்கள் எங்கள் செய்திமடலுக்கு குழுசேரும்போது, படிவங்களை நிரப்பும்போது அல்லது எங்களைத் தொடர்பு கொள்ளும்போது).</li>
            <li><strong>பயன்பாட்டுத் தரவுகள்:</strong> பார்வையிட்ட பக்கங்கள், உலாவி வகை, சாதனத் தகவல் மற்றும் ஐபி முகவரி (குக்கீகள் மற்றும் பகுப்பாய்வு கருவிகள் மூலம் சேகரிக்கப்பட்டது).</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">2. உங்கள் தகவலை நாங்கள் எவ்வாறு பயன்படுத்துகிறோம்</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>எங்கள் சேவைகள் மற்றும் வலைத்தள அனுபவத்தை வழங்க மற்றும் மேம்படுத்த.</li>
            <li>செய்திமடல்கள், புதுப்பிப்புகள் மற்றும் விளம்பரப் பொருட்களை அனுப்ப (உங்கள் சம்மதத்துடன்).</li>
            <li>உங்கள் விசாரணைகளுக்கு பதிலளிக்க மற்றும் வாடிக்கையாளர் ஆதரவை வழங்க.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">3. குக்கீகள் மற்றும் பகுப்பாய்வு</h2>
          <p className="mb-4">உங்கள் உலாவல் அனுபவத்தை மேம்படுத்தவும் தள போக்குவரத்தை பகுப்பாய்வு செய்யவும் குக்கீகள் மற்றும் ஒத்த தொழில்நுட்பங்களைப் பயன்படுத்துகிறோம். உங்கள் உலாவி அமைப்புகளில் குக்கீ விருப்பங்களைக் கட்டுப்படுத்தலாம்.</p>

          <h2 className="text-xl font-semibold mt-8 mb-2">4. தரவு பகிர்வு</h2>
          <p className="mb-4">உங்கள் தனிப்பட்ட தகவல்களை நாங்கள் விற்பதில்லை அல்லது வாடகைக்கு விடுவதில்லை. எங்கள் சேவைகளை இயக்க தேவையான நம்பகமான மூன்றாம் தரப்பு சேவை வழங்குநர்களுடன் மட்டுமே தரவை நாங்கள் பகிரலாம்.</p>

          <h2 className="text-xl font-semibold mt-8 mb-2">5. எங்களை தொடர்பு கொள்ள</h2>
          <p className="mb-4">இந்த தனியுரிமைக் கொள்கை குறித்து உங்களுக்கு ஏதேனும் கேள்விகள் இருந்தால், தயவுசெய்து எங்களை தொடர்பு கொள்ளவும்: <a href="mailto:alarveliyeedu@gmail.com" className="text-blue-600 underline">alarveliyeedu@gmail.com</a>.</p>
          
          <p className="text-neutral-500 mt-8">கடைசியாக புதுப்பிக்கப்பட்டது: ஏப்ரல் 2025</p>
        </div>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
