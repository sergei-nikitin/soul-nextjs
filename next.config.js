/** @type {import('next').NextConfig} */

const withVideos = require('next-videos')
const nextConfig = {
  reactStrictMode: false,
};

module.exports = withVideos(nextConfig);
