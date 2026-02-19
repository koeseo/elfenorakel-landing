import createMollieClient from "@mollie/api-client";

// Lazy-initialize the Mollie client to avoid build-time errors
// when MOLLIE_API_KEY is not yet set in the environment
let _mollieClient: ReturnType<typeof createMollieClient> | null = null;

function getMollieClient() {
  if (!_mollieClient) {
    const apiKey = process.env.MOLLIE_API_KEY;
    if (!apiKey) {
      throw new Error("MOLLIE_API_KEY environment variable is not set");
    }
    _mollieClient = createMollieClient({ apiKey });
  }
  return _mollieClient;
}

const TIER_PRICES: Record<string, { amount: string; description: string }> = {
  basis: { amount: "49.00", description: "Seelen-Profil Basis" },
  report: { amount: "69.00", description: "Seelen-Profil + Report" },
  premium: { amount: "99.00", description: "Seelen-Profil Premium" },
};

export async function createPayment(params: {
  profilId: string;
  tier: "basis" | "report" | "premium";
  email: string;
}): Promise<{ checkoutUrl: string }> {
  const tierConfig = TIER_PRICES[params.tier];
  if (!tierConfig) throw new Error("Invalid tier");

  const payment = await getMollieClient().payments.create({
    amount: { currency: "EUR", value: tierConfig.amount },
    description: tierConfig.description,
    redirectUrl: `${process.env.NEXT_PUBLIC_APP_URL}/seelen-profil/profil/${params.profilId}`,
    webhookUrl: `${process.env.NEXT_PUBLIC_APP_URL}/seelen-profil/api/payment/webhook`,
    metadata: {
      profilId: params.profilId,
      tier: params.tier,
      email: params.email,
    },
  });

  const checkoutUrl = payment.getCheckoutUrl();
  if (!checkoutUrl) {
    throw new Error("Could not get checkout URL from Mollie");
  }

  return { checkoutUrl };
}

export async function verifyPayment(paymentId: string) {
  const payment = await getMollieClient().payments.get(paymentId);
  return {
    status: payment.status,
    metadata: payment.metadata as {
      profilId: string;
      tier: string;
      email: string;
    },
    isPaid: payment.status === "paid",
  };
}
