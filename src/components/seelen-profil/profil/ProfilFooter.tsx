"use client";

import { useState } from "react";
import {
  Download,
  Video,
  Link2,
  Share2,
  Check,
  ArrowRight,
  Lock,
} from "lucide-react";
import Link from "next/link";

interface ProfilFooterProps {
  profileId: string;
  tier: string;
  archetypName: string;
}

export const ProfilFooter = ({
  profileId,
  tier,
  archetypName,
}: ProfilFooterProps) => {
  const [copied, setCopied] = useState(false);

  const profileUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/seelen-profil/profil/${profileId}`
      : `https://next.elfenorakel.de/seelen-profil/profil/${profileId}`;

  const shareText = `Ich habe gerade mein Seelen-Profil entdeckt! Mein Archetyp ist "${archetypName}". Finde deinen auf:`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(profileUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement("input");
      input.value = profileUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShareWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(
      shareText + " " + profileUrl
    )}`;
    window.open(url, "_blank");
  };

  const handleShareX = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(profileUrl)}`;
    window.open(url, "_blank");
  };

  const hasPdfAccess = tier === "report" || tier === "premium";
  const hasVideoAccess = tier === "premium";

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Downloads & Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* PDF Download */}
          <div className="glass-card p-6 md:p-8 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center">
              <Download className="w-7 h-7 text-[var(--gold)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
              PDF-Report
            </h3>
            {hasPdfAccess ? (
              <>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Lade dein vollstaendiges Seelen-Profil als PDF herunter.
                </p>
                <button
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold uppercase tracking-wider bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)] text-white shadow-[0_4px_24px_rgba(201,163,92,0.3)] hover:shadow-[0_8px_40px_rgba(201,163,92,0.5)] transition-all duration-300"
                  onClick={() => {
                    // PDF generation will be implemented in a future task
                    alert("PDF-Download kommt bald!");
                  }}
                >
                  <Download className="w-4 h-4" />
                  Herunterladen
                </button>
              </>
            ) : (
              <>
                <p className="text-sm text-[var(--text-muted)] mb-4">
                  Verfuegbar ab dem Report-Paket.
                </p>
                <Link
                  href={`/seelen-profil/vorschau?id=${profileId}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold uppercase tracking-wider bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] hover:border-[var(--gold)]/30 transition-all duration-300"
                >
                  <Lock className="w-4 h-4" />
                  Upgrade
                </Link>
              </>
            )}
          </div>

          {/* Video */}
          <div className="glass-card p-6 md:p-8 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[var(--teal)]/10 flex items-center justify-center">
              <Video className="w-7 h-7 text-[var(--teal)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
              Video-Analyse
            </h3>
            {hasVideoAccess ? (
              <>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Elfis persoenliche Video-Analyse deines Profils.
                </p>
                <div className="aspect-video rounded-xl bg-[var(--bg-card)] border border-[var(--glass-border)] flex items-center justify-center">
                  <p className="text-sm text-[var(--text-muted)]">
                    Video kommt bald
                  </p>
                </div>
              </>
            ) : (
              <>
                <p className="text-sm text-[var(--text-muted)] mb-4">
                  Nur im Premium-Paket verfuegbar.
                </p>
                <Link
                  href={`/seelen-profil/vorschau?id=${profileId}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold uppercase tracking-wider bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] hover:border-[var(--teal)]/30 transition-all duration-300"
                >
                  <Lock className="w-4 h-4" />
                  Upgrade auf Premium
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Social Share */}
        <div className="glass-card p-6 md:p-8 mb-12">
          <div className="text-center mb-6">
            <Share2 className="w-6 h-6 text-[var(--gold)] mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              Teile dein Seelen-Profil
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Lade Freunde ein, ihren eigenen Archetyp zu entdecken.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* Copy Link */}
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] hover:border-[var(--gold)]/30 transition-all duration-300"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">Kopiert!</span>
                </>
              ) : (
                <>
                  <Link2 className="w-4 h-4" />
                  Link kopieren
                </>
              )}
            </button>

            {/* WhatsApp */}
            <button
              onClick={handleShareWhatsApp}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/20 transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </button>

            {/* X / Twitter */}
            <button
              onClick={handleShareX}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-[var(--text-primary)] hover:bg-white/10 transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Auf X teilen
            </button>
          </div>
        </div>

        {/* Upsell CTA */}
        <div className="text-center">
          <div className="section-divider mb-12" />

          <h3 className="text-2xl md:text-3xl font-bold text-gradient-gold mb-4">
            Du willst tiefer gehen?
          </h3>
          <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">
            Buche ein persoenliches Reading mit Elfi und erhalte individuelle Beratung zu deinem Seelen-Profil.
          </p>
          <Link
            href="/readings"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-lg font-semibold uppercase tracking-wider bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)] text-white shadow-[0_4px_24px_rgba(201,163,92,0.3)] hover:shadow-[0_8px_40px_rgba(201,163,92,0.5)] transition-all duration-300 btn-cta-glow"
          >
            Persoenliches Reading buchen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
