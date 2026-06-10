import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/images/hero-burger-1.jpg',
    title: 'The Classic Burger',
    description: 'A timeless masterpiece of premium beef and fresh ingredients',
  },
  {
    image: '/images/hero-burger-2.jpg',
    title: 'Truffle Parmesan Fries',
    description: 'Golden fries elevated with truffle oil and aged parmesan',
  },
  {
    image: '/images/hero-burger-3.jpg',
    title: 'Signature Steak',
    description: 'Perfectly seared ribeye, cooked to perfection',
  },
  {
    image: '/images/hero-burger-4.jpg',
    title: 'Classic Smash Burger',
    description: 'Double patties with crispy edges and American cheese',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Glass-like gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-10 pb-[120px]">
          <div className="max-w-xl">
            <h2
              key={`title-${current}`}
              className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-shadow-hero animate-fade-in-up"
            >
              {slides[current].title}
            </h2>
            <p
              key={`desc-${current}`}
              className="font-body text-white/80 text-lg md:text-xl text-shadow-hero animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              {slides[current].description}
            </p>
            <button
              onClick={() => {
                const el = document.getElementById('menu');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 bg-accent hover:bg-accent-hover text-white font-body text-sm font-semibold px-6 h-11 rounded-sm transition-colors animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              View Menu
            </button>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors border border-white/10"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors border border-white/10"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? 'w-8 bg-accent'
                : 'w-1.5 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 z-20 hidden lg:flex flex-col items-center gap-2">
        <span className="text-white/40 font-body text-[10px] tracking-[2px] uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
