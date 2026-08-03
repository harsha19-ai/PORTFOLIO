import Skills from "@/components/Skills"
import AnimatedBackground from "@/components/AnimatedBackground"

export const metadata = {
  title: "Skills - Harshavarthanar KS | AI Development Expertise",
  description:
    "Explore the diverse skill set of Harshavarthanar KS in AI development, prompt designing, and creative solutions.",
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      <AnimatedBackground />
      <Skills />
    </main>
  )
}
