"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Zap, Heart, Star, Shield, Smartphone, Youtube, Play } from "lucide-react";
import { Button } from "@/components/ui";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const appFeatures = [
  {
    icon: Sparkles,
    title: "Video-Readings",
    description: "Persönliche Video-Interpretationen nur für dich",
    color: "var(--gold)",
  },
  {
    icon: Zap,
    title: "Wöchentliche Updates",
    description: "Neue Readings jede Woche auf YouTube & TikTok",
    color: "var(--teal)",
  },
  {
    icon: Heart,
    title: "Ehrliche Botschaften",
    description: "Keine Schönfärberei – die Wahrheit, die du brauchst",
    color: "#F472B6",
  },
  {
    icon: Star,
    title: "Alle Sternzeichen",
    description: "Individuelle Readings für jedes Sternzeichen",
    color: "#FBBF24",
  },
  {
    icon: Shield,
    title: "Kosmische Gesetze",
    description: "Spirituelle Weisheit für deinen Lebensweg",
    color: "#8B5CF6",
  },
  {
    icon: Smartphone,
    title: "Überall verfügbar",
    description: "Schau Readings wann und wo du willst",
    color: "#22D3EE",
  },
];

export const AppShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const section = sectionRef.current;
    const phone = phoneRef.current;
    const features = featuresRef.current;
    const title = titleRef.current;

    if (!section || !phone || !features || !title) return;

    // Create GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        title,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // Phone animation - float in and scale
      gsap.fromTo(
        phone,
        { opacity: 0, scale: 0.8, y: 100, rotateY: -15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateY: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // Feature cards stagger animation
      const featureCards = features.querySelectorAll(".feature-card");
      gsap.fromTo(
        featureCards,
        { opacity: 0, x: 50, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: features,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      // Parallax effect on scroll
      gsap.to(phone, {
        y: -30,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[var(--gold)]" />
            <span className="text-[var(--gold)] text-sm uppercase tracking-widest">
              Dein 11. Oracle
            </span>
            <Sparkles className="w-5 h-5 text-[var(--gold)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            Readings mit Elfi
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Dein Portal zu tiefem Wissen, ehrlichen Botschaften und persönlicher Transformation –
            auf YouTube und TikTok.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Preview Mockup */}
          <div
            ref={phoneRef}
            className="relative mx-auto lg:mx-0"
            style={{ perspective: "1000px" }}
          >
            <div className="relative w-[320px] md:w-[380px] mx-auto">
              {/* Video Frame */}
              <div className="relative bg-[var(--bg-card)] rounded-2xl p-3 shadow-2xl border border-[var(--glass-border)]">
                {/* Screen */}
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-[var(--bg-secondary)]">
                  {/* Cosmic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-card)] via-transparent to-[var(--bg-card)]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 via-transparent to-[var(--teal)]/5" />

                  {/* Star dots decoration */}
                  <div className="absolute inset-0">
                    <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-[var(--gold-light)] rounded-full opacity-40" />
                    <div className="absolute top-[25%] right-[25%] w-1.5 h-1.5 bg-[var(--teal)] rounded-full opacity-30" />
                    <div className="absolute top-[45%] left-[15%] w-1 h-1 bg-[var(--gold)] rounded-full opacity-50" />
                    <div className="absolute bottom-[35%] right-[18%] w-1 h-1 bg-[var(--teal-light)] rounded-full opacity-35" />
                    <div className="absolute bottom-[20%] left-[30%] w-1.5 h-1.5 bg-[var(--gold-light)] rounded-full opacity-25" />
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* "Nächstes Video" label */}
                    <span className="text-[var(--text-muted)] text-xs uppercase tracking-widest mb-6">
                      Nächstes Video
                    </span>

                    {/* Play Button with gold glow ring */}
                    <div className="relative mb-8">
                      <div className="absolute -inset-3 rounded-full border border-[var(--gold)]/30 animate-pulse-glow" />
                      <div className="w-20 h-20 rounded-full bg-[var(--gold)]/20 flex items-center justify-center glow-pulse border border-[var(--gold)]/40">
                        <Play className="w-10 h-10 text-[var(--gold)] ml-1" />
                      </div>
                    </div>

                    <div className="text-center px-6">
                      <p className="text-[var(--gold)] text-lg font-bold mb-1">
                        Wochenreading
                      </p>
                      <p className="text-[var(--text-secondary)] text-sm mb-2">
                        Deine Botschaften für diese Woche
                      </p>
                      <p className="text-[var(--text-muted)] text-xs">
                        12:34 · Elfi Christina
                      </p>
                    </div>

                    {/* YouTube / TikTok Indicators */}
                    <div className="mt-8 flex gap-3">
                      <div className="flex items-center gap-2 px-4 py-2 bg-[#FF0000]/10 rounded-full border border-[#FF0000]/20">
                        <Youtube className="w-4 h-4 text-[#FF0000]" />
                        <span className="text-[var(--text-secondary)] text-xs">YouTube</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-[var(--text-primary)]/5 rounded-full border border-[var(--glass-border)]">
                        <Sparkles className="w-4 h-4 text-[var(--text-primary)]" />
                        <span className="text-[var(--text-secondary)] text-xs">TikTok</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--gold)]/20 via-[var(--teal)]/20 to-[var(--gold)]/20 rounded-3xl blur-xl -z-10" />
            </div>
          </div>

          {/* Features Grid */}
          <div ref={featuresRef} className="grid sm:grid-cols-2 gap-4">
            {appFeatures.map((feature) => (
              <div
                key={feature.title}
                className="feature-card glass-card p-6 hover:border-[var(--gold)] transition-colors group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon
                    className="w-6 h-6"
                    style={{ color: feature.color }}
                  />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            onClick={() => window.open("https://youtube.com/@elfenorakel", "_blank")}
          >
            <Youtube className="w-5 h-5" />
            YouTube Kanal besuchen
          </Button>
          <p className="text-[var(--text-muted)] text-sm mt-4">
            Kostenlose Readings jede Woche
          </p>
        </div>
      </div>
    </section>
  );
};
