"use client"

import { useEffect, useRef } from "react"

export default function CreativeShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const deltaX = (x - centerX) / centerX
      const deltaY = (y - centerY) / centerY

      container.style.transform = `perspective(1000px) rotateX(${deltaY * 5}deg) rotateY(${deltaX * 5}deg)`
    }

    const handleMouseLeave = () => {
      container.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 transition-transform duration-300 ease-out"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-blue-100/30 rounded-3xl" />
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse" />
      <div
        className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>
  )
}
