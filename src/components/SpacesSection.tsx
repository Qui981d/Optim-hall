import React from 'react';
import { Users, Maximize, ChevronRight } from 'lucide-react';

export function SpacesSection() {
  const spaces = [
    {
      name: "Mainhall",
      capacity: "400 cocktail / 300 dîner",
      area: "400m²",
      height: "6-8,5m sous plafond",
      image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Toit vitré", "Son/Lumière/Vidéo inclus", "Accès véhicules", "Monte-charge"]
    },
    {
      name: "Studiohall",
      capacity: "200 personnes",
      area: "200m²",
      height: "3m sous plafond",
      image: "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Lumière naturelle", "Modulable", "Accès PMR"]
    },
    {
      name: "Loges Artistes",
      capacity: "Espace privé",
      area: "—",
      height: "",
      image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Miroirs & éclairage", "Espace repos", "Accès backstage"]
    },
    {
      name: "Office & Traiteur",
      capacity: "Espace dédié",
      area: "—",
      height: "",
      image: "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Cuisine équipée", "Stockage", "Zone de préparation"]
    }
  ];

  return (
    <section id="espaces" className="py-16 lg:py-24 bg-white font-gilroy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-optimhall-blue mb-3">
            Les espaces
          </h2>
          <p className="text-optimhall-gray text-lg">
            Des configurations adaptées à chaque événement
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory scrollbar-hide">
          {spaces.map((space, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 lg:w-auto snap-center bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div
                className="h-44 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${space.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-optimhall-dark/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <h3 className="text-lg font-bold text-white">{space.name}</h3>
                </div>
                {space.area !== "—" && (
                  <div className="absolute top-3 right-3 bg-white text-optimhall-blue px-2 py-1 rounded-full text-xs font-bold">
                    {space.area}
                  </div>
                )}
              </div>

              <div className="p-4">
                {space.capacity && (
                  <div className="flex items-center text-sm text-optimhall-gray mb-3">
                    <Users size={14} className="mr-2 flex-shrink-0" />
                    {space.capacity}
                  </div>
                )}

                <div className="space-y-1.5">
                  {space.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center text-sm text-optimhall-gray">
                      <div className="w-1.5 h-1.5 bg-optimhall-blue rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3D Visit CTA */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.open('#', '_blank')}
            className="inline-flex items-center gap-2 text-optimhall-blue font-semibold hover:text-optimhall-dark transition-colors"
          >
            Visite 3D complète
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}