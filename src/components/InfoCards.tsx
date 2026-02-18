import React from 'react';
import { Clock, MapPin, Download, Plane, TrainFront } from 'lucide-react';

export function InfoCards() {
    return (
        <section className="py-16 lg:py-20 bg-optimhall-dark font-gilroy">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Réponse garantie */}
                    <div className="bg-white rounded-2xl p-6">
                        <div className="w-10 h-10 bg-optimhall-blue/10 rounded-xl flex items-center justify-center text-optimhall-blue mb-4">
                            <Clock size={22} />
                        </div>
                        <h4 className="text-lg font-bold text-optimhall-blue mb-2">Réponse garantie</h4>
                        <ul className="space-y-2 text-sm text-optimhall-gray">
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-optimhall-blue rounded-full flex-shrink-0" />
                                Devis sous 24h
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-optimhall-blue rounded-full flex-shrink-0" />
                                Visite gratuite
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-optimhall-blue rounded-full flex-shrink-0" />
                                Conseil personnalisé
                            </li>
                        </ul>
                    </div>

                    {/* Accès */}
                    <div className="bg-white rounded-2xl p-6">
                        <div className="w-10 h-10 bg-optimhall-blue/10 rounded-xl flex items-center justify-center text-optimhall-blue mb-4">
                            <MapPin size={22} />
                        </div>
                        <h4 className="text-lg font-bold text-optimhall-blue mb-2">Accès facilité</h4>
                        <ul className="space-y-2 text-sm text-optimhall-gray mb-4">
                            <li className="flex items-center gap-2">
                                <MapPin size={14} className="text-optimhall-blue flex-shrink-0" />
                                Chemin de la Gravière 4, Acacias
                            </li>
                            <li className="flex items-center gap-2">
                                <Plane size={14} className="text-optimhall-blue flex-shrink-0" />
                                Aéroport : 20 min
                            </li>
                            <li className="flex items-center gap-2">
                                <TrainFront size={14} className="text-optimhall-blue flex-shrink-0" />
                                Gare Cornavin : 10 min
                            </li>
                        </ul>
                        <button
                            onClick={() => window.open('https://maps.google.com/?q=Chemin+de+la+Gravière+4,+1227+Acacias,+Geneva,+Switzerland', '_blank')}
                            className="text-optimhall-blue font-semibold text-sm hover:text-optimhall-dark transition-colors"
                        >
                            Voir sur Google Maps →
                        </button>
                    </div>

                    {/* Plaquette */}
                    <div className="bg-white rounded-2xl p-6">
                        <div className="w-10 h-10 bg-optimhall-blue/10 rounded-xl flex items-center justify-center text-optimhall-blue mb-4">
                            <Download size={22} />
                        </div>
                        <h4 className="text-lg font-bold text-optimhall-blue mb-2">Documentation</h4>
                        <p className="text-sm text-optimhall-gray mb-4">
                            Plans détaillés, configurations, tarifs et prestations incluses.
                        </p>
                        <button
                            onClick={() => window.open('#', '_blank')}
                            className="w-full bg-optimhall-blue text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-optimhall-dark transition-colors"
                        >
                            Télécharger la plaquette PDF
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
