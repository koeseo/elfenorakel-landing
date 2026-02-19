import { FadeIn } from "@/components/ui/FadeIn";
import type { KosmischeAufgabeContent } from "@/lib/seelen-profil/kosmische-aufgabe";
import { Compass, Sparkles } from "lucide-react";

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

      <div className="max-w-3xl mx-auto">
        {/* Icon */}
        <FadeIn className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--gold)]/10 flex items-center justify-center glow-pulse">
            <Compass className="w-8 h-8 text-[var(--gold)]" />
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-4 text-center">
            Deine Kosmische Aufgabe
          </h2>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-[var(--teal-light)] font-medium mb-8 text-center">
            {aufgabe.titel}
          </p>
        </FadeIn>

        {/* Description - multi-paragraph */}
        <FadeIn delay={0.3}>
          <div className="glass-card p-8 md:p-10">
            {aufgabe.beschreibung.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>

        {/* Meditation */}
        {aufgabe.meditation && (
          <FadeIn delay={0.4}>
            <div className="glass-card p-6 md:p-8 mt-6" style={{ borderColor: "rgba(201,163,92,0.2)" }}>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[var(--gold)]" />
                <h4 className="text-sm uppercase tracking-[0.15em] font-semibold text-[var(--gold-light)]">
                  Meditation zu deiner Kosmischen Aufgabe
                </h4>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base italic">
                {aufgabe.meditation}
              </p>
            </div>
          </FadeIn>
        )}

        {/* Decorative gold line */}
        <FadeIn delay={0.5}>
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
