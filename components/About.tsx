"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Sparkles, GraduationCap, Brain, MapPin } from "lucide-react"
import Image from "next/image"

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-20 bg-slate-950/60 relative z-10 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Navigation */}
        <div
          className={`mb-12 transition-all duration-700 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
        >
          <Link
            href="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 group"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" size={18} />
            Back to Home
          </Link>
        </div>

        {/* Main Content with Profile Image */}
        <div
          className={`flex flex-col md:flex-row gap-8 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Profile Image */}
          <div className="flex-shrink-0 relative w-full md:w-80">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] border border-slate-800 bg-slate-900">
              <Image
                src="/profile.jpg"
                alt="Harshavarthanar KS"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Developer Profile</span>
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-white font-poppins">
              Harshavarthanar KS
            </h2>

            <p className="italic text-slate-200 border-l-2 border-cyan-400 pl-4 py-1 bg-slate-900/30 rounded-r-lg">
              "So... you wanted to know about me? Fair enough. Just don't expect a 500-page user manual—I prefer building things over explaining every line of them."
            </p>

            <p>
              I'm <strong className="text-white font-semibold">Harshavarthanar KS</strong>, an AI specialist who believes that <strong className="text-cyan-400">"Nothing is Impossible"</strong> isn't just a quote—it's a debugging strategy. Every impossible problem is usually just waiting for someone patient enough to understand it.
            </p>

            <p>
              Currently pursuing my <strong className="text-white">B.E. in Computer Science Engineering</strong>, I spend most of my time exploring <strong className="text-white font-medium">Artificial Intelligence, Large Language Models (LLMs), Prompt Engineering, Retrieval-Augmented Generation (RAG), Computer Vision, Natural Language Processing, and Full-Stack Development</strong>. My curiosity rarely stops at "it works." I like knowing <em>why</em> it works, <em>how</em> it works, and whether it can work even better.
            </p>

            <p>
              I enjoy building intelligent systems that solve real-world problems—from AI assistants and semantic search engines to computer vision applications and creative AI experiences. My goal isn't to make technology look complicated; it's to make complicated technology feel simple.
            </p>

            <p>
              I'm not in a race to master every framework released this week. Good engineering takes time, thoughtful decisions, and plenty of coffee. (The coffee is optional... but highly recommended.)
            </p>

            <p>
              Outside the world of AI, you'll probably find me gaming, singing, playing musical instruments, or planning my next trip. Even machines need maintenance—turns out developers do too.
            </p>

            <div className="bg-gradient-to-r from-blue-950/20 via-purple-950/20 to-slate-950 rounded-2xl p-6 border border-slate-900 my-6">
              <blockquote className="text-slate-200 italic text-sm sm:text-base border-l-2 border-purple-500 pl-4 py-1">
                "Nothing is Impossible. Every challenge has a solution—you just haven't discovered it yet."
              </blockquote>
            </div>

            <p>
              I believe great engineers aren't remembered because they knew every answer. They're remembered because they never stopped looking for one.
            </p>
            <p className="font-bold text-white tracking-wide">
              Keep learning. Keep building. Keep proving that impossible is only temporary.
            </p>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="https://www.linkedin.com/in/harsha-varthanar-03aa3932b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:scale-[1.02]"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
