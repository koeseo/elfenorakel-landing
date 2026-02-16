import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Custom fetch with extended connect timeout for remote Supabase instances.
// Node 24's undici defaults to 10s which can be too short for remote servers.
let _customFetch: typeof globalThis.fetch | undefined;

function getCustomFetch(): typeof globalThis.fetch {
  if (!_customFetch) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { Agent } = require('undici');
      const agent = new Agent({ connect: { timeout: 30_000 } });
      _customFetch = ((url: RequestInfo | URL, init?: RequestInit) =>
        fetch(url, { ...init, dispatcher: agent } as RequestInit)) as typeof globalThis.fetch;
    } catch {
      // Fallback to global fetch (e.g. in browser or older Node)
      _customFetch = globalThis.fetch;
    }
  }
  return _customFetch;
}

// Lazy-initialized Supabase client (avoids build-time errors when env vars are missing)
let _supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!_supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) {
      throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY');
    }
    _supabase = createClient(url, key, {
      global: { fetch: getCustomFetch() },
    });
  }
  return _supabase;
}

/** @deprecated Use getSupabase() instead for lazy initialization */
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    return (getSupabase() as unknown as Record<string | symbol, unknown>)[prop];
  },
});

// Server-side client with service role key (for webhooks, admin operations)
export function createServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { global: { fetch: getCustomFetch() } },
  );
}
