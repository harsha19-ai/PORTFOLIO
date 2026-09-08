"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { GraduationCap, MapPin, ArrowLeft, Sparkles, Brain, ArrowUpRight, Camera, Trophy, Music } from "lucide-react"

const photos = [
  {
    id: "dhoti-candid",
    src: "/profile-dhoti-candid.jpg",
    alt: "Harshavarthanar KS — Candid Tilt",
    label: "CAMPUS GROUNDS // PERSPECTIVE",
    caption: "Traditional attire & high-focus mindset at Dr NGP IT.",
  },
  {
    id: "dhoti-standing",
    src: "/profile-dhoti-standing.jpg",
    alt: "Harshavarthanar KS — Sports Field",
    label: "ATHLETIC TRACK // HORIZONS",
    caption: "Secondary raider mindset: timing, momentum, and calculation.",
  },
  {
    id: "maroon-sunglasses",
    src: "/profile.jpg",
    alt: "Harshavarthanar KS — Portrait",
    label: "ARCHITECT ARCHIVE // SPEC",
    caption: "Debugging impossible challenges one iteration at a time.",
  },
]

export default function AboutContent() {
  const [mounted, setMounted] = useState(false)
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-20 relative z-10 min-h-screen">
      <div className="viscera-container">
        
        {/* Back Navigation */}
        <div
          className={`mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          <Link
            href="/"
            className="inline-flex items-center text-xs font-syne font-bold uppercase tracking-widest text-white/70 hover:text-[#ff3e00] transition-colors duration-200 group"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" size={16} />
            Back to Base
          </Link>
        </div>

        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="viscera-tag mb-2">// 001 — BIOGRAPHY & DOSSIER</div>
          <h1 className="font-syne text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight mb-4">
            ABOUT <span className="text-[#ff3e00]">ME</span>
          </h1>
          <div className="w-16 h-[2px] bg-[#ff3e00] mb-4"></div>
          <p className="text-white/60 max-w-2xl text-sm sm:text-base leading-relaxed">
            AI specialist, B.E. Computer Science student, and builder committed to making complex technology feel effortlessly simple.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Multi-Photo Editorial Showcase Column */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-200 lg:sticky lg:top-28 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="border border-[#222222] bg-[#121212] p-4 shadow-2xl relative">
              {/* Active Photo Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-black border border-[#222222]">
                <Image
                  src={photos[activePhotoIndex].src}
                  alt={photos[activePhotoIndex].alt}
                  fill
                  className="object-cover object-center filter grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                  priority
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#0e0e0e]/90 p-2.5 border border-white/10 backdrop-blur-sm">
                  <p className="font-mono text-[10px] text-[#ff3e00] uppercase tracking-wider">
                    {photos[activePhotoIndex].label}
                  </p>
                  <p className="text-[11px] text-white/80 font-syne mt-0.5">
                    {photos[activePhotoIndex].caption}
                  </p>
                </div>
              </div>

              {/* Photo Selector Thumbnails */}
              <div className="mt-4 pt-3 border-t border-[#222222]">
                <div className="flex items-center justify-between text-[11px] font-mono text-white/50 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Camera size={12} className="text-[#ff3e00]" />
                    <span>PHOTO GALLERY</span>
                  </span>
                  <span>0{activePhotoIndex + 1} / 0{photos.length}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {photos.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`relative aspect-[4/3] overflow-hidden border transition-all duration-200 ${
                        activePhotoIndex === idx
                          ? "border-[#ff3e00] ring-1 ring-[#ff3e00]"
                          : "border-[#2a2a2a] opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        className="object-cover object-center"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* About Text Column — EXACT Content Preserved */}
          <div
            className={`lg:col-span-7 space-y-6 transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-6 text-white/80 text-sm sm:text-base leading-relaxed">
              
              <h2 className="text-xl sm:text-2xl font-bold text-white font-syne uppercase border-b border-[#222222] pb-3">
                HARSHAVARTHANAR KS // DOSSIER
              </h2>

              <p className="text-base sm:text-lg italic text-white/90 border-l-2 border-[#ff3e00] pl-4 py-2 bg-[#141414] rounded-r">
                &quot;So... you wanted to know about me? Fair enough. Just don&apos;t expect a 500-page user manual—I prefer building things over explaining every line of them.&quot;
              </p>
              
              <p>
                I&apos;m <strong className="text-white font-semibold">Harshavarthanar KS</strong>, an AI specialist who believes that <strong className="text-[#ff3e00]">&quot;Nothing is Impossible&quot;</strong> isn&apos;t just a quote—it&apos;s a debugging strategy. Every impossible problem is usually just waiting for someone patient enough to understand it.
              </p>

              <p>
                Currently pursuing my <strong className="text-white">B.E. in Computer Science Engineering</strong>, I spend most of my time exploring <strong className="text-white font-medium">Artificial Intelligence, Large Language Models (LLMs), Prompt Engineering, Retrieval-Augmented Generation (RAG), Computer Vision, Natural Language Processing, and Full-Stack Development</strong>. My curiosity rarely stops at &quot;it works.&quot; I like knowing <em>why</em> it works, <em>how</em> it works, and whether it can work even better.
              </p>

              <p>
                I enjoy building intelligent systems that solve real-world problems—from AI assistants and semantic search engines to computer vision applications and creative AI experiences. My goal isn&apos;t to make technology look complicated; it&apos;s to make complicated technology feel simple.
              </p>

              <p>
                I&apos;m not in a race to master every framework released this week. Good engineering takes time, thoughtful decisions, and plenty of coffee. (The coffee is optional... but highly recommended.)
              </p>

              <p>
                Outside the world of AI, you&apos;ll probably find me gaming, singing, playing musical instruments, or planning my next trip. Even machines need maintenance—turns out developers do too.
              </p>

              <div className="bg-[#141414] border border-[#222222] p-6 my-6">
                <p className="text-[#ff3e00] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                  // CORE PRINCIPLE
                </p>
                <blockquote className="text-white italic text-sm sm:text-base border-l-2 border-[#ff3e00] pl-4 py-1">
                  &quot;Nothing is Impossible. Every challenge has a solution—you just haven&apos;t discovered it yet.&quot;
                </blockquote>
              </div>

              <div className="space-y-3 pt-2">
                <p>
                  I believe great engineers aren&apos;t remembered because they knew every answer. They&apos;re remembered because they never stopped looking for one.
                </p>
                <p className="font-syne font-bold text-white text-base tracking-wide">
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
              title: "Academic Background",
              content: "B.E. in Computer Science Engineering at Dr NGP IT (2024–2028). Active CGPA: 8.34 till 4th semester. Class Leader & student coordinator.",
            },
            {
              icon: Brain,
              title: "Technical Core",
              content: "Prompt Engineering Intern at Skylena Pvt. Ltd. Specialized in RAG pipelines, Sentence Transformers, and FAISS vector retrieval.",
            },
            {
              icon: MapPin,
              title: "Athletics & Hobbies",
              content: "Kabaddi team secondary raider, intermediate rhythm padist musical activities, and open to remote engineering collaborations worldwide.",
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="border border-[#222222] bg-[#121212] p-6 hover:border-[#ff3e00] transition-all duration-300"
              >
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-[#ff3e00]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-syne font-bold text-base text-white mb-2 uppercase">
                  {item.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.content}</p>
              </div>
            )
          })}
        </div>

        {/* Call to Action Container */}
        <div className="border border-[#222222] bg-[#121212] p-8 max-w-4xl mx-auto text-center">
          <span className="viscera-tag">// NEXT STEPS</span>
          <h3 className="font-syne text-2xl sm:text-3xl font-extrabold uppercase text-white my-3">
            INTERESTED IN BUILDING TOGETHER?
          </h3>
          <p className="text-white/60 leading-relaxed mb-6 text-sm sm:text-base max-w-2xl mx-auto">
            I am always eager to join teams building next-generation AI agents, optimizing LLM inference queues, or implementing modern web applications. Let&apos;s build something substantial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/harsha-varthanar-03aa3932b"
              target="_blank"
              rel="noopener noreferrer"
              className="viscera-btn inline-flex items-center justify-center gap-2"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>
            <Link
              href="/contact"
              className="viscera-btn-outline inline-flex items-center justify-center gap-2"
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
