"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Clock, ArrowLeft, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui";

// Sample blog posts data (in a real app, this would come from a CMS or API)
const blogPosts: Record<
  string,
  {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    content: string;
  }
> = {
  "kosmische-gesetze-verstehen": {
    title: "Die 7 kosmischen Gesetze verstehen",
    excerpt:
      "Entdecke die universellen Gesetze, die unser Leben lenken und wie du sie für deine Transformation nutzen kannst.",
    category: "Spiritualität",
    date: "2026-02-01",
    readTime: "8 Min",
    content: `
## Die Grundlage allen Seins

Die kosmischen Gesetze sind universelle Prinzipien, die seit Jahrtausenden von Weisen und Mystikern überliefert werden. Sie bilden die Grundlage für unser Verständnis des Universums und unserer Rolle darin.

### 1. Das Gesetz der Geistigkeit

"Das All ist Geist; das Universum ist geistig."

Alles, was existiert, hat seinen Ursprung im universellen Geist. Deine Gedanken formen deine Realität. Was du denkst, manifestiert sich in deinem Leben.

### 2. Das Gesetz der Entsprechung

"Wie oben, so unten; wie unten, so oben."

Die Muster des Makrokosmos spiegeln sich im Mikrokosmos wider. Das Universum in dir entspricht dem Universum um dich herum.

### 3. Das Gesetz der Schwingung

"Nichts ruht; alles bewegt sich; alles schwingt."

Alles im Universum ist in ständiger Bewegung. Deine Gedanken und Emotionen haben ihre eigene Schwingungsfrequenz, die anzieht, was ihr entspricht.

### 4. Das Gesetz der Polarität

"Alles ist zweifach; alles hat Pole."

In allem gibt es Gegensätze - Licht und Dunkelheit, Liebe und Angst, Freude und Trauer. Diese Pole sind jedoch nur verschiedene Grade derselben Sache.

### 5. Das Gesetz des Rhythmus

"Alles fließt, aus und ein."

Das Leben bewegt sich in Zyklen. Nach dem Aufstieg kommt der Abstieg, nach der Dunkelheit das Licht. Verstehe diese Rhythmen und nutze sie für dein Wachstum.

### 6. Das Gesetz von Ursache und Wirkung

"Jede Ursache hat ihre Wirkung; jede Wirkung hat ihre Ursache."

Nichts geschieht zufällig. Alles, was du aussendest, kehrt zu dir zurück. Deine heutigen Handlungen formen dein morgiges Leben.

### 7. Das Gesetz des Geschlechts

"Geschlecht ist in allem."

In allem existiert das männliche und weibliche Prinzip. Die Balance dieser Energien ist essentiell für Schöpfung und Manifestation.

## Wie du die Gesetze anwendest

Das Wissen um diese Gesetze ist der erste Schritt. Die wahre Transformation beginnt, wenn du sie in deinem täglichen Leben anwendest:

- **Achte auf deine Gedanken** - sie erschaffen deine Realität
- **Beobachte die Zyklen** in deinem Leben und fließe mit ihnen
- **Erhöhe deine Schwingung** durch positive Praktiken
- **Akzeptiere die Polaritäten** als Teil des Ganzen

Die Karten können dir helfen, zu verstehen, wo du dich gerade in diesen kosmischen Zyklen befindest und wie du die Gesetze für deine persönliche Transformation nutzen kannst.
    `,
  },
  "tarot-anfaenger-guide": {
    title: "Tarot für Anfänger: Dein Einstieg in die Kartenwelt",
    excerpt:
      "Alles was du wissen musst, um mit dem Kartenlegen zu beginnen. Von der Bedeutung der Karten bis zu deiner ersten Legung.",
    category: "Tarot",
    date: "2026-01-28",
    readTime: "12 Min",
    content: `
## Willkommen in der Welt des Tarot

Tarot ist mehr als nur Karten - es ist ein Spiegel deiner Seele und ein Tor zu tieferem Verständnis. In diesem Guide erfährst du alles, was du für deinen Start brauchst.

### Die Struktur des Tarot

Ein klassisches Tarot-Deck besteht aus 78 Karten:

**Die Große Arkana (22 Karten)**
Diese Karten repräsentieren die großen Lebensthemen und spirituellen Lektionen. Von "Der Narr" (0) bis "Die Welt" (21) erzählen sie die Reise der Seele.

**Die Kleine Arkana (56 Karten)**
Unterteilt in vier Farben (Stäbe, Kelche, Schwerter, Münzen), zeigen diese Karten alltägliche Situationen und Energien.

### Deine erste Legung

Beginne mit einer einfachen Ein-Karten-Legung:

1. **Zentriere dich** - Atme tief und komme zur Ruhe
2. **Stelle eine Frage** - Was möchtest du wissen?
3. **Mische die Karten** - Lass deine Energie einfließen
4. **Ziehe eine Karte** - Vertraue deiner Intuition
5. **Interpretiere** - Was siehst du? Was fühlst du?

### Tipps für Anfänger

- **Führe ein Tarot-Tagebuch** - Notiere deine Ziehungen und Erkenntnisse
- **Lerne die Karten kennen** - Beschäftige dich täglich mit einer Karte
- **Vertraue deiner Intuition** - Die Bücher sind nur Leitfäden
- **Übe regelmäßig** - Beständigkeit ist der Schlüssel

### Die Bedeutung der Elemente

Im Elfenorakel arbeiten wir mit 7 Elementen:

- **Licht** - Erkenntnis, Wahrheit, Klarheit
- **Feuer** - Leidenschaft, Aktion, Transformation
- **Wasser** - Emotionen, Intuition, Heilung
- **Erde** - Stabilität, Manifestation, Körper
- **Luft** - Gedanken, Kommunikation, Ideen
- **Schatten** - Verborgenes, Integration, Tiefe
- **Kosmos** - Universelle Weisheit, Schicksal

Jedes Element bringt seine eigene Energie in deine Legungen ein.

## Bereit für mehr?

Die Elfenorakel App bietet dir täglich die Möglichkeit, deine Tarot-Fähigkeiten zu entwickeln - mit AI-gestützten Interpretationen und einem persönlichen Lernweg.
    `,
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
            Artikel nicht gefunden
          </h1>
          <Link href="/blog">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="py-20 bg-[var(--bg-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--gold)]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--teal)]/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Blog
            </Link>

            <span className="inline-block px-3 py-1 bg-[var(--gold)] text-[var(--bg-primary)] text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
              {post.title}
            </h1>

            <p className="text-lg text-[var(--text-secondary)] mb-6">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-6 text-[var(--text-muted)]">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("de-DE", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} Lesezeit
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div
              className="text-[var(--text-secondary)] space-y-6
              [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[var(--text-primary)] [&_h2]:mt-12 [&_h2]:mb-4
              [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-[var(--text-primary)] [&_h3]:mt-8 [&_h3]:mb-3
              [&_p]:leading-relaxed
              [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2
              [&_li]:text-[var(--text-secondary)]
              [&_strong]:text-[var(--text-primary)] [&_strong]:font-semibold"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n")
                  .map((line) => {
                    if (line.startsWith("## "))
                      return `<h2>${line.slice(3)}</h2>`;
                    if (line.startsWith("### "))
                      return `<h3>${line.slice(4)}</h3>`;
                    if (line.startsWith("- "))
                      return `<li>${line.slice(2)}</li>`;
                    if (line.startsWith("**") && line.endsWith("**"))
                      return `<p><strong>${line.slice(2, -2)}</strong></p>`;
                    if (line.trim() === "") return "";
                    return `<p>${line}</p>`;
                  })
                  .join(""),
              }}
            />
          </motion.article>

          {/* Share & Actions */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-[var(--glass-border)]">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4" />
                Gefällt mir
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4" />
                Teilen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Sparkles className="w-12 h-12 text-[var(--gold)] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gradient-gold mb-4">
            Bereit für dein eigenes Reading?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
            Entdecke die Weisheit der Karten mit einem persönlichen Reading
            oder nutze die Elfenorakel App für tägliche Impulse.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/readings">
              <Button size="lg">
                <Sparkles className="w-5 h-5" />
                Readings entdecken
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
