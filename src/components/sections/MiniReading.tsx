"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, RotateCcw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

// Card data with meanings
const tarotCards = [
  { id: "narr", name: "Der Narr", image: "/cards/tarot/major-00-narr.webp", meaning: "Neubeginn, Unschuld, Spontanität" },
  { id: "magier", name: "Der Magier", image: "/cards/tarot/major-01-magier.webp", meaning: "Willenskraft, Manifestation, Talent" },
  { id: "hohepriesterin", name: "Die Hohepriesterin", image: "/cards/tarot/major-02-hohepriesterin.webp", meaning: "Intuition, Geheimnisse, innere Weisheit" },
  { id: "herrscherin", name: "Die Herrscherin", image: "/cards/tarot/major-03-herrscherin.webp", meaning: "Fülle, Natur, Kreativität" },
  { id: "herrscher", name: "Der Herrscher", image: "/cards/tarot/major-04-herrscher.webp", meaning: "Struktur, Autorität, Stabilität" },
  { id: "hierophant", name: "Der Hierophant", image: "/cards/tarot/major-05-hierophant.webp", meaning: "Tradition, Spiritualität, Weisheit" },
  { id: "liebenden", name: "Die Liebenden", image: "/cards/tarot/major-06-liebenden.webp", meaning: "Liebe, Harmonie, Entscheidungen" },
  { id: "wagen", name: "Der Wagen", image: "/cards/tarot/major-07-wagen.webp", meaning: "Willenskraft, Triumph, Kontrolle" },
  { id: "kraft", name: "Die Kraft", image: "/cards/tarot/major-08-kraft.webp", meaning: "Mut, Stärke, Sanftheit" },
  { id: "eremit", name: "Der Eremit", image: "/cards/tarot/major-09-eremit.webp", meaning: "Innenschau, Suche, Weisheit" },
  { id: "schicksal", name: "Rad des Schicksals", image: "/cards/tarot/major-10-schicksal.webp", meaning: "Wandel, Zyklen, Schicksal" },
  { id: "gerechtigkeit", name: "Gerechtigkeit", image: "/cards/tarot/major-11-gerechtigkeit.webp", meaning: "Wahrheit, Fairness, Karma" },
  { id: "gehaengte", name: "Der Gehängte", image: "/cards/tarot/major-12-gehaengte.webp", meaning: "Loslassen, neue Perspektive, Pause" },
  { id: "tod", name: "Der Tod", image: "/cards/tarot/major-13-tod.webp", meaning: "Transformation, Ende, Neubeginn" },
  { id: "maessigung", name: "Mäßigung", image: "/cards/tarot/major-14-maessigung.webp", meaning: "Balance, Geduld, Harmonie" },
  { id: "teufel", name: "Der Teufel", image: "/cards/tarot/major-15-teufel.webp", meaning: "Bindungen, Schatten, Befreiung" },
  { id: "turm", name: "Der Turm", image: "/cards/tarot/major-16-turm.webp", meaning: "Umbruch, Offenbarung, Erneuerung" },
  { id: "stern", name: "Der Stern", image: "/cards/tarot/major-17-stern.webp", meaning: "Hoffnung, Inspiration, Heilung" },
  { id: "mond", name: "Der Mond", image: "/cards/tarot/major-18-mond.webp", meaning: "Illusion, Intuition, Unbewusstes" },
  { id: "sonne", name: "Die Sonne", image: "/cards/tarot/major-19-sonne.webp", meaning: "Freude, Erfolg, Vitalität" },
  { id: "gericht", name: "Das Gericht", image: "/cards/tarot/major-20-gericht.webp", meaning: "Erweckung, Berufung, Erneuerung" },
  { id: "welt", name: "Die Welt", image: "/cards/tarot/major-21-welt.webp", meaning: "Vollendung, Integration, Erfüllung" },
];

const positions = ["Vergangenheit", "Gegenwart", "Zukunft"];

interface DrawnCard {
  card: typeof tarotCards[0];
  position: number;
  isRevealed: boolean;
}

export const MiniReading = () => {
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Shuffle and pick available cards for selection
  const availableCards = useMemo(() => {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 7); // Show 7 cards to choose from
  }, [drawnCards.length === 0]); // Re-shuffle when reset

  const handleDrawCard = (card: typeof tarotCards[0]) => {
    if (drawnCards.length >= 3 || isDrawing) return;

    setIsDrawing(true);
    const newCard: DrawnCard = {
      card,
      position: drawnCards.length,
      isRevealed: false,
    };

    setDrawnCards(prev => [...prev, newCard]);

    // Reveal card after animation
    setTimeout(() => {
      setDrawnCards(prev =>
        prev.map((c, i) =>
          i === prev.length - 1 ? { ...c, isRevealed: true } : c
        )
      );
      setIsDrawing(false);

      // Show result after 3rd card
      if (drawnCards.length === 2) {
        setTimeout(() => setShowResult(true), 800);
      }
    }, 600);
  };

  const handleReset = () => {
    setShowResult(false);
    setDrawnCards([]);
  };

  return (
    <section id="mini-reading" className="py-24 relative overflow-hidden">
      {/* Subtle background circles */}
      <div className="mystical-circle mystical-circle-outer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-30" />
      <div className="mystical-circle mystical-circle-middle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] opacity-20" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[var(--teal)]" />
            <span className="text-[var(--teal)] text-sm uppercase tracking-widest">
              Kostenlos ausprobieren
            </span>
            <Sparkles className="w-5 h-5 text-[var(--teal)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-teal mb-4">
            Dein Mini-Reading
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Konzentriere dich auf eine Frage und wähle drei Karten für Einblicke in
            Vergangenheit, Gegenwart und Zukunft.
          </p>
        </motion.div>

        {/* Drawing Phase */}
        {!showResult && (
          <>
            {/* Selected Cards Display */}
            <motion.div
              className="flex justify-center gap-4 md:gap-8 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[0, 1, 2].map((position) => {
                const drawnCard = drawnCards.find(c => c.position === position);
                return (
                  <div key={position} className="flex flex-col items-center gap-2">
                    <span className="text-xs md:text-sm text-[var(--text-muted)] uppercase tracking-wider">
                      {positions[position]}
                    </span>
                    <motion.div
                      className="relative w-20 h-32 md:w-28 md:h-44 rounded-lg overflow-hidden"
                      initial={false}
                      animate={{
                        boxShadow: drawnCard?.isRevealed
                          ? "0 0 30px rgba(201, 163, 92, 0.4)"
                          : "0 0 10px rgba(0, 0, 0, 0.2)"
                      }}
                    >
                      <AnimatePresence mode="wait">
                        {drawnCard ? (
                          <motion.div
                            key={drawnCard.card.id}
                            initial={{ rotateY: 180, opacity: 0 }}
                            animate={{
                              rotateY: drawnCard.isRevealed ? 0 : 180,
                              opacity: 1
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0"
                            style={{ transformStyle: "preserve-3d" }}
                          >
                            <Image
                              src={drawnCard.card.image}
                              alt={drawnCard.card.name}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="placeholder"
                            className="absolute inset-0 bg-[var(--bg-card)] border-2 border-dashed border-[var(--glass-border)] rounded-lg flex items-center justify-center"
                          >
                            <span className="text-[var(--text-muted)] text-2xl md:text-4xl">?</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    {drawnCard?.isRevealed && (
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs md:text-sm text-[var(--text-primary)] font-medium text-center max-w-24 md:max-w-28"
                      >
                        {drawnCard.card.name}
                      </motion.span>
                    )}
                  </div>
                );
              })}
            </motion.div>

            {/* Instructions */}
            {drawnCards.length < 3 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-[var(--text-secondary)] mb-8"
              >
                {drawnCards.length === 0
                  ? "Wähle deine erste Karte..."
                  : `Noch ${3 - drawnCards.length} Karte${3 - drawnCards.length > 1 ? 'n' : ''} wählen`}
              </motion.p>
            )}

            {/* Card Selection */}
            {drawnCards.length < 3 && (
              <motion.div
                className="flex justify-center gap-2 md:gap-4 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {availableCards
                  .filter(card => !drawnCards.find(d => d.card.id === card.id))
                  .map((card, index) => (
                    <motion.button
                      key={card.id}
                      onClick={() => handleDrawCard(card)}
                      disabled={isDrawing}
                      className="relative w-16 h-24 md:w-20 md:h-32 rounded-lg overflow-hidden cursor-pointer group disabled:cursor-not-allowed"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Card Back */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold-dim)] via-[var(--bg-card)] to-[var(--gold-dim)] rounded-lg border border-[var(--gold)]/30 card-shimmer-effect">
                        <div className="absolute inset-2 border border-[var(--gold)]/20 rounded flex items-center justify-center">
                          <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[var(--gold)]/50 group-hover:text-[var(--gold)] transition-colors" />
                        </div>
                      </div>

                      {/* Hover Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-[var(--teal)]/20 to-[var(--gold)]/10 rounded-lg" />
                    </motion.button>
                  ))}
              </motion.div>
            )}
          </>
        )}

        {/* Result Phase */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Revealed Cards with Meanings */}
              <div className="flex justify-center gap-4 md:gap-8 mb-12">
                {drawnCards.map((drawn, index) => (
                  <motion.div
                    key={drawn.card.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <span className="text-xs md:text-sm text-[var(--teal)] uppercase tracking-wider font-medium">
                      {positions[index]}
                    </span>
                    <div className="relative w-24 h-36 md:w-32 md:h-48 rounded-lg overflow-hidden shadow-lg oracle-card-glow">
                      <Image
                        src={drawn.card.image}
                        alt={drawn.card.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-sm md:text-base font-semibold text-[var(--text-primary)]">
                      {drawn.card.name}
                    </h3>
                    <p className="text-xs md:text-sm text-[var(--text-secondary)] max-w-32 md:max-w-40">
                      {drawn.card.meaning}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="glass-card p-6 md:p-8 max-w-2xl mx-auto relative"
              >
                <div className="corner-accent corner-accent-tl" />
                <div className="corner-accent corner-accent-tr" style={{ animationDelay: '0.75s' }} />
                <div className="corner-accent corner-accent-bl" style={{ animationDelay: '1.5s' }} />
                <div className="corner-accent corner-accent-br" style={{ animationDelay: '2.25s' }} />
                <h3 className="text-xl md:text-2xl font-bold text-gradient-teal mb-3">
                  Möchtest du mehr erfahren?
                </h3>
                <p className="text-[var(--text-secondary)] mb-6">
                  Entdecke dein persönliches Seelen-Profil mit tiefgehenden Einsichten
                  zu deinen Karten, Archetypen und kosmischen Energien.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={() => window.location.href = "/seelen-profil"}
                  >
                    Dein Seelen-Profil entdecken
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={handleReset}
                  >
                    <RotateCcw className="w-4 h-4" />
                    Nochmal ziehen
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
