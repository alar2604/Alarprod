import { getDictionary } from '@/i18n/settings';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return [{ lang: 'en' }];
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  
  return (
    <>
      <Header dict={dict} lang={lang} />
      <main className="flex-1 min-h-screen pt-20 sm:pt-28 pb-12 sm:pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
          <h1 className="text-2xl sm:text-4xl font-bold font-serif mb-4 text-neutral-900">Privacy Policy</h1>
          <div className="w-12 h-1 bg-[#2D6A4F] rounded-full mb-6"></div>

          <p className="mb-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-light">At Alar Veliyeedu (<a href="https://alarveliyeedu.com" className="text-[#2D6A4F] underline">https://alarveliyeedu.com</a>), we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you visit our website or interact with our services.</p>
          
          <h2 className="text-lg sm:text-xl font-bold font-serif mt-6 mb-2 text-neutral-900">1. Information We Collect</h2>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-sm sm:text-base text-neutral-700 font-light">
            <li><strong className="font-semibold text-neutral-900">Personal Information:</strong> Name, email address, and contact details (when you subscribe to our newsletter, fill out forms, or contact us).</li>
            <li><strong className="font-semibold text-neutral-900">Usage Data:</strong> Pages visited, browser type, device information, and IP address (collected via cookies and analytics tools).</li>
            <li><strong className="font-semibold text-neutral-900">Communication Data:</strong> Your messages and feedback sent through our contact forms.</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold font-serif mt-6 mb-2 text-neutral-900">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-sm sm:text-base text-neutral-700 font-light">
            <li>To provide and improve our services and website experience.</li>
            <li>To send newsletters, updates, and promotional materials (with your consent).</li>
            <li>To respond to your inquiries and provide customer support.</li>
            <li>To analyze website usage and improve our offerings.</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold font-serif mt-6 mb-2 text-neutral-900">3. Cookies & Analytics</h2>
          <p className="mb-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-light">We use cookies and similar technologies to enhance your browsing experience and analyze site traffic. You can control cookie preferences in your browser settings.</p>

          <h2 className="text-lg sm:text-xl font-bold font-serif mt-6 mb-2 text-neutral-900">4. Data Sharing & Disclosure</h2>
          <p className="mb-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-light">We do not sell or rent your personal information. We may share data with trusted third-party service providers (such as email newsletter platforms) only as necessary to operate our services. We may disclose information if required by law or to protect our rights.</p>

          <h2 className="text-lg sm:text-xl font-bold font-serif mt-6 mb-2 text-neutral-900">5. Data Security</h2>
          <p className="mb-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-light">We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>

          <h2 className="text-lg sm:text-xl font-bold font-serif mt-6 mb-2 text-neutral-900">6. Your Rights</h2>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-sm sm:text-base text-neutral-700 font-light">
            <li>You may request access, correction, or deletion of your personal data at any time.</li>
            <li>You can unsubscribe from our newsletter at any time using the link in our emails.</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold font-serif mt-6 mb-2 text-neutral-900">7. Third-Party Links</h2>
          <p className="mb-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-light">Our website may contain links to external sites. We are not responsible for the privacy practices of those sites.</p>

          <h2 className="text-lg sm:text-xl font-bold font-serif mt-6 mb-2 text-neutral-900">8. Changes to This Policy</h2>
          <p className="mb-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-light">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>

          <h2 className="text-lg sm:text-xl font-bold font-serif mt-6 mb-2 text-neutral-900">9. Contact Us</h2>
          <p className="mb-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-light">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:alarveliyeedu@gmail.com" className="text-[#2D6A4F] underline">alarveliyeedu@gmail.com</a>.</p>
          
          <p className="text-neutral-400 text-xs mt-8">Last updated: April 2025</p>
        </div>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
