# Elfenorakel Landing - Claude Code Instructions

## Projekt-Übersicht

**Elfenorakel Landing** ist die visuelle Showcase-Website für das Elfenorakel - eine mystische Tarot-Plattform von Elfi Christina Riethmüller.

| Aspekt | Details |
|--------|---------|
| **Typ** | Next.js 15 Landing Page |
| **Domain** | next.elfenorakel.de |
| **Zweck** | Showcase + App Conversion |
| **Deployment** | Coolify auf Contabo (185.150.25.225) |

---

## Tech-Stack

```
Next.js 15 (App Router)
React 19
TypeScript 5
Tailwind CSS 4
Framer Motion      → UI-Animationen
GSAP + ScrollTrigger → Scroll-Effekte
React Three Fiber  → 3D Components
Three.js           → Partikel/Nebel
Lucide Icons
```

---

## Projektstruktur

```
src/
├── app/
│   ├── layout.tsx              # Root Layout + Theme
│   ├── page.tsx                # Home
│   ├── readings/page.tsx
│   ├── tarot/
│   │   ├── page.tsx            # Galerie
│   │   └── [slug]/page.tsx     # Detail
│   ├── ueber-elfi/page.tsx
│   ├── blog/
│   ├── shop/page.tsx
│   ├── kontakt/page.tsx
│   └── (legal)/                # Impressum, Datenschutz, AGB
├── components/
│   ├── layout/                 # Header, Footer, Nav
│   ├── three/                  # 3D (Hero, Particles)
│   ├── sections/               # Page Sections
│   ├── ui/                     # Buttons, Cards
│   └── mini-reading/           # Kartenziehen Feature
├── lib/
│   ├── tarot-data.ts           # 78 Karten Daten
│   └── utils.ts
└── styles/
    └── globals.css
```

---

## Design System

### Dark Mode (Cosmic Mystical)
```css
--bg-primary: #0A0A0C;
--bg-secondary: #121218;
--gold: #C9A35C;
--gold-light: #F4E3B1;
--teal: #2DD4BF;
```

### Light Mode (Ethereal Warmth)
```css
--bg-primary: #FFFBF5;
--bg-secondary: #FFF8EE;
--gold: #996B1F;
--teal: #0D9488;
```

---

## Coding Rules

### Components
- Functional Components mit Arrow Functions
- Server Components bevorzugen
- `"use client"` nur für interaktive Komponenten

### 3D Components
- Immer in `dynamic()` mit `ssr: false` laden
- Suspense Boundaries für Loading States
- Performance: `useFrame` mit Throttling

### Animations
- Framer Motion: UI, Page Transitions
- GSAP: Scroll-Animationen
- `prefers-reduced-motion` respektieren

### Styling
- Tailwind CSS
- CSS Variables für Theming
- Glassmorphism für Cards

---

## Key Features

### 1. 3D Hero
- Kosmischer Nebel (Three.js Particles)
- 3 schwebende Tarot-Karten
- Maus-Interaktion

### 2. Mini-Reading
- 3 Karten ziehen
- 3D Flip Animation
- Partikel-Effekte
- → App CTA

### 3. App Showcase
- GSAP ScrollTrigger
- Phone Mockups
- Feature-Präsentation

---

## Commands

```bash
npm run dev      # Development
npm run build    # Production Build
npm run start    # Production Server
npm run lint     # ESLint
```

---

## Assets

Kopiert aus `/Users/gokhankose/appz/elfenorakel/`:
- `cards/tarot/` → 78 Karten
- `backgrounds/` → Cosmic Backgrounds

---

## Verbundene Projekte

| Projekt | Domain | Zweck |
|---------|--------|-------|
| elfenorakel | elfenorakel.de | Statische HTML-Seite |
| elfenorakel-app | app.elfenorakel.de | Next.js App (Auth, DB, AI) |
| **elfenorakel-landing** | next.elfenorakel.de | Diese Landing Page |

---

## Deployment

```bash
# Coolify auf 185.150.25.225
# GitHub Repo → Auto-Deploy
# Domain: next.elfenorakel.de
```
