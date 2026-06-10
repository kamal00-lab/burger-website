import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  {
    name: 'The 10oz Steakhouse',
    price: '950 DA',
    image: '/images/menu-steakhouse.jpg',
  },
  {
    name: 'Truffle Parmesan Fries',
    price: '350 DA',
    image: '/images/menu-fries.jpg',
  },
  {
    name: 'Signature Jackpot',
    price: '1,200 DA',
    image: '/images/menu-jackpot.jpg',
  },
  {
    name: 'Classic Smash Burger',
    price: '650 DA',
    image: '/images/menu-classic.jpg',
  },
];

const fullMenu = {
  rockstars: [
    { name: 'Alabama', simple: '650 DA', double: '1,200 DA' },
    { name: 'El Paso', simple: '750 DA', double: '1,350 DA' },
    { name: 'New York', simple: '500 DA', double: '900 DA' },
    { name: 'Jackpot', simple: '1,200 DA', double: null },
  ],
  special: [
    { name: 'Kentucky', price: '600 DA' },
    { name: 'The 10oz (200g)', price: '750 DA' },
    { name: 'The 10oz (300g)', price: '950 DA' },
    { name: 'Fumato', simple: '700 DA', double: '1,200 DA' },
    { name: 'Montana', price: '700 DA' },
  ],
  burgers: [
    { name: 'Buffalo', simple: '400 DA', double: '700 DA' },
    { name: 'California', simple: '400 DA', double: '700 DA' },
    { name: 'Nevada', simple: '400 DA', double: '700 DA' },
    { name: 'Dallas', simple: '500 DA', double: '900 DA' },
    { name: 'Venice', simple: '350 DA', double: '650 DA' },
    { name: 'Miami', simple: '500 DA', double: '900 DA' },
  ],
  starters: [
    { name: 'Hot Dog', price: '300 DA' },
    { name: 'Empanada', price: '250 DA' },
    { name: 'Crispy Mozzarella', price: '400 DA' },
    { name: 'Chicken Nuggets', price: '400 DA' },
  ],
  frites: [
    { name: 'Frites Simples', price: '200 DA' },
    { name: 'Frites Epic\u00e9es', price: '250 DA' },
    { name: 'Frites Sauce Fromag\u00e8re', price: '300 DA' },
  ],
  drinks: [
    { name: 'Eau', price: '50 DA' },
    { name: 'Boisson', price: '100 DA' },
    { name: 'Canette', price: '150 DA' },
    { name: 'Limenceto', price: '250 DA' },
    { name: 'Milkshake', price: '400 DA' },
    { name: 'Smoothie', price: '500 DA' },
  ],
};

export default function Menu() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.from('.menu-header', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Animate signature cards with stagger
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        });
      });

      // Animate full menu
      if (menuRef.current) {
        gsap.from(menuRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: menuRef.current,
            start: 'top 85%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="bg-[#0A0A0A] py-20 lg:py-32"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="menu-header mb-16">
          <span className="text-accent font-body text-xs font-semibold tracking-[1.5px] uppercase">
            EXPLORE THE MENU
          </span>
          <h2 className="font-display text-white text-4xl lg:text-5xl font-bold tracking-tight mt-3">
            Signature Dishes
          </h2>
        </div>

        {/* Signature Cards - Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-24">
          {menuItems.map((item, i) => (
            <div
              key={item.name}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className={`group relative overflow-hidden ${
                i % 2 === 1 ? 'md:mt-20' : ''
              }`}
              style={{ aspectRatio: '3/4' }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-white text-2xl lg:text-3xl font-semibold">
                  {item.name}
                </h3>
                <span className="text-accent font-body text-xl font-bold mt-2 block">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Full Menu */}
        <div ref={menuRef}>
          <h3 className="font-display text-white text-3xl font-bold mb-10 text-center">
            Full Menu
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Rockstars */}
            <div>
              <h4 className="text-accent font-body text-xs font-semibold tracking-[1.5px] uppercase mb-4">
                Rockstars
              </h4>
              <div className="space-y-3">
                {fullMenu.rockstars.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-baseline border-b border-white/10 pb-2"
                  >
                    <span className="text-white font-body text-base">
                      {item.name}
                    </span>
                    <div className="text-right">
                      {item.double ? (
                        <div className="text-secondary-text font-body text-sm">
                          <span className="text-accent font-semibold">
                            {item.simple}
                          </span>
                          <span className="mx-2">|</span>
                          <span>Double {item.double}</span>
                        </div>
                      ) : (
                        <span className="text-accent font-body text-sm font-semibold">
                          {item.simple}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special */}
            <div>
              <h4 className="text-accent font-body text-xs font-semibold tracking-[1.5px] uppercase mb-4">
                Special
              </h4>
              <div className="space-y-3">
                {fullMenu.special.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-baseline border-b border-white/10 pb-2"
                  >
                    <span className="text-white font-body text-base">
                      {item.name}
                    </span>
                    <div className="text-right">
                      {'price' in item ? (
                        <span className="text-accent font-body text-sm font-semibold">
                          {item.price}
                        </span>
                      ) : (
                        <div className="text-secondary-text font-body text-sm">
                          <span className="text-accent font-semibold">
                            {item.simple}
                          </span>
                          {item.double && (
                            <>
                              <span className="mx-2">|</span>
                              <span>Double {item.double}</span>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Burgers */}
            <div>
              <h4 className="text-accent font-body text-xs font-semibold tracking-[1.5px] uppercase mb-4">
                Burgers
              </h4>
              <div className="space-y-3">
                {fullMenu.burgers.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-baseline border-b border-white/10 pb-2"
                  >
                    <span className="text-white font-body text-base">
                      {item.name}
                    </span>
                    <div className="text-right">
                      <div className="text-secondary-text font-body text-sm">
                        <span className="text-accent font-semibold">
                          {item.simple}
                        </span>
                        <span className="mx-2">|</span>
                        <span>Double {item.double}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Starters */}
            <div>
              <h4 className="text-accent font-body text-xs font-semibold tracking-[1.5px] uppercase mb-4">
                Starters
              </h4>
              <div className="space-y-3">
                {fullMenu.starters.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-baseline border-b border-white/10 pb-2"
                  >
                    <span className="text-white font-body text-base">
                      {item.name}
                    </span>
                    <span className="text-accent font-body text-sm font-semibold">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frites */}
            <div>
              <h4 className="text-accent font-body text-xs font-semibold tracking-[1.5px] uppercase mb-4">
                Frites
              </h4>
              <div className="space-y-3">
                {fullMenu.frites.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-baseline border-b border-white/10 pb-2"
                  >
                    <span className="text-white font-body text-base">
                      {item.name}
                    </span>
                    <span className="text-accent font-body text-sm font-semibold">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Drinks */}
            <div>
              <h4 className="text-accent font-body text-xs font-semibold tracking-[1.5px] uppercase mb-4">
                Drinks
              </h4>
              <div className="space-y-3">
                {fullMenu.drinks.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-baseline border-b border-white/10 pb-2"
                  >
                    <span className="text-white font-body text-base">
                      {item.name}
                    </span>
                    <span className="text-accent font-body text-sm font-semibold">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
