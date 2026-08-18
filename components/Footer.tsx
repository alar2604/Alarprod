import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ dict, lang }: { dict: any, lang: string }) {
  // Determine prefix based on language
  const langPrefix = lang === 'ta' ? '' : `/${lang}`;
  const homePath = lang === 'ta' ? '/' : `/${lang}`;

  return (
    <footer id="footer" className="bg-neutral-950 text-white pt-12 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10">
          
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Image 
                src="/images/alarlogo.png"
                alt="Alar veliyeedu Logo" 
                width={100} 
                height={100}
                className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-90" 
              />
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-5 font-light">{dict.footer.company_desc}</p>
            <div className="flex space-x-2">
              <a href="#" aria-label="Facebook" className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4 font-serif text-neutral-200">{dict.footer.pages}</h3>
            <ul className="space-y-2 text-sm font-light">
              <li><Link href={`${homePath}#about-us`} className="text-neutral-400 hover:text-white transition-colors block py-1">{dict.nav.about}</Link></li>
              <li><Link href={`${homePath}#books`} className="text-neutral-400 hover:text-white transition-colors block py-1">{dict.nav.books}</Link></li>
              <li><Link href={`${homePath}#coming-soon`} className="text-neutral-400 hover:text-white transition-colors block py-1">{dict.nav.coming_soon}</Link></li>
              <li><Link href={`${langPrefix}/contact`} className="text-neutral-400 hover:text-white transition-colors block py-1">{dict.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-bold mb-4 font-serif text-neutral-200">{dict.footer.company}</h3>
            <ul className="space-y-2 text-sm font-light">
              <li><Link href={`${langPrefix}/privacy`} className="text-neutral-400 hover:text-white transition-colors block py-1">Privacy</Link></li>
              <li><Link href={`${langPrefix}/terms`} className="text-neutral-400 hover:text-white transition-colors block py-1">Terms</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-4 font-serif text-neutral-200">{dict.footer.get_in_touch}</h3>
            <ul className="space-y-3 text-xs sm:text-sm font-light">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 text-emerald-500 mr-2.5 mt-1 shrink-0" />
                <span className="text-neutral-400 leading-relaxed">
                  Alar veliyeedu <br /> No. 2A, White Betal Street, <br /> Big Bazaar, <br /> Tiruchirappalli - 620008
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-emerald-500 mr-2.5 shrink-0" />
                <a href="mailto:alarveliyeedu@gmail.com" className="text-neutral-400 hover:text-white transition-colors truncate">alarveliyeedu@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-emerald-500 mr-2.5 shrink-0" />
                <span className="text-neutral-400">+91 7200111312 / 97917 43555</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="border-t border-neutral-800/80 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-xs text-neutral-500 text-center sm:text-right w-full">
            <p>{dict.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
