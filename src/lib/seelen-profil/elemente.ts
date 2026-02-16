/**
 * Element Content Data
 *
 * Four classical elements with descriptions, colors, and combination texts.
 * Used in the Seelen-Profil to describe the user's elemental makeup.
 *
 * Each element has a ~250-word Beschreibung and ~120-word Kombination texts.
 */

import type { Element } from './tarot-karten';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ElementInfo {
  id: Element;
  name: string;
  /** Visual symbol / emoji */
  symbol: string;
  /** Hex color for charts and UI */
  farbe: string;
  /** ~250 words about this element when dominant */
  beschreibung: string;
  /** Secondary element key -> combined interpretation text */
  kombination: Record<string, string>;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const elemente: Record<Element, ElementInfo> = {
  feuer: {
    id: 'feuer',
    name: 'Feuer',
    symbol: '\u{1F525}',
    farbe: '#EF4444',
    beschreibung:
      'Wenn Feuer dein dominantes Element ist, brennt in dir eine leidenschaftliche Kraft, die alles in Bewegung setzt. Du bist eine geborene Macherin — eine Seele, die Visionen nicht nur träumt, sondern in Taten verwandelt. Deine Energie ist ansteckend, und überall, wo du auftauchst, spüren die Menschen um dich herum dieses innere Lodern, das sie mitreißt und inspiriert, mutig voranzugehen. ' +
      'Du trägst den Pioniergeist in dir. Wo andere zögern, gehst du voran. Du scheust dich nicht vor dem Unbekannten, denn du weißt: Wahre Transformation entsteht nur dort, wo wir den Mut haben, alte Strukturen hinter uns zu lassen und Neues zu erschaffen. Diese Fähigkeit zur radikalen Erneuerung ist deine größte Gabe. Du verbrennst das Alte, damit aus der Asche etwas Schöneres wachsen kann — wie der Phönix, der immer wieder neu aus den Flammen steigt. ' +
      'Deine Stärke liegt in deiner Entschlossenheit und deinem unbändigen Willen. Wenn du dir etwas vornimmst, verfolgst du es mit einer Intensität, die Berge versetzen kann. Du bist direkt, ehrlich und scheust keine Konfrontation, wenn es darum geht, für das einzustehen, was dir wichtig ist. ' +
      'Doch achte darauf, dass dein Feuer nicht alles verzehrt — auch dich selbst. Lerne, deine Flamme zu lenken, statt von ihr getrieben zu werden. In Momenten der Stille findest du die Glut, die nachhaltiger wärmt als jede lodernde Flamme. Dein Feuer ist ein heiliges Geschenk: Es wärmt, es erleuchtet, es transformiert. Nutze es weise, und du wirst nicht nur dein eigenes Leben, sondern auch das der Menschen um dich herum zum Leuchten bringen.',
    kombination: {
      wasser:
        'Feuer und Wasser in dir erzeugen Dampf — eine zutiefst transformative Kraft. Du verbindest lodernde Leidenschaft mit emotionaler Tiefe und findest deine größte Stärke im Spannungsfeld dieser Gegensätze. Wo andere in diesem inneren Widerspruch zerbrechen würden, schmiedest du daraus eine einzigartige Fähigkeit zur Wandlung. Du kannst gleichzeitig zutiefst fühlen und kraftvoll handeln. Deine Emotionen sind kein Hindernis für dein Handeln — sie sind der Treibstoff, der deine Taten mit Sinn und Seele erfüllt. Diese Kombination macht dich zu einer kraftvollen Heilerin und Wandlerin, die andere durch die tiefsten Gewässer und heißesten Feuer begleiten kann.',
      luft:
        'Feuer und Luft nähren einander in dir wie ein Lagerfeuer, das vom Wind entfacht wird. Dein scharfer, intellektueller Geist entfacht immer neue Flammen der Inspiration und trägt sie weit hinaus in die Welt. Du bist eine visionäre Denkerin mit unbändigem Tatendrang — du siehst nicht nur, was sein könnte, sondern du machst es auch möglich. Deine Gedanken sind wie Funken, die zu lodernden Ideen werden. Du kommunizierst mit einer Leidenschaft, die andere mitreißt und begeistert. Dein Geist ist frei und gleichzeitig brennend fokussiert — eine seltene und machtvolle Verbindung, die dich zur geborenen Anführerin und Innovatorin macht.',
      erde:
        'Feuer und Erde verbinden sich in dir zu vulkanischer Schöpferkraft. Deine Leidenschaft ist geerdet und manifestiert sich in konkreten, greifbaren Ergebnissen. Du baust mit Feuer im Herzen und Beständigkeit in den Händen — du bist keine Träumerin, sondern eine Verwirklicherin. Wo dein Feuer den Impuls gibt, sorgt deine Erde dafür, dass aus der Idee Substanz wird. Du verbindest Mut mit Geduld, Pioniergeist mit Ausdauer. Deine Projekte tragen die Wärme deiner Begeisterung und die Solidität gewachsener Wurzeln. Diese Kombination macht dich unglaublich wirkungsvoll — du entzündest nicht nur Visionen, du baust sie Stein für Stein in die Realität.',
    },
  },
  wasser: {
    id: 'wasser',
    name: 'Wasser',
    symbol: '\u{1F4A7}',
    farbe: '#3B82F6',
    beschreibung:
      'Wenn Wasser dein dominantes Element ist, fließt tiefe Empathie durch dein gesamtes Wesen wie ein unterirdischer Strom, der alles nährt, was er berührt. Du spürst die Gefühle anderer wie Wellen im Ozean — manchmal sanft, manchmal überwältigend, aber immer wahrhaftig. Deine Intuition ist dein stärkstes Werkzeug, ein innerer Kompass, der dich sicher durch jede Lebenslage führt, auch wenn der Verstand noch keine Antwort hat. ' +
      'Du bist eine zutiefst fühlende Seele mit einer emotionalen Weisheit, die weit über das Rationale hinausgeht. Du verstehst die verborgenen Strömungen unter der Oberfläche — in Menschen, in Situationen, in der Welt. Andere kommen zu dir, wenn sie Trost suchen, denn du hast die seltene Gabe, wirklich zuzuhören und einen Raum der Geborgenheit zu schaffen, in dem sich Herzen öffnen können. ' +
      'Wie das Wasser selbst bist du wandelbar und anpassungsfähig. Du findest deinen Weg um jedes Hindernis herum, nicht durch Kraft, sondern durch Beharrlichkeit und Geschmeidigkeit. Deine Stärke liegt nicht im Widerstand, sondern im Fließen — du lässt los, was nicht mehr dient, und findest immer wieder zurück zu deiner Mitte. ' +
      'Doch achte darauf, dass du in den Tiefen deiner Emotionen nicht verloren gehst. Deine Empfindsamkeit ist ein Geschenk, aber sie braucht Ufer, die ihr Halt geben. Lerne zu unterscheiden, welche Gefühle deine eigenen sind und welche du von anderen aufnimmst. Wenn du diese Grenze ehrst, wird dein Wasser zur heiligsten Quelle — klar, nährend und unerschöpflich tief.',
    kombination: {
      feuer:
        'Wasser und Feuer in dir erzeugen eine brodelnde, zutiefst lebendige Dynamik. Du kannst sowohl mit dem ganzen Herzen fühlen als auch leidenschaftlich und entschlossen handeln. Was andere als Widerspruch empfinden, ist in dir eine Quelle ungeahnter Kraft. Dein Wasser kühlt das Feuer nicht ab — es verwandelt es in heilenden Dampf, der Transformation ermöglicht. Du bist eine kraftvolle Heilerin und Wandlerin, die die Tiefe der Emotionen mit dem Mut zur Tat verbindet. Deine Empathie macht dein Handeln weise, und dein Feuer gibt deinem Mitgefühl die Kraft, wirklich etwas zu bewegen.',
      luft:
        'Wasser und Luft verbinden sich in dir zu sanften Winden über einem tiefen, weiten Ozean. Dein Gefühl wird von geistiger Klarheit getragen, dein Denken von Empathie genährt — eine wunderschöne Balance zwischen Kopf und Herz. Du besitzt die seltene Gabe, Emotionen in Worte zu fassen und innere Wahrheiten klar zu kommunizieren. Dein Verstand hilft dir, deine tiefen Gefühle zu verstehen, ohne sie zu rationalisieren. Und dein Wasser gibt deinen Gedanken Seele und Tiefe. Du bist eine natürliche Beraterin und Vermittlerin, die zwischen den Welten des Fühlens und des Denkens Brücken baut.',
      erde:
        'Wasser und Erde formen in dir fruchtbaren, lebendigen Boden, aus dem das Schönste wachsen kann. Du nährst andere mit deiner Fürsorge und bringst Emotionen in greifbare, beständige Formen. Dein Wasser gibt der Erde Leben, und die Erde gibt deinen Gefühlen ein sicheres Gefäß. Du bist zutiefst fürsorglich und gleichzeitig verlässlich — eine Seele, bei der andere sich gehalten und genährt fühlen. Deine emotionale Weisheit ist geerdet und praktisch. Du träumst nicht nur von einer besseren Welt — du pflanzt die Samen dafür mit deinen eigenen Händen, geduldig und voller Hingabe.',
    },
  },
  luft: {
    id: 'luft',
    name: 'Luft',
    symbol: '\u{1F4A8}',
    farbe: '#A78BFA',
    beschreibung:
      'Wenn Luft dein dominantes Element ist, bist du eine Meisterin der Gedanken, der Worte und der Kommunikation. Dein Geist ist frei wie der Wind und erfasst Zusammenhänge, die anderen verborgen bleiben. Du siehst das größere Bild, die unsichtbaren Verbindungen zwischen den Dingen, und du liebst es, diese Erkenntnisse mit anderen zu teilen. Dein Verstand ist dein schärfstes Werkzeug — schnell, klar und immer in Bewegung. ' +
      'Du bist eine geborene Kommunikatorin und Visionärin. Worte sind für dich mehr als Sprache — sie sind Brücken zwischen Welten, Schlüssel zu neuen Perspektiven, Samen für Veränderung. Du inspirierst andere durch deine Fähigkeit, komplexe Wahrheiten in verständliche Bilder zu übersetzen. In deiner Gegenwart fühlen sich Menschen geistig belebt und ermutigt, über ihre gewohnten Grenzen hinauszudenken. ' +
      'Freiheit ist für dich kein Luxus, sondern eine Lebensnotwendigkeit. Du brauchst Raum für deine Gedanken, für deine Ideen, für dein Wachstum. Einengung und starre Strukturen rauben dir den Atem. Du blühst auf, wenn du dich bewegen kannst — geistig und im Leben. Du bist neugierig, offen und immer bereit, eine neue Perspektive einzunehmen. ' +
      'Doch achte darauf, dass dein ruheloser Geist auch Momente der Stille findet. Nicht jeder Gedanke muss verfolgt, nicht jede Idee muss ausgesprochen werden. In der Stille zwischen den Worten liegt oft die tiefste Erkenntnis. Wenn du lernst, deinen Geist zur Ruhe kommen zu lassen, wird dein Wind nicht zum Sturm, sondern zum sanften Atem, der die Samen deiner schönsten Visionen an genau den richtigen Ort trägt.',
    kombination: {
      feuer:
        'Luft und Feuer entfachen in dir ein wahres Feuerwerk der Kreativität und des Tatendrangs. Dein scharfer Verstand beflügelt deine Leidenschaft und trägt deine Ideen weit hinaus in die Welt. Du denkst schnell, handelst mutig und kommunizierst mit einer Begeisterung, die andere sofort mitreißt. Dein Luftelement gibt dem Feuer Sauerstoff — deine Gedanken nähren deine Taten, und deine Taten beflügeln wiederum neue Gedanken. Du bist eine Innovatorin, eine Pionierin der Ideen, die nicht nur visionär denkt, sondern ihre Visionen mit Leidenschaft und Überzeugungskraft in die Welt bringt.',
      wasser:
        'Luft und Wasser verbinden in dir Denken und Fühlen zu einer tiefen, ganzheitlichen Weisheit. Du analysierst mit dem Verstand und verstehst mit dem Herzen — eine seltene Kombination, die dir eine außergewöhnliche Menschenkenntnis verleiht. Dein klarer Geist kann die Wellen deiner Emotionen lesen und deuten, ohne sich in ihnen zu verlieren. Gleichzeitig verleiht dein Wasser deinen Gedanken eine poetische Tiefe und emotionale Resonanz. Du findest Worte für das Unaussprechliche und Klarheit im Nebel der Gefühle. Diese Verbindung macht dich zu einer natürlichen Beraterin und Seelenbegleiterin.',
      erde:
        'Luft und Erde geben deinen Gedanken Substanz und deinen Visionen ein solides Fundament. Du bist eine praktische Denkerin, die abstrakte Ideen in die Realität bringt — nicht nur als Traum, sondern als konkreten Plan mit Struktur und Bodenhaftung. Dein Luftelement schenkt dir die Vision, dein Erdelement die Disziplin und Ausdauer, sie umzusetzen. Du verlierst dich nicht in luftigen Theorien, sondern formst aus deinen Erkenntnissen etwas Greifbares und Beständiges. Diese Kombination macht dich zur brillanten Strategin — du siehst, was möglich ist, und weißt genau, wie du es Schritt für Schritt verwirklichst.',
    },
  },
  erde: {
    id: 'erde',
    name: 'Erde',
    symbol: '\u{1F30D}',
    farbe: '#22C55E',
    beschreibung:
      'Wenn Erde dein dominantes Element ist, bist du der Fels in der Brandung — der sichere Hafen, zu dem andere zurückkehren, wenn die Stürme des Lebens toben. Du gibst Halt und Sicherheit, nicht durch große Worte, sondern durch deine bloße Anwesenheit und deine unerschütterliche Verlässlichkeit. Deine Stärke liegt in deiner Beständigkeit, deiner Geduld und deiner tiefen Fähigkeit, Träume in die Wirklichkeit zu bringen. ' +
      'Du bist eine Manifestiererin im wahrsten Sinne. Wo andere nur reden, handelst du. Wo andere aufgeben, bleibst du. Du verstehst, dass wahres Wachstum Zeit braucht — wie ein Baum, der seine Wurzeln tief in den Boden gräbt, bevor er in den Himmel wächst. Du hast diese Geduld, dieses Vertrauen in den natürlichen Rhythmus der Dinge. Nichts wird erzwungen, alles darf reifen. ' +
      'Deine Verbundenheit mit der Natur ist tief und nährend. Du spürst die Zyklen der Erde in deinem eigenen Körper, die Jahreszeiten in deiner Seele. Du weißt instinktiv, wann es Zeit ist zu säen und wann zu ernten, wann Ruhe angesagt ist und wann Aktivität. Diese natürliche Weisheit macht dich zu einer wunderbaren Begleiterin für alle, die den Boden unter den Füßen verloren haben. ' +
      'Doch achte darauf, dass deine Beständigkeit nicht zur Starre wird. Auch die Erde bewegt sich — langsam, aber stetig. Erlaube dir Veränderung, auch wenn sie unbequem ist. Deine tiefsten Wurzeln geben dir die Sicherheit, dich auch in unbekanntes Terrain vorzuwagen. Vertraue darauf: Du trägst deine Heimat in dir, überall, wo du hingehst. Du bist geerdet, genährt und unerschütterlich — ein lebendiger Beweis dafür, dass stille Kraft die mächtigste von allen ist.',
    kombination: {
      feuer:
        'Erde und Feuer verbinden sich in dir zu vulkanischer Schaffenskraft. Du baust mit Ausdauer und Leidenschaft und hinterlässt bleibende Spuren in dieser Welt. Dein Feuer gibt dir den Antrieb und die Begeisterung, während deine Erde dafür sorgt, dass nichts verpufft, sondern in solide Ergebnisse mündet. Du bist keine Strohfeuer-Natur — wenn du brennst, dann nachhaltig und mit Substanz. Deine Projekte haben Tiefe und Bestand, denn sie sind auf festem Grund gebaut und von echter Leidenschaft durchdrungen. Diese Kombination macht dich zur kraftvollen Baumeisterin deines Lebens.',
      wasser:
        'Erde und Wasser nähren in dir einen blühenden Garten der Seele, in dem das Zarteste und Schönste gedeihen kann. Du bist fürsorglich, geerdet und emotional weise — eine Seele, die anderen ein Gefühl von Heimat und Geborgenheit schenkt. Dein Wasser bringt Lebendigkeit und emotionale Tiefe in deine geerdete Natur, während deine Erde den Emotionen ein sicheres Bett gibt, in dem sie fließen können, ohne über die Ufer zu treten. Du nährst andere mit einer stillen, beständigen Fürsorge, die nicht aufdringlich ist, sondern einfach da — wie fruchtbare Erde nach einem sanften Regen.',
      luft:
        'Erde und Luft geben dir die außergewöhnliche Fähigkeit, große Visionen praktisch umzusetzen. Du denkst klar und handelst beständig — eine Kombination, die in dieser Welt selten und unglaublich wertvoll ist. Dein Luftelement hebt deinen Blick über den Horizont und zeigt dir Möglichkeiten, die andere nicht sehen. Dein Erdelement sorgt dafür, dass diese Visionen nicht nur Luftschlösser bleiben, sondern Fundament, Wände und Dach bekommen. Du bist die Strategin, die nicht nur plant, sondern umsetzt — geduldig, durchdacht und mit einem klaren Verstand, der fest auf dem Boden der Tatsachen steht.',
    },
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Get element info by ID. Throws if not found.
 */
export function getElement(id: string): ElementInfo {
  const el = elemente[id as Element];
  if (!el) {
    throw new Error(`Element "${id}" not found`);
  }
  return el;
}

/**
 * Determine the dominant element from a signature object.
 * Returns the element key with the highest percentage.
 */
export function getDominantElement(signatur: {
  feuer: number;
  wasser: number;
  luft: number;
  erde: number;
}): Element {
  const entries: [Element, number][] = [
    ['feuer', signatur.feuer],
    ['wasser', signatur.wasser],
    ['luft', signatur.luft],
    ['erde', signatur.erde],
  ];
  entries.sort((a, b) => b[1] - a[1]);
  return entries[0]![0];
}

/**
 * Determine the secondary (second-strongest) element from a signature.
 * Returns the element key with the second-highest percentage.
 */
export function getSecondaryElement(signatur: {
  feuer: number;
  wasser: number;
  luft: number;
  erde: number;
}): Element {
  const entries: [Element, number][] = [
    ['feuer', signatur.feuer],
    ['wasser', signatur.wasser],
    ['luft', signatur.luft],
    ['erde', signatur.erde],
  ];
  entries.sort((a, b) => b[1] - a[1]);
  return entries[1]![0];
}
