export function resolveAssetUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;

  const normalizedPath = path.replace(/^\/+/, "");
  const remoteBase = import.meta.env.VITE_ASSET_BASE_URL?.replace(/\/+$/, "");

  if (remoteBase) {
    return remoteBase + "/" + normalizedPath;
  }

  const baseUrl = import.meta.env.BASE_URL || "/";
  return baseUrl + normalizedPath;
}

export function normalizeAssetName(name: string): string {
  return name.trim().replace(/\s+/g, '_');
}