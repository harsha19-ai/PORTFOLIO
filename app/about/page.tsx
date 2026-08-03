import AboutContent from "@/components/AboutContent"
import AnimatedBackground from "@/components/AnimatedBackground"

export const metadata = {
  title: "About - Harshavarthanar KS | AI Specialist",
  description: "Learn more about Harshavarthanar KS, an AI Engineer passionate about simplifying complex technology.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      <AnimatedBackground />
      <AboutContent />
    </main>
  )
}
