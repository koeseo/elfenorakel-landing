import { FadeIn } from "@/components/ui/FadeIn";
import type { PlanetInfo } from "@/lib/seelen-profil/planeten";
import type { ChakraInfo } from "@/lib/seelen-profil/chakras";
import type { MondphasenContent } from "@/lib/seelen-profil/mondphasen-content";
import { Sparkles } from "lucide-react";

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
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
            Deine Kosmischen Koordinaten
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto">
            Drei kosmische Kräfte formen dein Wesen — deine Mondphase bestimmt deinen Seelenrhythmus,
            dein Planet lenkt deine Lebensenergie, und dein Chakra offenbart dein spirituelles Zentrum.
          </p>
        </FadeIn>

        {/* ═══════════════ MONDPHASE ═══════════════ */}
        <FadeIn delay={0.1} className="mb-16">
          <div className="glass-card p-8 md:p-10 relative overflow-hidden">
            {/* Subtle moon glow background */}
            <div
              className="absolute top-0 right-0 w-64 h-64 -z-0 opacity-10 blur-[80px]"
              style={{ background: "radial-gradient(circle, rgba(200,200,220,0.8), transparent)" }}
            />

            <div className="relative z-10">
              {/* Header with moon emoji */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
                  style={{
                    background: "radial-gradient(circle, rgba(200, 200, 220, 0.15), transparent)",
                    boxShadow: "0 0 40px rgba(200, 200, 220, 0.1)",
                  }}
                >
                  {getMoonEmoji(mondphase.phase)}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-1">
                    Deine Mondphase
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                    {mondphase.name}
                  </h3>
                  <p className="text-sm font-medium text-[var(--teal)]">
                    {mondphase.seelenzyklus} &middot; {mondphase.energie}
                  </p>
                </div>
              </div>

              {/* Description - show full rich text with paragraphs */}
              <div className="mb-8">
                {mondphase.beschreibung.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Ritual */}
              <div className="pt-6 border-t border-[var(--glass-border)]">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[var(--teal)]" />
                  <h4 className="text-sm uppercase tracking-[0.15em] font-semibold text-[var(--teal-light)]">
                    Dein Mondritual
                  </h4>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base italic">
                  {mondphase.ritual}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ═══════════════ PLANET ═══════════════ */}
        <FadeIn delay={0.2} className="mb-16">
          <div className="glass-card p-8 md:p-10 relative overflow-hidden">
            {/* Planet glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 -z-0 opacity-10 blur-[80px]"
              style={{ background: "radial-gradient(circle, rgba(201,163,92,0.8), transparent)" }}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
                  style={{
                    background: "radial-gradient(circle, rgba(201, 163, 92, 0.15), transparent)",
                    boxShadow: "0 0 40px rgba(201, 163, 92, 0.1)",
                  }}
                >
                  <span className="text-[var(--gold-light)]">{planet.symbol}</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-1">
                    Dein herrschender Planet
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                    {planet.name}
                  </h3>
                  <p className="text-sm font-medium text-[var(--gold)]">
                    {planet.energie}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                {planet.beschreibung.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Planet Botschaft (personal message from the planet) */}
              {planet.botschaft && (
                <div className="mb-6 glass-card p-6" style={{ borderColor: "rgba(201,163,92,0.2)" }}>
                  <p className="text-xs uppercase tracking-[0.15em] text-[var(--gold)] mb-2 font-semibold">
                    Botschaft von {planet.name}
                  </p>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base italic">
                    &ldquo;{planet.botschaft}&rdquo;
                  </p>
                </div>
              )}

              {/* Planet Ritual */}
              {planet.ritual && (
                <div className="pt-6 border-t border-[var(--glass-border)]">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-[var(--gold)]" />
                    <h4 className="text-sm uppercase tracking-[0.15em] font-semibold text-[var(--gold-light)]">
                      Planetarisches Ritual
                    </h4>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base italic">
                    {planet.ritual}
                  </p>
                </div>
              )}
            </div>
          </div>
        </FadeIn>

        {/* ═══════════════ CHAKRA ═══════════════ */}
        <FadeIn delay={0.3}>
          <div className="glass-card p-8 md:p-10 relative overflow-hidden">
            {/* Chakra color glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 -z-0 opacity-10 blur-[80px]"
              style={{ background: `radial-gradient(circle, ${chakra.farbe}, transparent)` }}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `radial-gradient(circle, ${chakra.farbe}25, transparent)`,
                    boxShadow: `0 0 40px ${chakra.farbe}15`,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${chakra.farbe}, ${chakra.farbe}88)`,
                      boxShadow: `0 0 20px ${chakra.farbe}44`,
                    }}
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-1">
                    Dein aktives Chakra
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                    {chakra.name}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: chakra.farbe }}>
                    {chakra.thema} &middot; {chakra.position}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                {chakra.beschreibung.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Blockade & Heilung side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="glass-card p-5" style={{ borderColor: `${chakra.farbe}22` }}>
                  <p className="text-xs uppercase tracking-[0.15em] font-semibold mb-2" style={{ color: chakra.farbe }}>
                    Wenn blockiert
                  </p>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {chakra.blockade}
                  </p>
                </div>
                <div className="glass-card p-5" style={{ borderColor: `${chakra.farbe}22` }}>
                  <p className="text-xs uppercase tracking-[0.15em] font-semibold mb-2" style={{ color: chakra.farbe }}>
                    Heilung & Balance
                  </p>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {chakra.heilung}
                  </p>
                </div>
              </div>

              {/* Meditation */}
              <div className="mb-6 glass-card p-6" style={{ borderColor: `${chakra.farbe}22` }}>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4" style={{ color: chakra.farbe }} />
                  <h4 className="text-sm uppercase tracking-[0.15em] font-semibold" style={{ color: chakra.farbe }}>
                    Chakra-Meditation
                  </h4>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base italic">
                  {chakra.meditation}
                </p>
              </div>

              {/* Affirmation */}
              <div className="text-center pt-6 border-t border-[var(--glass-border)]">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-3">
                  Chakra-Affirmation
                </p>
                <p
                  className="text-lg md:text-xl font-semibold italic"
                  style={{ color: chakra.farbe }}
                >
                  &ldquo;{chakra.affirmation}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
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
