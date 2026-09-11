import Contact from "@/components/Contact"
import AnimatedBackground from "@/components/AnimatedBackground"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Harshavarthanar KS | AI Systems Specialist Coimbatore",
  description:
    "Connect with Harshavarthanar KS for AI engineering collaborations, full stack projects, prompt optimization, or recruitment inquiries. Email: harshavarthanar60@gmail.com, Phone: +91 63834 86678. Located in Somanur, Coimbatore.",
  keywords: [
    "Contact Harshavarthanar KS",
    "Hire Harshavarthanar",
    "Harshavarthanar email",
    "Harshavarthanar phone",
    "Harshavarthanar Coimbatore",
    "AI engineer contact Coimbatore",
  ],
  alternates: {
    canonical: "https://portfolioofharshavarthanar.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Harshavarthanar KS | Initiate Collaboration",
    description:
      "Get in touch directly with Harshavarthanar KS for AI systems architecture and full stack web engineering.",
    url: "https://portfolioofharshavarthanar.vercel.app/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white relative overflow-hidden">
      <AnimatedBackground />
      <Contact />
    </main>
  )
}
