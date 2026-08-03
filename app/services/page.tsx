import Services from "@/components/Services"
import AnimatedBackground from "@/components/AnimatedBackground"

export const metadata = {
  title: "Services - Harshavarthanar KS | AI Solutions",
  description: "Professional AI services including web development, prompt designing, and creative content solutions.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      <AnimatedBackground />
      <Services />
    </main>
  )
}
