const { serviceWorker } = require("next-service-worker");
const withServiceWorker = serviceWorker();
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

module.exports = withServiceWorker(nextConfig);
