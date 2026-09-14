import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://adamaettinata.vercel.app"),
  title: {
    default: "Faisal Adama — Full-Stack Developer & AI Enthusiast",
    template: "%s | Faisal Adama",
  },
  description:
    "Portofolio pribadi Faisal Adama, Full-Stack Developer & AI Enthusiast asal Semarang. Membangun web modern, aplikasi mobile, dan sistem cerdas berdampak.",
  keywords: [
    "Faisal Adama",
    "portofolio",
    "web developer",
    "full-stack",
    "AI",
    "Next.js",
    "TypeScript",
    "Semarang",
  ],
  authors: [{ name: "Faisal Adama", url: "https://adamaettinata.vercel.app" }],
  creator: "Faisal Adama",
  alternates: {
    canonical: "https://adamaettinata.vercel.app",
  },
  openGraph: {
    title: "Faisal Adama — Full-Stack Developer & AI Enthusiast",
    description:
      "Portofolio pribadi Faisal Adama, Full-Stack Developer & AI Enthusiast asal Semarang. Membangun web modern, aplikasi mobile, dan sistem cerdas berdampak.",
    url: "https://adamaettinata.vercel.app",
    siteName: "Faisal Adama Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faisal Adama — Full-Stack Developer & AI Enthusiast",
    description:
      "Portofolio pribadi Faisal Adama, Full-Stack Developer & AI Enthusiast asal Semarang. Membangun web modern, aplikasi mobile, dan sistem cerdas berdampak.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col relative bg-bg-primary text-text-primary transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a
            href="#main-content"
            className="absolute -top-20 left-4 z-50 focus:top-4 focus:bg-bg-primary focus:text-text-primary focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
          >
            Lewati ke konten
          </a>
          <Header />
          <main id="main-content" className="flex-1 flex flex-col relative overflow-hidden">
            {children}
          </main>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
