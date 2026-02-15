"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart, Star, Youtube, Music2, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui";
import { CosmicBackground } from "@/components/backgrounds";

const qualities = [
  {
    icon: Heart,
    title: "Authentisch",
    description: "Echte Verbindung zu dir und den Karten – keine Show, nur Wahrheit.",
  },
  {
    icon: Star,
    title: "Intuitiv",
    description: "Botschaften, die dein Herz berühren und deinen Weg erhellen.",
  },
  {
    icon: Sparkles,
    title: "Magisch",
    description: "Die Weisheit der Elfen und die Kraft der kosmischen Gesetze.",
  },
];

const socialLinks = [
  {
    platform: "TikTok",
    icon: Music2,
    handle: "@elfenorakel",
    url: "https://tiktok.com/@elfenorakel",
    followers: "50K+",
    color: "#000000",
  },
  {
    platform: "YouTube",
    icon: Youtube,
    handle: "Elfenorakel",
    url: "https://youtube.com/@elfenorakel",
    followers: "10K+",
    color: "#FF0000",
  },
];

export default function UeberElfiPage() {
  return (
    <div className="min-h-screen relative">
      {/* Full Page Cosmic Background */}
      <CosmicBackground intensity="medium" position="fixed" />

      {/* Content Wrapper - above fixed background */}
      <div className="relative z-10">

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden glow-gold">
                <Image
                  src="/images/elfi-portrait.webp"
                  alt="Elfi Christina Riethmüller"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/60 via-transparent to-transparent" />
              </div>
              {/* Floating decoration */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--gold)]/10 rounded-full blur-xl"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[var(--gold)]" />
                <span className="text-[var(--gold)] text-sm uppercase tracking-widest">
                  Die Elfe vom Elfenorakel
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient-gold">Elfi Christina</span>
                <br />
                <span className="text-[var(--text-primary)]">Riethmüller</span>
              </h1>

              <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                Das Elfenorakel ist mehr als Karten – es ist ein Tor zu tiefem Wissen
                und echter Transformation. Keine oberflächliche Unterhaltung, sondern
                Wahrheiten, die dir vorenthalten werden.
              </p>

              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                Seit Jahren begleite ich Menschen auf ihrem spirituellen Weg. Die Karten
                zeigen mir, was dein Herz bewegt, welche Blockaden dich hindern und
                welche Potenziale in dir schlummern.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => window.open("https://youtube.com/@elfenorakel", "_blank")}>
                  <Youtube className="w-5 h-5" />
                  YouTube Readings
                </Button>
                <Button variant="outline" onClick={() => window.open("https://tiktok.com/@elfenorakel", "_blank")}>
                  <Music2 className="w-5 h-5" />
                  TikTok
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
              Meine Philosophie
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Das Elfenorakel verbindet uralte Weisheit mit moderner Intuition –
              für Menschen, die bereit sind, die Wahrheit zu sehen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {qualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center group hover:border-[var(--gold)] transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--gold)]/10 flex items-center justify-center group-hover:bg-[var(--gold)]/20 transition-colors">
                  <quality.icon className="w-8 h-8 text-[var(--gold)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {quality.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {quality.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-6xl text-[var(--gold)] mb-6">"</div>
            <p className="text-2xl md:text-3xl text-[var(--text-primary)] italic mb-6 leading-relaxed">
              Die Karten lügen nicht – aber sie brauchen jemanden, der ihre
              Sprache versteht und den Mut hat, die Wahrheit zu sprechen.
            </p>
            <footer className="text-[var(--gold)]">— Elfi</footer>
          </motion.blockquote>
        </div>
      </section>

      {/* What I Offer Section */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
              Was ich dir biete
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Youtube className="w-6 h-6 text-[#FF0000]" />
                <h3 className="text-xl font-bold text-gradient-gold">
                  YouTube Readings
                </h3>
              </div>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <Play className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                  Wöchentliche Readings für alle Sternzeichen
                </li>
                <li className="flex items-start gap-3">
                  <Play className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                  Ausführliche Video-Interpretationen
                </li>
                <li className="flex items-start gap-3">
                  <Play className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                  Ehrliche Botschaften ohne Schönfärberei
                </li>
              </ul>
              <Button
                className="mt-6"
                variant="outline"
                onClick={() => window.open("https://youtube.com/@elfenorakel", "_blank")}
              >
                YouTube Kanal
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Music2 className="w-6 h-6 text-[var(--teal)]" />
                <h3 className="text-xl font-bold text-gradient-gold">
                  TikTok Readings
                </h3>
              </div>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[var(--teal)] shrink-0 mt-0.5" />
                  Tägliche spirituelle Impulse und Botschaften
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[var(--teal)] shrink-0 mt-0.5" />
                  Schnelle Pick-a-Card Readings
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[var(--teal)] shrink-0 mt-0.5" />
                  Live-Sessions und Interaktion
                </li>
              </ul>
              <Button
                className="mt-6"
                onClick={() => window.open("https://tiktok.com/@elfenorakel", "_blank")}
              >
                TikTok Kanal
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
              Folge mir
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Tägliche Botschaften, Live-Readings und spirituelle Impulse auf meinen Social-Media-Kanälen.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 flex items-center gap-4 min-w-[250px] hover:border-[var(--gold)] transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${social.color}20` }}
                >
                  <social.icon className="w-6 h-6" style={{ color: social.color }} />
                </div>
                <div>
                  <p className="font-bold text-[var(--text-primary)]">{social.platform}</p>
                  <p className="text-sm text-[var(--text-muted)]">{social.handle}</p>
                  <p className="text-xs text-[var(--gold)]">{social.followers} Follower</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-12 h-12 text-[var(--gold)] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
              Bereit für deine Transformation?
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
              Die Karten warten darauf, dir ihre Weisheit zu offenbaren. Lass uns gemeinsam
              entdecken, welche Botschaften das Universum für dich bereithält.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => window.open("https://youtube.com/@elfenorakel", "_blank")}>
                <Youtube className="w-5 h-5" />
                Kostenlose Readings auf YouTube
              </Button>
              <Button variant="outline" size="lg" onClick={() => (window.location.href = "/readings")}>
                <Sparkles className="w-5 h-5" />
                Persönliches Reading buchen
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      </div>{/* End Content Wrapper */}
    </div>
  );
}
