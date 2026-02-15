"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Send, Mail, MessageCircle, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui";
import { CosmicBackground } from "@/components/backgrounds";

export default function KontaktPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen relative">
      {/* Full Page Cosmic Background */}
      <CosmicBackground intensity="subtle" position="fixed" />

      {/* Content Wrapper - above fixed background */}
      <div className="relative z-10">

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[var(--gold)]" />
              <span className="text-[var(--gold)] text-sm uppercase tracking-widest">
                In Verbindung treten
              </span>
              <Sparkles className="w-5 h-5 text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
              Kontakt
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Hast du Fragen zu den Readings oder möchtest mehr erfahren?
              Ich freue mich auf deine Nachricht.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {isSubmitted ? (
                <div className="glass-card p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--teal)]/20 flex items-center justify-center">
                    <Check className="w-8 h-8 text-[var(--teal)]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                    Nachricht gesendet!
                  </h2>
                  <p className="text-[var(--text-secondary)] mb-6">
                    Vielen Dank für deine Nachricht. Ich werde mich so schnell wie
                    möglich bei dir melden.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Weitere Nachricht senden
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-8">
                  <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                    Schreib mir
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--glass-border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                        placeholder="Dein Name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                      >
                        E-Mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--glass-border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                        placeholder="deine@email.de"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                      >
                        Betreff
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--glass-border)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                      >
                        <option value="">Bitte wählen...</option>
                        <option value="reading">Frage zu Readings</option>
                        <option value="app">Frage zur App</option>
                        <option value="cooperation">Kooperation</option>
                        <option value="other">Sonstiges</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                      >
                        Nachricht
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--glass-border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
                        placeholder="Deine Nachricht..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Nachricht senden
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                      E-Mail
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      kontakt@elfenorakel.de
                    </p>
                    <p className="text-sm text-[var(--text-muted)] mt-1">
                      Für allgemeine Anfragen
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--teal)]/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-[var(--teal)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                      Social Media
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      @elfenorakel auf TikTok & YouTube
                    </p>
                    <p className="text-sm text-[var(--text-muted)] mt-1">
                      Für schnelle Nachrichten
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                      Antwortzeit
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      In der Regel innerhalb von 24-48 Stunden
                    </p>
                    <p className="text-sm text-[var(--text-muted)] mt-1">
                      An Wochenenden kann es etwas länger dauern
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Teaser */}
              <div className="glass-card p-6 border-[var(--gold)]/30">
                <h3 className="text-lg font-bold text-gradient-gold mb-3">
                  Häufige Fragen?
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  Viele Antworten findest du bereits auf unserer Readings-Seite
                  im FAQ-Bereich.
                </p>
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = "/readings#faq")}
                >
                  Zu den FAQs
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      </div>{/* End Content Wrapper */}
    </div>
  );
}
