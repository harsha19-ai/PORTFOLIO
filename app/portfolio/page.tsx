import Portfolio from "@/components/Portfolio"
import AnimatedBackground from "@/components/AnimatedBackground"

export const metadata = {
  title: "Portfolio - Harshavarthanar KS | AI Projects",
  description: "Showcase of innovative AI projects and creative solutions by Harshavarthanar KS.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      <AnimatedBackground />
      <Portfolio />
    </main>
  )
}
