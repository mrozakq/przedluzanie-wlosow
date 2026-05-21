/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/v2',
  assetPrefix: '/v2',
  images: { unoptimized: true },
}

module.exports = nextConfig
