/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      buffer: require.resolve('buffer'),
      crypto: require.resolve('crypto-browserify'),
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      process: require.resolve('process/browser'),
    };
    return config;
  },
  reactStrictMode: true,
  async rewrites() {
    if (!process.env.MULTIVERSX_PRIVATE_API) {
      return [];
    }
    return [
      {
        source: `${process.env.NEXT_PUBLIC_MULTIVERSX_API}/:path*`,
        destination: `${process.env.MULTIVERSX_CUSTOM_API}/:path*`,
        destination: `${process.env.MULTIVERSX_PRIVATE_API}/:path*`,
      },
    ];
  },
  eslint: {
    dirs: ['components', 'config', 'hooks', 'pages', 'store', 'types', 'utils'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.elrond.com',
      },
      {
        protocol: 'https',
        hostname: '**.multiversx.com',
      },
      {
        protocol: 'https',
        hostname: '**.nftstorage.link',
      },
    ],
  },
};
module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    publicExcludes: ['!robots.txt', '!sitemap.xml', '!sitemap-0.xml'],
  },
});
module.exports = nextConfig;
