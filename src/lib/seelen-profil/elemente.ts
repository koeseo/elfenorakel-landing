/**
 * Element Content Data
 *
 * Four classical elements with descriptions, colors, and combination texts.
 * Used in the Seelen-Profil to describe the user's elemental makeup.
 *
 * NOTE: Content fields contain SHORT PLACEHOLDERS.
 * Full AI-generated content will be added in Task 5.
 */

import type { Element } from './tarot-karten';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ElementInfo {
  id: Element;
  name: string;
  /** Visual symbol / emoji */
  symbol: string;
  /** Hex color for charts and UI */
  farbe: string;
  /** ~300 words about this element when dominant (placeholder) */
  beschreibung: string;
  /** Secondary element key -> combined interpretation text */
  kombination: Record<string, string>;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const elemente: Record<Element, ElementInfo> = {
  feuer: {
    id: 'feuer',
    name: 'Feuer',
    symbol: '\u{1F525}',
    farbe: '#EF4444',
    beschreibung:
      'Wenn Feuer dein dominantes Element ist, brennt in dir eine leidenschaftliche Kraft. Du bist eine Macherin, die Visionen in Taten verwandelt. Deine Energie ist ansteckend und du inspirierst andere, mutig voranzugehen.',
    kombination: {
      wasser:
        'Feuer und Wasser in dir erzeugen Dampf -- eine transformative Kraft. Du verbindest Leidenschaft mit emotionaler Tiefe und findest Kraft im Spannungsfeld der Gegensaetze.',
      luft:
        'Feuer und Luft naehren einander in dir. Dein intellektueller Geist entfacht immer neue Flammen der Inspiration. Du bist eine visionaere Denkerin mit unbaendigem Tatendrang.',
      erde:
        'Feuer und Erde geben dir vulkanische Kraft. Deine Leidenschaft ist geerdet und manifestiert sich in konkreten Ergebnissen. Du baust mit Feuer im Herzen und Bestaendigkeit in den Haenden.',
    },
  },
  wasser: {
    id: 'wasser',
    name: 'Wasser',
    symbol: '\u{1F4A7}',
    farbe: '#3B82F6',
    beschreibung:
      'Wenn Wasser dein dominantes Element ist, fliesst tiefe Empathie durch dein Wesen. Du spuerst die Gefuehle anderer wie Wellen im Ozean. Deine Intuition ist dein staerkstes Werkzeug und fuehrt dich sicher durch jede Lebenslage.',
    kombination: {
      feuer:
        'Wasser und Feuer in dir erzeugen eine brodelnde Dynamik. Du kannst sowohl zutiefst fuehlen als auch leidenschaftlich handeln. Diese Spannung macht dich zu einer kraftvollen Heilerin.',
      luft:
        'Wasser und Luft verbinden sich in dir zu sanften Winden ueber tiefem Ozean. Dein Gefuehl wird von Klarheit getragen, dein Denken von Empathie genaehrt.',
      erde:
        'Wasser und Erde formen in dir fruchtbaren Boden. Du naehrst andere mit deiner Fuersorge und bringst Emotionen in greifbare, bestaendige Formen.',
    },
  },
  luft: {
    id: 'luft',
    name: 'Luft',
    symbol: '\u{1F4A8}',
    farbe: '#A78BFA',
    beschreibung:
      'Wenn Luft dein dominantes Element ist, bist du eine Meisterin der Gedanken und Kommunikation. Dein Geist ist frei wie der Wind und erfasst Zusammenhaenge, die anderen verborgen bleiben. Du liebst den Austausch von Ideen und inspirierst durch deine Worte.',
    kombination: {
      feuer:
        'Luft und Feuer entfachen in dir ein Feuerwerk der Kreativitaet. Dein scharfer Verstand befluegelt deine Leidenschaft und traegt deine Ideen weit in die Welt.',
      wasser:
        'Luft und Wasser verbinden in dir Denken und Fuehlen zu einer tiefen Weisheit. Du analysierst mit dem Verstand und verstehst mit dem Herzen.',
      erde:
        'Luft und Erde geben deinen Gedanken Substanz. Du bist eine praktische Denkerin, die abstrakte Ideen in die Realitaet bringt.',
    },
  },
  erde: {
    id: 'erde',
    name: 'Erde',
    symbol: '\u{1F30D}',
    farbe: '#22C55E',
    beschreibung:
      'Wenn Erde dein dominantes Element ist, bist du der Fels in der Brandung. Du gibst anderen Halt und Sicherheit. Deine Staerke liegt in deiner Bestaendigkeit, deiner Geduld und deiner Faehigkeit, Traeume in die Wirklichkeit zu bringen.',
    kombination: {
      feuer:
        'Erde und Feuer verbinden sich in dir zu vulkanischer Schaffenskraft. Du baust mit Ausdauer und Leidenschaft und hinterlaesst bleibende Spuren.',
      wasser:
        'Erde und Wasser naehren in dir einen bluehenden Garten der Seele. Du bist fuersorgend, geerdet und emotional weise.',
      luft:
        'Erde und Luft geben dir die Faehigkeit, grosse Visionen praktisch umzusetzen. Du denkst klar und handelst bestaendig.',
    },
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Get element info by ID. Throws if not found.
 */
export function getElement(id: string): ElementInfo {
  const el = elemente[id as Element];
  if (!el) {
    throw new Error(`Element "${id}" not found`);
  }
  return el;
}

/**
 * Determine the dominant element from a signature object.
 * Returns the element key with the highest percentage.
 */
export function getDominantElement(signatur: {
  feuer: number;
  wasser: number;
  luft: number;
  erde: number;
}): Element {
  const entries: [Element, number][] = [
    ['feuer', signatur.feuer],
    ['wasser', signatur.wasser],
    ['luft', signatur.luft],
    ['erde', signatur.erde],
  ];
  entries.sort((a, b) => b[1] - a[1]);
  return entries[0]![0];
}

/**
 * Determine the secondary (second-strongest) element from a signature.
 * Returns the element key with the second-highest percentage.
 */
export function getSecondaryElement(signatur: {
  feuer: number;
  wasser: number;
  luft: number;
  erde: number;
}): Element {
  const entries: [Element, number][] = [
    ['feuer', signatur.feuer],
    ['wasser', signatur.wasser],
    ['luft', signatur.luft],
    ['erde', signatur.erde],
  ];
  entries.sort((a, b) => b[1] - a[1]);
  return entries[1]![0];
}
