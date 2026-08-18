import Image from 'next/image';
import Link from 'next/link';

export default function ComingSoon({ dict, lang }: { dict: any, lang: string }) {
  const langPrefix = lang === 'ta' ? '' : `/${lang}`;
  
  const upcomingBooks = [
    {
      id: 'lankesh-kathaigal',
      title: lang === 'ta' ? 'லங்கேஷ் கதைகள்' : 'Lankesh Kathaigal',
      author: lang === 'ta' ? 'பி. லங்கேஷ்' : 'P. Lankesh',
      desc: lang === 'ta' ? 'புகழ்பெற்ற கன்னட எழுத்தாளர் பி. லங்கேஷ் அவர்களின் சிறுகதைகள்...' : 'A collection of short stories by the acclaimed Kannada writer P. Lankesh...',
      label: lang === 'ta' ? 'விரைவில் வருகிறது' : 'Upcoming Release',
      image: '/images/lankesh.webp'
    }
  ];

  return (
    <section id="coming-soon" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-3 font-serif">{dict.coming_soon.title}</h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">{dict.coming_soon.description}</p>
        </div>

        <div className="max-w-md md:max-w-6xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {upcomingBooks.map((book) => (
             <div key={book.id} className="bg-neutral-50 rounded-2xl overflow-hidden shadow-2xs border border-neutral-200/70 flex flex-col">
               <div className="relative h-[280px] sm:h-[350px] md:h-[400px] w-full bg-neutral-100/60">
                 <Image src={book.image} alt={book.title} fill className="object-contain p-4" sizes="(max-width: 768px) 100vw, 400px" />
                 <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 text-xs sm:text-sm font-bold rounded-bl-xl shadow-xs">
                   {book.label}
                 </div>
               </div>
               <div className="p-5 sm:p-6 flex flex-col justify-center flex-grow">
                 <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-1.5 font-serif">{book.title}</h3>
                 <p className="text-neutral-600 text-sm font-medium mb-3">{book.author}</p>
                 <p className="text-neutral-700 text-xs sm:text-sm mb-5 leading-relaxed font-light">{book.desc}</p>
                 <div className="mt-auto">
                   <Link href={`${langPrefix}/contact`} className="w-full sm:w-auto block">
                    <button className="w-full sm:w-auto px-5 py-2.5 bg-neutral-900 text-white rounded-xl text-sm font-semibold hover:bg-neutral-800 transition-colors shadow-xs">
                      {dict.coming_soon.notify_me}
                    </button>
                   </Link>
                 </div>
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
