import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-optimhall-dark border-t border-white/10 py-10 font-gilroy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo + info */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src="/white.png" alt="Optimhall Geneva" className="h-8" />
            <div className="flex items-center gap-4 text-sm text-optimhall-gray">
              <a href="tel:+41220000000" className="flex items-center gap-1 hover:text-white transition-colors">
                <Phone size={14} />
                +41 22 XXX XX XX
              </a>
              <a href="mailto:events@optimhall.ch" className="flex items-center gap-1 hover:text-white transition-colors">
                <Mail size={14} />
                events@optimhall.ch
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 bg-white/10 hover:bg-optimhall-blue rounded-xl flex items-center justify-center text-white transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-9 h-9 bg-white/10 hover:bg-optimhall-blue rounded-xl flex items-center justify-center text-white transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-9 h-9 bg-white/10 hover:bg-optimhall-blue rounded-xl flex items-center justify-center text-white transition-all duration-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-optimhall-gray">
          <div>© 2026 Optimhall Geneva. Tous droits réservés.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}