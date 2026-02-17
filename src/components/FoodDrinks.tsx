import React from 'react';
import { Wine, UtensilsCrossed, Coffee } from 'lucide-react';

export function FoodDrinks() {
    const categories = [
        {
            icon: <UtensilsCrossed size={24} />,
            title: "Buffet & Traiteur",
            description: "Espace cuisine équipée pour votre traiteur. Possibilité de mise en relation avec nos partenaires.",
            items: ["Cuisine professionnelle", "Zone de préparation", "Réfrigération", "Vaisselle disponible"]
        },
        {
            icon: <Wine size={24} />,
            title: "Bar & Cocktails",
            description: "Comptoir bar modulable avec équipements complets pour vos soirées.",
            items: ["Comptoir bar", "Frigos à boissons", "Verrerie incluse", "Tireuse à bière"]
        },
        {
            icon: <Coffee size={24} />,
            title: "Accueil & Pauses",
            description: "Espaces café et accueil pour vos séminaires et conférences.",
            items: ["Machine à café pro", "Fontaine à eau", "Espace accueil", "Vestiaire"]
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-optimhall-dark font-gilroy">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                        Food & Drinks
                    </h2>
                    <p className="text-optimhall-gray text-lg">
                        Tout l'infrastructure pour vos besoins F&B
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-optimhall-blue rounded-xl flex items-center justify-center text-white mb-4">
                                {cat.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{cat.title}</h3>
                            <p className="text-optimhall-gray text-sm mb-4">{cat.description}</p>
                            <div className="space-y-2">
                                {cat.items.map((item, i) => (
                                    <div key={i} className="flex items-center text-sm text-white/70">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 flex-shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
