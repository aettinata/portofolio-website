"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi pengiriman form (karena belum menggunakan layanan pihak ketiga)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="flex-1 py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-6 sm:px-12 lg:px-20 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-widest text-brand-light mb-6">
              Hubungi Saya<span className="text-brand-accent glow-cyan">.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-gray max-w-2xl mb-12">
              Tertarik untuk bekerja sama atau sekadar ingin menyapa? Jangan ragu untuk mengirim pesan.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Column - 7/12 */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.1} direction="right">
                <div className="border border-brand-border bg-brand-surface/30 p-8 relative">
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div>
                      <label htmlFor="name" className="block text-xs font-heading font-bold uppercase tracking-widest text-brand-dim mb-2">
                        Nama Lengkap
                      </label>
                      <div className="relative group">
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-4 py-3 bg-brand-dark border border-brand-border focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-brand-light transition-all placeholder:text-brand-dim/50 relative z-10"
                          placeholder="Masukkan nama Anda"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-heading font-bold uppercase tracking-widest text-brand-dim mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 bg-brand-dark border border-brand-border focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-brand-light transition-all placeholder:text-brand-dim/50"
                        placeholder="email@contoh.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-xs font-heading font-bold uppercase tracking-widest text-brand-dim mb-2">
                        Subjek
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        className="w-full px-4 py-3 bg-brand-dark border border-brand-border focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-brand-light transition-all placeholder:text-brand-dim/50"
                        placeholder="Subjek pesan"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs font-heading font-bold uppercase tracking-widest text-brand-dim mb-2">
                        Pesan
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-brand-dark border border-brand-border focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-brand-light transition-all resize-none placeholder:text-brand-dim/50"
                        placeholder="Tulis pesan Anda di sini..."
                      ></textarea>
                    </div>
                    
                    <Button variant="neon" type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "MENGIRIM..." : "KIRIM PESAN"}
                    </Button>
                    
                    {/* Success Toast */}
                    <div className={`absolute -bottom-16 left-0 right-0 bg-brand-accent text-brand-dark p-4 text-center font-heading font-bold tracking-widest text-sm uppercase transition-all duration-500 transform ${submitted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"}`}>
                      Pesan berhasil dikirim!
                    </div>
                  </form>
                </div>
              </FadeIn>
            </div>

            {/* Info Column - 5/12 */}
            <div className="lg:col-span-5 space-y-6">
              <FadeIn delay={0.2} direction="left">
                <div className="group flex items-start gap-5 p-6 border border-brand-border/50 bg-brand-surface/30 hover:border-brand-accent/50 hover:bg-brand-surface transition-all duration-300">
                  <div className="w-12 h-12 border border-brand-border bg-brand-dark flex items-center justify-center text-brand-dim shrink-0 group-hover:text-brand-accent group-hover:border-brand-accent/50 group-hover:glow-cyan transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold uppercase tracking-widest text-brand-light group-hover:text-brand-accent transition-colors">Email</h3>
                    <p className="text-brand-gray mt-2 text-sm">hello@example.com</p>
                    <a href="mailto:hello@example.com" className="text-brand-dim text-[10px] font-heading font-bold uppercase tracking-widest hover:text-brand-accent mt-3 inline-flex items-center transition-colors">
                      Kirim Email <span className="ml-1 text-brand-accent glow-cyan">→</span>
                    </a>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3} direction="left">
                <div className="group flex items-start gap-5 p-6 border border-brand-border/50 bg-brand-surface/30 hover:border-brand-accent/50 hover:bg-brand-surface transition-all duration-300">
                  <div className="w-12 h-12 border border-brand-border bg-brand-dark flex items-center justify-center text-brand-dim shrink-0 group-hover:text-brand-accent group-hover:border-brand-accent/50 group-hover:glow-cyan transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold uppercase tracking-widest text-brand-light group-hover:text-brand-accent transition-colors">Telepon / WhatsApp</h3>
                    <p className="text-brand-gray mt-2 text-sm">+62 812 3456 7890</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} direction="left">
                <div className="group flex items-start gap-5 p-6 border border-brand-border/50 bg-brand-surface/30 hover:border-brand-accent/50 hover:bg-brand-surface transition-all duration-300">
                  <div className="w-12 h-12 border border-brand-border bg-brand-dark flex items-center justify-center text-brand-dim shrink-0 group-hover:text-brand-accent group-hover:border-brand-accent/50 group-hover:glow-cyan transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold uppercase tracking-widest text-brand-light group-hover:text-brand-accent transition-colors">Lokasi</h3>
                    <p className="text-brand-gray mt-2 text-sm">Jakarta, Indonesia</p>
                    <p className="text-brand-dim text-xs mt-1">Tersedia untuk remote work</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
      </div>
    </div>
  );
}
