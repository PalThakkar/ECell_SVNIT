/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,  // Enables React's Strict Mode for better development practices
  
    images: {
      domains: ['ecellsvnit.com'],  // Optimizes images from your domain
      formats: ['image/avif', 'image/webp'],  // Enables modern image formats for better compression
    },
  
    webpack: (config) => {
      // Code splitting optimization: Ensures common chunks are extracted and loaded only when necessary
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 70000,
      };
  
      // Additional performance optimizations can be applied here if needed
  
      return config;
    },
  
    experimental: {
      scrollRestoration: true,  // Improves the user experience by preserving scroll position between navigation
    },
  };
  
  module.exports = nextConfig;
  