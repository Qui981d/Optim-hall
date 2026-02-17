import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function QuoteForm() {
    const [formData, setFormData] = useState({
        // Event details
        eventType: '',
        dateStart: '',
        dateEnd: '',
        participants: '',
        // Technical needs
        sound: false,
        lighting: false,
        video: false,
        dj: false,
        // Furniture
        tables: false,
        chairs: false,
        stage: false,
        standUp: false,
        // Options
        security: false,
        cleaning: false,
        waste: false,
        wc: false,
        catering: false,
        bar: false,
        // Contact
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
        honeypot: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.eventType) newErrors.eventType = 'Requis';
        if (!formData.dateStart) newErrors.dateStart = 'Requis';
        if (!formData.participants) newErrors.participants = 'Requis';
        if (!formData.firstName) newErrors.firstName = 'Requis';
        if (!formData.lastName) newErrors.lastName = 'Requis';
        if (!formData.email) newErrors.email = 'Requis';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide';
        if (!formData.consent) newErrors.consent = 'Requis';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.honeypot) return;
        if (!validate()) return;
        setIsSubmitting(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsSubmitted(true);
        } catch (error) {
            console.error('Erreur:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <section id="demande" className="py-16 lg:py-24 bg-optimhall-blue font-gilroy">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <CheckCircle size={64} className="text-white mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Demande envoyée !
                    </h2>
                    <p className="text-white/80 text-lg">
                        Nous revenons vers vous sous 24h avec une proposition personnalisée.
                    </p>
                </div>
            </section>
        );
    }

    const CheckboxGroup = ({ title, items }: { title: string, items: { name: string, label: string }[] }) => (
        <div>
            <h4 className="text-sm font-semibold text-white/90 mb-3">{title}</h4>
            <div className="grid grid-cols-2 gap-2">
                {items.map(item => (
                    <label key={item.name} className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            name={item.name}
                            checked={formData[item.name as keyof typeof formData] as boolean}
                            onChange={handleChange}
                            className="rounded border-white/30 bg-white/10 text-optimhall-blue focus:ring-white"
                            disabled={isSubmitting}
                        />
                        <span className="text-sm text-white/80">{item.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );

    return (
        <section id="demande" className="py-16 lg:py-24 bg-optimhall-blue font-gilroy">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                        Demander une offre
                    </h2>
                    <p className="text-white/70 text-lg">
                        Sélectionnez vos besoins, on vous répond sous 24h
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot */}
                    <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                    {/* Event Details */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 space-y-4">
                        <h3 className="text-lg font-bold text-white">Votre événement</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-white/80 mb-1">Type d'événement *</label>
                                <select
                                    name="eventType"
                                    value={formData.eventType}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-transparent ${errors.eventType ? 'border-red-400' : 'border-white/20'}`}
                                    disabled={isSubmitting}
                                >
                                    <option value="" className="text-gray-900">Sélectionnez</option>
                                    <option value="clubbing" className="text-gray-900">Clubbing</option>
                                    <option value="corporate" className="text-gray-900">Corporate</option>
                                    <option value="popup" className="text-gray-900">Pop-up Store</option>
                                    <option value="expo" className="text-gray-900">Exposition</option>
                                    <option value="mariage" className="text-gray-900">Mariage / Réception</option>
                                    <option value="concert" className="text-gray-900">Concert / Spectacle</option>
                                    <option value="sport" className="text-gray-900">Yoga / Danse / Sport</option>
                                    <option value="autre" className="text-gray-900">Autre</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm text-white/80 mb-1">Nombre de personnes *</label>
                                <input
                                    type="number"
                                    name="participants"
                                    value={formData.participants}
                                    onChange={handleChange}
                                    placeholder="Ex: 200"
                                    className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-transparent ${errors.participants ? 'border-red-400' : 'border-white/20'}`}
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-white/80 mb-1">Date souhaitée *</label>
                                <input
                                    type="date"
                                    name="dateStart"
                                    value={formData.dateStart}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-white focus:ring-2 focus:ring-white focus:border-transparent ${errors.dateStart ? 'border-red-400' : 'border-white/20'}`}
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-white/80 mb-1">Date de fin (optionnel)</label>
                                <input
                                    type="date"
                                    name="dateEnd"
                                    value={formData.dateEnd}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-white focus:border-transparent"
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Options Checkboxes */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 space-y-5">
                        <h3 className="text-lg font-bold text-white">Besoins & options</h3>

                        <CheckboxGroup
                            title="Technique"
                            items={[
                                { name: 'sound', label: 'Sonorisation' },
                                { name: 'lighting', label: 'Éclairage' },
                                { name: 'video', label: 'Vidéo / Projection' },
                                { name: 'dj', label: 'Espace DJ' },
                            ]}
                        />

                        <CheckboxGroup
                            title="Mobilier"
                            items={[
                                { name: 'tables', label: 'Tables' },
                                { name: 'chairs', label: 'Chaises' },
                                { name: 'stage', label: 'Scène / Estrade' },
                                { name: 'standUp', label: 'Mange-debout' },
                            ]}
                        />

                        <CheckboxGroup
                            title="Services"
                            items={[
                                { name: 'security', label: 'Sécurité' },
                                { name: 'cleaning', label: 'Nettoyage' },
                                { name: 'waste', label: 'Gestion déchets' },
                                { name: 'wc', label: 'WC supplémentaires' },
                                { name: 'catering', label: 'Espace traiteur' },
                                { name: 'bar', label: 'Bar' },
                            ]}
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 space-y-4">
                        <h3 className="text-lg font-bold text-white">Vos coordonnées</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-white/80 mb-1">Prénom *</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-transparent ${errors.firstName ? 'border-red-400' : 'border-white/20'}`}
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-white/80 mb-1">Nom *</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-transparent ${errors.lastName ? 'border-red-400' : 'border-white/20'}`}
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-white/80 mb-1">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="votre@email.com"
                                    className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-transparent ${errors.email ? 'border-red-400' : 'border-white/20'}`}
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-white/80 mb-1">Téléphone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+41 XX XXX XX XX"
                                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-transparent"
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm text-white/80 mb-1">Message (optionnel)</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={3}
                                placeholder="Détails supplémentaires..."
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-transparent resize-none"
                                disabled={isSubmitting}
                            />
                        </div>

                        <label className="flex items-start gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                                className={`rounded border-white/30 bg-white/10 text-optimhall-blue focus:ring-white mt-0.5 ${errors.consent ? 'border-red-400' : ''}`}
                                disabled={isSubmitting}
                            />
                            <span className="text-xs text-white/70">
                                J'accepte que mes données soient utilisées pour traiter ma demande. *
                            </span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white text-optimhall-blue py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-optimhall-blue" />
                                Envoi en cours...
                            </>
                        ) : (
                            <>
                                <Send size={20} />
                                Envoyer ma demande
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}
