import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com", // Replace with your API's image domain
        port: "",
        pathname: "/**", // Matches all paths under this domain
      },
    ],
  },
};

export default nextConfig;
