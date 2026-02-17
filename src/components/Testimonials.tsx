import React from 'react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Marie Dubois",
      position: "Directrice Marketing, SwissBank",
      event: "Conférence annuelle 2024",
      rating: 5,
      text: "L'Optimhall a dépassé toutes nos attentes. L'équipe professionnelle, les espaces modulables et la technologie de pointe ont fait de notre conférence un succès retentissant.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Jean-Pierre Martin",
      position: "Organisateur d'événements",
      event: "Gala de charité",
      rating: 5,
      text: "Optimhall c'est l'excellence incarnée. De la réservation à la réalisation, tout est pensé pour créer des moments d'exception. Mes clients sont toujours enchantés.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Sophie & Laurent",
      position: "Mariés",
      event: "Mariage de rêve",
      rating: 5,
      text: "Notre mariage à l'Optimhall restera gravé à jamais dans nos mémoires. Un lieu magique, une équipe aux petits soins, une soirée parfaite pour nos 180 invités.",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 font-gilroy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-optimhall-blue mb-4">
            Ils nous font
            <span className="block text-optimhall-dark">confiance</span>
          </h2>
          <p className="text-lg lg:text-xl text-optimhall-gray max-w-3xl mx-auto px-4">
            Plus de 500 événements réussis, des milliers de sourires, 
            et une réputation d'excellence qui nous précède dans toute la région.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <Quote size={40} className="text-optimhall-blue mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-optimhall-blue fill-current" />
                ))}
              </div>
              
              <p className="text-optimhall-dark mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-bold text-optimhall-blue">{testimonial.name}</div>
                  <div className="text-sm text-optimhall-gray">{testimonial.position}</div>
                  <div className="text-sm text-optimhall-blue font-medium">{testimonial.event}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl lg:text-4xl font-bold text-optimhall-blue mb-2">500+</div>
            <div className="text-sm lg:text-base text-optimhall-gray">Événements réalisés</div>
          </div>
          <div>
            <div className="text-2xl lg:text-4xl font-bold text-optimhall-blue mb-2">98%</div>
            <div className="text-sm lg:text-base text-optimhall-gray">Clients satisfaits</div>
          </div>
          <div>
            <div className="text-2xl lg:text-4xl font-bold text-optimhall-blue mb-2">15</div>
            <div className="text-sm lg:text-base text-optimhall-gray">Années d'expérience</div>
          </div>
          <div>
            <div className="text-2xl lg:text-4xl font-bold text-optimhall-blue mb-2">5★</div>
            <div className="text-sm lg:text-base text-optimhall-gray">Note moyenne</div>
          </div>
        </div>
      </div>
    </section>
  );
}