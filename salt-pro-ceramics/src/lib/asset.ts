/**
 * Prefix a public asset path with the configured basePath, if any.
 *
 * Use this for raw HTML tags like <video>, <source>, <img>, and inline
 * background-image url()s — Next.js does NOT auto-prefix these.
 *
 * `next/image` and `next/link` handle the basePath automatically.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
