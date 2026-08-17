"use client"

import { useEffect, useState, useRef } from "react"

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [cursorText, setCursorText] = useState("")

  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const mousePos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const requestRef = useRef<number | null>(null)

  useEffect(() => {
    // Disable on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)
    }

    const onMouseLeave = () => {
      setVisible(false)
    }

    const onMouseEnter = () => {
      setVisible(true)
    }

    // Set up hover event listeners
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest("a, button, [role='button'], input, textarea, [data-cursor]")
      
      if (interactive) {
        setHovered(true)
        const customText = interactive.getAttribute("data-cursor")
        if (customText) {
          setCursorText(customText)
        } else {
          setCursorText("")
        }
      } else {
        setHovered(false)
        setCursorText("")
      }
    }

    window.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mouseenter", onMouseEnter)
    window.addEventListener("mouseover", handleMouseOver)

    // Animation loop for smooth trailing ring
    const animateRing = () => {
      const friction = 0.15
      
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * friction
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * friction

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`
      }

      requestRef.current = requestAnimationFrame(animateRing)
    }

    requestRef.current = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mouseenter", onMouseEnter)
      window.removeEventListener("mouseover", handleMouseOver)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [visible])

  if (!visible) return null

  return (
    <>
      {/* Central crisp white dot */}
      <div 
        ref={dotRef} 
        className="custom-cursor-dot transition-all duration-150 ease-out" 
        style={{ pointerEvents: 'none' }}
      />
      {/* Trailing thin geometric ring */}
      <div
        ref={ringRef}
        className={`custom-cursor-ring flex items-center justify-center font-mono text-[9px] font-bold text-white tracking-widest pointer-events-none transition-all duration-300 ${
          hovered 
            ? "w-[75px] h-[75px] border-white bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.08)]" 
            : "w-[40px] h-[40px]"
        }`}
        style={{ pointerEvents: 'none' }}
      >
        {hovered && cursorText && (
          <span className="animate-fade-in opacity-85 select-none uppercase">{cursorText}</span>
        )}
      </div>
    </>
  )
}
