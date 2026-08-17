"use client"

import { useState, useEffect } from "react"
import { ShieldAlert, Compass, Eye, Heart } from "lucide-react"

const visionStatements = [
  {
    id: "01",
    title: "INTELLIGENT SYSTEMS",
    desc: "Creating backend layers and prompt contexts that enable systems to reason and evaluate context state-by-state, mimicking intuitive human workflows.",
    icon: Eye,
  },
  {
    id: "02",
    title: "HUMAN-CENTRIC UTILITY",
    desc: "Focusing on AI interfaces that actively solve daily institutional and behavioral roadblocks (e.g. ARADHYA, DMS Chatbots) rather than technical showcase placeholders.",
    icon: Heart,
  },
  {
    id: "03",
    title: "PRACTICAL INFERENCE DESIGN",
    desc: "Enforcing lightweight pipeline latency controls (WebSockets, FAISS similarity rankings) to deliver immediate user inferences on the fly.",
    icon: Compass,
  },
]

export default function Vision() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="vision" className="py-24 relative z-10 border-t border-slate-900/60 bg-slate-950/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Asymmetric Header Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-24">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-2">
              07 // THE FOCUS
            </span>
            <h2 className="font-poppins text-4xl sm:text-6xl font-black text-[#F5F7FF] tracking-tight uppercase">
              MY VISION
            </h2>
            <div className="w-16 h-[2px] bg-blue-500 mt-4" />
          </div>

          <div className="lg:col-span-7 pt-4">
            <blockquote className="font-poppins text-2xl sm:text-4xl font-light text-[#F5F7FF] leading-tight tracking-tight italic border-l-2 border-slate-800 pl-6">
              &ldquo;Build technology that feels intelligent, useful and human.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Spacious Layout Statement Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionStatements.map((vis, idx) => {
            const Icon = vis.icon
            return (
              <div
                key={vis.id}
                className={`p-8 border border-slate-900 bg-[#070924]/10 relative group hover:border-slate-800/80 transition-all duration-300 ${
                  mounted ? "reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Visual outline border overlay on hover */}
                <div className="absolute -inset-[1px] border border-transparent group-hover:border-slate-700 pointer-events-none transition-all duration-300" />
                
                <div className="space-y-6">
                  {/* Category Code & Icon */}
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-xs text-blue-500 font-bold">{vis.id} //</span>
                    <Icon className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors duration-200" />
                  </div>

                  <h3 className="font-poppins text-base sm:text-lg font-black text-[#F5F7FF] tracking-tight uppercase">
                    {vis.title}
                  </h3>

                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                    {vis.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
