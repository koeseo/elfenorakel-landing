import { NextResponse } from "next/server";
import { createPayment } from "@/lib/payment";

export async function POST(request: Request) {
  try {
    const { profilId, tier, email } = await request.json();

    // Validate inputs
    if (!profilId || !tier || !email) {
      return NextResponse.json(
        { error: "Fehlende Pflichtfelder" },
        { status: 400 }
      );
    }

    if (!["basis", "report", "premium"].includes(tier)) {
      return NextResponse.json(
        { error: "Ungültige Preisstufe" },
        { status: 400 }
      );
    }

    const result = await createPayment({ profilId, tier, email });
    return NextResponse.json(result);
  } catch (error) {
    console.error("Payment creation failed:", error);
    return NextResponse.json(
      { error: "Zahlung konnte nicht erstellt werden. Bitte versuche es erneut." },
      { status: 500 }
    );
  }
}
