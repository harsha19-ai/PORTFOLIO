"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ExternalLink, Github, Zap, ArrowLeft, Star, Code, X, ShieldAlert, Music, Cpu, Layers, BarChart4, ArrowRight, HeartPulse, Sparkles, Globe } from "lucide-react"

const projects = [
  {
    title: "ARADHYA",
    subtitle: "AI-Powered Emotional & Behavioral Monitoring Assistant",
    description: "An AI-powered emotional and behavioral monitoring assistant. By parsing conversational inputs and logs, it evaluates mood trends, tracks behavioral patterns, and provides real-time positive feedback and stress-mitigation responses.",
    imageClass: "from-rose-500 via-pink-600 to-red-500",
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
    highlighted: true,
  },
  {
    title: "AI Chatbot for Department Management System",
    subtitle: "RAG-Based Intelligent Chatbot for Academic Queries",
    description: "An intelligent retrieval-augmented system designed to parse department files and answer student syllabus, calendar, and regulatory queries in real-time. It handles institutional policy lookups to bypass manual guidance queues.",
    imageClass: "from-emerald-600 via-teal-700 to-cyan-500",
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
    highlighted: true,
  },
  {
    title: "HOPE",
    subtitle: "AI-Powered Crowdfunding Platform connecting Beneficiaries & Donors",
    description: "An AI-powered crowdfunding platform connecting verified beneficiaries with donors. The system automates verification, categorizes fundraising requests using semantic AI algorithms, and streamlines donation matches to secure resource allocations.",
    imageClass: "from-blue-600 via-teal-600 to-cyan-500",
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
    highlighted: true,
  },
  {
    title: "Portfolio Website",
    subtitle: "AI-Prompt Optimized Creative Developer Showcase",
    description: "A personal developer portfolio designed and built using optimized AI prompting techniques. Features a futuristic HUD command center, 3D rotating background constellation mesh, and rotating conic gradient border sweeps.",
    imageClass: "from-purple-600 via-indigo-600 to-blue-500",
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
    github: "https://github.com/harsha19-ai/PORTFOLIO",
    demo: "https://portfolioofharshavarthanar.vercel.app/",
    highlighted: true,
  },
  {
    title: "AI Civic Issue Reporter",
    subtitle: "Automated Civic Reporting & Categorization",
    description: "An AI-powered civic engagement platform that enables citizens to report local infrastructure issues. The system automatically performs object classification, routes reports to the relevant municipal department based on semantic context, and provides automated status tracking updates.",
    imageClass: "from-blue-600 via-indigo-700 to-cyan-500",
    icon: ShieldAlert,
    tech: ["React", "Next.js", "Python", "Flask", "Computer Vision", "AI", "YOLOv8"],
    architecture: "Next.js frontend + Flask microservice running YOLOv8 object classifier. Automated routing system parsing location and issue types into targeted notification webhook payloads.",
    features: [
      "Image-based automated object detection & categorization",
      "Dynamic routing based on semantic issue classifications",
      "Interactive citizen dashboard with real-time status updates",
      "Geo-location tagging and interactive map layout coordinates",
    ],
    challenges: "Handling variable lighting and image resolutions from citizen cameras. Resolved by implementing automated pre-processing layers (rescaling, contrast adjustments) and confidence threshold checks on the YOLO classifier.",
    results: [
      { metric: "Detection Confidence", value: "93.4%" },
      { metric: "Routing Latency", value: "0.8s" },
      { metric: "User Retention", value: "88%" },
    ],
    github: "https://github.com/harsha19-ai",
    demo: "https://github.com/harsha19-ai",
  },
  {
    title: "KeySense AI",
    subtitle: "Real-time AI Music Signal Processing Assistant",
    description: "An intelligent digital music assistant that performs real-time audio analysis. By capturing live microphone inputs or audio streams, it extracts frequency features and instantly predicts musical keys, active chords, and progression pathways.",
    imageClass: "from-purple-600 via-purple-800 to-pink-500",
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
    title: "ShadowStack AI",
    subtitle: "CLIP Semantic Visual Search Engine",
    description: "A premium visual search application designed to fetch images based on semantic text queries. Instead of relying on manual file tagging, it computes mathematical alignments between text searches and image vectors.",
    imageClass: "from-rose-600 via-orange-600 to-yellow-500",
    icon: Layers,
    tech: ["Next.js", "React", "CLIP Models", "Vector Similarity", "Cloudinary"],
    architecture: "Images mapped to multi-dimensional CLIP visual embeddings. User query prompts get vectorized via CLIP text models. Vector cosine similarity search isolates matching keys, querying image files from Cloudinary storage.",
    features: [
      "Semantic image lookup resolving complex context queries",
      "Dual text-to-image and image-to-image similarity matching",
      "High-speed image indexing with cached vector stores",
      "Fully responsive gallery grid layout built in Next.js",
    ],
    challenges: "Ensuring visual embeddings load and execute fast within serverless API runtimes. Solved by decoupling embedding computation from standard web routing and deploying similarity lookups to a dedicated vector index.",
    results: [
      { metric: "Search Speed", value: "0.24s" },
      { metric: "Recall Accuracy", value: "94.2%" },
      { metric: "Cached Hits", value: "99.8%" },
    ],
    github: "https://github.com/harsha19-ai",
    demo: "https://shadowstack-search-image.vercel.app/",
  },
  {
    title: "Product Review Analyzer",
    subtitle: "NLP Sentiment Classification Dashboard",
    description: "A semantic opinion mining platform designed for e-commerce. It ingests thousands of customer product reviews, performs syntactic parsing, and classifies customer comments into descriptive sentiment trends.",
    imageClass: "from-cyan-600 via-blue-700 to-indigo-500",
    icon: BarChart4,
    tech: ["React", "Python", "Flask", "NLTK", "NLP", "Sentiment Analysis"],
    architecture: "Flask endpoint ingesting textual comments. Runs NLTK preprocessing (lemmatization, tokenization, stop-word removal) and processes reviews using trained sentiment classification models to yield score trends.",
    features: [
      "Automated lemmatization and textual stop-word cleaning",
      "Sentiment classification scoring (Positive, Neutral, Negative)",
      "Interactive dashboard charts plotting rating distributions",
      "Batch uploading files for large-scale feedback parsing",
    ],
    challenges: "Handling sarcastic comments and complex negations (e.g. 'not bad at all'). Mitigated by training bigram features and mapping dependency parser paths to flag negation structures.",
    results: [
      { metric: "F1 Classifier Score", value: "87.6%" },
      { metric: "Parse Rate", value: "150/sec" },
      { metric: "UI Speed Index", value: "0.9s" },
    ],
    github: "https://github.com/harsha19-ai",
    demo: "https://github.com/harsha19-ai",
  },
]

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)

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
      
      {/* Project Detail Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-all duration-300">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl relative flex flex-col animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className={`relative p-6 sm:p-8 bg-gradient-to-br ${selectedProject.imageClass} flex flex-col justify-end h-48 sm:h-56`}>
              <div className="absolute inset-0 bg-slate-950/40" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-slate-950/60 hover:bg-slate-900 border border-slate-800 rounded-full text-slate-300 hover:text-white transition-all duration-200"
                aria-label="Close details"
              >
                <X size={20} />
              </button>
              
              <div className="relative z-10 space-y-1">
                <div className="flex items-center space-x-2">
                  <h2 className="font-poppins text-2xl sm:text-3xl font-extrabold text-white">{selectedProject.title}</h2>
                  {selectedProject.highlighted && (
                    <span className="flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-yellow-500/20 border border-yellow-500/40 text-[10px] font-bold text-yellow-300 uppercase tracking-wider">
                      <Star size={10} className="fill-yellow-300" />
                      <span>Highlighted</span>
                    </span>
                  )}
                </div>
                <p className="text-slate-200 text-xs sm:text-sm font-medium">{selectedProject.subtitle}</p>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6 text-sm text-slate-300">
              
              {/* Overview */}
              <div>
                <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-2">Project Overview</h3>
                <p className="leading-relaxed text-slate-400">{selectedProject.description}</p>
              </div>

              {/* Architecture Schema */}
              <div>
                <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-2">Technical Architecture</h3>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 font-mono text-xs text-blue-400 leading-normal">
                  {selectedProject.architecture}
                </div>
              </div>

              {/* Features & Challenges Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-2">Key Implementations</h3>
                  <ul className="space-y-1.5">
                    {selectedProject.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm text-slate-400">
                        <span className="mr-2 text-cyan-400 font-bold">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-2">Challenges faced</h3>
                  <p className="text-slate-400 text-xs leading-relaxed italic bg-slate-950/40 p-4 rounded-xl border border-slate-900">
                    "{selectedProject.challenges}"
                  </p>
                </div>
              </div>

              {/* Results & Metrics */}
              <div>
                <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-3">Model Metrics & Results</h3>
                <div className="grid grid-cols-3 gap-4">
                  {selectedProject.results.map((result: any, i: number) => (
                    <div key={i} className="bg-slate-950 p-3 rounded-xl border border-slate-900 text-center">
                      <div className="text-base sm:text-lg font-mono font-bold text-cyan-400">{result.value}</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4 border-t border-slate-900">
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-medium text-xs sm:text-sm shadow-md"
                >
                  <ExternalLink size={16} />
                  <span>Explore Demo</span>
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-2.5 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white rounded-xl font-medium text-xs sm:text-sm"
                >
                  <Github size={16} />
                  <span>GitHub Repository</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
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

        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 delay-100 ${mounted ? "opacity-100" : "opacity-0"}`}
        >
          <div className="viscera-tag mb-2">// 002 — ARCHIVE</div>
          <h1 className="font-syne text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight mb-4">
            ENGINEERED{" "}
            <span className="text-[#ff3e00]">
              SYSTEMS
            </span>
          </h1>
          <div className="w-16 h-[2px] bg-[#ff3e00] mb-4"></div>
          <p className="text-white/60 max-w-2xl text-sm sm:text-base leading-relaxed">
            A comprehensive catalog of production AI applications, fine-tuned transformer weights, FAISS retrieval pipelines, and NLP systems.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon
            return (
              <div
                key={project.title}
                onClick={() => setSelectedProject(project)}
                onMouseMove={handleMouseMove}
                className={`group holo-border-card hud-brackets cursor-pointer flex flex-col h-full ${
                  mounted ? "reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${200 + idx * 100}ms` }}
              >
                <div className="holo-border-card-inner flex flex-col h-full w-full">
                  {/* Visual Top Mesh Area */}
                  <div className={`h-40 bg-gradient-to-br ${project.imageClass} relative flex items-center justify-center overflow-hidden rounded-t-[1.25rem]`}>
                    <div className="absolute inset-0 bg-slate-950/20" />
                    
                    {/* Subtle Grid backdrop overlay in the mesh */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

                    {/* Highlight tag */}
                    {project.highlighted && (
                      <div className="absolute top-3 left-3 z-10 flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-slate-950/80 border border-yellow-500/40 text-[9px] font-bold text-yellow-300 uppercase tracking-wider">
                        <Star size={10} className="fill-yellow-300 text-yellow-300" />
                        <span>Highlighted Project</span>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="relative z-10 p-3 rounded-full bg-slate-950/30 backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 flex-grow flex flex-col justify-between relative z-10">
                    <div className="space-y-3">
                      <h3 className="font-poppins text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Architecture Details summary */}
                      <div className="space-y-1 pt-1.5">
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                          System Architecture
                        </div>
                        <p className="text-slate-300 text-xs font-mono line-clamp-2 leading-relaxed bg-slate-950/50 p-2 rounded border border-slate-900/85">
                          {project.architecture}
                        </p>
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 border border-slate-900 text-slate-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions buttons */}
                    <div className="mt-6 pt-4 border-t border-slate-900 flex justify-between items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="flex items-center space-x-1">
                        <span>View Specifications</span>
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
