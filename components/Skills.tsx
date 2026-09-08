"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Brain, Cpu, Database, Layout, Terminal, Wrench, Cloud, CheckCircle } from "lucide-react"

const skillCategories = [
  {
    id: "ai",
    title: "AI Technology",
    icon: Brain,
    color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
    skills: [
      { name: "Prompt Engineering", desc: "Token weights, dynamic context & optimized QA templates" },
      { name: "Retrieval-Augmented Generation (RAG)", desc: "Semantic retrieval, context synthesis" },
      { name: "Sentence Transformers", desc: "Multi-dimensional textual embeddings mapping" },
      { name: "FAISS", desc: "Facebook AI Similarity Search, index FlatL2/IP lookup" },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    icon: Terminal,
    color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
    skills: [
      { name: "Python", desc: "System scripting, ML packages, signal processing, APIs" },
      { name: "Java", desc: "Object-oriented structures, algorithms, and application core design" },
      { name: "C", desc: "Low-level memory management structures, computational parsing" },
      { name: "JavaScript", desc: "DOM manipulation, asynchronous ES6+ script logic" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Layout,
    color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
    skills: [
      { name: "HTML & CSS", desc: "Semantic elements, responsive layouts, modern flex/grid models" },
      { name: "JavaScript", desc: "Client side interaction logic and standard script modules" },
      { name: "React & Next.js", desc: "Functional components, custom hooks, AppRouter architecture" },
      { name: "Tailwind CSS", desc: "Utility styling structure, responsive layout styling" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Cpu,
    color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
    skills: [
      { name: "Flask", desc: "Microservices design, API endpoint controllers" },
      { name: "FastAPI", desc: "Async request parsing, automated Swagger API docs" },
      { name: "Django", desc: "Scalable MVC architectures, admin modules, ORM" },
    ],
  },
  {
    id: "databases",
    title: "Database Stacks",
    icon: Database,
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    skills: [
      { name: "MongoDB", desc: "Document storage schema, vector search aggregation pipelines" },
      { name: "MySQL", desc: "Relational tables structure, SQL queries, join mapping" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Utilities",
    icon: Wrench,
    color: "text-amber-400 border-amber-500/20 bg-amber-500/5",
    skills: [
      { name: "Huggingface", desc: "Model repositories deployment, pre-trained transformer pipelines" },
      { name: "GitHub", desc: "Version control branching, pull requests, project code history" },
      { name: "Docker", desc: "Container configurations, containerization, compose setup" },
      { name: "Vercel & Render", desc: "Serverless pipelines, PaaS hosting deployment" },
      { name: "Loveable & Canva", desc: "Optimized prompt templates, creative assets design drafts" },
    ],
  },
]

export default function Skills() {
  const [mounted, setMounted] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty("--mouse-x", `${x}px`)
    card.style.setProperty("--mouse-y", `${y}px`)
  }

  return (
    <section className="py-20 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Navigation */}
        <div
          className={`mb-8 transition-all duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}
        >
          <Link
            href="/"
            className="inline-flex items-center text-xs font-syne font-bold uppercase tracking-widest text-white/70 hover:text-[#ff3e00] transition-colors duration-200 group"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" size={16} />
            Back to Base
          </Link>
        </div>

        {/* Title */}
        <div
          className={`mb-16 transition-all duration-700 delay-100 ${mounted ? "opacity-100" : "opacity-0"}`}
        >
          <div className="viscera-tag mb-2">// 004 — TECHNICAL ARSENAL</div>
          <h1 className="font-syne text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight mb-4">
            SYSTEM{" "}
            <span className="text-[#ff3e00]">
              STACKS
            </span>
          </h1>
          <div className="w-16 h-[2px] bg-[#ff3e00] mb-4"></div>
          <p className="text-white/60 max-w-2xl text-sm sm:text-base leading-relaxed">
            Detailed breakdown of production AI technologies, prompt engineering patterns, vector search stores, backend controllers, and deployment utilities.
          </p>
        </div>

        {/* Interactive KPI counters */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 transition-all duration-700 delay-200 ${mounted ? "reveal-up delay-200" : "opacity-0"}`}
        >
          {[
            { label: "AI Frameworks & Techs", value: "4" },
            { label: "Programming Languages", value: "4" },
            { label: "Backend Frameworks", value: "3" },
            { label: "Databases & Vector Stores", value: "2" },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-slate-900/40 border border-slate-900 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{kpi.value}</div>
              <div className="text-slate-500 text-[11px] sm:text-xs uppercase tracking-wider">{kpi.label}</div>
            </div>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-10">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            const isHovered = hoveredCategory === category.id

            return (
              <div
                key={category.id}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`relative rounded-2xl border border-slate-900 bg-slate-900/10 p-6 sm:p-8 transition-all duration-300 ${
                  isHovered ? "border-slate-800/80 bg-slate-900/20" : ""
                } ${mounted ? "reveal-up" : "opacity-0"}`}
                style={{ animationDelay: `${150 + idx * 75}ms` }}
              >
                
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6 relative z-10">
                  <div className={`p-2.5 rounded-xl border ${category.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="font-poppins text-lg sm:text-xl font-bold text-white">
                    {category.title}
                  </h2>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onMouseMove={handleMouseMove}
                      className="group/card holo-border-card hud-brackets rounded-xl overflow-hidden"
                    >
                      <div className="holo-border-card-inner p-4 w-full h-full flex flex-col justify-between">
                        <div className="flex items-start space-x-2.5 relative z-10">
                          <CheckCircle className="w-4 h-4 text-cyan-400/80 shrink-0 mt-0.5" />
                          <div>
                            <h3 className="text-xs sm:text-sm font-bold text-slate-100 group-hover/card:text-cyan-400 transition-colors duration-200">
                              {skill.name}
                            </h3>
                            <p className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-normal">
                              {skill.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-500 ${mounted ? "reveal-up delay-400" : "opacity-0"}`}
        >
          <div className="bg-gradient-to-r from-blue-950/20 via-purple-950/20 to-slate-950 rounded-2xl p-8 max-w-4xl mx-auto border border-slate-900">
            <h3 className="font-poppins text-xl font-bold text-white mb-2">
              Need a Custom AI Integration Pipeline?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl mx-auto">
              I can orchestrate, refine, and deploy robust retrieval search agents, prompt optimizations, and full-stack solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:scale-[1.02]"
              >
                Start a Project
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white rounded-xl font-medium hover:bg-slate-900/60 transition-colors duration-200"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
