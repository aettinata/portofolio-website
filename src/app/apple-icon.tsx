import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0A0A',
          color: '#F5F5F5',
          fontSize: 90,
          fontWeight: 700,
          fontFamily: 'sans-serif',
          borderRadius: '40px',
        }}
      >
        FA
      </div>
    ),
    { ...size }
  );
}
