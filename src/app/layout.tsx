import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elfenorakel | Mystische Tarot-Readings mit Elfi",
  description:
    "Entdecke die Weisheit der Karten. Persönliche Tarot-Readings, mystische Guidance und spirituelle Begleitung mit Elfi Christina Riethmüller.",
  keywords: [
    "Tarot",
    "Orakel",
    "Kartenlegung",
    "Spiritualität",
    "Elfenorakel",
    "Elfi",
  ],
  authors: [{ name: "Elfi Christina Riethmüller" }],
  openGraph: {
    title: "Elfenorakel | Mystische Tarot-Readings",
    description: "Entdecke die Weisheit der Karten mit Elfi Christina Riethmüller.",
    url: "https://next.elfenorakel.de",
    siteName: "Elfenorakel",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elfenorakel | Mystische Tarot-Readings",
    description: "Entdecke die Weisheit der Karten.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" data-theme="dark">
      <body
        className={`${cinzel.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
