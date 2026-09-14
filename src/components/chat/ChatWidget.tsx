"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useChat } from "ai/react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  AlertCircle,
  Sparkles,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SUGGESTED_QUESTIONS = [
  "Apa skill utama Faisal?",
  "Ceritakan proyek terbarunya",
  "Bagaimana cara kontak Faisal?",
];

const INITIAL_GREETING =
  "Hai! Saya asisten Faisal. Tanya apa saja tentang skill, proyek, atau pengalamannya.";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const animDuration = shouldReduceMotion ? 0 : 0.2;

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    append,
    reload,
  } = useChat({
    api: "/api/chat",
  });

  // Auto-scroll ke pesan terbawah saat ada pesan baru atau sedang streaming
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    }
  }, [messages, isLoading, isOpen, shouldReduceMotion]);

  // Manajemen fokus: focus trap & auto-focus desktop
  useEffect(() => {
    if (isOpen) {
      // Auto-focus input hanya di layar desktop (mencegah virtual keyboard menutupi mobile)
      if (typeof window !== "undefined" && window.innerWidth >= 768) {
        inputRef.current?.focus();
      }
    } else {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  // Keyboard accessibility: Escape untuk menutup dan Tab focus trap
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    },
    [setIsOpen]
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const handleSuggestedClick = (question: string) => {
    append({ role: "user", content: question });
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
        aria-label={isOpen ? "Tutup obrolan" : "Buka obrolan"}
        aria-expanded={isOpen}
        aria-controls="chat-modal-panel"
        className={cn(
          "fixed z-40 rounded-full bg-accent text-white shadow-lg flex items-center justify-center transition-shadow duration-200 cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
          "bottom-4 right-4 w-12 h-12 md:bottom-6 md:right-6 md:w-14 md:h-14"
        )}
      >
        {isOpen ? (
          <X size={24} aria-hidden="true" />
        ) : (
          <MessageCircle size={26} aria-hidden="true" />
        )}
      </motion.button>

      {/* Chat Modal Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chat-modal-panel"
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label="Tanya Faisal AI Chat"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: animDuration, ease: "easeOut" }}
            className={cn(
              "fixed z-50 flex flex-col bg-bg-primary border border-border overflow-hidden",
              "inset-0 md:inset-auto md:bottom-24 md:right-6 md:w-[400px] md:h-[600px] md:rounded-2xl md:shadow-2xl"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-border bg-bg-secondary/60 backdrop-blur-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-bg-primary border border-border flex items-center justify-center font-semibold text-xs text-text-primary">
                  FA
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-text-primary leading-tight">
                    Tanya Faisal
                  </h2>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[11px] text-text-secondary">
                      Asisten AI Portofolio
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Tutup jendela obrolan"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            {/* Body / Message List */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-4"
              aria-live="polite"
            >
              {/* Initial Greeting Bubble */}
              <div className="flex items-start gap-2.5 mr-auto max-w-[85%]">
                <div className="shrink-0 w-6 h-6 rounded-full bg-bg-secondary border border-border/80 flex items-center justify-center text-[10px] font-medium text-text-secondary mt-0.5">
                  AI
                </div>
                <div className="bg-bg-secondary border border-border/60 text-text-primary text-sm rounded-2xl rounded-tl-xs px-3.5 py-2.5 shadow-xs leading-relaxed">
                  {INITIAL_GREETING}
                </div>
              </div>

              {/* Suggested Questions (hanya tampil jika belum ada obrolan) */}
              {messages.length === 0 && (
                <div className="pt-2 pl-8 flex flex-col gap-2">
                  <p className="text-xs font-medium text-text-secondary flex items-center gap-1.5">
                    <Sparkles
                      size={12}
                      className="text-accent"
                      aria-hidden="true"
                    />
                    <span>Pertanyaan yang disarankan:</span>
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => handleSuggestedClick(q)}
                        className="text-left text-xs px-3 py-2 rounded-xl border border-border bg-bg-secondary hover:border-accent hover:text-accent transition-colors cursor-pointer"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Message History */}
              {messages.map((m) => {
                const isUser = m.role === "user";
                return (
                  <div
                    key={m.id}
                    className={cn(
                      "flex items-start gap-2.5",
                      isUser ? "ml-auto justify-end max-w-[80%]" : "mr-auto max-w-[85%]"
                    )}
                  >
                    {!isUser && (
                      <div className="shrink-0 w-6 h-6 rounded-full bg-bg-secondary border border-border/80 flex items-center justify-center text-[10px] font-medium text-text-secondary mt-0.5">
                        AI
                      </div>
                    )}
                    <div
                      className={cn(
                        "text-sm px-3.5 py-2.5 shadow-xs leading-relaxed whitespace-pre-wrap break-words",
                        isUser
                          ? "bg-accent text-white rounded-2xl rounded-br-xs"
                          : "bg-bg-secondary border border-border/60 text-text-primary rounded-2xl rounded-tl-xs"
                      )}
                    >
                      {m.content}
                    </div>
                  </div>
                );
              })}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex items-start gap-2.5 mr-auto max-w-[85%]">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-bg-secondary border border-border/80 flex items-center justify-center text-[10px] font-medium text-text-secondary mt-0.5">
                    AI
                  </div>
                  <div className="bg-bg-secondary border border-border/60 rounded-2xl rounded-tl-xs px-3.5 py-2.5 shadow-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-secondary animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-text-secondary animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-text-secondary animate-bounce" />
                  </div>
                </div>
              )}

              {/* Error State */}
              {error && (
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs">
                  <AlertCircle
                    size={16}
                    className="shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="flex-1">
                    <p>
                      Terjadi kendala saat memproses jawaban. Silakan coba lagi.
                    </p>
                    <button
                      type="button"
                      onClick={() => reload()}
                      className="mt-1.5 inline-flex items-center gap-1 font-medium underline hover:no-underline cursor-pointer"
                    >
                      <RotateCcw size={12} aria-hidden="true" />
                      Coba lagi
                    </button>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Footer / Input */}
            <form
              onSubmit={handleSubmit}
              className="p-3 pb-6 md:pb-3 border-t border-border bg-bg-primary"
            >
              <div className="relative flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  maxLength={500}
                  placeholder="Tanya tentang Faisal..."
                  disabled={isLoading}
                  className="w-full pl-3.5 pr-22 py-2.5 text-sm bg-bg-secondary rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-text-primary placeholder:text-text-secondary disabled:opacity-50 transition-all"
                  aria-label="Ketik pesan pertanyaan"
                />
                <div className="absolute right-1.5 flex items-center gap-1.5">
                  <span className="text-[10px] text-text-secondary tabular-nums pr-1 select-none">
                    {input.length}/500
                  </span>
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    aria-label="Kirim pesan"
                    className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shrink-0"
                  >
                    <Send size={14} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
