/** @type {import('next').NextConfig} */
// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ['@svgr/webpack'],
//     });

//     return config;
//   },
// };
const withVideos = require('next-videos')
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withVideos(nextConfig);
