import { FadeIn } from "@/components/ui/FadeIn";
import type { PlanetInfo } from "@/lib/seelen-profil/planeten";
import type { ChakraInfo } from "@/lib/seelen-profil/chakras";
import type { MondphasenContent } from "@/lib/seelen-profil/mondphasen-content";

interface ProfilKosmischeKoordinatenProps {
  mondphase: MondphasenContent;
  planet: PlanetInfo;
  chakra: ChakraInfo;
}

export const ProfilKosmischeKoordinaten = ({
  mondphase,
  planet,
  chakra,
}: ProfilKosmischeKoordinatenProps) => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
            Deine Kosmischen Koordinaten
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto">
            Mondphase, Planet und Chakra — die kosmischen Kräfte, die dein Wesen formen.
          </p>
        </FadeIn>

        {/* Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Moon Phase */}
          <FadeIn delay={0.1}>
            <div className="glass-card p-6 md:p-8 h-full text-center">
              {/* Moon illustration */}
              <div className="mb-4">
                <div
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl"
                  style={{
                    background: "radial-gradient(circle, rgba(200, 200, 220, 0.15), transparent)",
                    boxShadow: "0 0 40px rgba(200, 200, 220, 0.1)",
                  }}
                >
                  {getMoonEmoji(mondphase.phase)}
                </div>
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-1">
                Mondphase
              </p>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                {mondphase.name}
              </h3>
              <p className="text-sm font-medium text-[var(--teal)] mb-4">
                {mondphase.seelenzyklus}
              </p>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                {mondphase.beschreibung}
              </p>
              <div className="pt-3 border-t border-[var(--glass-border)]">
                <p className="text-xs text-[var(--text-muted)] mb-1">Energie</p>
                <p className="text-sm text-[var(--teal-light)]">{mondphase.energie}</p>
              </div>
            </div>
          </FadeIn>

          {/* Planet */}
          <FadeIn delay={0.2}>
            <div className="glass-card p-6 md:p-8 h-full text-center">
              {/* Planet symbol */}
              <div className="mb-4">
                <div
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl"
                  style={{
                    background: "radial-gradient(circle, rgba(201, 163, 92, 0.15), transparent)",
                    boxShadow: "0 0 40px rgba(201, 163, 92, 0.1)",
                  }}
                >
                  <span className="text-[var(--gold-light)]">{planet.symbol}</span>
                </div>
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-1">
                Herrschender Planet
              </p>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                {planet.name}
              </h3>
              <p className="text-sm font-medium text-[var(--gold)] mb-4">
                {planet.energie}
              </p>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {planet.beschreibung}
              </p>
            </div>
          </FadeIn>

          {/* Chakra */}
          <FadeIn delay={0.3}>
            <div className="glass-card p-6 md:p-8 h-full text-center">
              {/* Chakra color indicator */}
              <div className="mb-4">
                <div
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center"
                  style={{
                    background: `radial-gradient(circle, ${chakra.farbe}25, transparent)`,
                    boxShadow: `0 0 40px ${chakra.farbe}15`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${chakra.farbe}, ${chakra.farbe}88)`,
                      boxShadow: `0 0 20px ${chakra.farbe}44`,
                    }}
                  />
                </div>
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-1">
                Aktives Chakra
              </p>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                {chakra.name}
              </h3>
              <p className="text-sm font-medium mb-4" style={{ color: chakra.farbe }}>
                {chakra.thema}
              </p>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                {chakra.beschreibung}
              </p>
              <div className="pt-3 border-t border-[var(--glass-border)]">
                <p className="text-xs text-[var(--text-muted)] mb-1">Position</p>
                <p className="text-sm text-[var(--text-secondary)]">{chakra.position}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

function getMoonEmoji(phase: string): string {
  const map: Record<string, string> = {
    neumond: "\uD83C\uDF11",
    zunehmende_sichel: "\uD83C\uDF12",
    erstes_viertel: "\uD83C\uDF13",
    zunehmender_mond: "\uD83C\uDF14",
    vollmond: "\uD83C\uDF15",
    abnehmender_mond: "\uD83C\uDF16",
    letztes_viertel: "\uD83C\uDF17",
    abnehmende_sichel: "\uD83C\uDF18",
  };
  return map[phase] || "\uD83C\uDF15";
}
