"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, X, Sparkles, Cpu, HeartPulse, Globe, ShieldAlert, Music, Layers, ArrowRight, ArrowLeft } from "lucide-react"

const projects = [
  {
    id: "01",
    title: "ARADHYA",
    subtitle: "AI-Powered Emotional & Behavioral Monitoring Assistant",
    description: "An AI-powered emotional and behavioral monitoring assistant. By parsing conversational inputs and logs, it evaluates mood trends, tracks behavioral patterns, and provides real-time positive feedback and stress-mitigation responses.",
    image: "/emotional-digital-experience.jpg",
    icon: Sparkles,
    tech: ["Python", "Flask", "React", "Hugging Face", "Transformers", "NLP", "NLTK"],
    architecture: "Flask API hosting fine-tuned RoBERTa sentiment classification models. Features stateful prompt-optimized LLM generation logic with user context mapping databases for continuous behavioral tracking.",
    features: [
      "Real-time conversational sentiment analysis & feedback",
      "Interactive emotional trend visualization charts",
      "Behavioral logs history tracking & mood predictions",
      "Automated prompt-driven cognitive behavioral coping guides",
    ],
    challenges: "Handling ambiguous and complex emotional expressions (e.g. sarcasms, mixed sentiments). Solved by integrating bigram tokenization and deploying multi-label classification layers on the Hugging Face transformer model.",
    results: [
      { metric: "Sentiment Accuracy", value: "94.1%" },
      { metric: "Inference Time", value: "0.95s" },
      { metric: "Daily Check-in Rate", value: "82%" },
    ],
    github: "https://github.com/harsha19-ai",
    demo: "https://github.com/harsha19-ai",
  },
  {
    id: "02",
    title: "AI Chatbot for DMS",
    subtitle: "RAG-Based Intelligent Chatbot for Academic Queries",
    description: "An intelligent retrieval-augmented system designed to parse department files and answer student syllabus, calendar, and regulatory queries in real-time. It handles institutional policy lookups to bypass manual guidance queues.",
    image: "/ai-neural-networks.jpg",
    icon: Cpu,
    tech: ["Flask", "MongoDB", "Sentence Transformers", "FAISS", "LLM", "RAG"],
    architecture: "PDF text parser chunking policy scripts. Sentence-Transformers maps chunks to embeddings stored in a FAISS index database. Queries extract top-k vectors, appending them into context logs for final LLM prompt completions.",
    features: [
      "Retrieval-Augmented Generation (RAG) policy lookup system",
      "Sentence-Transformers semantic embedding index pipelines",
      "FAISS similarity index vector database searching",
      "MongoDB storage mapping student chat logs and query histories",
    ],
    challenges: "Preventing LLM hallucinations when answers are missing from policy drafts. Resolved by setting strict context thresholds and writing fallback system prompts enforcing 'I cannot find this in policy records' outputs.",
    results: [
      { metric: "Query Match Score", value: "91%" },
      { metric: "Retrieval Score", value: "0.94" },
      { metric: "Response Time", value: "1.4s" },
    ],
    github: "https://github.com/harsha19-ai",
    demo: "https://github.com/harsha19-ai",
  },
  {
    id: "03",
    title: "HOPE",
    subtitle: "AI-Powered Crowdfunding Platform",
    description: "An AI-powered crowdfunding platform connecting verified beneficiaries with donors. The system automates verification, categorizes fundraising requests using semantic AI algorithms, and streamlines donation matches to secure resource allocations.",
    image: "/web-development-interface.jpg",
    icon: HeartPulse,
    tech: ["Python", "Flask", "React", "MongoDB", "Vector Search", "AI Verification", "RAG"],
    architecture: "Flask microservice running semantic classification to filter incoming donation campaigns, utilizing similarity models to cross-reference verified documents and connect donors with verified local beneficiaries.",
    features: [
      "AI-driven automated beneficiary campaign validation",
      "Intelligent matching routing donors to targeted campaigns",
      "Verification algorithms cross-referencing campaign applications",
      "Interactive donor dashboard with real-time funding statistics",
    ],
    challenges: "Handling variable verification documentation formats. Solved by implementing pre-processing classification filters and confidence thresholds for incoming verification tags.",
    results: [
      { metric: "Match Efficiency", value: "92.5%" },
      { metric: "Verification Speed", value: "<1.2s" },
      { metric: "Verification Rate", value: "95%" },
    ],
    github: "https://github.com/harsha19-ai",
    demo: "https://github.com/harsha19-ai",
  },
  {
    id: "04",
    title: "Portfolio Website",
    subtitle: "AI-Prompt Optimized Creative Developer Showcase",
    description: "A personal developer portfolio designed and built using optimized AI prompting techniques. Features a futuristic HUD command center, 3D rotating background constellation mesh, and rotating conic gradient border sweeps.",
    image: "/writing-blogging-content.jpg",
    icon: Globe,
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Prompt Engineering"],
    architecture: "Next.js AppRouter structure utilizing Turbopack compiling. Dynamic canvas renders coordinate telemetry data in real-time based on mouse coordinate values, optimized for fluid GPU rendering.",
    features: [
      "Staggered entrance keyframe animations in pure CSS",
      "3D constellation physics particle canvas background",
      "Interactive HUD terminal dashboard simulating diagnostic logs",
      "Rotating conic-gradient border sweeps and target lock brackets",
    ],
    challenges: "Achieving high-frequency cursor tracking telemetry variables without causing React state re-render lags. Mitigated by updating CSS custom properties directly on DOM node elements.",
    results: [
      { metric: "Lighthouse Performance", value: "98/100" },
      { metric: "Inference Loop", value: "60 FPS" },
      { metric: "Wipe Transition Speed", value: "0.55s" },
    ],
    github: "https://github.com/harsha19-ai",
    demo: "https://github.com/harsha19-ai",
  },
  {
    id: "05",
    title: "KeySense AI",
    subtitle: "Real-time AI Music Signal Processing Assistant",
    description: "An intelligent digital music assistant that performs real-time audio analysis. By capturing live microphone inputs or audio streams, it extracts frequency features and instantly predicts musical keys, active chords, and progression pathways.",
    image: "/professional-photography-editing.jpg",
    icon: Music,
    tech: ["Python", "FastAPI", "AI", "Librosa", "Signal Processing", "PyTorch"],
    architecture: "FastAPI WebSocket pipeline receiving continuous PCM audio chunks. Computes Constant-Q Transform (CQT) and chromagrams using Librosa, running predictions through a PyTorch CNN model in real-time.",
    features: [
      "Real-time pitch class extraction & chromagram drawing",
      "Instantaneous chord prediction and key signature changes",
      "Low-latency WebSocket streaming response architecture",
      "Interactive canvas visualizer rendering frequency waveforms",
    ],
    challenges: "Reducing latency of the FFT analysis window to feel instantaneous while maintaining classification accuracy. Solved by implementing dynamic buffer windowing and downsampling incoming audio channels.",
    results: [
      { metric: "Inference Latency", value: "120ms" },
      { metric: "Chord Accuracy", value: "89.5%" },
      { metric: "FFT Window Size", value: "4096" },
    ],
    github: "https://github.com/harsha19-ai",
    demo: "https://github.com/harsha19-ai",
  },
  {
    id: "06",
    title: "ShadowStack AI",
    subtitle: "CLIP Semantic Visual Search Engine",
    description: "A premium visual search application designed to fetch images based on semantic text queries. Instead of relying on manual file tagging, it computes mathematical alignments between text searches and image vectors.",
    image: "/ai-image-search-platform.jpg",
    icon: Layers,
    tech: ["Next.js", "React", "CLIP Models", "Vector Similarity", "Cloudinary"],
    architecture: "Images mapped to multi-dimensional CLIP visual embeddings. User query prompts get vectorized via CLIP text models. Vector cosine similarity search isolates matching keys, querying image files from Cloudinary storage.",
    features: [
      "Semantic image lookup resolving complex context queries",
      "Dual text-to-image and image-to-image similarity matching",
      "Cloudinary storage integration with optimized responsive delivery hooks",
      "High-speed cosine vector ranking algorithms",
    ],
    challenges: "Achieving fast visual searches when comparing large clusters of image vectors. Mitigated by converting float embeddings to half-precision vectors and pre-indexing coordinates.",
    results: [
      { metric: "Semantic Precision", value: "92%" },
      { metric: "Cosine Search Delay", value: "<85ms" },
      { metric: "Vector Dimensions", value: "512" },
    ],
    github: "https://github.com/harsha19-ai",
    demo: "https://github.com/harsha19-ai",
  },
]

type ProjectType = typeof projects[0]

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    
    // Shift elements in translate bounds
    card.style.setProperty("--mouse-x", `${x * 16}px`)
    card.style.setProperty("--mouse-y", `${y * 16}px`)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    card.style.setProperty("--mouse-x", `0px`)
    card.style.setProperty("--mouse-y", `0px`)
  }

  return (
    <section id="projects" className="py-24 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Back Navigation Link (displays only in standalone page scope) */}
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
        <div className={`mb-24 transition-all duration-1000 ${mounted ? "reveal-up" : "opacity-0"}`}>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-2">
            03 // SELECTED WORK
          </span>
          <h2 className="font-poppins text-4xl sm:text-6xl font-black text-[#F5F7FF] tracking-tight uppercase">
            PROJECTS
          </h2>
          <div className="w-16 h-[2px] bg-blue-500 mt-4" />
        </div>

        {/* Alternating Asymmetric Project Compositions */}
        <div className="space-y-36">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0
            const Icon = project.icon

            return (
              <div
                key={project.id}
                className={`grid lg:grid-cols-12 gap-12 items-center relative ${
                  mounted ? "reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                
                {/* Visual Block Column */}
                <div 
                  className={`lg:col-span-6 relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => setSelectedProject(project)}
                >
                  <div 
                    className="relative aspect-[16/10] overflow-hidden border border-slate-800 bg-slate-950 cursor-none group transition-all duration-500 hover:border-slate-600"
                    data-cursor="view project"
                  >
                    {/* Shadow outline background */}
                    <div className="absolute -inset-4 border border-slate-900 pointer-events-none z-0 transform translate-x-3 translate-y-3" />
                    
                    <div 
                      className="w-full h-full relative z-10 transition-transform duration-500 ease-out"
                      style={{
                        transform: "translate3d(var(--mouse-x, 0px), var(--mouse-y, 0px), 0) scale(1.05)"
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-w-1024px) 100vw, 550px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05061A]/60 via-transparent to-transparent" />
                    </div>

                    <div className="absolute bottom-4 left-4 z-20 font-mono text-[9px] text-[#F5F7FF] bg-[#05061A]/85 border border-slate-850 px-2 py-0.5 uppercase tracking-widest">
                      {project.tech[0]} // {project.tech[1]}
                    </div>
                  </div>
                </div>

                {/* Content Block Column */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-2 lg:pl-6" : "lg:order-1 lg:pr-6"}`}>
                  <div className="flex items-center space-x-3 font-mono">
                    <span className="text-xs text-blue-500 font-bold">{project.id} //</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest">CASE STUDY</span>
                  </div>

                  <div className="space-y-2">
                    <h3 
                      className="font-poppins text-3xl sm:text-4xl font-extrabold text-[#F5F7FF] tracking-tight hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">{project.subtitle}</p>
                  </div>

                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 rounded-none text-[10px] font-mono bg-slate-900/60 border border-slate-850 text-slate-400 uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center space-x-6">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center text-xs font-mono font-bold text-white hover:text-blue-400 group/btn transition-colors duration-200"
                    >
                      SPECIFICATIONS
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-white transition-colors duration-200"
                      aria-label="GitHub Repo"
                    >
                      <Github className="w-4.5 h-4.5" />
                    </a>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>

      {/* Case Study Details Modal (Immersive Full Screen Overlay) */}
      {selectedProject && (
        <div className="fixed inset-0 z-[1000] flex justify-end bg-slate-950/90 backdrop-blur-sm pointer-events-auto">
          {/* Backdrop Click Dismissal */}
          <div className="absolute inset-0 cursor-none" onClick={() => setSelectedProject(null)} data-cursor="close" />

          {/* Modal Container */}
          <div className="relative w-full max-w-2xl bg-[#05061A] border-l border-slate-900 h-screen overflow-y-auto z-10 flex flex-col p-8 sm:p-12 font-mono">
            
            {/* Header / Dismissal */}
            <div className="flex items-center justify-between border-b border-slate-900 pb-6 mb-8">
              <div className="flex items-center space-x-3 text-xs text-blue-500 font-bold">
                <span>{selectedProject.id} //</span>
                <span className="text-slate-300 font-poppins font-black uppercase text-sm">{selectedProject.title}</span>
              </div>
              <button 
                onClick={() => setSelectedProject(null)} 
                className="p-2 border border-slate-900 text-slate-400 hover:text-white hover:border-slate-700 transition-all rounded-none"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-8 flex-grow">
              
              {/* Architecture Outline */}
              <div className="space-y-3">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">
                  System Architecture
                </span>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  {selectedProject.architecture}
                </p>
              </div>

              {/* Core Features */}
              <div className="space-y-3">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">
                  Key Specifications
                </span>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-xs text-slate-400 leading-normal font-light">
                      <span className="text-blue-500 mr-2 font-bold">&gt;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges Faced */}
              <div className="space-y-3">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">
                  Engineering Challenge
                </span>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  {selectedProject.challenges}
                </p>
              </div>

              {/* Performance Metrics */}
              {selectedProject.results && (
                <div className="space-y-4">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">
                    Performance Telemetry
                  </span>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedProject.results.map((res, i) => (
                      <div key={i} className="bg-slate-950 border border-slate-900/60 p-3 text-center">
                        <div className="text-base sm:text-lg font-bold text-white mb-0.5">{res.value}</div>
                        <div className="text-[8px] text-slate-500 uppercase tracking-wide leading-tight">{res.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Footer / Links */}
            <div className="border-t border-slate-900 pt-8 mt-12 flex justify-between gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 text-center border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
              >
                GITHUB REPOSITORY
              </a>
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 text-center bg-blue-600 hover:bg-blue-500 text-xs font-mono text-white transition-colors"
              >
                LIVE TELEMETRY
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}
