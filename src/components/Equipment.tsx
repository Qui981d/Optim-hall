import React, { useState } from 'react';
import { ChevronDown, Zap, Lightbulb, Speaker, Theater, Projector, Mic2, Wifi, Shirt, Table, Armchair, Wine } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, icon, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-optimhall-blue/10 rounded-xl flex items-center justify-center text-optimhall-blue">
            {icon}
          </div>
          <span className="font-semibold text-optimhall-blue text-left">{title}</span>
        </div>
        <ChevronDown
          size={20}
          className={`text-optimhall-gray transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-5 pb-5 pt-2">
          {children}
        </div>
      </div>
    </div>
  );
}

const includedEquipment = [
  { icon: <Projector size={22} />, label: "Vidéoprojecteur" },
  { icon: <Theater size={22} />, label: "Scène / Estrade" },
  { icon: <Mic2 size={22} />, label: "Pupitre" },
  { icon: <Wifi size={22} />, label: "Wifi" },
  { icon: <Shirt size={22} />, label: "Vestiaire" },
  { icon: <Table size={22} />, label: "Tables" },
  { icon: <Armchair size={22} />, label: "Chaises" },
  { icon: <Wine size={22} />, label: "Mange-debouts" },
];

export function Equipment() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="equipements" className="py-16 lg:py-24 bg-white font-gilroy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-optimhall-blue mb-3">
            Équipement
          </h2>
          <p className="text-optimhall-gray text-lg">
            Tout est sur place, prêt à l'emploi
          </p>
        </div>

        <div className="space-y-3">
          {/* Puissance électrique */}
          <AccordionItem
            title="Puissance Électrique"
            icon={<Zap size={20} />}
            isOpen={openIndex === 0}
            onToggle={() => toggle(0)}
          >
            <div className="grid grid-cols-1 gap-2">
              {[
                "2 x 32 A triphasé avec distribution",
                "2 x 16 A triphasé avec distribution",
                "Emplacement pour une génératrice si besoin"
              ].map((item, i) => (
                <div key={i} className="flex items-center text-sm text-optimhall-gray">
                  <div className="w-1.5 h-1.5 bg-optimhall-blue rounded-full mr-2 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </AccordionItem>

          {/* Lumière */}
          <AccordionItem
            title="Lumière de la salle"
            icon={<Lightbulb size={20} />}
            isOpen={openIndex === 1}
            onToggle={() => toggle(1)}
          >
            <div className="grid grid-cols-1 gap-2">
              {[
                "Entièrement équipée en éclairage LED piloté en DMX",
                "Location clef en main",
                "WallWasher sur mur en brique"
              ].map((item, i) => (
                <div key={i} className="flex items-center text-sm text-optimhall-gray">
                  <div className="w-1.5 h-1.5 bg-optimhall-blue rounded-full mr-2 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </AccordionItem>

          {/* Sonorisation */}
          <AccordionItem
            title="Sonorisation de la salle"
            icon={<Speaker size={20} />}
            isOpen={openIndex === 2}
            onToggle={() => toggle(2)}
          >
            <div className="grid grid-cols-1 gap-2">
              {[
                "Diffusion du son par 10 enceintes de 300 W",
                "Disposées dans toute la périphérie de l'espace",
                "2 caissons de basses",
                "Amplificateurs"
              ].map((item, i) => (
                <div key={i} className="flex items-center text-sm text-optimhall-gray">
                  <div className="w-1.5 h-1.5 bg-optimhall-blue rounded-full mr-2 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </AccordionItem>

          {/* Pendrillons */}
          <AccordionItem
            title="Pendrillons"
            icon={<Theater size={20} />}
            isOpen={openIndex === 3}
            onToggle={() => toggle(3)}
          >
            <div className="grid grid-cols-1 gap-2">
              {[
                "Possibilité de créer des séparations sur-mesure dans la salle"
              ].map((item, i) => (
                <div key={i} className="flex items-center text-sm text-optimhall-gray">
                  <div className="w-1.5 h-1.5 bg-optimhall-blue rounded-full mr-2 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </AccordionItem>
        </div>

        {/* Équipements inclus - grid */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-optimhall-blue mb-6 text-center">Équipements inclus</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {includedEquipment.map((eq, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl hover:bg-optimhall-blue/5 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-optimhall-blue/10 rounded-xl flex items-center justify-center text-optimhall-blue">
                  {eq.icon}
                </div>
                <span className="text-sm font-medium text-optimhall-gray text-center">{eq.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}