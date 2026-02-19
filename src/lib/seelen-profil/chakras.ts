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
  /** Rich description (~150+ words) */
  beschreibung: string;
  /** Guided meditation (~100 words) */
  meditation: string;
  /** Single powerful affirmation */
  affirmation: string;
  /** Signs of blockage (~80 words) */
  blockade: string;
  /** Healing suggestions (~80 words) */
  heilung: string;
}

export const chakras: Record<string, ChakraInfo> = {
  wurzel: {
    id: 'wurzel',
    name: 'Wurzelchakra',
    farbe: '#EF4444',
    position: 'Basis der Wirbelsäule',
    thema: 'Sicherheit & Erdung',
    beschreibung:
      'Das Wurzelchakra ist dein tiefstes Fundament -- der Ort in dir, an dem sich entscheidet, ob du dich in dieser Welt willkommen fühlst oder ob du innerlich auf der Flucht bist. Es sitzt an der Basis deiner Wirbelsäule und ist deine energetische Wurzel, die dich mit der Erde verbindet, mit deiner Herkunft, mit allem, was dich trägt und nährt. Wenn du als Kind erfahren hast, dass du sicher bist, dass jemand da ist, der dich hält, dann hat sich dieses Chakra in dir auf eine tiefe, selbstverständliche Weise verankert. Doch viele von uns tragen Wunden in diesem Bereich -- Erfahrungen von Verlassenwerden, von Unsicherheit, von einem Boden, der unter den Füßen weggezogen wurde. Dann spürst du es als dieses leise, nagende Gefühl: Wo gehöre ich hin? Bin ich hier richtig? Darf ich bleiben? Dein Wurzelchakra ist der Schlüssel zu deinem Urvertrauen. Es geht hier nicht um großen Mut oder heldenhafte Taten. Es geht um etwas viel Grundlegenderes: um das stille Wissen, dass du getragen bist. Dass die Erde dich hält. Dass dein Körper dein Zuhause ist. Wenn dieses Chakra in seiner Kraft steht, dann brauchst du die Welt nicht zu kontrollieren. Du kannst atmen, loslassen und einfach da sein. Du stehst fest, nicht weil du starr bist, sondern weil du in dir selbst verwurzelt bist.',
    meditation:
      'Schließe deine Augen und spüre den Kontakt deiner Füße mit dem Boden. Stell dir vor, wie aus deinen Fußsohlen warme, leuchtend rote Wurzeln in die Erde hineinwachsen -- tief, tief hinab, bis zum glühenden Herzen der Erde. Mit jedem Einatmen steigt warme, nährende Energie durch deine Wurzeln empor. Sie füllt deine Beine, dein Becken, deinen ganzen Körper mit einem Gefühl von Schwere und Geborgenheit. Du bist gehalten. Du bist sicher. Sag innerlich zu dir: Ich darf hier sein. Die Erde trägt mich. Bleib einige Atemzüge in diesem Gefühl und lass es sich in jeder Zelle deines Körpers verankern.',
    affirmation:
      'Ich bin sicher und getragen in dieser Welt -- die Erde hält mich, und ich gehöre hierher.',
    blockade:
      'Wenn dein Wurzelchakra blockiert ist, lebst du in einem ständigen Zustand innerer Alarmbereitschaft. Du machst dir übermäßig Sorgen um Geld, Gesundheit oder deine Existenz. Dein Körper fühlt sich an wie ein unsicherer Ort -- vielleicht hast du Probleme im unteren Rücken, in den Beinen oder mit deiner Verdauung. Du fühlst dich entwurzelt, rastlos, nirgendwo wirklich zuhause. Vielleicht klammerst du dich an materielle Sicherheiten oder an Menschen, weil du innerlich nicht glaubst, dass du allein bestehen kannst.',
    heilung:
      'Geh barfuß über Gras oder Erde und spüre bewusst den Boden unter dir. Arbeite mit roten Steinen wie Rotem Jaspis, Granat oder Hämatit -- halte sie in der Hand oder lege sie auf dein Becken. Iss erdende Nahrung: Wurzelgemüse, Rote Bete, Kartoffeln, warme Eintöpfe. Trage die Farbe Rot. Praktiziere Yoga-Haltungen wie den Krieger oder die Berghaltung. Rhythmische Bewegung -- Tanzen, Stampfen, Trommeln -- bringt die Energie dieses Chakras zurück in den Fluss.',
  },
  sakral: {
    id: 'sakral',
    name: 'Sakralchakra',
    farbe: '#F97316',
    position: 'Unterbauch',
    thema: 'Kreativität & Sinnlichkeit',
    beschreibung:
      'Dein Sakralchakra ist der Sitz deiner Lebendigkeit. Hier, in deinem Unterbauch, pulsiert die Energie, die dich lebendig macht -- deine Fähigkeit zu fühlen, zu genießen, zu erschaffen und dich dem Fluss des Lebens hinzugeben. Dieses Chakra ist untrennbar mit dem Element Wasser verbunden, und wie Wasser will es fließen. Es will sich bewegen, verändern, spielen. Wenn du als Kind gelernt hast, dass Freude erlaubt ist, dass dein Körper etwas Schönes ist, dass Gefühle willkommen sind, dann trägt dieses Energiezentrum eine natürliche Leichtigkeit in sich. Doch viele von uns haben Botschaften empfangen, die diesen Fluss gestört haben: Sei nicht so wild. Sei nicht so laut. Schäm dich. Kontrolliere dich. Und dann beginnt sich dieses wundervolle Zentrum zusammenzuziehen. Du verlierst den Zugang zu deiner Lust am Leben, zu deiner Kreativität, zu deinem Gespür für das, was sich gut anfühlt. Dein Sakralchakra erinnert dich daran, dass du nicht nur ein denkendes Wesen bist. Du bist ein fühlendes, sinnliches, schöpferisches Geschöpf. Du darfst Freude empfinden. Du darfst Schönheit erschaffen. Du darfst dich in der Sinnlichkeit des Augenblicks verlieren, ohne dafür eine Rechtfertigung zu brauchen. In der Heilung dieses Chakras liegt die Rückkehr zu einer Lebendigkeit, die aus der Tiefe deines Bauches kommt.',
    meditation:
      'Schließe deine Augen und lege beide Hände sanft auf deinen Unterbauch. Stell dir dort ein warmes, orangefarbenes Licht vor, das sich wie flüssiges Gold langsam ausbreitet. Es pulsiert sanft im Rhythmus deines Atems. Mit jedem Einatmen wird es heller, wärmer, lebendiger. Stell dir vor, wie dieses Licht alles Starre in dir auflöst -- wie Eis, das in der Sonne schmilzt. Deine Gefühle dürfen wieder fließen. Flüstere innerlich: Ich erlaube mir zu fühlen. Ich erlaube mir zu genießen. Spüre, wie sich Weichheit und Wärme in deinem Bauch ausbreiten.',
    affirmation:
      'Ich erlaube mir, das Leben in seiner vollen Sinnlichkeit zu genießen -- meine Gefühle sind meine Kraft.',
    blockade:
      'Ein blockiertes Sakralchakra zeigt sich als emotionale Taubheit oder im Gegenteil als überwältigende Gefühlsstürme, die du nicht einordnen kannst. Du fühlst dich kreativ ausgetrocknet, lustlos, abgeschnitten von Freude und Genuss. Intimität fällt dir schwer -- sei es körperlich oder emotional. Möglicherweise trägst du Schuld- oder Schamgefühle rund um Sexualität und Verlangen. Dein Körper fühlt sich steif an, du hast Probleme im Bereich der Hüften, des Beckens oder der Blase.',
    heilung:
      'Bringe Bewegung in deine Hüften: Bauchtanz, freies Tanzen, Hüftkreise oder fließende Yoga-Sequenzen. Arbeite mit orangefarbenen Steinen wie Karneol, Orangencalcit oder Mondstein. Nimm lange, warme Bäder mit ätherischen Ölen wie Ylang-Ylang, Sandelholz oder Orange. Iss saftige, orangefarbene Früchte: Mangos, Orangen, Aprikosen. Erlaube dir kreative Ausdrucksformen ohne Ergebnis -- male, schreibe oder töpfere einfach um des Tuns willen. Umgib dich mit der Farbe Orange.',
  },
  solarplexus: {
    id: 'solarplexus',
    name: 'Solarplexus-Chakra',
    farbe: '#EAB308',
    position: 'Oberbauch',
    thema: 'Willenskraft & Selbstbewusstsein',
    beschreibung:
      'In deinem Solarplexus-Chakra brennt das Feuer deiner Identität. Hier, in deinem Oberbauch, im Bereich des Magens, liegt das Energiezentrum, das darüber entscheidet, wie du dich selbst siehst und wie du dich in der Welt behauptest. Es ist dein inneres Feuer, deine persönliche Sonne. Dieses Chakra fragt: Wer bin ich? Was will ich? Was bin ich wert? Es ist der Ort deiner Willenskraft, deines Selbstbewusstseins und deines inneren Kompasses. Wenn du gelernt hast, dass deine Meinung zählt, dass deine Entscheidungen respektiert werden, dann strahlt dieses Zentrum mit einer ruhigen, warmen Kraft. Doch wenn du in deinem Leben oft die Erfahrung gemacht hast, dass andere über dich bestimmen, dass dein Nein nicht gehört wird, dass du funktionieren musst statt zu leben, dann ist dieses Feuer vielleicht erloschen oder es lodert unkontrolliert als Wut und Kontrollbedürfnis. Die wahre Kraft des Solarplexus ist weder Unterwerfung noch Dominanz. Sie ist eine stille, souveräne Gewissheit: Ich weiß, wer ich bin. Ich darf meinen Raum einnehmen. Ich muss niemanden um Erlaubnis bitten, ich selbst zu sein. Wenn du dieses Chakra heilst, findest du zurück zu einem Selbstwertgefühl, das nicht von außen bestätigt werden muss. Du wirst zum Schöpfer deines eigenen Lebens.',
    meditation:
      'Schließe deine Augen und richte deine Aufmerksamkeit auf den Bereich deines Magens. Stell dir dort eine goldene Sonne vor -- warm, strahlend, voller Kraft. Mit jedem Atemzug wird sie größer und heller. Ihr Licht erfüllt deinen gesamten Oberkörper mit Wärme und Stärke. Spüre, wie du dich aufrichtest, innerlich und äußerlich. Du brauchst dich nicht klein zu machen. Sag innerlich: Ich bin genug. Meine Kraft kommt von innen. Niemand kann mir mein Licht nehmen. Lass die goldene Sonne in dir leuchten und spüre ihre unwandelbare Kraft.',
    affirmation:
      'Ich bin die Schöpferin meines Lebens -- mein inneres Feuer leuchtet klar und unerschütterlich.',
    blockade:
      'Wenn dein Solarplexus-Chakra blockiert ist, fühlst du dich machtlos, klein und den Umständen ausgeliefert. Du hast Schwierigkeiten, Entscheidungen zu treffen, und suchst ständig nach Bestätigung von außen. Dein Selbstwertgefühl schwankt mit der Meinung anderer. Körperlich zeigt es sich als Magenprobleme, Verdauungsstörungen oder ein ständiges Engegefühl im Oberbauch. Vielleicht fällt es dir schwer, Nein zu sagen, oder du kompensierst deine Unsicherheit mit Kontrollverhalten und Perfektionismus.',
    heilung:
      'Stärke dein inneres Feuer durch bewusste Entscheidungen -- übe täglich, kleine Dinge ohne Zögern zu entscheiden. Arbeite mit gelben Steinen wie Citrin, Tigerauge oder gelbem Calcit. Praktiziere Atemübungen wie Kapalabhati, die dein Bauchfeuer anfachen. Iss wärmende, gelbe Nahrungsmittel: Ingwer, Kurkuma, Bananen, Sonnenblumenkerne. Bewege dich in der Sonne. Kampfkünste und Core-Übungen stärken diesen Bereich. Trage Gelb und umgib dich mit Sonnenlicht.',
  },
  herz: {
    id: 'herz',
    name: 'Herzchakra',
    farbe: '#22C55E',
    position: 'Herzzentrum',
    thema: 'Liebe & Mitgefühl',
    beschreibung:
      'Dein Herzchakra ist das Zentrum deines gesamten Energiesystems -- die heilige Mitte, in der sich Himmel und Erde begegnen, in der sich dein menschliches Erleben und dein spirituelles Wesen berühren. Es liegt in der Mitte deiner Brust und ist weit mehr als nur der Sitz romantischer Liebe. Es ist der Ort, an dem du dich mit allem verbindest, was lebt. Hier entscheidet sich, ob du dein Herz offen halten kannst oder ob du es hinter Mauern verschließt, die du irgendwann zum Schutz errichtet hast. Und diese Mauern -- sie waren einmal nötig. Vielleicht hat dich jemand verletzt, verraten, verlassen. Vielleicht hast du gelernt, dass Liebe an Bedingungen geknüpft ist, dass du sie verdienen musst, dass sie dir jederzeit wieder entzogen werden kann. Dann hat dein Herz gelernt, sich zusammenzuziehen. Sich zu panzern. Und dieser Panzer hat dich geschützt, aber er hat dich auch einsam gemacht. Die Arbeit mit deinem Herzchakra ist vielleicht die mutigste Reise, die du antreten kannst. Es geht nicht darum, naiv zu sein oder keine Grenzen zu haben. Es geht darum, wieder zu spüren. Wieder zu vertrauen. Dir selbst die Liebe zu geben, die du vielleicht nie bekommen hast. Und von dort aus -- aus einem Herzen, das sich selbst hält -- Liebe in die Welt zu tragen, die nichts verlangt, weil sie aus der Fülle kommt.',
    meditation:
      'Schließe deine Augen und lege deine rechte Hand auf dein Herz. Spüre den Herzschlag unter deiner Hand -- diesen treuen Rhythmus, der dich seit deinem ersten Atemzug begleitet. Stell dir vor, wie ein smaragdgrünes Licht in deinem Herzzentrum erblüht, sanft und warm wie das erste Grün im Frühling. Mit jedem Atemzug wird es weiter, bis es deinen ganzen Brustkorb erfüllt. Sag innerlich: Mein Herz ist offen. Ich bin Liebe. Ich empfange Liebe. Spüre, wie sich alte Mauern sanft auflösen. Du bist sicher, wenn du liebst.',
    affirmation:
      'Mein Herz ist offen und mutig -- ich gebe und empfange Liebe frei und ohne Angst.',
    blockade:
      'Ein blockiertes Herzchakra zeigt sich als Verschlossenheit, Bitterkeit oder die Unfähigkeit, echte Nähe zuzulassen. Du hältst Menschen auf Abstand, obwohl du dich nach Verbindung sehnst. Vergebung fällt dir schwer -- dir selbst oder anderen gegenüber. Du trägst alten Schmerz mit dir, der sich wie eine Schwere auf der Brust anfühlt. Körperlich kann es sich als Enge im Brustkorb, Atemprobleme, Herzrasen oder Spannungen in den Schultern äußern. Du gibst vielleicht zu viel und empfängst zu wenig.',
    heilung:
      'Verbringe Zeit in der Natur, besonders unter grünen Bäumen. Arbeite mit grünen und rosa Steinen: Rosenquarz für Selbstliebe, Aventurin für Herzöffnung, Malachit für emotionale Heilung. Praktiziere Herzöffner-Yoga wie Kamelpose, Kobra oder sanfte Rückbeugen. Iss grüne Nahrung: Spinat, Grünkohl, Avocado, Matcha. Schreibe Briefe der Vergebung -- auch an dich selbst. Umarmungen, echte Berührung und das bewusste Aussprechen von Dankbarkeit nähren dieses Chakra zutiefst.',
  },
  hals: {
    id: 'hals',
    name: 'Halschakra',
    farbe: '#06B6D4',
    position: 'Kehlkopf',
    thema: 'Ausdruck & Wahrheit',
    beschreibung:
      'Dein Halschakra ist der Ort deiner Stimme -- und mit Stimme meine ich weit mehr als das, was aus deinem Mund kommt. Ich meine deine Wahrheit. Deinen authentischen Ausdruck. Die Art, wie du dich der Welt zeigst, so wie du wirklich bist. Dieses Energiezentrum sitzt an deinem Kehlkopf, dort wo sich so oft ein Kloß bildet, wenn du etwas Wichtiges sagen willst, es aber nicht wagst. Jedes unausgesprochene Wort, jede heruntergeschluckte Wahrheit, jedes Mal, wenn du geschwiegen hast, obwohl deine Seele schreien wollte -- all das hat sich hier gespeichert. Vielleicht hast du früh gelernt, dass deine Worte nicht willkommen sind. Dass es sicherer ist zu schweigen. Dass Anpassung mehr belohnt wird als Aufrichtigkeit. Und so hast du gelernt, dich zu verbiegen, deine Wahrheit zu verkleinern, die Dinge zu sagen, die andere hören wollen, statt das, was in dir lebt. Die Heilung deines Halschakras ist ein Akt tiefen Mutes. Es bedeutet, deine Stimme zurückzuerobern. Nicht als Waffe, sondern als Instrument deiner Seele. Es bedeutet zu lernen, dass deine Wahrheit es wert ist, gehört zu werden. Dass du sprechen darfst, singen darfst, Raum einnehmen darfst mit dem, was du zu sagen hast. Es geht auch um das Zuhören -- dir selbst zuzuhören, bevor du sprichst, und dem Leben zuzuhören mit einem offenen, empfänglichen Herzen.',
    meditation:
      'Schließe deine Augen und bringe deine Aufmerksamkeit zu deinem Hals. Stell dir ein klares, türkisfarbenes Licht vor, das deinen gesamten Halsbereich umhüllt wie ein schützender Schleier aus Licht. Summe einen sanften Ton und spüre die Vibration in deiner Kehle. Lass den Ton lauter werden, freier. Stell dir vor, wie sich mit jeder Schwingung alte Blockaden lösen. Deine Wahrheit steigt auf wie klares Wasser aus einer Quelle. Sag innerlich: Meine Stimme ist wertvoll. Meine Wahrheit darf gehört werden. Atme tief und frei.',
    affirmation:
      'Ich spreche meine Wahrheit mit Klarheit und Liebe -- meine Stimme ist das Instrument meiner Seele.',
    blockade:
      'Ein blockiertes Halschakra zeigt sich als Angst vor dem Sprechen, ständiges Heruntererschlucken deiner Meinung oder das Gefühl, nicht gehört zu werden. Du sagst Ja, wenn du Nein meinst. Du passt deine Worte an, um Konflikte zu vermeiden. Körperlich äußert es sich als Halsschmerzen, Schilddrüsenprobleme, Nackenverspannungen oder häufiges Räuspern. Manchmal zeigt sich auch das Gegenteil: Du redest ununterbrochen, ohne wirklich etwas von Bedeutung zu sagen, weil die Verbindung zur inneren Wahrheit fehlt.',
    heilung:
      'Singe -- egal wie. Unter der Dusche, im Auto, beim Spazierengehen. Summen und Tönen sind kraftvolle Heilmittel für dieses Chakra. Arbeite mit blauen Steinen wie Blauem Chalcedon, Aquamarin oder Lapislazuli. Trinke warme Kräutertees mit Salbei oder Kamille. Schreibe deine Gedanken auf: Journaling ist eine wunderbare Praxis, um deine innere Stimme wiederzufinden. Übe bewusst, deine Bedürfnisse auszusprechen. Trage die Farbe Blau. Auch Mantren und das bewusste Rezitieren von Texten stärken dieses Zentrum.',
  },
  stirn: {
    id: 'stirn',
    name: 'Stirnchakra',
    farbe: '#6366F1',
    position: 'Zwischen den Augenbrauen',
    thema: 'Intuition & Erkenntnis',
    beschreibung:
      'Dein Stirnchakra -- das dritte Auge -- ist das Tor zu einer Wahrnehmung, die über das Sichtbare hinausgeht. Es sitzt zwischen deinen Augenbrauen und ist das Energiezentrum deiner Intuition, deiner inneren Bilder und deiner Fähigkeit, hinter die Oberfläche der Dinge zu schauen. In einer Welt, die uns beibringt, nur dem zu vertrauen, was wir mit den Augen sehen und mit dem Verstand beweisen können, ist dieses Chakra oft das am meisten vernachlässigte. Und doch hast du es schon unzählige Male gespürt: dieses Wissen, das aus dem Nichts kommt. Dieses Gefühl, das dir sagt, dass etwas nicht stimmt, bevor dein Verstand es begreifen kann. Dieses Bild, das vor deinem inneren Auge auftaucht und dir den Weg weist. Das ist dein drittes Auge, das spricht. Die Entwicklung dieses Chakras ist ein Weg des tiefen Vertrauens -- Vertrauen in das, was du weißt, ohne es erklären zu können. Es ist der Mut, deiner inneren Führung zu folgen, auch wenn die äußere Welt andere Wege vorschlägt. Wenn du dieses Zentrum stärkst, schärft sich nicht nur deine Intuition, sondern auch deine Fähigkeit, die größeren Zusammenhänge deines Lebens zu erkennen. Du beginnst zu sehen, dass nichts zufällig geschieht. Dass jede Erfahrung, auch die schmerzhafte, Teil eines größeren Musters ist, das deine Seele webt.',
    meditation:
      'Schließe deine Augen und richte deinen inneren Blick sanft auf den Punkt zwischen deinen Augenbrauen. Stell dir dort ein tiefes, indigoblaues Licht vor, wie den Nachthimmel voller Sterne. Dieses Licht pulsiert ruhig und stetig. Mit jedem Atemzug wird es klarer, wie ein Schleier, der sich langsam hebt. Hinter dem Schleier öffnet sich ein unendlicher Raum der Stille und des Wissens. Sag innerlich: Ich vertraue meiner inneren Stimme. Ich sehe klar. Lass alle Gedanken ziehen wie Wolken und ruhe in der Stille hinter deinem dritten Auge.',
    affirmation:
      'Ich vertraue meiner inneren Weisheit -- mein drittes Auge sieht die Wahrheit hinter den Dingen.',
    blockade:
      'Wenn dein Stirnchakra blockiert ist, fühlst du dich abgeschnitten von deiner Intuition. Du zweifelst ständig an dir selbst und deinen Wahrnehmungen. Entscheidungen triffst du nur noch mit dem Kopf, weil du deinem Bauchgefühl nicht mehr traust. Du fühlst dich orientierungslos und siehst keinen tieferen Sinn in dem, was dir geschieht. Körperlich zeigt es sich als Kopfschmerzen, Augenprobleme, Schlafstörungen oder lebhafte, verwirrende Träume. Du denkst zu viel und spürst zu wenig.',
    heilung:
      'Praktiziere Meditation -- auch nur fünf Minuten täglich machen einen Unterschied. Arbeite mit violetten und indigoblauen Steinen: Amethyst, Sodalith, Lapislazuli oder Fluorit. Führe ein Traumtagebuch, um die Sprache deines Unterbewusstseins zu lernen. Verbringe Zeit in Stille und Dunkelheit. Iss violette Nahrungsmittel: Blaubeeren, Trauben, Aubergine. Beschäftige dich mit Symbolen, Archetypen und Tarot. Räuchern mit Weihrauch oder Sandelholz öffnet dieses Zentrum. Trage die Farbe Violett oder Indigo.',
  },
  krone: {
    id: 'krone',
    name: 'Kronenchakra',
    farbe: '#A855F7',
    position: 'Scheitel',
    thema: 'Spiritualität & Einheit',
    beschreibung:
      'Dein Kronenchakra ist das Tor zur Unendlichkeit -- der Ort, an dem dein persönliches Bewusstsein sich mit dem großen Ganzen verbindet. Es sitzt an deinem Scheitel, dort, wo bei Neugeborenen die Fontanelle noch offen ist, als Erinnerung daran, dass wir einst vollständig verbunden waren mit der Quelle, aus der alles kommt. Dieses Chakra geht über alle persönlichen Themen hinaus. Es ist nicht mehr die Frage, wer du bist oder was du willst. Es ist die Erfahrung, dass du Teil von etwas Unendlichem bist. Dass die Grenzen deines Körpers, deines Namens, deiner Geschichte nicht das Ende von dir sind, sondern nur der Anfang. In Momenten tiefer Stille, im Gebet, in der Meditation, manchmal auch in der Natur oder in Augenblicken großer Schönheit hast du es vielleicht gespürt: dieses plötzliche Aufgehen in etwas Größerem. Dieses Gefühl, dass alles miteinander verbunden ist. Dass es keine Trennung gibt -- nicht zwischen dir und mir, nicht zwischen dir und dem Göttlichen, nicht zwischen dir und dem Universum. Das ist dein Kronenchakra, das sich öffnet. Es lässt sich nicht erzwingen oder kontrollieren. Es öffnet sich, wenn du bereit bist, loszulassen -- deine Vorstellungen, deine Ängste, dein Bedürfnis zu verstehen. Es öffnet sich in der Hingabe an das große Mysterium des Lebens. Und in dieser Öffnung findest du nicht Leere, sondern eine Fülle jenseits aller Worte.',
    meditation:
      'Schließe deine Augen und richte deine Aufmerksamkeit auf deinen Scheitel. Stell dir vor, wie sich dort eine Lotusblüte aus reinem, weißem Licht mit violettem Schimmer langsam öffnet, Blütenblatt für Blütenblatt. Durch die geöffnete Blüte strömt kosmisches Licht in dich hinein -- es fließt durch deinen gesamten Körper bis in die Zehenspitzen. Du bist gleichzeitig ganz klein und unendlich groß. Sag innerlich: Ich bin eins mit allem, was ist. Ich übergebe mich dem Fluss des Lebens. Verweile in dieser Stille, in diesem grenzenlosen Raum, und lass dich halten von der Liebe, die größer ist als du.',
    affirmation:
      'Ich bin eins mit dem Göttlichen -- in mir lebt das Licht des gesamten Universums.',
    blockade:
      'Wenn dein Kronenchakra blockiert ist, fühlst du dich abgetrennt von etwas Größerem. Das Leben fühlt sich sinnlos oder rein mechanisch an. Du klammerst dich an materielle Sicherheiten, weil dir der Zugang zu einer tieferen Dimension fehlt. Spiritualität fühlt sich fremd an oder du lehnst sie intellektuell ab, obwohl sich ein Teil von dir nach Transzendenz sehnt. Körperlich können sich Blockaden als chronische Erschöpfung, Lichtempfindlichkeit oder ein Gefühl von Leere und Orientierungslosigkeit zeigen.',
    heilung:
      'Meditation ist der direkteste Weg zu deinem Kronenchakra -- besonders Stille-Meditation ohne Objekt. Arbeite mit klaren und violetten Steinen: Amethyst, Bergkristall, Selenit oder Diamant. Fasten und bewusster Verzicht können dieses Chakra öffnen. Verbringe Zeit unter dem Sternenhimmel. Räuchere mit Weihrauch, Myrrhe oder Sandelholz. Iss leichte, reine Nahrung oder praktiziere bewusstes Fasten. Gebet, Dankbarkeitsrituale und das bewusste Loslassen von Kontrolle nähren die Verbindung zum Göttlichen.',
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
