import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { testEmail } from '../../helpers/fixtures';
import { VALID_QUIZ_INPUT } from '../../helpers/fixtures';
import { berechneSeelenprofil } from '@/lib/seelen-profil/algorithmus';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Skip all tests if Supabase is not configured
const runTests = !!(SUPABASE_URL && SUPABASE_KEY && SERVICE_KEY);

// Track IDs to clean up
const createdIds: string[] = [];

describe.skipIf(!runTests)('Supabase DB integration', () => {
  // Use direct Supabase client (bypass the app's lazy init which uses undici)
  let supabase: import('@supabase/supabase-js').SupabaseClient;
  let serverClient: import('@supabase/supabase-js').SupabaseClient;

  beforeAll(async () => {
    const { createClient } = await import('@supabase/supabase-js');
    // Node 24's undici has a 10s connect timeout that can be too short
    const { Agent } = await import('undici');
    const agent = new Agent({ connect: { timeout: 30_000 } });
    const customFetch = ((url: RequestInfo | URL, init?: RequestInit) =>
      fetch(url, { ...init, dispatcher: agent } as RequestInit)) as typeof globalThis.fetch;

    supabase = createClient(SUPABASE_URL!, SUPABASE_KEY!, {
      global: { fetch: customFetch },
    });
    serverClient = createClient(SUPABASE_URL!, SERVICE_KEY!, {
      global: { fetch: customFetch },
    });
  }, 60_000);

  it('connects to Supabase (table exists)', async () => {
    const { error } = await supabase.from('seelen_profile').select('id').limit(1);
    expect(error).toBeNull();
  }, 30_000);

  it('inserts a profile and returns an ID', async () => {
    const profil = berechneSeelenprofil(VALID_QUIZ_INPUT);
    const email = testEmail();

    const { data, error } = await supabase
      .from('seelen_profile')
      .insert({
        email,
        vorname: VALID_QUIZ_INPUT.vorname,
        geburtsdatum: VALID_QUIZ_INPUT.geburtsdatum,
        geburtszeit: VALID_QUIZ_INPUT.geburtszeit || null,
        kartenwahl: VALID_QUIZ_INPUT.kartenwahl,
        seelen_fragen: VALID_QUIZ_INPUT.seelenFragen,
        archetyp_id: profil.archetypId,
        element_signatur: profil.elementSignatur,
        schatten_karte: profil.schattenKarte,
        licht_karte: profil.lichtKarte,
        mondphase: profil.mondphase,
        planet: profil.planet,
        chakra: profil.chakra,
        kosmische_aufgabe: profil.kosmischeAufgabeKey,
        jahres_energie: profil.jahresEnergie,
      })
      .select('id')
      .single();

    expect(error).toBeNull();
    expect(data?.id).toBeTruthy();
    createdIds.push(data!.id);
  }, 30_000);

  it('retrieves profile by ID', async () => {
    const profil = berechneSeelenprofil(VALID_QUIZ_INPUT);
    const email = testEmail();

    const { data: insertData } = await supabase
      .from('seelen_profile')
      .insert({
        email,
        vorname: VALID_QUIZ_INPUT.vorname,
        geburtsdatum: VALID_QUIZ_INPUT.geburtsdatum,
        kartenwahl: VALID_QUIZ_INPUT.kartenwahl,
        seelen_fragen: VALID_QUIZ_INPUT.seelenFragen,
        archetyp_id: profil.archetypId,
        element_signatur: profil.elementSignatur,
        schatten_karte: profil.schattenKarte,
        licht_karte: profil.lichtKarte,
        mondphase: profil.mondphase,
        planet: profil.planet,
        chakra: profil.chakra,
        kosmische_aufgabe: profil.kosmischeAufgabeKey,
        jahres_energie: profil.jahresEnergie,
      })
      .select('id')
      .single();

    createdIds.push(insertData!.id);

    const { data: row } = await supabase
      .from('seelen_profile')
      .select('*')
      .eq('id', insertData!.id)
      .single();

    expect(row).not.toBeNull();
    expect(row!.vorname).toBe('Testperson');
    expect(row!.email).toBe(email);
    expect(row!.archetyp_id).toBe(profil.archetypId);
  }, 30_000);

  it('retrieves profile by email', async () => {
    const profil = berechneSeelenprofil(VALID_QUIZ_INPUT);
    const email = testEmail();

    const { data: insertData } = await supabase
      .from('seelen_profile')
      .insert({
        email,
        vorname: VALID_QUIZ_INPUT.vorname,
        geburtsdatum: VALID_QUIZ_INPUT.geburtsdatum,
        kartenwahl: VALID_QUIZ_INPUT.kartenwahl,
        seelen_fragen: VALID_QUIZ_INPUT.seelenFragen,
        archetyp_id: profil.archetypId,
        element_signatur: profil.elementSignatur,
        schatten_karte: profil.schattenKarte,
        licht_karte: profil.lichtKarte,
        mondphase: profil.mondphase,
        planet: profil.planet,
        chakra: profil.chakra,
        kosmische_aufgabe: profil.kosmischeAufgabeKey,
        jahres_energie: profil.jahresEnergie,
      })
      .select('id')
      .single();

    createdIds.push(insertData!.id);

    const { data: row } = await supabase
      .from('seelen_profile')
      .select('*')
      .eq('email', email)
      .single();

    expect(row).not.toBeNull();
    expect(row!.id).toBe(insertData!.id);
  }, 30_000);

  it('updates payment status via service role', async () => {
    const profil = berechneSeelenprofil(VALID_QUIZ_INPUT);
    const email = testEmail();

    const { data: insertData } = await supabase
      .from('seelen_profile')
      .insert({
        email,
        vorname: VALID_QUIZ_INPUT.vorname,
        geburtsdatum: VALID_QUIZ_INPUT.geburtsdatum,
        kartenwahl: VALID_QUIZ_INPUT.kartenwahl,
        seelen_fragen: VALID_QUIZ_INPUT.seelenFragen,
        archetyp_id: profil.archetypId,
        element_signatur: profil.elementSignatur,
        schatten_karte: profil.schattenKarte,
        licht_karte: profil.lichtKarte,
        mondphase: profil.mondphase,
        planet: profil.planet,
        chakra: profil.chakra,
        kosmische_aufgabe: profil.kosmischeAufgabeKey,
        jahres_energie: profil.jahresEnergie,
      })
      .select('id')
      .single();

    createdIds.push(insertData!.id);

    // Update via service role client (as the webhook would)
    const { error: updateError } = await serverClient
      .from('seelen_profile')
      .update({
        tier: 'basis',
        payment_status: 'paid',
        payment_id: 'tr_test_payment',
        paid_at: new Date().toISOString(),
      })
      .eq('id', insertData!.id);

    expect(updateError).toBeNull();

    const { data: row } = await supabase
      .from('seelen_profile')
      .select('*')
      .eq('id', insertData!.id)
      .single();

    expect(row!.payment_status).toBe('paid');
    expect(row!.tier).toBe('basis');
    expect(row!.payment_id).toBe('tr_test_payment');
  }, 30_000);

  it('rejects duplicate email (unique constraint)', async () => {
    const profil = berechneSeelenprofil(VALID_QUIZ_INPUT);
    const email = testEmail();

    const { data: insertData } = await supabase
      .from('seelen_profile')
      .insert({
        email,
        vorname: VALID_QUIZ_INPUT.vorname,
        geburtsdatum: VALID_QUIZ_INPUT.geburtsdatum,
        kartenwahl: VALID_QUIZ_INPUT.kartenwahl,
        seelen_fragen: VALID_QUIZ_INPUT.seelenFragen,
        archetyp_id: profil.archetypId,
        element_signatur: profil.elementSignatur,
        schatten_karte: profil.schattenKarte,
        licht_karte: profil.lichtKarte,
        mondphase: profil.mondphase,
        planet: profil.planet,
        chakra: profil.chakra,
        kosmische_aufgabe: profil.kosmischeAufgabeKey,
        jahres_energie: profil.jahresEnergie,
      })
      .select('id')
      .single();

    createdIds.push(insertData!.id);

    // Second insert with same email should fail
    const { error } = await supabase
      .from('seelen_profile')
      .insert({
        email,
        vorname: 'Duplicate',
        geburtsdatum: '2000-01-01',
        kartenwahl: VALID_QUIZ_INPUT.kartenwahl,
        seelen_fragen: VALID_QUIZ_INPUT.seelenFragen,
        archetyp_id: 0,
        element_signatur: { feuer: 25, wasser: 25, luft: 25, erde: 25 },
        schatten_karte: 'narr',
        licht_karte: 'sonne',
        mondphase: 'neumond',
        planet: 'uranus',
        chakra: 'krone',
        kosmische_aufgabe: '0_luft',
        jahres_energie: { jahr: 2026, arcanaId: 0 },
      })
      .select('id')
      .single();

    expect(error).not.toBeNull();
    expect(error!.code).toBe('23505'); // unique_violation
  }, 30_000);

  it('returns null for non-existent ID', async () => {
    const { data } = await supabase
      .from('seelen_profile')
      .select('*')
      .eq('id', '00000000-0000-0000-0000-000000000000')
      .single();

    expect(data).toBeNull();
  }, 30_000);

  afterAll(async () => {
    if (!runTests || !supabase) return;
    for (const id of createdIds) {
      await supabase.from('seelen_profile').delete().eq('id', id);
    }
  }, 30_000);
});
