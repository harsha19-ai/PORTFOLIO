import Portfolio from "@/components/Portfolio"
import AnimatedBackground from "@/components/AnimatedBackground"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects by Harshavarthanar KS | ARADHYA, DMS Chatbot, HOPE",
  description:
    "Explore production AI systems engineered by Harshavarthanar KS: ARADHYA (Emotional & Behavioral Monitoring), DMS Chatbot (RAG with FAISS), HOPE (Crowdfunding Platform), and Portfolio Website. Full architectural schemas, metrics, and GitHub source code.",
  keywords: [
    "Harshavarthanar KS projects",
    "ARADHYA AI",
    "DMS Chatbot Harshavarthanar",
    "HOPE AI crowdfunding",
    "Harsha Varthanar GitHub",
    "AI projects Dr NGP IT",
  ],
  alternates: {
    canonical: "https://portfolioofharshavarthanar.vercel.app/portfolio",
  },
  openGraph: {
    title: "AI Projects & Architecture Archive | Harshavarthanar KS",
    description:
      "Production-ready AI applications, signal processors, RAG retrieval agents, and full-stack web systems built by Harshavarthanar KS.",
    url: "https://portfolioofharshavarthanar.vercel.app/portfolio",
    images: [
      {
        url: "/web-development-interface.jpg",
        width: 1200,
        height: 630,
        alt: "Projects Archive by Harshavarthanar KS",
      },
    ],
  },
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white relative overflow-hidden">
      <AnimatedBackground />
      <Portfolio />
    </main>
  )
}
