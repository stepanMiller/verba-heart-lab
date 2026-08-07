const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_BASE_PATH = configuredBasePath.endsWith("/")
  ? configuredBasePath.slice(0, -1)
  : configuredBasePath;

export function sitePath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_BASE_PATH}${normalizedPath}` || "/";
}
