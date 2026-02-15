"use client";

import { useState } from "react";
import { Mail, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

interface StepEmailProps {
  email: string;
  onUpdate: (email: string) => void;
  onSubmit: () => void;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const StepEmail = ({ email, onUpdate, onSubmit }: StepEmailProps) => {
  const [touched, setTouched] = useState(false);
  const valid = isValidEmail(email);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 mb-4">
          <Sparkles className="w-8 h-8 text-[var(--gold)]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gradient-gold mb-3">
          Fast geschafft!
        </h2>
        <p className="text-[var(--text-secondary)] text-sm md:text-base">
          Dein Seelen-Profil wird gleich berechnet. Unter welcher E-Mail sollen wir es fuer dich speichern?
        </p>
      </div>

      <div className="glass-card p-6 md:p-8 space-y-6">
        {/* Email input */}
        <div>
          <label
            htmlFor="email"
            className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] mb-2"
          >
            <Mail className="w-4 h-4 text-[var(--gold)]" />
            Deine E-Mail-Adresse
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => onUpdate(e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder="deine@email.de"
            autoComplete="email"
            className={`
              w-full px-4 py-3 rounded-xl
              bg-[var(--bg-primary)] border text-[var(--text-primary)]
              placeholder:text-[var(--text-muted)]
              focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50 focus:border-[var(--gold)]
              transition-all duration-300
              ${
                touched && !valid
                  ? "border-red-500/50"
                  : "border-[var(--glass-border)]"
              }
            `}
          />
          {touched && !valid && (
            <p className="text-red-400 text-xs mt-1">
              Bitte gib eine gueltige E-Mail-Adresse ein.
            </p>
          )}
        </div>

        {/* Privacy note */}
        <div className="flex items-start gap-3 p-3 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)]">
          <Shield className="w-4 h-4 text-[var(--teal)] mt-0.5 flex-shrink-0" />
          <p className="text-xs text-[var(--text-muted)]">
            Dein Profil wird fuer immer unter deiner E-Mail gespeichert. Wir respektieren deine Privatsphaere.{" "}
            <Link
              href="/datenschutz"
              className="text-[var(--teal)] underline underline-offset-2 hover:text-[var(--teal-light)]"
            >
              Datenschutz
            </Link>
          </p>
        </div>

        {/* Submit */}
        <button
          onClick={onSubmit}
          disabled={!valid}
          className={`
            w-full flex items-center justify-center gap-2
            px-6 py-3.5 rounded-xl font-semibold text-sm uppercase tracking-wider
            transition-all duration-300
            ${
              valid
                ? "bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)] text-white shadow-[0_4px_24px_rgba(201,163,92,0.3)] hover:shadow-[0_8px_40px_rgba(201,163,92,0.5)] hover:-translate-y-0.5"
                : "bg-[var(--glass-bg)] text-[var(--text-muted)] cursor-not-allowed border border-[var(--glass-border)]"
            }
          `}
        >
          <Sparkles className="w-4 h-4" />
          Mein Profil berechnen
        </button>
      </div>
    </div>
  );
};
