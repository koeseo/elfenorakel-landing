/**
 * Cosmic Task Content (Kosmische Aufgabe)
 *
 * Template system that combines archetype + dominant element into a unique
 * cosmic task description. Uses a dynamic template approach rather than
 * 88 hardcoded entries (22 archetypes x 4 elements).
 *
 * Custom overrides can be stored in OVERRIDES map for when Elfi writes
 * personalised texts for specific combinations.
 *
 * NOTE: Template texts contain SHORT PLACEHOLDERS.
 * Full AI-generated content will be added in Task 5.
 */

import { archetypen } from './archetypen';
import { elemente } from './elemente';
import type { Element } from './tarot-karten';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface KosmischeAufgabeContent {
  /** Key format: "{archetypId}_{element}" e.g. "0_feuer" */
  key: string;
  /** Display title */
  titel: string;
  /** ~200 words about the cosmic task (placeholder) */
  beschreibung: string;
}

// ---------------------------------------------------------------------------
// Element Keywords (used in templates)
// ---------------------------------------------------------------------------

const ELEMENT_KEYWORDS: Record<Element, { kraft: string; weg: string; qualitaet: string }> = {
  feuer: {
    kraft: 'Leidenschaft und Tatkraft',
    weg: 'mutig und entschlossen',
    qualitaet: 'feurige Entschlossenheit',
  },
  wasser: {
    kraft: 'Empathie und Intuition',
    weg: 'einfuehlsam und fliessend',
    qualitaet: 'emotionale Tiefe',
  },
  luft: {
    kraft: 'Klarheit und Kommunikation',
    weg: 'geistig und inspirierend',
    qualitaet: 'visionaere Weite',
  },
  erde: {
    kraft: 'Bestaendigkeit und Manifestation',
    weg: 'geerdet und bestaendig',
    qualitaet: 'praktische Weisheit',
  },
};

// ---------------------------------------------------------------------------
// Custom Overrides
// ---------------------------------------------------------------------------

/**
 * Hand-written overrides for specific archetype+element combinations.
 * When Elfi writes custom texts, add them here. The key format is
 * "{archetypId}_{element}" (e.g. "0_feuer").
 *
 * If a key exists here, it will be used instead of the template.
 */
const OVERRIDES: Record<string, Omit<KosmischeAufgabeContent, 'key'>> = {
  // Example override (uncomment and customise when ready):
  // '0_feuer': {
  //   titel: 'Die feurige Freie Seele: Dein kosmischer Auftrag',
  //   beschreibung: 'Custom text by Elfi...',
  // },
};

// ---------------------------------------------------------------------------
// Template Builder
// ---------------------------------------------------------------------------

/**
 * Build a cosmic task from archetype + element using the template system.
 */
function buildFromTemplate(archetypId: number, element: Element): KosmischeAufgabeContent {
  const archetyp = archetypen.find((a) => a.id === archetypId);
  const elementInfo = elemente[element];
  const keywords = ELEMENT_KEYWORDS[element];

  if (!archetyp) {
    throw new Error(`Archetyp with id ${archetypId} not found`);
  }

  const key = `${archetypId}_${element}`;

  const titel = `${archetyp.name} mit ${elementInfo.name}-Kraft: Deine kosmische Aufgabe`;

  const beschreibung =
    `Als ${archetyp.name} (${archetyp.karteName}) mit dem dominanten Element ${elementInfo.name} ` +
    `traegst du eine einzigartige kosmische Aufgabe in dir. ` +
    `Deine Seelenkraft wird durch ${keywords.kraft} angefeuert. ` +
    `Dein Weg ist ${keywords.weg}, und deine besondere Qualitaet ist ${keywords.qualitaet}. ` +
    `Die Verbindung von ${archetyp.name} und ${elementInfo.name} gibt dir die Aufgabe, ` +
    `${archetyp.claim.toLowerCase().replace(/\.$/, '')} -- ` +
    `und das mit der ganzen Kraft des ${elementInfo.name}-Elements zu tun.`;

  return { key, titel, beschreibung };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Get the cosmic task content for a given archetype + element combination.
 *
 * Checks for a hand-written override first; falls back to the template system.
 *
 * @param archetypId - Major Arcana number 0-21
 * @param element - Dominant element key
 */
export function getKosmischeAufgabe(
  archetypId: number,
  element: string,
): KosmischeAufgabeContent {
  const key = `${archetypId}_${element}`;

  // Check for custom override
  const override = OVERRIDES[key];
  if (override) {
    return { key, ...override };
  }

  // Fall back to template
  return buildFromTemplate(archetypId, element as Element);
}
