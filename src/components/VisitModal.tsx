import React, { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface VisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDevis: () => void;
}

export function VisitModal({ isOpen, onClose, onOpenDevis }: VisitModalProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  // Focus trap et gestion ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);

    // Analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'cta_visite_click', {
        event_category: 'booking',
        event_label: 'modal_opened'
      });
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    onClose();
    setIframeLoaded(false);
    setIframeError(false);
  };

  const handleOpenDevis = () => {
    handleClose();
    setTimeout(() => onOpenDevis(), 300);
  };

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    if (typeof gtag !== 'undefined') {
      gtag('event', 'calendly_loaded', {
        event_category: 'booking'
      });
    }
  };

  const handleIframeError = () => {
    setIframeError(true);
  };

  // URL Calendly avec paramètres
  const calendlyUrl = `https://calendly.com/optimhall/visite?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=eab308`;

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-labelledby="visit-modal-title"
        aria-modal="true"
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 id="visit-modal-title" className="text-2xl font-bold text-gray-900">
            Réserver une visite
          </h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Fermer"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 p-6">
          {iframeError ? (
            <div className="text-center py-12">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Impossible de charger le calendrier
                </h3>
                <p className="text-gray-600 mb-6">
                  Vous pouvez réserver votre visite directement sur notre page Calendly.
                </p>
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-optimhall-blue text-white px-6 py-3 rounded-2xl font-semibold hover:bg-optimhall-dark transition-colors"
                >
                  <ExternalLink size={20} />
                  Ouvrir dans un nouvel onglet
                </a>
              </div>
            </div>
          ) : (
            <div className="relative h-full">
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-optimhall-blue mx-auto mb-4"></div>
                    <p className="text-gray-600">Chargement du calendrier...</p>
                  </div>
                </div>
              )}
              
              <iframe
                src={calendlyUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Réserver une visite - Calendly"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                className="rounded-lg"
                allow="camera; microphone; autoplay; encrypted-media; fullscreen; display-capture"
              />
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-4">
            Vous préférez d'abord recevoir une proposition ?
          </p>
          <button
            onClick={handleOpenDevis}
            className="bg-gray-900 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-gray-800 transition-colors"
          >
            Demander un devis
          </button>
        </div>
      </div>
    </div>
  );
}