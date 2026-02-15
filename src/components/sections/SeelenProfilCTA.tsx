"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui";

export const SeelenProfilCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <FadeIn>
          <Link
            href="/seelen-profil"
            className="group block relative rounded-2xl border border-[var(--glass-border-gold)] bg-[var(--glass-bg)] backdrop-blur-md p-8 md:p-12 transition-all duration-500 hover:border-[var(--gold)] hover:shadow-[0_0_40px_rgba(201,163,92,0.15)]"
          >
            {/* Subtle background glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--gold)]/5 via-transparent to-[var(--teal)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--gold)]/20 to-[var(--gold)]/5 border border-[var(--gold)]/30 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-[var(--gold)]" />
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-gradient-gold mb-2">
                  Dein Seelen-Profil entdecken
                </h3>
                <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-lg">
                  9 kosmische Dimensionen, 22 Archetypen, deine einzigartige Element-Signatur.
                  Finde heraus, welche Seelen-Energie dich leitet.
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full border border-[var(--gold)]/30 flex items-center justify-center group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)]/10 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-[var(--gold)] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};
