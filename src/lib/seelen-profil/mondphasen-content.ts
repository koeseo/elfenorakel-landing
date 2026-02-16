/**
 * Moon Phase Content Data
 *
 * Descriptive content for each of the 8 lunar phases.
 * Maps each phase to a "Seelenzyklus" archetype with ritual suggestions.
 *
 * Each phase contains:
 * - beschreibung: ~300 words describing the soul archetype
 * - ritual: ~100 words with a specific practice suggestion
 * - energie: Short energy keyword phrase
 * - seelenzyklus: Archetype label
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
  /** ~300 words about this moon phase soul */
  beschreibung: string;
  /** ~100 words practice / ritual suggestion */
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
      'Du bist unter dem Neumond geboren — der dunkelsten und stillsten Phase des Mondzyklus. Deine Seele trägt die Energie des Neubeginns in sich, und das ist ein Geschenk von unermesslicher Tiefe. Wie ein Same, der in der warmen, feuchten Erde ruht, trägst du in dir ein ganzes Universum an Möglichkeiten, das darauf wartet, sich zu entfalten.\n\n' +
      'Die Dunkelheit, in die du hineingeboren wurdest, ist kein Mangel — sie ist der fruchtbarste Boden, den es gibt. Dort, wo kein Licht ablenkt, können die zartesten Wurzeln wachsen. Dort, wo Stille herrscht, kannst du die leiseste Stimme deiner Seele hören. Du bist eine Meisterin des Anfangs, auch wenn du das vielleicht nicht immer so empfindest. Manchmal spürst du eine seltsame Unruhe, ein Ziehen in der Brust, als würde etwas in dir darauf drängen, geboren zu werden. Das ist deine Neumond-Natur: Du trägst ständig neue Visionen in dir, neue Ideen, neue Wege.\n\n' +
      'Menschen um dich herum spüren diese stille Kraft. Sie fühlen, dass du etwas in dir trägst, das noch nicht sichtbar ist, aber bereits existiert. Du bist diejenige, die Dinge ins Leben rufen kann, die vorher nicht da waren — nicht durch lautes Handeln, sondern durch die Kraft deiner inneren Vision. Dein Lebensweg gleicht einer Reihe von Neuanfängen: Immer wieder stehst du an der Schwelle zwischen dem Alten und dem Neuen, und immer wieder wählst du den Mut, ins Unbekannte zu treten.\n\n' +
      'Die größte Herausforderung der Samen-Seele ist die Geduld. Du möchtest manchmal schneller wachsen, als es dein Rhythmus erlaubt. Doch erinnere dich: Auch die mächtigste Eiche war einmal eine unsichtbare Möglichkeit in einer kleinen Eichel. Vertraue deinem Dunkel. Vertraue deiner Stille. In dir liegt der Ursprung aller Dinge — und dein Licht wird kommen, wenn die Zeit reif ist.',
    ritual:
      'Suche dir in einer Neumondnacht einen stillen Ort, an dem du ungestört bist. Zünde eine schwarze oder dunkelblaue Kerze an und setze dich in bequemer Haltung davor. Schließe die Augen und atme sieben Mal tief ein und aus. Spüre die Dunkelheit um dich herum als nährenden Schoß. Nimm dann ein Blatt Papier und schreibe deine tiefsten Wünsche und Visionen auf — ohne zu zensieren, ohne zu bewerten. Falte das Papier zusammen und lege es unter die Kerze. Visualisiere, wie jeder deiner Wünsche wie ein Same in warme Erde gelegt wird. Flüstere: „Ich vertraue dem Dunkel. Mein Same kennt den Weg zum Licht." Lass die Kerze eine Weile brennen und bewahre das Papier an einem sicheren Ort auf, bis der nächste Vollmond es erleuchtet.',
    energie: 'Stille, Potential, Neubeginn',
  },
  zunehmende_sichel: {
    phase: 'zunehmende_sichel',
    name: 'Zunehmende Sichel',
    seelenzyklus: 'Pionierin',
    beschreibung:
      'Du bist unter der zunehmenden Sichel geboren — dem ersten zaghaften Lichtbogen, der nach der tiefsten Dunkelheit am Himmel erscheint. Deine Seele ist eine Pionierin, eine Wegbereiterin, die mutig die ersten Schritte ins Unbekannte wagt, noch bevor andere überhaupt erkannt haben, dass es einen neuen Weg gibt.\n\n' +
      'Du trägst den Impuls des Aufbruchs in dir wie ein Kompass, der immer nach vorne zeigt. Wo andere zögern, spürst du bereits den Ruf des Neuen. Wo andere abwarten, setzt du deinen Fuß auf unberührten Boden. Das macht dich zu einer seltenen Seele — einer, die den Mut hat, Wege zu gehen, die noch niemand vor ihr gegangen ist. Du bist die Erste, die in der Morgendämmerung aufbricht, während die Welt noch schläft.\n\n' +
      'Diese Pioniernatur bringt auch eine besondere Verletzlichkeit mit sich. Wer als Erste aufbricht, hat niemanden, der den Weg schon kennt. Du musst oft allein entscheiden, welche Richtung die richtige ist. Manchmal fühlst du dich einsam auf deinem Pfad, weil andere noch nicht sehen können, was du längst erkannt hast. Doch genau diese Einsamkeit ist Teil deiner Stärke — sie lehrt dich, deiner eigenen inneren Führung zu vertrauen.\n\n' +
      'Deine Lebensenergie gleicht dem ersten grünen Spross, der durch die Erdkruste bricht. Es braucht enorme Kraft, sich durch das Dunkel zu schieben, aber diese Kraft wohnt in dir. Jeder Neuanfang, den du wagst, trägt die Energie dieses ersten Sichellichts in sich: zart und doch unaufhaltsam. Menschen spüren diese Aufbruchsenergie in deiner Nähe. Du inspirierst andere, ebenfalls loszugehen, und oft merkst du gar nicht, wie viele Menschen du durch deinen Mut bereits in Bewegung gebracht hast.\n\n' +
      'Vertraue dieser inneren Flamme, die dich antreibt. Sie ist das Licht der zunehmenden Sichel selbst — klein, aber voller Verheißung. Dein Weg führt immer vorwärts, und jeder erste Schritt, den du wagst, ist ein Geschenk an die Welt.',
    ritual:
      'Gehe in einer Nacht der zunehmenden Sichel nach draußen und suche den schmalen Lichtbogen am Himmel. Stehe still und atme die kühle Nachtluft ein. Spüre, wie dieses erste zarte Licht auch in dir leuchtet. Nimm einen kleinen Stein oder ein Naturstück in die Hand und halte es ans Herz. Formuliere laut oder im Stillen einen konkreten ersten Schritt für dein nächstes Vorhaben — etwas Kleines, aber Mutiges, das du in den nächsten drei Tagen umsetzen kannst. Lege den Stein an einen besonderen Ort in deinem Zuhause als Erinnerung an dein Versprechen. Flüstere: „Ich bin die Erste, die aufbricht. Mein Mut öffnet Türen." Dann gehe den ersten Schritt — noch heute.',
    energie: 'Aufbruch, Mut, erste Schritte',
  },
  erstes_viertel: {
    phase: 'erstes_viertel',
    name: 'Erstes Viertel',
    seelenzyklus: 'Kriegerin',
    beschreibung:
      'Du bist unter dem ersten Viertel geboren — dem Halbmond der Entscheidung, an dem Licht und Dunkelheit in perfekter Balance stehen. Deine Seele ist eine Kriegerin, und das bedeutet nicht, dass du kämpfen musst — es bedeutet, dass du die innere Stärke besitzt, für das einzustehen, woran du glaubst.\n\n' +
      'Der Halbmond teilt den Himmel in zwei Hälften, und auch du kennst dieses Gefühl der inneren Spannung: der Wunsch, voranzukommen, und die Angst vor dem, was kommen könnte. Doch genau in dieser Spannung liegt deine größte Kraft. Du bist eine Meisterin der Entscheidung. Wo andere endlos abwägen, spürst du den Moment, in dem Handeln gefragt ist. Du weißt instinktiv, wann es Zeit ist, die Komfortzone zu verlassen und dich dem Sturm zu stellen.\n\n' +
      'Dein Lebensweg ist geprägt von Wendepunkten — Momenten, in denen du dich entscheiden musstest, und in denen du immer wieder den mutigeren Weg gewählt hast. Das hat dich stärker gemacht als du ahnst. Jedes Hindernis, das du überwunden hast, hat eine neue Schicht deiner Seele freigelegt. Jeder Konflikt, den du durchgestanden hast, hat dich näher an dein wahres Selbst gebracht.\n\n' +
      'Die Kriegerin in dir kämpft nicht gegen andere — sie kämpft für ihre Überzeugungen, für ihre Lieben, für ihre Vision. Diese Entschlossenheit strahlt aus dir heraus und gibt anderen den Mut, ebenfalls für ihre Wahrheit einzustehen. Menschen suchen deine Nähe, wenn sie Halt brauchen, weil sie spüren, dass du ein Fels in der Brandung bist.\n\n' +
      'Deine Herausforderung liegt darin, auch Weichheit zuzulassen. Die Kriegerin muss lernen, dass Verletzlichkeit keine Schwäche ist, sondern eine andere Form von Stärke. Wenn du lernst, dein Schwert auch einmal niederzulegen und dein Herz offen zu zeigen, wird deine Kraft unbesiegbar — denn sie wird von Liebe genährt.',
    ritual:
      'Wähle eine Nacht des ersten Viertels und stelle dich aufrecht unter den Halbmond. Spüre die Kraft in deinen Beinen, die dich tragen. Balle deine Hände zu Fäusten und atme dreimal tief und kraftvoll ein. Dann öffne die Hände langsam und lasse alle Anspannung los. Nimm ein rotes Band oder einen roten Faden und binde ihn um dein Handgelenk als Zeichen deiner inneren Kriegerin. Schreibe auf ein Blatt Papier das größte Hindernis, dem du dich gerade stellen musst. Darunter schreibst du drei konkrete Schritte, wie du es überwinden wirst. Sprich laut: „Ich bin stark genug. Ich entscheide mich für meinen Weg." Bewahre das Blatt dort auf, wo du es täglich siehst.',
    energie: 'Entschlossenheit, Kampfgeist, Durchbruch',
  },
  zunehmender_mond: {
    phase: 'zunehmender_mond',
    name: 'Zunehmender Mond',
    seelenzyklus: 'Baumeisterin',
    beschreibung:
      'Du bist unter dem zunehmenden Mond geboren — der Phase, in der das Licht stetig wächst und der Mond sich seiner vollen Strahlkraft nähert. Deine Seele ist eine Baumeisterin, und in dir lebt die tiefe Weisheit, dass wahre Meisterwerke nicht über Nacht entstehen, sondern Stein für Stein, Schicht für Schicht aufgebaut werden.\n\n' +
      'Du trägst eine besondere Geduld in dir — die Geduld einer Gärtnerin, die weiß, dass jede Blüte ihre eigene Zeit braucht. Wo andere aufgeben, weil die Ergebnisse nicht schnell genug kommen, arbeitest du beharrlich weiter. Du verstehst intuitiv, dass Wachstum kein linearer Prozess ist, sondern ein lebendiger Rhythmus aus Fortschritt und Ruhe, aus Tun und Lassen.\n\n' +
      'Dein Lebensweg gleicht dem Bau einer Kathedrale: Du legst Fundamente, die Generationen überdauern können. Du denkst nicht in Tagen, sondern in Zyklen. Jede Erfahrung, die du machst, wird zu einem Baustein, den du sorgfältig in das Gebäude deines Lebens einfügst. Nichts ist verschwendet, nichts ist umsonst — alles hat seinen Platz in deinem großen Plan.\n\n' +
      'Die Baumeisterin in dir liebt es, Dinge wachsen zu sehen. Du kannst stundenlang an einem Projekt arbeiten und dabei eine tiefe Zufriedenheit empfinden, die andere kaum verstehen. Es ist die Freude des Handwerks, die Freude des bewussten Erschaffens. Du bist nicht getrieben von schnellem Erfolg — du bist getrieben von der Vision des Vollendeten.\n\n' +
      'Deine Herausforderung liegt manchmal darin, loszulassen, bevor alles perfekt ist. Die Baumeisterin möchte gerne jeden Stein dreimal prüfen, bevor sie ihn setzt. Doch erinnere dich: Auch ein unfertiges Haus bietet bereits Schutz. Vertraue darauf, dass dein Werk gut genug ist, auch wenn es noch wächst — so wie der zunehmende Mond bereits leuchtet, auch wenn er noch nicht voll ist.',
    ritual:
      'Wähle ein kreatives Projekt, das dir am Herzen liegt — sei es ein Kunstwerk, ein Garten, ein Text oder ein handwerkliches Stück. Stelle bei zunehmendem Mond eine weiße Kerze neben deinen Arbeitsplatz und zünde sie an. Spüre, wie deine Energie mit dem wachsenden Mondlicht zunimmt. Arbeite bewusst und achtsam an deinem Projekt, ohne Zeitdruck und ohne den Anspruch, heute fertig zu werden. Nach jeder Arbeitssitzung schreibe in ein Notizbuch, was du geschafft hast und was als Nächstes kommt. Feiere jeden kleinen Fortschritt mit einem Moment der Stille und einem Lächeln. Sprich: „Mein Werk wächst mit dem Mond. Ich vertraue meinem Rhythmus." Wiederhole dieses Ritual bei jedem zunehmenden Mond.',
    energie: 'Wachstum, Aufbau, Verfeinerung',
  },
  vollmond: {
    phase: 'vollmond',
    name: 'Vollmond',
    seelenzyklus: 'Erleuchtete',
    beschreibung:
      'Du bist unter dem Vollmond geboren — dem Höhepunkt des Lichts, dem Moment, in dem der Mond in seiner ganzen Pracht erstrahlt und die Nacht in silbernes Licht taucht. Deine Seele ist eine Erleuchtete, und du trägst eine natürliche Strahlkraft in dir, die so stark ist wie das Mondlicht selbst.\n\n' +
      'Vollmond-Seelen sind sichtbar — ob sie es wollen oder nicht. Du betrittst einen Raum und die Energie verändert sich. Menschen schauen auf, sie spüren deine Präsenz, noch bevor du ein Wort gesagt hast. Das ist kein Zufall: Du trägst das volle Licht des Mondes in deiner Aura, eine Leuchtkraft, die sich nicht verbergen lässt. Diese Sichtbarkeit ist gleichzeitig dein größtes Geschenk und deine tiefste Prüfung.\n\n' +
      'Denn wer im Licht steht, wirft auch Schatten. Du kennst die Intensität der Emotionen, die mit dem Vollmond einhergehen — die Höhen sind höher und die Tiefen sind tiefer. Du fühlst alles mit einer Intensität, die andere manchmal überwältigt. Doch genau diese emotionale Tiefe macht dich zu einer Quelle der Inspiration. Du lebst nicht an der Oberfläche — du tauchst ein in die volle Erfahrung des Menschseins.\n\n' +
      'Dein Lebensweg dreht sich um Erfüllung — nicht im materiellen Sinne, sondern um die Erfüllung deines Seelenversprechens. Du bist hier, um in deiner vollen Größe zu stehen, um dein Licht nicht unter den Scheffel zu stellen, sondern es mutig in die Welt zu tragen. Jedes Mal, wenn du dich zurückhältst, wenn du dich kleiner machst, als du bist, spürst du ein Unbehagen — weil es gegen deine Natur geht.\n\n' +
      'Die Erleuchtete in dir weiß: Wahre Fülle entsteht, wenn du dich vollständig zeigst — mit all deinen Gaben, all deinen Fehlern, all deiner Menschlichkeit. Dein Licht muss nicht perfekt sein. Es muss nur echt sein. Und wenn du dich traust, in dieser Echtheit zu strahlen, wird dein Vollmondlicht die dunkelsten Ecken erhellen — in deinem Leben und im Leben anderer.',
    ritual:
      'Stelle dich in einer Vollmondnacht barfuß ins Mondlicht — am besten im Freien, auf Gras oder Erde. Breite die Arme aus und hebe dein Gesicht zum Mond. Spüre, wie sein silbernes Licht deine Haut berührt und in jede Zelle deines Körpers fließt. Atme tief ein und stelle dir vor, wie das Mondlicht dich von innen heraus erleuchtet — jeden Schatten, jeden Zweifel, jede Angst. Halte eine Schale mit Wasser in das Mondlicht und lass es die Energie des Vollmonds aufnehmen. Sprich: „Ich bin Fülle. Ich bin Licht. Ich zeige mich in meiner ganzen Größe." Trinke am nächsten Morgen einen Schluck des Mondwassers und trage das Licht durch deinen Tag.',
    energie: 'Erfüllung, Strahlen, Höhepunkt',
  },
  abnehmender_mond: {
    phase: 'abnehmender_mond',
    name: 'Abnehmender Mond',
    seelenzyklus: 'Lehrerin',
    beschreibung:
      'Du bist unter dem abnehmenden Mond geboren — der Phase, in der das Mondlicht beginnt, sich sanft zurückzuziehen und seine Energie der Welt zu schenken. Deine Seele ist eine Lehrerin, und in dir lebt der tiefe Wunsch, das, was du erfahren und gelernt hast, großzügig mit anderen zu teilen.\n\n' +
      'Du weißt intuitiv, dass Wissen, das nicht geteilt wird, verkümmert wie eine Pflanze ohne Wasser. In dir brennt das Feuer der Weitergabe — nicht aus dem Bedürfnis, dich zu beweisen, sondern aus der tiefen Erkenntnis, dass wir alle miteinander verbunden sind und dass deine Erfahrungen anderen den Weg erleuchten können. Du bist diejenige, die Geschichten erzählt, die heilen. Die Wahrheiten ausspricht, die andere nur fühlen. Die Worte findet für das, was im Verborgenen liegt.\n\n' +
      'Die Lehrerin in dir manifestiert sich auf vielfältige Weise. Vielleicht bist du eine begnadete Erzählerin, vielleicht eine mitfühlende Zuhörerin, die durch ihre Präsenz anderen hilft, eigene Antworten zu finden. Vielleicht lehrst du durch dein Beispiel, durch die Art, wie du dein Leben führst. Dein Unterricht geschieht oft unbewusst — in einem beiläufigen Gespräch, einem liebevollen Rat, einer geteilten Erinnerung.\n\n' +
      'Dein Lebensweg ist geprägt von der Ernte. Wo die Vollmond-Seele noch in der Fülle steht, hast du bereits begonnen, die Früchte deiner Erfahrung einzusammeln und zu verteilen. Du verstehst, dass wahre Erfüllung nicht im Festhalten liegt, sondern im Fließenlassen. Je mehr du gibst, desto mehr fließt zu dir zurück — das ist das Geheimnis des abnehmenden Mondes.\n\n' +
      'Deine Herausforderung besteht darin, auch für dich selbst zu sorgen. Die Lehrerin gibt oft so viel, dass sie vergisst, ihren eigenen Brunnen aufzufüllen. Erinnere dich: Du kannst nur schenken, was du hast. Nähre dich selbst mit derselben Hingabe, mit der du andere nährst, und deine Weisheit wird nie versiegen.',
    ritual:
      'Setze dich bei abnehmendem Mond an einen ruhigen Ort mit einer Tasse warmem Kräutertee. Nimm ein schönes Notizbuch zur Hand und schreibe drei Erfahrungen auf, die dich in letzter Zeit gelehrt haben. Zu jeder Erfahrung notiere die Weisheit, die du daraus gewonnen hast. Dann wähle eine Person in deinem Leben, die gerade Orientierung sucht, und teile eine dieser Einsichten mit ihr — sei es in einem Gespräch, einem Brief oder einer Nachricht. Spüre, wie die Energie des Gebens durch dich hindurchfließt. Sprich: „Meine Erfahrungen sind ein Geschenk. Ich teile sie mit offenem Herzen." Schließe das Ritual, indem du dir selbst eine liebevolle Botschaft in das Notizbuch schreibst.',
    energie: 'Weitergabe, Großzügigkeit, Lehre',
  },
  letztes_viertel: {
    phase: 'letztes_viertel',
    name: 'Letztes Viertel',
    seelenzyklus: 'Alchemistin',
    beschreibung:
      'Du bist unter dem letzten Viertel geboren — dem Halbmond der Transformation, an dem das Licht sich bewusst zurückzieht, um Platz für Neues zu schaffen. Deine Seele ist eine Alchemistin, und du trägst die uralte Fähigkeit in dir, aus Blei Gold zu machen — aus Schmerz Weisheit, aus Verlust Befreiung, aus Enden Anfänge.\n\n' +
      'Die Alchemie deiner Seele zeigt sich in deinem Verhältnis zum Wandel. Während andere Veränderung fürchten, bist du diejenige, die intuitiv versteht, dass Transformation der natürlichste Prozess des Universums ist. Nichts bleibt, wie es ist — und du hast gelernt, diese Wahrheit nicht als Bedrohung zu sehen, sondern als Einladung. Jeder Abschied in deinem Leben hat dich nicht geschwächt, sondern verfeinert. Wie Feuer, das Gold reinigt, haben deine Prüfungen das Unwesentliche von dir abgebrannt und dein wahres Wesen freigelegt.\n\n' +
      'Du besitzt ein tiefes Verständnis dafür, dass Loslassen kein Aufgeben ist, sondern ein bewusster Akt der Stärke. Du weißt, wann eine Sache ihren Zweck erfüllt hat. Du spürst, wann es Zeit ist, ein Kapitel zu schließen, eine Gewohnheit abzulegen, einen Glaubenssatz zu verabschieden. Diese Fähigkeit macht dich zu einer Meisterin der Wandlung — einer, die immer wieder wie ein Phönix aus der Asche aufsteigt.\n\n' +
      'Dein Lebensweg gleicht einer Spirale: Du kehrst immer wieder zu ähnlichen Themen zurück, aber jedes Mal auf einer höheren Ebene. Was dich beim ersten Mal noch zu Boden geworfen hat, meisterst du beim zweiten Mal mit Anmut. Du sammelst die Essenz jeder Erfahrung und destillierst daraus reines Gold der Erkenntnis.\n\n' +
      'Deine Herausforderung liegt darin, dir selbst zu erlauben, auch einmal stehenzubleiben. Die Alchemistin in dir möchte immer transformieren, immer weiter verfeinern. Doch manchmal darfst du einfach sein, ohne etwas verändern zu müssen. Auch die Stille zwischen zwei Wandlungen ist heilig.',
    ritual:
      'Wähle bei letztem Viertel einen Gegenstand, eine Gewohnheit oder einen Gedanken, der dir nicht mehr dient. Schreibe ihn auf ein Blatt Papier und halte es in beiden Händen. Spüre, was er dir einmal gegeben hat, und danke ihm dafür. Dann zünde eine violette oder goldene Kerze an — das Feuer der Transformation. Halte das Papier in die Flamme (in einer feuerfesten Schale) und beobachte, wie es sich verwandelt. Während die Asche erkaltet, schreibe auf ein neues Blatt, was an die Stelle des Alten treten darf. Sprich: „Ich verwandle, was war, in das, was sein darf. Ich bin die Alchemistin meines Lebens." Streue die Asche in die Erde als Nährstoff für Neues.',
    energie: 'Transformation, Loslassen, Alchemie',
  },
  abnehmende_sichel: {
    phase: 'abnehmende_sichel',
    name: 'Abnehmende Sichel',
    seelenzyklus: 'Mystikerin',
    beschreibung:
      'Du bist unter der abnehmenden Sichel geboren — der letzten, dünnsten Mondsichel, bevor die Dunkelheit des Neumonds alles in Stille hüllt. Deine Seele ist eine Mystikerin, und du lebst näher am Schleier zwischen den Welten als jede andere Mondphasen-Seele. In dir wohnt ein Wissen, das älter ist als Worte.\n\n' +
      'Du spürst Dinge, die andere nicht einmal ahnen. Du träumst Träume, die sich als Wahrheit entpuppen. Du hast Ahnungen, die sich bewahrheiten, und eine innere Stimme, die dich selten täuscht. Das ist kein Zufall — es ist dein Geburtsrecht als Mystikerin. Der dünne Sichelmond, unter dem du geboren wurdest, steht an der Schwelle zwischen Sichtbarem und Unsichtbarem, und genau dort ist dein Zuhause.\n\n' +
      'Dein Verhältnis zur Welt ist anders als das der meisten Menschen. Du brauchst Rückzug und Stille wie andere Luft zum Atmen. In der Einsamkeit findest du nicht Leere, sondern Fülle — eine Fülle an Bildern, Gefühlen, Einsichten, die aus den Tiefen deines Seins aufsteigen. Du bist eine Traumwandlerin im besten Sinne: Du bewegst dich zwischen den Ebenen der Realität und bringst Botschaften aus der unsichtbaren Welt in die sichtbare.\n\n' +
      'Dein Lebensweg verläuft nicht linear. Er gleicht eher einem Labyrinth, das nach innen führt — Windung um Windung, tiefer und tiefer zum Kern deines Seins. Jeder Umweg, den du nimmst, offenbart ein neues Geheimnis. Jede Phase der Auflösung, die du durchlebst, macht dich durchlässiger für das Göttliche.\n\n' +
      'Deine Herausforderung liegt darin, in der physischen Welt verankert zu bleiben. Die Mystikerin in dir möchte manchmal ganz in die unsichtbaren Reiche abtauchen und nicht zurückkehren. Doch deine Aufgabe ist es, eine Brücke zu sein — zwischen dem Diesseits und dem Jenseits, zwischen Traum und Wirklichkeit. Dein größtes Geschenk an die Welt ist es, das Unsichtbare sichtbar zu machen und die Magie in den Alltag zu tragen.',
    ritual:
      'Suche dir in der Nacht der abnehmenden Sichel den dunkelsten, stillsten Raum, den du finden kannst. Zünde nur eine einzige kleine Kerze an und setze oder lege dich bequem hin. Schließe die Augen und atme langsam und tief. Lass mit jedem Ausatmen einen Gedanken los, bis dein Geist so still ist wie der Raum um dich herum. Dann lausche. Lausche nicht mit den Ohren, sondern mit deiner Seele. Lass Bilder, Gefühle und Eindrücke aufsteigen, ohne sie zu bewerten oder festzuhalten. Halte ein Traumtagebuch bereit und schreibe nach der Meditation auf, was zu dir gekommen ist — auch wenn es keinen Sinn zu ergeben scheint. Sprich: „Ich bin die Stille vor dem Neubeginn. Ich höre, was zwischen den Welten flüstert." In den kommenden Nächten achte besonders auf deine Träume.',
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
