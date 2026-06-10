import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-left', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      gsap.from('.about-right', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#F5F2EC] py-20 lg:py-32"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="about-left lg:w-[40%]">
            <span className="text-accent font-body text-xs font-semibold tracking-[1.5px] uppercase">
              OUR STORY
            </span>
            <h2 className="font-display text-[#1A1A1A] text-3xl lg:text-4xl font-bold tracking-tight mt-3 leading-tight">
              Crafted with Passion since 2016
            </h2>
          </div>

          {/* Right Column */}
          <div className="about-right lg:w-[55%]">
            <p className="text-[#4A4A4A] font-body text-lg leading-relaxed mb-6">
              House of Burgers is an Algerian fast-food chain exclusively specializing in burgers.
              The first restaurant opened in July 2016 in Boumerdes, driven by three founders who,
              through an extensive journey across more than 10 American states, mastered all the
              secrets to bring this project to life.
            </p>
            <p className="text-[#4A4A4A] font-body text-lg leading-relaxed">
              Due to its success and the growing demand from the Algerian public, our chain has
              rapidly expanded to nine restaurants across seven different Wilayas. Our burgers are
              made from rustic breed beef from traditional farms, prepared by our artisan butcher.
              Our buns are specially crafted by our baker, and our sauces are homemade, exclusively
              prepared daily with fresh products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
