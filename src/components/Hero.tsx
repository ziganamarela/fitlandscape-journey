import { useEffect, useRef } from 'react';
const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      const layers = parallaxRef.current.querySelectorAll('.parallax-layer');
      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;
      layers.forEach((layer, index) => {
        const speed = (index + 1) * 0.2;
        const htmlLayer = layer as HTMLElement;
        htmlLayer.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`;
      });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  const scrollToNextSection = () => {
    const introSection = document.getElementById('introduction');
    if (introSection) {
      introSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      
      <div ref={parallaxRef} className="container relative parallax-container z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <div className="parallax-layer">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-fitBlack animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                Break free <span className="text-fitYellow">&</span> <br className="hidden sm:block" />
                train your <span className="text-fitYellow">way</span>
              </h1>
            </div>
            
            <div className="parallax-layer px-0 py-0 my-0 mx-0">
              <p style={{
              animationDelay: '0.4s'
            }} className="md:text-xl text-fitBlack/70 max-w-2xl mt-6 animate-fade-in my-[31px] text-base mx-[36px]">Everything you need
- Fitness  Calesthenics  Cardio </p>
            </div>
            
            <div className="parallax-layer mt-12 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <button onClick={scrollToNextSection} className="button-primary text-lg px-8 py-4 shadow-lg inline-flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
          
          <div className="mt-16 md:mt-24 relative animate-fade-in" style={{
          animationDelay: '0.8s'
        }}>
            <div className="aspect-video bg-gray-100 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-rotate-1">
              <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop" alt="FitAnywhere Premium Home Gym" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-5 md:-bottom-8 md:-right-8 bg-fitYellow rounded-lg p-3 md:p-5 shadow-lg parallax-layer">
              <p className="text-sm md:text-base font-semibold text-fitBlack">Coming Spring 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;