"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

const skillCategories = [
  {
    id: "ai",
    title: "AI TECHNOLOGY",
    skills: [
      { name: "Prompt Engineering", desc: "Token weights, context optimization, & few-shot instructions sets" },
      { name: "RAG Systems", desc: "Semantic retrieval, context synthesis & query translation routing" },
      { name: "Sentence Transformers", desc: "Multi-dimensional textual embeddings mapping & mapping filters" },
      { name: "FAISS Vector Search", desc: "Similarity index FlatL2/IP lookup pipelines" },
    ],
  },
  {
    id: "languages",
    title: "LANGUAGES",
    skills: [
      { name: "Python", desc: "ML package tooling, API routing controllers, and system scripts" },
      { name: "Java", desc: "Object-oriented software systems and algorithms design" },
      { name: "C", desc: "Low-level memory management structures and computer parsing basics" },
      { name: "JavaScript", desc: "Asynchronous client script modules and DOM interaction logic" },
    ],
  },
  {
    id: "frameworks",
    title: "WEB ARCHITECTURES",
    skills: [
      { name: "React & Next.js", desc: "Server components, client states, and Next.js routers" },
      { name: "FastAPI & Flask", desc: "Async web server controllers and REST API microservices" },
      { name: "Django", desc: "MVC databases operations, admin layers, and ORM pipelines" },
      { name: "HTML & CSS", desc: "Tailwind templates, CSS flex/grid layout models, and semantic layouts" },
    ],
  },
  {
    id: "tools",
    title: "TOOLS & DATABASES",
    skills: [
      { name: "Hugging Face", desc: "Transformers, tokenizer models, and models Hub hosting" },
      { name: "Git & GitHub", desc: "Repository version branching and history logs tracking" },
      { name: "Docker", desc: "Container configurations, containerization, and compose setups" },
      { name: "MongoDB & MySQL", desc: "Relational tables and document collection schemes" },
      { name: "Vercel & Render", desc: "Serverless web page pipelines hosting and cloud deployments" },
      { name: "Loveable & Canva", desc: "Design drafts, vector visual assets, and prompt optimizations" },
    ],
  },
]

export default function Skills() {
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState("ai")

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentCategory = skillCategories.find(c => c.id === activeCategory) || skillCategories[0]

  return (
    <section id="skills" className="py-24 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Back Navigation Link */}
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
        <div className={`mb-20 transition-all duration-1000 ${mounted ? "reveal-up" : "opacity-0"}`}>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-2">
            04 // THE TOOLKIT
          </span>
          <h2 className="font-poppins text-4xl sm:text-6xl font-black text-[#F5F7FF] tracking-tight uppercase">
            TECH STACK
          </h2>
          <div className="w-16 h-[2px] bg-blue-500 mt-4" />
        </div>

        {/* Editorial Tab Layout */}
        <div className={`grid lg:grid-cols-12 gap-12 border-t border-slate-900 pt-12 ${mounted ? "reveal-up" : "opacity-0"}`}>
          
          {/* Tab Categories Menu (Left Column) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`py-3 text-left font-poppins text-lg font-black tracking-wide uppercase transition-all duration-300 border-l-2 pl-4 cursor-none ${
                  activeCategory === category.id
                    ? "border-blue-500 text-white font-black"
                    : "border-transparent text-slate-500 hover:text-slate-300 hover:border-slate-800"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Tab Skills Display (Right Column) */}
          <div className="lg:col-span-8 bg-[#070924]/20 border border-slate-900 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none" />
            
            <div className="relative z-10 space-y-8 animate-fade-in">
              <h3 className="font-mono text-xs text-blue-500 font-bold tracking-widest uppercase">
                // {currentCategory.title} UTILITIES
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {currentCategory.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2 group">
                    <div className="flex items-center space-x-2.5">
                      <CheckCircle className="w-4 h-4 text-blue-400/70 group-hover:text-blue-400 transition-colors" />
                      <h4 className="font-poppins text-sm sm:text-base font-bold text-white group-hover:translate-x-1 transition-transform duration-300">
                        {skill.name}
                      </h4>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed font-light pl-6">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
