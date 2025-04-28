import React, { useRef } from 'react';
import { Globe, PenTool, Users, ArrowUpRight } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  isVisible: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay, isVisible }) => {
  return (
    <div 
      className={`bg-black/40 backdrop-blur-md p-6 rounded-xl border border-purple-900/30 group hover:bg-purple-900/20 transition-all duration-500 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-purple-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <a href="#contact" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300">
        <span className="mr-2">Descubre más</span>
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const services = [
    {
      title: "Diseño Web",
      description: "¿Tu sitio web no convierte? Diseñamos experiencias digitales que cautivan y convierten visitantes en clientes desde el primer segundo.",
      icon: <PenTool size={28} />
    },
    {
      title: "SEO",
      description: "¿No apareces en Google? Posicionamos tu marca en los primeros resultados donde tus clientes ideales están buscando tus servicios.",
      icon: <Globe size={28} />
    },
    {
      title: "Redes Sociales",
      description: "¿Buscas más alcance y engagement? Transformamos tus redes sociales en canales de venta que conectan con tu audiencia ideal.",
      icon: <Users size={28} />
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(120,40,200,0.15),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center max-w-xl md:max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 transform transition-all duration-700 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="text-gradient bg-gradient-to-r from-purple-500 to-pink-500">Soluciones</span> para tu crecimiento
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-gray-300 transform transition-all duration-700 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Sin complicaciones técnicas. Solo resultados tangibles que impulsan tu negocio al siguiente nivel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 100}
              isVisible={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;