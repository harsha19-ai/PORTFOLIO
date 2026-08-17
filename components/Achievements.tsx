"use client"

import { useState, useEffect } from "react"
import { Trophy, Code, Zap, ShieldCheck } from "lucide-react"

const stats = [
  {
    value: "8.34",
    title: "ACADEMIC CGPA",
    description: "Maintaining high academic standing in B.E. Computer Science Engineering through my 4th semester at Dr NGP IT.",
    icon: Code,
  },
  {
    value: "1st",
    title: "BIT HACKATHON WINNER",
    description: "Won cash prize award for building and presenting optimized, responsive full stack software models.",
    icon: Trophy,
  },
  {
    value: "06",
    title: "DEPLOYED AI PROJECTS",
    description: "Deployed ARADHYA (behavioral monitoring), HOPE (crowdfunding), DMS Chatbot (RAG), and this prompt-optimized Portfolio.",
    icon: Zap,
  },
  {
    value: "100%",
    title: "PROMPT ENGINEERING SPEC",
    description: "Completed Prompt Engineering internship at Skylena Pvt. Ltd., Visaithalam Solutions, and AI vector credentials.",
    icon: ShieldCheck,
  },
]

// Animated Counter utility
function Counter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    // Parse numeric characters out of string (e.g. "8.34" -> 8.34, "1st" -> 1, "06" -> 6, "100%" -> 100)
    const isPercent = value.includes("%")
    const isFirst = value.includes("1st")
    
    let target = 0
    if (isFirst) target = 1
    else target = parseFloat(value.replace(/[^0-9.]/g, "")) || 0

    let start = 0
    const duration = 1500
    const startTime = performance.now()

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = start + (target - start) * ease

      if (isFirst) {
        setDisplayValue("1st")
      } else if (value.includes(".")) {
        setDisplayValue(current.toFixed(2))
      } else {
        setDisplayValue(Math.floor(current).toString() + (isPercent ? "%" : ""))
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        setDisplayValue(value)
      }
    }

    requestAnimationFrame(updateCounter)
  }, [value])

  return <span>{displayValue}</span>
}

export default function Achievements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-24 relative border-t border-slate-900 bg-slate-950/20 z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        
        {/* Section Heading */}
        <div className={`mb-20 transition-all duration-1000 ${mounted ? "reveal-up" : "opacity-0"}`}>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-2">
            06 // DATA TELEMETRY
          </span>
          <h2 className="font-poppins text-4xl sm:text-6xl font-black text-[#F5F7FF] tracking-tight uppercase">
            MILESTONES
          </h2>
          <div className="w-16 h-[2px] bg-blue-500 mt-4" />
        </div>

        {/* Minimalist Editorial Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-900 divide-y sm:divide-y-0 sm:divide-x divide-slate-900 bg-[#070924]/25">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.title}
                className={`p-8 sm:p-10 flex flex-col justify-between space-y-8 group hover:bg-[#070924]/40 transition-colors duration-305 ${
                  mounted ? "reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                
                {/* Metric Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-slate-500">
                    METRIC // 0{index + 1}
                  </span>
                  <Icon className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors duration-200" />
                </div>

                {/* Large Counter Value */}
                <div className="font-poppins text-5xl sm:text-6xl font-light text-[#F5F7FF] tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  {mounted ? <Counter value={stat.value} /> : stat.value}
                </div>

                {/* Labels & Descriptions */}
                <div className="space-y-2">
                  <h3 className="font-poppins text-xs font-black text-slate-300 uppercase tracking-wider">
                    {stat.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">
                    {stat.description}
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
