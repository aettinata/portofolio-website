import { ImageResponse } from 'next/og';

export const alt = 'Faisal Adama - Developer Portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '1200px',
          height: '630px',
          backgroundColor: '#0A0A0A',
          padding: '80px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        }}
      >
        {/* 1. Grid Pattern - Layer Dasar (paling awal di source order) */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex' }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* 2. Watermark Raksasa - Layer Tengah */}
        <div
          style={{
            position: 'absolute',
            right: '120px',
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '300px',
            fontWeight: 700,
            color: '#F5F5F5',
            opacity: 0.045,
            letterSpacing: '-0.05em',
            lineHeight: 1,
          }}
        >
          FA
        </div>

        {/* 3. Konten Utama - Layer Atas (terletak terakhir di source order, pos: relative) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            width: '600px',
            height: '100%',
          }}
        >
          {/* Favicon Kecil */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              backgroundColor: '#F5F5F5',
              color: '#0A0A0A',
              fontSize: '36px',
              fontWeight: 700,
              borderRadius: '16px',
            }}
          >
            FA
          </div>

          {/* Nama & Subtitle */}
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '32px' }}>
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 700,
                color: '#F5F5F5',
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              }}
            >
              Faisal Adama
            </h1>
            <p
              style={{
                fontSize: '28px',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.55)',
                margin: 0,
                marginTop: '16px',
                letterSpacing: '-0.01em',
              }}
            >
              Fresh Graduate IT · Web Developer
            </p>
          </div>

          {/* Tech Chips */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '40px',
            }}
          >
            {['Next.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: '12px 24px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '999px',
                  color: '#F5F5F5',
                  fontSize: '20px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              display: 'flex',
              width: '600px',
              height: '1px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              marginTop: '40px',
            }}
          />

          {/* Metadata Footer */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '600px',
              marginTop: '16px',
              fontFamily: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
              fontSize: '18px',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            <span>adamaettinata.vercel.app</span>
            <span>© 2026</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
