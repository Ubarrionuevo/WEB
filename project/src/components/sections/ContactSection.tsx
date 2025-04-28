import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section 
      id="contact"
      className="py-16 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center border-b border-gray-800"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6">Hablemos de tu proyecto</h2>
      <p className="text-base md:text-xl text-gray-300 text-center mb-6 md:mb-10">30 minutos. Sin jerga técnica. Sin compromiso.</p>
      <a
        href="https://wa.me/5493834035119"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 md:px-10 md:py-5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md text-base md:text-lg shadow-lg transition-colors flex items-center justify-center"
      >
        Escribime por WhatsApp
        <ArrowRight className="ml-2" />
      </a>
    </section>
  );
};

export default ContactSection;