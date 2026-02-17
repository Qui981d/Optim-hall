import React, { useState, useEffect } from 'react';
import { ArrowDown, Play } from 'lucide-react';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides = [
    {
      image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Événements Corporate",
      subtitle: "Conférences, séminaires et événements d'entreprise"
    },
    {
      image: "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Mariages & Réceptions",
      subtitle: "Célébrations privées dans un cadre d'exception"
    },
    {
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Concerts & Spectacles",
      subtitle: "Événements culturels et festifs"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 100);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToSpaces = () => {
    const element = document.getElementById('espaces');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSlideChange = (index: number) => {
    if (index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 100);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-0 font-gilroy">
      <div className="absolute inset-0 bg-gradient-to-br from-optimhall-blue via-optimhall-dark to-black z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-40 scale-100' 
                : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `url("${slide.image}")`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight">
          L'espace événementiel
          <span className="block text-optimhall-white">de référence à genève</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 text-optimhall-gray max-w-3xl mx-auto leading-relaxed">
          Ancien atelier industriel rénové, 600m² modulables, jusqu'à 900 invités. 
          L'espace 100% privatisable qui transforme vos idées en expériences inoubliables.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 lg:mb-12">
          <button 
            onClick={scrollToSpaces}
            className="bg-optimhall-white text-optimhall-blue px-6 lg:px-8 py-3 lg:py-4 rounded-2xl font-semibold text-base lg:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto"
          >
            Découvrir nos espaces
          </button>
          
          <button 
            onClick={() => window.open('#', '_blank')}
            className="flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4 border-2 border-optimhall-white text-optimhall-white rounded-2xl font-semibold text-base lg:text-lg hover:bg-optimhall-white hover:text-optimhall-blue transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            <Play size={20} />
            Explorer en 3D
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 text-center">
          <div>
            <div className="text-2xl lg:text-4xl font-bold text-optimhall-white mb-1 lg:mb-2">600m²</div>
            <div className="text-sm lg:text-base text-optimhall-gray">Surface modulable</div>
          </div>
          <div>
            <div className="text-2xl lg:text-4xl font-bold text-optimhall-white mb-1 lg:mb-2">900</div>
            <div className="text-sm lg:text-base text-optimhall-gray">Personnes max</div>
          </div>
          <div>
            <div className="text-2xl lg:text-4xl font-bold text-optimhall-white mb-1 lg:mb-2">24/7</div>
            <div className="text-sm lg:text-base text-optimhall-gray">Support dédié</div>
          </div>
        </div>
        
        {/* Carousel indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-optimhall-white scale-110' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Aller à la slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <button 
        onClick={scrollToSpaces}
        className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hidden sm:block"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}