"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Terminal, Activity } from "lucide-react"

export default function PageTransition() {
  const pathname = usePathname()
  const [displayPathname, setDisplayPathname] = useState(pathname)
  const [transitionState, setTransitionState] = useState<"idle" | "scan" | "resolved">("idle")

  useEffect(() => {
    if (pathname !== displayPathname) {
      setTransitionState("scan")

      const timer = setTimeout(() => {
        setDisplayPathname(pathname)
        setTransitionState("resolved")

        const timer2 = setTimeout(() => {
          setTransitionState("idle")
        }, 250)
        return () => clearTimeout(timer2)
      }, 450)

      return () => clearTimeout(timer)
    }
  }, [pathname, displayPathname])

  if (transitionState === "idle") return null

  return (
    <div className="fixed inset-0 z-[999] pointer-events-none overflow-hidden bg-[#0e0e0e]/85 backdrop-blur-[6px] flex flex-col items-center justify-center">
      {/* Laser Scanning Bar */}
      {transitionState === "scan" && (
        <div className="absolute left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#ff3e00] to-transparent shadow-[0_0_20px_#ff3e00] animate-pulse pointer-events-none z-20" />
      )}

      {/* Viscera Brutalist Transition Badge */}
      <div
        className={`w-11/12 max-w-md bg-[#121212] border border-[#2a2a2a] p-6 font-mono shadow-2xl relative overflow-hidden transition-all duration-300 z-10 ${
          transitionState === "scan"
            ? "scale-100 opacity-95 translate-y-0"
            : "scale-95 opacity-0 translate-y-2"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#222222] pb-3 mb-3">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#ff3e00] animate-pulse" />
            <span className="text-xs font-syne font-bold uppercase tracking-wider text-white">
              PAGE TRANSITION
            </span>
          </div>
          <span className="text-[10px] text-[#ff3e00] font-mono">// DISPATCH</span>
        </div>

        <div className="space-y-1.5 text-xs text-white/70">
          <div className="flex justify-between">
            <span className="text-white/40">DESTINATION:</span>
            <span className="text-[#ff3e00] font-bold">
              /{pathname === "/" ? "home" : pathname.replace("/", "")}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">ORIGIN:</span>
            <span className="text-white/80">
              /{displayPathname === "/" ? "home" : displayPathname.replace("/", "")}
            </span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-[#222222] flex justify-between items-center text-[10px] text-white/40">
          <span>HARSHAVARTHANAR KS</span>
          <span className="text-[#ff3e00] animate-pulse font-bold">LOADING MODULE...</span>
        </div>
      </div>
    </div>
  )
}
