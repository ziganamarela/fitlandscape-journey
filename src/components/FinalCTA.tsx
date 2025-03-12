
import { useEffect, useRef } from 'react';

const FinalCTA = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollTop = window.scrollY;
      const layers = parallaxRef.current.querySelectorAll('.parallax-layer');
      
      layers.forEach((layer, index) => {
        const speed = (index + 1) * 0.05;
        const yPos = scrollTop * speed;
        const htmlLayer = layer as HTMLElement;
        htmlLayer.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="order" className="relative bg-fitBlack py-20 md:py-32 overflow-hidden">
      <div ref={parallaxRef} className="container relative z-10 parallax-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="parallax-layer">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Final Call — Your New Lifestyle Awaits
            </h2>
          </div>
          
          <div className="parallax-layer">
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
              Stocks are limited. Transform your fitness journey with the FitAnywhere Bundle.
            </p>
          </div>
          
          <div className="parallax-layer">
            <button className="bg-fitYellow text-fitBlack font-bold px-8 py-4 rounded-md text-lg shadow-xl hover:shadow-fitYellow/30 transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.6s'}}>
              ORDER NOW – Limited Stock Available!
            </button>
            <p className="text-white/60 mt-4 text-sm animate-fade-in" style={{animationDelay: '0.8s'}}>
              Only 500 units available for Spring 2025 launch
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-72 h-72 bg-fitYellow rounded-full opacity-20 absolute -top-20 -left-20 blur-3xl"></div>
          <div className="w-96 h-96 bg-fitYellow rounded-full opacity-10 absolute -bottom-48 -right-48 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
