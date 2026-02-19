"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui";

export const SeelenProfilCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <FadeIn>
          <Link
            href="/seelen-profil"
            className="group block relative rounded-2xl border-2 border-[var(--teal)]/30 bg-[var(--glass-bg)] backdrop-blur-md p-10 md:p-16 transition-all duration-500 hover:border-[var(--teal)] hover:shadow-[0_0_60px_rgba(45,212,191,0.2)]"
          >
            {/* Aurora Background */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-[var(--teal)]/8 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[var(--gold)]/6 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[var(--teal)]/5 rounded-full blur-2xl" />
            </div>

            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--teal)]/20 to-[var(--teal)]/5 border border-[var(--teal)]/30 glow-pulse flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-[var(--teal)]" />
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-gradient-teal mb-2">
                  Dein Seelen-Profil entdecken
                </h3>
                <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-lg">
                  9 kosmische Dimensionen, 22 Archetypen, deine einzigartige Element-Signatur.
                  Finde heraus, welche Seelen-Energie dich leitet.
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full border border-[var(--teal)]/30 flex items-center justify-center group-hover:border-[var(--teal)] group-hover:bg-[var(--teal)]/10 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-[var(--teal)] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};
