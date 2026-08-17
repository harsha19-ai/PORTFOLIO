"use client"

import { useEffect, useRef } from "react"

interface GridPoint {
  x: number
  y: number
  z: number
  baseX: number
  baseY: number
  baseZ: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const scrollRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Generate thin grid coordinate nodes
    const pointCount = 60
    const points: GridPoint[] = []
    const range = 700

    for (let i = 0; i < pointCount; i++) {
      const x = (Math.random() - 0.5) * range * 2
      const y = (Math.random() - 0.5) * range * 2
      const z = Math.random() * range
      points.push({ x, y, z, baseX: x, baseY: y, baseZ: z })
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse positions between -1 and 1
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.targetY = (e.clientY / window.innerHeight) * 2 - 1
    }

    const handleScroll = () => {
      scrollRef.current = window.scrollY
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    // Smooth values
    let currentMouseX = 0
    let currentMouseY = 0
    let currentScroll = 0

    const animate = () => {
      if (!ctx || !canvas) return

      // Redraw background
      ctx.fillStyle = "#05061A"
      ctx.fillRect(0, 0, width, height)

      // Smooth interpolation for mouse and scroll coordinates
      currentMouseX += (mouseRef.current.targetX - currentMouseX) * 0.08
      currentMouseY += (mouseRef.current.targetY - currentMouseY) * 0.08
      currentScroll += (scrollRef.current - currentScroll) * 0.08

      const centerX = width / 2
      const centerY = height / 2

      // Draw subtle background perspective lines (Isometric grid projection)
      ctx.strokeStyle = "rgba(245, 247, 255, 0.015)"
      ctx.lineWidth = 1

      const gridSpacing = 80
      const gridRows = 24
      const gridCols = 32
      const tiltY = currentMouseY * 15
      const tiltX = currentMouseX * 15

      // Draw horizontal perspective guide lines
      for (let i = -gridRows; i <= gridRows; i++) {
        ctx.beginPath()
        for (let j = -gridCols; j <= gridCols; j++) {
          const rawX = j * gridSpacing
          const rawY = i * gridSpacing - (currentScroll * 0.15)
          const z = 400 + (tiltY * 5)
          
          // Project coordinates in 3D perspective
          const scale = 500 / (500 + z)
          const projX = centerX + (rawX + (tiltX * 10)) * scale
          const projY = centerY + rawY * scale

          if (j === -gridCols) ctx.moveTo(projX, projY)
          else ctx.lineTo(projX, projY)
        }
        ctx.stroke()
      }

      // Draw vertical perspective guide lines
      for (let j = -gridCols; j <= gridCols; j++) {
        ctx.beginPath()
        for (let i = -gridRows; i <= gridRows; i++) {
          const rawX = j * gridSpacing
          const rawY = i * gridSpacing - (currentScroll * 0.15)
          const z = 400 + (tiltY * 5)
          
          const scale = 500 / (500 + z)
          const projX = centerX + (rawX + (tiltX * 10)) * scale
          const projY = centerY + rawY * scale

          if (i === -gridRows) ctx.moveTo(projX, projY)
          else ctx.lineTo(projX, projY)
        }
        ctx.stroke()
      }

      // Draw floating technical nodes (stars)
      points.forEach((p) => {
        // Move nodes slowly in Z axis
        p.z -= 0.4
        if (p.z <= 0) {
          p.z = range
        }

        const scale = 400 / (400 + p.z)
        const projX = centerX + (p.x + currentMouseX * 40) * scale
        const projY = centerY + (p.y - currentScroll * 0.1) * scale

        if (projX >= 0 && projX <= width && projY >= 0 && projY <= height) {
          const opacity = (1 - p.z / range) * 0.35
          ctx.fillStyle = `rgba(245, 247, 255, ${opacity})`
          
          // Render dot
          ctx.beginPath()
          ctx.arc(projX, projY, Math.max(0.8, 1.5 * scale), 0, Math.PI * 2)
          ctx.fill()
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-[#05061A]"
    />
  )
}
