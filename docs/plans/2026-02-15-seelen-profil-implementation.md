# Seelen-Profil Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a 9-dimensional Tarot-based personality profiling product ("Seelen-Profil") on the existing Next.js landing page with quiz, payment, and interactive profile delivery.

**Architecture:** Next.js 15 App Router with Supabase for profile storage, PayPal/Mollie for payments. Quiz flow captures birth data + intuitive card selection → deterministic algorithm computes 9-dimensional profile → tiered payment unlocks full access. All content (22 archetypes, 78 cards, moon phases etc.) lives in TypeScript data files.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, Supabase (user's own), PayPal/Mollie, @react-pdf/renderer, Three.js (card selection), Framer Motion (quiz transitions)

**Design Doc:** `docs/plans/2026-02-15-seelen-profil-design.md`

---

## Phase 1: Data Foundation (Core Library)

The algorithm and data that powers everything. No UI yet — pure logic.

### Task 1: Extract Tarot Data into Shared Library

Currently the 78 cards live inline in `src/app/tarot/page.tsx`. Extract into reusable module.

**Files:**
- Create: `src/lib/seelen-profil/tarot-karten.ts`
- Modify: `src/app/tarot/page.tsx` (import from new module instead of inline)

**Step 1:** Create `src/lib/seelen-profil/tarot-karten.ts` with full card data.

Export structure:
```typescript
export interface TarotCard {
  id: string;
  name: string;
  number?: number;
  image: string;
  meaning: string;
  suit?: 'major' | 'staebe' | 'kelche' | 'schwerter' | 'muenzen';
  element?: 'feuer' | 'wasser' | 'luft' | 'erde';
}

export const majorArcana: TarotCard[] = [...]; // 22 cards
export const minorArcana: Record<string, TarotCard[]> = {...}; // 4 suits × 14
export const allCards: TarotCard[] = [...]; // flat array of all 78
```

Copy card data from `src/app/tarot/page.tsx` lines 10-33 (majorArcana) and 35+ (minorArcana). Add `suit` and `element` fields to each card.

Element mapping:
- staebe → feuer
- kelche → wasser
- schwerter → luft
- muenzen → erde
- major → no element (or mapped per card)

**Step 2:** Update `src/app/tarot/page.tsx` to import from new module.

Replace inline arrays with:
```typescript
import { majorArcana, minorArcana } from "@/lib/seelen-profil/tarot-karten";
```

**Step 3:** Verify: `npm run build` passes.

**Step 4:** Commit: `feat: extract tarot card data into shared library`

---

### Task 2: Build Core Algorithm — Numerology + Moon Phase

The deterministic algorithm that turns quiz input into a profile.

**Files:**
- Create: `src/lib/seelen-profil/algorithmus.ts`
- Create: `src/lib/seelen-profil/mondphasen.ts`

**Step 1:** Create `src/lib/seelen-profil/mondphasen.ts`

Moon phase calculation from birth date. Use the Meeus algorithm (Conway's method is simpler):

```typescript
export type MondphaseType =
  | 'neumond'
  | 'zunehmende_sichel'
  | 'erstes_viertel'
  | 'zunehmender_mond'
  | 'vollmond'
  | 'abnehmender_mond'
  | 'letztes_viertel'
  | 'abnehmende_sichel';

export interface MondphaseResult {
  phase: MondphaseType;
  name: string;       // "Neumond", "Zunehmende Sichel", etc.
  seelenzyklus: string; // "Samen-Seele", "Pionierin", etc.
  illumination: number; // 0-100%
}

// Calculate moon phase for a given date
export function berechneMondphase(date: Date): MondphaseResult { ... }
```

Algorithm: Conway's method or Meeus simplified — compute days since known new moon, divide by synodic month (29.530588 days), get phase angle.

**Step 2:** Create `src/lib/seelen-profil/algorithmus.ts`

```typescript
export interface QuizInput {
  vorname: string;
  geburtsdatum: Date;
  geburtszeit?: string; // HH:MM optional
  kartenwahl: string[]; // 5 card IDs
  seelenFragen: { frageId: string; antwort: string }[];
}

export interface SeelenProfil {
  archetypId: number;         // 0-21
  archetypName: string;
  elementSignatur: {
    feuer: number;
    wasser: number;
    luft: number;
    erde: number;
  };
  schattenKarte: string;      // card ID
  lichtKarte: string;         // card ID
  mondphase: MondphaseType;
  planet: string;
  chakra: string;
  kosmischeAufgabe: string;   // key for content lookup
  jahresEnergie: {
    jahr: number;
    arcanaId: number;
  };
}

// Main calculation function
export function berechneSeelenprofil(input: QuizInput): SeelenProfil { ... }

// Sub-functions:
export function berechneLebenszahl(date: Date): number { ... }
export function berechneElementSignatur(kartenIds: string[]): ElementSignatur { ... }
export function bestimmeSchattenKarte(karten: TarotCard[]): string { ... }
export function bestimmeLichtKarte(karten: TarotCard[]): string { ... }
export function berechneJahresEnergie(geburtsdatum: Date, jahr: number): number { ... }
```

Numerology: Sum all digits of DD+MM+YYYY, reduce to 0-21 (for values > 21, keep reducing).

Element signature: Count elements from 5 chosen cards, normalize to percentages.

Shadow card: Card with "darkest" meaning (predefined ranking per card).
Light card: Card with "lightest" meaning (predefined ranking per card).

Yearly energy: birthday + birth month + current year digits → reduce to 0-21.

**Step 3:** Verify: `npx tsc --noEmit` passes.

**Step 4:** Commit: `feat: add core Seelen-Profil algorithm and moon phase calculation`

---

### Task 3: Archetype Definitions + Planet/Chakra Mappings

Static data mapping each archetype to its planet and chakra.

**Files:**
- Create: `src/lib/seelen-profil/archetypen.ts`
- Create: `src/lib/seelen-profil/planeten.ts`
- Create: `src/lib/seelen-profil/chakras.ts`

**Step 1:** Create `src/lib/seelen-profil/archetypen.ts`

```typescript
export interface Archetyp {
  id: number;         // 0-21
  karteId: string;    // matches TarotCard.id
  name: string;       // "Die Freie Seele"
  karteName: string;  // "Der Narr"
  planet: string;     // "uranus"
  chakra: string;     // "kronenchakra"
  claim: string;      // One-sentence identity claim
  // Deep content (AI-generated, Elfi edits later)
  wesen: string;
  staerken: string;
  schattenSeite: string;
  inBeziehungen: string;
  imBeruf: string;
  elfiBotschaft: string;
  affirmation: string;
}

export const archetypen: Archetyp[] = [
  {
    id: 0,
    karteId: "narr",
    name: "Die Freie Seele",
    karteName: "Der Narr",
    planet: "uranus",
    chakra: "kronenchakra",
    claim: "Du lebst im Vertrauen — das Unbekannte ist dein Spielplatz.",
    wesen: "...", // ~200 words
    // ... etc
  },
  // ... all 22
];
```

Start with structure + short placeholders. Content generation is a separate task.

**Step 2:** Create `src/lib/seelen-profil/planeten.ts`

```typescript
export interface PlanetInfo {
  id: string;
  name: string;      // "Uranus"
  symbol: string;    // "♅"
  energie: string;   // Short description
  beschreibung: string; // ~250 words
}

export const planeten: Record<string, PlanetInfo> = { ... };
```

10 planets: sonne, mond, merkur, venus, mars, jupiter, saturn, uranus, neptun, pluto.

**Step 3:** Create `src/lib/seelen-profil/chakras.ts`

```typescript
export interface ChakraInfo {
  id: string;
  name: string;       // "Kronenchakra"
  farbe: string;      // "#7C3AED"
  position: string;   // "Scheitel"
  thema: string;      // Short theme
  beschreibung: string; // ~300 words
}

export const chakras: Record<string, ChakraInfo> = { ... };
```

7 chakras: wurzel, sakral, solarplexus, herz, hals, stirn, krone.

**Step 4:** Verify: `npx tsc --noEmit` passes.

**Step 5:** Commit: `feat: add archetype definitions with planet and chakra mappings`

---

### Task 4: Element + Moon Phase + Yearly Energy Content

**Files:**
- Create: `src/lib/seelen-profil/elemente.ts`
- Create: `src/lib/seelen-profil/mondphasen-content.ts`
- Create: `src/lib/seelen-profil/jahres-energie.ts`
- Create: `src/lib/seelen-profil/kosmische-aufgabe.ts`

**Step 1:** Create element content (`elemente.ts`):
```typescript
export interface ElementInfo {
  id: 'feuer' | 'wasser' | 'luft' | 'erde';
  name: string;
  symbol: string;
  farbe: string;
  beschreibung: string;  // ~300 words when dominant
  kombination: Record<string, string>; // secondary element → text
}
```

**Step 2:** Create moon phase content (`mondphasen-content.ts`):
```typescript
export interface MondphasenContent {
  phase: MondphaseType;
  name: string;
  seelenzyklus: string;
  beschreibung: string;   // ~400 words
  ritual: string;         // Practice/ritual for this phase
}
```

**Step 3:** Create yearly energy system (`jahres-energie.ts`):
```typescript
export interface JahresEnergieContent {
  arcanaId: number;       // 0-21
  titel: string;
  beschreibung: string;   // ~150 words
  impulse: string[];      // 3 concrete impulses
}
```

**Step 4:** Create cosmic task templates (`kosmische-aufgabe.ts`):
```typescript
// Template system: archetyp × dominant element → text
export function getKosmischeAufgabe(archetypId: number, dominantElement: string): string { ... }
```

**Step 5:** Verify: `npm run build` passes.

**Step 6:** Commit: `feat: add element, moon phase, yearly energy, and cosmic task content`

---

### Task 5: AI Content Generation

Generate all ~55,000 words of content. This task uses AI to write in Elfi's voice.

**Files:**
- Create: `src/lib/seelen-profil/karten-content.ts` (shadow/light texts for 78 cards)
- Modify: All content files from Tasks 3-4 (fill in placeholder text)

**Step 1:** Generate 22 archetype deep texts (~1000 words each) in Elfi's voice. Populate `archetypen.ts` fields: wesen, staerken, schattenSeite, inBeziehungen, imBeruf, elfiBotschaft, affirmation.

**Reference Elfi's voice from:** `src/app/ueber-elfi/page.tsx` — her existing copy style. Mystical but direct, uses "du", warm but honest, uses metaphors from nature/cosmos.

**Step 2:** Generate 78 card shadow/light texts (~200 words each) in `karten-content.ts`:
```typescript
export interface KartenContent {
  id: string;           // card ID
  schattenText: string; // ~200 words: what to integrate
  lichtText: string;    // ~200 words: highest potential
}
export const kartenContent: Record<string, KartenContent> = { ... };
```

**Step 3:** Fill all remaining content: planet descriptions, chakra descriptions, element descriptions, moon phase descriptions, yearly energy descriptions, cosmic task templates.

**Step 4:** Verify: `npm run build` passes.

**Step 5:** Commit: `feat: add AI-generated content for all profile dimensions`

---

## Phase 2: Supabase Integration

### Task 6: Supabase Client + Database Schema

**Files:**
- Create: `src/lib/supabase.ts`
- Create: `src/lib/seelen-profil/db.ts` (typed database operations)

**Step 1:** Install Supabase client:
```bash
npm install @supabase/supabase-js
```

**Step 2:** Create `src/lib/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side client with service role
export function createServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}
```

**Step 3:** Add env variables to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=<user's supabase url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key>
SUPABASE_SERVICE_ROLE_KEY=<service role key>
```

**Step 4:** Create database table in Supabase Dashboard (SQL):
```sql
CREATE TABLE seelen_profile (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  vorname TEXT NOT NULL,
  geburtsdatum DATE NOT NULL,
  geburtszeit TIME,
  kartenwahl JSONB,
  seelen_fragen JSONB,
  archetyp_id INT,
  element_signatur JSONB,
  schatten_karte TEXT,
  licht_karte TEXT,
  mondphase TEXT,
  planet TEXT,
  chakra TEXT,
  kosmische_aufgabe TEXT,
  jahres_energie JSONB,
  tier TEXT DEFAULT 'free_teaser',
  payment_status TEXT DEFAULT 'pending',
  payment_id TEXT,
  paid_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE UNIQUE INDEX idx_seelen_profile_email ON seelen_profile(email);
CREATE INDEX idx_seelen_profile_payment ON seelen_profile(payment_status);

-- RLS: profiles readable by anyone with the UUID (for sharing)
ALTER TABLE seelen_profile ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by anyone"
  ON seelen_profile FOR SELECT
  USING (true);

CREATE POLICY "Profiles can be created by anyone"
  ON seelen_profile FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Profiles updated via service role only"
  ON seelen_profile FOR UPDATE
  USING (true);
```

**Step 5:** Create `src/lib/seelen-profil/db.ts`:
```typescript
import { supabase, createServerClient } from '@/lib/supabase';
import type { SeelenProfil, QuizInput } from './algorithmus';

export async function createProfile(input: QuizInput, profil: SeelenProfil): Promise<string> { ... }
export async function getProfile(id: string): Promise<ProfileRow | null> { ... }
export async function updatePayment(id: string, tier: string, paymentId: string): Promise<void> { ... }
```

**Step 6:** Verify: `npm run build` passes.

**Step 7:** Commit: `feat: add Supabase integration for Seelen-Profil storage`

---

## Phase 3: Quiz Flow

### Task 7: Sales Page (`/seelen-profil`)

The product landing page that explains what the Seelen-Profil is and drives quiz starts.

**Files:**
- Create: `src/app/seelen-profil/page.tsx`
- Create: `src/app/seelen-profil/layout.tsx`

**Step 1:** Create layout with CosmicBackground.

**Step 2:** Build sales page sections:
1. Hero: "Entdecke dein Seelen-Profil" + subtitle + CTA button → /seelen-profil/quiz
2. What you get: 9 dimensions visual overview (icons + short descriptions)
3. How it works: 4 steps (Quiz → Berechnung → Ergebnis → Profil)
4. Pricing tiers: 3 cards (€49 / €69 / €99)
5. Social proof: Testimonials (reuse existing)
6. FAQ section
7. Final CTA

Use `FadeIn` component (from earlier performance optimization) instead of Framer Motion for viewport animations.

**Step 3:** Verify: `npm run dev` — page renders correctly at `/seelen-profil`.

**Step 4:** Commit: `feat: add Seelen-Profil sales page`

---

### Task 8: Quiz Container + State Management

The quiz wrapper that manages multi-step state.

**Files:**
- Create: `src/app/seelen-profil/quiz/page.tsx`
- Create: `src/components/seelen-profil/QuizContainer.tsx`
- Create: `src/components/seelen-profil/QuizProgress.tsx`

**Step 1:** Create `QuizContainer.tsx` — client component managing quiz state:

```typescript
"use client";

interface QuizState {
  step: 1 | 2 | 3 | 4 | 5;
  vorname: string;
  geburtsdatum: string;
  geburtszeit: string;
  kartenwahl: string[];
  seelenFragen: { frageId: string; antwort: string }[];
  email: string;
}
```

Uses `useState` for quiz state, renders current step component, handles step transitions with animation (CSS transitions, not Framer Motion for below-fold).

**Step 2:** Create `QuizProgress.tsx` — visual progress bar showing step 1-5.

**Step 3:** Create quiz page wrapper that renders QuizContainer.

**Step 4:** Verify: page loads at `/seelen-profil/quiz`, shows progress bar + step 1 placeholder.

**Step 5:** Commit: `feat: add quiz container with state management`

---

### Task 9: Quiz Step 1 — Birth Data Input

**Files:**
- Create: `src/components/seelen-profil/steps/StepGeburtsdaten.tsx`

**Step 1:** Build form with:
- Vorname (text input, required)
- Geburtsdatum (date input, required)
- Geburtszeit (time input, optional — with note "für genauere Mondphase")
- "Weiter" button (disabled until required fields filled)

Style: Glass-card, cosmic feel, gold accents. Match existing design system.

**Step 2:** Wire up to QuizContainer state.

**Step 3:** Verify: step renders, validates required fields, transitions to step 2.

**Step 4:** Commit: `feat: add quiz step 1 — birth data input`

---

### Task 10: Quiz Step 2 — Intuitive Card Selection

The mystical card-picking experience. Users select 5 from 12 face-down cards.

**Files:**
- Create: `src/components/seelen-profil/steps/StepKartenwahl.tsx`
- Create: `src/components/seelen-profil/CardSpread.tsx`

**Step 1:** Create `CardSpread.tsx` — a CSS-based card grid (not Three.js for MVP — simpler, faster).

- 12 cards in a 4×3 grid, face-down (show card back image)
- On click: card flips to reveal face (CSS 3D transform)
- Selected cards glow gold, move slightly up
- After 5 selected: "Weiter" button appears
- Cards are randomly selected from all 78 cards at mount time

Card back image: Use existing cosmic gradient as CSS or one of the card assets.

**Step 2:** Wire selected card IDs into QuizContainer state.

**Step 3:** Verify: 12 cards render, click flips them, max 5 selectable, deselect works.

**Step 4:** Commit: `feat: add quiz step 2 — intuitive card selection`

---

### Task 11: Quiz Step 3 — Seelen-Fragen (Visual Questions)

8 visual questions that feel mystical, not test-like.

**Files:**
- Create: `src/components/seelen-profil/steps/StepSeelenFragen.tsx`
- Create: `src/lib/seelen-profil/seelen-fragen.ts`

**Step 1:** Define 8 questions in `seelen-fragen.ts`:

```typescript
export interface SeelenFrage {
  id: string;
  frage: string;
  typ: 'bild' | 'element' | 'wort';
  optionen: {
    id: string;
    label: string;
    bild?: string;     // image path or CSS gradient
    element?: string;  // feuer|wasser|luft|erde
    gewichtung: Record<string, number>; // element weights
  }[];
}
```

Example questions:
1. "Welches Bild zieht dich an?" — 2 cosmic images
2. "Welches Element ruft dich?" — 4 elements visual
3. "In der Stille findest du..." — 2 word choices
4. "Deine stärkste Kraft ist..." — 4 abstract images
5. etc.

Questions should feel like an oracle consultation, not a personality test.

**Step 2:** Build `StepSeelenFragen.tsx` — one question at a time, large visual options, smooth transitions between questions.

**Step 3:** Wire answers into QuizContainer state.

**Step 4:** Verify: questions render one-by-one, click advances, all 8 complete.

**Step 5:** Commit: `feat: add quiz step 3 — visual soul questions`

---

### Task 12: Quiz Step 4 — Email Capture

**Files:**
- Create: `src/components/seelen-profil/steps/StepEmail.tsx`

**Step 1:** Simple email input with:
- Email field (validated)
- Note: "Dein Profil wird für immer unter deiner E-Mail gespeichert"
- Privacy note linking to /datenschutz
- "Mein Profil berechnen" CTA button

**Step 2:** Wire up. On submit: call Server Action to calculate profile + save to Supabase.

**Step 3:** Commit: `feat: add quiz step 4 — email capture`

---

### Task 13: Quiz Step 5 — Calculation Animation + Server Action

**Files:**
- Create: `src/components/seelen-profil/steps/StepBerechnung.tsx`
- Create: `src/app/seelen-profil/api/calculate/route.ts`

**Step 1:** Create API route `/api/calculate`:
- Receives full QuizInput as POST body
- Runs `berechneSeelenprofil()` algorithm
- Saves to Supabase via `createProfile()`
- Returns `{ profilId: string }`

**Step 2:** Create `StepBerechnung.tsx`:
- Animated cosmic calculation (CSS keyframes: spinning cards, twinkling stars, progress text)
- Text sequence: "Deine Karten werden gelesen..." → "Die Sterne werden befragt..." → "Dein Seelen-Profil entsteht..."
- Duration: 5-8 seconds (fixed timing, profile calculation happens in parallel)
- On complete: redirect to `/seelen-profil/vorschau?id=[profilId]`

**Step 3:** Verify: full quiz completion → API call → redirect to vorschau page.

**Step 4:** Commit: `feat: add profile calculation API and animation`

---

### Task 14: Teaser / Vorschau Page

**Files:**
- Create: `src/app/seelen-profil/vorschau/page.tsx`

**Step 1:** Build vorschau page:
- Fetches profile data from Supabase by `id` query param
- Shows archetype card image + name: "[Vorname], du bist: Die Seherin"
- One-sentence archetype claim visible
- ALL other sections rendered but with CSS `blur(8px)` + overlay
- Clear CTA: "Schalte dein vollständiges Profil frei" → `/seelen-profil/checkout?id=[id]`
- Show 3 tier options with prices

**Step 2:** The blur overlay:
```css
.profil-blurred {
  filter: blur(8px);
  user-select: none;
  pointer-events: none;
  position: relative;
}
.profil-blurred::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, var(--bg-primary));
}
```

**Step 3:** Verify: page loads with profile data, blurred sections visible, CTA works.

**Step 4:** Commit: `feat: add teaser/vorschau page with blur paywall`

---

## Phase 4: Payment

### Task 15: Payment Integration

**Files:**
- Create: `src/lib/payment.ts`
- Create: `src/app/seelen-profil/checkout/page.tsx`
- Create: `src/app/seelen-profil/api/payment/create/route.ts`
- Create: `src/app/seelen-profil/api/payment/webhook/route.ts`

**Step 1:** Install payment SDK:
```bash
npm install @mollie/api-client
# OR for PayPal:
npm install @paypal/checkout-server-sdk
```

Choice depends on user's preference. Mollie is recommended (single API for PayPal + Sofortüberweisung).

**Step 2:** Create `src/lib/payment.ts`:
```typescript
export async function createPayment(params: {
  profilId: string;
  tier: 'basis' | 'report' | 'premium';
  email: string;
}): Promise<{ checkoutUrl: string }> { ... }
```

Maps tier to price: basis=€49, report=€69, premium=€99.
Creates payment with Mollie/PayPal, returns redirect URL.

**Step 3:** Create checkout page — tier selection (3 cards), "Jetzt kaufen" triggers payment creation → redirect to provider.

**Step 4:** Create payment webhook route:
- Verifies payment status
- Updates Supabase: `payment_status = 'paid'`, `tier = selected`
- Triggers email (later task)

**Step 5:** Add env variables:
```
MOLLIE_API_KEY=<key>
PAYMENT_WEBHOOK_SECRET=<secret>
NEXT_PUBLIC_APP_URL=https://next.elfenorakel.de
```

**Step 6:** Verify: full payment flow works in test mode.

**Step 7:** Commit: `feat: add payment integration with PayPal/Sofortüberweisung`

---

## Phase 5: Profile Page

### Task 16: Profile Page Layout + Auth Check

**Files:**
- Create: `src/app/seelen-profil/profil/[id]/page.tsx`

**Step 1:** Server Component that:
- Fetches profile from Supabase by UUID
- Checks `payment_status === 'paid'` — if not, redirect to `/seelen-profil/vorschau?id=[id]`
- Passes profile data to client components

**Step 2:** Layout structure:
```tsx
<div>
  <CosmicBackground intensity="subtle" position="fixed" />
  <ProfilHero profil={profil} />
  <ProfilArchetyp profil={profil} />
  <ProfilElemente profil={profil} />
  <ProfilSchattenLicht profil={profil} />
  <ProfilKosmischeKoordinaten profil={profil} />
  <ProfilKosmischeAufgabe profil={profil} />
  <ProfilJahresEnergie profil={profil} />
  <ProfilFooter profil={profil} />
</div>
```

**Step 3:** Commit: `feat: add profile page layout with payment gate`

---

### Task 17: Profile Sections — Hero + Archetyp

**Files:**
- Create: `src/components/seelen-profil/profil/ProfilHero.tsx`
- Create: `src/components/seelen-profil/profil/ProfilArchetyp.tsx`

**Step 1:** `ProfilHero.tsx`:
- Full-width hero with archetype card image (large, centered)
- "[Vorname], du bist:" in small text
- Archetype name in huge gold gradient text
- Claim sentence below
- Cosmic particle animation subtle in background

**Step 2:** `ProfilArchetyp.tsx`:
- Deep text sections: Wesen, Stärken, Schatten-Seite, Beziehungen, Beruf
- Elfi's personal message in a special glass-card
- Affirmation in gold gradient, large

**Step 3:** Verify: profile renders with real data from Supabase.

**Step 4:** Commit: `feat: add profile hero and archetype sections`

---

### Task 18: Profile Sections — Elements + Shadow/Light

**Files:**
- Create: `src/components/seelen-profil/profil/ProfilElemente.tsx`
- Create: `src/components/seelen-profil/profil/ProfilSchattenLicht.tsx`
- Create: `src/components/seelen-profil/profil/ElementChart.tsx`

**Step 1:** `ElementChart.tsx` — visual element distribution:
- 4 horizontal bars or donut chart
- Colors: Feuer=#EF4444, Wasser=#3B82F6, Luft=#A78BFA, Erde=#22C55E
- Animated fill on scroll into view
- Percentages labeled

**Step 2:** `ProfilElemente.tsx`:
- Element chart
- Dominant element deep explanation
- Secondary element interaction text

**Step 3:** `ProfilSchattenLicht.tsx`:
- Two cards side by side (glass-cards)
- Left: Shadow card image + title + text
- Right: Light card image + title + text
- Action impulses below

**Step 4:** Verify visually.

**Step 5:** Commit: `feat: add element chart and shadow/light profile sections`

---

### Task 19: Profile Sections — Cosmic Coordinates + Task + Yearly Energy

**Files:**
- Create: `src/components/seelen-profil/profil/ProfilKosmischeKoordinaten.tsx`
- Create: `src/components/seelen-profil/profil/ProfilKosmischeAufgabe.tsx`
- Create: `src/components/seelen-profil/profil/ProfilJahresEnergie.tsx`

**Step 1:** `ProfilKosmischeKoordinaten.tsx`:
- Moon phase with visual illustration (phase icon/emoji)
- Planet with symbol + description
- Chakra with color indicator + description
- Layout: 3 glass-cards in a row (responsive)

**Step 2:** `ProfilKosmischeAufgabe.tsx`:
- Life purpose section
- Large, centered text in gold gradient
- Personalized guidance text

**Step 3:** `ProfilJahresEnergie.tsx`:
- "Deine Energie für [Jahr]"
- Yearly arcana card + description
- 3 impulses as a list
- Note: "Komm [nächstes Jahr] wieder für deine neue Jahresenergie"

**Step 4:** Verify: all sections render with correct data.

**Step 5:** Commit: `feat: add cosmic coordinates, task, and yearly energy sections`

---

### Task 20: Profile Footer — PDF Download + Share + Upsell

**Files:**
- Create: `src/components/seelen-profil/profil/ProfilFooter.tsx`

**Step 1:** Footer section with:
- PDF Download button (Tier 2+, disabled/hidden for Tier 1 with "Upgrade" prompt)
- Video embed placeholder (Tier 3, with "Upgrade" prompt for others)
- Social share buttons (copy link, share to WhatsApp, share to Twitter/X)
- Upsell CTA: "Du willst tiefer gehen? Buche ein persönliches Reading mit Elfi" → /readings

**Step 2:** Share uses Web Share API where available, fallback to copy-to-clipboard.

**Step 3:** Commit: `feat: add profile footer with sharing and upsell`

---

## Phase 6: Polish & Infrastructure

### Task 21: Dynamic OG Images for Social Sharing

**Files:**
- Create: `src/app/seelen-profil/profil/[id]/opengraph-image.tsx`

**Step 1:** Use Next.js `ImageResponse` API:
```typescript
import { ImageResponse } from 'next/og';

export default async function Image({ params }: { params: { id: string } }) {
  // Fetch profile from Supabase
  // Render: Archetype card + name + element bars
  return new ImageResponse(
    <div style={{ /* cosmic bg, card image, text */ }}>
      ...
    </div>,
    { width: 1200, height: 630 }
  );
}
```

**Step 2:** Add meta tags to profile page layout.

**Step 3:** Verify: share URL on social media preview shows correct card.

**Step 4:** Commit: `feat: add dynamic OG images for profile sharing`

---

### Task 22: PDF Report Generation (Tier 2+)

**Files:**
- Create: `src/app/seelen-profil/api/pdf/[id]/route.ts`
- Create: `src/lib/seelen-profil/pdf-generator.ts`

**Step 1:** Install:
```bash
npm install @react-pdf/renderer
```

**Step 2:** Create `pdf-generator.ts` — renders profile as 20-30 page PDF:
- Cover page with archetype image + name
- Table of contents
- Each profile dimension as a chapter
- Elfi's branding (colors, fonts)
- Footer with elfenorakel.de

**Step 3:** Create API route that generates PDF on-demand and streams it.

**Step 4:** Wire PDF download button in ProfilFooter to this endpoint.

**Step 5:** Verify: PDF downloads with correct content.

**Step 6:** Commit: `feat: add PDF report generation for Tier 2+`

---

### Task 23: Email Notifications

**Files:**
- Create: `src/lib/seelen-profil/email.ts`

**Step 1:** Choose email approach:
- Option A: Supabase Edge Functions (if user has it set up)
- Option B: n8n webhook (user has n8n at n8n.koehub.de)
- Option C: Resend/SendGrid API

**Step 2:** Send emails on:
- Profile created (free teaser) — "Dein Seelen-Profil wartet" + link to vorschau
- Payment confirmed — "Dein vollständiges Profil ist freigeschaltet" + profile link + PDF (Tier 2+)

**Step 3:** Commit: `feat: add email notifications for profile creation and payment`

---

### Task 24: Update Homepage + Navigation

Wire the Seelen-Profil into the existing site navigation and homepage.

**Files:**
- Modify: `src/components/layout/Header.tsx` — add "Seelen-Profil" nav link
- Modify: `src/app/page.tsx` — update CTAs to link to /seelen-profil
- Modify: `src/app/readings/page.tsx` — add Seelen-Profil upsell/cross-sell

**Step 1:** Add navigation link in header.

**Step 2:** Update homepage — change "Persönliches Reading buchen" CTA to "Entdecke dein Seelen-Profil" (or add as additional CTA).

**Step 3:** On readings page, add cross-sell section: "Bevor du ein Reading buchst — entdecke dein Seelen-Profil"

**Step 4:** Verify: navigation works, CTAs link correctly.

**Step 5:** Commit: `feat: integrate Seelen-Profil into site navigation and homepage`

---

### Task 25: Final Verification + Build

**Step 1:** Run full build: `npm run build` — must pass clean.

**Step 2:** Run type check: `npx tsc --noEmit` — no errors.

**Step 3:** Run lint: `npm run lint` — no errors.

**Step 4:** Manual walkthrough:
- [ ] Sales page renders at /seelen-profil
- [ ] Quiz completes all 5 steps
- [ ] Teaser page shows blurred profile
- [ ] Payment flow works (test mode)
- [ ] Full profile renders all 9 dimensions
- [ ] PDF downloads correctly (Tier 2+)
- [ ] Social sharing OG image works
- [ ] Navigation updated
- [ ] Mobile responsive on all pages

**Step 5:** Commit: `chore: final verification and polish`

---

## Task Dependencies

```
Phase 1: [1] → [2] → [3] → [4] → [5]     (sequential — data builds on data)
Phase 2: [6]                                 (can start after Task 2)
Phase 3: [7] [8→9→10→11→12→13→14]           (sales page independent, quiz sequential)
Phase 4: [15]                                (needs Task 6 + Task 13)
Phase 5: [16→17→18→19→20]                   (sequential — builds page section by section)
Phase 6: [21] [22] [23] [24]                (all independent, need Phase 5)
         [25]                                (final, needs everything)
```

**Parallelizable:**
- Tasks 1-5 (data) and Task 7 (sales page) can run in parallel
- Tasks 21, 22, 23, 24 can all run in parallel
- Phase 2 (Supabase) can start as soon as Task 2 is done

---

## Environment Variables Needed

```env
# Supabase (user's own instance)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Payment (Mollie or PayPal)
MOLLIE_API_KEY=           # or PAYPAL_CLIENT_ID + PAYPAL_CLIENT_SECRET
PAYMENT_WEBHOOK_SECRET=

# App
NEXT_PUBLIC_APP_URL=https://next.elfenorakel.de
```

## New Dependencies

```bash
npm install @supabase/supabase-js @mollie/api-client @react-pdf/renderer
```
