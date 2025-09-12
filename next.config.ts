// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   /* config options here */
//   transpilePackages: ['mui-tel-input'],
// };

// export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['mui-tel-input'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.rankkit.in',
        // pathname: '/**', // allow all image paths
      },
    ],
    // Alternative (legacy, simpler):
    // domains: ["api.rankkit.in"],
  },
};

export default nextConfig;
