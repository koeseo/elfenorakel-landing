"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ImpressumPage() {
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
              <Sparkles className="w-5 h-5 text-[var(--gold)]" />
              <span className="text-[var(--gold)] text-sm uppercase tracking-widest">
                Rechtliches
              </span>
              <Sparkles className="w-5 h-5 text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-8 text-center">
              Impressum
            </h1>

            <div className="glass-card p-8 space-y-6 text-[var(--text-secondary)]">
              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  Angaben gemäß § 5 TMG
                </h2>
                <p>
                  Elfi Christina Riethmüller
                  <br />
                  Elfenorakel
                  <br />
                  [Straße und Hausnummer]
                  <br />
                  [PLZ Ort]
                  <br />
                  Deutschland
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  Kontakt
                </h2>
                <p>
                  E-Mail: kontakt@elfenorakel.de
                  <br />
                  Website: www.elfenorakel.de
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  Umsatzsteuer-ID
                </h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27a
                  Umsatzsteuergesetz:
                  <br />
                  [USt-IdNr. wenn vorhanden]
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <p>
                  Elfi Christina Riethmüller
                  <br />
                  [Adresse wie oben]
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  EU-Streitschlichtung
                </h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--gold)] hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="mt-2">
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  Haftung für Inhalte
                </h2>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                  hinweisen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  Haftung für Links
                </h2>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                  die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  Urheberrecht
                </h2>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                  der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
