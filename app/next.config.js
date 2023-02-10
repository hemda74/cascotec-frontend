/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  // images Configuration.
  images: {
    domains: ['202.182.119.166'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
