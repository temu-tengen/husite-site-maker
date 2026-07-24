import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "expert-couscous-g4w9wr47v5qrhw975-3000.app.github.dev"],
    }
  }
};

export default nextConfig;
