import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from '@/app/seelen-profil/api/payment/webhook/route';

// Mock payment verification
vi.mock('@/lib/payment', () => ({
  verifyPayment: vi.fn().mockResolvedValue({
    status: 'paid',
    metadata: { profilId: 'test-uuid', tier: 'basis', email: 'test@test.de' },
    isPaid: true,
  }),
}));

// Mock DB update
vi.mock('@/lib/seelen-profil/db', () => ({
  updatePayment: vi.fn().mockResolvedValue(undefined),
}));

// Mock supabase
vi.mock('@/lib/supabase', () => ({
  supabase: {},
  getSupabase: vi.fn(),
  createServerClient: vi.fn(),
}));

function makeRequest(body: string): Request {
  return new Request('http://localhost:3005/seelen-profil/api/payment/webhook', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
}

describe('POST /seelen-profil/api/payment/webhook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns 400 when payment ID is missing', async () => {
    const res = await POST(makeRequest(''));
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toContain('payment ID');
  });

  it('returns 200 and processes paid webhook', async () => {
    const res = await POST(makeRequest('id=tr_test123'));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.received).toBe(true);
  });

  it('calls updatePayment with correct params', async () => {
    const { updatePayment } = await import('@/lib/seelen-profil/db');
    await POST(makeRequest('id=tr_test123'));
    expect(updatePayment).toHaveBeenCalledWith('test-uuid', 'basis', 'tr_test123');
  });
});
