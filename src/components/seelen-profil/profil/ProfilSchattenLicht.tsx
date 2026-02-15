import { FadeIn } from "@/components/ui/FadeIn";
import { Moon, Sun } from "lucide-react";

interface ProfilSchattenLichtProps {
  schattenKarte: string;
  lichtKarte: string;
}

export const ProfilSchattenLicht = ({
  schattenKarte,
  lichtKarte,
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
            Jede Seele trägt Schatten und Licht in sich. Diese beiden Karten spiegeln deine verborgenen Seiten wider.
          </p>
        </FadeIn>

        {/* Two cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shadow card */}
          <FadeIn delay={0.1}>
            <div
              className="glass-card p-6 md:p-8 h-full"
              style={{ borderColor: "rgba(139, 92, 246, 0.2)" }}
            >
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
                <div className="w-32 h-48 md:w-36 md:h-52 rounded-xl overflow-hidden border border-purple-500/30 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                  <img
                    src={`/cards/tarot/${schattenKarte}.webp`}
                    alt="Schatten-Karte"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
                Die <span className="text-purple-300 font-medium">{formatKartenName(schattenKarte)}</span> als
                deine Schatten-Karte zeigt die Themen, die in deinem Unbewussten wirken. Sie lädt dich ein,
                diese verborgenen Aspekte liebevoll anzuschauen und zu integrieren. In deinem Schatten liegt
                ungenutztes Potenzial, das darauf wartet, ans Licht gebracht zu werden.
              </p>
            </div>
          </FadeIn>

          {/* Light card */}
          <FadeIn delay={0.2}>
            <div
              className="glass-card p-6 md:p-8 h-full"
              style={{ borderColor: "rgba(201, 163, 92, 0.2)" }}
            >
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
                <div className="w-32 h-48 md:w-36 md:h-52 rounded-xl overflow-hidden border border-[var(--gold)]/30 shadow-[0_0_30px_rgba(201,163,92,0.2)]">
                  <img
                    src={`/cards/tarot/${lichtKarte}.webp`}
                    alt="Licht-Karte"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
                Die <span className="text-[var(--gold-light)] font-medium">{formatKartenName(lichtKarte)}</span> als
                deine Licht-Karte repräsentiert dein strahlendes Potenzial und deine höchsten Gaben.
                Sie zeigt dir den Weg zu deiner vollen Entfaltung und erinnert dich an die Kraft,
                die du in die Welt tragen darfst.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

/** Convert a card slug like "major-01-magier" to "Der Magier" style name */
function formatKartenName(slug: string): string {
  // Remove prefix like "major-01-" or "staebe-02-"
  const parts = slug.split("-");
  if (parts.length >= 3) {
    const name = parts.slice(2).join("-");
    // Capitalize first letter
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  return slug;
}
