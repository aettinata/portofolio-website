# 🌐 Faisal Adama — Personal Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38B2AC)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black)
![License](https://img.shields.io/badge/License-MIT-green)

Portofolio pribadi Faisal Adama — dibangun dengan Next.js 16, TypeScript, dan Tailwind CSS v4. Menampilkan perpaduan estetika visual minimalis Apple-inspired, interaksi mikro yang dinamis, serta integrasi AI cerdas.

🔗 **Live Demo:** [https://adamaettinata.vercel.app](https://adamaettinata.vercel.app)  
📌 **Status:** Production Ready — Terakhir diperbarui: September 2026

---

## ✨ Fitur Utama

- 🍎 **Apple-Inspired Minimalist Design** — Estetika monokrom elegan, tipografi presisi, dan hierarki visual berbasis grid 8px.
- 🌗 **Dark Mode & Reduced Motion Support** — Transisi tema mulus (`next-themes`) serta kepatuhan mutlak pada preferensi aksesibilitas `prefers-reduced-motion`.
- 🤖 **AI Chatbot "Tanya Faisal"** — Asisten interaktif cerdas bertenaga Google Gemini 3.6 Flash dan Vercel AI SDK dengan dukungan real-time streaming dan guardrails konteks portofolio.
- 🐙 **GitHub Activity Feed** — Integrasi server-side API GitHub live dengan caching 1 jam untuk performa optimal.
- 🪄 **Hero Parallax & Micro-Interactions** — Animasi reveal kata per kata, efek scroll parallax, dan magnetic hover physics bertenaga Framer Motion.
- 🍱 **Bento Grid Profile Layout** — Tata letak kartu informasi asimetris untuk profil, keahlian, dan statistik.
- 📱 **Fluid & Responsive** — Tampilan sempurna di seluruh breakpoint (mobile 375px, tablet 768px, hingga desktop layar lebar).
- 🧩 **Custom 404 & Skeleton Shimmer** — Penanganan rute tidak ditemukan yang estetis dan transisi skeleton yang halus.
- ♿ **Lighthouse Accessibility 90+** — Navigasi keyboard penuh, focus trap modal, skip-link terproteksi, dan target sentuh minimum 44px (WCAG AA).

---

## 🛠️ Tech Stack

| Layer | Teknologi |
|---|---|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 (native `@theme` & CSS variables) |
| **Animation** | Framer Motion |
| **AI Integration** | Gemini 3.6 Flash + Vercel AI SDK |
| **Icons** | Lucide React + React Icons |
| **Deployment** | Vercel |
| **Runtime** | Node.js (Edge deprecated) |

---

## 📂 Struktur Direktori

```bash
portofolio-website/
├── public/
│   ├── images/              # Avatar monokrom, gambar proyek, dan thumbnail
│   └── resume.pdf           # Dokumen CV / Resume (coming soon)
├── src/
│   ├── app/
│   │   ├── (routes)/        # /, /about, /projects, /certifications, /contact
│   │   ├── api/
│   │   │   ├── chat/        # Endpoint streaming AI Chatbot Gemini
│   │   │   └── github/      # Server-side GitHub live activity feed
│   │   ├── layout.tsx       # Root layout dengan ThemeProvider & ChatWidget
│   │   ├── template.tsx     # Page transition wrapper (entry animations)
│   │   └── globals.css      # Design token & styling global Tailwind v4
│   ├── components/
│   │   ├── ui/              # Button, Card, Header, Footer, SectionDivider
│   │   ├── sections/        # Hero, BentoGrid, GitHubActivity, TechMarquee, NowSection
│   │   ├── chat/            # Floating ChatWidget & Dialog modal
│   │   └── animations/      # FadeIn, Magnetic, HeroHeadline, HeroScrollParallax
│   ├── data/
│   │   ├── profile.json     # Bio, kontak, keahlian, pendidikan, status terkini
│   │   ├── projects.json    # Detail data portofolio proyek
│   │   └── certifications.json
│   ├── lib/
│   │   ├── utils.ts         # Utility styling cn()
│   │   └── time.ts          # Helper format waktu lokal Indonesia
│   └── types/               # Definisi TypeScript Project, Profile, Certification
├── .env.example             # Contoh environment variables
├── .env.local               # Kredensial lokal (git-ignored)
└── package.json
```

---

## 🔐 Environment Variables

Aplikasi membutuhkan API key berikut untuk menjalankan fungsionalitas AI Chatbot:

| Variable | Deskripsi | Wajib |
|---|---|---|
| `GEMINI_API_KEY` | Google AI Studio API key untuk model Gemini 3.6 Flash | Ya |

Dapatkan API Key gratis di [Google AI Studio](https://aistudio.google.com/apikey).

---

## 🚀 Panduan Menjalankan Lokal

### Prasyarat
- Node.js 20.x atau lebih baru
- npm / pnpm / yarn

### Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/aettinata/portofolio-website.git
   cd portofolio-website
   ```

2. **Install dependensi**
   ```bash
   npm install
   ```

3. **Konfigurasi Environment Variables**
   Salin template `.env.example` ke `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Buka file `.env.local` dan masukkan API key Anda:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Jalankan development server**
   ```bash
   npm run dev
   ```

5. **Buka di browser**
   Akses `http://localhost:3000` pada peramban Anda.

### Production Build
```bash
npm run build
npm start
```

---

## 🧑‍💻 Tentang Saya

Halo! Saya **Faisal Adama**, seorang lulusan S1 Teknik Informatika dari Universitas Negeri Semarang. Berfokus pada perpaduan antarmuka modern yang estetik, keandalan sistem berskala besar, serta pemanfaatan kecerdasan buatan (AI) untuk menghadirkan solusi teknologi yang nyata dan berdampak.

- 🌐 **Website:** [adamaettinata.vercel.app](https://adamaettinata.vercel.app)
- 🐙 **GitHub:** [@aettinata](https://github.com/aettinata)
- 💼 **LinkedIn:** [Faisal Adama](https://www.linkedin.com/in/faisal-adama-971a4a312/)
- 🐦 **Twitter/X:** [@adamaettinata](https://twitter.com/adamaettinata)
- ✉️ **Email:** aettinata@gmail.com

---

## 📄 Lisensi

Proyek ini dirilis di bawah lisensi [MIT](LICENSE). Silakan gunakan sebagai inspirasi atau referensi untuk website portofolio pribadi Anda.
