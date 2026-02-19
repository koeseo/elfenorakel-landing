/**
 * Seelen-Profil Algorithm
 *
 * Deterministic algorithm that transforms quiz input (name, birth date,
 * card choices, soul questions) into a 9-dimensional Seelen-Profil.
 *
 * Same inputs always produce the same output -- no randomness, no AI.
 */

import { type MondphaseType, berechneMondphase } from './mondphasen';
import { allCards, type TarotCard, type Element } from './tarot-karten';

// ---------------------------------------------------------------------------
// Public Types
// ---------------------------------------------------------------------------

export interface QuizInput {
  vorname: string;
  /** ISO date string YYYY-MM-DD */
  geburtsdatum: string;
  /** HH:MM -- optional */
  geburtszeit?: string;
  /** 5 card IDs chosen by user */
  kartenwahl: string[];
  /** Answers to soul-questions */
  seelenFragen: { frageId: string; antwort: string }[];
}

export interface ElementSignatur {
  /** 0-100 percentage */
  feuer: number;
  /** 0-100 percentage */
  wasser: number;
  /** 0-100 percentage */
  luft: number;
  /** 0-100 percentage */
  erde: number;
}

export interface SeelenProfil {
  /** Major Arcana number 0-21 */
  archetypId: number;
  /** Elemental breakdown, sums to 100 */
  elementSignatur: ElementSignatur;
  /** Card ID of the shadow card */
  schattenKarte: string;
  /** Card ID of the light card */
  lichtKarte: string;
  /** Birth moon phase */
  mondphase: MondphaseType;
  /** Ruling planet key */
  planet: string;
  /** Energy centre key */
  chakra: string;
  /** Lookup key for cosmic task content: "{archetypId}_{dominantElement}" */
  kosmischeAufgabeKey: string;
  /** Personal year energy */
  jahresEnergie: {
    jahr: number;
    arcanaId: number;
  };
}

// ---------------------------------------------------------------------------
// Static Mappings
// ---------------------------------------------------------------------------

/** Planet assigned to each Major Arcana archetypId */
const PLANET_MAP: Record<number, string> = {
  0: 'uranus',
  1: 'merkur',
  2: 'mond',
  3: 'venus',
  4: 'mars',
  5: 'venus',
  6: 'merkur',
  7: 'mond',
  8: 'sonne',
  9: 'merkur',
  10: 'jupiter',
  11: 'venus',
  12: 'neptun',
  13: 'pluto',
  14: 'jupiter',
  15: 'saturn',
  16: 'mars',
  17: 'uranus',
  18: 'neptun',
  19: 'sonne',
  20: 'pluto',
  21: 'saturn',
};

/** Chakra assigned to each Major Arcana archetypId */
const CHAKRA_MAP: Record<number, string> = {
  0: 'krone',
  1: 'hals',
  2: 'stirn',
  3: 'herz',
  4: 'solarplexus',
  5: 'hals',
  6: 'herz',
  7: 'solarplexus',
  8: 'solarplexus',
  9: 'stirn',
  10: 'solarplexus',
  11: 'herz',
  12: 'krone',
  13: 'wurzel',
  14: 'sakral',
  15: 'wurzel',
  16: 'wurzel',
  17: 'krone',
  18: 'stirn',
  19: 'solarplexus',
  20: 'wurzel',
  21: 'krone',
};

/**
 * Traditional element association for each Major Arcana card.
 * Used when computing element signature from chosen cards.
 */
const MAJOR_ELEMENT_MAP: Record<string, Element> = {
  narr: 'luft',
  magier: 'luft',
  hohepriesterin: 'wasser',
  herrscherin: 'erde',
  herrscher: 'feuer',
  hierophant: 'erde',
  liebenden: 'luft',
  wagen: 'wasser',
  kraft: 'feuer',
  eremit: 'erde',
  schicksal: 'feuer',
  gerechtigkeit: 'luft',
  gehaengte: 'wasser',
  tod: 'wasser',
  maessigung: 'feuer',
  teufel: 'erde',
  turm: 'feuer',
  stern: 'luft',
  mond: 'wasser',
  sonne: 'feuer',
  gericht: 'feuer',
  welt: 'erde',
};

/**
 * Darkness score per card ID. Higher = darker.
 * Major Arcana cards that are traditionally "heavy" score higher.
 * For Minor Arcana: 5s and 10s score higher, Aces and 6s score lowest.
 */
function darknessScore(card: TarotCard): number {
  // Major Arcana specific darkness
  const majorDarkness: Record<string, number> = {
    teufel: 95,
    turm: 90,
    tod: 85,
    mond: 75,
    gehaengte: 70,
    gericht: 60,
    eremit: 55,
    schicksal: 50,
    herrscher: 45,
    gerechtigkeit: 40,
    hierophant: 35,
    wagen: 30,
    kraft: 25,
    narr: 20,
    magier: 20,
    hohepriesterin: 20,
    herrscherin: 15,
    liebenden: 15,
    maessigung: 15,
    stern: 10,
    sonne: 5,
    welt: 10,
  };

  if (card.suit === 'major') {
    return majorDarkness[card.id] ?? 30;
  }

  // Minor Arcana: base score from card name pattern
  const id = card.id; // e.g. "staebe-fuenf", "kelche-zehn"
  if (id.includes('-fuenf')) return 70;
  if (id.includes('-zehn')) return 65;
  if (id.includes('-neun')) return 55;
  if (id.includes('-acht')) return 50;
  if (id.includes('-sieben')) return 45;
  if (id.includes('-drei')) return 40;
  if (id.includes('-vier')) return 35;
  if (id.includes('-zwei')) return 30;
  if (id.includes('-bube')) return 25;
  if (id.includes('-ritter')) return 25;
  if (id.includes('-koenigin')) return 20;
  if (id.includes('-koenig')) return 20;
  if (id.includes('-sechs')) return 15;
  if (id.includes('-ass')) return 10;

  return 30;
}

/**
 * Light score per card. Higher = brighter / more positive.
 * Inverse relationship to darkness but NOT simply 100 - darkness.
 */
function lightScore(card: TarotCard): number {
  const majorLight: Record<string, number> = {
    sonne: 95,
    stern: 90,
    welt: 85,
    herrscherin: 80,
    liebenden: 75,
    maessigung: 70,
    kraft: 65,
    magier: 65,
    narr: 60,
    hohepriesterin: 55,
    hierophant: 50,
    wagen: 45,
    schicksal: 40,
    gerechtigkeit: 40,
    herrscher: 35,
    eremit: 30,
    gericht: 30,
    gehaengte: 25,
    mond: 20,
    tod: 15,
    turm: 10,
    teufel: 5,
  };

  if (card.suit === 'major') {
    return majorLight[card.id] ?? 40;
  }

  const id = card.id;
  if (id.includes('-ass')) return 80;
  if (id.includes('-sechs')) return 70;
  if (id.includes('-drei')) return 60;
  if (id.includes('-vier')) return 55;
  if (id.includes('-zwei')) return 55;
  if (id.includes('-koenigin')) return 50;
  if (id.includes('-koenig')) return 50;
  if (id.includes('-ritter')) return 45;
  if (id.includes('-bube')) return 45;
  if (id.includes('-sieben')) return 35;
  if (id.includes('-acht')) return 30;
  if (id.includes('-neun')) return 25;
  if (id.includes('-zehn')) return 20;
  if (id.includes('-fuenf')) return 15;

  return 40;
}

/**
 * Element weight for each soul-question answer.
 * Keys follow the pattern "{frageId}_{antwort}".
 * Fallback: equal weight across all elements.
 */
const SEELEN_FRAGEN_ELEMENT_WEIGHTS: Record<string, Partial<Record<Element, number>>> = {
  // Q1: Welches Element ruft dich?
  'element_feuer': { feuer: 3 },
  'element_wasser': { wasser: 3 },
  'element_luft': { luft: 3 },
  'element_erde': { erde: 3 },
  // Q2: Wohin zieht es deine Seele?
  'seele_sterne': { luft: 2, feuer: 1 },
  'seele_tiefsee': { wasser: 2, erde: 1 },
  // Q3: In der Stille findest du...
  'stille_klarheit': { luft: 2, erde: 1 },
  'stille_heilung': { wasser: 2, feuer: 1 },
  // Q4: Deine staerkste Kraft ist...
  'kraft_intuition': { wasser: 3 },
  'kraft_mut': { feuer: 3 },
  'kraft_weisheit': { luft: 3 },
  'kraft_ausdauer': { erde: 3 },
  // Q5: Welche Energie brauchst du jetzt?
  'energie_erneuerung': { feuer: 2, luft: 1 },
  'energie_ruhe': { erde: 2, wasser: 1 },
  'energie_freiheit': { luft: 2, feuer: 1 },
  'energie_tiefe': { wasser: 2, erde: 1 },
  // Q6: Was ruft dich im Mondlicht?
  'mondlicht_tanz': { feuer: 2, wasser: 1 },
  'mondlicht_stille': { wasser: 2, erde: 1 },
  // Q7: Dein inneres Feuer brennt fuer...
  'feuer_wahrheit': { luft: 2, feuer: 1 },
  'feuer_liebe': { wasser: 2, feuer: 1 },
  'feuer_schoepfung': { feuer: 2, luft: 1 },
  'feuer_bestaendigkeit': { erde: 2, wasser: 1 },
  // Q8: Welcher Pfad leuchtet fuer dich?
  'pfad_unbekannt': { luft: 2, wasser: 1 },
  'pfad_licht': { feuer: 2, erde: 1 },
};

// ---------------------------------------------------------------------------
// Card lookup helper
// ---------------------------------------------------------------------------

const cardIndex = new Map<string, TarotCard>();
for (const card of allCards) {
  cardIndex.set(card.id, card);
}

function findCard(id: string): TarotCard | undefined {
  return cardIndex.get(id);
}

// ---------------------------------------------------------------------------
// Sub-functions
// ---------------------------------------------------------------------------

/**
 * Compute the Lebenszahl (life number) from a date string.
 *
 * 1. Sum ALL digits of DD+MM+YYYY
 * 2. If result > 21, sum the digits again. Repeat until 0-21.
 *
 * @example "1990-03-15" => 1+5+0+3+1+9+9+0 = 28 => 2+8 = 10 => 10
 * @example "1985-12-29" => 2+9+1+2+1+9+8+5 = 37 => 3+7 = 10 => 10
 * @example "2000-01-01" => 0+1+0+1+2+0+0+0 = 4  => 4
 */
export function berechneLebenszahl(dateStr: string): number {
  // Extract only digits from the date string
  const digits = dateStr.replace(/\D/g, '');

  let sum = 0;
  for (const ch of digits) {
    sum += parseInt(ch, 10);
  }

  // Reduce until in range 0-21
  while (sum > 21) {
    let newSum = 0;
    for (const ch of String(sum)) {
      newSum += parseInt(ch, 10);
    }
    sum = newSum;
  }

  return sum;
}

/**
 * Compute the element signature from the 5 chosen cards and soul-question answers.
 *
 * - Minor Arcana cards contribute their suit element directly.
 * - Major Arcana cards contribute via MAJOR_ELEMENT_MAP.
 * - Each soul-question answer adds element weights.
 * - Result is normalized to percentages summing to 100.
 */
export function berechneElementSignatur(
  kartenIds: string[],
  seelenFragen: { frageId: string; antwort: string }[] = [],
): ElementSignatur {
  const counts: Record<Element, number> = {
    feuer: 0,
    wasser: 0,
    luft: 0,
    erde: 0,
  };

  // Card contributions
  for (const id of kartenIds) {
    const card = findCard(id);
    if (!card) continue;

    if (card.suit === 'major') {
      const el = MAJOR_ELEMENT_MAP[card.id];
      if (el) counts[el] += 2; // Major Arcana cards carry more weight
    } else if (card.element) {
      counts[card.element] += 1;
    }
  }

  // Soul-question contributions
  for (const frage of seelenFragen) {
    const key = `${frage.frageId}_${frage.antwort}`;
    const weights = SEELEN_FRAGEN_ELEMENT_WEIGHTS[key];
    if (weights) {
      for (const [el, w] of Object.entries(weights)) {
        counts[el as Element] += w;
      }
    }
  }

  // Normalize to percentages
  const total = counts.feuer + counts.wasser + counts.luft + counts.erde;

  if (total === 0) {
    // Equal distribution as fallback
    return { feuer: 25, wasser: 25, luft: 25, erde: 25 };
  }

  const raw = {
    feuer: (counts.feuer / total) * 100,
    wasser: (counts.wasser / total) * 100,
    luft: (counts.luft / total) * 100,
    erde: (counts.erde / total) * 100,
  };

  // Round to 1 decimal, then adjust largest to ensure sum = 100
  const rounded = {
    feuer: Math.round(raw.feuer * 10) / 10,
    wasser: Math.round(raw.wasser * 10) / 10,
    luft: Math.round(raw.luft * 10) / 10,
    erde: Math.round(raw.erde * 10) / 10,
  };

  const roundedTotal = rounded.feuer + rounded.wasser + rounded.luft + rounded.erde;
  const diff = Math.round((100 - roundedTotal) * 10) / 10;

  // Add the rounding remainder to the largest element
  const elements: Element[] = ['feuer', 'wasser', 'luft', 'erde'];
  const largest = elements.reduce((a, b) => (rounded[a] >= rounded[b] ? a : b));
  rounded[largest] = Math.round((rounded[largest] + diff) * 10) / 10;

  return rounded;
}

/**
 * From the 5 chosen cards, return the card ID with the highest "darkness" score.
 */
export function bestimmeSchattenKarte(kartenIds: string[]): string {
  let maxScore = -1;
  let shadowId = kartenIds[0] ?? '';

  for (const id of kartenIds) {
    const card = findCard(id);
    if (!card) continue;
    const score = darknessScore(card);
    if (score > maxScore) {
      maxScore = score;
      shadowId = id;
    }
  }

  return shadowId;
}

/**
 * From the 5 chosen cards, return the card ID with the highest "light" score.
 */
export function bestimmeLichtKarte(kartenIds: string[]): string {
  let maxScore = -1;
  let lightId = kartenIds[0] ?? '';

  for (const id of kartenIds) {
    const card = findCard(id);
    if (!card) continue;
    const score = lightScore(card);
    if (score > maxScore) {
      maxScore = score;
      lightId = id;
    }
  }

  return lightId;
}

/**
 * Compute the personal year energy.
 *
 * Sum digits of: birth_day + birth_month + current_year
 * Reduce to 0-21 (same logic as Lebenszahl).
 */
export function berechneJahresEnergie(
  dateStr: string,
  jahr: number,
): { jahr: number; arcanaId: number } {
  // Parse birth day and month from ISO date
  const parts = dateStr.split('-');
  const month = parts[1] ?? '01';
  const day = parts[2] ?? '01';

  // Build digit string: DD + MM + YYYY (of target year)
  const digitStr = day + month + String(jahr);

  let sum = 0;
  for (const ch of digitStr) {
    sum += parseInt(ch, 10);
  }

  while (sum > 21) {
    let newSum = 0;
    for (const ch of String(sum)) {
      newSum += parseInt(ch, 10);
    }
    sum = newSum;
  }

  return { jahr, arcanaId: sum };
}

/**
 * Determine the dominant element from an ElementSignatur.
 */
function dominantElement(sig: ElementSignatur): Element {
  const elements: { key: Element; value: number }[] = [
    { key: 'feuer', value: sig.feuer },
    { key: 'wasser', value: sig.wasser },
    { key: 'luft', value: sig.luft },
    { key: 'erde', value: sig.erde },
  ];
  elements.sort((a, b) => b.value - a.value);
  return elements[0]!.key;
}

// ---------------------------------------------------------------------------
// Main Entry Point
// ---------------------------------------------------------------------------

/**
 * Compute the full Seelen-Profil from quiz input.
 *
 * This is the single deterministic function that ties everything together.
 * Same inputs will always produce the exact same output.
 */
export function berechneSeelenprofil(input: QuizInput): SeelenProfil {
  // 1. Archetype from Lebenszahl
  const archetypId = berechneLebenszahl(input.geburtsdatum);

  // 2. Element signature from cards + soul questions
  const elementSignatur = berechneElementSignatur(
    input.kartenwahl,
    input.seelenFragen,
  );

  // 3. Shadow & light cards
  const schattenKarte = bestimmeSchattenKarte(input.kartenwahl);
  const lichtKarte = bestimmeLichtKarte(input.kartenwahl);

  // 4. Moon phase from birth date
  const gebDate = new Date(input.geburtsdatum + 'T12:00:00Z');
  const mondResult = berechneMondphase(gebDate);

  // 5. Planet & chakra from archetype
  const planet = PLANET_MAP[archetypId] ?? 'sonne';
  const chakra = CHAKRA_MAP[archetypId] ?? 'herz';

  // 6. Personal year energy (current year)
  const currentYear = new Date().getFullYear();
  const jahresEnergie = berechneJahresEnergie(input.geburtsdatum, currentYear);

  // 7. Cosmic task key
  const dominant = dominantElement(elementSignatur);
  const kosmischeAufgabeKey = `${archetypId}_${dominant}`;

  return {
    archetypId,
    elementSignatur,
    schattenKarte,
    lichtKarte,
    mondphase: mondResult.phase,
    planet,
    chakra,
    kosmischeAufgabeKey,
    jahresEnergie,
  };
}
