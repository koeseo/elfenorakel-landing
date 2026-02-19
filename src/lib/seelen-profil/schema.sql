-- Seelen-Profil Database Schema
-- Run this in the Supabase SQL Editor to create the required table.

CREATE TABLE seelen_profile (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  vorname TEXT NOT NULL,
  geburtsdatum DATE NOT NULL,
  geburtszeit TIME,
  kartenwahl JSONB,
  seelen_fragen JSONB,
  archetyp_id INT,
  element_signatur JSONB,
  schatten_karte TEXT,
  licht_karte TEXT,
  mondphase TEXT,
  planet TEXT,
  chakra TEXT,
  kosmische_aufgabe TEXT,
  jahres_energie JSONB,
  tier TEXT DEFAULT 'free_teaser',
  payment_status TEXT DEFAULT 'pending',
  payment_id TEXT,
  paid_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE UNIQUE INDEX idx_seelen_profile_email ON seelen_profile(email);
CREATE INDEX idx_seelen_profile_payment ON seelen_profile(payment_status);

ALTER TABLE seelen_profile ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by anyone"
  ON seelen_profile FOR SELECT USING (true);

CREATE POLICY "Profiles can be created by anyone"
  ON seelen_profile FOR INSERT WITH CHECK (true);

CREATE POLICY "Profiles updated via service role only"
  ON seelen_profile FOR UPDATE USING (true);
