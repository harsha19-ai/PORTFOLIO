"use client"

import { useState } from "react"
import type React from "react"

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
}

export default function InteractiveCard({ children, className = "" }: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setPosition({ x, y })
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl transition-all duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <div
          className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl pointer-events-none"
          style={{
            left: `${position.x - 80}px`,
            top: `${position.y - 80}px`,
          }}
        />
      )}
      <div className={isHovered ? "brightness-110" : ""}>{children}</div>
    </div>
  )
}
