"use client"

import { useState, useEffect, useRef } from "react"
import { Gamepad2, Music, Guitar, MapPin } from "lucide-react"

const hobbies = [
  {
    name: "Gaming",
    icon: Gamepad2,
    description: "Exploring virtual worlds and strategic gameplay",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Singing",
    icon: Music,
    description: "Expressing creativity through vocal music",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Playing Instruments",
    icon: Guitar,
    description: "Creating melodies and harmonies",
    color: "from-green-500 to-teal-500",
  },
  {
    name: "Traveling & Exploring",
    icon: MapPin,
    description: "Discovering new places and cultures",
    color: "from-orange-500 to-red-500",
  },
]

export default function Hobbies() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="hobbies" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-poppins text-4xl font-bold text-gray-900 mb-4">Hobbies & Interests</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Beyond technology, these passions fuel my creativity and bring balance to my life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon
            return (
              <div
                key={hobby.name}
                className={`group relative overflow-hidden rounded-xl p-8 text-center hover:-translate-y-2 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <div className="relative z-10">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${hobby.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-4">{hobby.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{hobby.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="font-poppins text-2xl font-semibold text-gray-900 mb-4">The Creative Connection</h3>
            <p className="text-gray-600 leading-relaxed">
              These diverse interests aren't just hobbies—they're integral to my approach as an AI specialist. Gaming
              teaches strategic thinking and problem-solving, music enhances pattern recognition and creativity, while
              travel broadens perspectives and cultural understanding. Together, they contribute to a more holistic and
              innovative approach to technology and AI development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
