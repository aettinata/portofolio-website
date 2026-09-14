import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText } from "ai";
import profileData from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import certificationsData from "@/data/certifications.json";
import { Certification, Project } from "@/types";

export const runtime = "nodejs";
export const maxDuration = 30;

// Simple in-memory rate limiting (10 requests per minute per IP)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 menit
const MAX_REQUESTS_PER_WINDOW = 10;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  return true;
}

const educationSummary = profileData.education
  .map((e) => `- ${e.degree} di ${e.institution} (${e.year})`)
  .join("\n");

const projectsSummary = (projectsData as Project[])
  .map(
    (p) =>
      `- ${p.title} (${p.category}): ${p.description}. Tech: ${p.technologies.join(", ")}. Link: ${p.demoUrl || p.githubUrl || "-"}`
  )
  .join("\n");

const certsSummary = (certificationsData as Certification[])
  .map((c) => `- ${c.name} oleh ${c.issuer} (${c.issueDate})`)
  .join("\n");

const SYSTEM_PROMPT = `
Anda adalah "Faisal Bot", asisten AI resmi di website portofolio pribadi Faisal Adama.

TUGAS UTAMA:
- Menjawab pertanyaan pengunjung tentang Faisal Adama dengan ramah, profesional, jujur, dan ringkas (maksimal 3-4 kalimat per jawaban).
- Gunakan bahasa yang sama dengan bahasa yang digunakan pengguna (Bahasa Indonesia atau English).
- Jawab HANYA hal-hal yang berkaitan dengan profil, keahlian, pengalaman, pendidikan, proyek, sertifikasi, dan aktivitas Faisal.
- Jika ditanya hal umum, coding di luar konteks Faisal, atau topik yang tidak berkaitan dengan Faisal Adama, tolaklah secara sopan dan arahkan pengguna untuk bertanya tentang Faisal.
- Jangan mengarang data atau klaim yang tidak ada di dalam konteks di bawah.

DATA PROFIL FAISAL ADAMA:
- Nama: ${profileData.name}
- Gelar/Status: ${profileData.title}
- Tagline: ${profileData.tagline}
- Lokasi: ${profileData.location}
- Kontak Email: ${profileData.email}
- GitHub: ${profileData.social.github}
- LinkedIn: ${profileData.social.linkedin}
- Bio Singkat: ${profileData.bio}

KEAHLIAN (SKILLS):
${profileData.skills.join(", ")}

PENDIDIKAN:
${educationSummary}

AKTIVITAS TERKINI (NOW):
- Sedang Belajar: ${profileData.now.learning}
- Sedang Dibaca: ${profileData.now.reading}
- Sedang Dibangun: ${profileData.now.building}
- Sedang Didengar: ${profileData.now.listening}

SERTIFIKASI:
${certsSummary}

DAFTAR PROYEK:
${projectsSummary}
`.trim();

export async function POST(req: Request) {
  // 1. Rate Limit Check (10 requests per minute per IP)
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "127.0.0.1";

  if (!checkRateLimit(ip)) {
    return new Response(
      JSON.stringify({
        error: "Terlalu banyak permintaan. Silakan coba lagi dalam beberapa saat.",
      }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    );
  }

  // 2. Validasi API Key
  if (!process.env.GEMINI_API_KEY) {
    return new Response(
      JSON.stringify({
        error: "GEMINI_API_KEY belum dikonfigurasi di server.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  // 3. Parse Messages & Stream Text
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Format pesan tidak valid." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const google = createGoogleGenerativeAI({
      apiKey:
        process.env.GEMINI_API_KEY ||
        process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    });

    const result = streamText({
      model: google("gemini-3.6-flash"),
      system: SYSTEM_PROMPT,
      messages,
      maxTokens: 1000,
      temperature: 0.7,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Gemini Chat API Error:", error);
    return new Response(
      JSON.stringify({
        error: "Terjadi kesalahan saat memproses jawaban dari Gemini.",
      }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }
}
