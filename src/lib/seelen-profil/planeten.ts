/**
 * Planet Definitions
 *
 * Celestial body associations for the Seelen-Profil system.
 * Each planet carries a specific energy that influences the archetype.
 */

export interface PlanetInfo {
  /** Unique planet key */
  id: string;
  /** Display name */
  name: string;
  /** Astronomical/astrological symbol */
  symbol: string;
  /** Short 1-sentence energy description */
  energie: string;
  /** Longer description (placeholder, ~2-3 sentences) */
  beschreibung: string;
}

export const planeten: Record<string, PlanetInfo> = {
  sonne: {
    id: 'sonne',
    name: 'Sonne',
    symbol: '☉',
    energie: 'Vitalität, Lebenskraft und Selbstausdruck',
    beschreibung:
      'Die Sonne steht im Zentrum deines Wesens und repräsentiert dein wahres Selbst. Sie schenkt dir Lebenskraft, Strahlkraft und den Mut, dein inneres Licht in die Welt zu tragen.',
  },
  mond: {
    id: 'mond',
    name: 'Mond',
    symbol: '☽',
    energie: 'Emotion, Intuition und innere Welt',
    beschreibung:
      'Der Mond regiert deine Gefühle und dein Unterbewusstsein. Er verbindet dich mit deinen tiefsten Emotionen und deiner natürlichen Intuition. Seine Zyklen erinnern dich an den ewigen Wandel.',
  },
  merkur: {
    id: 'merkur',
    name: 'Merkur',
    symbol: '☿',
    energie: 'Kommunikation, Verstand und Wandelbarkeit',
    beschreibung:
      'Merkur ist der Bote der Götter und verleiht dir geistige Beweglichkeit. Er schärft deinen Verstand und deine Ausdrucksfähigkeit. Unter seinem Einfluss fließen Ideen und Worte leicht.',
  },
  venus: {
    id: 'venus',
    name: 'Venus',
    symbol: '♀',
    energie: 'Liebe, Schönheit und Harmonie',
    beschreibung:
      'Venus regiert die Liebe in all ihren Formen und dein Gespür für Schönheit. Sie lehrt dich, Harmonie in Beziehungen und in der Welt um dich herum zu erschaffen. Ihre Energie ist anziehend und verbindend.',
  },
  mars: {
    id: 'mars',
    name: 'Mars',
    symbol: '♂',
    energie: 'Willenskraft, Energie und Durchsetzung',
    beschreibung:
      'Mars verleiht dir Tatendrang und die Kraft, deine Ziele zu verfolgen. Er ist die treibende Energie, die dich vorwärtsbringt. Unter seinem Einfluss wächst dein Mut und deine Entschlossenheit.',
  },
  jupiter: {
    id: 'jupiter',
    name: 'Jupiter',
    symbol: '♃',
    energie: 'Expansion, Glück und Weisheit',
    beschreibung:
      'Jupiter ist der Planet des Wachstums und der Fülle. Er öffnet Türen und bringt Glück und Weisheit in dein Leben. Seine Energie lädt dich ein, groß zu denken und über dich hinauszuwachsen.',
  },
  saturn: {
    id: 'saturn',
    name: 'Saturn',
    symbol: '♄',
    energie: 'Struktur, Disziplin und Reife',
    beschreibung:
      'Saturn ist der strenge Lehrmeister, der durch Herausforderungen Reife schenkt. Er gibt dir Struktur, Ausdauer und die Fähigkeit, langfristige Ziele zu erreichen. Seine Lektionen sind hart, aber wertvoll.',
  },
  uranus: {
    id: 'uranus',
    name: 'Uranus',
    symbol: '♅',
    energie: 'Freiheit, Innovation und Umbruch',
    beschreibung:
      'Uranus bringt plötzliche Veränderungen und bahnbrechende Erkenntnisse. Er befreit dich von alten Mustern und öffnet den Weg für Innovation. Unter seinem Einfluss brichst du aus Konventionen aus.',
  },
  neptun: {
    id: 'neptun',
    name: 'Neptun',
    symbol: '♆',
    energie: 'Traum, Spiritualität und Auflösung',
    beschreibung:
      'Neptun löst die Grenzen zwischen Realität und Traum auf. Er vertieft deine Spiritualität und deine Verbindung zum Göttlichen. Seine Energie ist sanft, mysteriös und unendlich tief.',
  },
  pluto: {
    id: 'pluto',
    name: 'Pluto',
    symbol: '♇',
    energie: 'Transformation, Macht und Erneuerung',
    beschreibung:
      'Pluto ist die Kraft der tiefgreifenden Transformation. Er zerstört, was nicht mehr dient, und erschafft Raum für fundamentale Erneuerung. Seine Energie ist intensiv und unaufhaltsam.',
  },
};

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

/**
 * Get a planet by its key.
 * Throws if the key is not found.
 */
export function getPlanet(id: string): PlanetInfo {
  const planet = planeten[id];
  if (!planet) {
    throw new Error(`Planet with id "${id}" not found`);
  }
  return planet;
}
