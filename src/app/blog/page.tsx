"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui";
import { CosmicBackground } from "@/components/backgrounds";

// Sample blog posts data
const blogPosts = [
  {
    slug: "kosmische-gesetze-verstehen",
    title: "Die 7 kosmischen Gesetze verstehen",
    excerpt:
      "Entdecke die universellen Gesetze, die unser Leben lenken und wie du sie für deine Transformation nutzen kannst.",
    image: "/images/blog/cosmic-laws.webp",
    category: "Spiritualität",
    date: "2026-02-01",
    readTime: "8 Min",
    featured: true,
  },
  {
    slug: "tarot-anfaenger-guide",
    title: "Tarot für Anfänger: Dein Einstieg in die Kartenwelt",
    excerpt:
      "Alles was du wissen musst, um mit dem Kartenlegen zu beginnen. Von der Bedeutung der Karten bis zu deiner ersten Legung.",
    image: "/images/blog/tarot-beginner.webp",
    category: "Tarot",
    date: "2026-01-28",
    readTime: "12 Min",
    featured: true,
  },
  {
    slug: "liebeslegung-interpretation",
    title: "Liebeslegungen richtig interpretieren",
    excerpt:
      "Wie du die Botschaften der Karten in Beziehungsfragen verstehst und für dein Liebesleben nutzt.",
    image: "/images/blog/love-reading.webp",
    category: "Love",
    date: "2026-01-20",
    readTime: "6 Min",
    featured: false,
  },
  {
    slug: "elemente-magie",
    title: "Die Magie der 7 Elemente",
    excerpt:
      "Jedes Element hat seine eigene Kraft. Lerne, wie du die Elementenergien in deinem Leben nutzen kannst.",
    image: "/images/blog/elements.webp",
    category: "Elemente",
    date: "2026-01-15",
    readTime: "10 Min",
    featured: false,
  },
  {
    slug: "meditation-kartenlegen",
    title: "Meditation vor dem Kartenlegen",
    excerpt:
      "Wie du dich optimal auf ein Reading vorbereitest und deine Intuition stärkst.",
    image: "/images/blog/meditation.webp",
    category: "Praxis",
    date: "2026-01-10",
    readTime: "5 Min",
    featured: false,
  },
  {
    slug: "vollmond-rituale",
    title: "Vollmond-Rituale für Transformation",
    excerpt:
      "Nutze die Kraft des Vollmonds für loslassen, manifestieren und spirituelles Wachstum.",
    image: "/images/blog/fullmoon.webp",
    category: "Rituale",
    date: "2026-01-05",
    readTime: "7 Min",
    featured: false,
  },
];

const categories = [
  "Alle",
  "Spiritualität",
  "Tarot",
  "Love",
  "Elemente",
  "Praxis",
  "Rituale",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "Alle" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="min-h-screen relative">
      {/* Full Page Cosmic Background */}
      <CosmicBackground intensity="subtle" position="fixed" />

      {/* Content Wrapper - above fixed background */}
      <div className="relative z-10">

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[var(--gold)]" />
              <span className="text-[var(--gold)] text-sm uppercase tracking-widest">
                Wissen & Weisheit
              </span>
              <Sparkles className="w-5 h-5 text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
              Elfenorakel Blog
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Spirituelle Impulse, Tarot-Wissen und kosmische Weisheiten
              für deinen Weg der Transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
            Empfohlene Artikel
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="glass-card overflow-hidden hover:border-[var(--gold)] transition-colors">
                    <div className="relative h-48 bg-[var(--bg-secondary)]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="w-12 h-12 text-[var(--gold)]/30" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[var(--gold)] text-[var(--bg-primary)] text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold)] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-[var(--text-muted)] text-sm">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString("de-DE", {
                              day: "numeric",
                              month: "short",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
              <input
                type="text"
                placeholder="Artikel suchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[var(--bg-primary)] border border-[var(--glass-border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-[var(--gold)] text-[var(--bg-primary)]"
                      : "bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:bg-[var(--gold)]/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="glass-card overflow-hidden hover:border-[var(--gold)] transition-colors h-full">
                    <div className="relative h-40 bg-[var(--bg-primary)]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-[var(--gold)]/20" />
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-[var(--bg-secondary)]/80 text-[var(--text-secondary)] text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold)] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] text-sm mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-[var(--text-muted)] text-xs">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString("de-DE")}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[var(--text-muted)]">
                Keine Artikel gefunden.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-12 h-12 text-[var(--gold)] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gradient-gold mb-4">
              Bleib auf dem Laufenden
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
              Erhalte neue Artikel, spirituelle Impulse und exklusive Inhalte
              direkt in dein Postfach.
            </p>
            <Button size="lg" onClick={() => (window.location.href = "/")}>
              <Sparkles className="w-5 h-5" />
              Newsletter abonnieren
            </Button>
          </motion.div>
        </div>
      </section>

      </div>{/* End Content Wrapper */}
    </div>
  );
}
