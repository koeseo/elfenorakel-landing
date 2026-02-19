/**
 * Yearly Energy Content Data
 *
 * 22 entries (one per Major Arcana, 0-21) describing the personal year energy.
 * The user's birth date + current year determines which Major Arcana governs their year.
 *
 * Each entry contains:
 * - titel: Display title for the year energy
 * - beschreibung: ~150 words evocative description in Elfi's mystical voice
 * - impulse: 3 concrete action items (1-2 sentences each)
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface JahresEnergieContent {
  /** Major Arcana number 0-21 */
  arcanaId: number;
  /** Display title e.g. "Die Energie der Freien Seele" */
  titel: string;
  /** ~150 words about this year's energy */
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
      'Dieses Jahr steht unter dem Zeichen des Narren -- ein Jahr des Neubeginns und der grenzenlosen Möglichkeiten. ' +
      'Das Universum lädt dich ein, Altes hinter dir zu lassen und mutig ins Unbekannte zu springen. ' +
      'Stell dir vor, du stehst an einer Klippe und die Winde tragen den Duft von Abenteuer. ' +
      'Alles, was du bisher geglaubt, gelernt und festgehalten hast, darf jetzt losgelassen werden. ' +
      'Die kosmische Energie des Narren schenkt dir eine kindliche Leichtigkeit, die dich furchtlos macht -- ' +
      'nicht weil es keine Risiken gibt, sondern weil du spürst, dass das Universum dich auffängt. ' +
      'Dieses Jahr ist wie eine leere Leinwand: unberührt, voller Potenzial, wartend auf deine ersten Pinselstriche. ' +
      'Erlaube dir, Fehler zu machen, Umwege zu nehmen und das Leben als großes Experiment zu begreifen. ' +
      'Dein inneres Kind will spielen, entdecken und staunen. Lass es. ' +
      'Die wichtigste Lektion dieses Jahres: Vertrauen ist keine Schwäche, sondern die größte Stärke deiner Seele.',
    impulse: [
      'Wage den Sprung ins Unbekannte -- beginne etwas, das du schon lange aufschiebst, ohne den perfekten Plan abzuwarten.',
      'Vertraue deiner Intuition mehr als deinem Verstand, besonders wenn sich eine Gelegenheit zeigt, die dein Herz zum Klopfen bringt.',
      'Lass bewusst etwas los, das dich festhält -- eine Gewohnheit, eine Überzeugung oder eine Verbindung, die dich nicht mehr nährt.',
    ],
  },
  {
    arcanaId: 1,
    titel: 'Die Energie des Schöpfers',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Magiers -- ein Jahr der Manifestation und Schöpferkraft. ' +
      'Alle Werkzeuge liegen vor dir auf dem kosmischen Tisch: die Stäbe deiner Leidenschaft, ' +
      'die Kelche deiner Emotionen, die Schwerter deines Geistes und die Münzen deiner Tatkraft. ' +
      'Es ist an der Zeit, deine Visionen in die Realität zu bringen. ' +
      'Der Magier in dir weiß, dass Gedanken Energie sind und Worte Zaubersprüche. ' +
      'Was du in diesem Jahr klar formulierst und mit Absicht ins Leben rufst, hat eine besondere Kraft der Verwirklichung. ' +
      'Die kosmische Energie unterstützt dich dabei, Brücken zwischen deiner inneren Welt und der äußeren Realität zu bauen. ' +
      'Du bist nicht Opfer der Umstände -- du bist die Schöpferin deines Lebens. ' +
      'Nutze diese kraftvolle Zeit, um bewusst zu gestalten, zu kreieren und deine einzigartigen Gaben in die Welt zu tragen. ' +
      'Der Kosmos wartet auf das, was nur du erschaffen kannst.',
    impulse: [
      'Setze deine Talente bewusst und gezielt ein -- wähle ein konkretes Projekt, das deine einzigartigen Fähigkeiten vereint, und widme dich ihm mit ganzer Hingabe.',
      'Manifestiere ein klar definiertes Ziel, indem du es aufschreibst, visualisierst und jeden Tag einen kleinen Schritt darauf zugehst.',
      'Kommuniziere deine Vision klar und mutig nach außen -- sprich über deine Träume, denn ausgesprochene Worte tragen Schöpferkraft in sich.',
    ],
  },
  {
    arcanaId: 2,
    titel: 'Die Energie der Seherin',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen der Hohepriesterin -- ein Jahr der Intuition und inneren Weisheit. ' +
      'Höre auf die leise Stimme in dir, denn sie kennt Wahrheiten, die der Verstand nicht erfassen kann. ' +
      'Die Antworten, die du suchst, kommen nicht von außen -- sie warten in der Stille zwischen deinen Gedanken. ' +
      'Die Hohepriesterin hütet den Schleier zwischen den Welten, und in diesem Jahr wird dieser Schleier für dich dünner. ' +
      'Deine Träume werden lebhafter, deine Ahnungen treffsicherer, dein Gespür für verborgene Zusammenhänge schärfer. ' +
      'Dies ist kein Jahr des lauten Handelns, sondern des tiefen Lauschens. ' +
      'Wie der Mond das Meer bewegt, so bewegen verborgene Kräfte dein Leben in die richtige Richtung. ' +
      'Vertraue dem, was du nicht sehen, aber fühlen kannst. ' +
      'Dein Unbewusstes ist ein Ozean voller Weisheit -- tauche ein, ohne Angst vor der Tiefe. ' +
      'Was sich dir in der Stille offenbart, wird dein Leben nachhaltig verändern.',
    impulse: [
      'Vertiefe deine Meditationspraxis oder beginne eine neue -- schaffe dir täglich einen heiligen Raum der Stille, in dem deine innere Stimme zu dir sprechen kann.',
      'Führe ein Traumtagebuch und schreibe jeden Morgen auf, was die Nacht dir gezeigt hat. Deine Träume sind Botschaften deiner Seele.',
      'Vertraue deiner inneren Stimme, auch wenn sie dem widerspricht, was die Welt dir sagt -- deine Intuition ist dein zuverlässigster Kompass.',
    ],
  },
  {
    arcanaId: 3,
    titel: 'Die Energie der Nährenden',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen der Herrscherin -- ein Jahr der Fülle und Kreativität. ' +
      'Die Natur blüht in dir und um dich herum, und alles, was du berührst, will wachsen und gedeihen. ' +
      'Die Herrscherin ist die große Mutter des Kosmos, und ihre Energie durchströmt dich in diesem Jahr mit besonderer Intensität. ' +
      'Erlaube dir, zu empfangen und zu genießen -- du musst nicht immer geben, um wertvoll zu sein. ' +
      'Dein Körper ist ein Tempel, deine Sinne sind Tore zur Freude, und die Erde selbst nährt dich mit jedem Atemzug. ' +
      'Kreativität fließt in diesem Jahr mühelos durch dich hindurch -- ob du malst, kochst, gärtnertst oder ein neues Leben gestaltest. ' +
      'Achte auf die Zeichen der Natur, denn sie spiegeln deinen inneren Zustand wider. ' +
      'Wenn du dich um das kümmerst, was dir anvertraut ist -- Menschen, Projekte, Pflanzen, Träume -- ' +
      'wird das Universum dir zehnfach zurückgeben. Dies ist dein Jahr der Ernte und des Überflusses.',
    impulse: [
      'Pflege deine kreativen Projekte wie einen Garten -- gib ihnen regelmäßig Wasser, Licht und Aufmerksamkeit, und vertraue darauf, dass sie in ihrer eigenen Zeit erblühen.',
      'Gönne dir Fülle und Genuss ohne schlechtes Gewissen. Nimm ein langes Bad, koche ein üppiges Mahl, umgib dich mit Schönheit -- du hast es verdient.',
      'Nähre deine wichtigsten Beziehungen mit bewusster Zuwendung. Sage den Menschen, die du liebst, was sie dir bedeuten -- nicht morgen, sondern heute.',
    ],
  },
  {
    arcanaId: 4,
    titel: 'Die Energie des Souveräns',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Herrschers -- ein Jahr der Struktur und Stabilität. ' +
      'Es ist Zeit, Ordnung zu schaffen und deine Welt bewusst zu gestalten. ' +
      'Der Herrscher sitzt fest auf seinem Thron, nicht aus Starrsinn, sondern aus innerer Klarheit über das, was wirklich zählt. ' +
      'Diese Energie lädt dich ein, die Architektin deines Lebens zu sein -- ' +
      'Fundamente zu legen, Grenzen zu setzen und mit ruhiger Autorität deinen Weg zu gehen. ' +
      'Wo im letzten Jahr vielleicht Chaos und Unsicherheit herrschten, bringst du nun Ordnung und Verlässlichkeit. ' +
      'Deine Disziplin ist keine Einschränkung, sondern ein Geschenk an dein zukünftiges Ich. ' +
      'Jede Struktur, die du jetzt schaffst, wird dich tragen, wenn die Stürme kommen. ' +
      'Übernimm die volle Verantwortung für dein Leben -- für deine Entscheidungen, deine Finanzen, deine Gesundheit, deine Beziehungen. ' +
      'Niemand anders sitzt auf deinem Thron. Regiere weise, mit Herz und Verstand.',
    impulse: [
      'Schaffe klare Strukturen in deinem Alltag -- erstelle Routinen und Systeme, die dich unterstützen, statt dich einzuengen. Ein geordnetes Äußeres schafft Raum für ein freies Inneres.',
      'Übernimm Verantwortung für ein Lebensziel, das du bisher aufgeschoben hast. Erstelle einen konkreten Plan mit Meilensteinen und halte dich daran.',
      'Setze gesunde Grenzen, besonders dort, wo andere deine Energie und Zeit beanspruchen. Ein klares Nein ist manchmal das liebevollste Ja zu dir selbst.',
    ],
  },
  {
    arcanaId: 5,
    titel: 'Die Energie des Weisen',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Hierophanten -- ein Jahr des Lernens und der spirituellen Vertiefung. ' +
      'Der Hierophant ist der Brückenbauer zwischen dem Göttlichen und dem Irdischen, ' +
      'und in diesem Jahr wirst du spüren, wie sich deine Verbindung zur höheren Weisheit vertieft. ' +
      'Suche dir einen Mentor, eine Lehrerin oder einen spirituellen Weg, der dich herausfordert und wachsen lässt. ' +
      'Gleichzeitig bist auch du eingeladen, dein angesammeltes Wissen weiterzugeben -- ' +
      'denn wahre Weisheit entfaltet sich erst im Teilen. ' +
      'Es geht in diesem Jahr nicht darum, alles allein zu verstehen, sondern dich einer Tradition, ' +
      'einer Gemeinschaft oder einer Lehre hinzugeben, die größer ist als du selbst. ' +
      'Rituale und wiederkehrende Praktiken werden zu Ankern deiner Seele. ' +
      'Ob es Meditation, Gebet, Yoga oder der bewusste Gang durch die Natur ist -- ' +
      'finde deine heilige Praxis und widme dich ihr mit Hingabe. ' +
      'Die Antworten dieses Jahres kommen durch Studium, Reflexion und den Austausch mit weisen Seelen.',
    impulse: [
      'Lerne etwas Neues von einem Meister oder einer Mentorin -- ob spirituell, kreativ oder handwerklich. Lass dich führen und sei offen dafür, Anfängerin zu sein.',
      'Teile dein Wissen großzügig mit anderen. Ob in einem Gespräch, einem Workshop oder einem Brief -- deine Erfahrungen sind Geschenke, die andere auf ihrem Weg unterstützen.',
      'Verbinde die Weisheit der Tradition mit deiner eigenen Erkenntnis. Nimm, was dir dient, ehre, was dich geformt hat, und erschaffe daraus deinen ganz eigenen Weg.',
    ],
  },
  {
    arcanaId: 6,
    titel: 'Die Energie der Verbundenen',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen der Liebenden -- ein Jahr der Beziehungen und Entscheidungen des Herzens. ' +
      'Die Liebe in all ihren Formen ruft dich: romantische Liebe, Selbstliebe, Freundschaft und die Liebe zum Leben selbst. ' +
      'Triff bewusste Herzensentscheidungen, denn in diesem Jahr hat jede Wahl, die du aus dem Herzen triffst, ' +
      'eine besondere Kraft, dein Leben zum Besseren zu wenden. ' +
      'Die Liebenden stehen auch für die Vereinigung von Gegensätzen -- ' +
      'Kopf und Herz, Pflicht und Leidenschaft, Sicherheit und Abenteuer. ' +
      'In dir selbst liegt die Aufgabe, diese scheinbaren Widersprüche zu versöhnen und als Einheit zu erkennen. ' +
      'Beziehungen werden in diesem Jahr zu deinem größten Spiegel. ' +
      'Was dich anzieht, zeigt dir, wonach deine Seele sich sehnt. Was dich herausfordert, zeigt dir, wo du noch wachsen darfst. ' +
      'Öffne dich für tiefe, authentische Verbindungen und hab den Mut, dein Herz zu zeigen -- ' +
      'auch wenn es verwundbar macht. Wahre Liebe braucht den Mut zur Verletzlichkeit.',
    impulse: [
      'Öffne dein Herz für tiefe Verbindung -- lass eine Beziehung näher an dich heran, als du es normalerweise zulassen würdest. Intimität beginnt dort, wo Kontrolle aufhört.',
      'Triff eine wichtige Herzensentscheidung, die du vor dir hergeschoben hast. Frage nicht deinen Kopf, sondern lege die Hand auf dein Herz und höre, was es dir sagt.',
      'Versöhne Gegensätze in dir, die dich innerlich zerreißen. Erlaube dir, sowohl stark als auch sanft zu sein, sowohl vernünftig als auch leidenschaftlich.',
    ],
  },
  {
    arcanaId: 7,
    titel: 'Die Energie der Siegerin',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Wagens -- ein Jahr des Triumphs und Fortschritts. ' +
      'Dein Wille ist dein Antrieb, und die Sterne haben sich zu deinen Gunsten ausgerichtet. ' +
      'Greife die Zügel und fahre entschlossen vorwärts, denn dies ist kein Jahr des Zögerns. ' +
      'Der Wagen verlangt Fokus und Richtung -- zwei Kräfte, die in verschiedene Richtungen ziehen wollen, ' +
      'und nur du kannst sie bündeln und auf ein gemeinsames Ziel lenken. ' +
      'Hindernisse sind keine Mauern, sondern Prüfungen deiner Entschlossenheit. ' +
      'Jedes Mal, wenn du ein Hindernis überwindest, wächst deine innere Stärke. ' +
      'Dies ist das Jahr, in dem du beweist, was in dir steckt -- nicht der Welt, sondern dir selbst. ' +
      'Dein Ehrgeiz ist keine Schwäche, sondern der Motor, der dich deiner höchsten Version näher bringt. ' +
      'Fahre los, feiere jeden Meilenstein auf dem Weg und lass dich von Rückschlägen nicht aufhalten. ' +
      'Der Sieg gehört denen, die trotz allem weiterfahren.',
    impulse: [
      'Setze dir ein ambitioniertes Ziel, das dich herausfordert und begeistert -- eines, das etwas größer ist als das, was du dir normalerweise zutraust.',
      'Überwinde ein großes Hindernis, das schon lange in deinem Weg steht. Gehe es frontal an, mit der Kraft deines Willens und dem Feuer deiner Entschlossenheit.',
      'Feiere deinen Fortschritt bewusst und regelmäßig. Jeder kleine Sieg verdient Anerkennung -- er ist der Beweis, dass du auf dem richtigen Weg bist.',
    ],
  },
  {
    arcanaId: 8,
    titel: 'Die Energie der Unbezwingbaren',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen der Kraft -- ein Jahr der inneren Stärke und sanften Macht. ' +
      'Nicht Kontrolle, sondern liebevolle Meisterung ist dein Weg. ' +
      'Die Kraft-Karte zeigt eine Frau, die einen Löwen nicht mit Gewalt, sondern mit Sanftmut zähmt -- ' +
      'und genau das ist deine Aufgabe in diesem Jahr. ' +
      'Deine größten Herausforderungen überwindest du nicht durch Kampf, sondern durch Mitgefühl, Geduld und innere Ruhe. ' +
      'Der Löwe in dir -- deine Ängste, deine Wut, deine wilden Leidenschaften -- will nicht unterdrückt, sondern umarmt werden. ' +
      'Wahre Stärke zeigt sich nicht in Härte, sondern in der Fähigkeit, weich zu bleiben, wenn die Welt dich hart machen will. ' +
      'In diesem Jahr wirst du entdecken, dass deine Verletzlichkeit deine größte Superkraft ist. ' +
      'Menschen werden spüren, dass du eine ruhige, tiefe Kraft in dir trägst, die andere ermutigt und heilt. ' +
      'Steh fest in deiner Mitte, atme tief und vertraue darauf, dass die sanfteste Kraft die nachhaltigste ist.',
    impulse: [
      'Begegne einer Angst mit Sanftmut statt mit Kampf. Setz dich zu ihr, sprich mit ihr, frage sie, was sie dir sagen will -- oft löst sie sich allein durch liebevolle Aufmerksamkeit.',
      'Stärke deine innere Widerstandskraft durch eine tägliche Praxis, die Körper und Geist verbindet -- sei es Yoga, Tai Chi, Atemarbeit oder bewusstes Gehen in der Natur.',
      'Zeige Verletzlichkeit als Stärke, indem du dich traust, offen über deine Gefühle zu sprechen. Wahre Stärke braucht keine Maske.',
    ],
  },
  {
    arcanaId: 9,
    titel: 'Die Energie der Suchenden',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Eremiten -- ein Jahr der Innenschau und Selbstfindung. ' +
      'Ziehe dich zurück, höre in die Stille und finde dein inneres Licht. ' +
      'Der Eremit wandert allein durch die Dunkelheit, doch er trägt seine Laterne -- ' +
      'das Licht der Weisheit, das er in sich selbst gefunden hat. ' +
      'In diesem Jahr bist du eingeladen, dich von äußerem Lärm zurückzuziehen und die großen Fragen deines Lebens zu stellen. ' +
      'Wer bin ich wirklich? Was ist mein tiefster Sinn? Wohin will meine Seele mich führen? ' +
      'Die Antworten kommen nicht auf Partys oder in Meetings, sondern in einsamen Spaziergängen, ' +
      'in der Morgenstille, im Blick auf die Sterne. ' +
      'Einsamkeit ist in diesem Jahr keine Strafe, sondern ein heiliger Raum. ' +
      'In der Stille findest du dich selbst -- nicht als Rolle, nicht als Funktion, sondern als Seele. ' +
      'Und wenn du dein eigenes Licht gefunden hast, wirst du es anderen leuchten können, ohne dich dabei zu verlieren.',
    impulse: [
      'Nimm dir bewusst Zeit für Alleinsein -- plane regelmäßige Stunden oder Tage der Stille ein, in denen du ohne Ablenkung bei dir selbst sein kannst.',
      'Stelle dir die großen Lebensfragen und schreibe deine Antworten auf. Was würdest du tun, wenn du keine Angst hättest? Was will deine Seele wirklich?',
      'Suche Weisheit in der Stille -- ob durch Meditation, Wandern in der Natur oder das Lesen eines Buches, das deine Seele berührt. Die tiefsten Erkenntnisse kommen leise.',
    ],
  },
  {
    arcanaId: 10,
    titel: 'Die Energie der Schicksalsweberin',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Schicksalsrads -- ein Jahr des Wandels und der großen Wendepunkte. ' +
      'Das Rad dreht sich, und es bringt neue Chancen, unerwartete Begegnungen und überraschende Wendungen. ' +
      'Nichts bleibt, wie es ist, und genau darin liegt das Geschenk dieses Jahres. ' +
      'Vertraue dem kosmischen Fluss, auch wenn du nicht sehen kannst, wohin er dich trägt. ' +
      'Das Schicksalsrad lehrt dich, dass Auf und Ab zum Leben gehören wie Ebbe und Flut zum Meer. ' +
      'Was heute oben ist, kann morgen unten sein -- und umgekehrt. ' +
      'Diese Erkenntnis macht dich nicht ängstlich, sondern frei, denn du lernst, in jeder Lage deine Mitte zu finden. ' +
      'Achte auf Synchronizitäten, auf wiederkehrende Zahlen, auf Zeichen, die das Universum dir schickt. ' +
      'Dieses Jahr ist voller kosmischer Fügungen, die dich genau dorthin bringen, wo du sein sollst. ' +
      'Greife zu, wenn das Rad dir eine Chance vor die Füße legt -- der richtige Moment kommt nicht zweimal.',
    impulse: [
      'Begrüße Veränderungen als Chancen und nicht als Bedrohungen. Wenn sich eine Tür schließt, halte Ausschau nach dem Fenster, das sich gleichzeitig öffnet.',
      'Erkenne die Zyklen in deinem Leben -- welche Muster wiederholen sich? Was will das Schicksal dir dadurch zeigen? Bewusstes Erkennen bricht den Kreislauf.',
      'Nutze den Schwung des Wandels und ergreife mutig eine Gelegenheit, die sich dir bietet. Das Glück begünstigt die Mutigen -- und das Rad dreht sich gerade für dich.',
    ],
  },
  {
    arcanaId: 11,
    titel: 'Die Energie der Gerechten',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen der Gerechtigkeit -- ein Jahr der Wahrheit und des Ausgleichs. ' +
      'Karma findet seinen Weg, und alles, was du gesät hast, kommt nun zur Ernte. ' +
      'Die Waage der Gerechtigkeit ist gnadenlos ehrlich, aber auch zutiefst fair. ' +
      'Lebe in Integrität, denn in diesem Jahr wird jede Handlung, jedes Wort, jeder Gedanke auf die Waagschale gelegt. ' +
      'Was nicht in Balance ist, wird korrigiert -- manchmal sanft, manchmal mit der Klarheit eines Schwerthiebs. ' +
      'Dies ist auch ein Jahr der wichtigen Entscheidungen, die mit klarem Kopf und offenem Herzen getroffen werden wollen. ' +
      'Frage dich bei jeder Wahl: Ist das wahr? Ist das gerecht? Dient es dem höchsten Wohl? ' +
      'Unerledigte Konflikte, unausgesprochene Wahrheiten und alte Schulden wollen bereinigt werden. ' +
      'Es mag unbequem sein, aber die Befreiung, die danach kommt, ist unbezahlbar. ' +
      'Finde deine Balance zwischen Geben und Nehmen, zwischen Kopf und Herz, zwischen dir und der Welt.',
    impulse: [
      'Bringe eine Ungerechtigkeit ins Reine -- sei es ein ungelöster Konflikt, eine unausgesprochene Wahrheit oder eine alte Schuld. Der Mut zur Ehrlichkeit befreit deine Seele.',
      'Triff Entscheidungen mit klarem Kopf und höre dabei auch auf dein Bauchgefühl. Sammle alle Fakten, aber lass dann dein Herz das letzte Wort sprechen.',
      'Finde eine echte Balance zwischen Geben und Nehmen in deinen Beziehungen. Wo gibst du zu viel? Wo nimmst du zu wenig an? Gerechtigkeit beginnt bei dir selbst.',
    ],
  },
  {
    arcanaId: 12,
    titel: 'Die Energie der Wandlerin',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Gehängten -- ein Jahr der Hingabe und neuen Perspektiven. ' +
      'Lass los und betrachte die Welt auf den Kopf gestellt. Im Loslassen liegt die wahre Freiheit. ' +
      'Der Gehängte hängt nicht aus Schwäche, sondern aus tiefer innerer Entscheidung -- ' +
      'er wählt bewusst die Pause, die Stille, die andere Perspektive. ' +
      'In diesem Jahr wirst du eingeladen, Kontrolle abzugeben und dich dem Fluss des Lebens hinzugeben. ' +
      'Was du krampfhaft festhältst, wird dir erst dann zufließen, wenn du es loslässt. ' +
      'Paradoxerweise ist die größte Tat dieses Jahres das Nicht-Tun. ' +
      'Opfer, die du freiwillig bringst -- Zeit, Ego, alte Glaubenssätze -- werden reichlich belohnt. ' +
      'Deine gewohnte Sichtweise auf die Welt darf sich in diesem Jahr grundlegend wandeln. ' +
      'Was du für ein Problem hieltest, entpuppt sich als Geschenk. Was du für Schwäche hieltest, wird zur Quelle deiner tiefsten Weisheit. ' +
      'Erlaube dir, in der Schwebe zu sein, ohne sofort Antworten zu brauchen.',
    impulse: [
      'Lass eine festgefahrene Überzeugung los, die dich begrenzt. Frage dich: Was würde sich ändern, wenn das Gegenteil von dem wahr wäre, was ich glaube?',
      'Betrachte ein aktuelles Problem aus einer völlig neuen Perspektive. Frage jemanden um Rat, der ganz anders denkt als du -- die Lösung liegt oft dort, wo du nicht suchst.',
      'Übe dich in Geduld und Hingabe an den Prozess. Nicht alles muss sofort gelöst werden. Manchmal ist es die größte Weisheit, geduldig abzuwarten und dem Leben zu vertrauen.',
    ],
  },
  {
    arcanaId: 13,
    titel: 'Die Energie der Transformatorin',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Todes -- ein Jahr der tiefgreifenden Transformation. ' +
      'Altes muss sterben, damit Neues geboren werden kann. Umarme den Wandel mit offenen Armen. ' +
      'Die Tod-Karte ist nicht das Ende, sondern der kraftvollste Neubeginn, den die Tarot-Weisheit kennt. ' +
      'In diesem Jahr werden Dinge enden -- Beziehungen, Gewohnheiten, Lebensabschnitte, Identitäten -- ' +
      'und so schmerzhaft diese Abschiede auch sein mögen, sie schaffen Raum für das, was kommen will. ' +
      'Du kannst diesen Prozess nicht aufhalten, aber du kannst ihm mit Bewusstheit und Würde begegnen. ' +
      'Alles, was du loslässt, war einmal Teil deines Weges, und es verdient Dankbarkeit, auch im Abschied. ' +
      'Die Raupe muss sich vollständig auflösen, bevor der Schmetterling entstehen kann. ' +
      'In diesem Jahr bist du im Kokon. Es ist dunkel, eng und ungemütlich -- aber etwas Wunderbares entsteht. ' +
      'Vertraue dem Sterbeprozess des Alten, denn er ist die Geburtswehe des Neuen. Du wirst transformiert aus dieser Zeit hervorgehen.',
    impulse: [
      'Beende bewusst etwas, das nicht mehr deinem höchsten Wohl dient -- eine Gewohnheit, eine Verpflichtung, eine Beziehung. Jedes Ende ist der Same eines neuen Anfangs.',
      'Reinige und entrümple dein Leben auf allen Ebenen: dein Zuhause, deinen Kalender, deine Gedanken. Was keinen Platz mehr verdient, muss gehen, damit Neues Raum hat.',
      'Begrüße den Neuanfang nach dem Abschied mit einem bewussten Ritual. Zünde eine Kerze an, schreibe einen Brief an dein neues Ich, pflanze einen Samen -- markiere den Übergang.',
    ],
  },
  {
    arcanaId: 14,
    titel: 'Die Energie der Alchemistin',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen der Mäßigung -- ein Jahr der Balance und Integration. ' +
      'Finde den goldenen Mittelweg und verwandle Gegensätze in Harmonie. ' +
      'Die Mäßigung ist die große Alchemistin des Tarots -- sie mischt Wasser zwischen zwei Kelchen, ' +
      'geduldig, achtsam, in perfektem Gleichgewicht. In diesem Jahr bist du eingeladen, ' +
      'die verschiedenen Aspekte deines Lebens in einen harmonischen Fluss zu bringen. ' +
      'Arbeit und Ruhe, Geben und Nehmen, Vernunft und Gefühl -- alles darf in dir zusammenfließen, ' +
      'ohne dass eines das andere dominiert. ' +
      'Heilung geschieht in diesem Jahr auf eine stille, stetige Art. ' +
      'Alte Wunden, die du für unheilbar hieltest, beginnen sich zu schließen, wenn du ihnen die richtige Mischung aus Zeit, ' +
      'Aufmerksamkeit und Selbstmitgefühl schenkst. ' +
      'Die Kunst der Mäßigung liegt nicht in Perfektion, sondern im ständigen, liebevollen Nachjustieren. ' +
      'Du bist die Alchemistin deines Lebens -- mische die Zutaten mit Geduld und Vertrauen, und es entsteht Gold.',
    impulse: [
      'Bringe zwei Lebensbereiche in Balance, die gerade in einem Ungleichgewicht sind -- vielleicht Arbeit und Privatleben, Körper und Geist, oder Geben und Empfangen.',
      'Übe Geduld bei wichtigen Prozessen und vertraue darauf, dass gute Dinge Zeit brauchen. Heilung, Wachstum und Transformation lassen sich nicht beschleunigen.',
      'Mische Altes und Neues zu etwas Einzigartigem. Nimm die Weisheit deiner Vergangenheit und die Visionen deiner Zukunft und erschaffe daraus etwas, das nur du kreieren kannst.',
    ],
  },
  {
    arcanaId: 15,
    titel: 'Die Energie der Befreierin',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Teufels -- ein Jahr der Befreiung und Schattenarbeit. ' +
      'Schau deinen Fesseln ins Auge und sprenge sie. Wahre Freiheit liegt jenseits der Angst. ' +
      'Der Teufel im Tarot ist nicht das Böse -- er ist der Spiegel, der dir zeigt, wo du dich selbst gefangen hältst. ' +
      'In diesem Jahr wirst du konfrontiert mit deinen Abhängigkeiten, deinen Süchten, deinen Mustern der Selbstsabotage. ' +
      'Es geht nicht darum, perfekt zu werden, sondern radikal ehrlich mit dir selbst zu sein. ' +
      'Wo gibst du deine Macht ab? Welche Ängste halten dich in goldenen Käfigen gefangen? ' +
      'Welche Genüsse sind zur Flucht geworden statt zur Freude? ' +
      'Die Ketten, die der Teufel zeigt, sind immer lose genug, um sie abzustreifen -- wenn du den Mut dazu hast. ' +
      'Dieses Jahr schenkt dir die Kraft, deine dunkelsten Ecken auszuleuchten und dort Freiheit zu finden, wo du sie am wenigsten erwartet hast. ' +
      'Schattenarbeit ist Liebesarbeit. Jeder Schatten, dem du begegnest, wird zum Verbündeten.',
    impulse: [
      'Erkenne eine Abhängigkeit oder ein ungesundes Muster und löse dich Schritt für Schritt daraus. Das kann eine Substanz sein, eine Person, ein Gedankenmuster oder eine Gewohnheit.',
      'Stelle dich deinem größten Schatten -- jenem Teil von dir, den du lieber versteckst. Schreib ihm einen Brief, sprich mit einem Therapeuten, oder sitze still mit ihm in Meditation.',
      'Finde Freiheit in radikaler Ehrlichkeit. Sprich eine unbequeme Wahrheit aus, die du lange unterdrückt hast -- die Wahrheit mag wehtun, aber sie befreit.',
    ],
  },
  {
    arcanaId: 16,
    titel: 'Die Energie der Erwachenden',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Turms -- ein Jahr des Umbruchs und der Erneuerung. ' +
      'Falsche Strukturen fallen, und was danach bleibt, ist authentisch und unzerstörbar. ' +
      'Der Turm ist die dramatischste Karte des Tarots, aber auch die ehrlichste. ' +
      'Blitz und Donner zertrümmern, was auf Sand gebaut war -- Illusionen, falsche Sicherheiten, Lebenslügen. ' +
      'In diesem Jahr kann es Momente geben, die sich anfühlen wie ein Erdbeben. ' +
      'Alles, was du für stabil hieltest, kann ins Wanken geraten. Aber schau genau hin: ' +
      'Was wirklich echt ist, hält stand. Was fällt, musste fallen. ' +
      'Der Turm zerstört nicht dein wahres Selbst -- er befreit es von allem, was es verdeckt hat. ' +
      'Nach dem Sturm liegt eine erstaunliche Klarheit in der Luft. Du siehst die Welt mit neuen Augen, ' +
      'befreit von Selbsttäuschung und falschen Kompromissen. ' +
      'Baue auf den Trümmern etwas Neues, etwas, das auf dem Felsen deiner Wahrheit steht. ' +
      'Der Turm mag erschütternd sein, aber er ist auch der kraftvollste Befreier.',
    impulse: [
      'Lass eine falsche Sicherheit bewusst los, bevor das Leben sie dir nimmt. Was in deinem Leben steht auf wackeligem Fundament? Hab den Mut, es selbst einzureißen.',
      'Baue auf den Trümmern etwas Echtes und Dauerhaftes auf. Nutze die Klarheit nach dem Umbruch, um ein neues Fundament zu legen, das auf deiner tiefsten Wahrheit steht.',
      'Vertraue dem Prozess der Zerstörung und Erneuerung. Was sich gerade anfühlt wie das Ende der Welt, ist in Wahrheit der Beginn eines authentischeren Lebens.',
    ],
  },
  {
    arcanaId: 17,
    titel: 'Die Energie der Hoffnungsträgerin',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Sterns -- ein Jahr der Hoffnung und Inspiration. ' +
      'Nach dem Sturm kommt der Stern, und sein mildes Licht heilt alles, was zerbrochen war. ' +
      'Lass dein Licht scheinen und heile, was geheilt werden muss -- in dir und um dich herum. ' +
      'Die Stern-Karte zeigt eine nackte Frau, die Wasser in einen Fluss und auf die Erde gießt -- ' +
      'ein Bild der reinen Hingabe, des Vertrauens und der kosmischen Verbindung. ' +
      'In diesem Jahr bist du ein Kanal für heilende Energie. ' +
      'Deine bloße Anwesenheit kann andere trösten, inspirieren und ermutigen. ' +
      'Erlaube dir, verletzlich und offen zu sein, denn genau darin liegt deine größte Strahlkraft. ' +
      'Der Stern erinnert dich daran, dass es immer Hoffnung gibt, egal wie dunkel die Nacht war. ' +
      'Deine Träume sind nicht naiv -- sie sind die Sterne, nach denen du navigierst. ' +
      'Halte an ihnen fest, auch wenn die Welt dir sagt, du sollst realistisch sein. ' +
      'Dieses Jahr gehört den Träumern, den Heilern und den stillen Lichtträgern dieser Welt.',
    impulse: [
      'Erlaube dir zu träumen und zu hoffen, ohne Einschränkung. Schreibe deine kühnsten Visionen auf und hänge sie dorthin, wo du sie jeden Tag siehst -- deine Träume verdienen Sichtbarkeit.',
      'Teile dein Licht mit der Welt in deiner ganz eigenen Art -- ob durch ein freundliches Wort, eine helfende Hand oder das Teilen deiner Gabe. Du bist ein Stern für andere.',
      'Heile eine alte Wunde, die du lange mit dir trägst. Sei sanft mit dir selbst und erlaube dir, professionelle Hilfe anzunehmen. Heilung ist kein Zeichen von Schwäche, sondern von Stärke.',
    ],
  },
  {
    arcanaId: 18,
    titel: 'Die Energie der Traumwandlerin',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Mondes -- ein Jahr der Intuition und der Schattenreise. ' +
      'Tauche in dein Unbewusstes ein und finde Schätze im Dunkeln, die im Tageslicht verborgen bleiben. ' +
      'Der Mond beleuchtet nicht wie die Sonne -- er enthüllt durch Schatten, Spiegelungen und Andeutungen. ' +
      'In diesem Jahr werden deine Träume besonders lebendig und bedeutungsvoll. ' +
      'Achte auf sie, denn sie tragen Botschaften deiner Seele, die dein Wachbewusstsein nicht empfangen kann. ' +
      'Die Grenze zwischen Angst und Intuition kann verschwimmen, und deine Aufgabe ist es, ' +
      'die eine von der anderen unterscheiden zu lernen. ' +
      'Angst zieht zusammen, Intuition öffnet. Angst schreit, Intuition flüstert. ' +
      'Lerne den Unterschied, und du gewinnst einen der wertvollsten inneren Kompasse, die es gibt. ' +
      'Das Dunkle ist nicht dein Feind -- es ist der Schoß, aus dem alles Neue geboren wird. ' +
      'Hab den Mut, durch die Nacht deiner Seele zu wandern, denn am Ende des Pfades wartet das Licht der Sonne.',
    impulse: [
      'Achte auf deine Träume und Visionen -- führe ein Nachtbuch neben deinem Bett und schreibe sofort nach dem Aufwachen auf, was du geträumt hast. Muster werden sichtbar.',
      'Unterscheide zwischen Angst und Intuition, indem du in deinen Körper hineinspürst. Angst verkrampft, Intuition fließt. Übe diese Unterscheidung in kleinen, alltäglichen Momenten.',
      'Erkunde dein Unbewusstes mit Mut und Neugier -- durch kreatives Schreiben, Traumarbeit, Therapie oder Meditation. Die größten Schätze liegen in den Tiefen, die du noch nicht erkundet hast.',
    ],
  },
  {
    arcanaId: 19,
    titel: 'Die Energie der Strahlenden',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen der Sonne -- ein Jahr der Freude und des Erfolgs. ' +
      'Das Licht scheint auf dich, und alles, was du anfasst, hat die Kraft zu gedeihen. ' +
      'Genieße die Wärme und teile deine Freude großzügig mit allen, die dir begegnen. ' +
      'Die Sonne ist die strahlendste Karte im Tarot, und ihre Energie durchflutet dein gesamtes Jahr. ' +
      'Nach dunklen Zeiten und herausfordernden Phasen schenkt dir das Universum nun eine Zeit der Ernte, ' +
      'des Feierns und der ungehemmten Lebensfreude. ' +
      'Deine Vitalität ist in diesem Jahr außergewöhnlich hoch -- nutze diese Energie, um Dinge zu tun, ' +
      'die dir wirklich am Herzen liegen. Spiel, lache, tanze, liebe! ' +
      'Die Sonne vertreibt jeden Schatten, und in diesem Jahr darf auch das letzte bisschen Dunkelheit dem Licht weichen. ' +
      'Du strahlst eine natürliche Anziehungskraft aus, die andere Menschen in dein Leben zieht. ' +
      'Nutze diese Magie, um Gemeinschaft zu schaffen, Freude zu verbreiten und das Leben in all seiner Pracht zu feiern. ' +
      'Dies ist dein Jahr. Strahle!',
    impulse: [
      'Feiere dich selbst und deine Erfolge mit einem bewussten Ritual. Du hast so viel erreicht -- nimm dir Zeit, innezuhalten und all das Gute in deinem Leben anzuerkennen.',
      'Teile deine Freude großzügig mit anderen, denn Freude, die geteilt wird, vervielfacht sich. Organisiere ein Fest, verschicke Dankesbriefe, überrasche jemanden mit Herzenswärme.',
      'Lebe deine Vitalität voll aus -- bewege deinen Körper, tanze im Regen, lache aus vollem Herzen. Deine Lebensenergie ist in diesem Jahr ein Geschenk, das genutzt werden will.',
    ],
  },
  {
    arcanaId: 20,
    titel: 'Die Energie der Berufenen',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen des Gerichts -- ein Jahr der Berufung und Erweckung. ' +
      'Der Ruf deiner Seele wird lauter, und du kannst ihn nicht länger ignorieren. ' +
      'Höre hin und folge deiner höheren Bestimmung, auch wenn der Weg unbekannt und ungesichert ist. ' +
      'Das Gericht zeigt Engel, die mit Posaunen die Toten erwecken -- ' +
      'und in diesem Jahr werden auch in dir Teile erweckt, die lange geschlummert haben. ' +
      'Talente, die du vergessen hast. Träume, die du begraben hast. Eine Berufung, die du nicht hören wolltest. ' +
      'Jetzt ist die Zeit des Erwachens. Die kosmische Posaune erklingt, und sie ruft genau dich. ' +
      'Dieses Jahr lädt dich auch zur Vergebung ein -- dir selbst und anderen. ' +
      'Alte Schuld, die du mit dir trägst, darf jetzt losgelassen werden. ' +
      'Du bist nicht die Summe deiner Fehler, sondern die Summe deiner Entscheidungen, es besser zu machen. ' +
      'Vergib, was vergeben werden muss, und befreie dich für den nächsten großen Abschnitt deines Lebens. ' +
      'Die Transformation, die dieses Jahr bringt, ist endgültig und tiefgreifend.',
    impulse: [
      'Höre auf den Ruf deiner Seele -- was ruft dich immer wieder, auch wenn du es ignorierst? Was fühlt sich an wie eine tiefe innere Wahrheit? Folge diesem Ruf, Schritt für Schritt.',
      'Vergib dir und anderen für vergangene Fehler und Verletzungen. Schreibe einen Vergebungsbrief -- du musst ihn nicht abschicken, aber schreibe ihn mit ganzem Herzen.',
      'Erwecke ein schlummerndes Talent oder einen vergessenen Traum zum Leben. Was wolltest du als Kind werden? Was begeistert dich im Stillen? Gib ihm endlich Raum.',
    ],
  },
  {
    arcanaId: 21,
    titel: 'Die Energie der Vollendeten',
    beschreibung:
      'Dieses Jahr steht unter dem Zeichen der Welt -- ein Jahr der Vollendung und Integration. ' +
      'Ein großer Zyklus schließt sich, und du stehst im Zentrum deines Universums, umgeben von allem, was du geworden bist. ' +
      'Tanze im kosmischen Kreis und feiere alles, was du erlebt, gelernt und überwunden hast. ' +
      'Die Welt-Karte ist die letzte Karte der Großen Arkana, und sie krönt den gesamten Weg. ' +
      'In diesem Jahr erntest du die Früchte eines langen Prozesses. Projekte kommen zum Abschluss, ' +
      'Kreise schließen sich, und Puzzleteile fügen sich zu einem stimmigen Bild zusammen. ' +
      'Du fühlst eine tiefe Zufriedenheit und Ganzheit, die von innen kommt. ' +
      'Gleichzeitig ist die Welt-Karte auch ein Tor zum nächsten Zyklus. ' +
      'Jede Vollendung trägt bereits den Keim des nächsten Neubeginns in sich. ' +
      'Genieße diesen Moment des Innehaltens, bevor das Rad sich erneut dreht. ' +
      'Du bist nicht mehr die Person, die du am Anfang dieses Zyklus warst -- du bist gewachsen, gereift und zu dir selbst geworden. ' +
      'Feiere das. Du hast es dir verdient.',
    impulse: [
      'Bringe ein großes Projekt oder einen wichtigen Lebensabschnitt bewusst zum Abschluss. Würdige, was du geschaffen hast, und erlaube dir, stolz darauf zu sein.',
      'Integriere alle Erfahrungen zu einem Ganzen -- die schönen und die schmerzhaften. Jede Erfahrung hat dich zu der Person gemacht, die du heute bist. Danke ihnen allen.',
      'Feiere deine Reise und bereite den neuen Zyklus vor. Halte inne, blicke zurück auf den Weg und dann nach vorn auf den Horizont. Das nächste Abenteuer wartet schon auf dich.',
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
