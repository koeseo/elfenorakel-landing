# Homepage-Redesign "Mystische Magie" — Design-Dokument

**Ziel:** Die Startseite von `elfenorakel-landing` visuell auf das Level der alten `elfenorakel.de` heben. Teal-dominante Farbgebung, magische Effekte, interaktives Kartenziehen prominent einbinden.

**Primäres Ziel der Seite:** Kartenziehen + Staunen — Besucher sollen die Magie erleben und dann zum Seelen-Profil Quiz konvertieren.

**Ansatz:** Magisches Upgrade (Ansatz A) — bestehende Komponenten refactoren, CSS-Effekte hinzufügen, Section-Reihenfolge ändern.

---

## Section-Reihenfolge (NEU)

```
1. Hero (überarbeitet — Teal-dominant, Runen, mystische Kreise)
2. Mini-Reading (NEU auf Startseite — Kartenziehen)
3. Seelen-Profil CTA (aufgewertet — größer, prominenter)
4. Social Proof (YouTube Shorts + TikTok zusammengelegt)
```

**Entfernt von Startseite:**
- ReadingsShowcase (bleibt auf /readings)
- AppShowcase (kein App-Link mehr)

---

## Section 1: Hero

### Was ändert sich:
- Teal als dominante Glow-Farbe statt Gold
- Schwebende Runen-Symbole (✦ ☽ ★ ⊹) links und rechts, 8s Float-Animation
- Mystische Kreise (dashed borders, Teal/Gold, langsam rotierend 30-80s) hinter dem Text
- H1 "Elfenorakel" mit Text-Glow-Breathing (atmendes Teal-Leuchten, 4s)
- Corner-Accents (gepulste L-förmige Ecken, Teal, 3s versetzt)
- CTA-Button: Teal-Gradient mit Gold-Glow auf Hover

### Was bleibt:
- CosmicBackground (intense)
- Framer Motion Fade-ins
- Scroll-Indicator
- Badge "Mystische Guidance"

### Neue Elemente:
```
[Mystical Circle 1: dashed, Teal, 60s rotate, opacity 0.15]
[Mystical Circle 2: dashed, Gold, 45s reverse, opacity 0.1]
[Floating Rune ✦: links oben, Teal, 8s float]
[Floating Rune ☽: rechts mitte, Gold, 10s float]
[Floating Rune ★: links unten, Teal, 12s float]
[Corner Accents: 4 Ecken, Teal, 3s pulse versetzt]

H1 "Elfenorakel" → text-glow-breath (teal shadow 4s)
CTA → bg-gradient teal-deep → teal, border-teal, hover: glow-teal
```

---

## Section 2: Mini-Reading (auf Startseite)

### Was ändert sich:
- Aus separater Section auf Startseite direkt nach Hero
- Card-Shimmer-Effekt auf Kartenrückseiten (goldener Glitter-Sweep, 3s)
- Hover-Glow intensiver (Teal-Gold pulsierend)
- Mystische Kreise im Hintergrund der Section (wie Hero, aber subtiler)
- Oracle-Glow um gezogene Karten (mehrstufiger Box-Shadow: Gold 60px + Teal 100px)
- Ergebnis-CTA führt zum Seelen-Profil Quiz (schon implementiert)
- Corner-Accents am Result-Container

### Was bleibt:
- 3-Karten-Logik (Vergangenheit/Gegenwart/Zukunft)
- Flip-Animation (rotateY)
- 7 Karten zur Auswahl
- Reset-Button

### Neue Effekte:
```css
/* Card-Shimmer auf Rückseiten */
@keyframes card-shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
/* 3s linear infinite, goldener Sweep über Card-Back */

/* Oracle-Glow auf gezogenen Karten */
.oracle-glow {
  box-shadow:
    0 0 20px rgba(45, 212, 191, 0.4),
    0 0 60px rgba(201, 163, 92, 0.3),
    0 0 100px rgba(45, 212, 191, 0.15);
}
```

---

## Section 3: Seelen-Profil CTA

### Was ändert sich:
- Größer, prominenter — volle Breite statt kleine Card
- Teal-Glow-Border (pulsierend, 3s) statt subtiles Glass
- Hintergrund-Aurora-Effekt (subtile Teal/Gold Gradient-Blobs)
- Icon animiert: langsame Glow-Pulse (3s)
- Text-Gradient: Teal-light → Gold → Teal

### Was bleibt:
- Link zum /seelen-profil Quiz
- Beschreibungstext

---

## Section 4: Social Proof (zusammengelegt)

### Was ändert sich:
- Shorts-Carousel und TikTok-Stats zu einer kompakten Section
- Layout: Carousel oben, darunter Social-Stats (YouTube + TikTok nebeneinander)
- Teal-Akzente konsistent
- Weniger Screen-Real-Estate

### Was bleibt:
- Shorts-Carousel (CSS infinite scroll)
- Follower-Counts, Engagement-Stats
- Links zu YouTube/TikTok

---

## Globale CSS-Änderungen

### Farbverschiebung: Gold-dominant → Teal-dominant

| Element | Vorher | Nachher |
|---------|--------|---------|
| `text-gradient-gold` | gold-light → gold → gold-dim | teal-light → gold → teal |
| Primary Button | bg-gold, text-bg-primary | bg-gradient teal-deep → teal |
| Glass-Card Hover | border-gold | border-teal |
| Glow-Effekte | Gold box-shadow | Teal + Gold multi-layer |
| Badge-Text | text-gold | text-teal |
| Section-Divider | gold gradient | teal gradient |

### Neue CSS-Keyframes

```css
/* 1. Card-Shimmer */
@keyframes card-shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

/* 2. Text-Glow-Breathing */
@keyframes text-glow-breath {
  0%, 100% { text-shadow: 0 0 10px rgba(45, 212, 191, 0.3); }
  50% { text-shadow: 0 0 25px rgba(45, 212, 191, 0.6), 0 0 50px rgba(201, 163, 92, 0.2); }
}

/* 3. Corner-Accent-Pulse */
@keyframes corner-pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

/* 4. Rune-Float */
@keyframes rune-float {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
  50% { transform: translateY(-20px) rotate(5deg); opacity: 0.7; }
}

/* 5. Mystical-Circle-Rotate */
@keyframes mystical-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 6. Oracle-Glow-Pulse */
@keyframes oracle-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(45,212,191,0.3), 0 0 60px rgba(201,163,92,0.2); }
  50% { box-shadow: 0 0 30px rgba(45,212,191,0.5), 0 0 80px rgba(201,163,92,0.3); }
}
```

### Neue Utility-Klassen

```css
.floating-rune { position: absolute; animation: rune-float 8s ease-in-out infinite; pointer-events: none; }
.mystical-circle { position: absolute; border: 1px dashed; border-radius: 50%; animation: mystical-rotate linear infinite; pointer-events: none; }
.corner-accent { position: absolute; width: 20px; height: 20px; border-color: var(--teal); animation: corner-pulse 3s ease-in-out infinite; }
.text-glow { animation: text-glow-breath 4s ease-in-out infinite; }
.oracle-card-glow { animation: oracle-glow 3s ease-in-out infinite; }
.card-shimmer::after { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent); background-size: 200% 100%; animation: card-shimmer 3s linear infinite; }
```

---

## Dateien die geändert werden

| Datei | Aktion |
|-------|--------|
| `src/app/page.tsx` | Section-Reihenfolge ändern, MiniReading hinzufügen |
| `src/app/globals.css` | Neue Keyframes, Utility-Klassen, Farbverschiebung |
| `src/components/sections/Hero.tsx` | Runen, mystische Kreise, Corner-Accents, Teal-CTA |
| `src/components/sections/MiniReading.tsx` | Card-Shimmer, Oracle-Glow, Corner-Accents |
| `src/components/sections/SeelenProfilCTA.tsx` | Größer, Glow-Border, Aurora-BG |
| `src/components/sections/ShortsShowcase.tsx` | Social-Stats integrieren |
| `src/components/sections/TikTokShowcase.tsx` | In ShortsShowcase zusammengelegt oder entfernt |

---

## Performance-Hinweise

- Alle neuen Animationen sind CSS-only (kein JS), GPU-beschleunigt
- `pointer-events: none` auf dekorative Elemente
- `will-change: transform, opacity` nur wo nötig
- `prefers-reduced-motion` respektieren — alle Animationen deaktivierbar
- Keine neuen Libraries nötig
