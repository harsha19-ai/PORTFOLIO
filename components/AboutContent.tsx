"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Sparkles, Terminal } from "lucide-react"

export default function AboutContent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Asymmetric Profile Photo Column (Tilted Frame Overlay) */}
          <div
            className={`lg:col-span-5 lg:sticky lg:top-28 transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group w-72 sm:w-80 aspect-[4/5] mx-auto lg:mx-0">
              
              {/* Rear offset tilted rectangular outline */}
              <div className="absolute -inset-4 border border-slate-800 pointer-events-none transform -rotate-3 group-hover:-rotate-2 transition-transform duration-500 z-0" />
              
              {/* Outer image frame container */}
              <div className="relative w-full h-full border border-slate-700 bg-slate-900 overflow-hidden transform rotate-2 group-hover:rotate-1 transition-transform duration-500 z-10 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Harshavarthanar KS"
                  fill
                  sizes="(max-w-778px) 280px, 320px"
                  className="object-cover object-center scale-[1.05] group-hover:scale-[1.1] transition-transform duration-500"
                  priority
                />
                
                {/* Visual coordinate overlay */}
                <div className="absolute top-4 right-4 bg-[#05061A]/80 backdrop-blur-md border border-slate-800 rounded-full p-2 z-20">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                </div>
              </div>
              
              {/* Visual slide numbering indicator */}
              <div className="absolute top-4 left-4 z-20 font-mono text-[9px] text-slate-400 bg-[#05061A]/90 px-2 py-0.5 border border-slate-800">
                02 // BIO_SYSTEMS
              </div>
            </div>
          </div>

          {/* About Narrative Text Column (Large Editorial Typography) */}
          <div
            className={`lg:col-span-7 space-y-8 transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Slide Header */}
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-2">
                01 // BACKGROUND
              </span>
              <h2 className="font-poppins text-4xl sm:text-5xl font-black text-[#F5F7FF] tracking-tight uppercase">
                ABOUT ME
              </h2>
              <div className="w-16 h-[2px] bg-blue-500 mt-4" />
            </div>

            {/* Narrative Body */}
            <div className="space-y-6 text-slate-400 leading-relaxed text-sm sm:text-base font-light">
              <p className="text-[#F5F7FF] text-base sm:text-lg font-normal leading-normal italic border-l-2 border-slate-800 pl-4">
                &ldquo;So... you wanted to know about me? Fair enough. Just don&apos;t expect a 500-page user manual—I prefer building things over explaining every line of them.&rdquo;
              </p>
              
              <p>
                I&apos;m <strong className="text-[#F5F7FF] font-semibold">Harshavarthanar KS</strong>, an AI specialist who believes that <strong className="text-[#F5F7FF] font-semibold">&ldquo;Nothing is Impossible&rdquo;</strong> isn&apos;t just a quote—it&apos;s a debugging strategy. Every impossible problem is usually just waiting for someone patient enough to understand it.
              </p>

              <p>
                Currently pursuing my <strong className="text-[#F5F7FF] font-semibold">B.E. in Computer Science Engineering</strong> at Dr NGP Institute Of Technology, I spend most of my time exploring <strong className="text-[#F5F7FF] font-semibold">Artificial Intelligence, Large Language Models (LLMs), Prompt Engineering, Retrieval-Augmented Generation (RAG), Computer Vision, Natural Language Processing, and Full-Stack Development</strong>. My curiosity rarely stops at &ldquo;it works.&rdquo; I like knowing *why* it works, *how* it works, and whether it can work even better.
              </p>

              <p>
                I enjoy building intelligent systems that solve real-world problems.
              </p>
            </div>

            {/* Supporting Information Columns */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-900">
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#F5F7FF] font-semibold tracking-wider uppercase">
                  <Terminal className="w-4 h-4 text-blue-500" />
                  <span>AI / Engineering Focus</span>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                  Deep focus on context optimization, semantic vector lookup networks (FAISS), and LLM system instruction weight fine-tuning.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#F5F7FF] font-semibold tracking-wider uppercase">
                  <Terminal className="w-4 h-4 text-blue-500" />
                  <span>Full Stack Capabilities</span>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                  Crafting structured React/Next.js dashboard interfaces connected to high-speed async server backends (FastAPI/Flask).
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
