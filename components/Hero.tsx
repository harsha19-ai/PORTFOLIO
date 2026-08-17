"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Download, Github, ArrowRight, Brain, Cpu, Database, Network, ShieldCheck, Activity, Terminal as TermIcon, Sliders } from "lucide-react"

const roles = [
  "AI Engineer",
  "Prompt Engineer",
  "LLM Developer",
  "Computer Vision Engineer",
  "Full Stack Developer",
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [fadeState, setFadeState] = useState("opacity-100 translate-y-0")
  const codeConsoleRef = useRef<HTMLDivElement>(null)
  
  // Mouse tracking coordinates for HUD telemetry readout
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)

    // Role switcher interval
    const interval = setInterval(() => {
      setFadeState("opacity-0 -translate-y-2 transition-all duration-300")
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        setFadeState("opacity-0 translate-y-2")
        setTimeout(() => {
          setFadeState("opacity-100 translate-y-0 transition-all duration-300")
        }, 50)
      }, 300)
    }, 3000)

    // Mouse tracking event
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Simulating terminal log outputs in the console panel
    const consolePanel = codeConsoleRef.current
    let consoleInterval: NodeJS.Timeout
    
    if (consolePanel) {
      const logs = [
        "Initializing neural weights...",
        "Querying embedding vectors...",
        "FAISS Index FlatL2: OK",
        "Loading model: RoBERTa-large",
        "Inference pipeline status: READY",
        "RAG: Syllabus documents parsed",
        "Accuracy benchmark score: 94.1%",
        "Active vectors: 1,420 dimensions",
        "Streaming responses token/s: 85",
        "System: SECURE",
      ]
      let index = 0
      consoleInterval = setInterval(() => {
        const p = document.createElement("p")
        p.className = "text-[10px] text-cyan-500/80 font-mono leading-relaxed"
        p.innerText = `> ${logs[index]}`
        consolePanel.appendChild(p)
        consolePanel.scrollTop = consolePanel.scrollHeight
        index = (index + 1) % logs.length
        if (consolePanel.childNodes.length > 8) {
          consolePanel.removeChild(consolePanel.firstChild!)
        }
      }, 2000)
    }

    return () => {
      clearInterval(interval)
      clearInterval(consoleInterval)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16 grid-overlay">
      {/* Background Decorative Neon Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main 3-Column Cockpit HUD Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT WIDGET: System Status Telemetry */}
          <div
            className={`lg:col-span-3 space-y-4 order-2 lg:order-1 transition-all duration-1000 ${
              mounted ? "reveal-up" : "opacity-0"
            }`}
          >
            <div className="holo-border-card hud-brackets">
              <div className="holo-border-card-inner p-5 space-y-4">
                <div className="flex items-center space-x-2 border-b border-slate-900 pb-2">
                  <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-200">TELEMETRY_MONITOR</span>
                </div>
                
                <div className="space-y-3 font-mono text-[11px]">
                  <div className="flex justify-between border-b border-slate-900/40 pb-1.5">
                    <span className="text-slate-500">LLM_ENGINE:</span>
                    <span className="text-emerald-400 font-bold">READY</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900/40 pb-1.5">
                    <span className="text-slate-500">VECTOR_STORE:</span>
                    <span className="text-cyan-400">FAISS.DB</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900/40 pb-1.5">
                    <span className="text-slate-500">LATENCY:</span>
                    <span className="text-blue-400">&lt; 0.9s</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900/40 pb-1.5">
                    <span className="text-slate-500">CURSOR_COORDS:</span>
                    <span className="text-slate-300">{mousePos.x}, {mousePos.y}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">SECURITY_SLA:</span>
                    <span className="text-purple-400 flex items-center space-x-1">
                      <ShieldCheck className="w-3.5 h-3.5 inline text-purple-400" />
                      <span>AES-256</span>
                    </span>
                  </div>
                </div>

                {/* Pulsing visual scope */}
                <div className="h-16 w-full rounded-lg bg-slate-950/80 border border-slate-900 flex items-center justify-center relative overflow-hidden radar-grid">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-cyan-500/20 animate-ping" />
                    <div className="w-6 h-6 rounded-full border border-cyan-500/40 animate-pulse" />
                  </div>
                  <span className="text-[9px] font-mono text-cyan-400/60 uppercase tracking-widest relative z-10">Scan Sweep Active</span>
                </div>
              </div>
            </div>

            {/* Quick Status Tag */}
            <div className="bg-slate-950/80 border border-slate-900 rounded-xl p-4 flex items-center space-x-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <p className="text-[11px] font-mono text-slate-400 leading-normal">
                Node_Active: Availability open for custom AI integration roles.
              </p>
            </div>
          </div>

          {/* CENTER PANEL: Holographic Core Core & Core Copy */}
          <div className="lg:col-span-6 flex flex-col items-center text-center space-y-6 order-1 lg:order-2">
            
            {/* Holographic Core Graphic Wrapper */}
            <div
              className={`relative w-64 h-64 sm:w-72 sm:h-72 mb-2 transition-all duration-1000 ${
                mounted ? "reveal-scale" : "opacity-0 scale-90"
              }`}
            >
              {/* Spinning Orbital rings */}
              <div className="absolute inset-0 rounded-full border border-slate-800 animate-spin-slow pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2.5 h-2.5 rounded-full bg-blue-500 border border-slate-950" />
              </div>
              <div className="absolute inset-4 rounded-full border border-dashed border-cyan-500/30 animate-spin-reverse pointer-events-none" />
              <div className="absolute inset-8 rounded-full border border-slate-800/60 animate-spin-slow pointer-events-none" />

              {/* Glowing Aura Spheres */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-500 animate-pulse opacity-20 blur-xl z-0" />

              {/* Target bracket marks around avatar */}
              <div className="absolute -inset-2 border border-slate-800/80 rounded-full pointer-events-none">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[9px] font-mono text-slate-500">000°</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[9px] font-mono text-slate-500">180°</span>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[9px] font-mono text-slate-500">270°</span>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[9px] font-mono text-slate-500">090°</span>
              </div>

              {/* Core Avatar Frame */}
              <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-slate-800 bg-slate-900 group z-10 shadow-2xl shadow-blue-500/10">
                <Image
                  src="/profile.jpg"
                  alt="Harshavarthanar KS"
                  fill
                  className="object-cover object-center scale-[1.05] group-hover:scale-[1.1] transition-transform duration-500"
                  priority
                />
                
                {/* Dynamic matrix grid overlay inside avatar */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,rgba(6,182,212,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[size:10px_10px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
              </div>
            </div>

            {/* Core Titles */}
            <div className={`space-y-4 ${mounted ? "reveal-up delay-100" : "opacity-0"}`}>
              <h1 className="font-poppins text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                <span className="text-slate-400 font-semibold text-lg sm:text-xl uppercase tracking-widest block mb-1">AI Systems Specialist</span>
                <span className="gradient-text-sweep block">
                  Harshavarthanar KS
                </span>
              </h1>
              
              <div className="h-8 flex items-center justify-center text-base sm:text-xl font-medium text-slate-400 font-mono">
                <span>// ROLE: &nbsp;</span>
                <span className={`font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent ${fadeState}`}>
                  {roles[currentRoleIndex]}
                </span>
              </div>
            </div>

            {/* Narrative description */}
            <p
              className={`text-slate-400 max-w-xl leading-relaxed text-xs sm:text-sm md:text-base ${
                mounted ? "reveal-up delay-200" : "opacity-0"
              }`}
            >
              Designing, training, and implementing high-efficiency RAG indexing vectors, custom LLM fine-tuning structures, signal analysis, and robust full stack dashboards. Bridging backend modeling pipelines with clean developer interfaces.
            </p>

            {/* Call to Actions */}
            <div
              className={`flex flex-wrap gap-4 justify-center pt-2 ${
                mounted ? "reveal-up delay-300" : "opacity-0"
              }`}
            >
              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-medium text-xs sm:text-sm rounded-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:scale-[1.03] transition-all duration-300"
              >
                <span>Initialize Core</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="/Harshavarthanar-KS-Resume.pdf"
                download="Harshavarthanar-KS-Resume.pdf"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-medium text-xs sm:text-sm rounded-xl hover:scale-[1.03] transition-all duration-300"
              >
                <Download className="mr-2 w-4 h-4" />
                <span>Download PDF</span>
              </a>

              <a
                href="https://github.com/harsha19-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-medium text-xs sm:text-sm rounded-xl hover:scale-[1.03] transition-all duration-300"
              >
                <Github className="mr-1.5 w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* RIGHT WIDGET: Code Console Streams */}
          <div
            className={`lg:col-span-3 space-y-4 order-3 transition-all duration-1000 ${
              mounted ? "reveal-up" : "opacity-0"
            }`}
          >
            <div className="holo-border-card hud-brackets">
              <div className="holo-border-card-inner p-5 space-y-4">
                <div className="flex items-center space-x-2 border-b border-slate-900 pb-2">
                  <TermIcon className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-200">AI_TRAINING_LOGS</span>
                </div>

                {/* Animated logs output element */}
                <div
                  ref={codeConsoleRef}
                  className="h-32 w-full rounded-lg bg-slate-950 p-3 border border-slate-900 font-mono text-[10px] text-slate-400 overflow-y-auto space-y-1.5 scrollbar-none"
                  style={{ scrollbarWidth: "none" }}
                >
                  <p className="text-[10px] text-cyan-500/80 font-mono leading-relaxed">&gt; System initialized</p>
                  <p className="text-[10px] text-cyan-500/80 font-mono leading-relaxed">&gt; Model variables set</p>
                </div>

                {/* Model training KPI parameter sliders dials representation */}
                <div className="space-y-3 border-t border-slate-900 pt-3">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] font-mono text-slate-400">
                      <span>LEARNING_RATE: 2.5e-5</span>
                      <span className="text-cyan-400 font-bold">100%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-900">
                      <div className="h-full bg-cyan-400 w-full" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] font-mono text-slate-400">
                      <span>EPOCHS: 25 / 25</span>
                      <span className="text-purple-400 font-bold">100%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-900">
                      <div className="h-full bg-purple-500 w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Telemetry metadata tags panel */}
            <div className="bg-slate-950/80 border border-slate-900 rounded-xl p-4 flex items-center justify-between font-mono text-[10px] text-slate-500">
              <div className="flex items-center space-x-1.5">
                <Sliders className="w-3.5 h-3.5 text-purple-400" />
                <span>PARAMS: 70B</span>
              </div>
              <div>PRECISION: FP16</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
