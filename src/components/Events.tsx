import React from 'react';

export function Events() {
    const events = [
        {
            type: "Clubbing",
            image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            type: "Pop-up Store",
            image: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            type: "Salon",
            image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            type: "Cours de danse",
            image: "https://images.pexels.com/photos/2188012/pexels-photo-2188012.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            type: "Exposition",
            image: "https://images.pexels.com/photos/3004909/pexels-photo-3004909.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            type: "Corporate",
            image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ];

    return (
        <section id="evenements" className="py-16 lg:py-24 bg-optimhall-dark font-gilroy">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                        Événements
                    </h2>
                    <p className="text-optimhall-gray text-lg">
                        Un espace adapté à tous les formats
                    </p>
                </div>

                {/* Instagram-style grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                        >
                            <img
                                src={event.image}
                                alt={event.type}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                                <h3 className="text-white font-bold text-sm sm:text-base">{event.type}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
