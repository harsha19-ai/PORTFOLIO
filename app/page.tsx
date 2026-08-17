import Hero from "@/components/Hero"
import Achievements from "@/components/Achievements"
import Timeline from "@/components/Timeline"
import AnimatedBackground from "@/components/AnimatedBackground"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Premium Interactive Mouse-Following Dot Grid Background */}
      <AnimatedBackground />

      {/* Main Recruiter-Friendly Sections */}
      <div className="relative z-10">
        <Hero />
        <Achievements />
        <Timeline />
      </div>
    </main>
  )
}
