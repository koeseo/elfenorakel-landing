import type { Metadata } from "next";
import { CosmicBackground } from "@/components/backgrounds";

export const metadata: Metadata = {
  title: "Seelen-Profil | Dein 9-dimensionales Tarot-Persönlichkeitsprofil",
  description:
    "Entdecke dein einzigartiges Seelen-Profil: 9 Dimensionen, basierend auf den 78 Tarot-Karten. Tiefer als MBTI, persönlicher als Enneagram. Von Elfi Christina Riethmüller.",
  keywords: [
    "Seelen-Profil",
    "Tarot Persönlichkeitsprofil",
    "Seelen-Archetyp",
    "Tarot Analyse",
    "Spirituelle Persönlichkeit",
    "Elfenorakel",
    "9 Dimensionen",
    "Major Arcana",
  ],
  openGraph: {
    title: "Seelen-Profil | Dein 9-dimensionales Tarot-Persönlichkeitsprofil",
    description:
      "Entdecke dein einzigartiges Seelen-Profil: 9 Dimensionen, basierend auf den 78 Tarot-Karten.",
    url: "https://next.elfenorakel.de/seelen-profil",
    siteName: "Elfenorakel",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seelen-Profil | Dein Tarot-Persönlichkeitsprofil",
    description:
      "9 Dimensionen deiner Seele, basierend auf 78 Tarot-Karten. Entdecke deinen Archetyp.",
  },
};

export default function SeelenProfilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <CosmicBackground intensity="subtle" position="fixed" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
