/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/ai',
        destination: '/posts/2024-ai-manifesto',
      },
    ];
  },
};

module.exports = nextConfig;
