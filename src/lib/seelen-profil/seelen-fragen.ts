/**
 * Seelen-Fragen (Soul Questions)
 *
 * 8 mystical questions for the quiz, each with visual/intuitive options.
 * Each option carries element weights that feed into the profile algorithm.
 */

export interface SeelenFrageOption {
  id: string;
  label: string;
  /** CSS gradient for visual option cards */
  gradient?: string;
  /** Element association for display */
  element?: string;
  /** Element weights to add to the signature */
  gewichtung: Record<string, number>;
}

export interface SeelenFrage {
  id: string;
  frage: string;
  typ: 'bild' | 'element' | 'wort';
  optionen: SeelenFrageOption[];
}

export const seelenFragen: SeelenFrage[] = [
  {
    id: 'element',
    frage: 'Welches Element ruft dich?',
    typ: 'element',
    optionen: [
      {
        id: 'feuer',
        label: 'Feuer',
        gradient: 'linear-gradient(135deg, #EF4444, #F97316, #FBBF24)',
        element: 'feuer',
        gewichtung: { feuer: 3 },
      },
      {
        id: 'wasser',
        label: 'Wasser',
        gradient: 'linear-gradient(135deg, #3B82F6, #06B6D4, #6366F1)',
        element: 'wasser',
        gewichtung: { wasser: 3 },
      },
      {
        id: 'luft',
        label: 'Luft',
        gradient: 'linear-gradient(135deg, #A78BFA, #C4B5FD, #E0E7FF)',
        element: 'luft',
        gewichtung: { luft: 3 },
      },
      {
        id: 'erde',
        label: 'Erde',
        gradient: 'linear-gradient(135deg, #22C55E, #16A34A, #A3E635)',
        element: 'erde',
        gewichtung: { erde: 3 },
      },
    ],
  },
  {
    id: 'seele',
    frage: 'Wohin zieht es deine Seele?',
    typ: 'bild',
    optionen: [
      {
        id: 'sterne',
        label: 'Zu den Sternen',
        gradient: 'linear-gradient(135deg, #0F172A, #1E1B4B, #312E81, #4338CA)',
        gewichtung: { luft: 2, feuer: 1 },
      },
      {
        id: 'tiefsee',
        label: 'In die Tiefen des Ozeans',
        gradient: 'linear-gradient(135deg, #0C4A6E, #164E63, #155E75, #0E7490)',
        gewichtung: { wasser: 2, erde: 1 },
      },
    ],
  },
  {
    id: 'stille',
    frage: 'In der Stille findest du...',
    typ: 'wort',
    optionen: [
      {
        id: 'klarheit',
        label: 'Klarheit und Erkenntnis',
        gradient: 'linear-gradient(135deg, #F5F5F4, #D6D3D1, #A8A29E)',
        gewichtung: { luft: 2, erde: 1 },
      },
      {
        id: 'heilung',
        label: 'Heilung und Geborgenheit',
        gradient: 'linear-gradient(135deg, #5EEAD4, #2DD4BF, #14B8A6)',
        gewichtung: { wasser: 2, feuer: 1 },
      },
    ],
  },
  {
    id: 'kraft',
    frage: 'Deine stärkste Kraft ist...',
    typ: 'wort',
    optionen: [
      {
        id: 'intuition',
        label: 'Intuition',
        gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6, #A78BFA)',
        gewichtung: { wasser: 3 },
      },
      {
        id: 'mut',
        label: 'Mut',
        gradient: 'linear-gradient(135deg, #EF4444, #DC2626, #F97316)',
        gewichtung: { feuer: 3 },
      },
      {
        id: 'weisheit',
        label: 'Weisheit',
        gradient: 'linear-gradient(135deg, #C9A35C, #F4E3B1, #C9A35C)',
        gewichtung: { luft: 3 },
      },
      {
        id: 'ausdauer',
        label: 'Ausdauer',
        gradient: 'linear-gradient(135deg, #22C55E, #15803D, #166534)',
        gewichtung: { erde: 3 },
      },
    ],
  },
  {
    id: 'energie',
    frage: 'Welche Energie brauchst du jetzt?',
    typ: 'bild',
    optionen: [
      {
        id: 'erneuerung',
        label: 'Erneuerung und Aufbruch',
        gradient: 'linear-gradient(135deg, #FBBF24, #F59E0B, #EF4444)',
        gewichtung: { feuer: 2, luft: 1 },
      },
      {
        id: 'ruhe',
        label: 'Ruhe und Erdung',
        gradient: 'linear-gradient(135deg, #166534, #14532D, #1C1917)',
        gewichtung: { erde: 2, wasser: 1 },
      },
      {
        id: 'freiheit',
        label: 'Freiheit und Leichtigkeit',
        gradient: 'linear-gradient(135deg, #E0E7FF, #C7D2FE, #A5B4FC)',
        gewichtung: { luft: 2, feuer: 1 },
      },
      {
        id: 'tiefe',
        label: 'Tiefe und Verbindung',
        gradient: 'linear-gradient(135deg, #1E3A5F, #1E40AF, #3B82F6)',
        gewichtung: { wasser: 2, erde: 1 },
      },
    ],
  },
  {
    id: 'mondlicht',
    frage: 'Was ruft dich im Mondlicht?',
    typ: 'bild',
    optionen: [
      {
        id: 'tanz',
        label: 'Der Tanz der Schatten',
        gradient: 'linear-gradient(135deg, #1E1B4B, #312E81, #C9A35C)',
        gewichtung: { feuer: 2, wasser: 1 },
      },
      {
        id: 'stille',
        label: 'Die Stille des Sees',
        gradient: 'linear-gradient(135deg, #0C4A6E, #0891B2, #F4E3B1)',
        gewichtung: { wasser: 2, erde: 1 },
      },
    ],
  },
  {
    id: 'feuer',
    frage: 'Dein inneres Feuer brennt fuer...',
    typ: 'wort',
    optionen: [
      {
        id: 'wahrheit',
        label: 'Die Suche nach Wahrheit',
        gradient: 'linear-gradient(135deg, #F4E3B1, #C9A35C, #8B6914)',
        gewichtung: { luft: 2, feuer: 1 },
      },
      {
        id: 'liebe',
        label: 'Die Kraft der Liebe',
        gradient: 'linear-gradient(135deg, #EC4899, #F43F5E, #FB7185)',
        gewichtung: { wasser: 2, feuer: 1 },
      },
      {
        id: 'schoepfung',
        label: 'Das Erschaffen von Neuem',
        gradient: 'linear-gradient(135deg, #F97316, #FBBF24, #EAB308)',
        gewichtung: { feuer: 2, luft: 1 },
      },
      {
        id: 'bestaendigkeit',
        label: 'Den Schutz des Vertrauten',
        gradient: 'linear-gradient(135deg, #4ADE80, #22C55E, #16A34A)',
        gewichtung: { erde: 2, wasser: 1 },
      },
    ],
  },
  {
    id: 'pfad',
    frage: 'Welcher Pfad leuchtet für dich?',
    typ: 'bild',
    optionen: [
      {
        id: 'unbekannt',
        label: 'Der unbekannte Pfad im Nebel',
        gradient: 'linear-gradient(135deg, #374151, #4B5563, #6B7280, #9CA3AF)',
        gewichtung: { luft: 2, wasser: 1 },
      },
      {
        id: 'licht',
        label: 'Der goldene Pfad im Licht',
        gradient: 'linear-gradient(135deg, #C9A35C, #F4E3B1, #FBBF24, #F59E0B)',
        gewichtung: { feuer: 2, erde: 1 },
      },
    ],
  },
];
