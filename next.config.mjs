import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin("./src/core/i18n/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
    browsersListForSwc: true, // Ensures compatibility with older browsers
  },
  compiler: {
    removeConsole: true,
  },
};

export default withNextIntl(nextConfig);
