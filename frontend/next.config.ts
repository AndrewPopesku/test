import type { NextConfig } from "next";

const repoName = "test";
const nextConfig: NextConfig = {
  basePath: `/test/frontend`,
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
