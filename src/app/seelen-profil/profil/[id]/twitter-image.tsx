import { ImageResponse } from 'next/og';
import { getProfile } from '@/lib/seelen-profil/db';
import { getArchetyp } from '@/lib/seelen-profil/archetypen';

export const runtime = 'edge';
export const alt = 'Seelen-Profil | Elfenorakel';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const ELEMENT_COLORS: Record<string, string> = {
  feuer: '#EF4444',
  wasser: '#3B82F6',
  luft: '#A78BFA',
  erde: '#22C55E',
};

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let profile;
  try {
    profile = await getProfile(id);
  } catch {
    profile = null;
  }

  // Fallback: generic OG image when profile not found
  if (!profile) {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #0D0D0F 0%, #1a0a2e 50%, #0D0D0F 100%)',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 64,
              fontWeight: 'bold',
              color: '#C9A35C',
              marginBottom: 16,
            }}
          >
            Seelen-Profil
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 24,
              color: '#A0A0A0',
            }}
          >
            Entdecke deinen kosmischen Archetyp
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 14,
              color: '#2DD4BF',
              marginTop: 40,
            }}
          >
            elfenorakel.de
          </div>
        </div>
      ),
      { ...size }
    );
  }

  const archetyp = getArchetyp(profile.archetyp_id);
  const elements = Object.entries(profile.element_signatur) as [string, number][];

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0D0D0F 0%, #1a0a2e 50%, #0D0D0F 100%)',
          padding: 60,
          fontFamily: 'sans-serif',
        }}
      >
        {/* Left side: Text content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            paddingRight: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              color: '#A0A0A0',
              marginBottom: 8,
            }}
          >
            {profile.vorname}, du bist:
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 52,
              fontWeight: 'bold',
              color: '#C9A35C',
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            {archetyp.name}
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 18,
              color: '#888888',
              lineHeight: 1.5,
              maxWidth: 500,
            }}
          >
            {archetyp.claim}
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 14,
              color: '#2DD4BF',
              marginTop: 40,
            }}
          >
            9-dimensionales Seelen-Profil · elfenorakel.de
          </div>
        </div>

        {/* Right side: Element signature bars */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: 320,
            gap: 20,
          }}
        >
          {elements.map(([el, pct]) => (
            <div
              key={el}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: 15,
                  color: '#A0A0A0',
                  width: 70,
                  textTransform: 'capitalize',
                }}
              >
                {el.charAt(0).toUpperCase() + el.slice(1)}
              </div>

              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  height: 10,
                  borderRadius: 5,
                  background: '#1a1a2e',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: `${pct}%`,
                    height: '100%',
                    borderRadius: 5,
                    background: ELEMENT_COLORS[el] || '#C9A35C',
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  fontSize: 13,
                  color: '#707070',
                  width: 36,
                  justifyContent: 'flex-end',
                }}
              >
                {pct}%
              </div>
            </div>
          ))}

          {/* Decorative gold line */}
          <div
            style={{
              display: 'flex',
              width: '100%',
              height: 1,
              background: 'linear-gradient(90deg, transparent, #C9A35C, transparent)',
              marginTop: 12,
            }}
          />

          <div
            style={{
              display: 'flex',
              fontSize: 13,
              color: '#707070',
              justifyContent: 'center',
            }}
          >
            Element-Signatur
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
