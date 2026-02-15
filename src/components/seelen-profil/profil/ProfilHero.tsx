import { FadeIn } from "@/components/ui/FadeIn";
import type { Archetyp } from "@/lib/seelen-profil/archetypen";
import type { ElementInfo } from "@/lib/seelen-profil/elemente";

interface ProfilHeroProps {
  vorname: string;
  archetyp: Archetyp;
  dominantElement: ElementInfo;
}

export const ProfilHero = ({
  vorname,
  archetyp,
  dominantElement,
}: ProfilHeroProps) => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center py-16 md:py-24 px-4 overflow-hidden">
      {/* Background glow based on dominant element */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          background: `radial-gradient(ellipse at center, ${dominantElement.farbe}33 0%, transparent 60%)`,
        }}
      />

      {/* Decorative circles */}
      <div
        className="mystical-circle mystical-circle-outer"
        style={{
          width: "600px",
          height: "600px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="mystical-circle mystical-circle-middle"
        style={{
          width: "450px",
          height: "450px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Content */}
      <FadeIn className="text-center">
        {/* Small intro text */}
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-4">
          {vorname}, du bist:
        </p>
      </FadeIn>

      {/* Archetype card image */}
      <FadeIn delay={0.2} className="relative mb-8">
        <div className="relative">
          {/* Glow behind card */}
          <div
            className="absolute inset-0 -z-10 blur-[60px] opacity-40 scale-110"
            style={{
              background: `radial-gradient(circle, ${dominantElement.farbe}, var(--gold), transparent)`,
            }}
          />
          <div className="w-48 h-72 md:w-56 md:h-84 lg:w-64 lg:h-96 rounded-2xl overflow-hidden border-2 border-[var(--gold)] shadow-[0_0_60px_rgba(201,163,92,0.3)] mx-auto glow-pulse">
            <img
              src={archetyp.image}
              alt={archetyp.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </FadeIn>

      {/* Archetype name */}
      <FadeIn delay={0.4} className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient-gold mb-4 leading-tight">
          {archetyp.name}
        </h1>
      </FadeIn>

      {/* Claim */}
      <FadeIn delay={0.6} className="text-center max-w-2xl">
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
          {archetyp.claim}
        </p>
      </FadeIn>

      {/* Scroll indicator */}
      <FadeIn delay={1} className="absolute bottom-8">
        <div className="flex flex-col items-center gap-2 text-[var(--text-muted)]">
          <span className="text-xs uppercase tracking-widest">Entdecke dein Profil</span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--gold)] to-transparent" />
        </div>
      </FadeIn>
    </section>
  );
};
