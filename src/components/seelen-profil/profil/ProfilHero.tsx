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
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center py-16 md:py-24 px-4 overflow-hidden">
      {/* Multi-layered background glow based on dominant element */}
      <div
        className="absolute inset-0 -z-10 opacity-15"
        style={{
          background: `radial-gradient(ellipse at center 40%, ${dominantElement.farbe}44 0%, transparent 50%)`,
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          background: `radial-gradient(ellipse at 30% 70%, var(--gold)33 0%, transparent 40%)`,
        }}
      />

      {/* Decorative circles */}
      <div
        className="mystical-circle mystical-circle-outer"
        style={{
          width: "700px",
          height: "700px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="mystical-circle mystical-circle-middle"
        style={{
          width: "520px",
          height: "520px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="mystical-circle mystical-circle-inner"
        style={{
          width: "380px",
          height: "380px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Content */}
      <FadeIn className="text-center">
        {/* Small intro text */}
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-2">
          Dein Seelen-Profil
        </p>
        <p className="text-lg md:text-xl text-[var(--teal-light)] font-medium mb-6">
          {vorname}, du bist:
        </p>
      </FadeIn>

      {/* Archetype card image */}
      <FadeIn delay={0.3} className="relative mb-10">
        <div className="relative">
          {/* Glow behind card */}
          <div
            className="absolute inset-0 -z-10 blur-[80px] opacity-50 scale-125"
            style={{
              background: `radial-gradient(circle, ${dominantElement.farbe}88, var(--gold)44, transparent)`,
            }}
          />
          <div className="w-52 h-78 md:w-60 md:h-90 lg:w-72 lg:h-108 rounded-2xl overflow-hidden border-2 border-[var(--gold)] shadow-[0_0_80px_rgba(201,163,92,0.4)] mx-auto glow-pulse">
            <img
              src={archetyp.image}
              alt={archetyp.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </FadeIn>

      {/* Archetype name */}
      <FadeIn delay={0.5} className="text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-gold mb-6 leading-tight">
          {archetyp.name}
        </h1>
      </FadeIn>

      {/* Traditional card name */}
      <FadeIn delay={0.6} className="text-center">
        <p className="text-sm md:text-base uppercase tracking-[0.25em] text-[var(--gold)] mb-6">
          {archetyp.karteName}
        </p>
      </FadeIn>

      {/* Claim */}
      <FadeIn delay={0.7} className="text-center max-w-2xl">
        <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed italic">
          &ldquo;{archetyp.claim}&rdquo;
        </p>
      </FadeIn>

      {/* Element + Planet + Chakra badges */}
      <FadeIn delay={0.9} className="mt-10">
        <div className="flex flex-wrap justify-center gap-3">
          <span
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border"
            style={{
              color: dominantElement.farbe,
              borderColor: `${dominantElement.farbe}33`,
              background: `${dominantElement.farbe}11`,
            }}
          >
            {dominantElement.symbol} {dominantElement.name}
          </span>
        </div>
      </FadeIn>

      {/* Scroll indicator */}
      <FadeIn delay={1.2} className="absolute bottom-8">
        <div className="flex flex-col items-center gap-2 text-[var(--text-muted)]">
          <span className="text-xs uppercase tracking-widest">Entdecke dein Profil</span>
          <div className="w-px h-10 bg-gradient-to-b from-[var(--gold)] to-transparent" />
        </div>
      </FadeIn>
    </section>
  );
};
