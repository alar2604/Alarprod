export default function About({ dict }: { dict: any }) {
  return (
    <section id="about-us" className="py-14 md:py-18 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-secondary-default">{dict.about.title}</h2>
          <p className="text-neutral-600 text-base mb-8 italic leading-8">
            {dict.about.p1}
          </p>
          <p className="text-neutral-600 text-base mb-8 italic leading-8">
            {dict.about.p2}
          </p>
        </div>
      </div>
    </section>
  );
}
