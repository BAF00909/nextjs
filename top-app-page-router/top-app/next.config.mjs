/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vkcs.cloud',
        port: '',
      },
    ],
  },
  webpack(config, options) {

    config.module.rules.push({

      test: /\.svg$/,

      use: ["@svgr/webpack"]

    });

    return config;

  },
};

export default nextConfig;
