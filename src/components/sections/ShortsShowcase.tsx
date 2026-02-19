"use client";

import Image from "next/image";
import { Play, Flame, Sparkles, Youtube, Music2 } from "lucide-react";
import { FadeIn } from "@/components/ui";

const shorts = [
  {
    id: "U_QJ5SjFMGw",
    title: "Deine große Liebe ruft",
    views: "1.1K",
    emoji: "❤️‍🔥",
  },
  {
    id: "bxEddJpPE9M",
    title: "Gigantische Herzenswelle für Dich!",
    views: "969",
    emoji: "💖",
  },
  {
    id: "jz4JnBTQdgE",
    title: "Das Drachenfeuer lodert",
    views: "915",
    emoji: "🔥",
  },
  {
    id: "0hfWWOGEHh4",
    title: "Die Auferstehung liegt in deiner DNA",
    views: "903",
    emoji: "🧬",
  },
  {
    id: "iERXh2TIBe8",
    title: "3 kosmische Geschenke",
    views: "903",
    emoji: "🎁",
  },
  {
    id: "_h3HW180kyM",
    title: "Deine Schatten tanzen frei",
    views: "694",
    emoji: "💎",
  },
  {
    id: "iOT7-jBu6-g",
    title: "Deine Herzenergie explodiert",
    views: "847",
    emoji: "💗",
  },
  {
    id: "VNhHKB7pRRE",
    title: "Dein Seelencode bricht auf",
    views: "778",
    emoji: "✨",
  },
];

export const ShortsShowcase = () => {
  // Duplicate for infinite CSS scroll
  const allShorts = [...shorts, ...shorts];

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Section Header */}
      <FadeIn className="text-center mb-8 px-4">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Flame className="w-5 h-5 text-[#F472B6]" />
          <span className="text-sm uppercase tracking-widest text-[var(--text-muted)]">
            Neueste Shorts
          </span>
          <Flame className="w-5 h-5 text-[#F472B6]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
          Tägliche <span className="text-gradient-gold">Impulse</span> auf YouTube
        </h2>
      </FadeIn>

      {/* CSS-animated horizontal scroll strip */}
      <div className="overflow-hidden px-4 pb-4">
        <div
          className="flex gap-4 shorts-scroll-track"
          style={{ width: "max-content" }}
        >
          {allShorts.map((short, index) => (
            <a
              key={`${short.id}-${index}`}
              href={`https://youtube.com/shorts/${short.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 group relative"
            >
              {/* Phone-shaped card */}
              <div className="w-[160px] md:w-[180px] aspect-[9/16] rounded-2xl overflow-hidden relative border border-[var(--glass-border)] group-hover:border-[var(--gold)]/50 transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_0_30px_rgba(201,163,92,0.2)]">
                {/* YouTube Thumbnail */}
                <Image
                  src={`https://i.ytimg.com/vi/${short.id}/oar2.jpg`}
                  alt={short.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, 180px"
                  unoptimized
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[var(--gold)]/90 flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-[var(--bg-primary)] ml-0.5" />
                  </div>
                </div>

                {/* Emoji badge */}
                <div className="absolute top-3 right-3 text-lg">
                  {short.emoji}
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs font-semibold leading-tight line-clamp-2 drop-shadow-lg">
                    {short.title}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <Sparkles className="w-3 h-3 text-[var(--gold)]" />
                    <span className="text-white/60 text-[10px]">
                      {short.views} Aufrufe
                    </span>
                  </div>
                </div>

                {/* Shorts badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-red-600/90 rounded-full px-2 py-0.5">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 text-white fill-current">
                    <path d="M10 14.65v-5.3L15 12l-5 2.65z" />
                  </svg>
                  <span className="text-white text-[9px] font-bold">Shorts</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA link */}
      <FadeIn className="text-center mt-6">
        <a
          href="https://youtube.com/@elfenorakel/shorts"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[var(--gold)] text-sm font-medium hover:text-[var(--gold-light)] transition-colors"
        >
          Alle Shorts ansehen
          <span className="text-xs">→</span>
        </a>
      </FadeIn>

      {/* Social Stats — YouTube + TikTok */}
      <FadeIn className="mt-12 max-w-3xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          {/* YouTube */}
          <a
            href="https://youtube.com/@elfenorakel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-red-600/10 border border-red-600/20 flex items-center justify-center group-hover:border-red-600/50 transition-colors">
              <Youtube className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">YouTube</p>
              <p className="text-xs text-[var(--text-muted)]">Tägliche Readings</p>
            </div>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com/@elfenorakel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#F472B6]/10 border border-[#F472B6]/20 flex items-center justify-center group-hover:border-[#F472B6]/50 transition-colors">
              <Music2 className="w-5 h-5 text-[#F472B6]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">TikTok</p>
              <p className="text-xs text-[var(--text-muted)]">60-Sekunden Impulse</p>
            </div>
          </a>
        </div>
      </FadeIn>
    </section>
  );
};
