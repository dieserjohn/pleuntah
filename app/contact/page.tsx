'use client';

import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto">
                <SectionTitle title="Kontakt" subtitle="Schreib mir" centered />

                <div className="bg-pleuntah-card p-8 rounded-2xl border border-white/5 mt-8">
                    {status === 'success' ? (
                        <div className="text-center py-12">
                            <div className="text-5xl mb-4">✅</div>
                            <h3 className="text-2xl font-bold text-white mb-2">Nachricht gesendet!</h3>
                            <p className="text-gray-400">Danke für deine Nachricht. Dies ist eine Demo.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-6 text-pleuntah-purple hover:underline"
                            >
                                Neue Nachricht schreiben
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pleuntah-purple focus:ring-1 focus:ring-pleuntah-purple transition-all"
                                        placeholder="Dein Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-400">E-Mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pleuntah-purple focus:ring-1 focus:ring-pleuntah-purple transition-all"
                                        placeholder="deine@email.de"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-400">Betreff</label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pleuntah-purple focus:ring-1 focus:ring-pleuntah-purple transition-all"
                                    placeholder="Worum geht es?"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-400">Nachricht</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pleuntah-purple focus:ring-1 focus:ring-pleuntah-purple transition-all resize-none"
                                    placeholder="Deine Nachricht..."
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full bg-pleuntah-purple text-white font-bold py-4 rounded-lg hover:bg-pleuntah-purple/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? 'Wird gesendet...' : 'Nachricht absenden'}
                                </button>
                            </div>

                            <p className="text-xs text-center text-gray-500 mt-4">
                                Hinweis: Dies ist ein Demo-Formular. Anfragen werden nicht wirklich versendet.
                            </p>
                        </form>
                    )}
                </div>

                <div className="mt-8 p-6 bg-pleuntah-purple/10 border border-pleuntah-purple/20 rounded-xl text-center">
                    <h4 className="text-white font-bold mb-2">Booking & Geschäftliches</h4>
                    <p className="text-gray-400 text-sm">
                        Für Booking-Anfragen nutzen Sie bitte ebenfalls das Formular oder schreiben Sie direkt an die Management-Adresse (falls vorhanden).
                    </p>
                </div>
            </div>
        </div>
    );
}
