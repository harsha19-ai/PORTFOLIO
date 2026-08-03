"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { GraduationCap, MapPin, ArrowLeft, Sparkles, Brain } from "lucide-react"

export default function AboutContent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-20 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Navigation */}
        <div
          className={`mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          <Link
            href="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 group"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" size={18} />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 rounded-full"></div>
        </div>

        {/* Core Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Profile Image Column */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-200 lg:sticky lg:top-24 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20 group-hover:opacity-40 blur-lg" />
              <div className="relative bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-2xl">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-950">
                  <Image
                    src="/profile.jpg"
                    alt="Harshavarthanar KS"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <div className="absolute top-6 right-6 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-full p-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>

          {/* About Text Column */}
          <div
            className={`lg:col-span-7 space-y-6 transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              
              <h2 className="text-xl sm:text-2xl font-bold text-white font-poppins border-b border-slate-900 pb-2">
                About Me
              </h2>

              <p className="text-base sm:text-lg italic text-slate-200 border-l-2 border-cyan-400 pl-4 py-1 bg-slate-900/30 rounded-r-lg">
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
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">My Core Principle</p>
                <blockquote className="text-slate-200 italic text-sm sm:text-base border-l-2 border-purple-500 pl-4 py-1">
                  "Nothing is Impossible. Every challenge has a solution—you just haven't discovered it yet."
                </blockquote>
              </div>

              <div className="space-y-3 pt-2">
                <p>
                  I believe great engineers aren't remembered because they knew every answer. They're remembered because they never stopped looking for one.
                </p>
                <p className="font-bold text-white tracking-wide">
                  Keep learning. Keep building. Keep proving that impossible is only temporary.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              content: "B.E. in Computer Science Engineering (Milestones in databases, RAG, and algorithms).",
              color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20 text-blue-400",
            },
            {
              icon: Brain,
              title: "Core Specialties",
              content: "Prompt Engineering, retrieval semantic search, and CNNs/YOLO models.",
              color: "from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-400",
            },
            {
              icon: MapPin,
              title: "Interests & Location",
              content: "Available for remote collaborations worldwide. Enthusiastic about travel, music, and ML updates.",
              color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-400",
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`group relative p-6 rounded-2xl border border-slate-900 bg-slate-900/20 hover:border-slate-800 hover:bg-slate-900/35 transition-all duration-300 transform hover:-translate-y-1 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 border`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-poppins font-bold text-base text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.content}</p>
              </div>
            )
          })}
        </div>

        {/* Call to Action Container */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-950/20 via-purple-950/20 to-slate-950 rounded-2xl p-8 max-w-4xl mx-auto border border-slate-900 text-center">
            <h3 className="font-poppins text-xl sm:text-2xl font-semibold text-white mb-3">
              Interested in Building Together?
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6 text-sm sm:text-base max-w-2xl mx-auto">
              I am always eager to join teams building next-generation AI agents, optimizing LLM inference queues, or implementing modern web dashboards. Let's build something substantial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/harsha-varthanar-03aa3932b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-medium transition-all duration-300 shadow-lg"
              >
                Connect on LinkedIn
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white rounded-xl font-medium hover:bg-slate-900/60 transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
