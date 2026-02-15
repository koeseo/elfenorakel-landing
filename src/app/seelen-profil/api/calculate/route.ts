import { berechneSeelenprofil } from "@/lib/seelen-profil/algorithmus";
import { createProfile } from "@/lib/seelen-profil/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.vorname || !body.geburtsdatum || !body.kartenwahl || !body.email) {
      return Response.json(
        { error: "Fehlende Pflichtfelder." },
        { status: 400 }
      );
    }

    if (!Array.isArray(body.kartenwahl) || body.kartenwahl.length !== 5) {
      return Response.json(
        { error: "Es muessen genau 5 Karten gewaehlt werden." },
        { status: 400 }
      );
    }

    if (!Array.isArray(body.seelenFragen) || body.seelenFragen.length !== 8) {
      return Response.json(
        { error: "Es muessen genau 8 Seelen-Fragen beantwortet werden." },
        { status: 400 }
      );
    }

    // Calculate the profile
    const profil = berechneSeelenprofil({
      vorname: body.vorname,
      geburtsdatum: body.geburtsdatum,
      geburtszeit: body.geburtszeit || undefined,
      kartenwahl: body.kartenwahl,
      seelenFragen: body.seelenFragen || [],
    });

    // Store in database
    const id = await createProfile(
      {
        vorname: body.vorname,
        geburtsdatum: body.geburtsdatum,
        geburtszeit: body.geburtszeit || undefined,
        kartenwahl: body.kartenwahl,
        seelenFragen: body.seelenFragen || [],
      },
      profil,
      body.email
    );

    return Response.json({ profilId: id });
  } catch (err) {
    console.error("Profile calculation error:", err);
    return Response.json(
      {
        error:
          err instanceof Error
            ? err.message
            : "Ein unerwarteter Fehler ist aufgetreten.",
      },
      { status: 500 }
    );
  }
}
