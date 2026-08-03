"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, GitBranch, Cpu, Music, ShieldAlert, Layers } from "lucide-react"

const currentProjects = [
  {
    title: "AI Civic Issue Reporter",
    description: "AI-powered platform allowing citizens to report civic issues using image analysis, AI categorization, automated department routing, and progress tracking.",
    status: "Active Sprint",
    progress: 88,
    icon: ShieldAlert,
    color: "from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-400",
    architecture: "Next.js 15 AppRouter + Flask API + YOLOv8 + ResNet Classifier",
    tech: ["React", "Python", "Flask", "Computer Vision", "YOLOv8"],
    nextGoal: "Deploy automated notification dispatch queues via webhook channels.",
  },
  {
    title: "KeySense AI",
    description: "Real-time AI music assistant that listens to live audio and predicts chords, musical key, beat, and progression instantly.",
    status: "Model Optimization",
    progress: 75,
    icon: Music,
    color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-400",
    architecture: "FastAPI WebSocket Stream + Librosa Audio Extraction + CNN chord predictor",
    tech: ["Python", "FastAPI", "Librosa", "PyTorch", "Signal Processing"],
    nextGoal: "Minimize latency of FFT windowing for faster real-time key signatures.",
  },
  {
    title: "Department AI Assistant",
    description: "AI assistant for educational institutions using RAG, vector search, semantic retrieval, and conversational AI to answer department queries.",
    status: "Data Integration",
    progress: 92,
    icon: Cpu,
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400",
    architecture: "RAG Pipeline + Sentence Transformers + FAISS Index + MongoDB Vector Store",
    tech: ["Flask", "MongoDB", "Sentence Transformers", "FAISS", "LLM", "RAG"],
    nextGoal: "Optimize retrieval accuracy by implementing hybrid lexical-semantic search.",
  },
  {
    title: "ShadowStack AI",
    description: "AI-powered image search platform using semantic search and intelligent image retrieval.",
    status: "Alpha testing",
    progress: 80,
    icon: Layers,
    color: "from-rose-500/20 to-orange-500/20 border-rose-500/30 text-rose-400",
    architecture: "CLIP Embedding Generation + Cosine Similarity Lookup + Cloudinary Cache",
    tech: ["Next.js", "React", "CLIP Models", "Vector Similarity", "Cloudinary"],
    nextGoal: "Integrate multi-modal text-and-image joint search querying.",
  },
]

export default function CurrentlyBuilding() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-20 relative border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
              <GitBranch className="w-4.5 h-4.5 animate-pulse" />
              <span>Current Status</span>
            </div>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Currently Building
            </h2>
            <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
              Active engineering efforts focusing on production-grade architectures, prompt optimization, and real-time inference.
            </p>
          </div>
          
          <Link
            href="/portfolio"
            className="group flex items-center space-x-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 mt-4 md:mt-0"
          >
            <span>View all projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentProjects.map((project, idx) => {
            const Icon = project.icon
            return (
              <div
                key={project.title}
                className="group relative rounded-2xl border border-slate-900 bg-slate-900/35 p-6 hover:border-slate-800/80 transition-all duration-300 overflow-hidden"
              >
                {/* Neon Top Edge Accent */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.color.includes('cyan') ? 'from-cyan-500 to-blue-500' : project.color.includes('purple') ? 'from-purple-500 to-indigo-500' : project.color.includes('emerald') ? 'from-emerald-500 to-teal-500' : 'from-rose-500 to-orange-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="flex items-start justify-between mb-4">
                  {/* Icon Block */}
                  <div className={`p-2.5 rounded-xl border bg-slate-950 ${project.color.split(' ')[2]} border-slate-800`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Status Indicator */}
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
                    {project.status}
                  </span>
                </div>

                {/* Info */}
                <h3 className="font-poppins text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between items-center text-[11px] font-medium mb-1.5">
                    <span className="text-slate-500">Development Progress</span>
                    <span className="text-slate-300 font-bold">{project.progress}%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${project.color.includes('cyan') ? 'from-cyan-500 to-blue-500' : project.color.includes('purple') ? 'from-purple-500 to-indigo-500' : project.color.includes('emerald') ? 'from-emerald-500 to-teal-500' : 'from-rose-500 to-orange-500'} rounded-full transition-all duration-1000`}
                      style={{ width: mounted ? `${project.progress}%` : "0%" }}
                    />
                  </div>
                </div>

                {/* Architecture details */}
                <div className="mt-4 pt-4 border-t border-slate-900 space-y-2">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center space-x-1">
                    <span>Target Architecture</span>
                  </div>
                  <div className="text-xs text-slate-300 font-mono bg-slate-950/70 p-2 rounded-lg border border-slate-900 leading-normal">
                    {project.architecture}
                  </div>
                </div>

                {/* Technologies List */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Next Sprint Focus */}
                <div className="mt-4 text-[11px] text-slate-400 italic">
                  <strong className="text-slate-500 font-medium not-italic">Sprint focus:</strong> {project.nextGoal}
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
