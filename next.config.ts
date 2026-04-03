import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect old URLs from Google to homepage
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
      {
        source: '/team-transformation',
        destination: '/team-performance',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
