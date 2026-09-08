import type React from "react"
import type { Metadata } from "next"
import { Syne, Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import ScrollProgress from "@/components/ScrollProgress"
import PageTransition from "@/components/PageTransition"

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "HARSHAVARTHANAR KS — AI ENGINEER & ARCHITECT",
  description:
    "Visceral AI systems. Technical precision. Specializing in LLM orchestration, RAG pipelines, prompt engineering, and high-performance full-stack architectures.",
  keywords: [
    "Harshavarthanar KS",
    "AI Engineer",
    "Prompt Engineer",
    "RAG",
    "LLM",
    "FAISS",
    "FastAPI",
    "Python",
    "Full Stack",
    "Portfolio",
  ],
  authors: [{ name: "Harshavarthanar KS" }],
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-[#0e0e0e] text-[#ffffff]">
      <body
        className={`${syne.variable} ${inter.variable} antialiased bg-[#0e0e0e] text-[#ffffff] min-h-screen relative selection:bg-[#ff3e00] selection:text-white`}
      >
        <ScrollProgress />
        <PageTransition />
        <Navigation />
        <div className="relative min-h-screen flex flex-col justify-between">
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
