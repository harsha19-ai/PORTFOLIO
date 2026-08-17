"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Mail, Send, User, MessageSquare, ArrowLeft, MapPin, Linkedin, Github, Download, ArrowRight } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "EMAIL",
    value: "harshavarthanar60@gmail.com",
    href: "mailto:harshavarthanar60@gmail.com",
    desc: "For project and research inquiries.",
  },
  {
    icon: Linkedin,
    title: "LINKEDIN",
    value: "Harshavarthanar KS",
    href: "https://www.linkedin.com/in/harsha-varthanar-03aa3932b",
    desc: "Professional updates & connection.",
  },
  {
    icon: Github,
    title: "GITHUB",
    value: "harsha19-ai",
    href: "https://github.com/harsha19-ai",
    desc: "Repository source code & architectures.",
  },
]

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate opening email client
    setTimeout(() => {
      const subject = encodeURIComponent(formData.subject || "Project Inquiry")
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
      `)

      window.location.href = `mailto:harshavarthanar60@gmail.com?subject=${subject}&body=${body}`
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <section id="contact" className="py-24 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Back Navigation Link */}
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
        <div className={`mb-20 transition-all duration-1000 ${mounted ? "reveal-up" : "opacity-0"}`}>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-2">
            08 // GET IN TOUCH
          </span>
          <h2 className="font-poppins text-4xl sm:text-6xl font-black text-[#F5F7FF] tracking-tight uppercase">
            LET&apos;S BUILD SOMETHING
          </h2>
          <div className="w-16 h-[2px] bg-blue-500 mt-4" />
        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-16 items-start border-t border-slate-900 pt-16">
          
          {/* Left Column: Direct Links (Editorial block layout) */}
          <div className={`lg:col-span-5 space-y-12 ${mounted ? "reveal-up" : "opacity-0"}`}>
            
            <div className="space-y-8">
              {contactMethods.map((method) => {
                const Icon = method.icon
                return (
                  <div key={method.title} className="space-y-2 border-b border-slate-900/60 pb-6">
                    <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-500 tracking-widest uppercase">
                      <Icon className="w-3.5 h-3.5 text-blue-500" />
                      <span>{method.title}</span>
                    </div>
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : "_self"}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : ""}
                      className="block font-poppins text-lg sm:text-xl font-bold text-[#F5F7FF] hover:text-blue-400 transition-colors duration-200"
                    >
                      {method.value}
                    </a>
                    <p className="text-slate-500 text-xs font-light">{method.desc}</p>
                  </div>
                )
              })}
            </div>

            {/* Resume Download panel */}
            <div className="border border-slate-900 p-6 bg-[#070924]/10 space-y-4">
              <span className="text-[10px] font-mono text-slate-500 tracking-widest block uppercase font-bold">
                DOCUMENTATION
              </span>
              <p className="text-slate-400 text-xs font-light leading-relaxed">
                Download my latest updated resume containing full academic marks and project metrics.
              </p>
              <a
                href="/Harshavarthanar-KS-Resume.pdf"
                download="Harshavarthanar-KS-Resume.pdf"
                className="w-full flex items-center justify-center space-x-2 py-3 bg-[#F5F7FF] text-[#05061A] hover:bg-[#F5F7FF]/90 font-medium text-xs tracking-wider transition-colors duration-200"
                data-cursor="download"
              >
                <Download size={14} />
                <span>DOWNLOAD RESUME PDF</span>
              </a>
            </div>

          </div>

          {/* Right Column: Dispatcher Form (Minimal, Editorial, Clean Inputs) */}
          <div className={`lg:col-span-7 ${mounted ? "reveal-up" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-slate-950/60 border border-slate-900 text-[#F5F7FF] text-sm focus:border-slate-700 transition-colors outline-none rounded-none"
                  placeholder="Harshavarthanar KS"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-slate-950/60 border border-slate-900 text-[#F5F7FF] text-sm focus:border-slate-700 transition-colors outline-none rounded-none"
                    placeholder="example@mail.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">
                    SUBJECT HEADER *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-slate-950/60 border border-slate-900 text-[#F5F7FF] text-sm focus:border-slate-700 transition-colors outline-none rounded-none"
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">
                  MESSAGE DETAILS *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3.5 bg-slate-950/60 border border-slate-900 text-[#F5F7FF] text-sm focus:border-slate-700 transition-colors outline-none resize-none rounded-none"
                  placeholder="Outline project scope, active datasets, or specifications..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#F5F7FF] text-[#05061A] hover:bg-[#F5F7FF]/90 font-medium transition-colors duration-200 flex items-center justify-center space-x-2 tracking-widest text-xs uppercase"
              >
                {isSubmitting ? (
                  <span>DISPATCHING CLIENT...</span>
                ) : (
                  <>
                    <span>START A CONVERSATION</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}
