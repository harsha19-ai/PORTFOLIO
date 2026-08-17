"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden z-10">
      
      {/* Decorative Drawing Lines (Animate on Load) */}
      <div className="absolute inset-x-8 top-28 h-[1px] bg-slate-900 overflow-hidden">
        <div className={`h-full bg-gradient-to-r from-transparent via-slate-700 to-transparent ${mounted ? "animate-draw-x" : "w-0"}`} />
      </div>
      <div className="absolute inset-x-8 bottom-16 h-[1px] bg-slate-900 overflow-hidden">
        <div className={`h-full bg-gradient-to-r from-transparent via-slate-700 to-transparent ${mounted ? "animate-draw-x delay-300" : "w-0"}`} />
      </div>
      <div className="absolute left-12 top-24 bottom-12 w-[1px] bg-slate-900 overflow-hidden hidden lg:block">
        <div className={`w-full bg-gradient-to-b from-transparent via-slate-700 to-transparent ${mounted ? "animate-draw-y delay-150" : "h-0"}`} />
      </div>
      <div className="absolute right-12 top-24 bottom-12 w-[1px] bg-slate-900 overflow-hidden hidden lg:block">
        <div className={`w-full bg-gradient-to-b from-transparent via-slate-700 to-transparent ${mounted ? "animate-draw-y delay-300" : "h-0"}`} />
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 lg:px-20 grid lg:grid-cols-12 gap-12 items-center relative z-20">
        
        {/* Typographic Identity Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
          
          {/* Technical Scope Tags */}
          <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-widest ${mounted ? "reveal-up" : "opacity-0"}`}>
            <span>AI SPECIALIST</span>
            <span className="text-slate-700">//</span>
            <span>PROMPT ENGINEER</span>
            <span className="text-slate-700">//</span>
            <span>FULL STACK DEVELOPER</span>
          </div>

          {/* Huge Display Name */}
          <div className={`space-y-2 ${mounted ? "reveal-up delay-100" : "opacity-0"}`}>
            <h1 className="font-poppins text-5xl sm:text-7xl lg:text-8xl font-black text-[#F5F7FF] tracking-tight leading-[0.9]">
              HARSHAVARTHANAR
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-[#F5F7FF] mt-2">KS</span>
            </h1>
          </div>

          {/* Core Vision Statement */}
          <p className={`text-slate-400 max-w-xl text-base sm:text-lg leading-relaxed ${mounted ? "reveal-up delay-200" : "opacity-0"}`}>
            Building intelligent systems, AI-driven experiences, and high-performance full-stack architectures. Focused on RAG, vector retrieval indices, and LLM orchestration.
          </p>

          {/* Technical Metadata Panels (Spacious / Editorial) */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-slate-900/60 ${mounted ? "reveal-up delay-300" : "opacity-0"}`}>
            {[
              { id: "01", label: "RAG SYSTEMS" },
              { id: "02", label: "LLM APPLICATIONS" },
              { id: "03", label: "VECTOR SEARCH" },
              { id: "04", label: "FULL STACK" },
            ].map((meta) => (
              <div key={meta.id} className="font-mono">
                <span className="text-[10px] text-blue-500 block mb-1 font-bold">{meta.id} //</span>
                <span className="text-xs text-[#F5F7FF] tracking-wider uppercase font-semibold">{meta.label}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs & Social Links */}
          <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6 ${mounted ? "reveal-up delay-450" : "opacity-0"}`}>
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center px-6 py-3.5 bg-[#F5F7FF] text-[#05061A] hover:bg-[#F5F7FF]/90 font-medium transition-all duration-300 rounded-none tracking-wide text-sm"
              data-cursor="explore"
            >
              Explore Selected Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="/Harshavarthanar-KS-Resume.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-colors duration-200 rounded-none text-sm tracking-wide"
              data-cursor="download"
            >
              <FileText className="mr-2 w-4 h-4" />
              Download Resume
            </a>

            {/* Micro Social Bar */}
            <div className="flex items-center justify-center sm:justify-start space-x-3.5 sm:ml-4 border-t sm:border-t-0 sm:border-l border-slate-900/80 pt-4 sm:pt-0 sm:pl-6">
              {[
                { icon: Github, url: "https://github.com/harsha19-ai", label: "GitHub" },
                { icon: Linkedin, url: "https://www.linkedin.com/in/harsha-varthanar-03aa3932b", label: "LinkedIn" },
                { icon: Mail, url: "mailto:harshavarthanar60@gmail.com", label: "Email" },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-slate-950 text-slate-500 hover:text-white hover:border-slate-800 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </a>
                )
              })}
            </div>
          </div>

        </div>

        {/* Asymmetric Offset Portrait Column */}
        <div className={`lg:col-span-5 flex justify-center relative ${mounted ? "reveal-up delay-300" : "opacity-0"}`}>
          <div className="relative group w-72 sm:w-80 aspect-[4/5] max-w-full">
            
            {/* Offset outline border box behind picture */}
            <div className="absolute -inset-4 border border-slate-800 pointer-events-none transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 z-0" />
            
            {/* Main picture container */}
            <div className="relative w-full h-full border border-slate-700 bg-slate-900 overflow-hidden z-10">
              <Image
                src="/profile.jpg"
                alt="Harshavarthanar KS"
                fill
                sizes="(max-w-778px) 280px, 320px"
                className="object-cover object-center scale-[1.05] group-hover:scale-[1.1] transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05061A]/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating layout identifier number */}
            <div className="absolute bottom-4 left-4 z-20 font-mono text-[10px] text-slate-400 bg-[#05061A]/85 backdrop-blur-sm border border-slate-800 px-2 py-0.5">
              LATENCY // 0x7E3
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
