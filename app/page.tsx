"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github, Linkedin, Mail, FileDown, Sparkles, Terminal, Award, BookOpen, Layers, Camera, ArrowRight } from "lucide-react"

const heroPhotos = [
  {
    id: "dhoti-candid",
    src: "/profile-dhoti-candid.jpg",
    label: "CAMPUS GROUND",
    tag: "DR NGP IT",
  },
  {
    id: "dhoti-standing",
    src: "/profile-dhoti-standing.jpg",
    label: "ATHLETIC TRACK",
    tag: "COIMBATORE",
  },
  {
    id: "maroon-sunglasses",
    src: "/profile.jpg",
    label: "ARCHITECT EDIT",
    tag: "AI SPEC",
  },
]

const roles = [
  "AI SYSTEMS SPECIALIST",
  "PROMPT ENGINEER",
  "RAG ARCHITECT",
  "FULL STACK DEVELOPER",
  "LLM RESEARCHER",
]

const stats = [
  {
    value: "8.34",
    title: "ACADEMIC CGPA",
    desc: "B.E. Computer Science Engineering at Dr NGP IT through 4th semester.",
  },
  {
    value: "1st",
    title: "BIT HACKATHON '25",
    desc: "Won cash prize award for pitching and deploying intelligent AI models.",
  },
  {
    value: "4+",
    title: "AI PROTOTYPES",
    desc: "Production deployments: ARADHYA, DMS Chatbot, HOPE, and Portfolio.",
  },
  {
    value: "100%",
    title: "SKYLENA INTERN",
    desc: "Prompt Engineering Intern researching optimized contextual chains.",
  },
]

export default function Home() {
  const blobRef = useRef<HTMLDivElement>(null)
  const [activePhotoIdx, setActivePhotoIdx] = useState(0)
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0)

  useEffect(() => {
    // Role switcher interval
    const roleInterval = setInterval(() => {
      setCurrentRoleIdx((prev) => (prev + 1) % roles.length)
    }, 2800)

    // Mouse Blob Follower
    const blob = blobRef.current
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let currentX = mouseX
    let currentY = mouseY

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    let animationFrameId: number
    const renderLoop = () => {
      currentX += (mouseX - currentX) * 0.12
      currentY += (mouseY - currentY) * 0.12
      if (blob) {
        blob.style.transform = `translate(${currentX - 210}px, ${currentY - 210}px)`
      }
      animationFrameId = requestAnimationFrame(renderLoop)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animationFrameId = requestAnimationFrame(renderLoop)

    // Parallax Scroll Effect
    const handleScroll = () => {
      const scroll = window.pageYOffset

      const parallaxTexts = document.querySelectorAll(".parallax-text")
      parallaxTexts.forEach((text) => {
        const speed = text.getAttribute("data-speed")
        if (speed) {
          ;(text as HTMLElement).style.transform = `translateX(${scroll * Number.parseFloat(speed) * 0.12}px)`
        }
      })

      const heroImg = document.getElementById("hero-img")
      if (heroImg) {
        heroImg.style.transform = `translate(-50%, calc(-50% + ${scroll * 0.16}px)) scale(${1 + scroll * 0.0004})`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      clearInterval(roleInterval)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <main className="relative min-h-screen bg-[#0e0e0e] text-white selection:bg-[#ff3e00] selection:text-white">
      {/* Interactive Cursor Radial Blob */}
      <div ref={blobRef} className="cursor-blob pointer-events-none" id="cursor-blob" />

      {/* ================= HERO SECTION ================= */}
      <section id="hero" className="relative flex items-center justify-center min-h-[125vh] overflow-hidden">
        {/* Editorial Hero Portrait with Photo Switcher */}
        <div className="hero-img-wrap" id="hero-img">
          <Image
            src={heroPhotos[activePhotoIdx].src}
            alt="Harshavarthanar KS"
            width={700}
            height={900}
            className="hero-img"
            priority
          />
          
          {/* Brutalist status stamps */}
          <div className="absolute top-3 left-3 bg-[#0e0e0e]/90 px-2 py-0.5 text-[10px] font-mono tracking-widest text-[#ff3e00] uppercase border border-white/10">
            {heroPhotos[activePhotoIdx].tag}
          </div>
          
          {/* Photo Switcher Dots */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-[#0e0e0e]/90 px-3 py-1.5 border border-white/10 backdrop-blur-sm">
            <span className="font-mono text-[9px] text-white/50">
              SWITCH PORTRAIT:
            </span>
            <div className="flex gap-1.5">
              {heroPhotos.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`w-2.5 h-2.5 border transition-all duration-200 ${
                    activePhotoIdx === idx
                      ? "bg-[#ff3e00] border-[#ff3e00] scale-110"
                      : "bg-transparent border-white/40 hover:border-white"
                  }`}
                  aria-label={`Switch to photo ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Monumental Layered Parallax Typography */}
        <div className="hero-title-container viscera-container select-none">
          <span className="huge-type parallax-text text-white drop-shadow-2xl" data-speed="-1.8">
            HARSHA
          </span>
          <span
            className="huge-type outline-text parallax-text"
            data-speed="1.8"
            style={{ paddingLeft: "clamp(40px, 12vw, 180px)" }}
          >
            SYSTEMS
          </span>
        </div>

        {/* Hero Bottom Metadata Status Stamps */}
        <div className="absolute bottom-10 left-0 w-full viscera-container flex flex-wrap justify-between items-end gap-4 text-xs font-mono uppercase tracking-widest text-white/60 z-20">
          <div className="space-y-1">
            <p className="text-[#ff3e00] font-bold">// ROLE</p>
            <p className="text-white font-syne font-bold transition-all duration-300">
              {roles[currentRoleIdx]}
            </p>
          </div>
          <div className="space-y-1 text-center hidden sm:block">
            <p className="text-[#ff3e00] font-bold">// ACADEMIC STANDING</p>
            <p className="text-white">DR NGP IT · CGPA 8.34</p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-[#ff3e00] font-bold">// BASE</p>
            <p className="text-white">COIMBATORE // REMOTE</p>
          </div>
        </div>
      </section>

      {/* ================= KEY METRICS & RECOGNITION ================= */}
      <section className="py-16 border-t border-[#222222] bg-[#0b0b0b]">
        <div className="viscera-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={s.title}
                className="border border-[#222222] bg-[#121212] p-6 hover:border-[#ff3e00] transition-all duration-300"
              >
                <span className="font-mono text-xs text-[#ff3e00] block mb-2">
                  0{i + 1} // METRIC
                </span>
                <div className="font-syne font-extrabold text-3xl sm:text-4xl text-white mb-1">
                  {s.value}
                </div>
                <div className="font-syne font-bold text-xs uppercase tracking-wider text-white/90 mb-2">
                  {s.title}
                </div>
                <p className="text-xs text-white/50 leading-relaxed font-mono">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INFINITE SCROLLING MARQUEE ================= */}
      <div className="scrolling-marquee select-none">
        <div className="marquee-inner">
          <span className="huge-type outline-text" style={{ fontSize: "clamp(3.5rem, 7vw, 8rem)" }}>
            PROMPT ENGINEERING — RAG RETRIEVAL — LLM ARCHITECTURES — FAISS VECTOR INDEXING — BIT HACKATHON &apos;25 WINNER —&nbsp;
          </span>
          <span className="huge-type outline-text" style={{ fontSize: "clamp(3.5rem, 7vw, 8rem)" }}>
            PROMPT ENGINEERING — RAG RETRIEVAL — LLM ARCHITECTURES — FAISS VECTOR INDEXING — BIT HACKATHON &apos;25 WINNER —&nbsp;
          </span>
        </div>
      </div>

      {/* ================= MULTI-PAGE GATEWAY (SEPARATE PAGES) ================= */}
      <section className="viscera-section border-t border-[#222222]">
        <div className="viscera-container">
          <div className="mb-14">
            <span className="viscera-tag">// PORTAL DIRECTORY</span>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mt-2">
              EXPLORE DOSSIERS & WORK
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-3 max-w-xl">
              Each dedicated section contains deep technical documentation, architectural schemas, source repositories, and bio records.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gateway 1: Portfolio */}
            <Link
              href="/portfolio"
              className="border border-[#222222] bg-[#121212] p-8 hover:border-[#ff3e00] transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono text-[#ff3e00]">
                  <span>01 // PRODUCTION</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
                <h3 className="font-syne font-bold text-2xl uppercase text-white group-hover:text-[#ff3e00] transition-colors">
                  PORTFOLIO ARCHIVE
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Deep-dive into 6 production AI projects: ARADHYA (Emotion), DMS Chatbot (RAG), HOPE (Crowdfunding), and ShadowStack with metrics, challenges, and code.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#222222] text-xs font-mono text-white/40 flex justify-between items-center">
                <span>VIEW 6 PROJECTS</span>
                <span className="text-[#ff3e00]">OPEN PAGE →</span>
              </div>
            </Link>

            {/* Gateway 2: About Me */}
            <Link
              href="/about"
              className="border border-[#222222] bg-[#121212] p-8 hover:border-[#ff3e00] transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono text-[#ff3e00]">
                  <span>02 // BIOGRAPHY</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
                <h3 className="font-syne font-bold text-2xl uppercase text-white group-hover:text-[#ff3e00] transition-colors">
                  ABOUT HARSHA
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  My debugging philosophy, B.E. Computer Science Engineering studies (CGPA 8.34), athletic kabaddi raider role, rhythm padist music, and photo gallery.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#222222] text-xs font-mono text-white/40 flex justify-between items-center">
                <span>FULL DOSSIER & PHOTOS</span>
                <span className="text-[#ff3e00]">OPEN PAGE →</span>
              </div>
            </Link>

            {/* Gateway 3: Skills */}
            <Link
              href="/skills"
              className="border border-[#222222] bg-[#121212] p-8 hover:border-[#ff3e00] transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono text-[#ff3e00]">
                  <span>03 // ARSENAL</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
                <h3 className="font-syne font-bold text-2xl uppercase text-white group-hover:text-[#ff3e00] transition-colors">
                  SYSTEM STACKS
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Categorized breakdown of Prompt Engineering techniques, Sentence Transformers, FAISS, Python, Java, FastAPI, Django, MongoDB, MySQL, and Docker.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#222222] text-xs font-mono text-white/40 flex justify-between items-center">
                <span>6 TECHNICAL DOMAINS</span>
                <span className="text-[#ff3e00]">OPEN PAGE →</span>
              </div>
            </Link>

            {/* Gateway 4: Services */}
            <Link
              href="/services"
              className="border border-[#222222] bg-[#121212] p-8 hover:border-[#ff3e00] transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono text-[#ff3e00]">
                  <span>04 // CAPABILITIES</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
                <h3 className="font-syne font-bold text-2xl uppercase text-white group-hover:text-[#ff3e00] transition-colors">
                  SERVICES & SOLS
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Enterprise LLM integration, custom RAG vector search pipelines, fine-tuned sentiment classifiers, and full-stack web architectures.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#222222] text-xs font-mono text-white/40 flex justify-between items-center">
                <span>CONSULTING & BUILD</span>
                <span className="text-[#ff3e00]">OPEN PAGE →</span>
              </div>
            </Link>

            {/* Gateway 5: Contact */}
            <Link
              href="/contact"
              className="border border-[#222222] bg-[#121212] p-8 hover:border-[#ff3e00] transition-all duration-300 group flex flex-col justify-between md:col-span-2 lg:col-span-2"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono text-[#ff3e00]">
                  <span>05 // INITIATE</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
                <h3 className="font-syne font-bold text-2xl uppercase text-white group-hover:text-[#ff3e00] transition-colors">
                  CONNECT & COLLABORATE
                </h3>
                <p className="text-xs text-white/60 leading-relaxed max-w-xl">
                  Reach out directly for AI development, prompt optimizations, hackathon collaborations, or recruitment queries. Direct inbox & phone lines open.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#222222] text-xs font-mono text-white/40 flex justify-between items-center">
                <span>TEL: +91 63834 86678 · SOMANUR, COIMBATORE</span>
                <span className="text-[#ff3e00]">SEND MESSAGE →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= MANIFESTO HIGHLIGHT ================= */}
      <section className="py-20 border-t border-[#222222] bg-[#0c0c0c]">
        <div className="viscera-container">
          <div className="max-w-4xl">
            <span className="viscera-tag mb-3 block">// PHILOSOPHY</span>
            <h2 className="font-syne font-extrabold text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white mb-6 leading-tight">
              &quot;NOTHING IS IMPOSSIBLE&quot; ISN&apos;T JUST A QUOTE —{" "}
              <span className="text-[#ff3e00]">IT&apos;S A DEBUGGING STRATEGY.</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-lg leading-relaxed mb-8">
              Every impossible problem is usually just waiting for someone patient enough to understand it. I operate at the intersection of production LLMs, RAG vector pipelines, and responsive full-stack architectures.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="viscera-btn">
                <span>Read Full Story</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/portfolio" className="viscera-btn-outline">
                <span>Inspect Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MONUMENTAL FOOTER CTA ================= */}
      <footer id="contact" className="viscera-section border-t border-[#222222] bg-black">
        <div className="viscera-container">
          <div className="text-center">
            <span className="viscera-tag">// DIRECT INITIATION</span>
          </div>

          <div className="footer-cta select-none">
            <a href="mailto:harshavarthanar60@gmail.com">
              LET&apos;S — BUILD
            </a>
          </div>

          <div className="divider" />

          <div className="grid md:grid-cols-3 gap-8 py-6 font-syne text-xs uppercase tracking-wider text-white/60">
            <div>
              <p className="font-bold text-white mb-1">HARSHAVARTHANAR KS © 2026</p>
              <p className="text-white/40 font-mono text-[11px]">ALL RIGHTS RESERVED</p>
            </div>

            <div className="flex flex-wrap gap-6 md:justify-center">
              <a
                href="https://github.com/harsha19-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff3e00] transition-colors inline-flex items-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight size={12} />
              </a>
              <a
                href="https://www.linkedin.com/in/harsha-varthanar-03aa3932b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff3e00] transition-colors inline-flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={12} />
              </a>
              <a
                href="mailto:harshavarthanar60@gmail.com"
                className="hover:text-[#ff3e00] transition-colors inline-flex items-center gap-1"
              >
                <span>Email</span>
                <ArrowUpRight size={12} />
              </a>
              <a
                href="/Harshavarthanar-KS-Resume.pdf"
                download="Harshavarthanar-KS-Resume.pdf"
                className="hover:text-[#ff3e00] transition-colors inline-flex items-center gap-1"
              >
                <span>Resume [PDF]</span>
                <FileDown size={12} />
              </a>
            </div>

            <div className="md:text-right font-mono text-[11px] text-white/50">
              <p>SOMANUR, COIMBATORE, 641668</p>
              <p className="text-[#ff3e00]">TEL: +91 63834 86678</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
