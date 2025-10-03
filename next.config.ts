import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ❌ ignoruj błędy ESLinta podczas builda (np. na Vercelu)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ❌ ignoruj błędy TS podczas builda
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
