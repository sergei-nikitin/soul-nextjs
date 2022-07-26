/** @type {import('next').NextConfig} */

const withVideos = require('next-videos')
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = withVideos(nextConfig);
