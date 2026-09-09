markdown
# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Personal Portfolio Website

**Versi:** 1.0  
**Tanggal:** September 2026  
**Status:** Draft

---

## 1. PENDAHULUAN

### 1.1 Tujuan
Membangun website portofolio pribadi yang profesional, responsif, dan modern sebagai wadah untuk menampilkan identitas diri, proyek-proyek yang pernah dikerjakan, dan sertifikasi yang dimiliki. Website ini juga berfungsi sebagai "digital resume" untuk mendukung pencarian kerja sebagai fresh graduate IT.

### 1.2 Sasaran Pengguna
- **Utama:** Rekruter HRD dan Hiring Manager perusahaan teknologi.
- **Sekunder:** Rekan sesama developer, komunitas IT, dan klien potensial.

### 1.3 Tujuan Bisnis / Karier
- Meningkatkan kredibilitas dan profesionalisme di mata rekruter.
- Menyediakan satu tautan (link) yang berisi semua informasi penting tentang diri dan karya.
- Mendukung proses aplikasi kerja dengan portofolio yang terstruktur.

---

## 2. RUANG LINGKUP (SCOPE)

### 2.1 Fitur yang Harus Ada (Must Have)
| ID | Fitur | Deskripsi |
|----|-------|-----------|
| F-01 | **Halaman Beranda (Hero)** | Menampilkan foto profil, nama, jabatan, tagline singkat, dan tombol CTA ke bagian proyek/kontak. |
| F-02 | **Halaman Tentang Saya** | Bio singkat, latar belakang pendidikan, keahlian teknis (skills), dan minat. |
| F-03 | **Daftar Portofolio** | Grid kartu yang menampilkan judul proyek, gambar thumbnail, teknologi yang digunakan, dan link ke halaman detail. |
| F-04 | **Detail Portofolio** | Halaman khusus per proyek dengan deskripsi lengkap, tantangan & solusi, screenshot, link demo, dan link GitHub. |
| F-05 | **Daftar Sertifikasi** | Grid atau daftar sertifikat dengan badge/logo institusi, nama sertifikasi, dan tanggal perolehan. |
| F-06 | **Detail Sertifikasi** | Halaman khusus per sertifikat dengan informasi lengkap dan gambar/embed sertifikat. |
| F-07 | **Halaman Kontak** | Formulir kontak (nama, email, subjek, pesan) dan informasi media sosial (LinkedIn, GitHub, Twitter/X). |
| F-08 | **Navigasi (Header)** | Menu navigasi sticky ke semua halaman utama (Beranda, Tentang, Portofolio, Sertifikasi, Kontak). |
| F-09 | **Footer** | Copyright, tautan cepat, dan media sosial. |
| F-10 | **Responsif** | Tampilan optimal di desktop, tablet, dan mobile. |
| F-11 | **SEO Friendly** | Meta tags, judul halaman, dan deskripsi yang baik untuk mesin pencari. |
| F-12 | **Performa Cepat** | Waktu muat halaman < 3 detik (Lighthouse score > 90). |

### 2.2 Fitur yang Bagus untuk Dimiliki (Nice to Have)
| ID | Fitur | Deskripsi |
|----|-------|-----------|
| N-01 | **Dark Mode Toggle** | Pengguna bisa beralih antara tema terang dan gelap. |
| N-02 | **Animasi Scroll** | Efek fade-in atau slide-up saat scroll (menggunakan Framer Motion). |
| N-03 | **Filter Proyek** | Filter portofolio berdasarkan kategori (Web, Mobile, AI, dll). |
| N-04 | **Download CV** | Tombol untuk mengunduh file CV/Resume dalam format PDF. |
| N-05 | **Integration with Google AI Pro** | Fitur chatbot sederhana yang bisa menjawab pertanyaan tentang profil (opsional, untuk belajar). |
| N-06 | **Blog/Artikel Sederhana** | Halaman untuk menulis artikel atau catatan belajar (jika ada waktu). |

### 2.3 Di Luar Ruang Lingkup (Out of Scope)
- Sistem autentikasi/login.
- Database backend yang kompleks (cukup menggunakan file JSON atau MDX).
- E-commerce atau transaksi pembayaran.
- Fitur komentar atau forum diskusi.

---

## 3. SPESIFIKASI TEKNIS

### 3.1 Stack Teknologi
| Komponen | Teknologi | Alasan |
|----------|-----------|--------|
| **Framework** | Next.js 14+ (App Router) | SEO baik, performa tinggi, dan mudah di-deploy di Vercel. |
| **Bahasa** | TypeScript | Type safety, lebih mudah di-maintain, standar industri. |
| **Styling** | Tailwind CSS | Utility-first, cepat, dan responsif. |
| **Animasi** | Framer Motion | Animasi halus dan mudah diimplementasikan. |
| **Content Management** | File JSON / MDX | Konten statis, mudah di-update tanpa database. |
| **Hosting** | Vercel | Otomatisasi deploy dari GitHub, gratis. |
| **Version Control** | Git & GitHub | Manajemen kode dan kolaborasi. |

### 3.2 Struktur Folder (Rekomendasi)
portfolio-website/
├── public/
│ ├── images/
│ │ ├── profile.jpg
│ │ ├── projects/
│ │ └── certifications/
│ └── favicon.ico
├── src/
│ ├── app/
│ │ ├── (routes)/
│ │ │ ├── page.tsx # Beranda
│ │ │ ├── about/
│ │ │ │ └── page.tsx
│ │ │ ├── projects/
│ │ │ │ ├── page.tsx # Daftar Projek
│ │ │ │ └── [slug]/
│ │ │ │ └── page.tsx # Detail Projek
│ │ │ ├── certifications/
│ │ │ │ ├── page.tsx # Daftar Sertifikasi
│ │ │ │ └── [slug]/
│ │ │ │ └── page.tsx # Detail Sertifikasi
│ │ │ └── contact/
│ │ │ └── page.tsx
│ │ ├── layout.tsx
│ │ ├── globals.css
│ │ └── metadata.ts
│ ├── components/
│ │ ├── ui/
│ │ │ ├── Header.tsx
│ │ │ ├── Footer.tsx
│ │ │ ├── Button.tsx
│ │ │ └── Card.tsx
│ │ ├── sections/
│ │ │ ├── Hero.tsx
│ │ │ ├── Skills.tsx
│ │ │ ├── ProjectGrid.tsx
│ │ │ └── CertificationGrid.tsx
│ │ └── animations/
│ │ └── FadeInSection.tsx
│ ├── data/
│ │ ├── profile.json # Data profil
│ │ ├── projects.json # Data proyek
│ │ └── certifications.json # Data sertifikasi
│ ├── lib/
│ │ └── utils.ts # Fungsi bantu
│ └── styles/
│ └── tailwind.css
├── .env.local # Environment variables
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json

text

### 3.3 Struktur Data

#### `profile.json`
```json
{
  "name": "Nama Lengkap",
  "title": "Fresh Graduate IT | Web Developer",
  "tagline": "Membangun solusi digital yang berdampak",
  "bio": "Lulusan IT dengan minat di bidang ...",
  "education": [
    {
      "degree": "S1 Teknik Informatika",
      "institution": "Nama Universitas",
      "year": "2022-2026"
    }
  ],
  "skills": ["TypeScript", "React", "Next.js", "Tailwind CSS", "Python"]
}
projects.json
json
[
  {
    "id": "project-1",
    "slug": "nama-proyek",
    "title": "Judul Proyek",
    "description": "Deskripsi singkat",
    "fullDescription": "Deskripsi lengkap proyek...",
    "challenges": "Tantangan yang dihadapi...",
    "solutions": "Solusi yang diterapkan...",
    "technologies": ["Next.js", "TypeScript", "Tailwind CSS"],
    "image": "/images/projects/project1.jpg",
    "demoUrl": "https://demo.com",
    "githubUrl": "https://github.com/username/repo",
    "category": "Web",
    "date": "2026-01"
  }
]
certifications.json
json
[
  {
    "id": "cert-1",
    "slug": "nama-sertifikasi",
    "name": "Judul Sertifikasi",
    "issuer": "Google",
    "issueDate": "2026-06",
    "expiryDate": "2029-06",
    "credentialId": "ABC123",
    "credentialUrl": "https://verify.com/abc",
    "image": "/images/certifications/cert1.jpg"
  }
]
4. DESAIN UI/UX
4.1 Tema dan Gaya Visual
Warna Utama: Biru gelap (#0a192f), Biru terang (#64ffda), Abu-abu (#8892b0), Putih (#e6f1ff)

Tipografi: Inter atau Poppins (Google Fonts)

Gaya: Minimalis, modern, dengan aksen gradasi dan efek glassmorphism pada elemen tertentu.

4.2 Alur Navigasi
text
Beranda → Tentang Saya → Portofolio → Sertifikasi → Kontak
4.3 Wireframe (Deskripsi Visual)
Halaman Beranda (Hero):

Foto profil (lingkaran) di kiri, teks perkenalan dan CTA di kanan (desktop).

Latar belakang dengan efek partikel atau gradasi halus.

Halaman Tentang Saya:

Grid 2 kolom (kiri: bio & pendidikan, kanan: skill tags dan minat).

Halaman Daftar Portofolio:

Grid 3 kolom (desktop) / 2 kolom (tablet) / 1 kolom (mobile).

Setiap kartu: gambar, judul, teknologi, dan tombol "Lihat Detail".

Halaman Detail Portofolio:

Layout: hero dengan gambar besar, lalu deskripsi, tantangan & solusi, dan link demo/GitHub.

Halaman Daftar Sertifikasi:

Grid 3 kolom dengan kartu berisi logo institusi, nama sertifikat, dan tanggal.

Halaman Detail Sertifikasi:

Layout: gambar sertifikat (besar) di atas, info detail di bawah.

Halaman Kontak:

Grid 2 kolom: formulir di kiri, info kontak & media sosial di kanan.

5. PERSYARATAN NON-FUNGSIONAL
5.1 Performa
Waktu muat halaman pertama (First Contentful Paint) < 1.5 detik.

Lighthouse performance score > 90.

5.2 Keamanan
Menggunakan HTTPS (otomatis dari Vercel).

Tidak ada hardcoded API keys atau credentials (gunakan environment variables).

5.3 Aksesibilitas (Accessibility)
Kontras warna sesuai standar WCAG.

Mendukung keyboard navigation.

Semantic HTML yang baik.

5.4 Kompatibilitas Browser
Chrome (terbaru), Firefox (terbaru), Safari (terbaru), Edge (terbaru).

6. MILESTONE & TIMELINE
Fase	Aktivitas	Estimasi Waktu
Fase 1	Setup proyek, instalasi dependensi, konfigurasi Tailwind	1 hari
Fase 2	Membuat komponen UI dasar (Header, Footer, Button, Card)	2 hari
Fase 3	Mengembangkan Halaman Beranda (Hero)	1 hari
Fase 4	Mengembangkan Halaman Tentang Saya	1 hari
Fase 5	Mengembangkan Halaman Daftar & Detail Portofolio	3 hari
Fase 6	Mengembangkan Halaman Daftar & Detail Sertifikasi	2 hari
Fase 7	Mengembangkan Halaman Kontak	1 hari
Fase 8	Menambahkan animasi dan polish UI	2 hari
Fase 9	Testing, debugging, dan optimasi	2 hari
Fase 10	Deploy ke Vercel	1 hari
Total		± 16 hari (3 minggu)
7. KONTEN YANG DIBUTUHKAN
Sebelum mulai implementasi, siapkan aset berikut:

Aset	Keterangan
Foto Profil	Format .jpg/.png, resolusi minimal 400x400px.
Foto/Gambar Proyek	Masing-masing proyek minimal 1 gambar, ukuran 1200x630px (untuk share image).
Gambar Sertifikat	Screenshot atau scan sertifikat, ukuran 800x600px.
Ikon Skill	Logo teknologi (opsional, bisa menggunakan react-icons).
CV/Resume PDF	File PDF untuk di-download.
Deskripsi Proyek	Teks lengkap untuk setiap proyek (minimal 2-3 paragraf).
Bio Diri	Teks perkenalan diri yang menarik (minimal 1 paragraf).
8. RISIKO & MITIGASI
Risiko	Dampak	Mitigasi
Kehabisan ide desain	Proyek terhambat	Cari inspirasi dari portofolio orang lain (Dribbble, Behance)
Bug yang tidak terduga	Proyek mundur	Gunakan AI (Antigravity) untuk debugging, dan lakukan testing bertahap
Performa lambat	Pengalaman pengguna buruk	Gunakan Next.js Image optimization, code splitting, dan lazy loading
Tidak deploy	Website tidak online	Ikuti tutorial deploy Vercel dari awal, jangan tunda sampai akhir
9. DOKUMENTASI & MAINTENANCE
9.1 Dokumentasi
README.md di GitHub dengan instruksi setup dan deploy.

Komentar kode untuk komponen yang kompleks.

9.2 Maintenance
Update konten (proyek & sertifikasi) secara berkala.

Cek performa dan broken links setiap 3 bulan.

