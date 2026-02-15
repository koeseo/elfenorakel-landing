import { FadeIn } from "@/components/ui/FadeIn";
import type { Archetyp } from "@/lib/seelen-profil/archetypen";
import { Sparkles, Heart, Briefcase, Eye, Shield } from "lucide-react";

interface ProfilArchetypProps {
  archetyp: Archetyp;
}

const sections = [
  { key: "wesen", title: "Dein Wesen", icon: Eye },
  { key: "staerken", title: "Deine Staerken", icon: Sparkles },
  { key: "schattenSeite", title: "Deine Schatten-Seite", icon: Shield },
  { key: "inBeziehungen", title: "In Beziehungen", icon: Heart },
  { key: "imBeruf", title: "Im Beruf", icon: Briefcase },
] as const;

export const ProfilArchetyp = ({ archetyp }: ProfilArchetypProps) => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
            {archetyp.name} — {archetyp.karteName}
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto">
            Tauche ein in die Tiefe deines Archetyps und entdecke, was dich ausmacht.
          </p>
        </FadeIn>

        {/* Content sections */}
        <div className="space-y-6">
          {sections.map(({ key, title, icon: Icon }, index) => (
            <FadeIn key={key} delay={index * 0.1}>
              <div className="glass-card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[var(--gold)]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-[var(--text-primary)]">
                    {title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg">
                  {archetyp[key]}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Elfi's personal message */}
        <FadeIn delay={0.5} className="mt-8">
          <div className="glass-card p-6 md:p-8 border-[var(--gold)]/30" style={{ borderColor: "rgba(201, 163, 92, 0.3)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg font-bold">E</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--gold-light)]">
                  Elfis Botschaft an dich
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Persoenlich fuer dich
                </p>
              </div>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg italic">
              &ldquo;{archetyp.elfiBotschaft}&rdquo;
            </p>
          </div>
        </FadeIn>

        {/* Affirmation */}
        <FadeIn delay={0.6} className="mt-12">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)] mb-4">
              Deine Affirmation
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-gold italic leading-snug max-w-3xl mx-auto">
              &ldquo;{archetyp.affirmation}&rdquo;
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
