import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = [
    {
      url: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Hall principal - Configuration conférence",
      category: "Corporate"
    },
    {
      url: "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Salon VIP - Cocktail networking",
      category: "Networking"
    },
    {
      url: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Studio - Formation interactive",
      category: "Formation"
    },
    {
      url: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Configuration gala - 300 invités",
      category: "Gala"
    },
    {
      url: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Setup concert - Éclairage spectacle",
      category: "Concert"
    },
    {
      url: "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Mariage - Décoration florale",
      category: "Mariage"
    }
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galerie" className="py-24 bg-optimhall-dark text-white font-gilroy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Galerie
            <span className="block text-white">immersive</span>
          </h2>
          <p className="text-lg lg:text-xl text-optimhall-gray max-w-3xl mx-auto px-4">
            Découvrez nos espaces en action. Chaque événement raconte une histoire, 
            chaque configuration révèle de nouvelles possibilités.
          </p>
        </div>

        <div className="relative">
          {/* Main Image */}
          <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden mb-8">
            <img 
              src={images[selectedImage].url} 
              alt={images[selectedImage].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-optimhall-dark via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8">
              <div className="bg-white text-optimhall-blue px-3 py-1 rounded-full text-sm font-semibold mb-2">
                {images[selectedImage].category}
              </div>
              <h3 className="text-2xl font-bold">{images[selectedImage].title}</h3>
            </div>

            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-optimhall-dark bg-opacity-80 hover:bg-opacity-90 rounded-full p-3 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-optimhall-dark bg-opacity-80 hover:bg-opacity-90 rounded-full p-3 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative h-24 md:h-32 rounded-xl overflow-hidden transition-all duration-300 ${
                  selectedImage === index 
                    ? 'ring-4 ring-white scale-105' 
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => window.open('#', '_blank')}
             className="bg-white text-optimhall-blue px-6 lg:px-8 py-3 lg:py-4 rounded-2xl font-semibold text-base lg:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Maximize2 size={20} />
              Lancer la visite 3D
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}