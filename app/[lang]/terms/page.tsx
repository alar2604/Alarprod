import { getDictionary, locales } from '@/i18n/settings';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export async function generateStaticParams() {
  return [{ lang: 'en' }];
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  
  return (
    <>
      <Header dict={dict} lang={lang} />
     <main className="flex-1 min-h-screen pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
          <p className="mb-4">Welcome to Alar Veliyeedu (<a href="https://alarveliyeedu.com" className="text-blue-600 underline">https://alarveliyeedu.com</a>). By accessing or using our website, you agree to comply with these Terms & Conditions. Please read them carefully.</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-2">1. Website Use</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>All content (text, images, design) is the property of Alar Veliyeedu unless otherwise stated.</li>
            <li>You may use the website for personal, non-commercial purposes only.</li>
            <li>Copying, distributing, or commercial use of content is prohibited without written permission.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">2. User Conduct</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Do not post or transmit unlawful, defamatory, or harmful material.</li>
            <li>Do not attempt to disrupt or compromise the security of the website.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">3. Intellectual Property</h2>
          <p className="mb-4">All trademarks, logos, and content are owned by Alar Veliyeedu or its licensors. Unauthorized use is strictly prohibited.</p>

          <h2 className="text-xl font-semibold mt-8 mb-2">4. Disclaimer</h2>
          <p className="mb-4">We strive to provide accurate and up-to-date information. However, we do not guarantee the completeness or accuracy of content. Use the website at your own risk.</p>

          <h2 className="text-xl font-semibold mt-8 mb-2">5. External Links</h2>
          <p className="mb-4">Our website may contain links to third-party sites. We are not responsible for their content or practices.</p>

          <h2 className="text-xl font-semibold mt-8 mb-2">6. Limitation of Liability</h2>
          <p className="mb-4">Alar Veliyeedu is not liable for any damages arising from your use of the website or reliance on its content.</p>

          <h2 className="text-xl font-semibold mt-8 mb-2">7. Changes to Terms</h2>
          <p className="mb-4">We may update these Terms & Conditions at any time. Continued use of the website constitutes acceptance of the revised terms.</p>

          <h2 className="text-xl font-semibold mt-8 mb-2">8. Governing Law</h2>
          <p className="mb-4">These Terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in Trichy, Tamil Nadu.</p>

          <h2 className="text-xl font-semibold mt-8 mb-2">9. Contact Us</h2>
          <p className="mb-4">For questions about these Terms, contact us at <a href="mailto:alarveliyeedu@gmail.com" className="text-blue-600 underline">alarveliyeedu@gmail.com</a>.</p>
          
          <p className="text-neutral-500 mt-8">Last updated: April 2025</p>
        </div>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
