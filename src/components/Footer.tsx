import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-optimhall-dark text-optimhall-white py-16 font-gilroy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img
              src="/white.png"
              alt="Optimhall Geneva"
              className="h-12 mb-4"
            />
            <p className="text-optimhall-gray mb-6 max-w-md">
              Un des plus grands espaces événementiels de Genève, 100% privatisable.
              Ancien atelier industriel rénové dans le quartier des Acacias.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-optimhall-blue hover:bg-optimhall-blue/80 text-optimhall-white p-3 rounded-2xl transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-optimhall-blue hover:bg-optimhall-blue/80 text-optimhall-white p-3 rounded-2xl transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-optimhall-blue hover:bg-optimhall-blue/80 text-optimhall-white p-3 rounded-2xl transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-optimhall-gray">
              <li><a href="#espaces" className="hover:text-optimhall-white transition-colors">Nos espaces</a></li>
              <li><a href="#evenements" className="hover:text-optimhall-white transition-colors">Types d'événements</a></li>
              <li><a href="#equipements" className="hover:text-optimhall-white transition-colors">Équipements</a></li>
              <li><a href="#galerie" className="hover:text-optimhall-white transition-colors">Galerie</a></li>
              <li><a href="#contact" className="hover:text-optimhall-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact rapide</h3>
            <div className="space-y-4 text-optimhall-gray">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+41 22 XXX XX XX</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>events@optimhall.ch</span>
              </div>
              <div className="text-sm">
                Chemin de la Gravière 4<br />
                1227 Acacias, Genève
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-optimhall-blue mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-optimhall-gray text-sm mb-4 md:mb-0">
              © 2026 Optimhall Geneva. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm text-optimhall-gray">
              <a href="#" className="hover:text-optimhall-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-optimhall-white transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-optimhall-white transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}