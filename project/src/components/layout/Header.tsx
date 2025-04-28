import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from '../ui/Link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="#hero" className="text-white font-bold text-2xl">
            1<span className="text-purple-500">minuto</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about">Nosotros</Link>
            <Link href="#services">Servicios</Link>
            <Link href="#process">Proceso</Link>
            <Link 
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-black z-40 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          <Link href="#about" onClick={toggleMenu}>Nosotros</Link>
          <Link href="#services" onClick={toggleMenu}>Servicios</Link>
          <Link href="#process" onClick={toggleMenu}>Proceso</Link>
          <Link 
            href="#contact" 
            onClick={toggleMenu}
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full transition-all duration-300"
          >
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;