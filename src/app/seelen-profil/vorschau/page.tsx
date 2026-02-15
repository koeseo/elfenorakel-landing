import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getProfile } from "@/lib/seelen-profil/db";
import { getArchetyp } from "@/lib/seelen-profil/archetypen";
import { getElement, getDominantElement, getSecondaryElement } from "@/lib/seelen-profil/elemente";
import Link from "next/link";
import {
  Lock,
  Sparkles,
  Star,
  Moon,
  Flame,
  Eye,
  Heart,
  Compass,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dein Seelen-Profil | Vorschau",
  description: "Dein persoenliches Seelen-Profil wurde berechnet. Schalte jetzt alle 9 Dimensionen frei.",
};

interface VorschauPageProps {
  searchParams: Promise<{ id?: string }>;
}

export default async function VorschauPage({ searchParams }: VorschauPageProps) {
  const params = await searchParams;
  const id = params.id;

  if (!id) {
    redirect("/seelen-profil");
  }

  const profile = await getProfile(id);

  if (!profile) {
    redirect("/seelen-profil");
  }

  const archetyp = getArchetyp(profile.archetyp_id);
  const dominantEl = getDominantElement(profile.element_signatur);
  const secondaryEl = getSecondaryElement(profile.element_signatur);
  const dominantElement = getElement(dominantEl);
  const secondaryElement = getElement(secondaryEl);

  // Locked section titles for the blur preview
  const lockedSections = [
    { icon: Flame, label: "Element-Signatur", desc: "Deine elementare Zusammensetzung" },
    { icon: Moon, label: "Mondphase", desc: "Die Kraft deines Geburtsmondes" },
    { icon: Eye, label: "Schatten & Licht", desc: "Deine verborgenen Karten" },
    { icon: Star, label: "Planet & Chakra", desc: "Deine kosmischen Verbindungen" },
    { icon: Heart, label: "In Beziehungen", desc: "Wie du liebst und verbindest" },
    { icon: Compass, label: "Kosmische Aufgabe", desc: "Deine Seelenaufgabe in diesem Leben" },
    { icon: Zap, label: "Jahres-Energie 2026", desc: "Deine persoenliche Jahresprognose" },
  ];

  const tiers = [
    {
      name: "Basis",
      price: "49",
      features: ["Archetyp-Analyse", "Element-Signatur", "Mondphase"],
      popular: false,
    },
    {
      name: "Report",
      price: "69",
      features: [
        "Alles aus Basis",
        "Schatten & Licht Karten",
        "Planet & Chakra",
        "Beziehungs-Analyse",
        "PDF-Report",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "99",
      features: [
        "Alles aus Report",
        "Kosmische Aufgabe",
        "Jahres-Energie",
        "Elfis persoenliche Botschaft",
        "Interaktives Dashboard",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen py-8 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header with archetype reveal */}
        <div className="text-center mb-12">
          {/* Archetype card image */}
          <div className="relative inline-block mb-6">
            <div className="w-40 h-64 md:w-48 md:h-72 rounded-2xl overflow-hidden border-2 border-[var(--gold)] shadow-[0_0_40px_rgba(201,163,92,0.3)] mx-auto">
              <img
                src={archetyp.image}
                alt={archetyp.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Glow behind card */}
            <div
              className="absolute inset-0 -z-10 rounded-2xl blur-3xl opacity-30"
              style={{
                background: `radial-gradient(circle, ${dominantElement.farbe}, transparent)`,
              }}
            />
          </div>

          {/* Name + archetype */}
          <h1 className="text-2xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
            {profile.vorname}, du bist:
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
            {archetyp.name}
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-lg mx-auto">
            {archetyp.claim}
          </p>
        </div>

        {/* Visible teaser: brief archetype wesen */}
        <div className="glass-card p-6 md:p-8 mb-8">
          <h3 className="text-lg font-semibold text-[var(--gold)] mb-3">
            Dein Wesen
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            {archetyp.wesen}
          </p>
        </div>

        {/* Blurred locked sections */}
        <div className="space-y-4 mb-12">
          {lockedSections.map((section) => (
            <div
              key={section.label}
              className="glass-card p-5 md:p-6 relative overflow-hidden"
            >
              {/* Underlying content (directly blurred) */}
              <div className="flex items-center gap-4" style={{ filter: 'blur(8px)', userSelect: 'none', pointerEvents: 'none' }}>
                <div className="w-10 h-10 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-5 h-5 text-[var(--gold)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)]">
                    {section.label}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {section.desc}
                  </p>
                </div>
              </div>

              {/* Lock overlay on top */}
              <div className="absolute inset-0 z-10 bg-[var(--bg-primary)]/40 flex items-center justify-center">
                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm">Gesperrt</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-4">
            Schalte dein vollstaendiges Profil frei
          </h3>
          <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">
            Entdecke alle 9 Dimensionen deines Seelen-Profils und erhalte Elfis persoenliche Botschaft an dich.
          </p>

          {/* Tier cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`
                  glass-card p-5 relative
                  ${tier.popular ? "border-[var(--gold)]/50 glow-gold" : ""}
                `}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="badge-popular text-xs px-3 py-1 rounded-full font-medium">
                      Beliebteste Wahl
                    </span>
                  </div>
                )}
                <h4 className="text-lg font-bold text-[var(--text-primary)] mt-1 mb-1">
                  {tier.name}
                </h4>
                <p className="text-2xl font-bold text-gradient-gold mb-3">
                  {tier.price}&euro;
                </p>
                <ul className="text-left space-y-1.5 mb-4">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-xs text-[var(--text-secondary)]"
                    >
                      <Sparkles className="w-3 h-3 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/seelen-profil/checkout?id=${id}&tier=${tier.name.toLowerCase()}`}
                  className={`
                    block w-full text-center py-2.5 rounded-xl text-sm font-semibold uppercase tracking-wider
                    transition-all duration-300
                    ${
                      tier.popular
                        ? "bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)] text-white shadow-[0_4px_24px_rgba(201,163,92,0.3)] hover:shadow-[0_8px_40px_rgba(201,163,92,0.5)]"
                        : "bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] hover:border-[var(--gold)]/30"
                    }
                  `}
                >
                  Freischalten
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
