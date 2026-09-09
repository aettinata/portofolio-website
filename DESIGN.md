markdown
# DESIGN.md — Futuristik Monochrome + Neon Cyan (Portfolio Faisal)

## Design Philosophy
Futuristik monochrome dengan aksen neon cyan sebagai "percikan" warna. Terinspirasi dari arsitektur modern, UI produk premium (Linear, Raycast), dengan sentuhan neo-brutalist.

---

## Color Palette (Modifikasi dari Rekomendasi Skill)

| Role | Hex | Nama CSS Variable |
|------|-----|-------------------|
| **Background** | `#0A0A0A` | `--color-background` |
| **Surface** | `#121212` | `--color-surface` |
| **Card** | `#1A1A1A` | `--color-card` |
| **Card Border** | `#2A2A2A` | `--color-card-border` |
| **Text Primary** | `#F5F5F5` | `--color-foreground` |
| **Text Muted** | `#888888` | `--color-muted-foreground` |
| **Text Dim** | `#555555` | `--color-dim` |
| **Accent Neon Cyan** | `#00FFD1` | `--color-accent` |
| **Accent Neon Pink** (secondary) | `#FF0055` | `--color-accent-secondary` |
| **Border** | `#2A2A2A` | `--color-border` |
| **Ring (Fokus)** | `#00FFD1` | `--color-ring` |

> **Catatan:** Tidak ada hijau (#22C55E) — diganti dengan neon cyan (#00FFD1) untuk kesan futuristik.

---

## Typography

| Elemen | Font | Ukuran | Weight | Letter Spacing |
|--------|------|--------|--------|----------------|
| **H1 (Hero)** | Space Grotesk | 4rem - 6rem | 700 | -0.02em |
| **H2** | Space Grotesk | 2.5rem - 3rem | 600 | -0.01em |
| **H3** | Space Grotesk | 1.5rem | 500 | 0 |
| **Body** | Inter | 1rem | 400 | 0 |
| **Small/Meta** | Inter | 0.875rem | 400 | 0.02em |
| **Button/CTA** | Space Grotesk | 0.875rem | 500 | 0.08em (uppercase) |

**Google Fonts:**
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
Layout & Spacing
Grid: 12-column grid, dengan gutter 24px.

Max Width: 1200px untuk konten utama.

Spacing System: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px.

UI Components Style
Button
css
.btn-neon {
  background: transparent;
  border: 1.5px solid #F5F5F5;
  color: #F5F5F5;
  padding: 12px 32px;
  font-family: 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.btn-neon:hover {
  background: #F5F5F5;
  color: #0A0A0A;
}
.btn-neon-cta {
  border-color: #00FFD1;
  color: #00FFD1;
}
.btn-neon-cta:hover {
  background: #00FFD1;
  color: #0A0A0A;
}
Card (Proyek/Sertifikasi)
css
.card-futuristic {
  background: #121212;
  border: 1px solid #2A2A2A;
  transition: all 0.4s ease;
  overflow: hidden;
}
.card-futuristic:hover {
  transform: translateY(-8px);
  border-color: #00FFD1;
  box-shadow: 0 20px 60px rgba(0, 255, 209, 0.08);
}
Hero Text
Ukuran utama: 4rem - 6rem (responsif).

Warna: #F5F5F5.

Teks aksen (misal "architecture") menggunakan warna #00FFD1.

Effects & Animations
Grain/Noise Overlay: SVG noise di background (tidak smooth, terasa raw/analog).

Grid Dekoratif: Garis grid tipis (#1A1A1A) di background halaman.

Animasi: Hanya 0.2s - 0.3s, tidak berlebihan.

Hover: Border color berubah, bukan background.

Typing Cursor: Efek kursor berkedip di tagline (opsional).

Anti-Patterns (Agar Tidak Terlihat Seperti Template AI)
❌ Tidak ada gradasi smooth yang berlebihan.

❌ Tidak ada shadow yang terlalu lembut (drop-shadow: none).

❌ Tidak ada ilustrasi vektor generik.

❌ Tidak ada rounded corner besar (maksimal 4px).

❌ Tidak ada animasi yang lambat (>0.5s).

Pre-Delivery Checklist (Dari Skill UI/UX)
□ No emojis as icons (gunakan Lucide React atau Heroicons)
□ cursor: pointer pada semua elemen klik
□ Hover states dengan transisi smooth (150-300ms)
□ Kontras teks minimal 4.5:1 (terpenuhi: putih di hitam)
□ Focus states visible untuk keyboard navigation (ring cyan)
□ prefers-reduced-motion dihormati
□ Responsif: 375px, 768px, 1024px, 1440px
Catatan Implementasi
Gunakan Tailwind CSS dengan konfigurasi custom colors di tailwind.config.ts.

Gunakan next-themes untuk dark mode (hanya dark mode, light mode tidak diperlukan).

Semua ikon dari Lucide React atau Heroicons.