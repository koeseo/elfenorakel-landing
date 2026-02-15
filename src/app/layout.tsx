import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
