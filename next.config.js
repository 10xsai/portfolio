/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer') // eslint-disable-line
const debug = process.env.NODE_ENV == 'development';

const nextConfig = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'user-images.githubusercontent.com'],
    unoptimized: true,
  },
  basePath: debug ? "" : "/portfolio",
  assetPrefix: debug ? "" : "/portfolio",
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap') // eslint-disable-line
      require('./scripts/generate-rss') // eslint-disable-line
    }

    return config
  },
})

module.exports = nextConfig
