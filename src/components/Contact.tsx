import React, { useState } from 'react';
import { Calendar, Phone, Mail, MapPin, Clock, Send, Download, CheckCircle } from 'lucide-react';
import { BookingModal } from './BookingModal';
import { VisitModal } from './VisitModal';

export function Contact() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);

  return (
    <>
    <section id="contact" className="py-24 bg-optimhall-dark text-white font-gilroy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Réservez
            <span className="block text-white">votre événement</span>
          </h2>
          <p className="text-lg lg:text-xl text-optimhall-gray max-w-3xl mx-auto px-4">
            Prêt à créer un événement d'exception ? Notre équipe est là pour concrétiser vos projets les plus ambitieux. 
            Demandez votre devis personnalisé ou réservez une visite de nos espaces.
          </p>
        </div>

        {/* CTA Buttons Section */}
        <div className="text-center mb-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-white text-optimhall-blue px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Demander un devis
            </button>
            
            <button
              onClick={() => setIsVisitModalOpen(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Réserver une visite
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-6 text-white">Informations pratiques</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-white mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-white">Adresse</div>
                    <div className="text-optimhall-gray">
                      Optimhall Geneva<br />
                      Chemin de la Gravière 4<br />
                      1227 Acacias, Genève
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone size={24} className="text-white mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-white">Téléphone</div>
                    <div className="text-optimhall-gray">+41 22 XXX XX XX</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail size={24} className="text-white mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-optimhall-gray">events@optimhall.ch</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock size={24} className="text-white mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-white">Horaires</div>
                    <div className="text-optimhall-gray">
                      Lun-Ven: 9h-18h<br />
                      Sam-Dim: Sur rendez-vous<br />
                      Événements: 24h/24
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-2xl p-8">
            <h4 className="text-xl font-bold text-optimhall-blue mb-4">Réponse garantie</h4>
            <div className="grid grid-cols-1 gap-4 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-optimhall-blue rounded-full mr-3" />
                <span className="text-optimhall-dark">Devis sous 24h</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-optimhall-blue rounded-full mr-3" />
                <span className="text-optimhall-dark">Visite gratuite</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-optimhall-blue rounded-full mr-3" />
                <span className="text-optimhall-dark">Conseil personnalisé</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-optimhall-blue rounded-full mr-3" />
                <span className="text-optimhall-dark">Disponibilité immédiate</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h4 className="text-xl font-bold text-optimhall-blue mb-2">Accès facilité</h4>
            <div className="text-sm space-y-2 mb-4">
              <div className="text-optimhall-dark">• Aéroport : 7km → 20min voiture</div>
              <div className="text-optimhall-dark">• Gare Cornavin : 2,3km → 10min voiture</div>
              <div className="text-optimhall-dark">• Quartier des Acacias</div>
            </div>
            <button 
              onClick={() => window.open('https://maps.google.com/?q=Chemin+de+la+Gravière+4,+1227+Acacias,+Geneva,+Switzerland', '_blank')}
              className="bg-optimhall-blue text-white px-6 py-3 rounded-2xl font-semibold hover:bg-optimhall-dark transition-colors duration-300 inline-flex items-center gap-2"
            >
              <Download size={18} />
              Voir l'accès
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h4 className="text-xl font-bold mb-4 text-optimhall-blue">Documentation complète</h4>
            <p className="text-optimhall-dark text-sm mb-6">
              Téléchargez notre brochure officielle avec tous les détails : 
              plans détaillés, configurations possibles, tarifs et prestations incluses.
            </p>
            <div className="space-y-3">
              <button 
                onClick={() => window.open('#', '_blank')}
                className="w-full bg-optimhall-blue text-white px-6 py-3 rounded-2xl font-semibold hover:bg-optimhall-dark transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Télécharger la brochure PDF
              </button>
              <div className="text-xs text-optimhall-gray text-center">
                PDF • 2.4 MB • Plans 3D inclus
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Nous trouver
            </h3>
            <p className="text-white max-w-2xl mx-auto">
              optimhall se situe au cœur du quartier des Acacias, 
              facilement accessible depuis l'aéroport et le centre-ville de Genève.
            </p>
          </div>
          
          <div className="bg-optimhall-dark rounded-2xl p-4 lg:p-8">
            <div className="h-96 lg:h-[600px] rounded-2xl overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.234567890123!2d6.134567890123456!3d46.1934567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c7b1234567890%3A0x1234567890abcdef!2sChemin%20de%20la%20Gravi%C3%A8re%204%2C%201227%20Acacias%2C%20Gen%C3%A8ve%2C%20Suisse!5e0!3m2!1sfr!2sch!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation optimhall - Chemin de la Gravière 4, Acacias"
              />
            </div>
            
            <div className="text-center">
              <button 
                onClick={() => window.open('https://maps.google.com/?q=Chemin+de+la+Gravière+4,+1227+Acacias,+Geneva,+Switzerland', '_blank')}
                className="bg-white text-optimhall-blue px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2"
              >
                <MapPin size={18} />
                Ouvrir dans Google Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Modals */}
    <BookingModal 
      isOpen={isBookingModalOpen} 
      onClose={() => setIsBookingModalOpen(false)}
      onOpenVisit={() => setIsVisitModalOpen(true)}
      preselectedEventType=""
    />
    <VisitModal 
      isOpen={isVisitModalOpen} 
      onClose={() => setIsVisitModalOpen(false)}
      onOpenDevis={() => setIsBookingModalOpen(true)}
    />
    </>
  );
}