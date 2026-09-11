import AboutContent from "@/components/AboutContent"
import AnimatedBackground from "@/components/AnimatedBackground"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Harshavarthanar KS | Bio, Education & Philosophy",
  description:
    "Biography of Harshavarthanar KS: AI Systems Specialist, B.E. CSE student at Dr NGP IT (CGPA 8.34), Prompt Engineering Intern at Skylena Pvt. Ltd., and winner of BIT Hackathon 2025. Discover his debugging philosophy, engineering principles, and athletics.",
  keywords: [
    "About Harshavarthanar KS",
    "Harshavarthanar bio",
    "Harsha Varthanar biography",
    "Harshavarthanar Dr NGP IT",
    "Harshavarthanar education",
    "Harshavarthanar Skylena",
  ],
  alternates: {
    canonical: "https://portfolioofharshavarthanar.vercel.app/about",
  },
  openGraph: {
    title: "About Harshavarthanar KS | AI Systems Specialist & Builder",
    description:
      "Learn about Harshavarthanar KS — his debugging strategy 'Nothing is Impossible', B.E. Computer Science degree at Dr NGP IT, and career in AI systems.",
    url: "https://portfolioofharshavarthanar.vercel.app/about",
    images: [
      {
        url: "/profile-dhoti-standing.jpg",
        width: 1200,
        height: 630,
        alt: "Harshavarthanar KS on campus grounds",
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white relative overflow-hidden">
      <AnimatedBackground />
      <AboutContent />
    </main>
  )
}
