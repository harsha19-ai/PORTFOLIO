"use client"

import React from "react"

export default function Footer() {
  const [isHovered, setIsHovered] = React.useState<string | null>(null)

  const socials = [
    { name: "Email", href: "mailto:harshavarthanar60@gmail.com", icon: "✉" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/harsha-varthanar-03aa3932b", icon: "in" },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-12 relative overflow-hidden border-t border-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h3 className="font-poppins text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Harshavarthanar KS
          </h3>
          <p className="text-slate-400 mb-6 text-sm">AI Engineer | Prompt Engineer | Full Stack Developer</p>

          <div className="flex justify-center space-x-8 mb-8">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.name === "Email" ? undefined : "_blank"}
                rel={social.name === "Email" ? undefined : "noopener noreferrer"}
                className="group relative text-sm"
                onMouseEnter={() => setIsHovered(social.name)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="text-slate-400 group-hover:text-white transition-all duration-300 font-medium">
                  {social.name}
                </div>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                    isHovered === social.name ? "w-full" : "w-0"
                  }`}
                ></div>
              </a>
            ))}
          </div>

          <div className="border-t border-slate-900 pt-8">
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} Harshavarthanar KS. All rights reserved.
            </p>
            <p className="text-slate-500 text-[10px] mt-2">
              Built with passion for AI and innovation
              <span className="ml-2 inline-block animate-pulse">✨</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
