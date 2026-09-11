import Skills from "@/components/Skills"
import AnimatedBackground from "@/components/AnimatedBackground"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technical Skills | Harshavarthanar KS — AI, Python, RAG & Web",
  description:
    "Comprehensive technical stack of Harshavarthanar KS: Prompt Engineering, Retrieval-Augmented Generation (RAG), Sentence Transformers, FAISS, Python, Java, C, FastAPI, Flask, Django, MongoDB, MySQL, and Docker.",
  keywords: [
    "Harshavarthanar KS skills",
    "Harsha Varthanar Python",
    "Prompt Engineering specialist Coimbatore",
    "RAG developer Tamil Nadu",
    "FAISS vector search",
    "FastAPI Django developer",
  ],
  alternates: {
    canonical: "https://portfolioofharshavarthanar.vercel.app/skills",
  },
  openGraph: {
    title: "Technical Skills & Arsenal | Harshavarthanar KS",
    description:
      "Deep dive into the AI frameworks, programming languages, databases, and deployment utilities mastered by Harshavarthanar KS.",
    url: "https://portfolioofharshavarthanar.vercel.app/skills",
  },
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white relative overflow-hidden">
      <AnimatedBackground />
      <Skills />
    </main>
  )
}
