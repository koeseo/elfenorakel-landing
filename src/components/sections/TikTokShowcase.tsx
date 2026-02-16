"use client";

import { Music2, Heart, MessageCircle, Share2, Sparkles, Star, Flame, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui";

const contentPillars = [
  { label: "Tagesimpulse", emoji: "✨" },
  { label: "Pick a Card", emoji: "🃏" },
  { label: "Sternzeichen", emoji: "⭐" },
  { label: "Seelenreise", emoji: "🦋" },
  { label: "Kosmische Energie", emoji: "🌙" },
  { label: "Liebesreading", emoji: "❤️‍🔥" },
];

const stats = [
  { value: "312", label: "Follower", icon: Heart },
  { value: "4.5K+", label: "Likes", icon: Star },
  { value: "Täglich", label: "Neue Impulse", icon: Flame },
];

export const TikTokShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: TikTok Phone Mockup */}
          <FadeIn
            direction="left"
            className="relative mx-auto lg:mx-0 order-2 lg:order-1"
          >
            <div className="relative w-[280px] md:w-[300px] mx-auto">
              {/* Phone frame */}
              <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl border border-white/10">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-20" />

                {/* Screen */}
                <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#1a0a2e] via-[#0d1117] to-[#0a0a0c]">
                  {/* Cosmic overlay */}
                  <div className="absolute inset-0">
                    <div className="absolute top-[10%] left-[20%] w-32 h-32 bg-[#F472B6]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-[20%] right-[10%] w-40 h-40 bg-[var(--teal)]/8 rounded-full blur-3xl" />
                    <div className="absolute top-[40%] right-[30%] w-24 h-24 bg-[var(--gold)]/10 rounded-full blur-2xl" />
                  </div>

                  {/* Star particles */}
                  <div className="absolute inset-0">
                    <div className="absolute top-[12%] left-[15%] w-1 h-1 bg-white rounded-full opacity-60" />
                    <div className="absolute top-[22%] right-[20%] w-0.5 h-0.5 bg-white rounded-full opacity-40" />
                    <div className="absolute top-[55%] left-[10%] w-1 h-1 bg-[var(--gold)] rounded-full opacity-50" />
                    <div className="absolute bottom-[40%] right-[15%] w-0.5 h-0.5 bg-[var(--teal)] rounded-full opacity-60" />
                    <div className="absolute bottom-[25%] left-[25%] w-1 h-1 bg-white rounded-full opacity-30" />
                  </div>

                  {/* TikTok-style content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-4 pt-10">
                    {/* Top: "Following | For You" tabs */}
                    <div className="flex items-center justify-center gap-6 text-xs">
                      <span className="text-white/50">Folge ich</span>
                      <span className="text-white font-semibold border-b-2 border-white pb-1">Für dich</span>
                    </div>

                    {/* Center: Profile + Content */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 rounded-full border-2 border-[var(--teal)] p-0.5 mb-4">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-[var(--gold)]/30 via-[#1a0a2e] to-[var(--teal)]/30 flex items-center justify-center">
                          <Sparkles className="w-8 h-8 text-[var(--gold)]" />
                        </div>
                      </div>
                      <p className="text-white font-bold text-sm mb-1">@elfenorakel</p>
                      <p className="text-white/60 text-xs leading-relaxed max-w-[200px]">
                        Sterne, Monde & ethereale Magie – tägliche Readings ✨🦋
                      </p>
                    </div>

                    {/* Bottom: Engagement overlay */}
                    <div className="space-y-3">
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                        <p className="text-white text-xs font-medium mb-1">
                          Deine Herzenergie explodiert 💗✨
                        </p>
                        <p className="text-white/40 text-[10px]">
                          #tarot #spiritualität #elfenorakel
                        </p>
                      </div>

                      <div className="flex items-center justify-between px-2">
                        <div className="flex items-center gap-1">
                          <Music2 className="w-3 h-3 text-white/60" />
                          <span className="text-white/40 text-[10px]">Originalton – Elfenorakel</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side action buttons */}
                  <div className="absolute right-3 bottom-24 flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center gap-1">
                      <Heart className="w-6 h-6 text-[#F472B6]" />
                      <span className="text-white text-[9px]">4.5K</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <MessageCircle className="w-6 h-6 text-white/80" />
                      <span className="text-white text-[9px]">89</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Share2 className="w-6 h-6 text-white/80" />
                      <span className="text-white text-[9px]">Teilen</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow behind phone */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#F472B6]/15 via-[var(--teal)]/15 to-[#F472B6]/15 rounded-[3rem] blur-2xl -z-10" />
            </div>
          </FadeIn>

          {/* Right: Content + CTA */}
          <FadeIn
            direction="right"
            className="order-1 lg:order-2"
          >
            {/* Badge */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1.5 bg-black/50 border border-white/10 rounded-full px-3 py-1">
                <Music2 className="w-4 h-4 text-[#F472B6]" />
                <span className="text-sm text-[var(--text-secondary)]">TikTok</span>
              </div>
              <span className="text-xs text-[var(--text-muted)]">@elfenorakel</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Tägliche <span className="text-gradient-gold">Magie</span> in
              <br />60 Sekunden
            </h2>

            <p className="text-[var(--text-secondary)] mb-8 max-w-md">
              Kurze, kraftvolle Botschaften für deinen Tag.
              Pick-a-Card Readings, kosmische Energien und spirituelle Impulse –
              jeden Tag neu auf TikTok.
            </p>

            {/* Stats */}
            <div className="flex gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <stat.icon className="w-4 h-4 text-[var(--gold)]" />
                    <span className="text-xl font-bold text-[var(--text-primary)]">{stat.value}</span>
                  </div>
                  <span className="text-xs text-[var(--text-muted)]">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Content Pillars */}
            <div className="flex flex-wrap gap-2 mb-8">
              {contentPillars.map((pillar) => (
                <span
                  key={pillar.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-[var(--text-secondary)] hover:border-[var(--gold)]/30 hover:text-[var(--text-primary)] transition-colors"
                >
                  <span>{pillar.emoji}</span>
                  {pillar.label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://tiktok.com/@elfenorakel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#F472B6] to-[#ec4899] hover:from-[#F472B6] hover:to-[#f472b6] text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-[#F472B6]/20 hover:shadow-[#F472B6]/40 hover:scale-[1.02] group"
            >
              <Music2 className="w-5 h-5" />
              Auf TikTok folgen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-[var(--text-muted)] text-xs mt-3">
              Kostenlos · Neue Videos täglich · Keine App nötig
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
