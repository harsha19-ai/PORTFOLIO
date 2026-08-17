"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "HOME", href: "/#home" },
  { name: "ABOUT", href: "/#about" },
  { name: "EXPERIENCE", href: "/#journey" },
  { name: "PROJECTS", href: "/#projects" },
  { name: "SKILLS", href: "/#skills" },
  { name: "CONTACT", href: "/#contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#05061A]/85 backdrop-blur-md border-b border-slate-900/60 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex justify-between items-center">
          
          {/* Logo Name */}
          <Link href="/#home" className="group" data-cursor="home">
            <span className="font-mono text-xs sm:text-sm font-black text-[#F5F7FF] tracking-widest uppercase">
              HARSHAVARTHANAR <span className="text-blue-500">KS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-mono text-[10px] font-bold text-slate-400 hover:text-[#F5F7FF] transition-colors duration-200 tracking-widest uppercase relative py-1 group/item"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover/item:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Trigger */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors duration-200 cursor-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="fixed inset-0 top-[73px] bg-[#05061A] z-40 md:hidden flex flex-col justify-center items-center px-6 animate-fade-in">
            <div className="space-y-6 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block font-poppins text-2xl font-black text-[#F5F7FF] hover:text-blue-400 transition-colors uppercase tracking-widest"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
