# Homepage-Redesign "Mystische Magie" — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the landing page homepage from a generic look to a deeply magical, teal-dominant experience matching the original elfenorakel.de — with card-drawing front and center.

**Architecture:** CSS-first approach. Add 6 new keyframes + utility classes to globals.css, then enhance Hero/MiniReading/SeelenProfilCTA components with magical decorative elements. Merge social sections. Restructure page.tsx section order.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS 4, Framer Motion, CSS Keyframe Animations

---

## Task 1: CSS Foundation — Neue Keyframes & Utility-Klassen

**Files:**
- Modify: `src/app/globals.css` (nach Zeile ~674, vor den Section-Dividers oder nach den Energy-Rings)

**Step 1: Add new keyframes to globals.css**

Füge nach dem bestehenden `energy-pulse` Keyframe (Zeile ~741) und vor der Vignette (~744) folgende neuen Keyframes ein:

```css
/* ═══════════════════════════════════════════════════════════════
   HOMEPAGE REDESIGN — Magical Effects
   ═══════════════════════════════════════════════════════════════ */

/* Card-Shimmer — golden sweep over card backs */
@keyframes card-shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

/* Text-Glow-Breathing — atmendes Teal-Leuchten auf Überschriften */
@keyframes text-glow-breath {
  0%, 100% { text-shadow: 0 0 10px rgba(45, 212, 191, 0.3); }
  50% { text-shadow: 0 0 25px rgba(45, 212, 191, 0.6), 0 0 50px rgba(201, 163, 92, 0.2); }
}

/* Corner-Accent-Pulse — pulsierende Ecken */
@keyframes corner-pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

/* Rune-Float — schwebende mystische Symbole */
@keyframes rune-float {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
  50% { transform: translateY(-20px) rotate(5deg); opacity: 0.7; }
}

/* Oracle-Glow-Pulse — mehrstufiger Glow auf gezogenen Karten */
@keyframes oracle-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(45, 212, 191, 0.3), 0 0 60px rgba(201, 163, 92, 0.2); }
  50% { box-shadow: 0 0 30px rgba(45, 212, 191, 0.5), 0 0 80px rgba(201, 163, 92, 0.3), 0 0 100px rgba(45, 212, 191, 0.15); }
}
```

**Step 2: Add new utility classes**

Direkt nach den Keyframes:

```css
/* Floating Runes */
.floating-rune {
  position: absolute;
  pointer-events: none;
  animation: rune-float 8s ease-in-out infinite;
  font-size: 1.5rem;
  color: var(--teal);
  opacity: 0.4;
}

/* Corner Accents — L-förmige Ecken */
.corner-accent {
  position: absolute;
  width: 24px;
  height: 24px;
  pointer-events: none;
  animation: corner-pulse 3s ease-in-out infinite;
}
.corner-accent-tl { top: 0; left: 0; border-top: 2px solid var(--teal); border-left: 2px solid var(--teal); }
.corner-accent-tr { top: 0; right: 0; border-top: 2px solid var(--teal); border-right: 2px solid var(--teal); }
.corner-accent-bl { bottom: 0; left: 0; border-bottom: 2px solid var(--teal); border-left: 2px solid var(--teal); }
.corner-accent-br { bottom: 0; right: 0; border-bottom: 2px solid var(--teal); border-right: 2px solid var(--teal); }

/* Text Glow */
.text-glow-teal {
  animation: text-glow-breath 4s ease-in-out infinite;
}

/* Oracle Card Glow */
.oracle-card-glow {
  animation: oracle-glow 3s ease-in-out infinite;
}

/* Card Shimmer Overlay — auf Kartenrückseiten */
.card-shimmer-effect {
  position: relative;
  overflow: hidden;
}
.card-shimmer-effect::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(201, 163, 92, 0.12) 50%, transparent 100%);
  background-size: 200% 100%;
  animation: card-shimmer 3s linear infinite;
  pointer-events: none;
  border-radius: inherit;
}

/* Teal CTA Button */
.btn-cta-teal {
  background: linear-gradient(135deg, var(--teal-deep), var(--teal));
  color: white;
  border: 1px solid rgba(45, 212, 191, 0.3);
  font-weight: 600;
  transition: all 0.3s ease;
}
.btn-cta-teal:hover {
  box-shadow: 0 0 20px rgba(45, 212, 191, 0.4), 0 0 40px rgba(45, 212, 191, 0.2);
  border-color: var(--teal);
}
```

**Step 3: Teal-Shift für text-gradient-gold**

Ändere `.text-gradient-gold` (Zeile ~179-184) NICHT, da es an vielen Stellen verwendet wird. Stattdessen füge eine neue Klasse hinzu:

```css
/* Teal-dominant text gradient for homepage */
.text-gradient-teal {
  background: linear-gradient(135deg, var(--teal-light), var(--gold), var(--teal));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**Step 4: Build prüfen**

Run: `npm run build`
Expected: Clean build, keine Fehler

**Step 5: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: add magical CSS keyframes and utility classes for homepage redesign"
```

---

## Task 2: Hero Section — Mystische Elemente & Teal-CTA

**Files:**
- Modify: `src/components/sections/Hero.tsx`

**Step 1: Füge Floating Runes, Mystical Circles und Corner Accents hinzu**

Die Hero-Komponente (`src/components/sections/Hero.tsx`) bekommt dekorative Elemente im JSX.

Ersetze den Content-Block der Hero-Section mit diesen Ergänzungen:

1. **Mystische Kreise** — hinter dem Content (im Section-Element, vor dem Content-Div):
```tsx
{/* Mystical Circles */}
<div className="mystical-circle mystical-circle-outer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]" />
<div className="mystical-circle mystical-circle-middle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px]" />
<div className="mystical-circle mystical-circle-inner absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[350px] md:h-[350px]" />
```

2. **Floating Runes** — verteilt in der Section:
```tsx
{/* Floating Runes */}
<span className="floating-rune top-[15%] left-[8%] text-[var(--teal)]" style={{ animationDelay: '0s', animationDuration: '8s' }}>✦</span>
<span className="floating-rune top-[35%] right-[10%] text-[var(--gold)]" style={{ animationDelay: '2s', animationDuration: '10s' }}>☽</span>
<span className="floating-rune bottom-[20%] left-[12%] text-[var(--teal)]" style={{ animationDelay: '4s', animationDuration: '12s' }}>★</span>
<span className="floating-rune top-[60%] right-[15%] text-[var(--teal-light)]" style={{ animationDelay: '1s', animationDuration: '9s' }}>⊹</span>
```

3. **Corner Accents** — am äußeren Content-Container:
```tsx
{/* Corner Accents */}
<div className="corner-accent corner-accent-tl" style={{ animationDelay: '0s' }} />
<div className="corner-accent corner-accent-tr" style={{ animationDelay: '0.75s' }} />
<div className="corner-accent corner-accent-bl" style={{ animationDelay: '1.5s' }} />
<div className="corner-accent corner-accent-br" style={{ animationDelay: '2.25s' }} />
```

4. **H1 Text-Glow**: Ändere die H1-Klasse von `text-gradient-gold` zu `text-gradient-gold text-glow-teal`

5. **CTA-Button Teal**: Ändere den primären CTA-Button:
   - Von: `<Button size="lg" onClick={scrollToReadings}>`
   - Zu: Teal-Gradient-Button, Text "Karte ziehen ✦", scrollt zu `#mini-reading`

6. **scrollToReadings umbenennen** zu `scrollToMiniReading` — scrollt zu `document.getElementById("mini-reading")`

**Step 2: Build prüfen**

Run: `npm run build`
Expected: Clean build

**Step 3: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat: add mystical circles, floating runes and teal CTA to Hero"
```

---

## Task 3: MiniReading — Card-Shimmer & Oracle-Glow

**Files:**
- Modify: `src/components/sections/MiniReading.tsx`

**Step 1: Card-Shimmer auf Kartenrückseiten**

In der Card-Selection (Zeile ~220), ändere die Karten-Rückseite:
- Füge `card-shimmer-effect` Klasse zum Card-Back-Div hinzu (Zeile ~221)
- Von: `<div className="absolute inset-0 bg-gradient-to-br from-[var(--gold-dim)] via-[var(--bg-card)] to-[var(--gold-dim)] rounded-lg border border-[var(--gold)]/30">`
- Zu: `<div className="absolute inset-0 bg-gradient-to-br from-[var(--gold-dim)] via-[var(--bg-card)] to-[var(--gold-dim)] rounded-lg border border-[var(--gold)]/30 card-shimmer-effect">`

**Step 2: Oracle-Glow auf gezogene Karten**

In der Result-Phase (Zeile ~259), ändere den glow auf gezogenen Karten:
- Von: `glow-gold`
- Zu: `oracle-card-glow`

**Step 3: Hover-Glow intensiver**

In der Card-Selection (Zeile ~228), ändere den Hover-Glow:
- Von: `bg-[var(--gold)]/10`
- Zu: `bg-gradient-to-t from-[var(--teal)]/20 to-[var(--gold)]/10`

**Step 4: Corner-Accents am Result-Container**

In der Result-CTA `glass-card` (Zeile ~282), füge Corner-Accents hinzu:
```tsx
<motion.div ... className="glass-card p-6 md:p-8 max-w-2xl mx-auto relative">
  <div className="corner-accent corner-accent-tl" />
  <div className="corner-accent corner-accent-tr" style={{ animationDelay: '0.75s' }} />
  <div className="corner-accent corner-accent-bl" style={{ animationDelay: '1.5s' }} />
  <div className="corner-accent corner-accent-br" style={{ animationDelay: '2.25s' }} />
  ...
</motion.div>
```

**Step 5: Mystische Kreise im Hintergrund der Section**

Am Anfang der Section (Zeile ~88), füge subtile Hintergrund-Kreise ein:
```tsx
<section id="mini-reading" className="py-24 relative overflow-hidden">
  {/* Subtle mystical circles */}
  <div className="mystical-circle mystical-circle-outer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-30" />
  <div className="mystical-circle mystical-circle-middle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] opacity-20" />
  ...
```

**Step 6: Build prüfen**

Run: `npm run build`
Expected: Clean build

**Step 7: Commit**

```bash
git add src/components/sections/MiniReading.tsx
git commit -m "feat: add card-shimmer, oracle-glow and corner-accents to MiniReading"
```

---

## Task 4: SeelenProfilCTA — Größer, Glow-Border, Aurora-BG

**Files:**
- Modify: `src/components/sections/SeelenProfilCTA.tsx`

**Step 1: Größeres Layout, Teal-Glow-Border, Aurora-Hintergrund**

Komplettes Refactoring der SeelenProfilCTA-Komponente:

1. **Section-Padding erhöhen**: `py-20` → `py-24`
2. **Max-Width erweitern**: `max-w-4xl` → `max-w-5xl`
3. **Border-Glow**: Ersetze `border border-[var(--glass-border-gold)]` mit `border-2 border-[var(--teal)]/30` und füge pulsierenden Teal-Glow als box-shadow hinzu (via `glow-pulse` Klasse, aber mit Teal)
4. **Aurora-Hintergrund**: Füge im Link-Element Gradient-Blobs ein:
```tsx
{/* Aurora Background Blobs */}
<div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
  <div className="absolute -top-20 -right-20 w-60 h-60 bg-[var(--teal)]/8 rounded-full blur-3xl" />
  <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[var(--gold)]/6 rounded-full blur-3xl" />
</div>
```

5. **Icon animiert**: Füge `glow-pulse` zur Icon-Div hinzu
6. **Text-Gradient**: Ändere H3 von `text-gradient-gold` zu `text-gradient-teal`
7. **Padding vergrößern**: `p-8 md:p-12` → `p-10 md:p-16`
8. **Hover-Shadow**: Teal statt Gold — `hover:shadow-[0_0_60px_rgba(45,212,191,0.2)]`
9. **Border-Hover**: `hover:border-[var(--teal)]` statt `hover:border-[var(--gold)]`

**Step 2: Build prüfen**

Run: `npm run build`
Expected: Clean build

**Step 3: Commit**

```bash
git add src/components/sections/SeelenProfilCTA.tsx
git commit -m "feat: upgrade SeelenProfilCTA with teal glow-border and aurora background"
```

---

## Task 5: Social Section — ShortsShowcase + TikTok-Stats zusammenlegen

**Files:**
- Modify: `src/components/sections/ShortsShowcase.tsx`

**Step 1: TikTok-Stats in ShortsShowcase integrieren**

Unter dem Shorts-Carousel und dem "Alle Shorts ansehen"-Link, füge eine kompakte Social-Stats-Zeile ein:

```tsx
{/* Social Stats — YouTube + TikTok */}
<FadeIn className="mt-12 max-w-3xl mx-auto px-4">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
    {/* YouTube */}
    <a href="https://youtube.com/@elfenorakel" target="_blank" rel="noopener noreferrer"
       className="flex items-center gap-3 group">
      <div className="w-10 h-10 rounded-full bg-red-600/10 border border-red-600/20 flex items-center justify-center group-hover:border-red-600/50 transition-colors">
        <Youtube className="w-5 h-5 text-red-500" />
      </div>
      <div>
        <p className="text-sm font-semibold text-[var(--text-primary)]">YouTube</p>
        <p className="text-xs text-[var(--text-muted)]">Tägliche Readings</p>
      </div>
    </a>
    {/* TikTok */}
    <a href="https://tiktok.com/@elfenorakel" target="_blank" rel="noopener noreferrer"
       className="flex items-center gap-3 group">
      <div className="w-10 h-10 rounded-full bg-[#F472B6]/10 border border-[#F472B6]/20 flex items-center justify-center group-hover:border-[#F472B6]/50 transition-colors">
        <Music2 className="w-5 h-5 text-[#F472B6]" />
      </div>
      <div>
        <p className="text-sm font-semibold text-[var(--text-primary)]">TikTok</p>
        <p className="text-xs text-[var(--text-muted)]">60-Sekunden Impulse</p>
      </div>
    </a>
  </div>
</FadeIn>
```

Dafür `Music2` und `Youtube` importieren (Youtube ist schon nicht importiert — prüfen und ggf. hinzufügen).

**Step 2: Build prüfen**

Run: `npm run build`
Expected: Clean build

**Step 3: Commit**

```bash
git add src/components/sections/ShortsShowcase.tsx
git commit -m "feat: integrate social stats into ShortsShowcase section"
```

---

## Task 6: page.tsx — Section-Reihenfolge ändern

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Neue Section-Reihenfolge implementieren**

```tsx
import dynamic from "next/dynamic";
import { Hero, ShortsShowcase } from "@/components/sections";
import { CosmicBackground } from "@/components/backgrounds";

const MiniReading = dynamic(
  () => import("@/components/sections/MiniReading").then((m) => m.MiniReading)
);
const SeelenProfilCTA = dynamic(
  () => import("@/components/sections/SeelenProfilCTA").then((m) => m.SeelenProfilCTA)
);

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <CosmicBackground intensity="intense" position="fixed" />
      <div className="relative z-10">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Mini-Reading — Kartenziehen */}
        <MiniReading />

        {/* Gradient divider */}
        <div className="section-divider mx-auto max-w-4xl" />

        {/* 3. Seelen-Profil CTA */}
        <SeelenProfilCTA />

        {/* Gradient divider */}
        <div className="section-divider mx-auto max-w-4xl" />

        {/* 4. Social Proof — Shorts + TikTok Stats */}
        <ShortsShowcase />
      </div>
    </div>
  );
}
```

**Entfernt:**
- `ReadingsShowcase` (bleibt auf `/readings`)
- `AppShowcase` (kein App-Link mehr)
- `TikTokShowcase` (in ShortsShowcase integriert)

**Step 2: sections/index.ts prüfen**

Sicherstellen dass `MiniReading` exportiert wird. Falls nicht, zum barrel export hinzufügen:
```ts
export { MiniReading } from "./MiniReading";
```

Oder alternativ bleibt der dynamic import direkt auf den Dateipfad.

**Step 3: Build prüfen**

Run: `npm run build`
Expected: Clean build, keine unused imports

**Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: restructure homepage — Hero → MiniReading → SeelenProfil → Social"
```

---

## Task 7: Visuelles QA & Build-Verifizierung

**Step 1: Production Build**

Run: `npm run build`
Expected: Clean build, keine Errors oder Warnings

**Step 2: Dev-Server starten und visuell prüfen**

Run: `npm run dev` (Port 3005)
Prüfe:
- Startseite lädt korrekt
- Hero zeigt mystische Kreise, Runen, Text-Glow
- Mini-Reading direkt nach Hero, Card-Shimmer sichtbar
- SeelenProfil CTA mit Teal-Glow-Border
- ShortsShowcase mit Social-Stats
- Keine Layoutprobleme auf Mobile

**Step 3: Reduced Motion prüfen**

Alle neuen Animationen werden durch `prefers-reduced-motion` disabled (bereits global definiert in globals.css Zeile ~526-534).

**Step 4: Final Commit**

Falls nötig, letzte Fixes committen.

---

## Zusammenfassung

| Task | Dateien | Beschreibung |
|------|---------|-------------|
| 1 | `globals.css` | 6 Keyframes + Utility-Klassen + text-gradient-teal |
| 2 | `Hero.tsx` | Runes, Circles, Corners, Text-Glow, Teal-CTA |
| 3 | `MiniReading.tsx` | Card-Shimmer, Oracle-Glow, Corners, BG-Circles |
| 4 | `SeelenProfilCTA.tsx` | Größer, Teal-Glow-Border, Aurora-BG |
| 5 | `ShortsShowcase.tsx` | Social-Stats (YouTube + TikTok) integrieren |
| 6 | `page.tsx` | Section-Reihenfolge: Hero → Mini → Seelen → Social |
| 7 | — | Build, Dev-Server, Visuelles QA |
