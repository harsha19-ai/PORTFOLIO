"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Terminal } from "lucide-react"

export default function PageTransition() {
  const pathname = usePathname()
  const [displayPathname, setDisplayPathname] = useState(pathname)
  const [isWiping, setIsWiping] = useState(false)
  const [transitionState, setTransitionState] = useState<"idle" | "scan" | "resolved">("idle")

  useEffect(() => {
    if (pathname !== displayPathname) {
      setIsWiping(true)
      setTransitionState("scan")
      
      const timer = setTimeout(() => {
        // Switch route content mid-wipe
        setDisplayPathname(pathname)
        setTransitionState("resolved")
        
        const timer2 = setTimeout(() => {
          setIsWiping(false)
          setTransitionState("idle")
        }, 350)
        return () => clearTimeout(timer2)
      }, 700)
      
      return () => clearTimeout(timer)
    }
  }, [pathname, displayPathname])

  if (transitionState === "idle") return null

  return (
    <div className="fixed inset-0 z-[999] pointer-events-none overflow-hidden bg-slate-950/80 backdrop-blur-[4px] flex flex-col items-center justify-center">
      
      {/* Dynamic Laser Scanning Bar */}
      {transitionState === "scan" && <div className="laser-bar pointer-events-none z-20" />}

      {/* Cyberpunk HUD Telemetry Decryption Box */}
      <div 
        className={`w-11/12 max-w-lg bg-slate-950 border border-slate-900 rounded-2xl p-6 sm:p-8 font-mono shadow-2xl relative overflow-hidden transition-all duration-300 z-10 ${
          transitionState === "scan" 
            ? "scale-100 opacity-95 translate-y-0 glitch-flicker-text" 
            : "scale-95 opacity-0 translate-y-4"
        }`}
      >
        {/* Subtle grid backdrop inside modal */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,rgba(6,182,212,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />

        <div className="flex items-center space-x-2.5 border-b border-slate-900 pb-3 mb-4">
          <Terminal className="w-5 h-5 text-cyan-400 animate-pulse" />
          <h2 className="text-sm font-bold text-slate-200">DECRYPT_SEQUENCE_MODULE</h2>
        </div>

        <div className="space-y-2 text-xs leading-normal">
          <div className="flex items-center justify-between text-slate-500">
            <span>TARGET_ROUTE:</span>
            <span className="text-cyan-400">/{pathname === "/" ? "home" : pathname.replace("/", "")}</span>
          </div>
          <div className="flex items-center justify-between text-slate-500">
            <span>PREV_ROUTE:</span>
            <span className="text-slate-400">/{displayPathname === "/" ? "home" : displayPathname.replace("/", "")}</span>
          </div>
          <div className="border-t border-slate-900/60 my-2 pt-2 text-[10px] text-slate-400 space-y-1">
            <p className="text-emerald-400">&gt; TERMINATING OLD ROUTE THREADS... OK</p>
            <p className="text-purple-400 animate-pulse">&gt; LOADING COGNITIVE ARTIFACTS...</p>
            <p className="text-cyan-400 animate-pulse">&gt; DECRYPTING SYSTEM METADATA...</p>
          </div>
        </div>

        {/* Binary progress indicator */}
        <div className="mt-5 flex justify-between items-center text-[10px] font-mono text-slate-500 border-t border-slate-900 pt-3">
          <span>SEC_READOUT: 0x8F9B2C</span>
          <span className="text-cyan-400 font-bold animate-pulse">DECRYPTING...</span>
        </div>
      </div>
      
    </div>
  )
}
