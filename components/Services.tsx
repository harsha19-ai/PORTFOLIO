"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ImageIcon, PenTool, Globe, FileText, Palette, Presentation, ArrowLeft } from "lucide-react"

const services = [
  {
    title: "AI Visual Processing",
    description: "Creating pipelines and integrations for image categorization, object detection, and generative editing tools.",
    icon: ImageIcon,
    tools: ["YOLOv8", "ResNet", "Cloudinary", "AI Generation Models"],
  },
  {
    title: "Prompt Design & Optimization",
    description: "Structuring prompt contexts, system directives, and temperature constraints to match LLM behavior precisely.",
    icon: PenTool,
    tools: ["GPT APIs", "Claude Contexts", "System Prompts", "Token Optimization"],
  },
  {
    title: "AI Web Integration",
    description: "Developing highly responsive Next.js dashboards and FastAPI backends that serve streaming AI inferences.",
    icon: Globe,
    tools: ["Next.js", "FastAPI", "WebSockets", "Serverless API Routing"],
  },
  {
    title: "Technical Content Strategy",
    description: "Drafting clear software architectural documentation, markdown guides, and tutorials detailing engineering steps.",
    icon: FileText,
    tools: ["Markdown Documentation", "GitHub Readmes", "Technical Blogging"],
  },
  {
    title: "Cognitive Brand Curation",
    description: "Designing modern, memorable vector brand assets and styling configurations matching developer products.",
    icon: Palette,
    tools: ["Vector Graphics", "UI Design Systems", "Tailwind Themes"],
  },
  {
    title: "System Architecture Presentation",
    description: "Translating complex database index maps and RAG flows into visual node diagrams for project reviews.",
    icon: Presentation,
    tools: ["Mermaid Diagrams", "UI/UX Flows", "Data Visualization"],
  },
]

export default function Services() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="services" className="py-20 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Navigation */}
        <div
          className={`mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
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
          className={`text-center mb-16 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-white mb-4">Services Offered</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Specialized engineering solutions to integrate intelligence interfaces into production systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`group p-6 rounded-2xl border border-slate-900 bg-slate-900/20 hover:border-slate-800/80 hover:bg-slate-900/35 transition-all duration-300 transform hover:-translate-y-1 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 bg-slate-950 border border-slate-800 text-blue-400 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-poppins font-bold text-base text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-950 border border-slate-900 text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
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
