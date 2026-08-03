"use client"

import { useEffect, useState } from "react"
import { Brain, Code, Lightbulb, Zap, Palette, Camera } from "lucide-react"

const icons = [Brain, Code, Lightbulb, Zap, Palette, Camera]

export default function FloatingElements() {
  const [elements, setElements] = useState<
    Array<{
      id: number
      Icon: any
      x: number
      y: number
      delay: number
      color: string
    }>
  >([])

  useEffect(() => {
    const newElements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      color: ["text-blue-400", "text-purple-400", "text-green-400", "text-yellow-400", "text-pink-400"][
        Math.floor(Math.random() * 5)
      ],
    }))
    setElements(newElements)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => {
        const Icon = element.Icon
        return (
          <div
            key={element.id}
            className={`absolute ${element.color} opacity-20 animate-float-random`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <Icon size={24} />
          </div>
        )
      })}
    </div>
  )
}
