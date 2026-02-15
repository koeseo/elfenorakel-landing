import { supabase, createServerClient } from '@/lib/supabase';
import type { QuizInput, SeelenProfil } from './algorithmus';

export interface ProfileRow {
  id: string;
  email: string;
  vorname: string;
  geburtsdatum: string;
  geburtszeit: string | null;
  kartenwahl: string[];
  seelen_fragen: { frageId: string; antwort: string }[];
  archetyp_id: number;
  element_signatur: { feuer: number; wasser: number; luft: number; erde: number };
  schatten_karte: string;
  licht_karte: string;
  mondphase: string;
  planet: string;
  chakra: string;
  kosmische_aufgabe: string;
  jahres_energie: { jahr: number; arcanaId: number };
  tier: 'free_teaser' | 'basis' | 'report' | 'premium';
  payment_status: 'pending' | 'paid';
  payment_id: string | null;
  paid_at: string | null;
  created_at: string;
  updated_at: string;
}

// Create a new profile after quiz completion
export async function createProfile(
  input: QuizInput,
  profil: SeelenProfil,
  email: string
): Promise<string> {
  const { data, error } = await supabase
    .from('seelen_profile')
    .insert({
      email,
      vorname: input.vorname,
      geburtsdatum: input.geburtsdatum,
      geburtszeit: input.geburtszeit || null,
      kartenwahl: input.kartenwahl,
      seelen_fragen: input.seelenFragen,
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

  if (error) throw new Error(`Failed to create profile: ${error.message}`);
  return data.id;
}

// Get a profile by ID (for profile page)
export async function getProfile(id: string): Promise<ProfileRow | null> {
  const { data, error } = await supabase
    .from('seelen_profile')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return null;
  return data as ProfileRow;
}

// Update payment status (called from webhook)
export async function updatePayment(
  id: string,
  tier: string,
  paymentId: string
): Promise<void> {
  const serverClient = createServerClient();
  const { error } = await serverClient
    .from('seelen_profile')
    .update({
      tier,
      payment_status: 'paid',
      payment_id: paymentId,
      paid_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq('id', id);

  if (error) throw new Error(`Failed to update payment: ${error.message}`);
}

// Check if email already has a profile
export async function getProfileByEmail(email: string): Promise<ProfileRow | null> {
  const { data, error } = await supabase
    .from('seelen_profile')
    .select('*')
    .eq('email', email)
    .single();

  if (error) return null;
  return data as ProfileRow;
}
