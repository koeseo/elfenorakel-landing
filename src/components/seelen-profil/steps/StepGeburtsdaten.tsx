"use client";

import { useState } from "react";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

interface StepGeburtsdatenProps {
  vorname: string;
  geburtsdatum: string;
  geburtszeit: string;
  onUpdate: (data: {
    vorname?: string;
    geburtsdatum?: string;
    geburtszeit?: string;
  }) => void;
  onNext: () => void;
}

export const StepGeburtsdaten = ({
  vorname,
  geburtsdatum,
  geburtszeit,
  onUpdate,
  onNext,
}: StepGeburtsdatenProps) => {
  const [touched, setTouched] = useState({ vorname: false, geburtsdatum: false });

  const isValid = vorname.trim().length > 0 && geburtsdatum.length > 0;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gradient-gold mb-3">
          Deine kosmische Identitaet
        </h2>
        <p className="text-[var(--text-secondary)] text-sm md:text-base">
          Die Sterne haben auf dich gewartet. Verrate uns, wann du das Licht der Welt erblickt hast.
        </p>
      </div>

      <div className="glass-card p-6 md:p-8 space-y-6">
        {/* Vorname */}
        <div>
          <label
            htmlFor="vorname"
            className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] mb-2"
          >
            <User className="w-4 h-4 text-[var(--gold)]" />
            Dein Vorname
          </label>
          <input
            id="vorname"
            type="text"
            value={vorname}
            onChange={(e) => onUpdate({ vorname: e.target.value })}
            onBlur={() => setTouched((t) => ({ ...t, vorname: true }))}
            placeholder="Wie darf ich dich nennen?"
            className={`
              w-full px-4 py-3 rounded-xl
              bg-[var(--bg-primary)] border text-[var(--text-primary)]
              placeholder:text-[var(--text-muted)]
              focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50 focus:border-[var(--gold)]
              transition-all duration-300
              ${
                touched.vorname && !vorname.trim()
                  ? "border-red-500/50"
                  : "border-[var(--glass-border)]"
              }
            `}
          />
          {touched.vorname && !vorname.trim() && (
            <p className="text-red-400 text-xs mt-1">Bitte gib deinen Vornamen ein.</p>
          )}
        </div>

        {/* Geburtsdatum */}
        <div>
          <label
            htmlFor="geburtsdatum"
            className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] mb-2"
          >
            <Calendar className="w-4 h-4 text-[var(--gold)]" />
            Dein Geburtsdatum
          </label>
          <input
            id="geburtsdatum"
            type="date"
            value={geburtsdatum}
            onChange={(e) => onUpdate({ geburtsdatum: e.target.value })}
            onBlur={() => setTouched((t) => ({ ...t, geburtsdatum: true }))}
            max={new Date().toISOString().split("T")[0]}
            className={`
              w-full px-4 py-3 rounded-xl
              bg-[var(--bg-primary)] border text-[var(--text-primary)]
              focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50 focus:border-[var(--gold)]
              transition-all duration-300
              [color-scheme:dark]
              ${
                touched.geburtsdatum && !geburtsdatum
                  ? "border-red-500/50"
                  : "border-[var(--glass-border)]"
              }
            `}
          />
          {touched.geburtsdatum && !geburtsdatum && (
            <p className="text-red-400 text-xs mt-1">Bitte waehle dein Geburtsdatum.</p>
          )}
        </div>

        {/* Geburtszeit (optional) */}
        <div>
          <label
            htmlFor="geburtszeit"
            className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] mb-2"
          >
            <Clock className="w-4 h-4 text-[var(--gold)]" />
            Deine Geburtszeit
            <span className="text-[var(--text-muted)] text-xs font-normal">(optional)</span>
          </label>
          <input
            id="geburtszeit"
            type="time"
            value={geburtszeit}
            onChange={(e) => onUpdate({ geburtszeit: e.target.value })}
            className="
              w-full px-4 py-3 rounded-xl
              bg-[var(--bg-primary)] border border-[var(--glass-border)] text-[var(--text-primary)]
              focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50 focus:border-[var(--gold)]
              transition-all duration-300
              [color-scheme:dark]
            "
          />
          <p className="text-[var(--text-muted)] text-xs mt-1">
            Für eine genauere Mondphase-Berechnung
          </p>
        </div>

        {/* Submit */}
        <button
          onClick={onNext}
          disabled={!isValid}
          className={`
            w-full flex items-center justify-center gap-2
            px-6 py-3.5 rounded-xl font-semibold text-sm uppercase tracking-wider
            transition-all duration-300
            ${
              isValid
                ? "bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)] text-white shadow-[0_4px_24px_rgba(201,163,92,0.3)] hover:shadow-[0_8px_40px_rgba(201,163,92,0.5)] hover:-translate-y-0.5"
                : "bg-[var(--glass-bg)] text-[var(--text-muted)] cursor-not-allowed border border-[var(--glass-border)]"
            }
          `}
        >
          Weiter
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
