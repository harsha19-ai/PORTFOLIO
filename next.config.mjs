/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['i.postimg.cc'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  // Enable compression
  compress: true,
  // Generate sitemap
  trailingSlash: false,
  // Remove experimental features that might cause issues
  experimental: {
    // Remove optimizeCss as it's causing the critters dependency issue
  },
}

export default nextConfig
