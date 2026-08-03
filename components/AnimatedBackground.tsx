"use client"

import { useEffect, useRef } from "react"

interface Node3D {
  x: number
  y: number
  z: number
  baseX: number
  baseY: number
  baseZ: number
  color: string
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, px: 0, py: 0, targetX: 0, targetY: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Generate 3D nodes
    const nodeCount = 120
    const nodes: Node3D[] = []
    const range = 600 // Spreading distance in coordinates

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * range * 2
      const y = (Math.random() - 0.5) * range * 2
      const z = (Math.random() - 0.5) * range * 2
      
      // Teal and violet color shades
      const colors = ["rgba(6, 182, 212, 0.4)", "rgba(139, 92, 246, 0.4)", "rgba(59, 130, 246, 0.4)"]
      const color = colors[Math.floor(Math.random() * colors.length)]

      nodes.push({ x, y, z, baseX: x, baseY: y, baseZ: z, color })
    }

    const focalLength = 400
    let rotX = 0.001 // Rotation speed X
    let rotY = 0.0015 // Rotation speed Y

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX
      mouseRef.current.targetY = e.clientY
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    // Main animation loop
    const animate = () => {
      if (!ctx || !canvas) return
      ctx.fillStyle = "rgba(2, 6, 23, 0.25)" // Subtle trails
      ctx.fillRect(0, 0, width, height)

      // Smooth mouse interpolation
      const mouse = mouseRef.current
      mouse.x += (mouse.targetX - mouse.x) * 0.1
      mouse.y += (mouse.targetY - mouse.y) * 0.1

      const centerX = width / 2
      const centerY = height / 2

      // Slowly rotate overall grid system angles
      rotX += 0.0002
      rotY += 0.0003

      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)
      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)

      const projectedNodes = nodes.map((node) => {
        // Rotate around Y axis
        let x1 = node.baseX * cosY - node.baseZ * sinY
        let z1 = node.baseZ * cosY + node.baseX * sinY

        // Rotate around X axis
        let y2 = node.baseY * cosX - z1 * sinX
        let z2 = z1 * cosX + node.baseY * sinX

        // Magnetic mouse force in 3D
        const dx = mouse.x - centerX - x1
        const dy = mouse.y - centerY - y2
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < 250) {
          const force = (250 - dist) * 0.15
          x1 += (dx / dist) * force
          y2 += (dy / dist) * force
        }

        // Perspective projection
        const scale = focalLength / (focalLength + z2)
        const projX = x1 * scale + centerX
        const projY = y2 * scale + centerY

        return { projX, projY, scale, color: node.color, z: z2 }
      })

      // Draw connection lines
      const maxDistance = 140
      ctx.lineWidth = 0.5

      for (let i = 0; i < projectedNodes.length; i++) {
        const n1 = projectedNodes[i]
        if (n1.projX < 0 || n1.projX > width || n1.projY < 0 || n1.projY > height) continue

        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n2 = projectedNodes[j]
          
          const dx = n1.projX - n2.projX
          const dy = n1.projY - n2.projY
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDistance) {
            // Fade lines out if they are far apart
            const opacity = (1 - dist / maxDistance) * 0.18 * n1.scale * n2.scale
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(n1.projX, n1.projY)
            ctx.lineTo(n2.projX, n2.projY)
            ctx.stroke()
          }
        }
      }

      // Draw node points
      projectedNodes.forEach((n) => {
        if (n.projX < 0 || n.projX > width || n.projY < 0 || n.projY > height) return

        ctx.fillStyle = n.color
        ctx.beginPath()
        // Size scales based on depth (z)
        const radius = Math.max(1, 2.2 * n.scale)
        ctx.arc(n.projX, n.projY, radius, 0, Math.PI * 2)
        ctx.fill()

        // Highlight ring on hovered particles
        const dx = mouse.x - n.projX
        const dy = mouse.y - n.projY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 80) {
          ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - dist / 80) * 0.3})`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.arc(n.projX, n.projY, radius * 3, 0, Math.PI * 2)
          ctx.stroke()
        }
      })

      // Dynamic digital data readouts at top/bottom corners (sci-fi HUD details)
      ctx.fillStyle = "rgba(6, 182, 212, 0.15)"
      ctx.font = "9px monospace"
      ctx.fillText(`SYS.GRID.ACTIVE: ${nodeCount} NODES`, 20, 25)
      ctx.fillText(`CURSOR.X: ${Math.round(mouse.x)} | Y: ${Math.round(mouse.y)}`, 20, 40)
      ctx.fillText("MATRIX.TELEMETRY: SECURE", width - 180, 25)
      ctx.fillText(`FPS: 60.00 | ZOOM: ${focalLength}`, width - 180, 40)

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-[#020617]"
    />
  )
}
