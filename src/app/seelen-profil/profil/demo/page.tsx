import type { Metadata } from "next";
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
import { ProfilKartenlegung } from "@/components/seelen-profil/profil/ProfilKartenlegung";
import { ProfilSeelenGeschichte } from "@/components/seelen-profil/profil/ProfilSeelenGeschichte";
import { ProfilArchetyp } from "@/components/seelen-profil/profil/ProfilArchetyp";
import { ProfilElemente } from "@/components/seelen-profil/profil/ProfilElemente";
import { ProfilSchattenLicht } from "@/components/seelen-profil/profil/ProfilSchattenLicht";
import { ProfilKosmischeKoordinaten } from "@/components/seelen-profil/profil/ProfilKosmischeKoordinaten";
import { ProfilKosmischeAufgabe } from "@/components/seelen-profil/profil/ProfilKosmischeAufgabe";
import { ProfilJahresEnergie } from "@/components/seelen-profil/profil/ProfilJahresEnergie";
import { ProfilFooter } from "@/components/seelen-profil/profil/ProfilFooter";

// Gökhan Köse — 21.08.1990
// Lebenszahl: 2+1+0+8+1+9+9+0=30 → 3+0=3 → Die Herrscherin (Die Nährende)
// Karten: zufällig gezogen (crypto.randomInt)
// Mondphase: Neumond (moon age 0 am 21.08.1990)
// Jahresenergie 2026: 2+1+0+8+2+0+2+6=21 → Die Welt
const DEMO_PROFILE = {
  id: "demo",
  vorname: "Gökhan",
  archetyp_id: 3, // Die Herrscherin → Die Nährende
  element_signatur: { feuer: 22, wasser: 38, luft: 16, erde: 24 },
  schatten_karte: "muenzen-fuenf",
  licht_karte: "kelche-drei",
  mondphase: "neumond" as MondphaseType,
  planet: "venus",
  chakra: "herz",
  kartenwahl: ["staebe-zehn", "schicksal", "kelche-drei", "muenzen-drei", "muenzen-fuenf"],
  jahres_energie: { jahr: 2026, arcanaId: 21 },
  tier: "premium" as const,
};

export const metadata: Metadata = {
  title: "Demo Seelen-Profil | Elfenorakel",
  robots: "noindex",
};

export default function DemoProfilPage() {
  const profile = DEMO_PROFILE;

  const archetyp = getArchetyp(profile.archetyp_id);
  const dominantEl = getDominantElement(profile.element_signatur);
  const secondaryEl = getSecondaryElement(profile.element_signatur);
  const dominantElement = getElement(dominantEl);
  const secondaryElement = getElement(secondaryEl);
  const planet = getPlanet(profile.planet);
  const chakra = getChakra(profile.chakra);
  const mondphase = getMondphasenContent(profile.mondphase);
  const kosmischeAufgabe = getKosmischeAufgabe(profile.archetyp_id, dominantEl);
  const jahresEnergie = getJahresEnergie(profile.jahres_energie.arcanaId);

  const kombinationText = dominantElement.kombination[secondaryEl] || null;

  const schattenDeutung = getSchattenLichtDeutung(profile.schatten_karte);
  const lichtDeutungData = getSchattenLichtDeutung(profile.licht_karte);

  return (
    <div className="min-h-screen">
      <ProfilHero
        vorname={profile.vorname}
        archetyp={archetyp}
        dominantElement={dominantElement}
      />
      <div className="section-divider" />
      <ProfilKartenlegung
        kartenwahl={profile.kartenwahl}
        vorname={profile.vorname}
      />
      <div className="section-divider" />
      <ProfilSeelenGeschichte
        vorname={profile.vorname}
        archetyp={archetyp}
        dominantElement={dominantElement}
        secondaryElement={secondaryElement}
        kartenwahl={profile.kartenwahl}
        schattenKarte={profile.schatten_karte}
        lichtKarte={profile.licht_karte}
        planet={profile.planet}
        chakra={profile.chakra}
        mondphase={profile.mondphase}
      />
      <div className="section-divider" />
      <ProfilArchetyp archetyp={archetyp} />
      <div className="section-divider" />
      <ProfilElemente
        signatur={profile.element_signatur}
        dominantElement={dominantElement}
        secondaryElement={secondaryElement}
        kombinationText={kombinationText}
      />
      <div className="section-divider" />
      <ProfilSchattenLicht
        schattenKarte={profile.schatten_karte}
        lichtKarte={profile.licht_karte}
        schattenDeutung={schattenDeutung.schattenDeutung}
        lichtDeutung={lichtDeutungData.lichtDeutung}
      />
      <div className="section-divider" />
      <ProfilKosmischeKoordinaten
        mondphase={mondphase}
        planet={planet}
        chakra={chakra}
      />
      <div className="section-divider" />
      <ProfilKosmischeAufgabe aufgabe={kosmischeAufgabe} />
      <div className="section-divider" />
      <ProfilJahresEnergie
        jahresEnergie={jahresEnergie}
        jahr={profile.jahres_energie.jahr}
      />
      <div className="section-divider" />
      <ProfilFooter
        profileId={profile.id}
        tier={profile.tier}
        archetypName={archetyp.name}
      />
    </div>
  );
}
