import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Faisal Adama — Developer Portfolio",
  description: "Website portofolio pribadi Faisal Adama. Membangun solusi digital yang elegan dan berdampak.",
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
          <Header />
          <main className="flex-1 flex flex-col relative overflow-hidden">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
