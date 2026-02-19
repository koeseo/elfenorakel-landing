import { FadeIn } from "@/components/ui/FadeIn";
import { allCards } from "@/lib/seelen-profil/tarot-karten";

interface ProfilKartenlegungProps {
  kartenwahl: string[];
  vorname: string;
}

export const ProfilKartenlegung = ({
  kartenwahl,
  vorname,
}: ProfilKartenlegungProps) => {
  const cards = kartenwahl
    .map((id) => allCards.find((c) => c.id === id))
    .filter(Boolean);

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <FadeIn className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)] mb-3">
            Deine Kartenlegung
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
            Die Karten, die dich gewählt haben
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto">
            {vorname}, diese fünf Karten haben sich aus 78 möglichen zu dir hingezogen.
            Gemeinsam erzählen sie die Geschichte deiner Seele — jede Karte ein Kapitel,
            zusammen ein kosmisches Portrait.
          </p>
        </FadeIn>

        {/* 5 cards in a row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          {cards.map((card, i) => (
            <FadeIn key={card!.id} delay={i * 0.15}>
              <div className="group flex flex-col items-center">
                <div className="relative">
                  <div
                    className="absolute inset-0 -z-10 blur-[30px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ background: "radial-gradient(circle, var(--gold), transparent)" }}
                  />
                  <div className="w-24 h-36 md:w-32 md:h-48 lg:w-36 lg:h-54 rounded-xl overflow-hidden border border-[var(--gold)]/30 shadow-lg group-hover:shadow-[0_0_30px_rgba(201,163,92,0.3)] transition-all duration-500 group-hover:scale-105">
                    <img
                      src={card!.image}
                      alt={card!.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="mt-3 text-xs md:text-sm font-medium text-[var(--text-secondary)] text-center max-w-[120px]">
                  {card!.name}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Narrative about the card spread */}
        <FadeIn delay={0.8}>
          <div className="glass-card p-6 md:p-8 max-w-3xl mx-auto">
            <p className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg">
              {buildKartenNarrativ(cards.map((c) => c!))}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

function buildKartenNarrativ(
  cards: { name: string; meaning: string; suit: string; element?: string }[]
): string {
  // Count suits to find the dominant energy
  const suitCounts: Record<string, number> = {};
  const elementCounts: Record<string, number> = {};

  for (const card of cards) {
    suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
    if (card.element) {
      elementCounts[card.element] = (elementCounts[card.element] || 0) + 1;
    }
  }

  const hasMajor = suitCounts["major"] || 0;
  const names = cards.map((c) => c.name);

  const suitDescriptions: Record<string, string> = {
    staebe: "Leidenschaft und Schöpferkraft",
    kelche: "Emotionen und Intuition",
    schwerter: "Klarheit und Wahrheit",
    muenzen: "Manifestation und Erdung",
  };

  const elementNames: Record<string, string> = {
    feuer: "Feuer",
    wasser: "Wasser",
    luft: "Luft",
    erde: "Erde",
  };

  // Build the narrative
  const parts: string[] = [];

  // Opening
  parts.push(
    `Deine Karten sprechen eine deutliche Sprache: ${names[0]} und ${names[1]} bilden den Anfang deiner Geschichte, ${names[2]} und ${names[3]} vertiefen sie, und ${names[4]} bringt sie zum Abschluss.`
  );

  // Major Arcana emphasis
  if (hasMajor >= 3) {
    parts.push(
      `Mit ${hasMajor} Karten der Großen Arkana trägst du eine besonders intensive Seelenenergie in dir — das Universum hat große Themen für dich vorgesehen, die weit über das Alltägliche hinausreichen.`
    );
  } else if (hasMajor >= 1) {
    parts.push(
      `Die Große Arkana in deiner Legung zeigt, dass deine Seele gerade an einem Wendepunkt steht — es geht um mehr als Alltägliches, es geht um die großen Fragen deines Lebens.`
    );
  }

  // Dominant suit energy
  const dominantSuit = Object.entries(suitCounts)
    .filter(([k]) => k !== "major")
    .sort(([, a], [, b]) => b - a)[0];

  if (dominantSuit && dominantSuit[1] >= 2) {
    const desc = suitDescriptions[dominantSuit[0]];
    if (desc) {
      parts.push(
        `Die starke Präsenz der ${dominantSuit[0] === "staebe" ? "Stäbe" : dominantSuit[0] === "kelche" ? "Kelche" : dominantSuit[0] === "schwerter" ? "Schwerter" : "Münzen"} in deiner Legung unterstreicht dein zentrales Lebensthema: ${desc}.`
      );
    }
  }

  // Dominant element from minor cards
  const dominantElement = Object.entries(elementCounts).sort(
    ([, a], [, b]) => b - a
  )[0];
  if (dominantElement && dominantElement[1] >= 2) {
    parts.push(
      `Das Element ${elementNames[dominantElement[0]]} durchzieht deine Karten wie ein roter Faden — es bestätigt, was deine Seele schon lange weiß.`
    );
  }

  // Card meanings woven together
  const allMeanings = cards.flatMap((c) =>
    c.meaning.split(", ").map((m) => m.trim())
  );
  const uniqueMeanings = [...new Set(allMeanings)];
  const topThemes = uniqueMeanings.slice(0, 4).join(", ");

  parts.push(
    `Die Kernthemen deiner Kartenlegung — ${topThemes} — verweben sich zu einem einzigartigen Seelenportrait, das in den folgenden Abschnitten Stück für Stück enthüllt wird.`
  );

  return parts.join(" ");
}
