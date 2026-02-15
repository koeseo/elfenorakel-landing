# Seelen-Profil — Product Design Document

**Date:** 2026-02-15
**Status:** Approved
**Product:** "Dein Seelen-Profil" by Elfenorakel
**Domain:** next.elfenorakel.de/seelen-profil

---

## 1. Product Overview

A 9-dimensional Tarot-based personality profiling system. Users complete a quiz (birth data + intuitive card selection + personality questions) and receive a deep, shareable personality profile — Elfi's Tarot methodology as a scalable product.

**Key Differentiator:** Not a generic quiz. 22 unique archetypes based on Major Arcana, enriched with moon phases, planetary rulers, elements, chakras, shadow/light cards, and a yearly dynamic energy. Deeper than MBTI (4 dimensions) or Enneagram (1 number).

---

## 2. The Seelen-Archetyp System (9 Dimensions)

### 2.1 Seelen-Archetyp (Primary Identity)

22 archetypes based on Major Arcana. Derived from birth date via numerological reduction:

```
Birth date → digit sum → reduce to 0-21 → maps to Major Arcana
Example: 15.03.1990 → 1+5+0+3+1+9+9+0 = 28 → 2+8 = 10 → "Rad des Schicksals"
```

Each archetype has ~1000 words of content:
- Wesen (essence)
- Stärken (strengths)
- Schatten-Seite (shadow side)
- In Beziehungen (relationships)
- Im Beruf (career)
- Elfis Botschaft (personal message)
- Affirmation

### 2.2 Element-Signatur

4 elements (Feuer/Wasser/Luft/Erde) with percentage distribution. Derived from the 5 intuitively chosen cards mapping to suits:

| Element | Suit | Energy |
|---------|------|--------|
| Feuer | Stäbe | Passion, Action, Courage |
| Wasser | Kelche | Emotion, Intuition, Depth |
| Luft | Schwerter | Mind, Clarity, Truth |
| Erde | Münzen | Stability, Growth, Material |

### 2.3 Schatten-Karte

The "darkest" card from the intuitive selection. Represents what the user needs to integrate. ~200 words per card (78 cards total).

### 2.4 Licht-Karte

The "brightest" card from the intuitive selection. Represents highest potential. ~200 words per card.

### 2.5 Planetare Herrschaft

Traditional Tarot-to-planet mapping per archetype:

| Archetype | Planet |
|-----------|--------|
| Der Narr | Uranus |
| Der Magier | Merkur |
| Die Hohepriesterin | Mond |
| Die Kaiserin | Venus |
| Der Kaiser | Widder/Mars |
| Der Hierophant | Stier/Venus |
| Die Liebenden | Zwillinge/Merkur |
| Der Wagen | Krebs/Mond |
| Die Kraft | Löwe/Sonne |
| Der Eremit | Jungfrau/Merkur |
| Rad des Schicksals | Jupiter |
| Gerechtigkeit | Waage/Venus |
| Der Gehängte | Neptun |
| Der Tod | Skorpion/Pluto |
| Mäßigkeit | Schütze/Jupiter |
| Der Teufel | Steinbock/Saturn |
| Der Turm | Mars |
| Der Stern | Wassermann/Uranus |
| Der Mond | Fische/Neptun |
| Die Sonne | Sonne |
| Das Gericht | Pluto |
| Die Welt | Saturn |

### 2.6 Mondphase bei Geburt

Astronomically calculated from birth date. 8 phases:

| Phase | Soul Cycle | Meaning |
|-------|-----------|---------|
| Neumond | Samen-Seele | New beginnings, hidden potential |
| Zunehmende Sichel | Pionierin | Breakthrough, pioneer spirit |
| Erstes Viertel | Kriegerin | Assertion, willpower |
| Zunehmender Mond | Baumeisterin | Building, manifestation |
| Vollmond | Erleuchtete | Completion, maximum power |
| Abnehmender Mond | Lehrerin | Sharing, teaching wisdom |
| Letztes Viertel | Alchemistin | Transformation, transmutation |
| Abnehmende Sichel | Mystikerin | Retreat, inner vision, release |

### 2.7 Chakra-Resonanz

Derived from archetype + dominant element combination. Maps to 7 chakras.

### 2.8 Kosmische Aufgabe

Life purpose derived from archetype + dominant element + moon phase. Template system with variable text blocks.

### 2.9 Jahres-Energie (Dynamic)

```
Personal year number = birth day + birth month + current year
Reduces to 0-21 → maps to Major Arcana
```

Changes every year — reason to return. 3 concrete impulses per yearly card.

---

## 3. User Journey

### 3.1 Funnel

```
Homepage (existing Mini-Reading / CTA)
    → /seelen-profil (Sales Page)
    → /seelen-profil/quiz (5-Step Quiz)
    → /seelen-profil/vorschau (Free Teaser with blur)
    → Payment Wall (PayPal / Sofortüberweisung)
    → /seelen-profil/profil/[id] (Full Profile)
```

### 3.2 Quiz Flow (5 Steps)

**Step 1: Geburtsdaten**
- Vorname (required)
- Geburtsdatum (required)
- Geburtszeit (optional, for precise moon phase)

**Step 2: Intuitive Kartenwahl**
- 12 face-down cards in 3D spread (Three.js)
- User picks 5 cards, one at a time
- Each card flips with animation on selection
- Cards span Minor + Major Arcana for element coverage

**Step 3: Seelen-Fragen (8 visual questions)**
- Visual choices (images, not text MCQ)
- "Which image draws you in?"
- "Which element speaks to you right now?"
- Quick, mystical feel — not test-like

**Step 4: E-Mail**
- Email address (required, for profile storage + PDF delivery)
- "Your profile will be saved forever under your email"

**Step 5: Berechnung + Teaser**
- Animated calculation (5-8 seconds, cosmic particles)
- Reveals archetype name + card image
- Everything else blurred → payment CTA

### 3.3 Teaser Result (Free)

Visible:
- Archetype name + card image
- One-sentence description

Blurred:
- Element signature, Shadow/Light cards, Moon phase, Planet, Chakra, Cosmic task, Yearly energy

### 3.4 Payment

| Tier | Name | Price | Content |
|------|------|-------|---------|
| Basis | Seelen-Profil | €49 | Full interactive web profile (9 dimensions), shareable URL |
| Report | Seelen-Profil + Report | €69 | + 20-30 page premium PDF |
| Premium | Seelen-Profil Premium | €99 | + Elfi video messages per archetype |

Payment: PayPal + Sofortüberweisung (via Mollie or PayPal Checkout).

### 3.5 Post-Payment

- Redirect to `/seelen-profil/profil/[id]`
- Full profile unlocked
- Confirmation email with profile link
- PDF download (Tier 2+)
- Video segments embedded (Tier 3)
- Social sharing enabled

---

## 4. Profile Page Sections

### 4.1 Hero
- Large archetype card image
- "[Vorname], du bist: [Archetype Name]"
- Archetype claim (1 sentence)
- Cosmic background

### 4.2 Seelen-Archetyp (Deep)
- ~800-1200 words per archetype
- Sections: Wesen, Stärken, Schatten-Seite, Beziehungen, Beruf, Elfis Botschaft, Affirmation

### 4.3 Element-Signatur
- Visual chart (donut/bars): Fire/Water/Air/Earth percentages
- Dominant element deep explanation
- Element combination uniqueness

### 4.4 Schatten & Licht
- Two cards side by side
- Shadow: What to integrate (~200 words)
- Light: Where you're growing (~200 words)
- Concrete action impulses

### 4.5 Kosmische Koordinaten
- Moon phase (with illustration)
- Ruling planet + meaning
- Chakra resonance + daily application

### 4.6 Kosmische Aufgabe
- Life purpose theme
- Derived from archetype + element + moon phase
- Elfi's personal guidance

### 4.7 Jahres-Energie 2026
- Dynamically calculated
- What this year brings for your type
- 3 concrete impulses
- "Come back next year for your 2027 energy"

### 4.8 Footer
- PDF download (Tier 2+)
- Video player (Tier 3)
- Social share buttons
- Upsell CTA to personal readings

### 4.9 Social Card (OG Image)
- Dynamic OG image via Next.js ImageResponse
- Shows: archetype card + name + element distribution
- Shareable on social media

---

## 5. Technical Architecture

### 5.1 Database (Supabase — user's own instance)

**Table: `seelen_profile`**

```sql
id              UUID PRIMARY KEY DEFAULT gen_random_uuid()
email           TEXT UNIQUE NOT NULL
vorname         TEXT NOT NULL
geburtsdatum    DATE NOT NULL
geburtszeit     TIME
-- Quiz raw data
kartenwahl      JSONB   -- [card_id, card_id, ...] (5 selected cards)
seelen_fragen   JSONB   -- [{frage_id, antwort}, ...]
-- Computed profile
archetyp_id     INT     -- 0-21 (Major Arcana number)
element_signatur JSONB  -- {feuer: 35, wasser: 40, luft: 15, erde: 10}
schatten_karte  TEXT    -- card_id
licht_karte     TEXT    -- card_id
mondphase       TEXT    -- neumond|zunehmende_sichel|...
planet          TEXT    -- merkur|venus|...
chakra          TEXT    -- wurzel|sakral|solar|...
kosmische_aufgabe TEXT
jahres_energie  JSONB   -- {2026: {zahl: 10, text: "..."}}
-- Payment
tier            TEXT DEFAULT 'free_teaser'  -- free_teaser|basis|report|premium
payment_status  TEXT DEFAULT 'pending'      -- pending|paid
payment_id      TEXT
paid_at         TIMESTAMPTZ
-- Meta
created_at      TIMESTAMPTZ DEFAULT now()
updated_at      TIMESTAMPTZ DEFAULT now()
```

### 5.2 Page Structure (Next.js App Router)

```
src/app/seelen-profil/
├── page.tsx                        # Sales Page (Server Component)
├── quiz/
│   └── page.tsx                    # Multi-Step Quiz (Client Component)
├── vorschau/
│   └── page.tsx                    # Teaser Result (Client Component)
├── checkout/
│   └── page.tsx                    # Tier Selection + Payment (Client)
├── profil/
│   └── [id]/
│       ├── page.tsx                # Full Profile (Server Component)
│       └── opengraph-image.tsx     # Dynamic OG Image
└── api/
    ├── calculate/route.ts          # Quiz → Profile calculation
    ├── payment/
    │   ├── create/route.ts         # Create payment session
    │   └── webhook/route.ts        # Payment confirmation webhook
    └── pdf/[id]/route.ts           # PDF generation endpoint

src/lib/seelen-profil/
├── archetypen.ts                   # 22 archetype definitions + content
├── elemente.ts                     # Element mappings + content
├── mondphasen.ts                   # Moon phase calculation + content
├── algorithmus.ts                  # Profile calculation logic
├── planeten.ts                     # Planetary assignments + content
├── chakras.ts                      # Chakra mappings + content
├── kosmische-aufgabe.ts            # Cosmic task templates
├── jahres-energie.ts               # Yearly energy calculation + content
└── karten-content.ts               # Shadow/Light text per card

src/lib/
├── supabase.ts                     # Supabase client (server + client)
└── payment.ts                      # Payment provider integration
```

### 5.3 Payment Flow

```
User selects tier on /checkout
    → Server Action creates payment (PayPal/Mollie API)
    → Redirect to PayPal/Sofortüberweisung
    → User pays
    → Webhook → Supabase update (payment_status = 'paid', tier = selected)
    → Redirect to /profil/[id] (fully unlocked)
    → Email with profile link (+ PDF for Tier 2/3)
```

### 5.4 PDF Generation

- **@react-pdf/renderer** server-side
- 20-30 pages with Elfi's branding, card images, personalized text
- Stored in Supabase Storage
- Download link on profile + in email

---

## 6. Content Strategy

### 6.1 Approach

AI generates all content in Elfi's voice/style. Elfi reviews and personalizes.

### 6.2 Content Volume

| Section | Words | Approach |
|---------|-------|----------|
| 22 Archetypes (deep) | ~22,000 | AI draft → Elfi edits |
| 78 Cards Shadow/Light | ~15,600 | AI draft → Elfi edits |
| Cosmic Tasks | ~5,000 | Template + AI → Elfi edits |
| Moon Phases | ~3,200 | AI draft → Elfi edits |
| Planets | ~2,500 | AI draft → Elfi edits |
| Yearly Energy | ~3,300 | AI draft → Elfi edits |
| Element Signatures | ~2,100 | AI draft → Elfi edits |
| Chakras | ~2,100 | AI draft → Elfi edits |
| **Total** | **~55,800** | |

### 6.3 Video Content (Tier 3)

- Elfi pre-records one video per archetype (~5-10 min each)
- 22 videos total
- Hosted on YouTube/Vimeo (unlisted), embedded on profile
- Can be added after initial launch

---

## 7. Not in MVP

- No community/forum
- No user accounts (profile accessed via email + UUID)
- No subscription model (one-time purchase)
- No compatibility check between profiles
- No app integration (standalone on landing)
- No physical products (merch, printed reports)

---

## 8. Success Metrics

- Quiz completion rate (target: 60%+)
- Teaser → Payment conversion (target: 8-15%)
- Average revenue per profile
- Social shares per profile
- Return rate for yearly energy update
