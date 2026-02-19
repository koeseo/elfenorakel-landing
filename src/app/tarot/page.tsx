"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Search, Filter } from "lucide-react";
import { CosmicBackground } from "@/components/backgrounds";
import { allCards as allTarotCards, type TarotCard } from "@/lib/seelen-profil/tarot-karten";

type FilterType = "all" | "major" | "staebe" | "kelche" | "schwerter" | "muenzen";

const filterLabels: Record<FilterType, string> = {
  all: "Alle Karten",
  major: "Große Arkana",
  staebe: "Stäbe",
  kelche: "Kelche",
  schwerter: "Schwerter",
  muenzen: "Münzen",
};

const suitColors: Record<string, string> = {
  major: "var(--gold)",
  staebe: "#F97316", // Orange/Fire
  kelche: "#3B82F6", // Blue/Water
  schwerter: "#A855F7", // Purple/Air
  muenzen: "#22C55E", // Green/Earth
};

export default function TarotGalleryPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [search, setSearch] = useState("");
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);

  // All cards from shared library (already includes suit field)
  const allCards = allTarotCards;

  const filteredCards = allCards.filter(card => {
    const matchesFilter = filter === "all" || card.suit === filter;
    const matchesSearch = search === "" ||
      card.name.toLowerCase().includes(search.toLowerCase()) ||
      card.meaning.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen relative">
      {/* Full Page Cosmic Background */}
      <CosmicBackground intensity="subtle" position="fixed" />

      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[var(--gold)]" />
              <span className="text-[var(--gold)] text-sm uppercase tracking-widest">
                78 mystische Karten
              </span>
              <Sparkles className="w-5 h-5 text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
              Tarot-Kartenbibliothek
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Entdecke die Bedeutungen aller Tarot-Karten – von der Großen Arkana
              bis zu den vier Elementen der Kleinen Arkana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="sticky top-16 md:top-20 z-40 py-4 glass border-b border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
              <input
                type="text"
                placeholder="Karte suchen..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[var(--bg-card)] border border-[var(--glass-border)] rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)]"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Filter className="w-5 h-5 text-[var(--text-muted)] shrink-0" />
              {(Object.keys(filterLabels) as FilterType[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all ${
                    filter === key
                      ? "bg-[var(--gold)] text-[var(--bg-primary)] font-medium"
                      : "bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {filterLabels[key]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[var(--text-muted)] mb-6">
            {filteredCards.length} Karten gefunden
          </p>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.03,
                },
              },
            }}
          >
            {filteredCards.map((card) => (
              <motion.div
                key={card.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.03 }}
                className="cursor-pointer group"
                onClick={() => setSelectedCard(card)}
              >
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-[var(--bg-card)] border border-[var(--glass-border)] group-hover:border-[var(--gold)] transition-colors">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <div>
                      <p className="text-white font-medium text-sm">{card.name}</p>
                      <p className="text-white/70 text-xs mt-0.5 line-clamp-1">{card.meaning}</p>
                    </div>
                  </div>
                  {/* Suit indicator */}
                  <div
                    className="absolute top-2 right-2 w-3 h-3 rounded-full"
                    style={{ backgroundColor: suitColors[card.suit] }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Card Detail Modal */}
      {selectedCard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedCard(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-48 aspect-[2/3] rounded-lg overflow-hidden shrink-0 glow-gold">
                <Image
                  src={selectedCard.image}
                  alt={selectedCard.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div
                  className="inline-block px-2 py-0.5 rounded text-xs font-medium mb-2"
                  style={{
                    backgroundColor: `${suitColors[selectedCard.suit]}20`,
                    color: suitColors[selectedCard.suit],
                  }}
                >
                  {filterLabels[selectedCard.suit as FilterType] || "Tarot"}
                </div>
                <h2 className="text-2xl font-bold text-gradient-gold mb-4">
                  {selectedCard.name}
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-1">
                      Bedeutung
                    </h3>
                    <p className="text-[var(--text-primary)]">{selectedCard.meaning}</p>
                  </div>
                  <div className="pt-4 border-t border-[var(--glass-border)]">
                    <p className="text-[var(--text-secondary)] text-sm">
                      Entdecke die tiefere Bedeutung dieser Karte in einem
                      persönlichen Reading mit Elfi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
