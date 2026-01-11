import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ dict, lang }: { dict: any, lang: string }) {
  // Determine prefix based on language
  const langPrefix = lang === 'ta' ? '' : `/${lang}`;
  const homePath = lang === 'ta' ? '/' : `/${lang}`;

  return (
    <footer id="footer" className="bg-neutral-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image 
                src="/images/alarlogo.png"
                alt="Alar veliyeedu Logo" 
                width={100} 
                height={100}
                className="h-24 w-auto brightness-0 invert" 
              />
            </div>
            <p className="text-neutral-400 mb-4">{dict.footer.company_desc}</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-neutral-600 hover:text-neutral-300"><Facebook className="h-6 w-6" /></a>
              <a href="#" aria-label="Twitter" className="text-neutral-600 hover:text-neutral-300"><Twitter className="h-6 w-6" /></a>
              <a href="#" aria-label="Instagram" className="text-neutral-600 hover:text-neutral-300"><Instagram className="h-6 w-6" /></a>
              <a href="#" aria-label="LinkedIn" className="text-neutral-600 hover:text-neutral-300"><Linkedin className="h-6 w-6" /></a>
              <a href="#" aria-label="YouTube" className="text-neutral-600 hover:text-neutral-300"><Youtube className="h-6 w-6" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{dict.footer.pages}</h3>
            <ul className="space-y-2">
              <li><Link href={`${homePath}#about-us`} className="text-neutral-400 hover:text-white transition-colors">{dict.nav.about}</Link></li>
              <li><Link href={`${homePath}#books`} className="text-neutral-400 hover:text-white transition-colors">{dict.nav.books}</Link></li>
              <li><Link href={`${homePath}#coming-soon`} className="text-neutral-400 hover:text-white transition-colors">{dict.nav.coming_soon}</Link></li>
              <li><Link href={`${langPrefix}/contact`} className="text-neutral-400 hover:text-white transition-colors">{dict.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">{dict.footer.company}</h3>
            <ul className="space-y-2">
              <li><Link href={`${langPrefix}/privacy`} className="text-neutral-400 hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href={`${langPrefix}/terms`} className="text-neutral-400 hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">{dict.footer.get_in_touch}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-neutral-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-neutral-400">
                  Alar veliyeedu <br /> No. 2A, White Betal Street, <br /> Big Bazaar, <br /> Tiruchirappalli - 620008
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0" />
                <a href="mailto:alarveliyeedu@gmail.com" className="text-neutral-400 hover:text-white transition-colors">alarveliyeedu@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0" />
                <span className="text-neutral-400">+91 7200111312 / 97917 43555</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="border-t border-neutral-800 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-neutral-500 text-center md:text-right w-full">
            <p>{dict.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
