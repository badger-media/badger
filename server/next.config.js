/* eslint-disable @typescript-eslint/no-var-requires */
const { PrismaPlugin } = require("@prisma/nextjs-monorepo-workaround-plugin");
const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: true,
  },
  transpilePackages: ["@bowser/prisma"],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }

    return config;
  },
};

module.exports = withSentryConfig(
  nextConfig,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,

    org: "ystv",
    project: "bowser",
    authToken: process.env.SENTRY_AUTH_TOKEN,
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
    widenClientFileUpload: true,
    transpileClientSDK: false,
    tunnelRoute: "/monitoring",
    hideSourceMaps: true,
    disableLogger: true,
    disableClientWebpackPlugin: process.env.IS_PRODUCTION_BUILD !== "true",
    disableServerWebpackPlugin: process.env.IS_PRODUCTION_BUILD !== "true",
  },
);
