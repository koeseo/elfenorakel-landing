/**
 * Moon Phase Calculation
 *
 * Determines the lunar phase for any given date using the
 * Conway/Meeus simplified method. Each phase maps to a
 * "Seelenzyklus" archetype used in the Seelen-Profil.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

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
  /** Internal phase key */
  phase: MondphaseType;
  /** Human-readable German name */
  name: string;
  /** Archetypal soul-cycle label */
  seelenzyklus: string;
  /** Visual illumination percentage 0-100 */
  illumination: number;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Synodic month length in days (mean value) */
const SYNODIC_MONTH = 29.530588;

/**
 * Reference new moon: January 6 2000 18:14 UTC
 * Expressed as a JS timestamp (ms since epoch).
 */
const REFERENCE_NEW_MOON_MS = Date.UTC(2000, 0, 6, 18, 14, 0);

/** Phase boundaries within one synodic month (in days) */
const PHASE_BOUNDARIES: { max: number; phase: MondphaseType }[] = [
  { max: 1.85, phase: 'neumond' },
  { max: 7.38, phase: 'zunehmende_sichel' },
  { max: 11.07, phase: 'erstes_viertel' },
  { max: 14.77, phase: 'zunehmender_mond' },
  { max: 16.61, phase: 'vollmond' },
  { max: 22.15, phase: 'abnehmender_mond' },
  { max: 25.84, phase: 'letztes_viertel' },
  { max: SYNODIC_MONTH, phase: 'abnehmende_sichel' },
];

/** German display names for each phase */
const PHASE_NAMES: Record<MondphaseType, string> = {
  neumond: 'Neumond',
  zunehmende_sichel: 'Zunehmende Sichel',
  erstes_viertel: 'Erstes Viertel',
  zunehmender_mond: 'Zunehmender Mond',
  vollmond: 'Vollmond',
  abnehmender_mond: 'Abnehmender Mond',
  letztes_viertel: 'Letztes Viertel',
  abnehmende_sichel: 'Abnehmende Sichel',
};

/** Soul-cycle archetype per phase */
const SEELENZYKLUS: Record<MondphaseType, string> = {
  neumond: 'Samen-Seele',
  zunehmende_sichel: 'Pionierin',
  erstes_viertel: 'Kriegerin',
  zunehmender_mond: 'Baumeisterin',
  vollmond: 'Erleuchtete',
  abnehmender_mond: 'Lehrerin',
  letztes_viertel: 'Alchemistin',
  abnehmende_sichel: 'Mystikerin',
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Returns the fractional day within the synodic month for a given date.
 * Value is always in the range [0, SYNODIC_MONTH).
 */
function phaseDay(date: Date): number {
  const diffMs = date.getTime() - REFERENCE_NEW_MOON_MS;
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  // Modulo that always returns a positive value
  const mod = diffDays % SYNODIC_MONTH;
  return mod < 0 ? mod + SYNODIC_MONTH : mod;
}

/**
 * Maps a fractional day (0 - 29.53) to a MondphaseType.
 */
function phaseFromDay(day: number): MondphaseType {
  for (const boundary of PHASE_BOUNDARIES) {
    if (day < boundary.max) {
      return boundary.phase;
    }
  }
  // Fallback (should not happen with correct input)
  return 'abnehmende_sichel';
}

/**
 * Calculates approximate illumination percentage.
 * 0 = new moon, 100 = full moon.
 */
function illumination(day: number): number {
  return ((1 - Math.cos((2 * Math.PI * day) / SYNODIC_MONTH)) / 2) * 100;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Calculate the moon phase for a given date.
 *
 * Uses the simplified Conway/Meeus method:
 * 1. Known new moon reference: January 6 2000 18:14 UTC
 * 2. Days between reference and target date modulo synodic month
 * 3. Map resulting day-within-cycle to one of 8 phases
 *
 * @param date - The date to calculate for (typically a birth date)
 * @returns Full moon phase result with name, soul-cycle, and illumination
 */
export function berechneMondphase(date: Date): MondphaseResult {
  const day = phaseDay(date);
  const phase = phaseFromDay(day);

  return {
    phase,
    name: PHASE_NAMES[phase],
    seelenzyklus: SEELENZYKLUS[phase],
    illumination: Math.round(illumination(day) * 100) / 100,
  };
}
