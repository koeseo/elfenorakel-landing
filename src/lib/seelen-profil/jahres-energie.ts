/**
 * Yearly Energy Content Data
 *
 * 22 entries (one per Major Arcana, 0-21) describing the personal year energy.
 * The user's birth date + current year determines which Major Arcana governs their year.
 *
 * NOTE: Content fields contain SHORT PLACEHOLDERS.
 * Full AI-generated content will be added in Task 5.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface JahresEnergieContent {
  /** Major Arcana number 0-21 */
  arcanaId: number;
  /** Display title e.g. "Die Energie der Freien Seele" */
  titel: string;
  /** ~150 words about this year's energy (placeholder) */
  beschreibung: string;
  /** 3 concrete impulses / action items */
  impulse: string[];
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const jahresEnergieContent: JahresEnergieContent[] = [
  {
    arcanaId: 0,
    titel: 'Die Energie der Freien Seele',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Narren -- ein Jahr des Neubeginns und der grenzenlosen Moeglichkeiten. Das Universum laedt dich ein, Altes hinter dir zu lassen und mutig ins Unbekannte zu springen.',
    impulse: [
      'Wage den Sprung ins Unbekannte',
      'Vertraue deiner Intuition',
      'Lass los was dich haelt',
    ],
  },
  {
    arcanaId: 1,
    titel: 'Die Energie des Schoepfers',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Magiers -- ein Jahr der Manifestation und Schoepferkraft. Alle Werkzeuge liegen vor dir. Es ist an der Zeit, deine Visionen in die Realitaet zu bringen.',
    impulse: [
      'Setze deine Talente bewusst ein',
      'Manifestiere ein konkretes Ziel',
      'Kommuniziere deine Vision klar',
    ],
  },
  {
    arcanaId: 2,
    titel: 'Die Energie der Seherin',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen der Hohepriesterin -- ein Jahr der Intuition und inneren Weisheit. Hoere auf die leise Stimme in dir. Die Antworten kommen aus der Stille.',
    impulse: [
      'Vertiefe deine Meditationspraxis',
      'Fuehre ein Traumtagebuch',
      'Vertraue deiner inneren Stimme',
    ],
  },
  {
    arcanaId: 3,
    titel: 'Die Energie der Naehrenden',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen der Herrscherin -- ein Jahr der Fuelle und Kreativitaet. Die Natur blueht in dir und um dich herum. Erlaube dir, zu empfangen und zu geniessen.',
    impulse: [
      'Pflege deine kreativen Projekte',
      'Goenme dir Fuelle und Genuss',
      'Naehre deine wichtigsten Beziehungen',
    ],
  },
  {
    arcanaId: 4,
    titel: 'Die Energie des Souverains',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Herrschers -- ein Jahr der Struktur und Stabilitaet. Es ist Zeit, Ordnung zu schaffen und deine Welt bewusst zu gestalten.',
    impulse: [
      'Schaffe klare Strukturen in deinem Alltag',
      'Uebernimm Verantwortung fuer deine Ziele',
      'Setze gesunde Grenzen',
    ],
  },
  {
    arcanaId: 5,
    titel: 'Die Energie des Weisen',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Hierophanten -- ein Jahr des Lernens und der spirituellen Vertiefung. Suche dir einen Mentor oder werde selbst zum Lehrer.',
    impulse: [
      'Lerne etwas Neues von einem Meister',
      'Teile dein Wissen mit anderen',
      'Verbinde Tradition mit eigener Erkenntnis',
    ],
  },
  {
    arcanaId: 6,
    titel: 'Die Energie der Verbundenen',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen der Liebenden -- ein Jahr der Beziehungen und Entscheidungen. Die Liebe in all ihren Formen ruft dich. Triff bewusste Herzensentscheidungen.',
    impulse: [
      'Oeffne dein Herz fuer tiefe Verbindung',
      'Triff eine wichtige Herzensentscheidung',
      'Versohne Gegensaetze in dir',
    ],
  },
  {
    arcanaId: 7,
    titel: 'Die Energie der Siegerin',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Wagens -- ein Jahr des Triumphs und Fortschritts. Dein Wille ist dein Antrieb. Greife die Zuegel und fahre entschlossen vorwaerts.',
    impulse: [
      'Setze dir ein ambitioeses Ziel',
      'Uebrwinde ein grosses Hindernis',
      'Feiere deinen Fortschritt',
    ],
  },
  {
    arcanaId: 8,
    titel: 'Die Energie der Unbezwingbaren',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen der Kraft -- ein Jahr der inneren Staerke und sanften Macht. Nicht Kontrolle, sondern liebevolle Meisterung ist dein Weg.',
    impulse: [
      'Begegne einer Angst mit Sanftmut',
      'Staerke deine innere Widerstandskraft',
      'Zeige Verletzlichkeit als Staerke',
    ],
  },
  {
    arcanaId: 9,
    titel: 'Die Energie der Suchenden',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Eremiten -- ein Jahr der Innenschau und Selbstfindung. Ziehe dich zurueck, hoere in die Stille und finde dein inneres Licht.',
    impulse: [
      'Nimm dir Zeit fuer Alleinsein',
      'Stelle dir die grossen Lebensfragen',
      'Suche Weisheit in der Stille',
    ],
  },
  {
    arcanaId: 10,
    titel: 'Die Energie der Schicksalsweberin',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Schicksalsrads -- ein Jahr des Wandels und der grossen Wendepunkte. Das Rad dreht sich und bringt neue Chancen. Vertraue dem Fluss.',
    impulse: [
      'Begrüsse Veraenderungen als Chancen',
      'Erkenne die Zyklen in deinem Leben',
      'Nutze den Schwung des Wandels',
    ],
  },
  {
    arcanaId: 11,
    titel: 'Die Energie der Gerechten',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen der Gerechtigkeit -- ein Jahr der Wahrheit und des Ausgleichs. Karma findet seinen Weg. Lebe in Integritaet und finde deine Balance.',
    impulse: [
      'Bringe eine Ungerechtigkeit ins Reine',
      'Triff Entscheidungen mit klarem Kopf',
      'Finde Balance zwischen Geben und Nehmen',
    ],
  },
  {
    arcanaId: 12,
    titel: 'Die Energie der Wandlerin',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Gehaengten -- ein Jahr der Hingabe und neuen Perspektiven. Lass los und betrachte die Welt auf den Kopf gestellt. Im Surrender liegt die Freiheit.',
    impulse: [
      'Lass eine festgefahrene Ueberzeugung los',
      'Betrachte ein Problem aus neuer Perspektive',
      'Uebe dich in Geduld und Hingabe',
    ],
  },
  {
    arcanaId: 13,
    titel: 'Die Energie der Transformatorin',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Todes -- ein Jahr der tiefgreifenden Transformation. Altes muss sterben, damit Neues geboren werden kann. Umarme den Wandel.',
    impulse: [
      'Beende etwas, das nicht mehr dient',
      'Reinige und entruemple dein Leben',
      'Begrüsse den Neuanfang nach dem Abschied',
    ],
  },
  {
    arcanaId: 14,
    titel: 'Die Energie der Alchemistin',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen der Maessigung -- ein Jahr der Balance und Integration. Finde den goldenen Mittelweg und verwandle Gegensaetze in Harmonie.',
    impulse: [
      'Bringe zwei Lebensbereiche in Balance',
      'Uebe Geduld bei wichtigen Prozessen',
      'Mische Altes und Neues zu etwas Einzigartigem',
    ],
  },
  {
    arcanaId: 15,
    titel: 'Die Energie der Befreierin',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Teufels -- ein Jahr der Befreiung und Schattenarbeit. Schau deinen Fesseln ins Auge und sprenge sie. Wahre Freiheit liegt jenseits der Angst.',
    impulse: [
      'Erkenne eine Abhaengigkeit und loese dich',
      'Stelle dich deinem groessten Schatten',
      'Finde Freiheit in radikaler Ehrlichkeit',
    ],
  },
  {
    arcanaId: 16,
    titel: 'Die Energie der Erwachenden',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Turms -- ein Jahr des Umbruchs und der Erneuerung. Falsche Strukturen fallen. Was danach bleibt, ist authentisch und unzerstoerbar.',
    impulse: [
      'Lass eine falsche Sicherheit los',
      'Baue auf den Truemmern etwas Echtes',
      'Vertraue dem Prozess der Zerstoerung und Erneuerung',
    ],
  },
  {
    arcanaId: 17,
    titel: 'Die Energie der Hoffnungstraegerin',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Sterns -- ein Jahr der Hoffnung und Inspiration. Nach dem Sturm kommt der Stern. Lass dein Licht scheinen und heile, was geheilt werden muss.',
    impulse: [
      'Erlaube dir zu traeumen und zu hoffen',
      'Teile dein Licht mit der Welt',
      'Heile eine alte Wunde',
    ],
  },
  {
    arcanaId: 18,
    titel: 'Die Energie der Traumwandlerin',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Mondes -- ein Jahr der Intuition und der Schattenreise. Tauche in dein Unbewusstes ein und finde Schaetze im Dunkeln.',
    impulse: [
      'Achte auf deine Traeume und Visionen',
      'Unterscheide zwischen Angst und Intuition',
      'Erkunde dein Unbewusstes mit Mut',
    ],
  },
  {
    arcanaId: 19,
    titel: 'Die Energie der Strahlenden',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen der Sonne -- ein Jahr der Freude und des Erfolgs. Das Licht scheint auf dich. Geniesse die Waerme und teile deine Freude grosszuegig.',
    impulse: [
      'Feiere dich selbst und deine Erfolge',
      'Teile deine Freude mit anderen',
      'Lebe deine Vitalitaet voll aus',
    ],
  },
  {
    arcanaId: 20,
    titel: 'Die Energie der Berufenen',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Gerichts -- ein Jahr der Berufung und Erweckung. Der Ruf deiner Seele wird lauter. Hoere hin und folge deiner hoeheren Bestimmung.',
    impulse: [
      'Hoere auf den Ruf deiner Seele',
      'Vergib dir und anderen',
      'Erwecke ein schlummerndes Talent',
    ],
  },
  {
    arcanaId: 21,
    titel: 'Die Energie der Vollendeten',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen der Welt -- ein Jahr der Vollendung und Integration. Ein grosser Zyklus schliesst sich. Tanze im Zentrum deines Universums und feiere alles, was du geworden bist.',
    impulse: [
      'Bringe ein grosses Projekt zum Abschluss',
      'Integriere alle Erfahrungen zu einem Ganzen',
      'Feiere deine Reise und bereite den neuen Zyklus vor',
    ],
  },
];

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

/**
 * Get yearly energy content by Major Arcana ID (0-21). Throws if not found.
 */
export function getJahresEnergie(arcanaId: number): JahresEnergieContent {
  const content = jahresEnergieContent.find((c) => c.arcanaId === arcanaId);
  if (!content) {
    throw new Error(`Yearly energy content for arcanaId ${arcanaId} not found`);
  }
  return content;
}
