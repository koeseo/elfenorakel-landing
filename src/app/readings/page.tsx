"use client";

import { motion } from "framer-motion";
import { Sparkles, Check, Star, Crown, Clock, Video, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { CosmicBackground } from "@/components/backgrounds";

const readingPackages = [
  {
    id: "kurz",
    name: "Kurz-Reading",
    price: 29,
    description: "Schnelle Klarheit für eine konkrete Frage",
    popular: false,
    features: [
      { text: "3 Karten Legung", icon: Sparkles },
      { text: "10-15 Min Video", icon: Video },
      { text: "Persönliche Interpretation", icon: MessageCircle },
      { text: "Lieferung in 24-48h", icon: Clock },
    ],
    color: "var(--gold-dim)",
    buttonText: "Kurz-Reading buchen",
  },
  {
    id: "voll",
    name: "Vollständiges Reading",
    price: 55,
    description: "Tiefgreifende Einblicke in deine Situation",
    popular: true,
    features: [
      { text: "7+ Karten Legung", icon: Sparkles },
      { text: "25-30 Min Video", icon: Video },
      { text: "Detaillierte Analyse", icon: MessageCircle },
      { text: "Folgefragen möglich", icon: MessageCircle },
      { text: "Lieferung in 48-72h", icon: Clock },
    ],
    color: "var(--gold)",
    buttonText: "Vollständiges Reading buchen",
  },
  {
    id: "premium",
    name: "Premium Intensiv",
    price: 99,
    description: "Umfassende Jahreslegung & Lebensberatung",
    popular: false,
    features: [
      { text: "Große Jahreslegung", icon: Crown },
      { text: "45+ Min Video", icon: Video },
      { text: "Alle Lebensbereiche", icon: Star },
      { text: "Unbegrenzte Folgefragen", icon: MessageCircle },
      { text: "Persönlicher Support", icon: MessageCircle },
      { text: "Lieferung in 3-5 Tagen", icon: Clock },
    ],
    color: "var(--teal)",
    buttonText: "Premium buchen",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    text: "Das Reading war unglaublich treffend. Elfi hat Dinge angesprochen, die ich niemandem erzählt hatte.",
    rating: 5,
  },
  {
    name: "Michael K.",
    text: "Endlich jemand, der ehrlich ist und nicht nur das sagt, was man hören will. Sehr empfehlenswert!",
    rating: 5,
  },
  {
    name: "Lisa T.",
    text: "Die Video-Interpretation war so persönlich und berührend. Ich habe geweint vor Erleichterung.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "Wie läuft ein Reading ab?",
    answer: "Nach deiner Buchung stelle ich dir ein paar Fragen zu deinem Anliegen. Dann lege ich die Karten für dich und erstelle ein persönliches Video mit meiner Interpretation. Du erhältst das Video per E-Mail.",
  },
  {
    question: "Wie schnell bekomme ich mein Reading?",
    answer: "Je nach Paket erhältst du dein Reading innerhalb von 24 Stunden bis 5 Tagen. Bei dringenden Fragen biete ich gegen Aufpreis auch Express-Readings an.",
  },
  {
    question: "Kann ich Folgefragen stellen?",
    answer: "Ja! Beim Kurz-Reading ist eine kurze Rückfrage möglich, beim Vollständigen und Premium-Reading kannst du ausführliche Folgefragen stellen.",
  },
  {
    question: "Was wenn ich unzufrieden bin?",
    answer: "Deine Zufriedenheit ist mir wichtig. Wenn du das Gefühl hast, dass ich dein Anliegen nicht erfasst habe, ziehe ich gerne nochmal nach.",
  },
];

export default function ReadingsPage() {
  const handleBooking = (packageId: string) => {
    // For now, redirect to the app or a booking form
    window.open(`https://app.elfenorakel.de/readings/${packageId}`, "_blank");
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
                Persönliche Readings
              </span>
              <Sparkles className="w-5 h-5 text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
              Dein persönliches Reading
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Erhalte tiefgreifende Einblicke und ehrliche Botschaften zu deinen
              wichtigsten Fragen – persönlich von Elfi für dich interpretiert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {readingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative glass-card p-8 ${
                  pkg.popular ? "border-2 border-[var(--gold)] scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--gold)] text-[var(--bg-primary)] text-sm font-medium rounded-full">
                    Beliebt
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold" style={{ color: pkg.color }}>
                      €{pkg.price}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[var(--text-secondary)]">
                      <feature.icon className="w-5 h-5 shrink-0" style={{ color: pkg.color }} />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={pkg.popular ? "primary" : "outline"}
                  onClick={() => handleBooking(pkg.id)}
                >
                  {pkg.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
              So funktioniert es
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Paket wählen", desc: "Wähle das Reading, das zu deiner Frage passt" },
              { step: 2, title: "Frage stellen", desc: "Teile mir dein Anliegen und deine Frage mit" },
              { step: 3, title: "Karten legen", desc: "Ich lege die Karten speziell für dich" },
              { step: 4, title: "Video erhalten", desc: "Du bekommst dein persönliches Interpretations-Video" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--gold)]/20 flex items-center justify-center text-[var(--gold)] font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
              Was andere sagen
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <p className="text-[var(--text-secondary)] mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-[var(--text-primary)] font-medium">
                  — {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
              Häufige Fragen
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-12 h-12 text-[var(--gold)] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
              Bereit für Klarheit?
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
              Die Karten warten darauf, ihre Weisheit mit dir zu teilen.
              Welche Fragen bewegen dein Herz?
            </p>
            <Button size="lg" onClick={() => handleBooking("voll")}>
              <Sparkles className="w-5 h-5" />
              Jetzt Reading buchen
            </Button>
          </motion.div>
        </div>
      </section>

      </div>{/* End Content Wrapper */}
    </div>
  );
}
