import React, { useState } from 'react';
import { ChevronDown, Speaker, Lightbulb, Monitor, Mic, Armchair, UtensilsCrossed } from 'lucide-react';

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
          {/* Son */}
          <AccordionItem
            title="Sonorisation"
            icon={<Speaker size={20} />}
            isOpen={openIndex === 0}
            onToggle={() => toggle(0)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Système line-array professionnel",
                "Console de mixage numérique",
                "Retours de scène",
                "Microphones sans fil (HF)",
                "Lecteur DJ / entrées auxiliaires",
                "Ingénieur son disponible"
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
            title="Éclairage"
            icon={<Lightbulb size={20} />}
            isOpen={openIndex === 1}
            onToggle={() => toggle(1)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Projecteurs LED RGBW",
                "Lyres motorisées",
                "Stroboscopes & lasers",
                "Eclairage architectural",
                "Machine à fumée / brouillard",
                "Console lumière DMX"
              ].map((item, i) => (
                <div key={i} className="flex items-center text-sm text-optimhall-gray">
                  <div className="w-1.5 h-1.5 bg-optimhall-blue rounded-full mr-2 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </AccordionItem>

          {/* Vidéo */}
          <AccordionItem
            title="Vidéo & Projection"
            icon={<Monitor size={20} />}
            isOpen={openIndex === 2}
            onToggle={() => toggle(2)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Vidéoprojecteur HD",
                "Écran de projection grand format",
                "Écrans LED modulaires",
                "Caméra live & streaming",
                "Système de visioconférence"
              ].map((item, i) => (
                <div key={i} className="flex items-center text-sm text-optimhall-gray">
                  <div className="w-1.5 h-1.5 bg-optimhall-blue rounded-full mr-2 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </AccordionItem>

          {/* Mobilier */}
          <AccordionItem
            title="Mobilier & Aménagement"
            icon={<Armchair size={20} />}
            isOpen={openIndex === 3}
            onToggle={() => toggle(3)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Tables rondes & rectangulaires",
                "Chaises empilables",
                "Mange-debout",
                "Scène modulable",
                "Podium / estrade",
                "Catalogue mobilier sur demande"
              ].map((item, i) => (
                <div key={i} className="flex items-center text-sm text-optimhall-gray">
                  <div className="w-1.5 h-1.5 bg-optimhall-blue rounded-full mr-2 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </AccordionItem>
        </div>
      </div>
    </section>
  );
}