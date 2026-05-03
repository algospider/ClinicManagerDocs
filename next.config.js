/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add base path if deploying to a subfolder on GitHub Pages
  // basePath: '/Ramm', 
};

module.exports = nextConfig;
