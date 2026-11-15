// Content paths stay relative to the site root; deployments may use a subpath.
export function withBase(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
}
