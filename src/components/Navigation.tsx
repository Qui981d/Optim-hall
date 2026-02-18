import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'espaces', label: 'Espaces' },
    { id: 'evenements', label: 'Événements' },
    { id: 'equipements', label: 'Équipements' },
    { id: 'tarifs', label: 'Tarifs' },
    { id: 'demande', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 font-gilroy ${isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-optimhall-dark/20 backdrop-blur-sm'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div className="flex items-center">
              <img
                src="/white.png"
                alt="Optimhall Geneva"
                className={`h-8 lg:h-10 transition-all duration-300 ${isScrolled ? '' : ''
                  }`}
                style={isScrolled ? {
                  filter: 'brightness(0) saturate(100%) invert(20%) sepia(45%) saturate(1200%) hue-rotate(200deg) brightness(95%) contrast(95%)'
                } : {}}
              />
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-optimhall-blue hover:text-optimhall-dark' : 'text-white hover:text-white/80'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('demande')}
                className="bg-white text-optimhall-blue px-5 py-2 rounded-2xl font-semibold text-sm hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Offre gratuite
              </button>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-2xl transition-colors duration-300 ${isScrolled ? 'text-optimhall-blue' : 'text-white'
                }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-4 py-3 text-base font-medium text-optimhall-blue hover:bg-optimhall-blue hover:text-white w-full text-left rounded-2xl transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Sticky mobile CTA */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${isScrolled ? 'translate-y-0' : 'translate-y-full'
        }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3">
          <button
            onClick={() => scrollToSection('demande')}
            className="w-full bg-optimhall-blue text-white py-3 rounded-2xl font-semibold text-base hover:bg-optimhall-dark transition-colors duration-300"
          >
            Demander un devis
          </button>
        </div>
      </div>
    </>
  );
}