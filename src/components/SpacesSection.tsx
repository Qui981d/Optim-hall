import React from 'react';
import { Maximize, Users, Settings } from 'lucide-react';

export function SpacesSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const spaces = [
    {
      id: 1,
      name: "Mainhall",
      capacity: "300 dîner / 400 cocktail",
      area: "400m²",
      description: "Espace principal avec toit vitré et hauteur exceptionnelle de 6-8,5m, parfait pour vos grands événements",
      image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Toit vitré", "Hauteur 6-8,5m", "Son/Lumière/Vidéo inclus", "Accès véhicules"]
    },
    {
      id: 2,
      name: "Studiohall",
      capacity: "200 personnes",
      area: "200m²",
      description: "Espace modulable avec lumière naturelle, idéal pour formations et événements moyens",
      image: "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Lumière du jour", "3m de hauteur", "Modulable", "Accès handicapés"]
    },
    {
      id: 3,
      name: "Mainhall + Studiohall",
      capacity: "Jusqu'à 900 personnes",
      area: "600m²",
      description: "Configuration complète rez-de-chaussée pour vos plus grands événements",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Espace maximum", "Pendrillons modulables", "Espace traiteur", "Monte-charge"]
    }
  ];

  const additionalSpaces = [
    {
      name: "Tiny Halls",
      description: "9 salles de réunion équipées",
      capacity: "10-40 personnes",
      area: "20-30m² chacune",
      features: ["Écrans AirPlay", "1er étage"]
    },
    {
      name: "Top Hall",
      description: "Salle de réception/conférence",
      capacity: "50 personnes",
      area: "80m²",
      features: ["1er étage", "Équipement complet"]
    },
    {
      name: "Grand espace conférence",
      description: "Espace conférence premium",
      capacity: "100 personnes",
      area: "470m²",
      features: ["1er étage", "Configuration théâtre"]
    }
  ];

  return (
    <section id="espaces" className="py-24 bg-optimhall-white font-gilroy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-optimhall-blue mb-4">
            Des espaces
            <span className="block text-optimhall-dark">modulables</span>
          </h2>
          <p className="text-lg lg:text-xl text-optimhall-gray max-w-3xl mx-auto px-4">
            Trois espaces distincts et configurables selon vos besoins. 
            De l'intimité du salon VIP à la grandeur du hall principal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {spaces.map((space) => (
            <div key={space.id} className="bg-optimhall-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-optimhall-gray/20">
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${space.image})` }}
              >
                <div className="absolute inset-0 bg-optimhall-dark bg-opacity-20" />
                <div className="absolute top-4 left-4 bg-optimhall-white text-optimhall-blue px-3 py-1 rounded-full text-sm font-semibold">
                  {space.area}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-optimhall-blue mb-2">{space.name}</h3>
                <div className="flex items-center text-optimhall-gray mb-4">
                  <Users size={18} className="mr-2" />
                  {space.capacity}
                </div>
                <p className="text-optimhall-gray mb-6 leading-relaxed">{space.description}</p>
                
                <div className="space-y-2 mb-6">
                  {space.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-optimhall-gray">
                      <div className="w-2 h-2 bg-optimhall-blue rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-optimhall-blue text-optimhall-white py-3 rounded-2xl font-semibold hover:bg-optimhall-dark transition-colors duration-300"
                >
                  Explorer cet espace
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-optimhall-blue rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-optimhall-white mb-6">Espaces complémentaires - 1er étage</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalSpaces.map((space, index) => (
                <div key={index} className="bg-optimhall-white rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-optimhall-blue mb-2">{space.name}</h4>
                  <p className="text-optimhall-gray text-sm mb-3">{space.description}</p>
                  <div className="text-sm text-optimhall-gray mb-2">{space.capacity} • {space.area}</div>
                  <div className="flex flex-wrap gap-2">
                    {space.features.map((feature, fIndex) => (
                      <span key={fIndex} className="bg-optimhall-blue text-optimhall-white px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-optimhall-white text-optimhall-blue px-6 lg:px-8 py-3 lg:py-4 rounded-2xl font-semibold text-base lg:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 border-2 border-optimhall-blue"
          >
            Voir toutes les configurations
          </button>
        </div>
      </div>
    </section>
  );
}