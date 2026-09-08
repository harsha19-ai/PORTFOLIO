"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Mail, Send, User, MessageSquare, ArrowLeft, MapPin, Clock, CheckCircle, Linkedin, Github, Download, Briefcase } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "harshavarthanar60@gmail.com",
    href: "mailto:harshavarthanar60@gmail.com",
    color: "from-blue-500 to-cyan-500 text-blue-400 border-blue-500/20",
    description: "For project and research inquiries.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Harshavarthanar KS",
    href: "https://www.linkedin.com/in/harsha-varthanar-03aa3932b",
    color: "from-blue-600 to-indigo-700 text-indigo-400 border-indigo-500/20",
    description: "Professional updates & connection.",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "harsha19-ai",
    href: "https://github.com/harsha19-ai",
    color: "from-purple-500 to-pink-500 text-purple-400 border-purple-500/20",
    description: "Repository source code & architectures.",
  },
  {
    icon: Briefcase,
    title: "Availability",
    value: "Immediate (Remote)",
    href: "#",
    color: "from-emerald-500 to-teal-500 text-emerald-400 border-emerald-500/20",
    description: "Open to full-time or contract work.",
  },
]

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
    budget: "",
    timeline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      const subject = encodeURIComponent(formData.subject || "Project Inquiry from Portfolio")
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}

Message:
${formData.message}
      `)

      window.location.href = `mailto:harshavarthanar60@gmail.com?subject=${subject}&body=${body}`

      setIsSubmitting(false)
      setSubmitStatus("success")

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          projectType: "",
          budget: "",
          timeline: "",
        })
        setSubmitStatus("idle")
      }, 3000)
    }, 800)
  }

  return (
    <section className="py-20 relative z-10 min-h-screen">
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
          <div className="viscera-tag mb-2">// 005 — INITIATION & INQUIRY</div>
          <h1 className="font-syne text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight mb-4">
            GET IN <span className="text-[#ff3e00]">TOUCH</span>
          </h1>
          <div className="w-16 h-[2px] bg-[#ff3e00] mb-4"></div>
          <p className="text-white/60 max-w-2xl text-sm sm:text-base leading-relaxed">
            Let&apos;s discuss how we can engineer predictive models, RAG vector pipelines, or modern full-stack web architectures into your projects.
          </p>
        </div>

        {/* Contact Grid Info Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-200 ${mounted ? "reveal-up delay-200" : "opacity-0"}`}
        >
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : "_self"}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : ""}
                className="group block"
              >
                <div className="bg-slate-900/20 rounded-2xl p-6 border border-slate-900 hover:border-slate-800/80 hover:bg-slate-900/35 transition-all duration-300 h-full">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 border`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-poppins font-bold text-base text-white mb-1">{method.title}</h3>
                  <p className="text-blue-400 font-medium text-xs sm:text-sm mb-2 group-hover:text-blue-300 transition-colors duration-200 break-all">
                    {method.value}
                  </p>
                  <p className="text-slate-500 text-xs">{method.description}</p>
                </div>
              </a>
            )
          })}
        </div>

        {/* Form and Side Block */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Form */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-300 ${mounted ? "reveal-up delay-300" : "opacity-0"}`}
          >
            <div className="bg-slate-900/25 border border-slate-900 rounded-2xl p-6 sm:p-8">
              <h2 className="font-poppins text-xl sm:text-2xl font-bold text-white mb-2">Message Dispatcher</h2>
              <p className="text-slate-400 text-xs sm:text-sm mb-8 leading-relaxed">Fill out the variables below, and my local client will open your default email app to finalize dispatch.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-slate-500" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-900 rounded-xl text-slate-100 text-sm focus:border-blue-500/50 transition-colors duration-200 outline-none"
                        placeholder="Harsha KS"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-slate-500" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-900 rounded-xl text-slate-100 text-sm focus:border-blue-500/50 transition-colors duration-200 outline-none"
                        placeholder="example@mail.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Request Category
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-900 rounded-xl text-slate-300 text-sm focus:border-blue-500/50 transition-colors duration-200 outline-none"
                    >
                      <option value="">Select category</option>
                      <option value="ai-integration">AI Integration / Pipeline</option>
                      <option value="full-stack">Full Stack Web Dev</option>
                      <option value="model-training">Model Training / Optimization</option>
                      <option value="contract-roles">Recruiter / Contract Role</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Target Schedule
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-900 rounded-xl text-slate-300 text-sm focus:border-blue-500/50 transition-colors duration-200 outline-none"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 Month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    Subject Header *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-900 rounded-xl text-slate-100 text-sm focus:border-blue-500/50 transition-colors duration-200 outline-none"
                    placeholder="Short summary of request"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    Message Details *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-slate-500" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-900 rounded-xl text-slate-100 text-sm focus:border-blue-500/50 transition-colors duration-200 outline-none resize-none"
                      placeholder="Outline target scope, active datasets, or specifications..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg ${
                    isSubmitting
                      ? "bg-slate-800 cursor-not-allowed text-slate-500"
                      : submitStatus === "success"
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-blue-500/10 hover:scale-[1.02]"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Dispatching Client...</span>
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle className="w-4.5 h-4.5" />
                      <span>Mail Opened!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4.5 h-4.5" />
                      <span>Compile & Send</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div
            className={`lg:col-span-5 space-y-6 transition-all duration-700 delay-400 ${mounted ? "reveal-up delay-400" : "opacity-0"}`}
          >
            {/* Info Box */}
            <div className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 space-y-4">
              <h3 className="font-poppins text-lg font-bold text-white mb-2">Location & Details</h3>
              <div className="space-y-3.5">
                <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-300">
                  <MapPin className="w-4.5 h-4.5 text-blue-400 shrink-0" />
                  <span>Available Remotely (Global Time Zones)</span>
                </div>
                <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-300">
                  <Clock className="w-4.5 h-4.5 text-purple-400 shrink-0" />
                  <span>Response SLA: Within 12-24 hours</span>
                </div>
              </div>
            </div>

            {/* Resume box */}
            <div className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 text-center space-y-4">
              <h3 className="font-poppins text-base font-bold text-white">Full Credentials Resume</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Download my latest updated resume containing full academic marks and project index metrics.
              </p>
              <a
                href="/Harshavarthanar-KS-Resume.pdf"
                download="Harshavarthanar-KS-Resume.pdf"
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white rounded-xl font-medium text-xs sm:text-sm transition-colors duration-200 hover:scale-[1.02]"
              >
                <Download size={16} />
                <span>Download Resume PDF</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
