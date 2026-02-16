/**
 * Cosmic Task Content (Kosmische Aufgabe)
 *
 * Rich template system that combines archetype + dominant element into a unique
 * cosmic task description. Uses element-specific story templates with deep
 * keyword interpolation to produce ~300 words of personal, revelatory content.
 *
 * Custom overrides can be stored in OVERRIDES map for when Elfi writes
 * personalised texts for specific combinations.
 *
 * Each generated text follows a 3-paragraph arc:
 *   1. Cosmic context: "Deine Seele hat sich diese Aufgabe gewählt..."
 *   2. Practical manifestation: "In deinem Alltag zeigt sich das..."
 *   3. Guidance and encouragement: "Dein Weg..."
 */

import { archetypen } from './archetypen';
import { elemente } from './elemente';
import type { Element } from './tarot-karten';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface KosmischeAufgabeContent {
  /** Key format: "{archetypId}_{element}" e.g. "0_feuer" */
  key: string;
  /** Display title */
  titel: string;
  /** ~300 words about the cosmic task, structured in 3 paragraphs */
  beschreibung: string;
  /** ~80 words — a brief meditation to connect with one's cosmic task */
  meditation: string;
}

// ---------------------------------------------------------------------------
// Element Keywords (expanded for rich template generation)
// ---------------------------------------------------------------------------

interface ElementKeywords {
  kraft: string;
  weg: string;
  qualität: string;
  essenz: string;
  natur: string;
  /** A vivid metaphor for this element's soul energy (~30 words) */
  seelenbild: string;
  /** What this element calls you to do in life (~50 words) */
  lebensaufgabe: string;
  /** What happens when you ignore this element's call (~30 words) */
  warnung: string;
  /** The unique gift you bring to the world (~30 words) */
  geschenk: string;
  /** A brief practice to connect with your cosmic task (~50 words) */
  meditationPraxis: string;
}

const ELEMENT_KEYWORDS: Record<Element, ElementKeywords> = {
  feuer: {
    kraft: 'Leidenschaft und Tatkraft',
    weg: 'mutig und entschlossen',
    qualität: 'feurige Entschlossenheit',
    essenz: 'die Flamme, die in deinem Herzen brennt und dich antreibt, deine Visionen in die Tat umzusetzen',
    natur: 'Wie ein Feuer, das Licht und Wärme spendet, bist du hier, um andere mit deiner Begeisterung zu entfachen',
    seelenbild:
      'Deine Seele gleicht einer Flamme, die sich aus der Dunkelheit erhebt — nicht um zu zerstören, sondern um den Weg zu erleuchten, den andere noch nicht sehen können.',
    lebensaufgabe:
      'Das Feuer ruft dich, voranzugehen, wo andere zögern. Deine Aufgabe ist es, den ersten Schritt zu wagen, Wege zu öffnen und mit deiner Entschlossenheit zu zeigen, dass Wandel keine Bedrohung ist, sondern eine Einladung zum Wachstum.',
    warnung:
      'Wenn du diese innere Flamme unterdrückst, wendest du ihre Hitze gegen dich selbst. Frustration, Rastlosigkeit und ein dumpfes Gefühl der Sinnlosigkeit sind die Signale, dass dein Feuer erstickt.',
    geschenk:
      'Du schenkst der Welt den Mut, den sie vergessen hat. Deine Präsenz allein erinnert andere daran, dass das Leben kein Zuschauersport ist — es will gelebt, gewagt und gefühlt werden.',
    meditationPraxis:
      'Entzünde eine Kerze und blicke in die Flamme. Atme tief ein und spüre, wie dein inneres Feuer mit der äußeren Flamme in Resonanz geht. Flüstere leise: „Ich erlaube mir, zu brennen." Lass alle Zurückhaltung in der Wärme schmelzen und fühle deine kosmische Bestimmung als Glut in deiner Brust.',
  },
  wasser: {
    kraft: 'Empathie und Intuition',
    weg: 'einfühlsam und fließend',
    qualität: 'emotionale Tiefe',
    essenz: 'der stille Strom, der durch die Tiefen deiner Seele fließt und verborgene Wahrheiten an die Oberfläche trägt',
    natur: 'Wie Wasser, das sich seinen Weg durch jeden Fels bahnt, findest du sanfte Wege durch die härtesten Herausforderungen',
    seelenbild:
      'Deine Seele ist ein tiefer, stiller See, dessen Oberfläche die Sterne spiegelt — und dessen Grund Geheimnisse birgt, die nur du zu lesen vermagst.',
    lebensaufgabe:
      'Das Wasser ruft dich, die Sprache der Gefühle zu sprechen, die so viele verlernt haben. Deine Aufgabe ist es, Räume der Geborgenheit zu schaffen, in denen sich Herzen öffnen, Tränen fließen dürfen und echte Heilung geschehen kann.',
    warnung:
      'Wenn du deine emotionale Tiefe verleugnest und versuchst, nur rational zu funktionieren, staut sich dein inneres Wasser. Es wird zu einem Sumpf aus unterdrückten Gefühlen, der dich lähmt.',
    geschenk:
      'Du schenkst der Welt echte Empathie — nicht die oberflächliche Art, sondern jene, die den anderen wirklich sieht, mit allen Narben und allem Licht. In deiner Nähe fühlen sich Menschen zum ersten Mal wirklich verstanden.',
    meditationPraxis:
      'Setze dich an ein fließendes Gewässer oder stelle dir einen sanften Strom vor. Lege deine Hände auf dein Herz und atme im Rhythmus der Wellen. Sage leise: „Ich fließe mit meiner Wahrheit." Spüre, wie jede Ausatmung das fortträgt, was nicht mehr zu dir gehört, und jede Einatmung dich tiefer mit deiner Bestimmung verbindet.',
  },
  luft: {
    kraft: 'Klarheit und Kommunikation',
    weg: 'geistig und inspirierend',
    qualität: 'visionäre Weite',
    essenz: 'der frische Wind, der alte Gedanken davonträgt und Raum für neue Perspektiven und Erkenntnisse schafft',
    natur: 'Wie der Wind, der Samen über weite Strecken trägt, verbreitest du Ideen und Inspiration, wohin du auch gehst',
    seelenbild:
      'Deine Seele ist der Wind vor dem Morgengrauen — unsichtbar und doch allgegenwärtig, immer in Bewegung, voller Botschaften, die nur das stille Herz empfangen kann.',
    lebensaufgabe:
      'Die Luft ruft dich, Brücken des Verstehens zu bauen. Deine Aufgabe ist es, Worte zu finden für das, was andere nur spüren, Zusammenhänge sichtbar zu machen und mit deiner Klarheit Licht in die Verwirrung der Welt zu bringen.',
    warnung:
      'Wenn du deinen wachen Geist zum Schweigen bringst, verliert die Welt einen ihrer wichtigsten Übersetzer. Deine Gedanken werden zu kreisenden Stürmen ohne Ausgang, und die innere Unruhe frisst dich auf.',
    geschenk:
      'Du schenkst der Welt neue Perspektiven. Wo andere festgefahren sind, bringst du den frischen Wind, der alte Muster auflöst und Raum für das Unerwartete schafft. Deine Worte sind Samen, die in fremder Erde aufblühen.',
    meditationPraxis:
      'Gehe an einen Ort, an dem du den Wind auf deiner Haut spüren kannst — oder öffne ein Fenster und atme die frische Luft tief ein. Breite deine Arme aus und sage leise: „Ich bin offen für die Botschaften des Kosmos." Lass deine Gedanken wie Wolken vorüberziehen und lausche auf die eine Erkenntnis, die unter dem Lärm wartet.',
  },
  erde: {
    kraft: 'Beständigkeit und Manifestation',
    weg: 'geerdet und beständig',
    qualität: 'praktische Weisheit',
    essenz: 'der fruchtbare Boden, in dem deine tiefsten Visionen Wurzeln schlagen und zu greifbarer Wirklichkeit heranwachsen',
    natur: 'Wie die Erde, die geduldig nährt und trägt, bist du der feste Grund, auf dem andere sicher stehen können',
    seelenbild:
      'Deine Seele ist ein uralter Wald — still, geduldig und unerschütterlich. In deinen Wurzeln ruht die Weisheit von Generationen, und in deinen Ästen wächst die Zukunft.',
    lebensaufgabe:
      'Die Erde ruft dich, Träume in die Wirklichkeit zu bringen. Deine Aufgabe ist es, das Fundament zu legen, auf dem andere sicher stehen können, Visionen in greifbare Formen zu gießen und der Welt zu zeigen, dass wahre Magie in der geduldigen Verwirklichung liegt.',
    warnung:
      'Wenn du dich weigerst, deinem Ruf zur Manifestation zu folgen, wirst du innerlich starr. Die Sicherheit, die du suchst, wird zum Gefängnis, und du verwechselst Beständigkeit mit Stillstand.',
    geschenk:
      'Du schenkst der Welt Beständigkeit in einer Zeit der Flüchtigkeit. Deine ruhige Kraft gibt anderen Halt und zeigt ihnen, dass man nicht laut sein muss, um etwas Bleibendes zu erschaffen.',
    meditationPraxis:
      'Stelle dich barfuß auf die Erde — auf Gras, Sand oder Waldboden. Schließe die Augen und spüre, wie deine Füße Wurzeln bilden, die tief in den Boden sinken. Sage leise: „Ich bin getragen." Fühle die Kraft der Erde durch deinen Körper aufsteigen und wisse, dass deine kosmische Aufgabe in dir bereits verwurzelt ist — sie wartet nur darauf, in die Höhe zu wachsen.',
  },
};

// ---------------------------------------------------------------------------
// Element-specific story templates
// ---------------------------------------------------------------------------

/**
 * Each element has its own story template with 3 paragraphs.
 * Placeholders: {name}, {karteName}, {claim}, {elementName},
 * {kraft}, {weg}, {qualität}, {essenz}, {natur},
 * {seelenbild}, {lebensaufgabe}, {warnung}, {geschenk}
 */
const ELEMENT_TEMPLATES: Record<Element, string> = {
  feuer:
    `{seelenbild} Noch bevor du deinen ersten Atemzug in dieser Inkarnation getan hast, hat deine Seele ` +
    `sich entschieden: Du willst nicht beobachten. Du willst entfachen. Als {name} trägst du den ` +
    `Archetyp der Karte „{karteName}" in dir — {claim} Doch was diesen kosmischen Auftrag wirklich ` +
    `einzigartig macht, ist das Feuer, das dich durchströmt. Es ist {essenz}. Deine Seele hat sich ` +
    `das Element gewählt, das keine halben Sachen kennt. Das Feuer in dir ist kein Zufall — es ist ` +
    `eine kosmische Entscheidung, die sagt: Diese Seele ist bereit, zu brennen, um zu erleuchten.\n\n` +

    `In deinem Alltag zeigt sich das in Momenten, die andere kaum bemerken: in der Hitze, mit der du ` +
    `für eine Idee einstehst. In dem Funken, der in deinen Augen aufblitzt, wenn du eine Ungerechtigkeit ` +
    `spürst. In der Wärme, die du in einen Raum bringst, ohne ein Wort zu sagen. {natur}. Deine ` +
    `besondere Qualität — {qualität} — verbindet sich mit der Kraft von {kraft} zu etwas, das die ` +
    `Welt dringend braucht. {lebensaufgabe} Doch eines sollst du wissen: {warnung}\n\n` +

    `Dein Weg als {name} mit Feuerkraft ist {weg} — und genau das soll er sein. Du bist nicht hier, ` +
    `um zu gefallen oder leise zu sein. {geschenk} Trage deine Flamme mit Stolz, denn sie ist das ` +
    `Werkzeug deiner kosmischen Aufgabe. Jedes Mal, wenn du dich traust, ganz in deiner Kraft zu stehen, ` +
    `erfüllst du den Auftrag, den deine Seele vor langer Zeit gewählt hat. Das Universum hat dich nicht ` +
    `mit diesem Feuer ausgestattet, damit du es unter einem Eimer versteckst — es hat dich geschickt, ` +
    `um zu leuchten. Und ich, Elfi, sage dir: Du bist bereit. Du warst es schon immer.`,

  wasser:
    `{seelenbild} Lange bevor du in dieses Leben gekommen bist, hat deine Seele eine stille Vereinbarung ` +
    `mit dem Kosmos getroffen: Du willst nicht an der Oberfläche bleiben. Du willst die Tiefe kennen. ` +
    `Als {name} trägst du den Archetyp der Karte „{karteName}" in dir — {claim} Und was diesen Auftrag ` +
    `so besonders macht, ist das Wasser, das durch jede Faser deines Wesens fließt. Es ist {essenz}. ` +
    `Deine Seele hat sich das Element gewählt, das im Verborgenen wirkt, das Steine glättet, ohne sie ` +
    `zu zerbrechen, und Wüsten zum Blühen bringt, ohne es an die große Glocke zu hängen. Diese leise ` +
    `Macht ist kein Zeichen von Schwäche — sie ist die stärkste Kraft im Universum.\n\n` +

    `In deinem Alltag zeigt sich das oft subtiler, als du denkst: in dem Moment, in dem du spürst, ` +
    `dass jemand lügt, bevor ein Wort gefallen ist. In der Art, wie du einen Raum betrittst und die ` +
    `Stimmung liest wie ein offenes Buch. In den Tränen, die du weinst — nicht aus Schwäche, sondern ` +
    `weil du die Welt tiefer fühlst als die meisten. {natur}. Deine {qualität} verbindet sich mit ` +
    `{kraft} zu einer Gabe, die in dieser oft so abgestumpften Welt unbezahlbar ist. {lebensaufgabe} ` +
    `Doch höre auch diese Warnung: {warnung}\n\n` +

    `Dein Weg als {name} mit Wasserkraft ist {weg}, und genau darin liegt deine Magie. Du musst ` +
    `nicht laut sein, um gehört zu werden. Du musst nicht kämpfen, um zu gewinnen. Dein Wasser findet ` +
    `immer einen Weg — um das Hindernis herum, durch den schmalsten Spalt hindurch, in die tiefsten ` +
    `Ritzen des Herzens hinein. {geschenk} Vertraue deinem Fluss, denn er kennt den Weg, auch wenn ` +
    `dein Verstand ihn noch nicht sieht. Deine Seele hat diesen Weg gewählt, weil sie weiß: Die Welt ` +
    `braucht keine weiteren Krieger — sie braucht Heilerinnen, die den Mut haben, in die Tiefe zu ` +
    `tauchen. Und ich, Elfi, sage dir: Deine Tiefe ist dein Schatz. Hab keine Angst vor ihr.`,

  luft:
    `{seelenbild} Bevor du in dieses Leben getreten bist, hat deine Seele dem Kosmos ein Versprechen ` +
    `gegeben: Du wirst die Botschafterin sein. Du wirst Worte finden, wo Schweigen herrscht, und ` +
    `Verbindungen sehen, wo andere nur Chaos erkennen. Als {name} trägst du den Archetyp der Karte ` +
    `„{karteName}" in dir — {claim} Doch was deinen kosmischen Auftrag so unverwechselbar macht, ist ` +
    `die Luft, die dich durchweht. Sie ist {essenz}. Deine Seele hat sich das Element des Geistes ` +
    `gewählt, jene unsichtbare Kraft, die alles verbindet und alles durchdringt. Ohne Luft kein Klang, ` +
    `kein Wort, kein Gedanke — und ohne dich fehlt der Welt eine Stimme, die sie dringend braucht.\n\n` +

    `In deinem Alltag zeigt sich das in Momenten purer Klarheit: wenn dir mitten im Gespräch ein ` +
    `Gedanke kommt, der alles verändert. Wenn du einen Text liest und zwischen den Zeilen eine ` +
    `Wahrheit findest, die der Autor selbst nicht kannte. Wenn du jemanden tröstest, indem du genau ` +
    `das sagst, was er hören muss — nicht was er hören will. {natur}. Deine {qualität} verbindet ` +
    `sich mit {kraft} zu einer Gabe, die Mauern einreißen und Horizonte öffnen kann. {lebensaufgabe} ` +
    `Doch vergiss nicht: {warnung}\n\n` +

    `Dein Weg als {name} mit Luftkraft ist {weg}, und das ist keine Schwäche, sondern kosmische ` +
    `Präzision. Dein Geist ist dein Instrument, deine Worte sind dein Werkzeug, und deine Klarheit ` +
    `ist dein Geschenk an eine Welt, die sich so oft im Nebel verirrt. {geschenk} Lass dich nicht ` +
    `einreden, du dächtest zu viel — du denkst genau richtig. Deine Seele hat diesen Weg gewählt, ` +
    `weil die Welt Übersetzerinnen braucht: Menschen, die das Unsichtbare in Worte fassen und das ` +
    `Unaussprechliche sagbar machen. Und ich, Elfi, sage dir: Deine Gedanken sind keine Last. ` +
    `Sie sind Flügel. Breite sie aus.`,

  erde:
    `{seelenbild} Noch bevor du dieses Leben betreten hast, hat deine Seele eine Vereinbarung mit ` +
    `der Erde selbst getroffen: Du wirst die Verwirklicherin sein. Du wirst Träume nicht nur ` +
    `träumen, sondern sie pflanzen, gießen und wachsen lassen, bis sie Früchte tragen. Als {name} ` +
    `trägst du den Archetyp der Karte „{karteName}" in dir — {claim} Und was deinen kosmischen ` +
    `Auftrag so kraftvoll macht, ist die Erde, die dich durchströmt. Sie ist {essenz}. Deine Seele ` +
    `hat sich das Element der Manifestation gewählt, jene geduldige, unerschütterliche Kraft, die ` +
    `aus einem winzigen Samen einen mächtigen Baum werden lässt. Diese stille Beharrlichkeit ist ` +
    `keine Langsamkeit — sie ist die Weisheit der Natur selbst.\n\n` +

    `In deinem Alltag zeigt sich das in einer Qualität, die andere oft erst spät erkennen: in deiner ` +
    `Fähigkeit, dranzubleiben, wenn alle anderen längst aufgegeben haben. In der Ruhe, die du ` +
    `ausstrahlst, wenn um dich herum alles im Chaos versinkt. In der Art, wie du mit deinen Händen ` +
    `etwas erschaffst — sei es ein Garten, ein Zuhause, ein Unternehmen oder eine Beziehung, die ` +
    `Jahrzehnte überdauert. {natur}. Deine {qualität} verbindet sich mit {kraft} zu einer Gabe, ` +
    `die in unserer schnelllebigen Welt fast vergessen wurde. {lebensaufgabe} Doch höre auch diese ` +
    `Warnung: {warnung}\n\n` +

    `Dein Weg als {name} mit Erdkraft ist {weg}, und genau darin liegt deine unvergleichliche ` +
    `Stärke. Du brauchst keine Bühne und kein Rampenlicht — deine Werke sprechen für sich, still ` +
    `und beständig wie die Berge. {geschenk} Vertraue deinem Tempo, auch wenn die Welt dir sagt, ` +
    `du sollst schneller sein. Deine Seele hat diesen Weg gewählt, weil sie weiß: Die schönsten ` +
    `Dinge im Leben brauchen Zeit, Geduld und liebevolle Hingabe. Und ich, Elfi, sage dir: Du bist ` +
    `der Boden, in dem das Wunder wächst. Alles, was du berührst, wird real. Vertraue deinen Händen ` +
    `und deinem Herzen — sie kennen den Weg.`,
};

// ---------------------------------------------------------------------------
// Meditation templates per element
// ---------------------------------------------------------------------------

const MEDITATION_TEMPLATES: Record<Element, string> = {
  feuer:
    `{meditationPraxis} In dieser Stille wirst du hören, was dein Feuer dir sagen will. Es ist ` +
    `die Stimme deiner kosmischen Aufgabe, die sagt: Geh voran. Die Welt wartet auf dein Licht.`,
  wasser:
    `{meditationPraxis} In dieser Stille wirst du spüren, was dein Wasser dir zeigen will. Es ` +
    `ist die Stimme deiner kosmischen Aufgabe, die flüstert: Fließe. Die Tiefe ist dein Zuhause.`,
  luft:
    `{meditationPraxis} In dieser Stille wirst du erkennen, was deine Luft dir sagen will. Es ` +
    `ist die Stimme deiner kosmischen Aufgabe, die ruft: Sprich. Die Welt braucht deine Worte.`,
  erde:
    `{meditationPraxis} In dieser Stille wirst du fühlen, was deine Erde dir sagen will. Es ` +
    `ist die Stimme deiner kosmischen Aufgabe, die sagt: Baue. Dein Fundament trägt mehr, als du ahnst.`,
};

// ---------------------------------------------------------------------------
// Custom Overrides
// ---------------------------------------------------------------------------

/**
 * Hand-written overrides for specific archetype+element combinations.
 * When Elfi writes custom texts, add them here. The key format is
 * "{archetypId}_{element}" (e.g. "0_feuer").
 *
 * If a key exists here, it will be used instead of the template.
 */
const OVERRIDES: Record<string, Omit<KosmischeAufgabeContent, 'key'>> = {
  // Example override (uncomment and customise when ready):
  // '0_feuer': {
  //   titel: 'Die feurige Freie Seele: Dein kosmischer Auftrag',
  //   beschreibung: 'Custom text by Elfi...',
  //   meditation: 'Custom meditation by Elfi...',
  // },
};

// ---------------------------------------------------------------------------
// Template Interpolation Helper
// ---------------------------------------------------------------------------

/**
 * Replace all {placeholder} tokens in a template string with values from a map.
 * Supports Unicode word characters (including German umlauts like ä, ö, ü).
 */
function interpolate(template: string, values: Record<string, string>): string {
  return template.replace(/\{([\w\u00C0-\u024F]+)\}/g, (match, key: string) => {
    return values[key] ?? match;
  });
}

// ---------------------------------------------------------------------------
// Template Builder
// ---------------------------------------------------------------------------

/**
 * Build a cosmic task from archetype + element using the rich template system.
 */
function buildFromTemplate(archetypId: number, element: Element): KosmischeAufgabeContent {
  const archetyp = archetypen.find((a) => a.id === archetypId);
  const elementInfo = elemente[element];
  const keywords = ELEMENT_KEYWORDS[element];

  if (!archetyp) {
    throw new Error(`Archetyp with id ${archetypId} not found`);
  }

  const key = `${archetypId}_${element}`;

  const titel = `${archetyp.name} mit ${elementInfo.name}-Kraft: Deine kosmische Aufgabe`;

  // Build the interpolation values from archetype + element keywords
  const values: Record<string, string> = {
    name: archetyp.name,
    karteName: archetyp.karteName,
    claim: archetyp.claim,
    elementName: elementInfo.name,
    kraft: keywords.kraft,
    weg: keywords.weg,
    qualität: keywords.qualität,
    essenz: keywords.essenz,
    natur: keywords.natur,
    seelenbild: keywords.seelenbild,
    lebensaufgabe: keywords.lebensaufgabe,
    warnung: keywords.warnung,
    geschenk: keywords.geschenk,
    meditationPraxis: keywords.meditationPraxis,
  };

  const beschreibung = interpolate(ELEMENT_TEMPLATES[element], values);
  const meditation = interpolate(MEDITATION_TEMPLATES[element], values);

  return { key, titel, beschreibung, meditation };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Get the cosmic task content for a given archetype + element combination.
 *
 * Checks for a hand-written override first; falls back to the template system.
 *
 * @param archetypId - Major Arcana number 0-21
 * @param element - Dominant element key
 */
export function getKosmischeAufgabe(
  archetypId: number,
  element: string,
): KosmischeAufgabeContent {
  const key = `${archetypId}_${element}`;

  // Check for custom override
  const override = OVERRIDES[key];
  if (override) {
    return { key, ...override };
  }

  // Fall back to template
  return buildFromTemplate(archetypId, element as Element);
}
