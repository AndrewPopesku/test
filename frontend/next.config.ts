import type { NextConfig } from "next";

const repoName = "test-front";
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
