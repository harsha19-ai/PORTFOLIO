"use client"

import { useState, useEffect } from "react"
import { Award, Zap, Code, ShieldCheck, Trophy } from "lucide-react"

const stats = [
  {
    value: "8.34",
    title: "Academic CGPA",
    description: "Maintaining high academic standing in B.E. Computer Science Engineering through my 4th semester at Dr NGP IT.",
    icon: Code,
    color: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/20",
    glow: "shadow-blue-500/5",
  },
  {
    value: "1st",
    title: "BIT Hackathon 2025",
    description: "Won cash prize award for building and presenting optimized, responsive full stack software models.",
    icon: Trophy,
    color: "from-rose-500/20 to-orange-500/20 text-rose-400 border-rose-500/20",
    glow: "shadow-rose-500/5",
  },
  {
    value: "4",
    title: "Production AI Projects",
    description: "Deployed ARADHYA (behavioral monitoring), HOPE (crowdfunding), DMS Chatbot (RAG), and this prompt-optimized Portfolio.",
    icon: Zap,
    color: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/20",
    glow: "shadow-purple-500/5",
  },
  {
    value: "100%",
    title: "Prompt Intern Spec",
    description: "Prompt Engineering Intern at Skylena Pvt. Ltd. with certifications in RAG architectures and vector embeddings.",
    icon: ShieldCheck,
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/20",
    glow: "shadow-emerald-500/5",
  },
]

export default function Achievements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-20 relative border-t border-slate-900 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-purple-400 uppercase mb-3">
            <Award className="w-4.5 h-4.5" />
            <span>Milestones</span>
          </div>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Key Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.title}
                className={`group relative rounded-2xl border border-slate-900 bg-slate-900/30 p-6 transition-all duration-300 hover:border-slate-800/80 hover:bg-slate-900/40 hover:-translate-y-1 shadow-2xl ${stat.glow}`}
              >
                {/* Accent line on hover */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${stat.color.includes('blue') ? 'from-blue-500 to-cyan-500' : stat.color.includes('purple') ? 'from-purple-500 to-indigo-500' : stat.color.includes('emerald') ? 'from-emerald-500 to-teal-500' : 'from-rose-500 to-orange-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="flex justify-between items-start mb-4">
                  {/* Big Number */}
                  <span className="font-poppins text-3xl sm:text-4xl font-extrabold text-white">
                    {stat.value}
                  </span>
                  
                  {/* Icon */}
                  <div className={`p-2 rounded-xl bg-slate-950 border border-slate-800 ${stat.color.split(' ')[2]}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-poppins text-sm font-bold text-white uppercase tracking-wider">
                  {stat.title}
                </h3>
                
                <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
