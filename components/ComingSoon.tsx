import Image from 'next/image';
import Link from 'next/link';

export default function ComingSoon({ dict, lang }: { dict: any, lang: string }) {
  const langPrefix = lang === 'ta' ? '' : `/${lang}`;
  const lankesh = {
    title: lang === 'ta' ? 'லங்கேஷ் கதைகள்' : 'Lankesh Kathaigal',
    author: lang === 'ta' ? 'பி. லங்கேஷ்' : 'P. Lankesh',
    desc: lang === 'ta' ? 'புகழ்பெற்ற கன்னட எழுத்தாளர் பி. லங்கேஷ் அவர்களின் சிறுகதைகள்...' : 'A collection of short stories by the acclaimed Kannada writer P. Lankesh...',
    rating: lang === 'ta' ? 'அதிக எதிர்பார்ப்பு' : 'Highly anticipated',
    label: lang === 'ta' ? 'விரைவில் வருகிறது' : 'Upcoming Release'
  };

  return (
    <section id="coming-soon" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{dict.coming_soon.title}</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">{dict.coming_soon.description}</p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
           <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-sm">
             <div className="flex flex-col md:flex-row">
               <div className="md:w-2/5 relative h-[400px] md:min-h-[500px]">
                 <Image src="/images/lankesh.webp" alt={lankesh.title} fill className="object-cover" />
                 <div className="absolute rounded-bl-lg top-0 right-0 bg-yellow-500 text-white px-3 py-1 text-sm font-semibold">
                   {lankesh.label}
                 </div>
               </div>
               <div className="md:w-3/5 p-6 flex flex-col justify-center">
                 <h3 className="text-xl font-bold text-neutral-900 mb-2">{lankesh.title}</h3>
                 <p className="text-neutral-600 text-sm mb-3">{lankesh.author}</p>
                 <p className="text-neutral-700 mb-4">{lankesh.desc}</p>
                 <div className="flex items-center mb-4">
                   <div className="flex mr-2 text-yellow-500 font-semibold">
                     {lankesh.rating}
                   </div>
                 </div>
                 <Link href={`${langPrefix}/contact`}>
                  <button className="px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition duration-300">
                    {dict.coming_soon.notify_me}
                  </button>
                 </Link>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
