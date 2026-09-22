import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';
export default function config(phase: string): NextConfig {
 const development = phase === PHASE_DEVELOPMENT_SERVER;
 return { distDir: development ? '.next-dev' : '.next', outputFileTracingRoot: process.cwd(), images: { loader: 'custom', loaderFile: './lib/image-loader.ts' }, experimental: { cpus: 2 } };
}
