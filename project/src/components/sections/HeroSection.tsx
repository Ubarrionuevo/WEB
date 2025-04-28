import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateElements = () => {
      if (headingRef.current) {
        headingRef.current.classList.add('animate-in');
      }
      
      setTimeout(() => {
        if (subheadingRef.current) {
          subheadingRef.current.classList.add('animate-in');
        }
      }, 400);
      
      setTimeout(() => {
        if (ctaRef.current) {
          ctaRef.current.classList.add('animate-in');
        }
      }, 800);
    };

    animateElements();
  }, []);

  const scrollToNextSection = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="bg-black text-white min-h-screen flex items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3178744/pexels-photo-3178744.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          opacity: 0.2
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 py-12 md:py-20">
        <div className="max-w-2xl md:max-w-4xl mx-auto text-center">
          <h1 
            ref={headingRef}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 opacity-0 transform translate-y-10 transition-all duration-700 leading-tight"
          >
            <span className="block">¿Querés resultados reales?</span>
            <span className="text-gradient bg-gradient-to-r from-purple-500 to-pink-500">Hacelo simple. Hacelo ahora.</span>
          </h1>
          
          <p 
            ref={subheadingRef}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-xl md:max-w-3xl mx-auto opacity-0 transform translate-y-10 transition-all duration-700 delay-100"
          >
            No promesas vacías. Te ayudamos a crecer con acciones concretas, sin vueltas y sin complicaciones. Hablamos claro, actuamos rápido.
          </p>
          
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 transform translate-y-10 transition-all duration-700 delay-200 w-full"
          >
            <a 
              href="#contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 md:px-8 md:py-3 rounded-full transition-all duration-300 hover:scale-105 min-w-[180px] text-center w-full sm:w-auto"
            >
              Hablemos ahora
            </a>
            <a 
              href="#services" 
              className="border border-white/30 hover:border-white/60 px-6 py-3 md:px-8 md:py-3 rounded-full transition-all duration-300 hover:bg-white/10 min-w-[180px] text-center w-full sm:w-auto"
            >
              Ver soluciones
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToNextSection}
          className="text-white hover:text-purple-400 transition-colors duration-300"
          aria-label="Ver más"
        >
          <ArrowDownCircle size={36} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;