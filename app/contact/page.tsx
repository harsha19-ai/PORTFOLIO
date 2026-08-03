import Contact from "@/components/Contact"
import AnimatedBackground from "@/components/AnimatedBackground"

export const metadata = {
  title: "Contact - Harshavarthanar KS | Get In Touch",
  description: "Connect with Harshavarthanar KS for AI development projects and creative collaborations.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      <AnimatedBackground />
      <Contact />
    </main>
  )
}
