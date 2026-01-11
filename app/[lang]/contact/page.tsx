import { getDictionary, locales } from '@/i18n/settings';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export async function generateStaticParams() {
  return [{ lang: 'en' }];
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  
  return (
    <>
      <Header dict={dict} lang={lang} />
      <main className="flex-1 min-h-screen pt-24 pb-16">
         <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto">
             <h1 className="text-3xl font-bold text-center mb-12">{dict.nav.contact}</h1>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {/* Contact Info */}
               <div className="space-y-8">
                 <div className="bg-gray-50 p-8 rounded-lg">
                   <h3 className="text-xl font-bold mb-6">{dict.footer.get_in_touch}</h3>
                   <div className="space-y-6">
                      <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-primary mt-1 mr-4" />
                        <div>
                          <p className="font-semibold mb-1">Address</p>
                          <p className="text-neutral-600">No. 2A, White Betal Street, <br/> Big Bazaar, <br/> Tiruchirappalli - 620008</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="h-6 w-6 text-primary mt-1 mr-4" />
                        <div>
                          <p className="font-semibold mb-1">Phone</p>
                          <p className="text-neutral-600">+91 7200111312 <br/> 97917 43555</p>
                        </div>
                      </div>

                       <div className="flex items-start">
                        <Mail className="h-6 w-6 text-primary mt-1 mr-4" />
                        <div>
                          <p className="font-semibold mb-1">Email</p>
                          <p className="text-neutral-600">alarveliyeedu@gmail.com</p>
                        </div>
                      </div>
                   </div>
                 </div>
               </div>

               {/* Contact Form */}
               <div className="bg-white">
                 <form className="space-y-6">
                   <div>
                     <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                     <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                   </div>
                   
                   <div>
                     <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                     <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                   </div>

                   <div>
                     <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                     <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"></textarea>
                   </div>

                   <button type="submit" className="w-full bg-neutral-900 text-white py-3 rounded-md font-medium hover:bg-neutral-800 transition-colors">
                     Send Message
                   </button>
                 </form>
               </div>
             </div>
           </div>
         </div>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
