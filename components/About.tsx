export default function About({ dict }: { dict: any }) {
  return (
    <section id="about-us" className="py-12 md:py-18 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif mb-4 sm:mb-6 text-neutral-900">{dict.about.title}</h2>
          <div className="w-12 h-1 bg-[#2D6A4F] mx-auto rounded-full mb-6"></div>
          <p className="text-neutral-600 text-sm sm:text-base mb-6 sm:mb-8 italic leading-relaxed sm:leading-8 font-light">
            {dict.about.p1}
          </p>
          <p className="text-neutral-600 text-sm sm:text-base mb-6 italic leading-relaxed sm:leading-8 font-light">
            {dict.about.p2}
          </p>
        </div>
      </div>
    </section>
  );
}
