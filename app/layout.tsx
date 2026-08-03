import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import ScrollProgress from "@/components/ScrollProgress"
import FloatingNav from "@/components/FloatingNav"
import PageTransition from "@/components/PageTransition"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Harshavarthanar KS - AI Engineer | Prompt Engineer | Full Stack Developer",
  description:
    "Expert AI Engineer specializing in Large Language Models, Prompt Engineering, Retrieval-Augmented Generation (RAG), Computer Vision, and Full Stack Development. Building intelligent, production-ready systems.",
  keywords:
    "AI Engineer, Prompt Engineer, Large Language Models, LLM, RAG, Retrieval-Augmented Generation, Computer Vision, NLP, Full Stack Developer, Next.js, FastAPI, Python, Harshavarthanar KS",
  authors: [{ name: "Harshavarthanar KS" }],
  openGraph: {
    title: "Harshavarthanar KS - AI Engineer Portfolio",
    description: "Professional portfolio of Harshavarthanar KS, an AI Engineer building real-world intelligent systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshavarthanar KS - AI Engineer Portfolio",
    description: "Professional portfolio of Harshavarthanar KS, an AI Engineer building real-world intelligent systems.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-slate-950 text-slate-100">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased bg-slate-950 text-slate-100 min-h-screen relative`}>
        <ScrollProgress />
        <PageTransition />
        <Navigation />
        <div className="relative min-h-screen flex flex-col justify-between">
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
        <FloatingNav />
      </body>
    </html>
  )
}
