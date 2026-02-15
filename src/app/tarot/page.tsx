"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Search, Filter } from "lucide-react";
import { CosmicBackground } from "@/components/backgrounds";

// Card data organized by suit
const majorArcana = [
  { id: "narr", name: "Der Narr", number: 0, image: "/cards/tarot/major-00-narr.webp", meaning: "Neubeginn, Unschuld, Spontanität, Abenteuer" },
  { id: "magier", name: "Der Magier", number: 1, image: "/cards/tarot/major-01-magier.webp", meaning: "Willenskraft, Manifestation, Talent, Ressourcen" },
  { id: "hohepriesterin", name: "Die Hohepriesterin", number: 2, image: "/cards/tarot/major-02-hohepriesterin.webp", meaning: "Intuition, Geheimnisse, innere Weisheit, Mystik" },
  { id: "herrscherin", name: "Die Herrscherin", number: 3, image: "/cards/tarot/major-03-herrscherin.webp", meaning: "Fülle, Natur, Kreativität, Mütterlichkeit" },
  { id: "herrscher", name: "Der Herrscher", number: 4, image: "/cards/tarot/major-04-herrscher.webp", meaning: "Struktur, Autorität, Stabilität, Führung" },
  { id: "hierophant", name: "Der Hierophant", number: 5, image: "/cards/tarot/major-05-hierophant.webp", meaning: "Tradition, Spiritualität, Weisheit, Lehre" },
  { id: "liebenden", name: "Die Liebenden", number: 6, image: "/cards/tarot/major-06-liebenden.webp", meaning: "Liebe, Harmonie, Entscheidungen, Verbindung" },
  { id: "wagen", name: "Der Wagen", number: 7, image: "/cards/tarot/major-07-wagen.webp", meaning: "Willenskraft, Triumph, Kontrolle, Fortschritt" },
  { id: "kraft", name: "Die Kraft", number: 8, image: "/cards/tarot/major-08-kraft.webp", meaning: "Mut, Stärke, Sanftheit, innere Kraft" },
  { id: "eremit", name: "Der Eremit", number: 9, image: "/cards/tarot/major-09-eremit.webp", meaning: "Innenschau, Suche, Weisheit, Einsamkeit" },
  { id: "schicksal", name: "Rad des Schicksals", number: 10, image: "/cards/tarot/major-10-schicksal.webp", meaning: "Wandel, Zyklen, Schicksal, Glück" },
  { id: "gerechtigkeit", name: "Gerechtigkeit", number: 11, image: "/cards/tarot/major-11-gerechtigkeit.webp", meaning: "Wahrheit, Fairness, Karma, Balance" },
  { id: "gehaengte", name: "Der Gehängte", number: 12, image: "/cards/tarot/major-12-gehaengte.webp", meaning: "Loslassen, neue Perspektive, Pause, Opfer" },
  { id: "tod", name: "Der Tod", number: 13, image: "/cards/tarot/major-13-tod.webp", meaning: "Transformation, Ende, Neubeginn, Wandel" },
  { id: "maessigung", name: "Mäßigung", number: 14, image: "/cards/tarot/major-14-maessigung.webp", meaning: "Balance, Geduld, Harmonie, Mäßigung" },
  { id: "teufel", name: "Der Teufel", number: 15, image: "/cards/tarot/major-15-teufel.webp", meaning: "Bindungen, Schatten, Befreiung, Versuchung" },
  { id: "turm", name: "Der Turm", number: 16, image: "/cards/tarot/major-16-turm.webp", meaning: "Umbruch, Offenbarung, Erneuerung, Chaos" },
  { id: "stern", name: "Der Stern", number: 17, image: "/cards/tarot/major-17-stern.webp", meaning: "Hoffnung, Inspiration, Heilung, Frieden" },
  { id: "mond", name: "Der Mond", number: 18, image: "/cards/tarot/major-18-mond.webp", meaning: "Illusion, Intuition, Unbewusstes, Angst" },
  { id: "sonne", name: "Die Sonne", number: 19, image: "/cards/tarot/major-19-sonne.webp", meaning: "Freude, Erfolg, Vitalität, Optimismus" },
  { id: "gericht", name: "Das Gericht", number: 20, image: "/cards/tarot/major-20-gericht.webp", meaning: "Erweckung, Berufung, Erneuerung, Urteil" },
  { id: "welt", name: "Die Welt", number: 21, image: "/cards/tarot/major-21-welt.webp", meaning: "Vollendung, Integration, Erfüllung, Einheit" },
];

const minorArcana = {
  staebe: [
    { id: "staebe-ass", name: "Ass der Stäbe", image: "/cards/tarot/staebe-01-ass.webp", meaning: "Inspiration, Neubeginn, Potenzial" },
    { id: "staebe-zwei", name: "Zwei der Stäbe", image: "/cards/tarot/staebe-02-zwei.webp", meaning: "Planung, Entscheidungen, Fortschritt" },
    { id: "staebe-drei", name: "Drei der Stäbe", image: "/cards/tarot/staebe-03-drei.webp", meaning: "Expansion, Weitblick, Warten" },
    { id: "staebe-vier", name: "Vier der Stäbe", image: "/cards/tarot/staebe-04-vier.webp", meaning: "Feier, Heimat, Harmonie" },
    { id: "staebe-fuenf", name: "Fünf der Stäbe", image: "/cards/tarot/staebe-05-fuenf.webp", meaning: "Konflikt, Wettbewerb, Herausforderung" },
    { id: "staebe-sechs", name: "Sechs der Stäbe", image: "/cards/tarot/staebe-06-sechs.webp", meaning: "Sieg, Anerkennung, Erfolg" },
    { id: "staebe-sieben", name: "Sieben der Stäbe", image: "/cards/tarot/staebe-07-sieben.webp", meaning: "Verteidigung, Ausdauer, Standhaftigkeit" },
    { id: "staebe-acht", name: "Acht der Stäbe", image: "/cards/tarot/staebe-08-acht.webp", meaning: "Schnelligkeit, Nachrichten, Bewegung" },
    { id: "staebe-neun", name: "Neun der Stäbe", image: "/cards/tarot/staebe-09-neun.webp", meaning: "Widerstandskraft, Durchhalten, letzte Hürde" },
    { id: "staebe-zehn", name: "Zehn der Stäbe", image: "/cards/tarot/staebe-10-zehn.webp", meaning: "Last, Verantwortung, Erschöpfung" },
    { id: "staebe-bube", name: "Bube der Stäbe", image: "/cards/tarot/staebe-11-bube.webp", meaning: "Entdeckung, Begeisterung, Neugier" },
    { id: "staebe-ritter", name: "Ritter der Stäbe", image: "/cards/tarot/staebe-12-ritter.webp", meaning: "Energie, Leidenschaft, Abenteuer" },
    { id: "staebe-koenigin", name: "Königin der Stäbe", image: "/cards/tarot/staebe-13-koenigin.webp", meaning: "Selbstvertrauen, Wärme, Entschlossenheit" },
    { id: "staebe-koenig", name: "König der Stäbe", image: "/cards/tarot/staebe-14-koenig.webp", meaning: "Vision, Führung, Unternehmergeist" },
  ],
  kelche: [
    { id: "kelche-ass", name: "Ass der Kelche", image: "/cards/tarot/kelche-01-ass.webp", meaning: "Liebe, Emotionen, Intuition" },
    { id: "kelche-zwei", name: "Zwei der Kelche", image: "/cards/tarot/kelche-02-zwei.webp", meaning: "Partnerschaft, Verbindung, Harmonie" },
    { id: "kelche-drei", name: "Drei der Kelche", image: "/cards/tarot/kelche-03-drei.webp", meaning: "Feier, Freundschaft, Kreativität" },
    { id: "kelche-vier", name: "Vier der Kelche", image: "/cards/tarot/kelche-04-vier.webp", meaning: "Kontemplation, Apathie, Neubewertung" },
    { id: "kelche-fuenf", name: "Fünf der Kelche", image: "/cards/tarot/kelche-05-fuenf.webp", meaning: "Verlust, Trauer, Enttäuschung" },
    { id: "kelche-sechs", name: "Sechs der Kelche", image: "/cards/tarot/kelche-06-sechs.webp", meaning: "Nostalgie, Erinnerungen, Kindheit" },
    { id: "kelche-sieben", name: "Sieben der Kelche", image: "/cards/tarot/kelche-07-sieben.webp", meaning: "Fantasie, Illusionen, Wahl" },
    { id: "kelche-acht", name: "Acht der Kelche", image: "/cards/tarot/kelche-08-acht.webp", meaning: "Abschied, Weitergehen, Suche" },
    { id: "kelche-neun", name: "Neun der Kelche", image: "/cards/tarot/kelche-09-neun.webp", meaning: "Zufriedenheit, Wünsche, Erfüllung" },
    { id: "kelche-zehn", name: "Zehn der Kelche", image: "/cards/tarot/kelche-10-zehn.webp", meaning: "Harmonie, Familie, Glück" },
    { id: "kelche-bube", name: "Bube der Kelche", image: "/cards/tarot/kelche-11-bube.webp", meaning: "Kreativität, Sensibilität, Nachrichten" },
    { id: "kelche-ritter", name: "Ritter der Kelche", image: "/cards/tarot/kelche-12-ritter.webp", meaning: "Romantik, Charme, Fantasie" },
    { id: "kelche-koenigin", name: "Königin der Kelche", image: "/cards/tarot/kelche-13-koenigin.webp", meaning: "Mitgefühl, Fürsorge, Intuition" },
    { id: "kelche-koenig", name: "König der Kelche", image: "/cards/tarot/kelche-14-koenig.webp", meaning: "Emotionale Balance, Diplomatie, Weisheit" },
  ],
  schwerter: [
    { id: "schwerter-ass", name: "Ass der Schwerter", image: "/cards/tarot/schwerter-01-ass.webp", meaning: "Klarheit, Wahrheit, Durchbruch" },
    { id: "schwerter-zwei", name: "Zwei der Schwerter", image: "/cards/tarot/schwerter-02-zwei.webp", meaning: "Entscheidung, Blockade, Abwägung" },
    { id: "schwerter-drei", name: "Drei der Schwerter", image: "/cards/tarot/schwerter-03-drei.webp", meaning: "Herzschmerz, Trauer, Schmerz" },
    { id: "schwerter-vier", name: "Vier der Schwerter", image: "/cards/tarot/schwerter-04-vier.webp", meaning: "Ruhe, Erholung, Meditation" },
    { id: "schwerter-fuenf", name: "Fünf der Schwerter", image: "/cards/tarot/schwerter-05-fuenf.webp", meaning: "Konflikt, Niederlage, Ego" },
    { id: "schwerter-sechs", name: "Sechs der Schwerter", image: "/cards/tarot/schwerter-06-sechs.webp", meaning: "Übergang, Weitergehen, Heilung" },
    { id: "schwerter-sieben", name: "Sieben der Schwerter", image: "/cards/tarot/schwerter-07-sieben.webp", meaning: "Täuschung, Strategie, Geheimnis" },
    { id: "schwerter-acht", name: "Acht der Schwerter", image: "/cards/tarot/schwerter-08-acht.webp", meaning: "Gefangenschaft, Einschränkung, Angst" },
    { id: "schwerter-neun", name: "Neun der Schwerter", image: "/cards/tarot/schwerter-09-neun.webp", meaning: "Angst, Albträume, Sorgen" },
    { id: "schwerter-zehn", name: "Zehn der Schwerter", image: "/cards/tarot/schwerter-10-zehn.webp", meaning: "Ende, Zusammenbruch, Neubeginn" },
    { id: "schwerter-bube", name: "Bube der Schwerter", image: "/cards/tarot/schwerter-11-bube.webp", meaning: "Neugier, Wachsamkeit, Neuigkeiten" },
    { id: "schwerter-ritter", name: "Ritter der Schwerter", image: "/cards/tarot/schwerter-12-ritter.webp", meaning: "Ehrgeiz, Schnelligkeit, Aktion" },
    { id: "schwerter-koenigin", name: "Königin der Schwerter", image: "/cards/tarot/schwerter-13-koenigin.webp", meaning: "Unabhängigkeit, Klarheit, Ehrlichkeit" },
    { id: "schwerter-koenig", name: "König der Schwerter", image: "/cards/tarot/schwerter-14-koenig.webp", meaning: "Autorität, Intellekt, Wahrheit" },
  ],
  muenzen: [
    { id: "muenzen-ass", name: "Ass der Münzen", image: "/cards/tarot/muenzen-01-ass.webp", meaning: "Chance, Manifestation, Fülle" },
    { id: "muenzen-zwei", name: "Zwei der Münzen", image: "/cards/tarot/muenzen-02-zwei.webp", meaning: "Balance, Anpassung, Jonglieren" },
    { id: "muenzen-drei", name: "Drei der Münzen", image: "/cards/tarot/muenzen-03-drei.webp", meaning: "Teamwork, Handwerk, Lernen" },
    { id: "muenzen-vier", name: "Vier der Münzen", image: "/cards/tarot/muenzen-04-vier.webp", meaning: "Sicherheit, Kontrolle, Festhalten" },
    { id: "muenzen-fuenf", name: "Fünf der Münzen", image: "/cards/tarot/muenzen-05-fuenf.webp", meaning: "Not, Verlust, Isolation" },
    { id: "muenzen-sechs", name: "Sechs der Münzen", image: "/cards/tarot/muenzen-06-sechs.webp", meaning: "Großzügigkeit, Teilen, Balance" },
    { id: "muenzen-sieben", name: "Sieben der Münzen", image: "/cards/tarot/muenzen-07-sieben.webp", meaning: "Geduld, Investition, Ernte" },
    { id: "muenzen-acht", name: "Acht der Münzen", image: "/cards/tarot/muenzen-08-acht.webp", meaning: "Fleiß, Meisterschaft, Hingabe" },
    { id: "muenzen-neun", name: "Neun der Münzen", image: "/cards/tarot/muenzen-09-neun.webp", meaning: "Fülle, Unabhängigkeit, Luxus" },
    { id: "muenzen-zehn", name: "Zehn der Münzen", image: "/cards/tarot/muenzen-10-zehn.webp", meaning: "Vermächtnis, Familie, Wohlstand" },
    { id: "muenzen-bube", name: "Bube der Münzen", image: "/cards/tarot/muenzen-11-bube.webp", meaning: "Manifestation, Studium, Möglichkeiten" },
    { id: "muenzen-ritter", name: "Ritter der Münzen", image: "/cards/tarot/muenzen-12-ritter.webp", meaning: "Effizienz, Routine, Beständigkeit" },
    { id: "muenzen-koenigin", name: "Königin der Münzen", image: "/cards/tarot/muenzen-13-koenigin.webp", meaning: "Fürsorge, Praktikabilität, Sicherheit" },
    { id: "muenzen-koenig", name: "König der Münzen", image: "/cards/tarot/muenzen-14-koenig.webp", meaning: "Erfolg, Disziplin, Wohlstand" },
  ],
};

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
  const [selectedCard, setSelectedCard] = useState<{
    id: string;
    name: string;
    image: string;
    meaning: string;
    number?: number;
    suit?: string;
  } | null>(null);

  // Combine and filter cards
  const allCards = [
    ...majorArcana.map(c => ({ ...c, suit: "major" })),
    ...minorArcana.staebe.map(c => ({ ...c, suit: "staebe" })),
    ...minorArcana.kelche.map(c => ({ ...c, suit: "kelche" })),
    ...minorArcana.schwerter.map(c => ({ ...c, suit: "schwerter" })),
    ...minorArcana.muenzen.map(c => ({ ...c, suit: "muenzen" })),
  ];

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
                    backgroundColor: `${suitColors[(selectedCard as typeof allCards[0]).suit]}20`,
                    color: suitColors[(selectedCard as typeof allCards[0]).suit],
                  }}
                >
                  {filterLabels[(selectedCard as typeof allCards[0]).suit as FilterType] || "Tarot"}
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
                      Für tiefere Einblicke und persönliche Interpretationen,
                      nutze die Elfenorakel App für ein vollständiges Reading.
                    </p>
                    <button
                      onClick={() => window.open("https://app.elfenorakel.de", "_blank")}
                      className="mt-4 px-4 py-2 bg-[var(--gold)] text-[var(--bg-primary)] rounded-full text-sm font-medium hover:bg-[var(--gold-light)] transition-colors"
                    >
                      Jetzt Reading starten
                    </button>
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
