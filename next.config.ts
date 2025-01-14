import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // basePath: "/mparente88.github.io",
  assetPrefix: process.env.NODE_ENV === "production" ? "/mparente88.github.io" : undefined,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
