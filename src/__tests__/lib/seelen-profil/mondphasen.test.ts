import { describe, it, expect } from 'vitest';
import { berechneMondphase, type MondphaseType } from '@/lib/seelen-profil/mondphasen';

const ALL_PHASES: MondphaseType[] = [
  'neumond', 'zunehmende_sichel', 'erstes_viertel', 'zunehmender_mond',
  'vollmond', 'abnehmender_mond', 'letztes_viertel', 'abnehmende_sichel',
];

describe('berechneMondphase', () => {
  it('recognises the reference new moon (Jan 6, 2000)', () => {
    // The reference new moon is Jan 6 2000 18:14 UTC
    const refDate = new Date(Date.UTC(2000, 0, 6, 18, 14, 0));
    const result = berechneMondphase(refDate);
    expect(result.phase).toBe('neumond');
    expect(result.illumination).toBeLessThan(5);
  });

  it('recognises a full moon ~14.77 days after reference', () => {
    // Full moon boundary starts at 14.77 days in the phase cycle
    // Reference new moon: Jan 6 2000 18:14 UTC
    // Add ~15.5 days to land solidly in the vollmond phase (14.77 - 16.61)
    const fullMoonDate = new Date(Date.UTC(2000, 0, 22, 6, 0, 0));
    const result = berechneMondphase(fullMoonDate);
    expect(result.phase).toBe('vollmond');
    expect(result.illumination).toBeGreaterThan(90);
  });

  it('returns illumination between 0 and 100', () => {
    const dates = [
      new Date('2000-01-06'),
      new Date('2000-01-15'),
      new Date('2000-01-21'),
      new Date('1990-03-15'),
      new Date('2024-12-25'),
    ];
    for (const d of dates) {
      const result = berechneMondphase(d);
      expect(result.illumination).toBeGreaterThanOrEqual(0);
      expect(result.illumination).toBeLessThanOrEqual(100);
    }
  });

  it('returns a valid phase', () => {
    const result = berechneMondphase(new Date('1990-03-15'));
    expect(ALL_PHASES).toContain(result.phase);
  });

  it('returns a German name', () => {
    const result = berechneMondphase(new Date('1990-03-15'));
    expect(result.name).toBeTruthy();
    expect(typeof result.name).toBe('string');
  });

  it('returns a seelenzyklus label', () => {
    const result = berechneMondphase(new Date('1990-03-15'));
    expect(result.seelenzyklus).toBeTruthy();
    expect(typeof result.seelenzyklus).toBe('string');
  });

  it('is deterministic', () => {
    const d = new Date('1990-03-15');
    const a = berechneMondphase(d);
    const b = berechneMondphase(d);
    expect(a).toEqual(b);
  });

  it('covers all 8 phases across a full synodic month', () => {
    // Starting from reference new moon, sample across 29.53 days
    const ref = Date.UTC(2000, 0, 6, 18, 14, 0);
    const foundPhases = new Set<MondphaseType>();

    for (let dayOffset = 0; dayOffset < 30; dayOffset += 1) {
      const d = new Date(ref + dayOffset * 24 * 60 * 60 * 1000);
      const result = berechneMondphase(d);
      foundPhases.add(result.phase);
    }

    expect(foundPhases.size).toBe(8);
  });
});
