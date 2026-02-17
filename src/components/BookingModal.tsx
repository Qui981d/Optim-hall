import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenVisit: () => void;
  preselectedEventType?: string;
}

export function BookingModal({ isOpen, onClose, onOpenVisit, preselectedEventType }: BookingModalProps) {
  const [formData, setFormData] = useState({
    eventType: '',
    date: '',
    participants: '',
    configuration: '',
    technicalNeeds: [] as string[],
    additionalInfo: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    consent: false,
    honeypot: '' // Anti-spam
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Présélectionner le type d'événement si fourni
  useEffect(() => {
    if (preselectedEventType && isOpen) {
      setFormData(prev => ({ ...prev, eventType: preselectedEventType }));
    }
  }, [preselectedEventType, isOpen]);

  // Focus trap et gestion ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTab);
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTab);
    };
  }, [isOpen, onClose]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.eventType) newErrors.eventType = 'Type d\'événement requis';
    if (!formData.date) newErrors.date = 'Date requise';
    if (!formData.participants) newErrors.participants = 'Nombre de participants requis';
    if (!formData.configuration) newErrors.configuration = 'Configuration requise';
    if (!formData.firstName) newErrors.firstName = 'Prénom requis';
    if (!formData.lastName) newErrors.lastName = 'Nom requis';
    if (!formData.email) {
      newErrors.email = 'Email requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.consent) newErrors.consent = 'Consentement RGPD requis';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérification honeypot
    if (formData.honeypot) return;
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulation envoi - remplacer par votre API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Analytics tracking
      if (typeof gtag !== 'undefined') {
        gtag('event', 'devis_submit_success', {
          event_category: 'booking',
          event_label: formData.eventType
        });
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Erreur envoi formulaire:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'consent') {
        setFormData(prev => ({ ...prev, consent: checked }));
      } else {
        // Gestion checkboxes besoins techniques
        setFormData(prev => ({
          ...prev,
          technicalNeeds: checked 
            ? [...prev.technicalNeeds, value]
            : prev.technicalNeeds.filter(need => need !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Effacer l'erreur si le champ est corrigé
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      // Reset après fermeture
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          eventType: '',
          date: '',
          participants: '',
          configuration: '',
          technicalNeeds: [],
          additionalInfo: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          consent: false,
          honeypot: ''
        });
        setErrors({});
      }, 300);
    }
  };

  const handleOpenVisit = () => {
    handleClose();
    setTimeout(() => onOpenVisit(), 300);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <h2 id="modal-title" className="text-2xl font-bold text-gray-900">
            Obtenir une proposition pour votre événement
          </h2>
          <button
            onClick={handleClose}
            className="bg-optimhall-blue text-white px-6 py-3 rounded-2xl font-semibold hover:bg-optimhall-dark transition-colors"
            aria-label="Fermer"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Merci ! On revient vers vous rapidement avec une proposition.
              </h3>
              <p className="text-gray-600 mb-8">
                En attendant, vous pouvez réserver une visite du lieu.
              </p>
              <div className="space-y-4">
                <button
                  onClick={handleOpenVisit}
                  className="bg-optimhall-blue text-white px-8 py-3 rounded-2xl font-semibold hover:bg-optimhall-dark transition-colors"
                >
                  Réserver une visite
                </button>
                <div>
                  <button
                    onClick={handleClose}
                    className="text-optimhall-gray hover:text-optimhall-dark underline"
                  >
                    Découvrir nos espaces
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot anti-spam */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleInputChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type d'événement *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-optimhall-blue focus:border-transparent ${
                      errors.eventType ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={isSubmitting}
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Privé">Privé</option>
                    <option value="Culturel-Festif">Culturel-Festif</option>
                    <option value="Autre">Autre</option>
                  </select>
                  {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date souhaitée *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-optimhall-blue focus:border-transparent ${
                      errors.date ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre de participants *
                  </label>
                  <input
                    type="number"
                    name="participants"
                    value={formData.participants}
                    onChange={handleInputChange}
                    placeholder="Ex: 150"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-optimhall-blue focus:border-transparent ${
                      errors.participants ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.participants && <p className="text-red-500 text-sm mt-1">{errors.participants}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Configuration *
                  </label>
                  <select
                    name="configuration"
                    value={formData.configuration}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-optimhall-blue focus:border-transparent ${
                      errors.configuration ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={isSubmitting}
                  >
                    <option value="">Sélectionnez une configuration</option>
                    <option value="Cocktail">Cocktail</option>
                    <option value="Dîner assis">Dîner assis</option>
                    <option value="Conférence">Conférence</option>
                    <option value="Mix">Mix</option>
                  </select>
                  {errors.configuration && <p className="text-red-500 text-sm mt-1">{errors.configuration}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Besoins techniques
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Son', 'Lumière', 'Vidéo', 'DJ', 'Autre'].map(need => (
                    <label key={need} className="flex items-center">
                      <input
                        type="checkbox"
                        name="technicalNeeds"
                        value={need}
                        checked={formData.technicalNeeds.includes(need)}
                        onChange={handleInputChange}
                        className="mr-2 rounded border-gray-300 text-optimhall-blue focus:ring-optimhall-blue"
                        disabled={isSubmitting}
                      />
                      <span className="text-sm text-gray-700">{need}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Informations complémentaires
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Décrivez-nous votre vision, budget estimé, besoins spécifiques..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-optimhall-blue focus:border-transparent"
                  disabled={isSubmitting}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-optimhall-blue focus:border-transparent ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-optimhall-blue focus:border-transparent ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-optimhall-blue focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+41 XX XXX XX XX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-optimhall-blue focus:border-transparent"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className={`mr-3 mt-1 rounded border-gray-300 text-optimhall-blue focus:ring-optimhall-blue ${
                      errors.consent ? 'border-red-500' : ''
                    }`}
                    disabled={isSubmitting}
                  />
                  <span className="text-sm text-gray-700">
                    J'accepte que mes données soient utilisées pour traiter ma demande. *{' '}
                    <a href="#" className="text-optimhall-blue hover:underline">
                      Politique de confidentialité
                    </a>
                  </span>
                </label>
                {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-optimhall-blue text-white py-4 rounded-2xl font-semibold text-lg hover:bg-optimhall-dark transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Demander mon devis gratuit
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}