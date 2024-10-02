/** @type {import('next').NextConfig} */
modules.exports = {
  images: {
    unoptimized: true,
    domains: ["vercel.com"], // Add any external domains you're loading images from
  },
};

export default nextConfig;
