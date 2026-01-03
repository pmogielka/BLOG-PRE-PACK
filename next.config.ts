import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "cms.blog-pre-pack.localhost",
      },
      {
        protocol: "https",
        hostname: "cms.prepack.pl",
      },
    ],
  },
};

export default nextConfig;
