import { useState, useEffect } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Menu from './sections/Menu';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] bg-[#0A0A0A] flex flex-col items-center justify-center">
      <h1 className="font-display text-white text-3xl lg:text-4xl font-bold tracking-tight animate-pulse">
        HOUSE OF BURGERS
      </h1>
      <div className="mt-6 w-32 h-px bg-white/20 overflow-hidden">
        <div className="h-full bg-accent animate-[loading_1.5s_ease-in-out_infinite]" 
          style={{
            animation: 'loading 1.5s ease-in-out infinite',
          }}
        />
      </div>
      <style>{`
        @keyframes loading {
          0% { width: 0%; margin-left: 0; }
          50% { width: 100%; margin-left: 0; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      
      <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Contact />
      </div>
    </>
  );
}
