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
    <section id="coming-soon" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{dict.coming_soon.title}</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">{dict.coming_soon.description}</p>
        </div>

        <div className="max-w-6xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingBooks.map((book) => (
             <div key={book.id} className="bg-neutral-50 rounded-lg overflow-hidden shadow-sm flex flex-col">
               <div className="relative h-[400px] w-full">
                 <Image src={book.image} alt={book.title} fill className="object-scale-down p-4" />
                 <div className="absolute rounded-bl-lg top-0 right-0 bg-yellow-500 text-white px-3 py-1 text-sm font-semibold">
                   {book.label}
                 </div>
               </div>
               <div className="p-6 flex flex-col justify-center flex-grow">
                 <h3 className="text-xl font-bold text-neutral-900 mb-2">{book.title}</h3>
                 <p className="text-neutral-600 text-sm mb-3">{book.author}</p>
                 <p className="text-neutral-700 mb-4">{book.desc}</p>
                 <div className="mt-auto">
                   <Link href={`${langPrefix}/contact`}>
                    <button className="px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition duration-300">
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
