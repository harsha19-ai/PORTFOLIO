"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Compass, GraduationCap, Laptop, Sparkles } from "lucide-react"

const timelineData = [
  {
    year: "2025",
    title: "PROMPT ENGINEERING INTERN",
    subtitle: "Skylena Pvt. Ltd. // visaithalam solutions",
    category: "Experience",
    icon: Laptop,
    details: [
      "Working as a Prompt Engineering Intern at Skylena Pvt. Ltd., designing optimized instructions, API contexts, and RAG pipelines.",
      "Completed a specialized one-credit Prompt Engineering course organized by Visaithalam Solutions.",
      "Won a cash prize at the BIT HACKATHON 2025 for designing functional software prototypes."
    ]
  },
  {
    year: "2024",
    title: "B.E. IN COMPUTER SCIENCE ENGINEERING",
    subtitle: "Dr NGP Institute Of Technology, Coimbatore",
    category: "Academic",
    icon: GraduationCap,
    details: [
      "Pursuing a B.E. in Computer Science Engineering, maintaining a high-tier academic CGPA of 8.34 (active till 4th sem, expected pass out 2028).",
      "Serving as a class leader, organizing academic schedules and student coordination channels.",
      "Building practical AI systems including emotional feedback assistants, policy RAG chatbots, and search platforms."
    ]
  },
  {
    year: "2024",
    title: "AI CERTIFICATIONS & TRAINING",
    subtitle: "Coursera, Simplilearn & visaithalam solutions",
    category: "Certifications",
    icon: Sparkles,
    details: [
      "Completed certified courses on Retrieval-Augmented Generation, vector embeddings, and LLM orchestration.",
      "Practiced similarity vector matching algorithms using Sentence Transformers and FAISS index stores."
    ]
  },
  {
    year: "2022",
    title: "HIGHER SECONDARY EDUCATION",
    subtitle: "GVT Higher Secondary School Arasur, Coimbatore",
    category: "Schooling",
    icon: GraduationCap,
    details: [
      "Graduated from Higher Secondary studies with a cumulative score of 85.83%.",
      "Active team player, participating as a secondary raider in the school's Kabaddi team."
    ]
  },
  {
    year: "2012",
    title: "SECONDARY SCHOOLING",
    subtitle: "GVT High School Karugampalayam, Tirupur",
    category: "Schooling",
    icon: GraduationCap,
    details: [
      "Graduated from Secondary Education with a cumulative score of 75.5%.",
      "Explored music as an intermediate level rhythm padist in local youth competitions."
    ]
  }
]

export default function Timeline() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="journey" className="py-24 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Back Navigation (Displays only if standalone page view) */}
        <div
          className={`mb-12 transition-all duration-700 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
        >
          <Link
            href="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 group font-mono text-xs uppercase tracking-wider"
          >
            <ArrowLeft className="mr-2 w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Section Heading */}
        <div className={`mb-24 transition-all duration-1000 ${mounted ? "reveal-up" : "opacity-0"}`}>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-2">
            05 // HISTORY
          </span>
          <h2 className="font-poppins text-4xl sm:text-6xl font-black text-[#F5F7FF] tracking-tight uppercase">
            MY JOURNEY
          </h2>
          <div className="w-16 h-[2px] bg-blue-500 mt-4" />
        </div>

        {/* Asymmetric Editorial Timeline Grid */}
        <div className="space-y-16 relative">
          
          {/* Vertical central bar (shifted left for clean asymmetric balance) */}
          <div className="absolute left-6 lg:left-32 top-4 bottom-4 w-[1px] bg-slate-900" />

          {timelineData.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className={`grid lg:grid-cols-12 gap-8 items-start relative ${
                  mounted ? "reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                
                {/* Year display column */}
                <div className="lg:col-span-3 flex lg:justify-end items-center pl-16 lg:pl-0 lg:pr-12 relative z-10">
                  
                  {/* Timeline icon node */}
                  <div className="absolute left-6 lg:left-auto lg:-right-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="w-7 h-7 rounded-none border border-slate-700 bg-[#05061A] text-slate-400 flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <span className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-light text-slate-600 hover:text-white transition-colors duration-350 tracking-tight">
                    {item.year}
                  </span>
                </div>

                {/* Milestone details column */}
                <div className="lg:col-span-9 pl-16 lg:pl-6 space-y-3">
                  <div className="flex items-center space-x-3 font-mono">
                    <span className="text-[10px] text-blue-500 font-bold uppercase tracking-wider">{item.category}</span>
                    <span className="text-slate-800">|</span>
                    <span className="text-[9px] text-[#F5F7FF] uppercase tracking-widest">{item.subtitle}</span>
                  </div>

                  <h3 className="font-poppins text-lg sm:text-xl font-black text-[#F5F7FF] uppercase tracking-tight">
                    {item.title}
                  </h3>

                  <ul className="space-y-2 pt-2 border-t border-slate-950">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                        <span className="text-blue-500 mr-2 font-bold select-none">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
