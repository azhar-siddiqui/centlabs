import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep title, description, canonical, and Open Graph tags in the first HTML
  // chunk for every crawler. Next's default bot list leaves Googlebot out.
  htmlLimitedBots: /.*/,
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
