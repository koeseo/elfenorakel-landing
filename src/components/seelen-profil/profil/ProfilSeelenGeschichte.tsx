import { FadeIn } from "@/components/ui/FadeIn";
import { Sparkles } from "lucide-react";
import type { Archetyp } from "@/lib/seelen-profil/archetypen";
import type { ElementInfo } from "@/lib/seelen-profil/elemente";
import { allCards } from "@/lib/seelen-profil/tarot-karten";

interface ProfilSeelenGeschichteProps {
  vorname: string;
  archetyp: Archetyp;
  dominantElement: ElementInfo;
  secondaryElement: ElementInfo;
  kartenwahl: string[];
  schattenKarte: string;
  lichtKarte: string;
  planet: string;
  chakra: string;
  mondphase: string;
}

export const ProfilSeelenGeschichte = ({
  vorname,
  archetyp,
  dominantElement,
  secondaryElement,
  kartenwahl,
  schattenKarte,
  lichtKarte,
  planet,
  chakra,
  mondphase,
}: ProfilSeelenGeschichteProps) => {
  const cards = kartenwahl
    .map((id) => allCards.find((c) => c.id === id))
    .filter(Boolean);

  const schattenCard = allCards.find((c) => c.id === schattenKarte);
  const lichtCard = allCards.find((c) => c.id === lichtKarte);

  // Strip article for compound usage ("Die Nährende" → "Nährende")
  const archetypKurz = archetyp.name.replace(/^(Die |Der |Das )/, "");

  const geschichte = buildSeelenGeschichte({
    vorname,
    archetypName: archetyp.name,
    archetypKurz,
    archetypKarteName: archetyp.karteName,
    archetypClaim: archetyp.claim,
    dominantElementName: dominantElement.name,
    secondaryElementName: secondaryElement.name,
    cards: cards.map((c) => c!),
    schattenName: schattenCard?.name || schattenKarte,
    lichtName: lichtCard?.name || lichtKarte,
    planetName: planetNames[planet] || planet,
    chakraName: chakraNames[chakra] || chakra,
    mondphaseName: mondphasenNames[mondphase] || mondphase,
  });

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[var(--gold)]" />
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
              Deine Seelen-Geschichte
            </p>
            <Sparkles className="w-5 h-5 text-[var(--gold)]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
            Der rote Faden deiner Seele
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto">
            Alle Dimensionen deines Profils erzählen gemeinsam eine Geschichte.
            Hier ist sie — dein kosmisches Portrait, verwoben zu einem einzigen Bild.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Decorative gradient */}
            <div
              className="absolute top-0 left-0 w-full h-64 -z-0 opacity-5"
              style={{
                background:
                  "linear-gradient(to bottom, var(--gold), transparent)",
              }}
            />

            <div className="relative z-10 space-y-6">
              {geschichte.map((absatz, i) => (
                <FadeIn key={i} delay={0.3 + i * 0.1}>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg first:text-lg first:md:text-xl first:text-[var(--text-primary)] first:font-medium">
                    {absatz}
                  </p>
                </FadeIn>
              ))}
            </div>

            {/* Closing affirmation */}
            <FadeIn delay={0.8}>
              <div className="mt-10 pt-8 border-t border-[var(--gold)]/20 text-center">
                <p className="text-[var(--gold-light)] italic text-lg md:text-xl font-medium">
                  &ldquo;{archetyp.affirmation}&rdquo;
                </p>
                <p className="text-xs text-[var(--text-muted)] mt-3 uppercase tracking-widest">
                  Deine Seelen-Affirmation
                </p>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// ---------------------------------------------------------------------------
// Name maps
// ---------------------------------------------------------------------------

const planetNames: Record<string, string> = {
  sonne: "die Sonne",
  mond: "der Mond",
  merkur: "Merkur",
  venus: "Venus",
  mars: "Mars",
  jupiter: "Jupiter",
  saturn: "Saturn",
  uranus: "Uranus",
  neptun: "Neptun",
  pluto: "Pluto",
};

const chakraNames: Record<string, string> = {
  wurzel: "Wurzelchakra",
  sakral: "Sakralchakra",
  solar: "Solarplexuschakra",
  herz: "Herzchakra",
  hals: "Halschakra",
  stirn: "Stirnchakra",
  krone: "Kronenchakra",
};

const mondphasenNames: Record<string, string> = {
  neumond: "Neumond",
  zunehmende_sichel: "zunehmende Sichel",
  erstes_viertel: "erstes Viertel",
  zunehmender_mond: "zunehmender Mond",
  vollmond: "Vollmond",
  abnehmender_mond: "abnehmender Mond",
  letztes_viertel: "letztes Viertel",
  abnehmende_sichel: "abnehmende Sichel",
};

// ---------------------------------------------------------------------------
// Narrative builder
// ---------------------------------------------------------------------------

interface GeschichteInput {
  vorname: string;
  archetypName: string;
  archetypKurz: string;
  archetypKarteName: string;
  archetypClaim: string;
  dominantElementName: string;
  secondaryElementName: string;
  cards: { name: string; meaning: string; suit: string; element?: string }[];
  schattenName: string;
  lichtName: string;
  planetName: string;
  chakraName: string;
  mondphaseName: string;
}

function buildSeelenGeschichte(input: GeschichteInput): string[] {
  const {
    vorname,
    archetypName,
    archetypKurz,
    archetypKarteName,
    archetypClaim,
    dominantElementName,
    secondaryElementName,
    cards,
    schattenName,
    lichtName,
    planetName,
    chakraName,
    mondphaseName,
  } = input;

  const absaetze: string[] = [];
  const cardNames = cards.map((c) => c.name);

  // ---------------------------------------------------------------------------
  // 1. Opening — connecting cards to archetype
  // ---------------------------------------------------------------------------
  absaetze.push(
    `${vorname}, als die fünf Karten aus dem kosmischen Feld zu dir fanden — ` +
    `${cardNames[0]}, ${cardNames[1]}, ${cardNames[2]}, ${cardNames[3]} und ${cardNames[4]} — ` +
    `war das kein Zufall. Sie zeichneten das Bild einer Seele, die als ${archetypName} durch diese Welt wandelt. ` +
    `${archetypClaim} Und genau das bestätigen deine Karten mit einer Deutlichkeit, die selbst mich berührt.`
  );

  // ---------------------------------------------------------------------------
  // 2. Card meanings woven into element narrative
  // ---------------------------------------------------------------------------
  const allMeanings = cards.flatMap((c) =>
    c.meaning.split(", ").map((m) => m.trim())
  );
  const uniqueMeanings = [...new Set(allMeanings)];
  const themen = uniqueMeanings.slice(0, 5);

  // Count suit occurrences
  const suitCounts: Record<string, number> = {};
  for (const card of cards) {
    suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
  }
  const hasMajor = suitCounts["major"] || 0;

  const suitStories: Record<string, string> = {
    staebe: "Leidenschaft und schöpferische Kraft",
    kelche: "emotionale Tiefe und Intuition",
    schwerter: "geistige Klarheit und Wahrheitssuche",
    muenzen: "Erdung und Manifestationskraft",
  };

  let kartenUndElement =
    `Die Themen deiner Karten — ${themen.join(", ")} — ` +
    `fließen zusammen wie Ströme in einen Ozean. `;

  if (hasMajor >= 3) {
    kartenUndElement +=
      `${hasMajor} Karten aus der Großen Arkana zeigen, dass deine Seele gerade an einem gewaltigen Kreuzweg steht. ` +
      `Das sind keine kleinen Alltagslektionen — das Universum spricht in Großbuchstaben mit dir.`;
  } else if (hasMajor >= 1) {
    kartenUndElement +=
      `Die Präsenz der Großen Arkana in deiner Legung verrät, dass hier Seelenthemen berührt werden, ` +
      `die über den Alltag hinausreichen — Themen, die dein Leben auf einer tieferen Ebene formen.`;
  }

  // Add dominant minor suit flavor
  const minorSuit = Object.entries(suitCounts)
    .filter(([k]) => k !== "major")
    .sort(([, a], [, b]) => b - a)[0];
  if (minorSuit && minorSuit[1] >= 2 && suitStories[minorSuit[0]]) {
    kartenUndElement +=
      ` Die gehäufte Energie der ${suitNameDe(minorSuit[0])} unterstreicht dein Thema: ${suitStories[minorSuit[0]]}.`;
  }

  absaetze.push(kartenUndElement);

  // ---------------------------------------------------------------------------
  // 3. Element + Archetype connection
  // ---------------------------------------------------------------------------
  absaetze.push(
    `Dass ${dominantElementName} dein führendes Element ist, während ${secondaryElementName} als Gegengewicht wirkt, ` +
    `gibt deinem ${archetypKurz}-Wesen eine ganz besondere Färbung. ` +
    `${getElementArchetypVerbindung(dominantElementName, archetypName)} ` +
    `Diese Kombination macht dich einzigartig — unter tausend Seelen-Profilen findet sich keines, ` +
    `das genau so schwingt wie deines.`
  );

  // ---------------------------------------------------------------------------
  // 4. Shadow/Light woven into the story
  // ---------------------------------------------------------------------------
  absaetze.push(
    `${schattenName} als deine Schatten-Karte und ${lichtName} als deine Licht-Karte offenbaren die Dualität, ` +
    `die in deiner Seele lebt. ` +
    `${getSchattenLichtVerbindung(schattenName, lichtName)} ` +
    `Diese Spannung ist kein Fehler — sie ist der Motor deiner Entwicklung, ` +
    `die Quelle, aus der deine tiefste Transformation fließt.`
  );

  // ---------------------------------------------------------------------------
  // 5. Cosmic coordinates as the backdrop
  // ---------------------------------------------------------------------------
  absaetze.push(
    `${planetName} als dein kosmischer Begleiter verstärkt diese Energie und lenkt sie durch dein ${chakraName}. ` +
    `Dass du unter ${getMondphasenArtikel(mondphaseName)} ${mondphaseName} in dieses Profil eingetreten bist, ` +
    `gibt dem Ganzen eine besondere Dringlichkeit: ` +
    `${getMondphasenBotschaft(mondphaseName)} ` +
    `Dein Planet, dein Chakra und deine Mondphase bilden zusammen die kosmische Bühne, ` +
    `auf der sich deine Seelengeschichte entfaltet.`
  );

  // ---------------------------------------------------------------------------
  // 6. Closing — weaving it all together
  // ---------------------------------------------------------------------------
  absaetze.push(
    `${vorname}, wenn du all das zusammen betrachtest — deine Karten, deinen Archetyp, ` +
    `deine Elemente, dein Schatten-Licht-Paar und deine kosmischen Koordinaten — ` +
    `dann siehst du nicht einzelne Teile, sondern ein lebendiges Ganzes. ` +
    `Du bist ${archetypName}, getragen von ${dominantElementName}, erleuchtet durch ${lichtName}, ` +
    `vertieft durch ${schattenName}. Das ist kein zufälliges Zusammenwürfeln von Symbolen — ` +
    `das ist die Sprache deiner Seele, die endlich gehört werden will.`
  );

  return absaetze;
}

// ---------------------------------------------------------------------------
// Helper: suit name in German
// ---------------------------------------------------------------------------

function suitNameDe(suit: string): string {
  const names: Record<string, string> = {
    staebe: "Stäbe",
    kelche: "Kelche",
    schwerter: "Schwerter",
    muenzen: "Münzen",
  };
  return names[suit] || suit;
}

// ---------------------------------------------------------------------------
// Helper: connect element to archetype narratively
// ---------------------------------------------------------------------------

function getElementArchetypVerbindung(
  element: string,
  archetyp: string
): string {
  const matrix: Record<string, Record<string, string>> = {
    Feuer: {
      default: `Das Feuer in dir befeuert dein ${archetyp}-Wesen mit einer leidenschaftlichen Intensität, die andere in deinen Bann zieht.`,
      "Die Freie Seele": "Das Feuer gibt deiner Freiheitsliebe eine brennende Intensität — du springst nicht nur, du fliegst durch die Flammen der Transformation.",
      "Der Schöpfer": "Als Schöpfer mit Feuer-Dominanz bist du eine wandelnde Schmiede — jede Idee wird in dir zur glühenden Vision, die nur darauf wartet, Form anzunehmen.",
      "Die Seherin": "Feuer und Intuition — eine seltene und machtvolle Kombination. Dein inneres Wissen brennt mit einer Dringlichkeit, die nicht ignoriert werden kann.",
    },
    Wasser: {
      default: `Das Wasser in dir gibt deinem ${archetyp}-Wesen eine tiefe emotionale Resonanz, die alles, was du berührst, mit Seele und Bedeutung erfüllt.`,
      "Die Seherin": "Als Seherin mit Wasser-Dominanz ist deine Intuition ein bodenloser Ozean — du empfängst Wahrheiten aus Tiefen, die andere nicht einmal erahnen.",
      "Die Nährende": "Wasser und Nähren — du bist wie ein fruchtbarer Fluss, der alles zum Blühen bringt, was du berührst. Deine Fürsorge hat eine ozeanische Weite.",
      "Die Freie Seele": "Wasser gibt deiner Freiheit eine fließende Qualität — du umströmst Hindernisse statt sie zu bekämpfen, und findest deinen Weg wie ein Fluss zum Meer.",
    },
    Luft: {
      default: `Die Luft in dir verleiht deinem ${archetyp}-Wesen eine geistige Klarheit und Weitsicht, die verborgene Zusammenhänge sichtbar macht.`,
      "Die Seherin": "Luft und Intuition verbinden Kopf und drittes Auge — du denkst nicht nur klar, du siehst klar, durch alle Schleier hindurch.",
      "Der Schöpfer": "Als Schöpfer mit Luft-Dominanz sind deine Ideen wie der Wind — sie tragen Samen des Neuen in alle Richtungen und befruchten, was sie berühren.",
      "Die Freie Seele": "Luft und Freiheit — du bist der Wind selbst, nicht zu fassen, nicht einzusperren, immer in Bewegung und doch überall zu Hause.",
    },
    Erde: {
      default: `Die Erde in dir gibt deinem ${archetyp}-Wesen eine solide Verwurzelung, die dafür sorgt, dass deine Gaben nicht Theorie bleiben, sondern greifbare Wirklichkeit werden.`,
      "Die Seherin": "Erde und Intuition — dein inneres Wissen ist nicht abstrakt, es ist greifbar und verlässlich wie der Boden unter deinen Füßen.",
      "Der Schöpfer": "Als Schöpfer mit Erd-Dominanz verwandelst du Visionen in Tatsachen. Du baust nicht nur Luftschlösser — du legst Fundamente, die Generationen überdauern.",
      "Die Nährende": "Erde und Nähren — du bist der fruchtbare Boden selbst, in dem alles Wurzeln schlagen und erblühen kann.",
    },
  };

  const elementMap = matrix[element];
  if (!elementMap) return "";
  return elementMap[archetyp] || elementMap.default || "";
}

// ---------------------------------------------------------------------------
// Helper: Shadow/Light narrative connection
// ---------------------------------------------------------------------------

function getSchattenLichtVerbindung(
  schatten: string,
  licht: string
): string {
  // Specific powerful combinations
  const combos: Record<string, string> = {
    "Der Mond|Der Stern":
      "Die Angst und Illusion des Mondes finden ihre Erlösung im klaren Licht des Sterns — dein Weg führt von der Verwirrung zur Hoffnung, vom Nebel zur Klarheit.",
    "Der Teufel|Die Sonne":
      "Die Ketten des Teufels lösen sich im strahlenden Licht der Sonne — wo Abhängigkeit war, wird Freiheit; wo Dunkelheit herrschte, bricht Freude hervor.",
    "Der Turm|Die Welt":
      "Was der Turm zerstört, baut die Welt in vollendeter Form wieder auf — dein Zusammenbruch ist der Durchbruch zur Ganzheit.",
    "Der Tod|Die Sonne":
      "Der Tod als Wandlung, die Sonne als Neugeburt — du stirbst und wirst wiedergeboren, strahlender und lebendiger als zuvor.",
    "Der Mond|Die Kraft":
      "Die Schatten des Mondes werden von der sanften Stärke der Kraft gebändigt — nicht durch Kampf, sondern durch liebevolle Akzeptanz.",
    "Der Gehängte|Der Stern":
      "Das Loslassen des Gehängten führt dich direkt zum heilenden Licht des Sterns — in der Hingabe liegt deine Befreiung.",
    "Der Teufel|Der Stern":
      "Die Verstrickungen des Teufels lösen sich unter dem sanften Licht des Sterns — Hoffnung ist stärker als jede Kette.",
  };

  const key = `${schatten}|${licht}`;
  if (combos[key]) return combos[key];

  // Generic but meaningful connection
  return (
    `${schatten} zeigt dir, welche Themen im Verborgenen wirken und nach Aufmerksamkeit rufen. ` +
    `${licht} hingegen weist dir den Weg nach oben — dorthin, wo dein volles Potenzial auf dich wartet.`
  );
}

// ---------------------------------------------------------------------------
// Helper: Moon phase message
// ---------------------------------------------------------------------------

/** Dative article for moon phase names */
function getMondphasenArtikel(phase: string): string {
  // Feminine: Sichel → "der"
  if (phase.includes("Sichel")) return "der";
  // Everything else is masculine/neuter → "dem"
  return "dem";
}

function getMondphasenBotschaft(phase: string): string {
  const botschaften: Record<string, string> = {
    Neumond:
      "Der Neumond ist die Zeit der Stille vor dem Neubeginn — deine Seele sammelt Kraft für den nächsten großen Schritt.",
    "zunehmende Sichel":
      "Die zunehmende Sichel markiert den Moment, in dem deine Intentionen Form annehmen — das Samenkorn deiner Zukunft hat bereits gekeimt.",
    "erstes Viertel":
      "Das erste Viertel fordert dich zum Handeln auf — die Hälfte des Weges liegt noch vor dir, aber der entscheidende erste Schritt ist getan.",
    "zunehmender Mond":
      "Der zunehmende Mond verstärkt alles, was du begonnen hast — deine Energie wächst, deine Vision wird klarer.",
    Vollmond:
      "Der Vollmond enthüllt alles in seinem vollen Licht — keine Schatten mehr, keine Ausreden. Was du in diesem Moment erkennst, hat die Kraft, alles zu verändern.",
    "abnehmender Mond":
      "Der abnehmende Mond lädt dich ein, loszulassen, was nicht mehr dient — eine Zeit der Dankbarkeit und des bewussten Freigebens.",
    "letztes Viertel":
      "Das letzte Viertel ist die Phase der inneren Bilanz — du schaust zurück, sammelst Weisheit und bereitest dich auf den nächsten Zyklus vor.",
    "abnehmende Sichel":
      "Die abnehmende Sichel flüstert: Ruhe dich aus, lass los, vertraue dem Dunkel. Im Nicht-Tun liegt gerade deine größte Kraft.",
  };

  return botschaften[phase] || "Die Mondphase deines Profils verleiht deiner Reise eine besondere kosmische Qualität.";
}
