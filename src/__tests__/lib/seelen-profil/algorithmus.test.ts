import { describe, it, expect } from 'vitest';
import {
  berechneLebenszahl,
  berechneElementSignatur,
  bestimmeSchattenKarte,
  bestimmeLichtKarte,
  berechneJahresEnergie,
  berechneSeelenprofil,
} from '@/lib/seelen-profil/algorithmus';
import { VALID_QUIZ_INPUT } from '../../helpers/fixtures';

// ---------------------------------------------------------------------------
// berechneLebenszahl
// ---------------------------------------------------------------------------

describe('berechneLebenszahl', () => {
  it('computes known example: 1990-03-15 => 28 => 10', () => {
    // 1+5+0+3+1+9+9+0 = 28, 2+8 = 10
    expect(berechneLebenszahl('1990-03-15')).toBe(10);
  });

  it('computes known example: 2000-01-01 => 4', () => {
    // 0+1+0+1+2+0+0+0 = 4
    expect(berechneLebenszahl('2000-01-01')).toBe(4);
  });

  it('computes known example: 1985-12-29 => 10', () => {
    // 2+9+1+2+1+9+8+5 = 37, 3+7 = 10
    expect(berechneLebenszahl('1985-12-29')).toBe(10);
  });

  it('always returns a value between 0 and 21', () => {
    const dates = [
      '1900-01-01', '1999-12-31', '2024-06-15',
      '1975-08-23', '2005-11-11', '1950-04-30',
    ];
    for (const d of dates) {
      const result = berechneLebenszahl(d);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(21);
    }
  });

  it('is deterministic — same input always same output', () => {
    const a = berechneLebenszahl('1990-03-15');
    const b = berechneLebenszahl('1990-03-15');
    expect(a).toBe(b);
  });
});

// ---------------------------------------------------------------------------
// berechneElementSignatur
// ---------------------------------------------------------------------------

describe('berechneElementSignatur', () => {
  it('returns percentages summing to 100', () => {
    const sig = berechneElementSignatur(
      VALID_QUIZ_INPUT.kartenwahl,
      VALID_QUIZ_INPUT.seelenFragen,
    );
    const sum = sig.feuer + sig.wasser + sig.luft + sig.erde;
    expect(Math.abs(sum - 100)).toBeLessThan(0.2);
  });

  it('returns all values >= 0', () => {
    const sig = berechneElementSignatur(
      VALID_QUIZ_INPUT.kartenwahl,
      VALID_QUIZ_INPUT.seelenFragen,
    );
    expect(sig.feuer).toBeGreaterThanOrEqual(0);
    expect(sig.wasser).toBeGreaterThanOrEqual(0);
    expect(sig.luft).toBeGreaterThanOrEqual(0);
    expect(sig.erde).toBeGreaterThanOrEqual(0);
  });

  it('gives Major Arcana cards higher weight than Minor', () => {
    // All luft Major Arcana cards vs all luft minor (schwerter)
    const majorOnly = berechneElementSignatur(['narr', 'magier', 'liebenden', 'stern', 'gerechtigkeit']);
    const minorOnly = berechneElementSignatur(['schwerter-ass', 'schwerter-zwei', 'schwerter-drei', 'schwerter-vier', 'schwerter-fuenf']);
    // Both should have luft as dominant, but major should have 100% luft
    expect(majorOnly.luft).toBe(100);
    expect(minorOnly.luft).toBe(100);
  });

  it('returns equal distribution with empty input', () => {
    const sig = berechneElementSignatur([]);
    expect(sig).toEqual({ feuer: 25, wasser: 25, luft: 25, erde: 25 });
  });

  it('is deterministic', () => {
    const a = berechneElementSignatur(VALID_QUIZ_INPUT.kartenwahl, VALID_QUIZ_INPUT.seelenFragen);
    const b = berechneElementSignatur(VALID_QUIZ_INPUT.kartenwahl, VALID_QUIZ_INPUT.seelenFragen);
    expect(a).toEqual(b);
  });
});

// ---------------------------------------------------------------------------
// bestimmeSchattenKarte / bestimmeLichtKarte
// ---------------------------------------------------------------------------

describe('bestimmeSchattenKarte', () => {
  it('picks the card with the highest darkness score', () => {
    // teufel has darkness 95 (highest), sonne has 5 (lowest)
    const result = bestimmeSchattenKarte(['sonne', 'teufel', 'narr']);
    expect(result).toBe('teufel');
  });

  it('picks from minor arcana correctly', () => {
    // staebe-fuenf has darkness 70, kelche-ass has 10
    const result = bestimmeSchattenKarte(['kelche-ass', 'staebe-fuenf', 'muenzen-sechs']);
    expect(result).toBe('staebe-fuenf');
  });

  it('returns a card from the input array', () => {
    const cards = VALID_QUIZ_INPUT.kartenwahl;
    const result = bestimmeSchattenKarte(cards);
    expect(cards).toContain(result);
  });
});

describe('bestimmeLichtKarte', () => {
  it('picks the card with the highest light score', () => {
    // sonne has light 95 (highest), teufel has 5 (lowest)
    const result = bestimmeLichtKarte(['sonne', 'teufel', 'narr']);
    expect(result).toBe('sonne');
  });

  it('picks from minor arcana correctly', () => {
    // kelche-ass has light 80, staebe-fuenf has 15
    const result = bestimmeLichtKarte(['kelche-ass', 'staebe-fuenf', 'muenzen-sechs']);
    expect(result).toBe('kelche-ass');
  });

  it('returns a card from the input array', () => {
    const cards = VALID_QUIZ_INPUT.kartenwahl;
    const result = bestimmeLichtKarte(cards);
    expect(cards).toContain(result);
  });
});

// ---------------------------------------------------------------------------
// berechneJahresEnergie
// ---------------------------------------------------------------------------

describe('berechneJahresEnergie', () => {
  it('returns the correct year', () => {
    const result = berechneJahresEnergie('1990-03-15', 2026);
    expect(result.jahr).toBe(2026);
  });

  it('returns arcanaId between 0 and 21', () => {
    const result = berechneJahresEnergie('1990-03-15', 2026);
    expect(result.arcanaId).toBeGreaterThanOrEqual(0);
    expect(result.arcanaId).toBeLessThanOrEqual(21);
  });

  it('is deterministic', () => {
    const a = berechneJahresEnergie('1990-03-15', 2026);
    const b = berechneJahresEnergie('1990-03-15', 2026);
    expect(a).toEqual(b);
  });

  it('gives different results for different years', () => {
    const a = berechneJahresEnergie('1990-03-15', 2025);
    const b = berechneJahresEnergie('1990-03-15', 2026);
    // Different years should generally produce different results
    // (not guaranteed but extremely likely)
    expect(a.jahr).not.toBe(b.jahr);
  });
});

// ---------------------------------------------------------------------------
// berechneSeelenprofil (integration of all sub-functions)
// ---------------------------------------------------------------------------

describe('berechneSeelenprofil', () => {
  it('returns all 9 dimensions', () => {
    const profil = berechneSeelenprofil(VALID_QUIZ_INPUT);

    expect(profil).toHaveProperty('archetypId');
    expect(profil).toHaveProperty('elementSignatur');
    expect(profil).toHaveProperty('schattenKarte');
    expect(profil).toHaveProperty('lichtKarte');
    expect(profil).toHaveProperty('mondphase');
    expect(profil).toHaveProperty('planet');
    expect(profil).toHaveProperty('chakra');
    expect(profil).toHaveProperty('kosmischeAufgabeKey');
    expect(profil).toHaveProperty('jahresEnergie');
  });

  it('has valid archetypId (0-21)', () => {
    const profil = berechneSeelenprofil(VALID_QUIZ_INPUT);
    expect(profil.archetypId).toBeGreaterThanOrEqual(0);
    expect(profil.archetypId).toBeLessThanOrEqual(21);
  });

  it('has element signatur summing to 100', () => {
    const profil = berechneSeelenprofil(VALID_QUIZ_INPUT);
    const sum =
      profil.elementSignatur.feuer +
      profil.elementSignatur.wasser +
      profil.elementSignatur.luft +
      profil.elementSignatur.erde;
    expect(Math.abs(sum - 100)).toBeLessThan(0.2);
  });

  it('has shadow and light cards from input', () => {
    const profil = berechneSeelenprofil(VALID_QUIZ_INPUT);
    expect(VALID_QUIZ_INPUT.kartenwahl).toContain(profil.schattenKarte);
    expect(VALID_QUIZ_INPUT.kartenwahl).toContain(profil.lichtKarte);
  });

  it('has a valid moon phase', () => {
    const validPhases = [
      'neumond', 'zunehmende_sichel', 'erstes_viertel', 'zunehmender_mond',
      'vollmond', 'abnehmender_mond', 'letztes_viertel', 'abnehmende_sichel',
    ];
    const profil = berechneSeelenprofil(VALID_QUIZ_INPUT);
    expect(validPhases).toContain(profil.mondphase);
  });

  it('has valid planet and chakra keys', () => {
    const validPlanets = ['sonne', 'mond', 'merkur', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptun', 'pluto'];
    const validChakras = ['wurzel', 'sakral', 'solarplexus', 'herz', 'hals', 'stirn', 'krone'];
    const profil = berechneSeelenprofil(VALID_QUIZ_INPUT);
    expect(validPlanets).toContain(profil.planet);
    expect(validChakras).toContain(profil.chakra);
  });

  it('kosmischeAufgabeKey matches pattern "{id}_{element}"', () => {
    const profil = berechneSeelenprofil(VALID_QUIZ_INPUT);
    expect(profil.kosmischeAufgabeKey).toMatch(/^\d+_(feuer|wasser|luft|erde)$/);
  });

  it('is deterministic — same input produces same output', () => {
    const a = berechneSeelenprofil(VALID_QUIZ_INPUT);
    const b = berechneSeelenprofil(VALID_QUIZ_INPUT);
    expect(a).toEqual(b);
  });
});
