import Link from "next/link";
import {
  Sparkles,
  Star,
  Crown,
  Moon,
  Sun,
  Flame,
  Droplets,
  Wind,
  Mountain,
  Heart,
  Eye,
  Compass,
  ArrowRight,
  Check,
  Zap,
  CircleDot,
  ChevronDown,
  Shield,
  FileText,
  Video,
  Globe,
  Share2,
  Users,
  Brain,
  Fingerprint,
} from "lucide-react";
import { FadeIn } from "@/components/ui";

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const dimensions = [
  {
    icon: Crown,
    title: "Seelen-Archetyp",
    description:
      "Dein einzigartiger Archetyp aus den 22 Großen Arkana. Er offenbart dein tiefstes Wesen und deine Kernidentität.",
    color: "var(--gold)",
    detail: "22 einzigartige Archetypen",
  },
  {
    icon: Flame,
    title: "Element-Signatur",
    description:
      "Die Verteilung von Feuer, Wasser, Luft und Erde in deinem Profil zeigt, wie du Energie verarbeitest.",
    color: "#F97316",
    detail: "4 Elemente, deine Balance",
  },
  {
    icon: Moon,
    title: "Schatten-Karte",
    description:
      "Deine verborgene Seite: die Energie, die du integrieren darfst, um ganz zu werden.",
    color: "#8B5CF6",
    detail: "Schattenintegration",
  },
  {
    icon: Sun,
    title: "Licht-Karte",
    description:
      "Dein höchstes Potenzial und die Strahlkraft, die du in die Welt bringen darfst.",
    color: "var(--gold-light)",
    detail: "Dein leuchtendes Potenzial",
  },
  {
    icon: Star,
    title: "Planetare Herrschaft",
    description:
      "Welcher Planet regiert dein Seelen-Profil? Er bestimmt deinen kosmischen Einfluss und Rhythmus.",
    color: "var(--teal)",
    detail: "Dein herrschender Planet",
  },
  {
    icon: CircleDot,
    title: "Mondphase",
    description:
      "Die Mondphase deiner Geburt verrät deinen emotionalen Grundrhythmus und deine intuitive Kraft.",
    color: "#C4B5FD",
    detail: "Dein Geburtsmond",
  },
  {
    icon: Heart,
    title: "Chakra-Resonanz",
    description:
      "Dein stärkstes Energiezentrum: wo deine Lebensenergie am intensivsten fließt.",
    color: "#EC4899",
    detail: "Dein Energie-Zentrum",
  },
  {
    icon: Compass,
    title: "Kosmische Aufgabe",
    description:
      "Dein Seelenauftrag in diesem Leben. Die große Aufgabe, für die du hier bist.",
    color: "var(--teal-light)",
    detail: "Dein Lebensauftrag",
  },
  {
    icon: Zap,
    title: "Jahres-Energie",
    description:
      "Dynamische Energie, die sich jährlich wandelt. Zeigt dir, was dieses Jahr für dich bereithält.",
    color: "#FBBF24",
    detail: "Jährlich aktualisiert",
  },
];

const steps = [
  {
    number: "01",
    title: "Quiz ausfüllen",
    description:
      "Beantworte intuitive Fragen zu deinem Geburtsdatum, deiner Persönlichkeit und deinen Lebenserfahrungen.",
    icon: FileText,
    color: "var(--teal)",
  },
  {
    number: "02",
    title: "Karten wählen",
    description:
      "Wähle aus einem mystischen Kartendeck die Karten, die dich intuitiv ansprechen. Deine Seele weiß, welche es sind.",
    icon: Sparkles,
    color: "var(--gold)",
  },
  {
    number: "03",
    title: "Profil berechnen",
    description:
      "Unser Algorithmus verbindet Numerologie, Mondphasen, Tarot-Symbolik und deine Intuition zu deinem einzigartigen Profil.",
    icon: Brain,
    color: "#8B5CF6",
  },
  {
    number: "04",
    title: "Ergebnis erhalten",
    description:
      "Erhalte dein vollständiges 9-dimensionales Seelen-Profil mit tiefgreifenden Deutungen und persönlichen Empfehlungen.",
    icon: Eye,
    color: "var(--gold-light)",
  },
];

const pricingTiers = [
  {
    name: "Basis",
    price: "49",
    description: "Dein vollständiges Seelen-Profil als interaktives Web-Erlebnis.",
    features: [
      "Vollständiges 9-dimensionales Profil",
      "Interaktive Web-Darstellung",
      "Detaillierte Archetyp-Beschreibung",
      "Element-Balance Visualisierung",
      "Schatten- & Licht-Karten Deutung",
      "Teilbare Profil-URL",
    ],
    cta: "Basis-Profil starten",
    highlighted: false,
    color: "var(--teal)",
  },
  {
    name: "Report",
    price: "69",
    description: "Alles aus Basis + dein Premium-Report als PDF zum Downloaden.",
    features: [
      "Alles aus dem Basis-Profil",
      "20-30 Seiten Premium-PDF",
      "Vertiefte Archetyp-Analyse",
      "Persönliche Empfehlungen",
      "Meditation & Affirmationen",
      "Jahresprognose Details",
      "Druckbares Design",
    ],
    cta: "Report-Profil starten",
    highlighted: true,
    badge: "Beliebteste Wahl",
    color: "var(--gold)",
  },
  {
    name: "Premium",
    price: "99",
    description:
      "Das komplette Erlebnis mit persönlicher Video-Botschaft von Elfi.",
    features: [
      "Alles aus dem Report-Profil",
      "Persönliche Video-Botschaft von Elfi",
      "Individuelle Archetyp-Deutung",
      "Persönliche Empfehlungen von Elfi",
      "Exklusive Meditation (Audio)",
      "Prioritäts-Bearbeitung",
    ],
    cta: "Premium-Profil starten",
    highlighted: false,
    color: "#8B5CF6",
  },
];

const comparisons = [
  {
    system: "MBTI",
    dimensions: "4 Buchstaben",
    limitation: "Statische Kategorien, keine spirituelle Tiefe",
  },
  {
    system: "Enneagram",
    dimensions: "1 Typ + Flügel",
    limitation: "Psychologisch, aber ohne kosmische Verbindung",
  },
  {
    system: "Sternzeichen",
    dimensions: "1 Zeichen",
    limitation: "Nur Sonnenzeichen, ignoriert individuelle Nuancen",
  },
  {
    system: "Seelen-Profil",
    dimensions: "9 Dimensionen",
    limitation:
      "Tarot + Numerologie + Mondphasen + Intuition = ganzheitlich",
    isHighlighted: true,
  },
];

const faqs = [
  {
    question: "Wie lange dauert das Quiz?",
    answer:
      "Das Quiz dauert ca. 10-15 Minuten. Nimm dir die Zeit in Ruhe, denn deine intuitiven Antworten sind der Schlüssel zu einem aussagekräftigen Profil.",
  },
  {
    question: "Brauche ich Tarot-Kenntnisse?",
    answer:
      "Nein, überhaupt nicht! Das Seelen-Profil ist für jeden zugänglich. Du musst nichts über Tarot wissen -- deine Intuition leitet dich durch den gesamten Prozess.",
  },
  {
    question: "Wie unterscheidet sich das von einem klassischen Tarot-Reading?",
    answer:
      "Ein Reading beantwortet eine konkrete Frage. Das Seelen-Profil hingegen enthüllt deine grundlegende Persönlichkeitsstruktur auf 9 Ebenen -- wie ein kosmischer Fingerabdruck, der sich nicht verändert.",
  },
  {
    question: "Was ist die Jahres-Energie?",
    answer:
      "Die Jahres-Energie ist die einzige dynamische Dimension deines Profils. Sie berechnet sich jährlich neu und zeigt dir die vorherrschende Energie und Themen für das aktuelle Jahr.",
  },
  {
    question: "Kann ich mein Profil teilen?",
    answer:
      "Ja! Jedes Profil hat eine einzigartige, teilbare URL. Du kannst es mit Freunden teilen und vergleichen. Im Report-Paket erhältst du zusätzlich ein wunderschön gestaltetes PDF.",
  },
  {
    question: "Was beinhaltet die persönliche Video-Botschaft?",
    answer:
      "Im Premium-Paket erstellt Elfi eine persönliche Video-Botschaft speziell für deinen Archetyp. Sie geht auf deine individuellen Stärken, Herausforderungen und deinen Seelenauftrag ein.",
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function SeelenProfilPage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════ */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        {/* Decorative radial gradient behind hero */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(201, 163, 92, 0.08) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <FadeIn direction="none">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--gold)]" />
              <span className="text-[var(--gold)] text-sm uppercase tracking-[0.2em] font-medium">
                Neu bei Elfenorakel
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--gold)]" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-[var(--text-primary)]">Entdecke dein</span>
              <br />
              <span className="text-gradient-gold">Seelen-Profil</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-4 leading-relaxed">
              Dein einzigartiges 9-dimensionales Persönlichkeitsprofil, basierend
              auf der Weisheit der 78 Tarot-Karten. Tiefer als MBTI, persönlicher
              als Enneagram, kosmischer als dein Sternzeichen.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-[var(--text-muted)] text-sm md:text-base max-w-2xl mx-auto mb-10">
              22 einzigartige Archetypen der Großen Arkana, Numerologie,
              Mondphasen und deine Intuition -- vereint in einem Profil, das so
              individuell ist wie du selbst.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/seelen-profil/quiz"
                className="btn-cta-glow inline-flex items-center gap-2 bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-[var(--bg-primary)] font-semibold rounded-full px-8 py-4 text-lg hover:scale-105 transition-transform"
              >
                <Sparkles className="w-5 h-5" />
                Jetzt Profil erstellen
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#so-funktioniert-es"
                className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors px-6 py-4"
              >
                Mehr erfahren
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>

          {/* Floating dimension badges */}
          <FadeIn delay={0.4}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
              {dimensions.slice(0, 5).map((dim) => (
                <span
                  key={dim.title}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: `${dim.color}15`,
                    border: `1px solid ${dim.color}30`,
                    color: dim.color,
                  }}
                >
                  <dim.icon className="w-3 h-3" />
                  {dim.title}
                </span>
              ))}
              <span className="text-[var(--text-muted)] text-xs">
                +4 weitere Dimensionen
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* ═══════════════════════════════════════
          SECTION 2: WHAT YOU GET - 9 DIMENSIONS
          ═══════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <FadeIn className="text-center mb-6">
            <span className="text-[var(--gold)] text-sm uppercase tracking-[0.2em] font-medium">
              9 Dimensionen deiner Seele
            </span>
          </FadeIn>

          <FadeIn className="text-center mb-4" delay={0.05}>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)]">
              Dein kosmischer{" "}
              <span className="text-gradient-gold">Fingerabdruck</span>
            </h2>
          </FadeIn>

          <FadeIn className="text-center mb-16" delay={0.1}>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Jede Dimension enthüllt eine andere Facette deines Wesens.
              Zusammen ergeben sie ein Bild, das tiefer geht als jedes
              andere Persönlichkeitssystem.
            </p>
          </FadeIn>

          {/* Dimensions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dimensions.map((dim, index) => (
              <FadeIn
                key={dim.title}
                delay={index * 0.06}
                className="glass-card p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: `${dim.color}15` }}
                  >
                    <dim.icon
                      className="w-6 h-6"
                      style={{ color: dim.color }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">
                        {dim.title}
                      </h3>
                    </div>
                    <p className="text-xs font-medium mb-2" style={{ color: dim.color }}>
                      {dim.detail}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {dim.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* ═══════════════════════════════════════
          SECTION 3: HOW IT WORKS
          ═══════════════════════════════════════ */}
      <section
        id="so-funktioniert-es"
        className="py-24 relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <FadeIn className="text-center mb-6">
            <span className="text-[var(--gold)] text-sm uppercase tracking-[0.2em] font-medium">
              In 4 Schritten
            </span>
          </FadeIn>

          <FadeIn className="text-center mb-4" delay={0.05}>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)]">
              So funktioniert{" "}
              <span className="text-gradient-gold">es</span>
            </h2>
          </FadeIn>

          <FadeIn className="text-center mb-16" delay={0.1}>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Von der ersten Frage bis zu deinem fertigen Profil -- ein
              intuitiver Prozess, der dich Schritt für Schritt zu dir selbst
              führt.
            </p>
          </FadeIn>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.1}>
                <div className="glass-card p-6 text-center h-full relative">
                  {/* Step number */}
                  <div
                    className="text-5xl font-black mb-4 opacity-20"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ background: `${step.color}15` }}
                  >
                    <step.icon
                      className="w-7 h-7"
                      style={{ color: step.color }}
                    />
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector arrow (hidden on last item and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-[var(--text-muted)]" />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA after steps */}
          <FadeIn className="text-center mt-12" delay={0.5}>
            <Link
              href="/seelen-profil/quiz"
              className="btn-cta-glow inline-flex items-center gap-2 bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-[var(--bg-primary)] font-semibold rounded-full px-8 py-4 hover:scale-105 transition-transform"
            >
              <Sparkles className="w-5 h-5" />
              Quiz starten
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* ═══════════════════════════════════════
          SECTION 4: PRICING
          ═══════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <FadeIn className="text-center mb-6">
            <span className="text-[var(--gold)] text-sm uppercase tracking-[0.2em] font-medium">
              Dein Profil, dein Paket
            </span>
          </FadeIn>

          <FadeIn className="text-center mb-4" delay={0.05}>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)]">
              Wähle dein{" "}
              <span className="text-gradient-gold">Seelen-Paket</span>
            </h2>
          </FadeIn>

          <FadeIn className="text-center mb-16" delay={0.1}>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Jedes Paket enthält dein vollständiges 9-dimensionales Profil.
              Die Frage ist nur: wie tief möchtest du eintauchen?
            </p>
          </FadeIn>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {pricingTiers.map((tier, index) => (
              <FadeIn key={tier.name} delay={index * 0.1}>
                <div
                  className={`relative glass-card p-8 h-full flex flex-col ${
                    tier.highlighted
                      ? "border-[var(--gold)] glow-gold md:scale-105 md:-my-4"
                      : ""
                  }`}
                >
                  {/* Popular badge */}
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="badge-popular px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  {/* Tier name */}
                  <div className="text-center mb-6">
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: tier.color }}
                    >
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1 mb-3">
                      <span className="text-5xl font-black text-[var(--text-primary)]">
                        {tier.price}
                      </span>
                      <span className="text-lg text-[var(--text-muted)]">
                        &euro;
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {tier.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div
                    className="h-px w-full mb-6"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${tier.color}40, transparent)`,
                    }}
                  />

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: tier.color }}
                        />
                        <span className="text-[var(--text-secondary)]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href="/seelen-profil/quiz"
                    className={`w-full text-center inline-flex items-center justify-center gap-2 font-semibold rounded-full px-6 py-3.5 transition-all hover:scale-105 ${
                      tier.highlighted
                        ? "bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-[var(--bg-primary)]"
                        : "border border-[var(--glass-border-gold)] text-[var(--gold)] hover:bg-[rgba(201,163,92,0.1)] hover:border-[var(--gold)]"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Trust indicators */}
          <FadeIn className="mt-12" delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                Sichere Bezahlung
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4" />
                Sofort verfügbar
              </span>
              <span className="flex items-center gap-1.5">
                <Share2 className="w-4 h-4" />
                Teilbare Profil-URL
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4" />
                Jahres-Energie Updates
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* ═══════════════════════════════════════
          SECTION 5: COMPARISON
          ═══════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <FadeIn className="text-center mb-6">
            <span className="text-[var(--gold)] text-sm uppercase tracking-[0.2em] font-medium">
              Warum 9 Dimensionen?
            </span>
          </FadeIn>

          <FadeIn className="text-center mb-4" delay={0.05}>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)]">
              Tiefer als MBTI,{" "}
              <span className="text-gradient-gold">
                persönlicher als Enneagram
              </span>
            </h2>
          </FadeIn>

          <FadeIn className="text-center mb-16" delay={0.1}>
            <p className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto">
              Die meisten Persönlichkeitssysteme reduzieren dich auf wenige
              Kategorien. Dein Seelen-Profil erfasst dein ganzes Wesen --
              von deinem Schatten bis zu deinem kosmischen Auftrag.
            </p>
          </FadeIn>

          {/* Comparison table */}
          <FadeIn delay={0.15}>
            <div className="glass-card overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 p-4 md:p-6 border-b border-[var(--glass-border)] text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">
                <span>System</span>
                <span>Dimensionen</span>
                <span>Abdeckung</span>
              </div>

              {/* Rows */}
              {comparisons.map((comp) => (
                <div
                  key={comp.system}
                  className={`grid grid-cols-3 gap-4 p-4 md:p-6 border-b border-[var(--glass-border)] last:border-b-0 ${
                    comp.isHighlighted
                      ? "bg-[var(--gold)]/5"
                      : ""
                  }`}
                >
                  <span
                    className={`font-bold text-sm md:text-base ${
                      comp.isHighlighted
                        ? "text-gradient-gold"
                        : "text-[var(--text-primary)]"
                    }`}
                  >
                    {comp.isHighlighted && (
                      <Crown className="w-4 h-4 inline mr-1.5 text-[var(--gold)]" />
                    )}
                    {comp.system}
                  </span>
                  <span
                    className={`text-sm md:text-base ${
                      comp.isHighlighted
                        ? "text-[var(--gold)] font-bold"
                        : "text-[var(--text-secondary)]"
                    }`}
                  >
                    {comp.dimensions}
                  </span>
                  <span
                    className={`text-xs md:text-sm ${
                      comp.isHighlighted
                        ? "text-[var(--teal)]"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    {comp.limitation}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Visual emphasis */}
          <FadeIn className="mt-12" delay={0.3}>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="glass-card p-6">
                <Fingerprint className="w-8 h-8 text-[var(--gold)] mx-auto mb-3" />
                <h4 className="font-bold text-[var(--text-primary)] mb-1">
                  Einzigartig
                </h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  22 Archetypen x 9 Dimensionen = ein Profil, das nur du hast
                </p>
              </div>
              <div className="glass-card p-6">
                <Users className="w-8 h-8 text-[var(--teal)] mx-auto mb-3" />
                <h4 className="font-bold text-[var(--text-primary)] mb-1">
                  Ganzheitlich
                </h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  Psyche, Energie, Kosmos und Intuition in einem System
                </p>
              </div>
              <div className="glass-card p-6">
                <Zap className="w-8 h-8 text-[#FBBF24] mx-auto mb-3" />
                <h4 className="font-bold text-[var(--text-primary)] mb-1">
                  Dynamisch
                </h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  Jahres-Energie aktualisiert sich -- dein Profil wächst mit dir
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* ═══════════════════════════════════════
          SECTION 6: FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <FadeIn className="text-center mb-6">
            <span className="text-[var(--gold)] text-sm uppercase tracking-[0.2em] font-medium">
              Häufige Fragen
            </span>
          </FadeIn>

          <FadeIn className="text-center mb-16" delay={0.05}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              Alles, was du{" "}
              <span className="text-gradient-gold">wissen möchtest</span>
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.06}>
                <div className="glass-card p-6">
                  <h3 className="text-base md:text-lg font-bold text-[var(--text-primary)] mb-3 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* ═══════════════════════════════════════
          SECTION 7: FINAL CTA
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201, 163, 92, 0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <Sparkles className="w-12 h-12 text-[var(--gold)] mx-auto mb-6" />
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Bereit, deine{" "}
              <span className="text-magic">Seele zu entdecken</span>?
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
              Die Karten kennen deine Geschichte. In 10 Minuten erfährst du,
              was dein kosmischer Fingerabdruck über dein wahres Wesen verrät
              -- über deine Stärken, Schatten und deinen Seelenauftrag.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/seelen-profil/quiz"
                className="btn-cta-glow inline-flex items-center gap-2 bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-[var(--bg-primary)] font-semibold rounded-full px-10 py-4 text-lg hover:scale-105 transition-transform"
              >
                <Sparkles className="w-5 h-5" />
                Jetzt Seelen-Profil erstellen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-6 text-sm text-[var(--text-muted)]">
              Ab 49 &euro; &middot; 10 Minuten Quiz &middot; Sofort dein Ergebnis
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
