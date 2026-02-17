import React from 'react';
import { MapPin, Car, Maximize2, Play } from 'lucide-react';

export function Hero() {
  const scrollToQuote = () => {
    const element = document.getElementById('demande');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-gilroy">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-optimhall-blue via-optimhall-dark to-black z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1920")`
          }}
        />
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          L'espace événementiel
          <span className="block text-white/90">de référence à Genève</span>
        </h1>

        {/* Key Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-2xl lg:text-3xl font-bold">600m²</div>
            <div className="text-sm text-white/70">Surface</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-2xl lg:text-3xl font-bold">850</div>
            <div className="text-sm text-white/70">Personnes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center justify-center">
            <MapPin size={24} className="mb-1" />
            <div className="text-sm text-white/70">Acacias</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center justify-center">
            <Car size={24} className="mb-1" />
            <div className="text-sm text-white/70">Parking</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
          <button
            onClick={scrollToQuote}
            className="bg-white text-optimhall-blue px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto"
          >
            Vérifier la disponibilité
          </button>

          <button
            onClick={() => window.open('#', '_blank')}
            className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-optimhall-blue transition-all duration-300 w-full sm:w-auto"
          >
            <Play size={18} />
            Visite 3D
          </button>
        </div>
      </div>
    </section>
  );
}