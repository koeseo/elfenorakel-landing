import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getProfile } from "@/lib/seelen-profil/db";
import { getArchetyp } from "@/lib/seelen-profil/archetypen";
import {
  getElement,
  getDominantElement,
  getSecondaryElement,
} from "@/lib/seelen-profil/elemente";
import { getPlanet } from "@/lib/seelen-profil/planeten";
import { getChakra } from "@/lib/seelen-profil/chakras";
import { getKosmischeAufgabe } from "@/lib/seelen-profil/kosmische-aufgabe";
import { getMondphasenContent } from "@/lib/seelen-profil/mondphasen-content";
import { getJahresEnergie } from "@/lib/seelen-profil/jahres-energie";
import type { MondphaseType } from "@/lib/seelen-profil/mondphasen";

import { getSchattenLichtDeutung } from "@/lib/seelen-profil/schatten-licht-deutung";
import { ProfilHero } from "@/components/seelen-profil/profil/ProfilHero";
import { ProfilArchetyp } from "@/components/seelen-profil/profil/ProfilArchetyp";
import { ProfilElemente } from "@/components/seelen-profil/profil/ProfilElemente";
import { ProfilSchattenLicht } from "@/components/seelen-profil/profil/ProfilSchattenLicht";
import { ProfilKosmischeKoordinaten } from "@/components/seelen-profil/profil/ProfilKosmischeKoordinaten";
import { ProfilKosmischeAufgabe } from "@/components/seelen-profil/profil/ProfilKosmischeAufgabe";
import { ProfilJahresEnergie } from "@/components/seelen-profil/profil/ProfilJahresEnergie";
import { ProfilFooter } from "@/components/seelen-profil/profil/ProfilFooter";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const profile = await getProfile(id);

  if (!profile) {
    return {
      title: "Seelen-Profil nicht gefunden",
    };
  }

  const archetyp = getArchetyp(profile.archetyp_id);

  return {
    title: `${profile.vorname}s Seelen-Profil: ${archetyp.name} | Elfenorakel`,
    description: `${profile.vorname} ist ${archetyp.name} — ${archetyp.claim} Entdecke dein eigenes Seelen-Profil.`,
    openGraph: {
      title: `${profile.vorname}s Seelen-Profil: ${archetyp.name}`,
      description: archetyp.claim,
      url: `https://next.elfenorakel.de/seelen-profil/profil/${id}`,
      siteName: "Elfenorakel",
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${profile.vorname}s Seelen-Profil: ${archetyp.name}`,
      description: archetyp.claim,
    },
  };
}

export default async function ProfilPage({ params }: PageProps) {
  const { id } = await params;
  const profile = await getProfile(id);

  if (!profile) {
    redirect("/seelen-profil");
  }

  // If not paid, redirect to vorschau
  if (profile.payment_status !== "paid") {
    redirect(`/seelen-profil/vorschau?id=${id}`);
  }

  // Look up all content
  const archetyp = getArchetyp(profile.archetyp_id);
  const dominantEl = getDominantElement(profile.element_signatur);
  const secondaryEl = getSecondaryElement(profile.element_signatur);
  const dominantElement = getElement(dominantEl);
  const secondaryElement = getElement(secondaryEl);
  const planet = getPlanet(profile.planet);
  const chakra = getChakra(profile.chakra);
  const mondphase = getMondphasenContent(profile.mondphase as MondphaseType);
  const kosmischeAufgabe = getKosmischeAufgabe(
    profile.archetyp_id,
    dominantEl
  );
  const jahresEnergie = getJahresEnergie(profile.jahres_energie.arcanaId);

  // Get combination text for dominant + secondary element
  const kombinationText =
    dominantElement.kombination[secondaryEl] || null;

  // Get card-specific Schatten/Licht interpretations
  const schattenDeutung = getSchattenLichtDeutung(profile.schatten_karte);
  const lichtDeutungData = getSchattenLichtDeutung(profile.licht_karte);

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <ProfilHero
        vorname={profile.vorname}
        archetyp={archetyp}
        dominantElement={dominantElement}
      />

      {/* Divider */}
      <div className="section-divider" />

      {/* 2. Archetyp Deep Dive */}
      <ProfilArchetyp archetyp={archetyp} />

      {/* Divider */}
      <div className="section-divider" />

      {/* 3. Element Signatur */}
      <ProfilElemente
        signatur={profile.element_signatur}
        dominantElement={dominantElement}
        secondaryElement={secondaryElement}
        kombinationText={kombinationText}
      />

      {/* Divider */}
      <div className="section-divider" />

      {/* 4. Schatten & Licht */}
      <ProfilSchattenLicht
        schattenKarte={profile.schatten_karte}
        lichtKarte={profile.licht_karte}
        schattenDeutung={schattenDeutung.schattenDeutung}
        lichtDeutung={lichtDeutungData.lichtDeutung}
      />

      {/* Divider */}
      <div className="section-divider" />

      {/* 5. Kosmische Koordinaten */}
      <ProfilKosmischeKoordinaten
        mondphase={mondphase}
        planet={planet}
        chakra={chakra}
      />

      {/* Divider */}
      <div className="section-divider" />

      {/* 6. Kosmische Aufgabe */}
      <ProfilKosmischeAufgabe aufgabe={kosmischeAufgabe} />

      {/* Divider */}
      <div className="section-divider" />

      {/* 7. Jahres-Energie */}
      <ProfilJahresEnergie
        jahresEnergie={jahresEnergie}
        jahr={profile.jahres_energie.jahr}
      />

      {/* Divider */}
      <div className="section-divider" />

      {/* 8. Footer: Downloads, Share, Upsell */}
      <ProfilFooter
        profileId={profile.id}
        tier={profile.tier}
        archetypName={archetyp.name}
      />
    </div>
  );
}
