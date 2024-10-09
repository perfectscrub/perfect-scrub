/** @type {import('next').NextConfig} */
// import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.surferseo.art",
      },
    ],
  },
};

module.exports = nextConfig;
