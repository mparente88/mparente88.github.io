import type { NextConfig } from "next"

const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: isProd ? "/mparente88.github.io" : "",
  basePath: isProd ? "/mparente88.github.io" : "",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
