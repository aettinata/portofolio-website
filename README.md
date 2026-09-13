# 🌐 Personal Portfolio — Faisal Adama

> A modern, accessible, and high-performance portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Showcasing identity, projects, certifications, and ways to connect.

🔗 **Live Demo:** [https://portfolio-faisal.vercel.app](https://portfolio-faisal.vercel.app)  
📌 **Status:** Active — Last updated: September 2026

---

## ✨ Key Features

- ⚡ **High Performance** — Powered by Next.js 16 with App Router, SSR, Image Optimization, and code splitting.
- 🎨 **Futuristic Monochrome Design** — Bold visual aesthetic with neon cyan accents, grain/noise effects, and Apple-inspired minimalism.
- 🌗 **Dark Mode** — Seamless light/dark theme toggling using `next-themes`.
- ♿ **Strict Accessibility (WCAG AA)** — Features off-screen positioned skip-links, robust focus states, and 44px minimum touch targets.
- 🖱️ **Optimized Animations** — Refined entry page transitions mapped through `template.tsx` (preventing content stacking bugs) via **Framer Motion**, including strict support for `useReducedMotion`.
- 🧩 **Structured Data** — Content managed seamlessly via JSON files in `src/data/`.
- 🔍 **SEO Friendly** — Comprehensive metadata configuration and Open Graph tags.

---

## 📂 Project Structure

```bash
portfolio-website/
├── public/
│   └── images/              # Profile, project, and certification assets
├── src/
│   ├── app/
│   │   ├── (routes)/        # Routes: /, /about, /projects, /certifications, /contact
│   │   ├── layout.tsx       # Root layout with ThemeProvider
│   │   ├── template.tsx     # Page transition wrapper (entry animations only)
│   │   └── globals.css      # Global styles with Tailwind v4 native patterns (@theme)
│   ├── components/
│   │   ├── ui/              # Reusable UI components: Header, Footer, Button, Card
│   │   ├── sections/        # Section components: Hero, ProjectGrid, etc.
│   │   └── animations/      # Animation wrappers
│   ├── data/
│   │   ├── profile.json     # Personal info, bio, skills
│   │   ├── projects.json    # Project list
│   │   └── certifications.json # Certification list
│   └── lib/
│       └── utils.ts         # Utility functions
├── .env.local               # Environment variables (do not commit!)
├── eslint.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React Framework with App Router, SSR, and optimized asset delivery |
| **React 19** | Latest UI library for rendering robust interfaces |
| **TypeScript** | Static typing and comprehensive code documentation |
| **Tailwind CSS v4** | Next-generation utility-first styling with native CSS property support |
| **Framer Motion** | Smooth animations and entry page transitions |
| **Next Themes** | Local persistence for dark mode |
| **Lucide React** | Modern, lightweight iconography |
| **Vercel** | Automated CI/CD hosting from GitHub |

---

## 🚀 Local Development

### Prerequisites
- Node.js 20.x or newer
- npm, yarn, or pnpm

### Steps

1. **Clone repository**
   ```bash
   git clone https://github.com/username/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** at `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

---

## 📦 Deployment

This project is deployed using **Vercel**. Any pushes to the `main` branch will automatically trigger Vercel to build and deploy.

### Manual Steps:
1. Push code to your GitHub repository.
2. Log into [Vercel](https://vercel.com) and link this repository.
3. Vercel automatically detects Next.js configurations and handles the deployment.

---

## 🧑‍💻 About Me

Hello! I'm **Faisal Adama**, an IT fresh graduate with a massive passion for modern web development and user interface design. I love building impactful digital solutions and continuously learning new technologies.

- 🌐 [Website](https://portfolio-faisal.vercel.app)
- 🐙 [GitHub](https://github.com/username)
- 💼 [LinkedIn](https://linkedin.com/in/username)
- 🐦 [Twitter/X](https://twitter.com/username)

---

## 📄 License

This project is open-sourced under the **MIT** License. Feel free to use it as a reference or template for your personal portfolio.

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org) — An incredible framework.
- [Vercel](https://vercel.com) — Seamless Next.js hosting.
- [Tailwind CSS](https://tailwindcss.com) — Beautiful styling.
- [Framer Motion](https://www.framer.com/motion/) — Smooth animations.

---

**Crafted with ❤️ by Faisal Adama**
