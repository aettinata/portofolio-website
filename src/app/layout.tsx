import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faisal Adama — Developer Portfolio",
  description: "Website portofolio pribadi Faisal Adama. Fresh Graduate IT, Web Developer. Membangun solusi digital yang berdampak.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased min-h-screen bg-background text-foreground flex flex-col selection:bg-brand-accent/15 selection:text-brand-light relative`}
      >
        {/* Global Noise Overlay */}
        <div className="fixed inset-0 bg-noise z-50 pointer-events-none" />
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 flex flex-col relative overflow-hidden">
            {/* Decorative Grid Lines */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute left-[5%] md:left-[10%] top-0 bottom-0 w-[1px] bg-brand-card" />
              <div className="absolute right-[5%] md:right-[10%] top-0 bottom-0 w-[1px] bg-brand-card" />
            </div>
            
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
