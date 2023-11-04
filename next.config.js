/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: ["raw.githubusercontent.com"],
  },
  output: "standalone",
};

module.exports = nextConfig;
