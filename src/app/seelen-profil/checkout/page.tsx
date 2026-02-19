"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import {
  Check,
  Shield,
  Sparkles,
  ArrowRight,
  Loader2,
  Star,
  FileText,
  Video,
} from "lucide-react";

type Tier = "basis" | "report" | "premium";

interface TierConfig {
  id: Tier;
  name: string;
  price: string;
  priceNum: number;
  description: string;
  icon: typeof Star;
  features: string[];
  popular: boolean;
}

const TIERS: TierConfig[] = [
  {
    id: "basis",
    name: "Basis",
    price: "49",
    priceNum: 49,
    description: "Dein digitales Seelen-Profil",
    icon: Star,
    features: [
      "Interaktives Web-Profil",
      "9 Dimensionen deiner Seele",
      "Teilbare URL",
      "Jahres-Updates",
    ],
    popular: false,
  },
  {
    id: "report",
    name: "Report",
    price: "69",
    priceNum: 69,
    description: "Web-Profil + tiefgehender PDF-Report",
    icon: FileText,
    features: [
      "Alles aus Basis",
      "20\u201330 Seiten PDF-Report",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "99",
    priceNum: 99,
    description: "Das volle Seelen-Erlebnis",
    icon: Video,
    features: [
      "Alles aus Report",
      "Pers\u00f6nliche Video-Botschaft von Elfi",
    ],
    popular: false,
  },
];

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const profilId = searchParams.get("id");
  const tierParam = searchParams.get("tier") as Tier | null;

  const [selectedTier, setSelectedTier] = useState<Tier>(
    tierParam && ["basis", "report", "premium"].includes(tierParam)
      ? tierParam
      : "report"
  );
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!profilId) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card p-8 text-center max-w-md">
          <h1 className="text-xl font-bold text-[var(--text-primary)] mb-4">
            Kein Profil gefunden
          </h1>
          <p className="text-[var(--text-secondary)] mb-6">
            Bitte starte zuerst den Seelen-Profil Quiz, um dein Profil zu
            erstellen.
          </p>
          <button
            onClick={() => router.push("/seelen-profil")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)] text-white font-semibold transition-all duration-300 hover:shadow-[0_8px_40px_rgba(201,163,92,0.5)]"
          >
            Zum Quiz
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  const handlePayment = async () => {
    if (!email) {
      setError("Bitte gib deine E-Mail-Adresse ein.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Bitte gib eine g\u00fcltige E-Mail-Adresse ein.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/seelen-profil/api/payment/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profilId,
          tier: selectedTier,
          email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Zahlung konnte nicht erstellt werden."
        );
      }

      // Redirect to Mollie checkout
      window.location.href = data.checkoutUrl;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut."
      );
      setIsLoading(false);
    }
  };

  const selectedConfig = TIERS.find((t) => t.id === selectedTier)!;

  return (
    <div className="min-h-screen py-8 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-2xl md:text-4xl font-bold text-gradient-gold mb-3">
            Dein Seelen-Profil freischalten
          </h1>
          <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-lg mx-auto">
            W\u00e4hle deine Preisstufe und entdecke alle 9 Dimensionen deiner
            Seele.
          </p>
        </div>

        {/* Tier Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
          {TIERS.map((tier) => {
            const isSelected = selectedTier === tier.id;
            const TierIcon = tier.icon;

            return (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`
                  relative text-left p-5 md:p-6 rounded-2xl transition-all duration-300 cursor-pointer
                  ${
                    isSelected
                      ? "bg-[var(--gold)]/10 border-2 border-[var(--gold)] shadow-[0_0_30px_rgba(201,163,92,0.25)]"
                      : "glass-card border-2 border-transparent hover:border-[var(--gold)]/20"
                  }
                `}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="badge-popular text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap">
                      Beliebteste Wahl
                    </span>
                  </div>
                )}

                {/* Selection indicator */}
                <div className="flex items-start justify-between mb-3 mt-1">
                  <div className="flex items-center gap-3">
                    <div
                      className={`
                        w-10 h-10 rounded-xl flex items-center justify-center
                        ${
                          isSelected
                            ? "bg-[var(--gold)]/20"
                            : "bg-[var(--glass-bg)]"
                        }
                      `}
                    >
                      <TierIcon
                        className={`w-5 h-5 ${
                          isSelected
                            ? "text-[var(--gold-light)]"
                            : "text-[var(--text-muted)]"
                        }`}
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-bold ${
                          isSelected
                            ? "text-[var(--gold-light)]"
                            : "text-[var(--text-primary)]"
                        }`}
                      >
                        {tier.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">
                        {tier.description}
                      </p>
                    </div>
                  </div>

                  {/* Checkmark */}
                  <div
                    className={`
                      w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300
                      ${
                        isSelected
                          ? "bg-[var(--gold)] text-white"
                          : "border-2 border-[var(--glass-border)]"
                      }
                    `}
                  >
                    {isSelected && <Check className="w-4 h-4" />}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span
                    className={`text-3xl font-bold ${
                      isSelected ? "text-gradient-gold" : "text-[var(--text-primary)]"
                    }`}
                  >
                    {tier.price}&euro;
                  </span>
                  <span className="text-[var(--text-muted)] text-sm ml-1">
                    einmalig
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Sparkles
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          isSelected
                            ? "text-[var(--gold)]"
                            : "text-[var(--text-muted)]"
                        }`}
                      />
                      <span
                        className={
                          isSelected
                            ? "text-[var(--text-primary)]"
                            : "text-[var(--text-secondary)]"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>

        {/* Payment Section */}
        <div className="max-w-md mx-auto">
          <div className="glass-card p-6 md:p-8">
            {/* Summary */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--glass-border)]">
              <div>
                <p className="text-sm text-[var(--text-muted)] mb-1">
                  Deine Wahl
                </p>
                <p className="text-lg font-bold text-[var(--text-primary)]">
                  Seelen-Profil {selectedConfig.name}
                </p>
              </div>
              <p className="text-2xl font-bold text-gradient-gold">
                {selectedConfig.price}&euro;
              </p>
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
              >
                E-Mail-Adresse
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="deine@email.de"
                className="w-full px-4 py-3 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)]/50 focus:ring-1 focus:ring-[var(--gold)]/30 transition-all duration-300"
              />
              <p className="text-xs text-[var(--text-muted)] mt-2">
                Dein Profil-Link wird an diese Adresse gesendet.
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Pay Button */}
            <button
              onClick={handlePayment}
              disabled={isLoading}
              className={`
                w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-base font-semibold uppercase tracking-wider
                transition-all duration-300
                ${
                  isLoading
                    ? "bg-[var(--gold-dim)] cursor-not-allowed opacity-70"
                    : "bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)] text-white shadow-[0_4px_24px_rgba(201,163,92,0.3)] hover:shadow-[0_8px_40px_rgba(201,163,92,0.5)] hover:scale-[1.02]"
                }
              `}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Wird vorbereitet...
                </>
              ) : (
                <>
                  Jetzt bezahlen
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Trust signals */}
            <div className="mt-6 flex items-center justify-center gap-4 text-[var(--text-muted)]">
              <div className="flex items-center gap-1.5 text-xs">
                <Shield className="w-3.5 h-3.5" />
                <span>SSL-verschl\u00fcsselt</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
              <div className="flex items-center gap-1.5 text-xs">
                <Shield className="w-3.5 h-3.5" />
                <span>PayPal & Sofort\u00fcberweisung</span>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div className="text-center mt-6">
            <button
              onClick={() =>
                router.push(`/seelen-profil/vorschau?id=${profilId}`)
              }
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors duration-300"
            >
              &larr; Zur\u00fcck zur Vorschau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-[var(--gold)] animate-spin" />
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
