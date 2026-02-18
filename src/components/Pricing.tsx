import React from 'react';
import { Shield, Sparkles, Trash2, Bath } from 'lucide-react';

export function Pricing() {
    const scrollToQuote = () => {
        const element = document.getElementById('demande');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const options = [
        { icon: <Shield size={18} />, name: "Sécurité", detail: "Agents sur place", price: "Sur devis" },
        { icon: <Sparkles size={18} />, name: "Nettoyage", detail: "Remise en état complète", price: "Sur devis" },
        { icon: <Trash2 size={18} />, name: "Gestion déchets", detail: "Tri & évacuation", price: "Sur devis" },
        { icon: <Bath size={18} />, name: "WC supplémentaires", detail: "Sanitaires mobiles", price: "Sur devis" },
    ];

    return (
        <section id="tarifs" className="py-16 lg:py-24 bg-white font-gilroy">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-optimhall-blue mb-3">
                        Tarifs
                    </h2>
                    <p className="text-optimhall-gray text-lg">
                        Des formules adaptées à votre événement
                    </p>
                </div>

                {/* Price ranges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    <div className="bg-optimhall-blue rounded-2xl p-6 text-white text-center">
                        <div className="text-sm text-white/70 mb-1">Mainhall (400m²)</div>
                        <div className="text-2xl font-bold mb-1">Dès CHF 3'500</div>
                        <div className="text-sm text-white/60">/ demi-journée</div>
                    </div>
                    <div className="bg-optimhall-dark rounded-2xl p-6 text-white text-center">
                        <div className="text-sm text-white/70 mb-1">Studiohall (200m²)</div>
                        <div className="text-2xl font-bold mb-1">Dès CHF 1'800</div>
                        <div className="text-sm text-white/60">/ demi-journée</div>
                    </div>
                </div>

                {/* Options table */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-optimhall-blue mb-4">Options complémentaires</h3>
                    <div className="space-y-3">
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-optimhall-blue/10 rounded-xl flex items-center justify-center text-optimhall-blue">
                                        {option.icon}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-optimhall-blue text-sm">{option.name}</div>
                                        <div className="text-xs text-optimhall-gray">{option.detail}</div>
                                    </div>
                                </div>
                                <div className="text-sm font-semibold text-optimhall-blue">{option.price}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={scrollToQuote}
                        className="bg-optimhall-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-optimhall-dark transition-all duration-300 transform hover:scale-105"
                    >
                        Obtenir mon devis en 24h
                    </button>
                </div>
            </div>
        </section>
    );
}
