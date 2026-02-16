import { describe, it, expect } from 'vitest';
import { archetypen, type Archetyp } from '@/lib/seelen-profil/archetypen';
import { elemente, getElement } from '@/lib/seelen-profil/elemente';
import { mondphasenContent } from '@/lib/seelen-profil/mondphasen-content';
import { jahresEnergieContent } from '@/lib/seelen-profil/jahres-energie';
import { seelenFragen } from '@/lib/seelen-profil/seelen-fragen';
import { allCards, majorArcana } from '@/lib/seelen-profil/tarot-karten';
import { getKosmischeAufgabe } from '@/lib/seelen-profil/kosmische-aufgabe';

// ---------------------------------------------------------------------------
// Archetypen
// ---------------------------------------------------------------------------

describe('Archetypen data', () => {
  it('has exactly 22 archetypes (0-21)', () => {
    expect(archetypen).toHaveLength(22);
  });

  it('has sequential IDs 0 through 21', () => {
    const ids = archetypen.map((a: Archetyp) => a.id).sort((a: number, b: number) => a - b);
    expect(ids).toEqual(Array.from({ length: 22 }, (_, i) => i));
  });

  it('each archetype has all required content fields', () => {
    for (const a of archetypen) {
      expect(a.karteId, `archetype ${a.id} missing karteId`).toBeTruthy();
      expect(a.name, `archetype ${a.id} missing name`).toBeTruthy();
      expect(a.karteName, `archetype ${a.id} missing karteName`).toBeTruthy();
      expect(a.planet, `archetype ${a.id} missing planet`).toBeTruthy();
      expect(a.chakra, `archetype ${a.id} missing chakra`).toBeTruthy();
      expect(a.wesen, `archetype ${a.id} missing wesen`).toBeTruthy();
      expect(a.staerken, `archetype ${a.id} missing staerken`).toBeTruthy();
      expect(a.elfiBotschaft, `archetype ${a.id} missing elfiBotschaft`).toBeTruthy();
    }
  });

  it('karteId matches a Major Arcana card', () => {
    const majorIds = majorArcana.map(c => c.id);
    for (const a of archetypen) {
      expect(majorIds).toContain(a.karteId);
    }
  });
});

// ---------------------------------------------------------------------------
// Elemente
// ---------------------------------------------------------------------------

describe('Elemente data', () => {
  const elementeArray = Object.values(elemente);

  it('has exactly 4 elements', () => {
    expect(elementeArray).toHaveLength(4);
  });

  it('each element has beschreibung and kombination', () => {
    for (const el of elementeArray) {
      expect(el.beschreibung, `${el.id} missing beschreibung`).toBeTruthy();
      expect(el.kombination, `${el.id} missing kombination`).toBeDefined();
      expect(typeof el.kombination).toBe('object');
    }
  });

  it('getElement returns valid element by id', () => {
    expect(getElement('feuer')).toBeDefined();
    expect(getElement('wasser')).toBeDefined();
    expect(getElement('luft')).toBeDefined();
    expect(getElement('erde')).toBeDefined();
  });
});

// ---------------------------------------------------------------------------
// Mondphasen Content
// ---------------------------------------------------------------------------

describe('Mondphasen content data', () => {
  const mondphasenArray = Object.values(mondphasenContent);

  it('has exactly 8 moon phases', () => {
    expect(mondphasenArray).toHaveLength(8);
  });

  it('each phase has beschreibung, ritual, and energie', () => {
    for (const m of mondphasenArray) {
      expect(m.beschreibung, `${m.phase} missing beschreibung`).toBeTruthy();
      expect(m.ritual, `${m.phase} missing ritual`).toBeTruthy();
      expect(m.energie, `${m.phase} missing energie`).toBeTruthy();
    }
  });
});

// ---------------------------------------------------------------------------
// Jahres-Energien
// ---------------------------------------------------------------------------

describe('Jahres-Energien data', () => {
  it('has exactly 22 entries (0-21)', () => {
    expect(jahresEnergieContent).toHaveLength(22);
  });

  it('each entry has titel, beschreibung, and 3 impulse', () => {
    for (const j of jahresEnergieContent) {
      expect(j.titel, `arcanaId ${j.arcanaId} missing titel`).toBeTruthy();
      expect(j.beschreibung, `arcanaId ${j.arcanaId} missing beschreibung`).toBeTruthy();
      expect(j.impulse, `arcanaId ${j.arcanaId} missing impulse`).toBeDefined();
      expect(j.impulse).toHaveLength(3);
    }
  });

  it('has sequential arcanaId 0 through 21', () => {
    const ids = jahresEnergieContent.map(j => j.arcanaId).sort((a, b) => a - b);
    expect(ids).toEqual(Array.from({ length: 22 }, (_, i) => i));
  });
});

// ---------------------------------------------------------------------------
// Seelen-Fragen
// ---------------------------------------------------------------------------

describe('Seelen-Fragen data', () => {
  it('has exactly 8 questions', () => {
    expect(seelenFragen).toHaveLength(8);
  });

  it('each question has at least 2 options', () => {
    for (const f of seelenFragen) {
      expect(f.optionen.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('each option has id, label, and gewichtung', () => {
    for (const f of seelenFragen) {
      for (const o of f.optionen) {
        expect(o.id, `question ${f.id} option missing id`).toBeTruthy();
        expect(o.label, `question ${f.id} option missing label`).toBeTruthy();
        expect(o.gewichtung, `question ${f.id} option ${o.id} missing gewichtung`).toBeDefined();
      }
    }
  });
});

// ---------------------------------------------------------------------------
// Tarot-Karten
// ---------------------------------------------------------------------------

describe('Tarot cards data', () => {
  it('has exactly 78 cards total', () => {
    expect(allCards).toHaveLength(78);
  });

  it('has 22 Major Arcana', () => {
    expect(majorArcana).toHaveLength(22);
  });

  it('all card IDs are unique', () => {
    const ids = allCards.map(c => c.id);
    expect(new Set(ids).size).toBe(78);
  });

  it('minor arcana have an element', () => {
    const minors = allCards.filter(c => c.suit !== 'major');
    for (const c of minors) {
      expect(c.element, `minor card ${c.id} missing element`).toBeTruthy();
    }
  });
});

// ---------------------------------------------------------------------------
// Kosmische Aufgabe
// ---------------------------------------------------------------------------

describe('Kosmische Aufgabe', () => {
  it('generates content for all 22 x 4 combinations', () => {
    const elements = ['feuer', 'wasser', 'luft', 'erde'] as const;
    for (let id = 0; id < 22; id++) {
      for (const el of elements) {
        const result = getKosmischeAufgabe(id, el);
        expect(result, `missing for ${id}_${el}`).toBeDefined();
        expect(result.titel).toBeTruthy();
        expect(result.beschreibung).toBeTruthy();
      }
    }
  });
});
