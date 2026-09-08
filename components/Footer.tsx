"use client"

import { usePathname } from "next/navigation"
import { ArrowUpRight, FileDown } from "lucide-react"

export default function Footer() {
  const pathname = usePathname()

  // The home page has its own monumental Viscera footer integrated at #contact
  if (pathname === "/") return null

  return (
    <footer className="viscera-section border-t border-[#222222] bg-black py-16">
      <div className="viscera-container">
        <div className="footer-cta select-none py-8">
          <a href="mailto:harshavarthanar60@gmail.com">LET&apos;S — BUILD</a>
        </div>

        <div className="divider my-6" />

        <div className="grid md:grid-cols-3 gap-8 py-4 font-syne text-xs uppercase tracking-wider text-white/60">
          <div>
            <p className="font-bold text-white mb-1">HARSHAVARTHANAR KS © 2026</p>
            <p className="text-white/40 font-mono text-[11px]">AI ENGINEER & ARCHITECT</p>
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
              <span>CV [PDF]</span>
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
  )
}
