import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'Chef grilling patties' },
  { src: '/images/gallery-2.jpg', alt: 'Fresh ingredients' },
  { src: '/images/gallery-3.jpg', alt: 'Cocktail mixing' },
  { src: '/images/gallery-4.jpg', alt: 'Restaurant interior' },
  { src: '/images/gallery-5.jpg', alt: 'Chicken nuggets' },
  { src: '/images/gallery-6.jpg', alt: 'Happy diners' },
  { src: '/images/gallery-7.jpg', alt: 'Mozzarella sticks' },
  { src: '/images/gallery-8.jpg', alt: 'Milkshake' },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-header', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.from(item, {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          delay: i * 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="bg-[#0A0A0A] py-20 lg:py-32"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="gallery-header mb-12 text-center">
          <span className="text-accent font-body text-xs font-semibold tracking-[1.5px] uppercase">
            GALLERY
          </span>
          <h2 className="font-display text-white text-4xl lg:text-5xl font-bold tracking-tight mt-3">
            Moments & Flavors
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-1">
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              className="break-inside-avoid mb-1 cursor-pointer overflow-hidden group"
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                style={{
                  aspectRatio: i % 3 === 0 ? '16/9' : '3/4',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Gallery full"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
