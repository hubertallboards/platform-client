/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "via.placeholder.com",
      "images.unsplash.com",
      "plus.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
