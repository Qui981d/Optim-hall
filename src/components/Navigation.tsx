import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentButtonText, setCurrentButtonText] = useState(0);
  
  const buttonTexts = ['Réserver', 'Devis', 'Visite'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentButtonText((prev) => (prev + 1) % buttonTexts.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [buttonTexts.length]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleReservation = () => {
    scrollToSection('contact');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 font-gilroy ${
      isScrolled ? 'bg-optimhall-white/95 shadow-lg backdrop-blur-md' : 'bg-optimhall-dark/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center">
            <img 
              src="/white.png"
              alt="Optimhall Geneva" 
              className={`h-8 lg:h-10 transition-all duration-300 ${
                isScrolled 
                  ? 'brightness-0 saturate-100' 
                  : ''
              }`}
              style={isScrolled ? {
                filter: 'brightness(0) saturate(100%) invert(20%) sepia(45%) saturate(1200%) hue-rotate(200deg) brightness(95%) contrast(95%)'
              } : {}}
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
              {['espaces', 'evenements', 'equipements', 'galerie', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300 hover:text-optimhall-white ${
                    isScrolled ? 'text-optimhall-blue' : 'text-optimhall-white'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <button
                onClick={handleReservation}
                className="bg-optimhall-white text-optimhall-blue px-4 lg:px-6 py-2 rounded-2xl font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 relative overflow-hidden min-w-[80px]"
              >
                <span 
                  key={currentButtonText}
                  className="inline-block animate-fade-in-up"
                >
                  {buttonTexts[currentButtonText]}
                </span>
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-2xl transition-colors duration-300 ${
                isScrolled ? 'text-optimhall-blue' : 'text-optimhall-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-optimhall-white/95 backdrop-blur-md shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {['espaces', 'evenements', 'equipements', 'galerie', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block px-4 py-3 text-base font-medium text-optimhall-blue hover:text-optimhall-white hover:bg-optimhall-blue w-full text-left rounded-2xl transition-all duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button
              onClick={handleReservation}
              className="bg-optimhall-blue text-optimhall-white px-6 py-3 rounded-2xl font-medium hover:bg-optimhall-dark transition-all duration-300 w-full mt-4 relative overflow-hidden"
            >
              <span 
                key={currentButtonText}
                className="inline-block animate-fade-in-up"
              >
                {buttonTexts[currentButtonText]}
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}