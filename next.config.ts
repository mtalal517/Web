import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

export default function config(phase: string): NextConfig {
  const development = phase === PHASE_DEVELOPMENT_SERVER;
  
  return {
    devIndicators: false,
    distDir: development ? '.next-dev' : '.next',
    outputFileTracingRoot: process.cwd(),
    images: {
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '/**',
        },
      ],
    },
    experimental: {
      cpus: 2,
    },
  };
}
