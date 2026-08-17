"use client"

import React from "react"

export default function Footer() {
  const socials = [
    { name: "GITHUB", href: "https://github.com/harsha19-ai" },
    { name: "LINKEDIN", href: "https://www.linkedin.com/in/harsha-varthanar-03aa3932b" },
    { name: "EMAIL", href: "mailto:harshavarthanar60@gmail.com" },
  ]

  return (
    <footer className="bg-[#05061A] text-white pt-24 pb-12 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="space-y-16">
          
          {/* Memorable Thank You Ending (Spacious Typography) */}
          <div className="text-center space-y-6">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
              09 // THE END
            </span>
            <h2 className="font-poppins text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F7FF] tracking-tighter uppercase leading-none">
              THANK YOU FOR EXPLORING
            </h2>
            <div className="text-xs sm:text-sm font-mono text-slate-400 uppercase tracking-widest">
              HARSHAVARTHANAR KS &mdash; AI ENGINEER &bull; PROMPT ENGINEER &bull; FULL STACK DEVELOPER
            </div>
          </div>

          {/* Socials & Copyright (Editorial columns) */}
          <div className="border-t border-slate-900/60 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="font-mono text-[10px] text-slate-500 tracking-wide order-2 md:order-1 text-center md:text-left">
              &copy; {new Date().getFullYear()} HARSHAVARTHANAR KS. ALL RIGHTS RESERVED.
              <span className="block mt-1 text-slate-600">INTENTIONAL DESIGN &bull; SYSTEMS INNOVATION</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-8 order-1 md:order-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name === "EMAIL" ? undefined : "_blank"}
                  rel={social.name === "EMAIL" ? undefined : "noopener noreferrer"}
                  className="font-mono text-[10px] font-bold text-slate-400 hover:text-white transition-colors duration-200 tracking-widest uppercase relative py-1 group"
                >
                  {social.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

          </div>

        </div>
      </div>
    </footer>
  )
}
