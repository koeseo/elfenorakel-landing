"use client";

import { motion } from "framer-motion";
import { Sparkles, Shield } from "lucide-react";

export default function DatenschutzPage() {
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
              <Shield className="w-5 h-5 text-[var(--gold)]" />
              <span className="text-[var(--gold)] text-sm uppercase tracking-widest">
                Rechtliches
              </span>
              <Shield className="w-5 h-5 text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-8 text-center">
              Datenschutzerklärung
            </h1>

            <div className="glass-card p-8 space-y-8 text-[var(--text-secondary)]">
              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  1. Datenschutz auf einen Blick
                </h2>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  Allgemeine Hinweise
                </h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber,
                  was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                  Website besuchen. Personenbezogene Daten sind alle Daten, mit
                  denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  2. Verantwortliche Stelle
                </h2>
                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="mt-2">
                  Elfi Christina Riethmüller
                  <br />
                  Elfenorakel
                  <br />
                  [Adresse]
                  <br />
                  E-Mail: kontakt@elfenorakel.de
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  3. Datenerfassung auf dieser Website
                </h2>

                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 mt-4">
                  Cookies
                </h3>
                <p>
                  Unsere Website verwendet Cookies. Das sind kleine Textdateien,
                  die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen
                  uns dabei, unser Angebot nutzerfreundlicher, effektiver und
                  sicherer zu machen.
                </p>
                <p className="mt-2">
                  Einige Cookies sind "Session-Cookies". Solche Cookies werden
                  nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen
                  bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie
                  diese selbst löschen.
                </p>

                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 mt-4">
                  Server-Log-Dateien
                </h3>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch
                  Informationen in so genannten Server-Log-Dateien, die Ihr
                  Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  4. Kontaktformular
                </h2>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                  werden Ihre Angaben aus dem Anfrageformular inklusive der von
                  Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                  Anfrage und für den Fall von Anschlussfragen bei uns
                  gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                  weiter.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  5. Newsletter
                </h2>
                <p>
                  Wenn Sie den auf der Website angebotenen Newsletter beziehen
                  möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie
                  Informationen, welche uns die Überprüfung gestatten, dass Sie
                  der Inhaber der angegebenen E-Mail-Adresse sind. Weitere Daten
                  werden nicht erhoben.
                </p>
                <p className="mt-2">
                  Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns
                  hinterlegten Daten werden von uns bis zu Ihrer Austragung aus
                  dem Newsletter gespeichert und nach der Abbestellung des
                  Newsletters gelöscht.
                </p>
                <p className="mt-2">
                  Für den Versand des Newsletters verwenden wir Brevo
                  (ehemals Sendinblue).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  6. Ihre Rechte
                </h2>
                <p>Sie haben jederzeit das Recht:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Auskunft über Ihre gespeicherten Daten zu erhalten</li>
                  <li>Berichtigung unrichtiger Daten zu verlangen</li>
                  <li>Löschung Ihrer Daten zu verlangen</li>
                  <li>Einschränkung der Verarbeitung zu verlangen</li>
                  <li>Der Verarbeitung zu widersprechen</li>
                  <li>Datenübertragbarkeit zu verlangen</li>
                </ul>
                <p className="mt-4">
                  Bei Fragen zum Datenschutz können Sie sich jederzeit an uns
                  wenden: kontakt@elfenorakel.de
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  7. Aktualität
                </h2>
                <p>
                  Stand: Februar 2026
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
