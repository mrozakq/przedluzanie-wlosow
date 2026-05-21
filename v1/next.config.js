/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/v1',
  assetPrefix: '/v1',
  images: { unoptimized: true },
}

module.exports = nextConfig
