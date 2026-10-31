import type { NextConfig } from "next";

// Static export for Cloudflare Pages
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
