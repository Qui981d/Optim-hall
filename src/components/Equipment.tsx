import React from 'react';
import { Volume2, Camera, Lightbulb, Wifi, Car, Coffee } from 'lucide-react';

export function Equipment() {
  const equipment = [
    {
      category: "Audio & Visuel JBL",
      image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=100",
      items: ["8 enceintes JBL 500W", "2 caissons 1000W", "Projecteur 7 500 lumens", "Écran géant 12m²", "50+ sources LED DMX"]
    },
    {
      category: "Connectivité & Tech",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=100",
      items: ["Fibre optique dans tout le lieu", "Wi-Fi haut débit", "Écrans AirPlay (Tiny Halls)", "Électricité 32A + 16A triphasé"]
    },
    {
      category: "Services & Mobilier",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=100",
      items: ["Organisation clé en main", "Mobilier inclus (canapés, tables)", "Espace traiteur équipé", "Photobooth & team building", "Plans & documents 3D"]
    }
  ];

  return (
    <section id="equipements" className="py-24 bg-optimhall-dark text-white font-gilroy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Équipements
            <span className="block text-white">haute qualité</span>
          </h2>
          <p className="text-lg lg:text-xl text-optimhall-gray max-w-3xl mx-auto px-4">
            Technologie de pointe et services premium pour garantir 
            le succès de vos événements les plus exigeants.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {equipment.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 hover:bg-gray-50 transition-colors duration-300">
              <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img 
                  src={category.image} 
                  alt={category.category}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-optimhall-blue mb-6">{category.category}</h3>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-optimhall-blue rounded-full mr-3" />
                    <span className="text-optimhall-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl lg:text-4xl font-bold text-white mb-2">7500</div>
            <div className="text-sm lg:text-base text-optimhall-gray">Lumens projecteur</div>
          </div>
          <div>
            <div className="text-2xl lg:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-sm lg:text-base text-optimhall-gray">Sources LED DMX</div>
          </div>
          <div>
            <div className="text-2xl lg:text-4xl font-bold text-white mb-2">12m²</div>
            <div className="text-sm lg:text-base text-optimhall-gray">Écran géant</div>
          </div>
          <div>
            <div className="text-2xl lg:text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-sm lg:text-base text-optimhall-gray">Privatisable</div>
          </div>
        </div>
      </div>
    </section>
  );
}