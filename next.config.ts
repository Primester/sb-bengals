import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  basePath: (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, ""),
  images: { unoptimized: true },
  poweredByHeader: false,
  trailingSlash: true,
};
export default nextConfig;
