import type { QuizInput } from '@/lib/seelen-profil/algorithmus';

/**
 * Valid quiz input for testing.
 * Uses known cards and soul-question answers.
 */
export const VALID_QUIZ_INPUT: QuizInput = {
  vorname: 'Testperson',
  geburtsdatum: '1990-03-15',
  geburtszeit: '14:30',
  kartenwahl: ['narr', 'magier', 'hohepriesterin', 'kelche-ass', 'staebe-fuenf'],
  seelenFragen: [
    { frageId: 'element', antwort: 'wasser' },
    { frageId: 'seele', antwort: 'tiefsee' },
    { frageId: 'stille', antwort: 'heilung' },
    { frageId: 'kraft', antwort: 'intuition' },
    { frageId: 'energie', antwort: 'tiefe' },
    { frageId: 'mondlicht', antwort: 'stille' },
    { frageId: 'feuer', antwort: 'liebe' },
    { frageId: 'pfad', antwort: 'unbekannt' },
  ],
};

/**
 * Minimal valid input for the calculate API.
 */
export const VALID_API_BODY = {
  vorname: 'Testperson',
  geburtsdatum: '1990-03-15',
  geburtszeit: '14:30',
  email: 'test@example.com',
  kartenwahl: ['narr', 'magier', 'hohepriesterin', 'kelche-ass', 'staebe-fuenf'],
  seelenFragen: [
    { frageId: 'element', antwort: 'wasser' },
    { frageId: 'seele', antwort: 'tiefsee' },
    { frageId: 'stille', antwort: 'heilung' },
    { frageId: 'kraft', antwort: 'intuition' },
    { frageId: 'energie', antwort: 'tiefe' },
    { frageId: 'mondlicht', antwort: 'stille' },
    { frageId: 'feuer', antwort: 'liebe' },
    { frageId: 'pfad', antwort: 'unbekannt' },
  ],
};

/** A unique test email to avoid collisions */
export function testEmail() {
  return `test-${Date.now()}-${Math.random().toString(36).slice(2)}@elfenorakel-test.de`;
}
