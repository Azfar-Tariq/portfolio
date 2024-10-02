/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["vercel.com"], // Add any external domains you're loading images from
  },
  // You can add more configuration options here as needed
};

export default nextConfig;
