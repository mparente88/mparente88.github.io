import type { NextConfig } from "next"

// const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/mparente88.github.io",
  assetPrefix: "https://mparente88.github.io",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
