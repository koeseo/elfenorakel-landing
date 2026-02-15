"use client";

import { motion } from "framer-motion";
import { Sparkles, ScrollText } from "lucide-react";

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <ScrollText className="w-5 h-5 text-[var(--gold)]" />
              <span className="text-[var(--gold)] text-sm uppercase tracking-widest">
                Rechtliches
              </span>
              <ScrollText className="w-5 h-5 text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-8 text-center">
              Allgemeine Geschäftsbedingungen
            </h1>

            <div className="glass-card p-8 space-y-8 text-[var(--text-secondary)]">
              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  § 1 Geltungsbereich
                </h2>
                <p>
                  (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für
                  alle Verträge zwischen Elfi Christina Riethmüller
                  (Elfenorakel) und dem Kunden über die Erbringung von
                  Dienstleistungen im Bereich spiritueller Beratung und
                  Kartenlegungen.
                </p>
                <p className="mt-2">
                  (2) Abweichende Bedingungen des Kunden werden nicht anerkannt,
                  es sei denn, wir stimmen ihrer Geltung ausdrücklich schriftlich
                  zu.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  § 2 Vertragsgegenstand
                </h2>
                <p>
                  (1) Gegenstand des Vertrages sind spirituelle Beratungen in
                  Form von Video-Readings (Kartenlegungen mit persönlicher
                  Interpretation).
                </p>
                <p className="mt-2">
                  (2) Die angebotenen Readings dienen der spirituellen
                  Unterstützung und Selbstreflexion. Sie ersetzen keine
                  medizinische, psychologische oder rechtliche Beratung.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  § 3 Vertragsschluss
                </h2>
                <p>
                  (1) Die Darstellung der Readings auf der Website stellt kein
                  rechtlich bindendes Angebot, sondern eine Aufforderung zur
                  Bestellung dar.
                </p>
                <p className="mt-2">
                  (2) Mit der Buchung eines Readings gibt der Kunde ein
                  verbindliches Angebot ab. Der Vertrag kommt zustande, wenn wir
                  die Bestellung durch Annahme bestätigen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  § 4 Preise und Zahlung
                </h2>
                <p>
                  (1) Es gelten die zum Zeitpunkt der Bestellung angegebenen
                  Preise. Alle Preise verstehen sich in Euro inklusive der
                  gesetzlichen Mehrwertsteuer.
                </p>
                <p className="mt-2">
                  (2) Die Zahlung erfolgt im Voraus über die angebotenen
                  Zahlungsmethoden (z.B. PayPal, Kreditkarte, Überweisung).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  § 5 Lieferung / Erbringung der Leistung
                </h2>
                <p>
                  (1) Die Video-Readings werden innerhalb des bei der Buchung
                  angegebenen Zeitraums erstellt und per E-Mail zugestellt:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Kurz-Reading: 24-48 Stunden</li>
                  <li>Vollständiges Reading: 48-72 Stunden</li>
                  <li>Premium Intensiv: 3-5 Werktage</li>
                </ul>
                <p className="mt-2">
                  (2) Bei hohem Auftragsvolumen kann es zu längeren
                  Bearbeitungszeiten kommen. Der Kunde wird in diesem Fall
                  informiert.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  § 6 Widerrufsrecht
                </h2>
                <p>
                  (1) Verbraucher haben das Recht, binnen 14 Tagen ohne Angabe
                  von Gründen diesen Vertrag zu widerrufen.
                </p>
                <p className="mt-2">
                  (2) Das Widerrufsrecht erlischt bei Verträgen zur Lieferung
                  von digitalen Inhalten, die nicht auf einem körperlichen
                  Datenträger geliefert werden, wenn wir mit der Ausführung des
                  Vertrags begonnen haben, nachdem der Kunde ausdrücklich
                  zugestimmt hat und bestätigt hat, dass er sein Widerrufsrecht
                  bei Beginn der Vertragsausführung verliert.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  § 7 Haftung
                </h2>
                <p>
                  (1) Wir haften unbeschränkt für Vorsatz und grobe
                  Fahrlässigkeit sowie für Schäden aus der Verletzung des
                  Lebens, des Körpers oder der Gesundheit.
                </p>
                <p className="mt-2">
                  (2) Für spirituelle Beratungen können wir keine Garantie für
                  bestimmte Ergebnisse oder Auswirkungen übernehmen. Die
                  Readings sind subjektive Interpretationen und keine
                  wissenschaftlich fundierten Vorhersagen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  § 8 Urheberrecht
                </h2>
                <p>
                  (1) Alle erstellten Video-Readings unterliegen dem
                  Urheberrecht. Eine Weitergabe, Veröffentlichung oder
                  kommerzielle Nutzung ist ohne ausdrückliche schriftliche
                  Zustimmung nicht gestattet.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  § 9 Schlussbestimmungen
                </h2>
                <p>
                  (1) Es gilt das Recht der Bundesrepublik Deutschland unter
                  Ausschluss des UN-Kaufrechts.
                </p>
                <p className="mt-2">
                  (2) Sollten einzelne Bestimmungen dieser AGB unwirksam sein,
                  bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                </p>
                <p className="mt-4">Stand: Februar 2026</p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
