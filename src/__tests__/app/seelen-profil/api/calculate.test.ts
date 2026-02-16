import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from '@/app/seelen-profil/api/calculate/route';
import { VALID_API_BODY } from '../../../helpers/fixtures';

// Mock the database layer
vi.mock('@/lib/seelen-profil/db', () => ({
  createProfile: vi.fn().mockResolvedValue('test-uuid-123'),
}));

// Mock supabase to avoid env var errors
vi.mock('@/lib/supabase', () => ({
  supabase: {},
  getSupabase: vi.fn(),
  createServerClient: vi.fn(),
}));

function makeRequest(body: unknown): Request {
  return new Request('http://localhost:3005/seelen-profil/api/calculate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

describe('POST /seelen-profil/api/calculate', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns 400 when vorname is missing', async () => {
    const body = { ...VALID_API_BODY, vorname: '' };
    const res = await POST(makeRequest(body));
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBeTruthy();
  });

  it('returns 400 when kartenwahl has wrong count', async () => {
    const body = { ...VALID_API_BODY, kartenwahl: ['narr', 'magier'] };
    const res = await POST(makeRequest(body));
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toContain('5 Karten');
  });

  it('returns 400 when seelenFragen has wrong count', async () => {
    const body = { ...VALID_API_BODY, seelenFragen: [{ frageId: 'element', antwort: 'wasser' }] };
    const res = await POST(makeRequest(body));
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toContain('8 Seelen-Fragen');
  });

  it('returns 400 when email is missing', async () => {
    const body = { ...VALID_API_BODY, email: '' };
    const res = await POST(makeRequest(body));
    expect(res.status).toBe(400);
  });

  it('returns 200 + profilId on valid input', async () => {
    const res = await POST(makeRequest(VALID_API_BODY));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.profilId).toBe('test-uuid-123');
  });
});
