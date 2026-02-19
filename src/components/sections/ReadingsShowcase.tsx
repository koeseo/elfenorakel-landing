"use client";

import { Sparkles, Youtube, Music2, Play, ArrowRight } from "lucide-react";
import { Button, FadeIn } from "@/components/ui";

const readingTypes = [
  {
    title: "Wochenreadings",
    description:
      "Jede Woche neue Botschaften und Guidance für alle Sternzeichen – kostenlos auf YouTube und TikTok.",
    icon: Sparkles,
    color: "var(--gold)",
  },
  {
    title: "Persönliche Readings",
    description:
      "Tiefgreifende, individuelle Video-Readings zu deinen persönlichen Fragen und Themen.",
    icon: Play,
    color: "var(--teal)",
  },
  {
    title: "Live Readings",
    description:
      "Regelmäßige Live-Sessions auf YouTube und TikTok, in denen du direkt dabei sein kannst.",
    icon: Music2,
    color: "#F472B6",
  },
];

const platforms = [
  {
    name: "YouTube",
    icon: Youtube,
    handle: "@elfenorakel",
    url: "https://youtube.com/@elfenorakel",
    description: "Ausführliche Readings, Wochenvorschauen & spirituelle Impulse",
    color: "#FF0000",
    followers: "84",
  },
  {
    name: "TikTok",
    icon: Music2,
    handle: "@elfenorakel",
    url: "https://tiktok.com/@elfenorakel",
    description: "Kurze Botschaften, tägliche Impulse & Pick-a-Card Readings",
    color: "#000000",
    followers: "312",
  },
];

export const ReadingsShowcase = () => {
  return (
    <section id="readings-showcase" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[var(--gold)]" />
            <span className="text-[var(--gold)] text-sm uppercase tracking-widest">
              Persönliche Readings
            </span>
            <Sparkles className="w-5 h-5 text-[var(--gold)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            Dein 11. Oracle Reading
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Ehrliche Botschaften, tiefe Einblicke und spirituelle Guidance –
            persönlich von Elfi auf YouTube und TikTok.
          </p>
        </FadeIn>

        {/* Reading Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {readingTypes.map((type, index) => (
            <FadeIn
              key={type.title}
              delay={index * 0.1}
              className="glass-card p-8 text-center group hover:border-[var(--gold)] transition-colors"
            >
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${type.color}20` }}
              >
                <type.icon className="w-8 h-8" style={{ color: type.color }} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                {type.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm">
                {type.description}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* Platforms */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <FadeIn
              key={platform.name}
              direction={index === 0 ? "left" : "right"}
              as="a"
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 flex items-start gap-6 hover:border-[var(--gold)] hover:scale-[1.02] transition-all group cursor-pointer"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${platform.color}20` }}
              >
                <platform.icon
                  className="w-8 h-8"
                  style={{ color: platform.name === "TikTok" ? "var(--text-primary)" : platform.color }}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    {platform.name}
                  </h3>
                  <span className="text-xs text-[var(--gold)] font-medium">
                    {platform.followers} Follower
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)] mb-2">
                  {platform.handle}
                </p>
                <p className="text-[var(--text-secondary)] text-sm">
                  {platform.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[var(--gold)] text-sm font-medium group-hover:gap-3 transition-all">
                  Kanal besuchen
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn className="text-center">
          <div className="glass-card p-8 md:p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient-gold mb-4">
              Dein persönliches Reading
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 max-w-xl mx-auto">
              Du möchtest ein individuelles Reading nur für dich?
              Buche dein persönliches Video-Reading und erhalte ehrliche Botschaften
              zu deinen wichtigsten Fragen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => (window.location.href = "/readings")}
              >
                <Sparkles className="w-5 h-5" />
                Persönliches Reading buchen
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://youtube.com/@elfenorakel", "_blank")}
              >
                <Youtube className="w-5 h-5" />
                Kostenlose Readings ansehen
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
