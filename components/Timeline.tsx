"use client"

import { useState } from "react"
import { Calendar, Compass, GraduationCap, Laptop, Sparkles, Trophy } from "lucide-react"

const timelineData = [
  {
    title: "Prompt Engineering Intern & Hackathons",
    subtitle: "Skylena Pvt. Ltd. & BIT Hackathon",
    category: "Experience",
    date: "2025",
    icon: Laptop,
    color: "border-cyan-500 text-cyan-400 bg-cyan-500/10",
    details: [
      "Working as a Prompt Engineering Intern at Skylena Pvt. Ltd., designing dynamic system instructions and API pipelines.",
      "Participated and won a cash prize at the BIT HACKATHON 2025 for building intelligent prototypes.",
      "Completed a specialized one-credit Prompt Engineering course organized by Visaithalam Solutions."
    ],
  },
  {
    title: "Computer Science Engineering (B.E.)",
    subtitle: "Dr NGP Institute Of Technology, Coimbatore",
    category: "Academic",
    date: "2024 - Expected pass out 2028",
    icon: GraduationCap,
    color: "border-blue-500 text-blue-400 bg-blue-500/10",
    details: [
      "Pursuing a B.E. in Computer Science Engineering, maintaining a high-tier academic CGPA of 8.34 (till 4th sem).",
      "Actively leading as a class leader, organizing academic schedules and student coordination channels.",
      "Hands-on research implementing FAISS vector databases, sentence embedding indices, and RAG pipelines."
    ],
  },
  {
    title: "AI & Vector Embeddings Certifications",
    subtitle: "Coursera, Simplilearn & Visaithalam Solutions",
    category: "Professional",
    date: "2024 - 2025",
    icon: Sparkles,
    color: "border-purple-500 text-purple-400 bg-purple-500/10",
    details: [
      "Completed certified courses on Retrieval-Augmented Generation, vector embeddings, and LLM weights optimization.",
      "Practiced multi-dimensional text matching techniques using Sentence Transformers, FAISS, and custom prompt loops."
    ],
  },
  {
    title: "Higher Secondary Education (HSC)",
    subtitle: "GVT Higher Secondary School Arasur, Coimbatore",
    category: "Academic",
    date: "2022 - 2024",
    icon: GraduationCap,
    color: "border-emerald-500 text-emerald-400 bg-emerald-500/10",
    details: [
      "Graduated with a score of 85.83% in Higher Secondary studies.",
      "Active team player, participating as a secondary raider in the school's Kabaddi team."
    ],
  },
  {
    title: "Secondary Education (SSLC)",
    subtitle: "GVT High School Karugampalayam, Tirupur",
    category: "Academic",
    date: "2012 - 2022",
    icon: GraduationCap,
    color: "border-amber-500 text-amber-400 bg-amber-500/10",
    details: [
      "Graduated with a score of 75.5% in secondary education.",
      "Explored intermediate level rhythm padist musical activities and local competitions."
    ],
  },
]

export default function Timeline() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredData = timelineData.filter(
    (item) => activeTab === "all" || item.category.toLowerCase() === activeTab.toLowerCase()
  )

  return (
    <section className="py-20 relative border-t border-slate-900 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-3">
            <Calendar className="w-4.5 h-4.5" />
            <span>Roadmap</span>
          </div>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Timeline & Journey
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl mx-auto text-sm sm:text-base">
            Tracing my professional evolution, key project launches, academic milestones, and certifications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-12">
          {["all", "experience", "academic", "professional"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-cyan-500/25 border border-cyan-500/50 text-cyan-300 shadow-md shadow-cyan-500/5"
                  : "bg-slate-950/40 border border-slate-900 text-slate-500 hover:text-slate-300 hover:border-slate-800"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Timeline Line & Cards */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical central bar */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-[1px] bg-slate-900" />

          <div className="space-y-12">
            {filteredData.map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline icon dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className={`p-2 rounded-full border bg-slate-950 shadow-lg ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Container */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] ml-12 sm:ml-0 ${isEven ? "sm:text-right sm:pr-8" : "sm:pl-8"}`}>
                    <div className="holo-border-card hud-brackets text-left">
                      <div className="holo-border-card-inner p-5 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-900/50 pb-2">
                          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10 uppercase tracking-widest">
                            {item.category}
                          </span>
                          <span className="text-xs font-mono text-slate-500">{item.date}</span>
                        </div>
                        
                        <div>
                          <h3 className="font-poppins font-bold text-white text-base leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-slate-400 text-xs mt-0.5">{item.subtitle}</p>
                        </div>

                        <ul className="space-y-1.5 pt-2">
                          {item.details.map((detail, i) => (
                            <li key={i} className="flex items-start text-xs text-slate-400 leading-relaxed">
                              <span className="mr-2 text-cyan-400 font-bold">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
