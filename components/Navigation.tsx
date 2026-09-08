"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X, ArrowUpRight, FileDown } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Skills", href: "/skills" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-[#0e0e0e]/95 backdrop-blur-md border-b border-[#222222]"
            : "py-6 sm:py-7 bg-transparent"
        }`}
      >
        <div className="viscera-container flex justify-between items-center">
          {/* Brutalist Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-syne font-extrabold text-xl tracking-tight text-white hover:text-[#ff3e00] transition-colors duration-300"
          >
            <span>HARSHA</span>
            <span className="text-xs font-mono font-normal text-white/50 group-hover:text-[#ff3e00] transition-colors">
              ©26
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-7 list-none">
            {navLinks.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`font-syne text-xs uppercase tracking-widest transition-colors duration-200 relative py-1 group ${
                      isActive ? "text-[#ff3e00] font-bold" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#ff3e00] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Harshavarthanar-KS-Resume.pdf"
              download="Harshavarthanar-KS-Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-[#333333] hover:border-white text-xs font-syne font-semibold uppercase tracking-wider text-white/90 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              <FileDown size={13} className="text-[#ff3e00]" />
              <span>CV [PDF]</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 px-4 py-1.5 bg-white hover:bg-[#ff3e00] text-[#0e0e0e] hover:text-white text-xs font-syne font-bold uppercase tracking-wider transition-all duration-300"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#ff3e00] transition-colors p-2"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#0e0e0e] z-40 flex flex-col justify-center px-8 md:hidden">
          <div className="space-y-6">
            <p className="font-mono text-xs uppercase text-[#ff3e00] tracking-widest">// NAVIGATION</p>
            <ul className="space-y-4 list-none">
              {navLinks.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-syne font-extrabold text-3xl tracking-tight transition-colors block ${
                        isActive ? "text-[#ff3e00]" : "text-white hover:text-[#ff3e00]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="pt-6 border-t border-[#222222] flex flex-col gap-3">
              <a
                href="/Harshavarthanar-KS-Resume.pdf"
                download="Harshavarthanar-KS-Resume.pdf"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 py-3 border border-[#333333] text-sm font-syne font-bold uppercase tracking-wider text-white"
              >
                <FileDown size={16} className="text-[#ff3e00]" />
                <span>Download Resume (PDF)</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 py-3 bg-[#ff3e00] text-white text-sm font-syne font-bold uppercase tracking-wider"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
