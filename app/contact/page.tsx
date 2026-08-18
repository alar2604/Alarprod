import { getDictionary } from '@/i18n/settings';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export default async function ContactPage() {
  const lang = 'ta';
  const dict = await getDictionary(lang);
  
  return (
    <>
      <Header dict={dict} lang={lang} />
      <main className="flex-1 min-h-screen pt-20 sm:pt-28 pb-12 sm:pb-16 bg-neutral-50/40">
         <div className="max-w-5xl mx-auto px-4 sm:px-6">
           <div className="text-center mb-8 sm:mb-12">
             <h1 className="text-2xl sm:text-4xl font-bold font-serif mb-3 text-neutral-900">{dict.nav.contact}</h1>
             <div className="w-12 h-1 bg-[#2D6A4F] mx-auto rounded-full"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
             {/* Contact Info */}
             <div className="space-y-6">
               <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-2xs">
                 <h3 className="text-lg sm:text-xl font-bold font-serif mb-6 text-neutral-900">{dict.footer.get_in_touch}</h3>
                 <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#2D6A4F] mr-3.5 shrink-0 mt-0.5">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm sm:text-base text-neutral-900 mb-1">முகவரி</p>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">No. 2A, White Betal Street, <br/> Big Bazaar, <br/> Tiruchirappalli - 620008</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#2D6A4F] mr-3.5 shrink-0 mt-0.5">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm sm:text-base text-neutral-900 mb-1">தொலைபேசி</p>
                        <p className="text-xs sm:text-sm text-neutral-600 font-light">+91 7200111312 <br/> 97917 43555</p>
                      </div>
                    </div>

                     <div className="flex items-start">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#2D6A4F] mr-3.5 shrink-0 mt-0.5">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm sm:text-base text-neutral-900 mb-1">மின்னஞ்சல்</p>
                        <p className="text-xs sm:text-sm text-neutral-600 font-light">alarveliyeedu@gmail.com</p>
                      </div>
                    </div>
                 </div>
               </div>
             </div>

             {/* Contact Form */}
             <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-2xs">
               <form className="space-y-4 sm:space-y-5">
                 <div>
                   <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-neutral-700 mb-1.5">பெயர்</label>
                   <input type="text" id="name" className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-base focus:ring-2 focus:ring-emerald-500/20 focus:border-[#2D6A4F] outline-none transition-all" />
                 </div>
                 
                 <div>
                   <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-neutral-700 mb-1.5">மின்னஞ்சல்</label>
                   <input type="email" id="email" className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-base focus:ring-2 focus:ring-emerald-500/20 focus:border-[#2D6A4F] outline-none transition-all" />
                 </div>

                 <div>
                   <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-neutral-700 mb-1.5">செய்தி</label>
                   <textarea id="message" rows={4} className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-base focus:ring-2 focus:ring-emerald-500/20 focus:border-[#2D6A4F] outline-none transition-all resize-none"></textarea>
                 </div>

                 <button type="submit" className="w-full bg-[#2D6A4F] hover:bg-[#1B4332] active:bg-[#153427] text-white py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-colors shadow-xs">
                   செய்தியை அனுப்பு
                 </button>
               </form>
             </div>
           </div>
         </div>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
