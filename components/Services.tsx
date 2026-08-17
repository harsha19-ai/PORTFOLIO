"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

const categories = [
  {
    id: "01",
    title: "AI SYSTEMS",
    desc: "Production RAG pipelines, LLM orchestration, multidimensional sentence embeddings, and FAISS-backed semantic vector databases.",
    subcategories: ["Context Engineering", "Retrieval Optimization", "Vector Search Tuning"],
  },
  {
    id: "02",
    title: "FULL STACK PRODUCTS",
    desc: "Responsive web architectures designed with clean frontend states (React/Next.js) and optimized, high-performance backends (FastAPI/Flask/Django).",
    subcategories: ["Database Relational Design", "API Rate Limiting", "State Syncing"],
  },
  {
    id: "03",
    title: "AI EXPERIENCES",
    desc: "Interactive, intelligent customer-facing interfaces, experimental cognitive systems, and real-time computer vision classifiers.",
    subcategories: ["Object Detection Models", "Behavior Monitoring", "Live Signal Tuning"],
  },
  {
    id: "04",
    title: "PROMPT ENGINEERING",
    desc: "Rigorous prompt construction, context window windowing, temperature bounds controls, and multi-turn autonomous agent behaviors.",
    subcategories: ["System Directive Coding", "Zero-Shot Templates", "Few-Shot Instruction Sets"],
  },
]

export default function Services() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="services" className="py-24 relative z-10 min-h-screen">
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
        <div
          className={`mb-20 transition-all duration-1000 ${mounted ? "reveal-up" : "opacity-0"}`}
        >
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-2">
            02 // SERVICES
          </span>
          <h2 className="font-poppins text-4xl sm:text-6xl font-black text-[#F5F7FF] tracking-tight uppercase">
            WHAT I BUILD
          </h2>
          <div className="w-16 h-[2px] bg-blue-500 mt-4" />
        </div>

        {/* Editorial Numbered Layout List */}
        <div className="space-y-0 border-t border-slate-900">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              className={`grid lg:grid-cols-12 gap-8 py-12 border-b border-slate-900 group hover:bg-[#070924]/10 transition-colors duration-500 px-4 ${
                mounted ? "reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Massive Slide Number */}
              <div className="lg:col-span-2 flex items-start">
                <span className="font-poppins text-5xl sm:text-6xl font-light text-slate-700 group-hover:text-blue-500 transition-colors duration-300">
                  {cat.id}
                </span>
              </div>

              {/* Title & Core Subtitles */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="font-poppins text-xl sm:text-2xl font-black text-[#F5F7FF] group-hover:translate-x-1 transition-transform duration-300 flex items-center">
                  {cat.title}
                  <ArrowUpRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-blue-400" />
                </h3>
                
                {/* Secondary Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.subcategories.map((sub) => (
                    <span
                      key={sub}
                      className="px-2 py-0.5 rounded-none text-[9px] font-mono bg-slate-950/60 border border-slate-900 text-slate-500 uppercase tracking-wider"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detailed Description */}
              <div className="lg:col-span-5 flex items-center">
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                  {cat.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
