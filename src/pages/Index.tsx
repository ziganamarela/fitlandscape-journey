
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import FeaturePanel from '@/components/FeaturePanel';
import PricingBundle from '@/components/PricingBundle';
import Testimonials from '@/components/Testimonials';
import Audience from '@/components/Audience';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  useEffect(() => {
    // Observer for fade-in animations on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with the fade-on-scroll class
    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Introduction />
      <FeaturePanel />
      <PricingBundle />
      <Testimonials />
      <Audience />
      <FAQ />
      <FinalCTA />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
