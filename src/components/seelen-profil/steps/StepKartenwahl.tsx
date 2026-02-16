"use client";

import { ArrowRight } from "lucide-react";
import { CardSpread } from "../CardSpread";

interface StepKartenwahlProps {
  kartenwahl: string[];
  onUpdate: (kartenwahl: string[]) => void;
  onNext: () => void;
}

export const StepKartenwahl = ({
  kartenwahl,
  onUpdate,
  onNext,
}: StepKartenwahlProps) => {
  const isReady = kartenwahl.length === 5;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gradient-gold mb-3">
          Wähle deine 5 Karten
        </h2>
        <p className="text-[var(--text-secondary)] text-sm md:text-base mb-2">
          Lass dich von deiner Intuition leiten. Klicke auf die Karten, die dich anziehen.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)]">
          <span
            className={`text-sm font-medium ${
              isReady ? "text-[var(--gold)]" : "text-[var(--text-secondary)]"
            }`}
          >
            {kartenwahl.length} / 5 gewählt
          </span>
        </div>
      </div>

      <CardSpread
        selected={kartenwahl}
        onSelect={onUpdate}
        maxCards={5}
      />

      {/* Weiter button - appears when 5 cards selected */}
      <div
        className={`
          mt-8 flex justify-center transition-all duration-500
          ${isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
      >
        <button
          onClick={onNext}
          disabled={!isReady}
          className="
            flex items-center gap-2
            px-8 py-3.5 rounded-xl font-semibold text-sm uppercase tracking-wider
            bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)] text-white
            shadow-[0_4px_24px_rgba(201,163,92,0.3)]
            hover:shadow-[0_8px_40px_rgba(201,163,92,0.5)]
            hover:-translate-y-0.5
            transition-all duration-300
          "
        >
          Weiter
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
