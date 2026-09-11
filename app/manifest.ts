import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Harshavarthanar KS — AI Systems Specialist & Full Stack Developer",
    short_name: "Harshavarthanar",
    description:
      "Official portfolio of Harshavarthanar KS: AI Systems Specialist, Prompt Engineer, and Full Stack Developer pursuing B.E. CSE at Dr NGP IT, Coimbatore.",
    start_url: "/",
    display: "standalone",
    background_color: "#0e0e0e",
    theme_color: "#ff3e00",
    icons: [
      {
        src: "/icon-light-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icon-dark-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
