import { FadeIn } from "@/components/ui/FadeIn";
import type { JahresEnergieContent } from "@/lib/seelen-profil/jahres-energie";
import { Sparkles, Zap } from "lucide-react";

interface ProfilJahresEnergieProps {
  jahresEnergie: JahresEnergieContent;
  jahr: number;
}

export const ProfilJahresEnergie = ({
  jahresEnergie,
  jahr,
}: ProfilJahresEnergieProps) => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section heading */}
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--teal)]/10 border border-[var(--teal)]/20 mb-6">
            <Zap className="w-4 h-4 text-[var(--teal)]" />
            <span className="text-sm text-[var(--teal-light)] font-medium">
              Jahresprognose
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
            Deine Energie fuer {jahr}
          </h2>
        </FadeIn>

        {/* Energy card */}
        <FadeIn delay={0.1}>
          <div className="glass-card p-6 md:p-8 mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-[var(--gold-light)] mb-4">
              {jahresEnergie.titel}
            </h3>
            <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
              {jahresEnergie.beschreibung}
            </p>
          </div>
        </FadeIn>

        {/* Impulses */}
        <FadeIn delay={0.2}>
          <div className="glass-card p-6 md:p-8">
            <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-6">
              Deine 3 Impulse fuer dieses Jahr
            </h4>
            <ul className="space-y-4">
              {jahresEnergie.impulse.map((impuls, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-[var(--gold)]" />
                  </div>
                  <p className="text-[var(--text-secondary)] text-base md:text-lg">
                    {impuls}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Note */}
        <FadeIn delay={0.3}>
          <p className="text-center text-sm text-[var(--text-muted)] mt-8 italic">
            Komm {jahr + 1} wieder fuer deine neue Jahresenergie
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
