# 🌐 Personal Portfolio — [Nama Kamu]

> Sebuah website portofolio modern yang dibangun dengan Next.js 14, TypeScript, dan Tailwind CSS. Menampilkan identitas diri, proyek-proyek, sertifikasi, dan cara untuk terhubung.

🔗 **Live Demo:** [https://portfolio-kamu.vercel.app](https://portfolio-kamu.vercel.app)  
📌 **Status:** Aktif — Terakhir diperbarui: September 2026

---

## ✨ Fitur Utama

- ⚡ **Performa tinggi** — Next.js 14 dengan App Router, Image Optimization, dan code splitting
- 🎨 **Desain futuristik monochrome** — Gaya visual berani dengan aksen neon cyan dan efek grain/noise
- 🌗 **Dark mode** — Toggle tema terang/gelap menggunakan `next-themes`
- 📱 **Responsif** — Tampilan optimal di desktop, tablet, dan mobile
- 🧩 **Data terstruktur** — Konten dikelola melalui file JSON di `src/data/`
- 🔍 **SEO Friendly** — Metadata lengkap dan Open Graph tags
- 🖱️ **Animasi halus** — Menggunakan Framer Motion untuk efek scroll dan hover

---

## 📂 Struktur Proyek
portfolio-website/
├── public/
│ └── images/ # Gambar profil, proyek, dan sertifikasi
├── src/
│ ├── app/
│ │ ├── (routes)/ # Halaman: /, /about, /projects, /certifications, /contact
│ │ ├── layout.tsx # Layout utama dengan ThemeProvider
│ │ └── globals.css # Gaya global dengan variabel CSS
│ ├── components/
│ │ ├── ui/ # Komponen reusable: Header, Footer, Button, Card
│ │ ├── sections/ # Komponen per halaman: Hero, ProjectGrid, dll.
│ │ └── animations/ # Komponen animasi FadeIn
│ ├── data/
│ │ ├── profile.json # Data diri, bio, skills
│ │ ├── projects.json # Daftar proyek
│ │ └── certifications.json # Daftar sertifikasi
│ └── lib/
│ └── utils.ts # Fungsi bantu
├── .env.local # Environment variables (jangan commit!)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json

text

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Kegunaan |
|-----------|----------|
| **Next.js 14** | Framework React dengan App Router, SSR, dan static generation |
| **TypeScript** | Type safety dan dokumentasi kode |
| **Tailwind CSS** | Utility-first styling yang cepat dan responsif |
| **Framer Motion** | Animasi halus untuk pengalaman pengguna yang lebih baik |
| **Next Themes** | Dukungan dark mode dengan persistensi lokal |
| **Lucide React** | Ikon-ikon modern dan ringan |
| **Vercel** | Hosting dan deployment otomatis dari GitHub |

---

## 🚀 Cara Menjalankan di Lokal

### Prasyarat
- Node.js 18.x atau lebih baru
- npm, yarn, atau pnpm

### Langkah-langkah

1. **Clone repository**
   ```bash
   git clone https://github.com/username/portfolio-website.git
   cd portfolio-website
Install dependencies

bash
npm install
# atau
yarn install
Jalankan development server

bash
npm run dev
Buka browser di http://localhost:3000

Build untuk Produksi
bash
npm run build
npm start
📦 Deployment
Proyek ini di-deploy menggunakan Vercel. Setiap kali ada push ke branch main, Vercel akan otomatis melakukan build dan deploy.

Langkah manual:

Push kode ke GitHub.

Buka Vercel dan hubungkan dengan repository ini.

Vercel akan mendeteksi Next.js dan melakukan deploy secara otomatis.

🧑‍💻 Tentang Saya
Halo! Saya [Nama Kamu] , [sebutkan statusmu, misal: fresh graduate IT] dengan minat besar dalam pengembangan web modern dan desain antarmuka pengguna. Saya suka membangun solusi digital yang berdampak dan terus belajar teknologi baru.

🌐 Website

🐙 GitHub

💼 LinkedIn

🐦 Twitter/X

📄 Lisensi
Proyek ini bersifat open-source di bawah lisensi MIT. Silakan gunakan sebagai referensi atau template untuk portofolio pribadimu.

🙏 Ucapan Terima Kasih
Next.js — Framework yang luar biasa.

Vercel — Hosting yang sempurna untuk Next.js.

Tailwind CSS — Styling yang menyenangkan.

Framer Motion — Animasi yang mulus.

Dibuat dengan ❤️ oleh [Nama Kamu]