// GitHub Pages serves this site under a repository path; local previews use '/'.
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(
  /\/$/,
  "",
);
export const assetPath = (path: string) => `${basePath}${path}`;
export const publicSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sbbengals.com/";
export const absoluteAssetUrl = (path: string) =>
  new URL(assetPath(path), new URL(publicSiteUrl).origin).toString();
