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
 * The template generates ~200 words of rich, evocative content that
 * describes the user's unique cosmic task based on their archetype and
 * dominant element combination.
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
  /** ~200 words about the cosmic task */
  beschreibung: string;
}

// ---------------------------------------------------------------------------
// Element Keywords (used in templates)
// ---------------------------------------------------------------------------

const ELEMENT_KEYWORDS: Record<Element, { kraft: string; weg: string; qualität: string; essenz: string; natur: string }> = {
  feuer: {
    kraft: 'Leidenschaft und Tatkraft',
    weg: 'mutig und entschlossen',
    qualität: 'feurige Entschlossenheit',
    essenz: 'die Flamme, die in deinem Herzen brennt und dich antreibt, deine Visionen in die Tat umzusetzen',
    natur: 'Wie ein Feuer, das Licht und Wärme spendet, bist du hier, um andere mit deiner Begeisterung zu entfachen',
  },
  wasser: {
    kraft: 'Empathie und Intuition',
    weg: 'einfühlsam und fließend',
    qualität: 'emotionale Tiefe',
    essenz: 'der stille Strom, der durch die Tiefen deiner Seele fließt und verborgene Wahrheiten an die Oberfläche trägt',
    natur: 'Wie Wasser, das sich seinen Weg durch jeden Fels bahnt, findest du sanfte Wege durch die härtesten Herausforderungen',
  },
  luft: {
    kraft: 'Klarheit und Kommunikation',
    weg: 'geistig und inspirierend',
    qualität: 'visionäre Weite',
    essenz: 'der frische Wind, der alte Gedanken davonträgt und Raum für neue Perspektiven und Erkenntnisse schafft',
    natur: 'Wie der Wind, der Samen über weite Strecken trägt, verbreitest du Ideen und Inspiration, wohin du auch gehst',
  },
  erde: {
    kraft: 'Beständigkeit und Manifestation',
    weg: 'geerdet und beständig',
    qualität: 'praktische Weisheit',
    essenz: 'der fruchtbare Boden, in dem deine tiefsten Visionen Wurzeln schlagen und zu greifbarer Wirklichkeit heranwachsen',
    natur: 'Wie die Erde, die geduldig nährt und trägt, bist du der feste Grund, auf dem andere sicher stehen können',
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
    `trägst du eine einzigartige kosmische Aufgabe in dir, die nur du auf diese Weise erfüllen kannst. ` +
    `Deine Seelenkraft wird durch ${keywords.kraft} angefeuert, ` +
    `und dein Weg ist ${keywords.weg}. ` +
    `Deine besondere Qualität ist ${keywords.qualität} -- ` +
    `${keywords.essenz}. ` +
    `${keywords.natur}. ` +
    `Die Verbindung von ${archetyp.name} und ${elementInfo.name} verleiht dir eine seltene Gabe: ` +
    `${archetyp.claim.toLowerCase().replace(/\.$/, '')} -- ` +
    `und das mit der ganzen Kraft des ${elementInfo.name}-Elements zu tun. ` +
    `Diese Kombination macht dich zu einer Seele, die in dieser Welt gebraucht wird. ` +
    `Dein kosmischer Auftrag wartet nicht auf den perfekten Moment -- er entfaltet sich in jedem Augenblick, ` +
    `in dem du den Mut hast, ganz du selbst zu sein und deine einzigartige Energie in die Welt zu tragen.`;

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
