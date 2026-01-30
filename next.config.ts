import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect old URLs from Google to homepage
      {
        source: '/executive-coaching',
        destination: '/',
        permanent: true,
      },
      {
        source: '/integrated-leadership',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ma-integration',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cross-culture-integration',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
