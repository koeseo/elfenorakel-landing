/**
 * Chakra Definitions
 *
 * The 7 main energy centres used in the Seelen-Profil system.
 * Each chakra governs a specific aspect of body, mind, and spirit.
 */

export interface ChakraInfo {
  /** Unique chakra key */
  id: string;
  /** Display name */
  name: string;
  /** Hex color associated with this chakra */
  farbe: string;
  /** Body position */
  position: string;
  /** Core theme */
  thema: string;
  /** Longer description (placeholder, ~2-3 sentences) */
  beschreibung: string;
}

export const chakras: Record<string, ChakraInfo> = {
  wurzel: {
    id: 'wurzel',
    name: 'Wurzelchakra',
    farbe: '#EF4444',
    position: 'Basis der Wirbelsäule',
    thema: 'Sicherheit & Erdung',
    beschreibung:
      'Das Wurzelchakra ist dein Fundament und verbindet dich mit der Erde. Es regiert dein Gefühl von Sicherheit, Stabilität und Zugehörigkeit. Wenn es im Gleichgewicht ist, fühlst du dich geerdet und getragen.',
  },
  sakral: {
    id: 'sakral',
    name: 'Sakralchakra',
    farbe: '#F97316',
    position: 'Unterbauch',
    thema: 'Kreativität & Sinnlichkeit',
    beschreibung:
      'Das Sakralchakra ist das Zentrum deiner Kreativität und Sinnlichkeit. Es regiert deine Emotionen, dein Lustempfinden und deinen kreativen Fluss. Hier liegt die Quelle deiner schöpferischen Lebensenergie.',
  },
  solarplexus: {
    id: 'solarplexus',
    name: 'Solarplexus-Chakra',
    farbe: '#EAB308',
    position: 'Oberbauch',
    thema: 'Willenskraft & Selbstbewusstsein',
    beschreibung:
      'Das Solarplexus-Chakra ist dein inneres Feuer und der Sitz deiner persönlichen Macht. Es steuert dein Selbstbewusstsein, deinen Willen und deine Entschlusskraft. Ein starkes Solarplexus-Chakra gibt dir innere Stärke und Klarheit.',
  },
  herz: {
    id: 'herz',
    name: 'Herzchakra',
    farbe: '#22C55E',
    position: 'Herzzentrum',
    thema: 'Liebe & Mitgefühl',
    beschreibung:
      'Das Herzchakra ist die Brücke zwischen Körper und Geist. Es regiert Liebe, Mitgefühl und Vergebung. Wenn es offen ist, kannst du bedingungslos lieben und tiefe Verbindungen eingehen.',
  },
  hals: {
    id: 'hals',
    name: 'Halschakra',
    farbe: '#06B6D4',
    position: 'Kehlkopf',
    thema: 'Ausdruck & Wahrheit',
    beschreibung:
      'Das Halschakra ist das Zentrum deiner Kommunikation und deines authentischen Selbstausdrucks. Es ermöglicht dir, deine Wahrheit klar und liebevoll auszusprechen. Hier findest du deine einzigartige Stimme.',
  },
  stirn: {
    id: 'stirn',
    name: 'Stirnchakra',
    farbe: '#6366F1',
    position: 'Zwischen den Augenbrauen',
    thema: 'Intuition & Erkenntnis',
    beschreibung:
      'Das Stirnchakra, auch drittes Auge genannt, ist das Tor zu deiner inneren Weisheit. Es schärft deine Intuition und Vorstellungskraft. Durch dieses Chakra erkennst du die tieferen Zusammenhänge des Lebens.',
  },
  krone: {
    id: 'krone',
    name: 'Kronenchakra',
    farbe: '#A855F7',
    position: 'Scheitel',
    thema: 'Spiritualität & Einheit',
    beschreibung:
      'Das Kronenchakra verbindet dich mit dem Göttlichen und dem kosmischen Bewusstsein. Es ist das Tor zur Einheit und spirituellen Erleuchtung. Hier erfährst du deine Verbindung mit allem, was ist.',
  },
};

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

/**
 * Get a chakra by its key.
 * Throws if the key is not found.
 */
export function getChakra(id: string): ChakraInfo {
  const chakra = chakras[id];
  if (!chakra) {
    throw new Error(`Chakra with id "${id}" not found`);
  }
  return chakra;
}
