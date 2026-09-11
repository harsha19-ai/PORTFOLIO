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

const siteUrl = "https://portfolioofharshavarthanar.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Harshavarthanar KS | AI Systems Specialist & Full Stack Developer",
    template: "%s | Harshavarthanar KS",
  },
  description:
    "Official portfolio of Harshavarthanar KS (Harsha Varthanar). AI Engineer, Prompt Engineer, and Full Stack Developer pursuing B.E. Computer Science at Dr NGP Institute of Technology, Coimbatore. Creator of ARADHYA, DMS Chatbot, and HOPE. Prompt Engineering Intern at Skylena Pvt. Ltd. and BIT Hackathon 2025 winner.",
  keywords: [
    "Harshavarthanar KS",
    "Harshavarthanar",
    "Harsha Varthanar",
    "Harshavarthanar K S",
    "harsha19-ai",
    "Harshavarthanar portfolio",
    "Harshavarthanar Coimbatore",
    "Harshavarthanar Dr NGP IT",
    "Harshavarthanar Somanur",
    "AI Engineer Harshavarthanar",
    "Prompt Engineer Harshavarthanar",
    "Full Stack Developer Harshavarthanar",
    "Dr NGP Institute of Technology",
    "Skylena Prompt Engineering Intern",
    "BIT Hackathon 2025 winner Harshavarthanar",
    "ARADHYA AI",
    "RAG Developer",
    "FAISS Vector Search",
    "Sentence Transformers",
    "Python Developer Coimbatore",
  ],
  authors: [{ name: "Harshavarthanar KS", url: siteUrl }],
  creator: "Harshavarthanar KS",
  publisher: "Harshavarthanar KS",
  applicationName: "Harshavarthanar KS Portfolio",
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: "Harshavarthanar KS — AI Systems Specialist & Full Stack Developer",
    title: "Harshavarthanar KS | AI Systems Specialist & Full Stack Developer",
    description:
      "Official portfolio of Harshavarthanar KS. AI Engineer, Prompt Engineer, and B.E. Computer Science student at Dr NGP IT, Coimbatore. Builder of ARADHYA, DMS Chatbot, and HOPE.",
    images: [
      {
        url: "/profile-dhoti-candid.jpg",
        width: 1200,
        height: 630,
        alt: "Harshavarthanar KS — AI Systems Specialist & Full Stack Developer",
      },
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Harshavarthanar KS Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshavarthanar KS | AI Systems Specialist & Full Stack Developer",
    description:
      "Official portfolio of Harshavarthanar KS. AI Engineer & Full Stack Developer pursuing B.E. CSE at Dr NGP IT, Coimbatore. Creator of ARADHYA, DMS Chatbot, and HOPE.",
    images: ["/profile-dhoti-candid.jpg"],
    creator: "@harsha19_ai",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Harshavarthanar KS",
      alternateName: [
        "Harsha Varthanar",
        "Harshavarthanar",
        "Harshavarthanar K S",
        "harsha19-ai",
      ],
      givenName: "Harshavarthanar",
      familyName: "KS",
      gender: "Male",
      url: siteUrl,
      image: `${siteUrl}/profile-dhoti-candid.jpg`,
      sameAs: [
        "https://www.linkedin.com/in/harsha-varthanar-03aa3932b",
        "https://github.com/harsha19-ai",
      ],
      jobTitle: "AI Systems Specialist & Full Stack Developer",
      worksFor: {
        "@type": "Organization",
        name: "Skylena Pvt. Ltd.",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Dr NGP Institute of Technology",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
        },
        {
          "@type": "EducationalOrganization",
          name: "GVT Higher Secondary School Arasur",
        },
        {
          "@type": "EducationalOrganization",
          name: "GVT High School Karugampalayam",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Somanur, Coimbatore",
        addressRegion: "Tamil Nadu",
        postalCode: "641668",
        addressCountry: "IN",
      },
      email: "mailto:harshavarthanar60@gmail.com",
      telephone: "+916383486678",
      award: "Winner - Cash Prize at BIT HACKATHON 2025",
      knowsAbout: [
        "Artificial Intelligence",
        "Prompt Engineering",
        "Large Language Models (LLMs)",
        "Retrieval-Augmented Generation (RAG)",
        "Sentence Transformers",
        "FAISS Vector Search",
        "Full Stack Web Development",
        "Python",
        "FastAPI",
        "Flask",
        "Django",
        "React",
        "Next.js",
        "MongoDB",
        "MySQL",
        "Docker",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Harshavarthanar KS — AI Systems Specialist Portfolio",
      description: "Official website and portfolio of Harshavarthanar KS.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Harshavarthanar KS — AI Engineer & Full Stack Developer",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-[#0e0e0e] text-[#ffffff]">
      <head>
        {/* Google Knowledge Graph & Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
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
