import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from '@/app/seelen-profil/api/payment/create/route';

// Mock the payment layer
vi.mock('@/lib/payment', () => ({
  createPayment: vi.fn().mockResolvedValue({
    checkoutUrl: 'https://checkout.mollie.com/test-payment',
  }),
}));

function makeRequest(body: unknown): Request {
  return new Request('http://localhost:3005/seelen-profil/api/payment/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

describe('POST /seelen-profil/api/payment/create', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns 400 when profilId is missing', async () => {
    const res = await POST(makeRequest({ tier: 'basis', email: 'test@test.de' }));
    expect(res.status).toBe(400);
  });

  it('returns 400 when tier is missing', async () => {
    const res = await POST(makeRequest({ profilId: 'abc', email: 'test@test.de' }));
    expect(res.status).toBe(400);
  });

  it('returns 400 when tier is invalid', async () => {
    const res = await POST(makeRequest({ profilId: 'abc', tier: 'gold', email: 'test@test.de' }));
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toContain('Preisstufe');
  });

  it('returns 200 + checkoutUrl for basis tier', async () => {
    const res = await POST(makeRequest({ profilId: 'abc', tier: 'basis', email: 'test@test.de' }));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.checkoutUrl).toBeTruthy();
  });

  it('returns 200 + checkoutUrl for report tier', async () => {
    const res = await POST(makeRequest({ profilId: 'abc', tier: 'report', email: 'test@test.de' }));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.checkoutUrl).toBeTruthy();
  });

  it('returns 200 + checkoutUrl for premium tier', async () => {
    const res = await POST(makeRequest({ profilId: 'abc', tier: 'premium', email: 'test@test.de' }));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.checkoutUrl).toBeTruthy();
  });
});
