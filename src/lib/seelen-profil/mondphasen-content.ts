/**
 * Moon Phase Content Data
 *
 * Descriptive content for each of the 8 lunar phases.
 * Maps each phase to a "Seelenzyklus" archetype with ritual suggestions.
 *
 * NOTE: Content fields contain SHORT PLACEHOLDERS.
 * Full AI-generated content will be added in Task 5.
 */

import type { MondphaseType } from './mondphasen';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface MondphasenContent {
  phase: MondphaseType;
  /** German display name */
  name: string;
  /** Soul-cycle archetype label */
  seelenzyklus: string;
  /** ~400 words about this moon phase soul (placeholder) */
  beschreibung: string;
  /** Practice / ritual suggestion (placeholder) */
  ritual: string;
  /** Short energy description */
  energie: string;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const mondphasenContent: Record<MondphaseType, MondphasenContent> = {
  neumond: {
    phase: 'neumond',
    name: 'Neumond',
    seelenzyklus: 'Samen-Seele',
    beschreibung:
      'Du bist unter dem Neumond geboren -- der dunkelsten und stillsten Phase des Mondzyklus. Deine Seele traegt die Energie des Neubeginns. Wie ein Same in der Erde wartest du auf den richtigen Moment, um zu keimen und ins Licht zu wachsen.',
    ritual:
      'Setze dich in der Stille des Neumonds hin und schreibe deine tiefsten Wuensche auf. Zuende eine Kerze an und visualisiere, wie dein Samen im Dunkel zu keimen beginnt.',
    energie: 'Stille, Potential, Neubeginn',
  },
  zunehmende_sichel: {
    phase: 'zunehmende_sichel',
    name: 'Zunehmende Sichel',
    seelenzyklus: 'Pionierin',
    beschreibung:
      'Du bist unter der zunehmenden Sichel geboren -- dem ersten zaghaften Licht nach der Dunkelheit. Deine Seele ist eine Pionierin, die mutig die ersten Schritte ins Unbekannte wagt. Du traegst den Impuls des Aufbruchs in dir.',
    ritual:
      'Gehe bei zunehmender Sichel nach draussen und formuliere einen konkreten ersten Schritt fuer dein naechstes Vorhaben. Beginne mit einer kleinen, mutigen Tat.',
    energie: 'Aufbruch, Mut, erste Schritte',
  },
  erstes_viertel: {
    phase: 'erstes_viertel',
    name: 'Erstes Viertel',
    seelenzyklus: 'Kriegerin',
    beschreibung:
      'Du bist unter dem ersten Viertel geboren -- dem Halbmond der Entscheidung. Deine Seele ist eine Kriegerin, die Hindernisse ueberwindet und fuer ihre Ueberzeugungen einsteht. Du kennst die Kraft des Durchhaltens.',
    ritual:
      'Stell dich einer Herausforderung, die du bisher vermieden hast. Schreibe auf, welches Hindernis du als naechstes ueberwinden moechtest, und mache den ersten Schritt.',
    energie: 'Entschlossenheit, Kampfgeist, Durchbruch',
  },
  zunehmender_mond: {
    phase: 'zunehmender_mond',
    name: 'Zunehmender Mond',
    seelenzyklus: 'Baumeisterin',
    beschreibung:
      'Du bist unter dem zunehmenden Mond geboren -- der Phase des Wachstums und Aufbaus. Deine Seele ist eine Baumeisterin, die Stueck fuer Stueck an ihrer Vision arbeitet. Du verstehst, dass grosse Werke Zeit brauchen.',
    ritual:
      'Widme dich einem kreativen Projekt und arbeite bewusst daran weiter. Spuere, wie deine Energie mit dem wachsenden Mond zunimmt. Feiere jeden kleinen Fortschritt.',
    energie: 'Wachstum, Aufbau, Verfeinerung',
  },
  vollmond: {
    phase: 'vollmond',
    name: 'Vollmond',
    seelenzyklus: 'Erleuchtete',
    beschreibung:
      'Du bist unter dem Vollmond geboren -- dem Hoehepunkt des Lichts. Deine Seele ist eine Erleuchtete, die in voller Strahlkraft lebt. Du traegst eine natuerliche Praesenz und Sichtbarkeit, die andere anzieht und inspiriert.',
    ritual:
      'Stelle dich bei Vollmond ins Mondlicht und lass sein Licht jeden Teil von dir erleuchten. Meditiere ueber das, was du in die Welt bringen moechtest, und feiere deine Fuelle.',
    energie: 'Erfuellung, Strahlen, Hoehepunkt',
  },
  abnehmender_mond: {
    phase: 'abnehmender_mond',
    name: 'Abnehmender Mond',
    seelenzyklus: 'Lehrerin',
    beschreibung:
      'Du bist unter dem abnehmenden Mond geboren -- der Phase des Teilens und Weitergebens. Deine Seele ist eine Lehrerin, die ihre Erfahrungen und Weisheit grosszuegig mit anderen teilt. Du weisst, dass wahre Erfuellung im Geben liegt.',
    ritual:
      'Teile dein Wissen mit jemandem, der es braucht. Schreibe auf, welche Erfahrung du in letzter Zeit gemacht hast und was du daraus gelernt hast.',
    energie: 'Weitergabe, Grosszuegigkeit, Lehre',
  },
  letztes_viertel: {
    phase: 'letztes_viertel',
    name: 'Letztes Viertel',
    seelenzyklus: 'Alchemistin',
    beschreibung:
      'Du bist unter dem letzten Viertel geboren -- dem Halbmond der Transformation. Deine Seele ist eine Alchemistin, die aus Altem Neues erschafft. Du verstehst die Kunst der Wandlung und weisst, dass Loslassen ein Akt der Staerke ist.',
    ritual:
      'Raeume bewusst etwas aus deinem Leben, das dir nicht mehr dient. Es kann ein Gegenstand, eine Gewohnheit oder ein Gedankenmuster sein. Verwandle es in etwas Neues.',
    energie: 'Transformation, Loslassen, Alchemie',
  },
  abnehmende_sichel: {
    phase: 'abnehmende_sichel',
    name: 'Abnehmende Sichel',
    seelenzyklus: 'Mystikerin',
    beschreibung:
      'Du bist unter der abnehmenden Sichel geboren -- der letzten Phase vor der Stille. Deine Seele ist eine Mystikerin, die in den Tiefen des Seins die groessten Geheimnisse findet. Du lebst nahe am Schleier zwischen den Welten.',
    ritual:
      'Ziehe dich zurueck und meditiere in voelliger Stille. Lass alle Gedanken los und lausche dem, was aus der Tiefe aufsteigt. Halte deine Traeume fest.',
    energie: 'Stille, Mystik, innere Schau',
  },
};

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

/**
 * Get moon phase content by phase key. Throws if not found.
 */
export function getMondphasenContent(phase: MondphaseType): MondphasenContent {
  const content = mondphasenContent[phase];
  if (!content) {
    throw new Error(`Moon phase content for "${phase}" not found`);
  }
  return content;
}
