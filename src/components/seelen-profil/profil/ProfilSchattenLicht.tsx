import { FadeIn } from "@/components/ui/FadeIn";
import { Moon, Sun } from "lucide-react";

interface ProfilSchattenLichtProps {
  schattenKarte: string;
  lichtKarte: string;
  schattenDeutung?: string;
  lichtDeutung?: string;
}

export const ProfilSchattenLicht = ({
  schattenKarte,
  lichtKarte,
  schattenDeutung,
  lichtDeutung,
}: ProfilSchattenLichtProps) => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
            Schatten & Licht
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto">
            Jede Seele trägt Schatten und Licht in sich. Diese beiden Karten spiegeln deine
            verborgenen Tiefen und dein strahlendes Potenzial wider — zwei Seiten derselben
            kostbaren Münze.
          </p>
        </FadeIn>

        {/* Two cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shadow card */}
          <FadeIn delay={0.1}>
            <div
              className="glass-card p-6 md:p-8 h-full relative overflow-hidden"
              style={{ borderColor: "rgba(139, 92, 246, 0.2)" }}
            >
              {/* Subtle purple glow */}
              <div
                className="absolute top-0 left-0 w-full h-48 -z-0 opacity-10"
                style={{ background: "linear-gradient(to bottom, rgba(139,92,246,0.3), transparent)" }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Moon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-300">
                      Deine Schatten-Karte
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      Was im Verborgenen wirkt
                    </p>
                  </div>
                </div>

                {/* Card image */}
                <div className="relative mb-6 flex justify-center">
                  <div
                    className="absolute inset-0 -z-10 blur-[40px] opacity-20"
                    style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }}
                  />
                  <div className="w-36 h-52 md:w-40 md:h-60 rounded-xl overflow-hidden border border-purple-500/30 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                    <img
                      src={`/cards/tarot/${schattenKarte}.webp`}
                      alt="Schatten-Karte"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Card name */}
                <p className="text-center text-lg font-semibold text-purple-300 mb-4">
                  {formatKartenName(schattenKarte)}
                </p>

                {/* Interpretation */}
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
                  {schattenDeutung || (
                    <>
                      Die <span className="text-purple-300 font-medium">{formatKartenName(schattenKarte)}</span> als
                      deine Schatten-Karte zeigt die Themen, die in deinem Unbewussten wirken. Sie lädt dich ein,
                      diese verborgenen Aspekte liebevoll anzuschauen und zu integrieren. In deinem Schatten liegt
                      ungenutztes Potenzial, das darauf wartet, ans Licht gebracht zu werden.
                    </>
                  )}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Light card */}
          <FadeIn delay={0.2}>
            <div
              className="glass-card p-6 md:p-8 h-full relative overflow-hidden"
              style={{ borderColor: "rgba(201, 163, 92, 0.2)" }}
            >
              {/* Subtle gold glow */}
              <div
                className="absolute top-0 left-0 w-full h-48 -z-0 opacity-10"
                style={{ background: "linear-gradient(to bottom, rgba(201,163,92,0.3), transparent)" }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0">
                    <Sun className="w-6 h-6 text-[var(--gold-light)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--gold-light)]">
                      Deine Licht-Karte
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      Dein strahlendes Potenzial
                    </p>
                  </div>
                </div>

                {/* Card image */}
                <div className="relative mb-6 flex justify-center">
                  <div
                    className="absolute inset-0 -z-10 blur-[40px] opacity-20"
                    style={{ background: "radial-gradient(circle, var(--gold), transparent)" }}
                  />
                  <div className="w-36 h-52 md:w-40 md:h-60 rounded-xl overflow-hidden border border-[var(--gold)]/30 shadow-[0_0_30px_rgba(201,163,92,0.2)]">
                    <img
                      src={`/cards/tarot/${lichtKarte}.webp`}
                      alt="Licht-Karte"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Card name */}
                <p className="text-center text-lg font-semibold text-[var(--gold-light)] mb-4">
                  {formatKartenName(lichtKarte)}
                </p>

                {/* Interpretation */}
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
                  {lichtDeutung || (
                    <>
                      Die <span className="text-[var(--gold-light)] font-medium">{formatKartenName(lichtKarte)}</span> als
                      deine Licht-Karte repräsentiert dein strahlendes Potenzial und deine höchsten Gaben.
                      Sie zeigt dir den Weg zu deiner vollen Entfaltung und erinnert dich an die Kraft,
                      die du in die Welt tragen darfst.
                    </>
                  )}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

/** Convert a card slug like "narr" or "staebe-fuenf" to a readable name */
function formatKartenName(slug: string): string {
  const majorNames: Record<string, string> = {
    narr: "Der Narr",
    magier: "Der Magier",
    hohepriesterin: "Die Hohepriesterin",
    herrscherin: "Die Herrscherin",
    herrscher: "Der Herrscher",
    hierophant: "Der Hierophant",
    liebenden: "Die Liebenden",
    wagen: "Der Wagen",
    kraft: "Die Kraft",
    eremit: "Der Eremit",
    schicksal: "Rad des Schicksals",
    gerechtigkeit: "Gerechtigkeit",
    gehaengte: "Der Gehängte",
    tod: "Der Tod",
    maessigung: "Mäßigung",
    teufel: "Der Teufel",
    turm: "Der Turm",
    stern: "Der Stern",
    mond: "Der Mond",
    sonne: "Die Sonne",
    gericht: "Das Gericht",
    welt: "Die Welt",
  };

  if (majorNames[slug]) return majorNames[slug];

  // Minor Arcana: "staebe-fuenf" -> "Fünf der Stäbe"
  const suitNames: Record<string, string> = {
    staebe: "Stäbe",
    kelche: "Kelche",
    schwerter: "Schwerter",
    muenzen: "Münzen",
  };
  const numberNames: Record<string, string> = {
    ass: "Ass",
    zwei: "Zwei",
    drei: "Drei",
    vier: "Vier",
    fuenf: "Fünf",
    sechs: "Sechs",
    sieben: "Sieben",
    acht: "Acht",
    neun: "Neun",
    zehn: "Zehn",
    bube: "Bube",
    ritter: "Ritter",
    koenigin: "Königin",
    koenig: "König",
  };

  const parts = slug.split("-");
  if (parts.length === 2) {
    const suit = suitNames[parts[0]];
    const number = numberNames[parts[1]];
    if (suit && number) return `${number} der ${suit}`;
  }

  // Fallback
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}
