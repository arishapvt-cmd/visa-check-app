import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // Static HTML export — works offline, no server needed
  trailingSlash: true,     // /countries/india → /countries/india/index.html
  images: {
    unoptimized: true,     // Static export doesn't support Next.js image optimization
  },
  // ── Performance optimizations ─────────────────────────────────────────
  compress: true,
  turbopack: {},           // Silence Turbopack warning; no extra webpack config needed
  experimental: {
    optimizeCss: true,     // Inline critical CSS, defer non-critical
    optimizePackageImports: ["lucide-react"],  // Tree-shake icon library
  },
};

export default nextConfig;
