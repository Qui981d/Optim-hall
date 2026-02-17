import React, { useState } from 'react';
import { Briefcase, Heart, Music } from 'lucide-react';
import { BookingModal } from './BookingModal';
import { VisitModal } from './VisitModal';

export function EventTypes() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openBookingModal = (eventType: string) => {
    setSelectedEventType(eventType);
    setIsBookingModalOpen(true);
  };

  const eventTypes = [
    {
      category: "Événements corporate",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=100",
      events: ["Conférences & Séminaires", "Salons professionnels", "Networking & Cocktails", "Formations & Workshops", "Assemblées générales", "Lancements produits"],
      mainImage: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "bg-gray-800",
      description: "Espaces professionnels modulables pour vos événements d'entreprise les plus exigeants",
      eventTypeValue: "Corporate"
    },
    {
      category: "Événements privés",
      image: "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=100",
      events: ["Mariages & Réceptions", "Anniversaires & Fêtes", "Baptêmes & Communions", "Soirées familiales", "Célébrations privées", "Dîners d'exception"],
      mainImage: "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "bg-gray-800",
      description: "Créez des moments inoubliables dans un cadre intimiste et raffiné",
      eventTypeValue: "Privé"
    },
    {
      category: "Événements publics",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=100",
      events: ["Concerts & Spectacles", "Festivals culturels", "Galas & Soirées", "Expositions artistiques", "Conférences publiques", "Événements caritatifs"],
      mainImage: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "bg-gray-900",
      description: "Scène parfaite pour vos manifestations culturelles et événements grand public",
      eventTypeValue: "Culturel-Festif"
    }
  ];

  return (
    <>
    <section id="evenements" className="py-16 lg:py-24 bg-optimhall-white font-gilroy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-optimhall-blue mb-4">
            Vos événements
            <span className="block text-optimhall-dark">notre passion</span>
          </h2>
          <p className="text-lg lg:text-xl text-optimhall-gray max-w-3xl mx-auto px-4">
            Trois univers distincts pour répondre à tous vos besoins événementiels. 
            De l'intimité des célébrations privées à l'ampleur des manifestations publiques.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {eventTypes.map((type, index) => (
            <div key={index} className="relative group">
              <div className="bg-optimhall-white rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-optimhall-gray/20">
                <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <img 
                    src={type.image} 
                    alt={type.category}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-optimhall-blue mb-4">{type.category}</h3>
                <p className="text-optimhall-gray mb-6 leading-relaxed">{type.description}</p>
                
                <div className="grid grid-cols-1 gap-3 mb-8">
                  {type.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-optimhall-blue rounded-full mr-3 flex-shrink-0" />
                      <span className="text-optimhall-gray text-sm lg:text-base">{event}</span>
                    </div>
                  ))}
                </div>
                
                <div 
                  className="h-40 lg:h-48 rounded-2xl bg-cover bg-center mb-6"
                  style={{ backgroundImage: `url(${type.mainImage})` }}
                />
                
                <button 
                  onClick={() => openBookingModal(type.eventTypeValue)}
                  className="w-full bg-optimhall-blue text-optimhall-white py-3 lg:py-4 rounded-2xl font-semibold text-base lg:text-lg hover:bg-optimhall-dark transition-colors duration-300"
                >
                  Demander un devis {type.category.toLowerCase()}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16 bg-optimhall-blue rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-optimhall-white mb-4">Événement sur-mesure ?</h3>
          <p className="text-lg lg:text-xl text-optimhall-gray mb-6 lg:mb-8 max-w-2xl mx-auto px-4">
            Votre projet ne rentre dans aucune case ? Parfait ! 
            Nous excellons dans la création d'expériences uniques et personnalisées.
          </p>
          <a 
            href="mailto:events@optimhall.ch?subject=Demande%20d'événement%20sur-mesure&body=Bonjour,%0D%0A%0D%0AJe%20souhaiterais%20discuter%20d'un%20projet%20d'événement%20sur-mesure.%0D%0A%0D%0ACordialement"
            className="inline-block bg-optimhall-white text-optimhall-blue px-6 lg:px-8 py-3 lg:py-4 rounded-2xl font-semibold text-base lg:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Parlons de votre projet
          </a>
        </div>
      </div>
    </section>

    {/* Modals */}
    <BookingModal 
      isOpen={isBookingModalOpen} 
      onClose={() => setIsBookingModalOpen(false)}
      onOpenVisit={() => setIsVisitModalOpen(true)}
      preselectedEventType={selectedEventType}
    />
    <VisitModal 
      isOpen={isVisitModalOpen} 
      onClose={() => setIsVisitModalOpen(false)}
      onOpenDevis={() => setIsBookingModalOpen(true)}
    />
    </>
  );
}