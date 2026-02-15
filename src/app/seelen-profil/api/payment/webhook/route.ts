import { NextResponse } from "next/server";
import { verifyPayment } from "@/lib/payment";
import { updatePayment } from "@/lib/seelen-profil/db";

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const params = new URLSearchParams(body);
    const paymentId = params.get("id");

    if (!paymentId) {
      return NextResponse.json(
        { error: "Missing payment ID" },
        { status: 400 }
      );
    }

    const payment = await verifyPayment(paymentId);

    if (payment.isPaid) {
      await updatePayment(
        payment.metadata.profilId,
        payment.metadata.tier,
        paymentId
      );
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook processing failed:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
