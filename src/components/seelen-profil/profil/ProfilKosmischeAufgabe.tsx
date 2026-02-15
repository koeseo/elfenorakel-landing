import { FadeIn } from "@/components/ui/FadeIn";
import type { KosmischeAufgabeContent } from "@/lib/seelen-profil/kosmische-aufgabe";
import { Compass } from "lucide-react";

interface ProfilKosmischeAufgabeProps {
  aufgabe: KosmischeAufgabeContent;
}

export const ProfilKosmischeAufgabe = ({
  aufgabe,
}: ProfilKosmischeAufgabeProps) => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--gold) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center">
        {/* Icon */}
        <FadeIn>
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
            <Compass className="w-8 h-8 text-[var(--gold)]" />
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-4">
            Deine Kosmische Aufgabe
          </h2>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-[var(--teal-light)] font-medium mb-8">
            {aufgabe.titel}
          </p>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.3}>
          <div className="glass-card p-8 md:p-10">
            <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
              {aufgabe.beschreibung}
            </p>
          </div>
        </FadeIn>

        {/* Decorative gold line */}
        <FadeIn delay={0.4}>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-[var(--gold)]/30" />
            <div className="w-2 h-2 rounded-full bg-[var(--gold)]/50" />
            <div className="w-12 h-px bg-[var(--gold)]/30" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
