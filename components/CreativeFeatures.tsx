"use client"

import { useState } from "react"
import Link from "next/link"
import { Brain, Code, Palette, Zap, ArrowRight } from "lucide-react"

const features = [
  {
    title: "AI Innovation",
    description: "Cutting-edge AI solutions that transform complex problems into simple, elegant solutions",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
    href: "/skills",
  },
  {
    title: "Creative Development",
    description: "Where technology meets creativity to build extraordinary digital experiences",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    href: "/services",
  },
  {
    title: "Design Excellence",
    description: "Crafting beautiful, functional designs that speak to both users and algorithms",
    icon: Palette,
    color: "from-green-500 to-teal-500",
    href: "/portfolio",
  },
  {
    title: "Innovation Mindset",
    description: "Constantly pushing boundaries to discover what's possible in the AI landscape",
    icon: Zap,
    color: "from-orange-500 to-red-500",
    href: "/about",
  },
]

export default function CreativeFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl font-bold text-gray-900 mb-4">
            Where{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Innovation
            </span>{" "}
            Meets{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Creativity
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover how I blend artificial intelligence with creative thinking to build solutions that matter
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Link
                key={feature.title}
                href={feature.href}
                className="group block"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden ${
                    hoveredIndex === index ? "scale-105" : ""
                  }`}
                >
                  {/* Animated Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Floating Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div className="flex items-center text-blue-600 font-medium group-hover:text-purple-600 transition-colors duration-300">
                    <span>Explore more</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>

                  {/* Hover Effect Lines */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
