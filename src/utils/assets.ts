export function resolveAssetUrl(path: string): string {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const baseUrl = import.meta.env.BASE_URL || '/';
  const normalizedPath = path.replace(/^\/+/, '');

  return `${baseUrl}${normalizedPath}`;
}
