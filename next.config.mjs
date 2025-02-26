import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin("./src/core/i18n/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  transpilePackages: ["next/dist/compiled/@next/react-dev-overlay"],
  compiler: {
    removeConsole: false,
  },
};

export default withNextIntl(nextConfig);
