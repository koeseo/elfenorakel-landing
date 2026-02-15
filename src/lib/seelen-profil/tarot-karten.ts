/**
 * Shared Tarot Card Data
 *
 * All 78 Tarot cards with typed metadata for use across
 * the landing page, Seelen-Profil quiz, and profile display.
 */

export type Suit = 'major' | 'staebe' | 'kelche' | 'schwerter' | 'muenzen';
export type Element = 'feuer' | 'wasser' | 'luft' | 'erde';

export interface TarotCard {
  id: string;
  name: string;
  number?: number;
  image: string;
  meaning: string;
  suit: Suit;
  element?: Element;
}

// ---------------------------------------------------------------------------
// Major Arcana (22 cards) -- no element
// ---------------------------------------------------------------------------

export const majorArcana: TarotCard[] = [
  { id: "narr", name: "Der Narr", number: 0, image: "/cards/tarot/major-00-narr.webp", meaning: "Neubeginn, Unschuld, Spontanität, Abenteuer", suit: "major" },
  { id: "magier", name: "Der Magier", number: 1, image: "/cards/tarot/major-01-magier.webp", meaning: "Willenskraft, Manifestation, Talent, Ressourcen", suit: "major" },
  { id: "hohepriesterin", name: "Die Hohepriesterin", number: 2, image: "/cards/tarot/major-02-hohepriesterin.webp", meaning: "Intuition, Geheimnisse, innere Weisheit, Mystik", suit: "major" },
  { id: "herrscherin", name: "Die Herrscherin", number: 3, image: "/cards/tarot/major-03-herrscherin.webp", meaning: "Fülle, Natur, Kreativität, Mütterlichkeit", suit: "major" },
  { id: "herrscher", name: "Der Herrscher", number: 4, image: "/cards/tarot/major-04-herrscher.webp", meaning: "Struktur, Autorität, Stabilität, Führung", suit: "major" },
  { id: "hierophant", name: "Der Hierophant", number: 5, image: "/cards/tarot/major-05-hierophant.webp", meaning: "Tradition, Spiritualität, Weisheit, Lehre", suit: "major" },
  { id: "liebenden", name: "Die Liebenden", number: 6, image: "/cards/tarot/major-06-liebenden.webp", meaning: "Liebe, Harmonie, Entscheidungen, Verbindung", suit: "major" },
  { id: "wagen", name: "Der Wagen", number: 7, image: "/cards/tarot/major-07-wagen.webp", meaning: "Willenskraft, Triumph, Kontrolle, Fortschritt", suit: "major" },
  { id: "kraft", name: "Die Kraft", number: 8, image: "/cards/tarot/major-08-kraft.webp", meaning: "Mut, Stärke, Sanftheit, innere Kraft", suit: "major" },
  { id: "eremit", name: "Der Eremit", number: 9, image: "/cards/tarot/major-09-eremit.webp", meaning: "Innenschau, Suche, Weisheit, Einsamkeit", suit: "major" },
  { id: "schicksal", name: "Rad des Schicksals", number: 10, image: "/cards/tarot/major-10-schicksal.webp", meaning: "Wandel, Zyklen, Schicksal, Glück", suit: "major" },
  { id: "gerechtigkeit", name: "Gerechtigkeit", number: 11, image: "/cards/tarot/major-11-gerechtigkeit.webp", meaning: "Wahrheit, Fairness, Karma, Balance", suit: "major" },
  { id: "gehaengte", name: "Der Gehängte", number: 12, image: "/cards/tarot/major-12-gehaengte.webp", meaning: "Loslassen, neue Perspektive, Pause, Opfer", suit: "major" },
  { id: "tod", name: "Der Tod", number: 13, image: "/cards/tarot/major-13-tod.webp", meaning: "Transformation, Ende, Neubeginn, Wandel", suit: "major" },
  { id: "maessigung", name: "Mäßigung", number: 14, image: "/cards/tarot/major-14-maessigung.webp", meaning: "Balance, Geduld, Harmonie, Mäßigung", suit: "major" },
  { id: "teufel", name: "Der Teufel", number: 15, image: "/cards/tarot/major-15-teufel.webp", meaning: "Bindungen, Schatten, Befreiung, Versuchung", suit: "major" },
  { id: "turm", name: "Der Turm", number: 16, image: "/cards/tarot/major-16-turm.webp", meaning: "Umbruch, Offenbarung, Erneuerung, Chaos", suit: "major" },
  { id: "stern", name: "Der Stern", number: 17, image: "/cards/tarot/major-17-stern.webp", meaning: "Hoffnung, Inspiration, Heilung, Frieden", suit: "major" },
  { id: "mond", name: "Der Mond", number: 18, image: "/cards/tarot/major-18-mond.webp", meaning: "Illusion, Intuition, Unbewusstes, Angst", suit: "major" },
  { id: "sonne", name: "Die Sonne", number: 19, image: "/cards/tarot/major-19-sonne.webp", meaning: "Freude, Erfolg, Vitalität, Optimismus", suit: "major" },
  { id: "gericht", name: "Das Gericht", number: 20, image: "/cards/tarot/major-20-gericht.webp", meaning: "Erweckung, Berufung, Erneuerung, Urteil", suit: "major" },
  { id: "welt", name: "Die Welt", number: 21, image: "/cards/tarot/major-21-welt.webp", meaning: "Vollendung, Integration, Erfüllung, Einheit", suit: "major" },
];

// ---------------------------------------------------------------------------
// Minor Arcana (56 cards) -- grouped by suit
// ---------------------------------------------------------------------------

export const minorArcana: Record<'staebe' | 'kelche' | 'schwerter' | 'muenzen', TarotCard[]> = {
  staebe: [
    { id: "staebe-ass", name: "Ass der Stäbe", image: "/cards/tarot/staebe-01-ass.webp", meaning: "Inspiration, Neubeginn, Potenzial", suit: "staebe", element: "feuer" },
    { id: "staebe-zwei", name: "Zwei der Stäbe", image: "/cards/tarot/staebe-02-zwei.webp", meaning: "Planung, Entscheidungen, Fortschritt", suit: "staebe", element: "feuer" },
    { id: "staebe-drei", name: "Drei der Stäbe", image: "/cards/tarot/staebe-03-drei.webp", meaning: "Expansion, Weitblick, Warten", suit: "staebe", element: "feuer" },
    { id: "staebe-vier", name: "Vier der Stäbe", image: "/cards/tarot/staebe-04-vier.webp", meaning: "Feier, Heimat, Harmonie", suit: "staebe", element: "feuer" },
    { id: "staebe-fuenf", name: "Fünf der Stäbe", image: "/cards/tarot/staebe-05-fuenf.webp", meaning: "Konflikt, Wettbewerb, Herausforderung", suit: "staebe", element: "feuer" },
    { id: "staebe-sechs", name: "Sechs der Stäbe", image: "/cards/tarot/staebe-06-sechs.webp", meaning: "Sieg, Anerkennung, Erfolg", suit: "staebe", element: "feuer" },
    { id: "staebe-sieben", name: "Sieben der Stäbe", image: "/cards/tarot/staebe-07-sieben.webp", meaning: "Verteidigung, Ausdauer, Standhaftigkeit", suit: "staebe", element: "feuer" },
    { id: "staebe-acht", name: "Acht der Stäbe", image: "/cards/tarot/staebe-08-acht.webp", meaning: "Schnelligkeit, Nachrichten, Bewegung", suit: "staebe", element: "feuer" },
    { id: "staebe-neun", name: "Neun der Stäbe", image: "/cards/tarot/staebe-09-neun.webp", meaning: "Widerstandskraft, Durchhalten, letzte Hürde", suit: "staebe", element: "feuer" },
    { id: "staebe-zehn", name: "Zehn der Stäbe", image: "/cards/tarot/staebe-10-zehn.webp", meaning: "Last, Verantwortung, Erschöpfung", suit: "staebe", element: "feuer" },
    { id: "staebe-bube", name: "Bube der Stäbe", image: "/cards/tarot/staebe-11-bube.webp", meaning: "Entdeckung, Begeisterung, Neugier", suit: "staebe", element: "feuer" },
    { id: "staebe-ritter", name: "Ritter der Stäbe", image: "/cards/tarot/staebe-12-ritter.webp", meaning: "Energie, Leidenschaft, Abenteuer", suit: "staebe", element: "feuer" },
    { id: "staebe-koenigin", name: "Königin der Stäbe", image: "/cards/tarot/staebe-13-koenigin.webp", meaning: "Selbstvertrauen, Wärme, Entschlossenheit", suit: "staebe", element: "feuer" },
    { id: "staebe-koenig", name: "König der Stäbe", image: "/cards/tarot/staebe-14-koenig.webp", meaning: "Vision, Führung, Unternehmergeist", suit: "staebe", element: "feuer" },
  ],
  kelche: [
    { id: "kelche-ass", name: "Ass der Kelche", image: "/cards/tarot/kelche-01-ass.webp", meaning: "Liebe, Emotionen, Intuition", suit: "kelche", element: "wasser" },
    { id: "kelche-zwei", name: "Zwei der Kelche", image: "/cards/tarot/kelche-02-zwei.webp", meaning: "Partnerschaft, Verbindung, Harmonie", suit: "kelche", element: "wasser" },
    { id: "kelche-drei", name: "Drei der Kelche", image: "/cards/tarot/kelche-03-drei.webp", meaning: "Feier, Freundschaft, Kreativität", suit: "kelche", element: "wasser" },
    { id: "kelche-vier", name: "Vier der Kelche", image: "/cards/tarot/kelche-04-vier.webp", meaning: "Kontemplation, Apathie, Neubewertung", suit: "kelche", element: "wasser" },
    { id: "kelche-fuenf", name: "Fünf der Kelche", image: "/cards/tarot/kelche-05-fuenf.webp", meaning: "Verlust, Trauer, Enttäuschung", suit: "kelche", element: "wasser" },
    { id: "kelche-sechs", name: "Sechs der Kelche", image: "/cards/tarot/kelche-06-sechs.webp", meaning: "Nostalgie, Erinnerungen, Kindheit", suit: "kelche", element: "wasser" },
    { id: "kelche-sieben", name: "Sieben der Kelche", image: "/cards/tarot/kelche-07-sieben.webp", meaning: "Fantasie, Illusionen, Wahl", suit: "kelche", element: "wasser" },
    { id: "kelche-acht", name: "Acht der Kelche", image: "/cards/tarot/kelche-08-acht.webp", meaning: "Abschied, Weitergehen, Suche", suit: "kelche", element: "wasser" },
    { id: "kelche-neun", name: "Neun der Kelche", image: "/cards/tarot/kelche-09-neun.webp", meaning: "Zufriedenheit, Wünsche, Erfüllung", suit: "kelche", element: "wasser" },
    { id: "kelche-zehn", name: "Zehn der Kelche", image: "/cards/tarot/kelche-10-zehn.webp", meaning: "Harmonie, Familie, Glück", suit: "kelche", element: "wasser" },
    { id: "kelche-bube", name: "Bube der Kelche", image: "/cards/tarot/kelche-11-bube.webp", meaning: "Kreativität, Sensibilität, Nachrichten", suit: "kelche", element: "wasser" },
    { id: "kelche-ritter", name: "Ritter der Kelche", image: "/cards/tarot/kelche-12-ritter.webp", meaning: "Romantik, Charme, Fantasie", suit: "kelche", element: "wasser" },
    { id: "kelche-koenigin", name: "Königin der Kelche", image: "/cards/tarot/kelche-13-koenigin.webp", meaning: "Mitgefühl, Fürsorge, Intuition", suit: "kelche", element: "wasser" },
    { id: "kelche-koenig", name: "König der Kelche", image: "/cards/tarot/kelche-14-koenig.webp", meaning: "Emotionale Balance, Diplomatie, Weisheit", suit: "kelche", element: "wasser" },
  ],
  schwerter: [
    { id: "schwerter-ass", name: "Ass der Schwerter", image: "/cards/tarot/schwerter-01-ass.webp", meaning: "Klarheit, Wahrheit, Durchbruch", suit: "schwerter", element: "luft" },
    { id: "schwerter-zwei", name: "Zwei der Schwerter", image: "/cards/tarot/schwerter-02-zwei.webp", meaning: "Entscheidung, Blockade, Abwägung", suit: "schwerter", element: "luft" },
    { id: "schwerter-drei", name: "Drei der Schwerter", image: "/cards/tarot/schwerter-03-drei.webp", meaning: "Herzschmerz, Trauer, Schmerz", suit: "schwerter", element: "luft" },
    { id: "schwerter-vier", name: "Vier der Schwerter", image: "/cards/tarot/schwerter-04-vier.webp", meaning: "Ruhe, Erholung, Meditation", suit: "schwerter", element: "luft" },
    { id: "schwerter-fuenf", name: "Fünf der Schwerter", image: "/cards/tarot/schwerter-05-fuenf.webp", meaning: "Konflikt, Niederlage, Ego", suit: "schwerter", element: "luft" },
    { id: "schwerter-sechs", name: "Sechs der Schwerter", image: "/cards/tarot/schwerter-06-sechs.webp", meaning: "Übergang, Weitergehen, Heilung", suit: "schwerter", element: "luft" },
    { id: "schwerter-sieben", name: "Sieben der Schwerter", image: "/cards/tarot/schwerter-07-sieben.webp", meaning: "Täuschung, Strategie, Geheimnis", suit: "schwerter", element: "luft" },
    { id: "schwerter-acht", name: "Acht der Schwerter", image: "/cards/tarot/schwerter-08-acht.webp", meaning: "Gefangenschaft, Einschränkung, Angst", suit: "schwerter", element: "luft" },
    { id: "schwerter-neun", name: "Neun der Schwerter", image: "/cards/tarot/schwerter-09-neun.webp", meaning: "Angst, Albträume, Sorgen", suit: "schwerter", element: "luft" },
    { id: "schwerter-zehn", name: "Zehn der Schwerter", image: "/cards/tarot/schwerter-10-zehn.webp", meaning: "Ende, Zusammenbruch, Neubeginn", suit: "schwerter", element: "luft" },
    { id: "schwerter-bube", name: "Bube der Schwerter", image: "/cards/tarot/schwerter-11-bube.webp", meaning: "Neugier, Wachsamkeit, Neuigkeiten", suit: "schwerter", element: "luft" },
    { id: "schwerter-ritter", name: "Ritter der Schwerter", image: "/cards/tarot/schwerter-12-ritter.webp", meaning: "Ehrgeiz, Schnelligkeit, Aktion", suit: "schwerter", element: "luft" },
    { id: "schwerter-koenigin", name: "Königin der Schwerter", image: "/cards/tarot/schwerter-13-koenigin.webp", meaning: "Unabhängigkeit, Klarheit, Ehrlichkeit", suit: "schwerter", element: "luft" },
    { id: "schwerter-koenig", name: "König der Schwerter", image: "/cards/tarot/schwerter-14-koenig.webp", meaning: "Autorität, Intellekt, Wahrheit", suit: "schwerter", element: "luft" },
  ],
  muenzen: [
    { id: "muenzen-ass", name: "Ass der Münzen", image: "/cards/tarot/muenzen-01-ass.webp", meaning: "Chance, Manifestation, Fülle", suit: "muenzen", element: "erde" },
    { id: "muenzen-zwei", name: "Zwei der Münzen", image: "/cards/tarot/muenzen-02-zwei.webp", meaning: "Balance, Anpassung, Jonglieren", suit: "muenzen", element: "erde" },
    { id: "muenzen-drei", name: "Drei der Münzen", image: "/cards/tarot/muenzen-03-drei.webp", meaning: "Teamwork, Handwerk, Lernen", suit: "muenzen", element: "erde" },
    { id: "muenzen-vier", name: "Vier der Münzen", image: "/cards/tarot/muenzen-04-vier.webp", meaning: "Sicherheit, Kontrolle, Festhalten", suit: "muenzen", element: "erde" },
    { id: "muenzen-fuenf", name: "Fünf der Münzen", image: "/cards/tarot/muenzen-05-fuenf.webp", meaning: "Not, Verlust, Isolation", suit: "muenzen", element: "erde" },
    { id: "muenzen-sechs", name: "Sechs der Münzen", image: "/cards/tarot/muenzen-06-sechs.webp", meaning: "Großzügigkeit, Teilen, Balance", suit: "muenzen", element: "erde" },
    { id: "muenzen-sieben", name: "Sieben der Münzen", image: "/cards/tarot/muenzen-07-sieben.webp", meaning: "Geduld, Investition, Ernte", suit: "muenzen", element: "erde" },
    { id: "muenzen-acht", name: "Acht der Münzen", image: "/cards/tarot/muenzen-08-acht.webp", meaning: "Fleiß, Meisterschaft, Hingabe", suit: "muenzen", element: "erde" },
    { id: "muenzen-neun", name: "Neun der Münzen", image: "/cards/tarot/muenzen-09-neun.webp", meaning: "Fülle, Unabhängigkeit, Luxus", suit: "muenzen", element: "erde" },
    { id: "muenzen-zehn", name: "Zehn der Münzen", image: "/cards/tarot/muenzen-10-zehn.webp", meaning: "Vermächtnis, Familie, Wohlstand", suit: "muenzen", element: "erde" },
    { id: "muenzen-bube", name: "Bube der Münzen", image: "/cards/tarot/muenzen-11-bube.webp", meaning: "Manifestation, Studium, Möglichkeiten", suit: "muenzen", element: "erde" },
    { id: "muenzen-ritter", name: "Ritter der Münzen", image: "/cards/tarot/muenzen-12-ritter.webp", meaning: "Effizienz, Routine, Beständigkeit", suit: "muenzen", element: "erde" },
    { id: "muenzen-koenigin", name: "Königin der Münzen", image: "/cards/tarot/muenzen-13-koenigin.webp", meaning: "Fürsorge, Praktikabilität, Sicherheit", suit: "muenzen", element: "erde" },
    { id: "muenzen-koenig", name: "König der Münzen", image: "/cards/tarot/muenzen-14-koenig.webp", meaning: "Erfolg, Disziplin, Wohlstand", suit: "muenzen", element: "erde" },
  ],
};

// ---------------------------------------------------------------------------
// Convenience: flat array of all 78 cards
// ---------------------------------------------------------------------------

export const allCards: TarotCard[] = [
  ...majorArcana,
  ...minorArcana.staebe,
  ...minorArcana.kelche,
  ...minorArcana.schwerter,
  ...minorArcana.muenzen,
];
