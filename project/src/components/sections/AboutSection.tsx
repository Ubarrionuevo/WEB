import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useIntersectionObserver(sectionRef, { threshold: 0.2 });
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,40,200,0.15),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tu marca merece <span className="text-purple-500">destacar</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              En el mundo digital actual, tienes 60 segundos o menos para captar la atención 
              de tu audiencia. Tu marca necesita destacar con contenido que impacte desde 
              el primer momento.
            </p>
            <p className="text-gray-300 text-lg mb-8">
              Imagina transformar cada visitante en un cliente potencial, cada clic en una 
              conversión, y cada campaña en un éxito medible. Ese es el poder de un 
              marketing digital efectivo.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-900/30">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">+500</h3>
                <p className="text-gray-400">Marcas transformadas</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-900/30">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">+1000</h3>
                <p className="text-gray-400">Objetivos alcanzados</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-900/30">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">95%</h3>
                <p className="text-gray-400">Clientes satisfechos</p>
              </div>
            </div>
          </div>
          
          <div className={`relative transform transition-all duration-1000 delay-300 ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Transformación digital en acción" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold mb-2">Tu éxito digital</h3>
                <p className="text-gray-300">Estrategias que transforman tu presencia online</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-purple-600 rounded-full blur-3xl opacity-20 -z-10"></div>
            <div className="absolute -top-4 -left-4 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;