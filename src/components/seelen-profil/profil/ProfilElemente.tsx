import { FadeIn } from "@/components/ui/FadeIn";
import { ElementChart } from "./ElementChart";
import type { ElementInfo } from "@/lib/seelen-profil/elemente";

interface ProfilElementeProps {
  signatur: {
    feuer: number;
    wasser: number;
    luft: number;
    erde: number;
  };
  dominantElement: ElementInfo;
  secondaryElement: ElementInfo;
  kombinationText: string | null;
}

export const ProfilElemente = ({
  signatur,
  dominantElement,
  secondaryElement,
  kombinationText,
}: ProfilElementeProps) => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
            Deine Element-Signatur
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto">
            Die vier Elemente — Feuer, Wasser, Luft und Erde — formen dein einzigartiges energetisches Profil.
          </p>
        </FadeIn>

        {/* Element chart */}
        <FadeIn delay={0.1}>
          <div className="glass-card p-6 md:p-8 mb-8">
            <ElementChart signatur={signatur} />
          </div>
        </FadeIn>

        {/* Dominant element explanation */}
        <FadeIn delay={0.2}>
          <div
            className="glass-card p-6 md:p-8 mb-6"
            style={{ borderColor: `${dominantElement.farbe}33` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{dominantElement.symbol}</span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  Dominantes Element
                </p>
                <h3
                  className="text-xl font-bold"
                  style={{ color: dominantElement.farbe }}
                >
                  {dominantElement.name}
                </h3>
              </div>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg">
              {dominantElement.beschreibung}
            </p>
          </div>
        </FadeIn>

        {/* Secondary element interaction */}
        {kombinationText && (
          <FadeIn delay={0.3}>
            <div
              className="glass-card p-6 md:p-8"
              style={{ borderColor: `${secondaryElement.farbe}22` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center -space-x-2">
                  <span className="text-2xl">{dominantElement.symbol}</span>
                  <span className="text-lg opacity-50">+</span>
                  <span className="text-2xl">{secondaryElement.symbol}</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    Element-Wechselwirkung
                  </p>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {dominantElement.name} & {secondaryElement.name}
                  </h3>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg">
                {kombinationText}
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};
