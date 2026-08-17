import AnimatedBackground from "@/components/AnimatedBackground"
import Hero from "@/components/Hero"
import AboutContent from "@/components/AboutContent"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import Skills from "@/components/Skills"
import Timeline from "@/components/Timeline"
import Achievements from "@/components/Achievements"
import Vision from "@/components/Vision"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05061A] text-slate-100 relative overflow-hidden">
      {/* Subtle 3D tilted grid background */}
      <AnimatedBackground />

      {/* Main Recruiter-Friendly Cinematic Sections */}
      <div className="relative z-10">
        <div id="home">
          <Hero />
        </div>
        
        <div id="about" className="border-t border-slate-900/60 bg-[#05061A]/40">
          <AboutContent />
        </div>
        
        <div id="services" className="border-t border-slate-900/60 bg-[#05061A]/10">
          <Services />
        </div>
        
        <div id="projects" className="border-t border-slate-900/60 bg-[#05061A]/40">
          <Portfolio />
        </div>
        
        <div id="skills" className="border-t border-slate-900/60 bg-[#05061A]/10">
          <Skills />
        </div>
        
        <div id="journey" className="border-t border-slate-900/60 bg-[#05061A]/40">
          <Timeline />
        </div>

        <div id="achievements">
          <Achievements />
        </div>

        <div id="vision">
          <Vision />
        </div>
        
        <div id="contact" className="border-t border-slate-900/60 bg-[#05061A]/40">
          <Contact />
        </div>
      </div>
    </main>
  )
}
