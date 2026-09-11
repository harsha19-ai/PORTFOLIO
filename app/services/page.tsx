import Services from "@/components/Services"
import AnimatedBackground from "@/components/AnimatedBackground"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI & Web Development Services | Harshavarthanar KS",
  description:
    "Professional engineering services offered by Harshavarthanar KS: Custom AI visual pipelines, LLM prompt optimization, RAG semantic search integrations, and responsive full stack Next.js architectures.",
  keywords: [
    "Harshavarthanar KS services",
    "AI consulting Coimbatore",
    "Freelance Prompt Engineer",
    "RAG integration developer",
    "Full stack AI web development",
  ],
  alternates: {
    canonical: "https://portfolioofharshavarthanar.vercel.app/services",
  },
  openGraph: {
    title: "AI Engineering & Development Services | Harshavarthanar KS",
    description:
      "Enterprise LLM integration, custom RAG vector search pipelines, and full-stack web applications by Harshavarthanar KS.",
    url: "https://portfolioofharshavarthanar.vercel.app/services",
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white relative overflow-hidden">
      <AnimatedBackground />
      <Services />
    </main>
  )
}
