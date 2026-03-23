import type { NextConfig } from "next";

const nextConfig : NextConfig = {
  reactStrictMode: true,       // ← keep this from your config
  async rewrites() {
    return [
      { source: "/:path*", destination: "http://localhost:80/:path*" }
    ]
  }
}

module.exports = nextConfig;