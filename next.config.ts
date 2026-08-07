import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  typescript: {
    // The static GitHub build does not use the Sites-only Cloudflare D1 layer.
    ignoreBuildErrors: isGithubPages,
  },
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: githubBasePath,
        assetPrefix: githubBasePath || undefined,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
