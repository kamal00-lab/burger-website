import { useEffect, useState } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white font-body text-xs font-semibold tracking-[3px] uppercase hover:text-accent transition-colors"
        >
          HOUSE OF BURGERS
        </button>

        {/* Center Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Menu', id: 'menu' },
            { label: 'About', id: 'about' },
            { label: 'Gallery', id: 'gallery' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white/80 font-body text-sm font-semibold tracking-[0.5px] hover:text-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Reservation Button */}
        <button
          onClick={() => scrollTo('contact')}
          className="bg-accent hover:bg-accent-hover text-white font-body text-sm font-semibold px-5 h-10 rounded-sm transition-colors"
        >
          Reservation
        </button>
      </div>
    </nav>
  );
}
