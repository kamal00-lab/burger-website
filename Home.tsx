import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content > *', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#0A0A0A] py-20 lg:py-32 border-t border-white/5"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 contact-content">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Hours */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-accent" />
              <h4 className="text-white font-body text-xs font-semibold tracking-[1.5px] uppercase">
                HOURS
              </h4>
            </div>
            <p className="text-secondary-text font-body text-base">
              Tue - Sun
            </p>
            <p className="text-white font-body text-base">
              11:30 AM - 11:00 PM
            </p>
          </div>

          {/* Location */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-accent" />
              <h4 className="text-white font-body text-xs font-semibold tracking-[1.5px] uppercase">
                LOCATION
              </h4>
            </div>
            <a
              href="https://www.google.com/maps/place/House+of+Burgers+Blida/@36.4751046,2.8276101,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-text font-body text-base hover:text-accent transition-colors"
            >
              43 Bd Larbi Tebessi
              <br />
              Blida 09000, Algeria
            </a>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-5 h-5 text-accent" />
              <h4 className="text-white font-body text-xs font-semibold tracking-[1.5px] uppercase">
                CONTACT
              </h4>
            </div>
            <a
              href="tel:+213666848484"
              className="text-secondary-text font-body text-base hover:text-accent transition-colors block mb-3"
            >
              +213 666 84 84 84
            </a>
            <a
              href="https://instagram.com/houseofburgersdz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary-text font-body text-base hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @houseofburgersdz
            </a>
          </div>
        </div>

        {/* Map Embed */}
        <div className="w-full h-[300px] lg:h-[400px] rounded-sm overflow-hidden mb-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.15304777778!2d2.8276101!3d36.4751046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0d54a5ce1367%3A0x2f90e0641dd5b37f!2sHouse%20of%20Burgers%20Blida!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) invert(92%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="House of Burgers Location"
          />
        </div>

        {/* Bottom Row - Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-muted-text font-body text-sm">
            &copy; 2024 House of Burgers. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
