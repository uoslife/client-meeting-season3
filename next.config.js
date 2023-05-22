/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  output: 'standalone',
  typescript: {
     ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
