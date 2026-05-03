/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/ClinicManagerDocs',
  assetPrefix: '/ClinicManagerDocs',
};

module.exports = nextConfig;
