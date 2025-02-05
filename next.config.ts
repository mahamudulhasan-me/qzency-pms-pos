import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1zkgqwtxp8cfw.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
