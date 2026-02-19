"use client";

import { Suspense, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { Sparkles, Lock, Eye, EyeOff } from "lucide-react";

function PasswortForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    startTransition(async () => {
      const res = await fetch("/api/auth/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        window.location.href = redirect;
      } else {
        setError("Falsches Passwort. Versuche es erneut.");
        setPassword("");
      }
    });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[var(--teal)]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Logo / Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 mb-6">
            <Lock className="w-7 h-7 text-[var(--gold)]" />
          </div>
          <h1 className="text-3xl font-bold text-gradient-gold mb-2">
            Elfenorakel
          </h1>
          <p className="text-[var(--text-secondary)] text-sm">
            Diese Seite ist passwortgeschützt.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="glass-card p-6 space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
              >
                Passwort
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Passwort eingeben..."
                  required
                  autoFocus
                  className="w-full px-4 py-3 bg-[var(--bg-card)] border border-[var(--glass-border)] rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/30 transition-colors pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={isPending || !password}
              className="w-full py-3 bg-[var(--gold)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--gold-light)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isPending ? (
                <span className="animate-pulse">Prüfe...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Zugang erhalten
                </>
              )}
            </button>
          </div>
        </form>

        {/* Footer hint */}
        <p className="text-center text-[var(--text-muted)] text-xs mt-6">
          Frage Elfi nach dem Passwort
        </p>
      </div>
    </div>
  );
}

export default function PasswortPage() {
  return (
    <Suspense>
      <PasswortForm />
    </Suspense>
  );
}
