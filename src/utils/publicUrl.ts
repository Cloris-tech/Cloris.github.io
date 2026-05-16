/** Public folder asset URL, respects Vite `base` (e.g. GitHub Pages). */
export function publicAsset(path: string): string {
  const base = import.meta.env.BASE_URL || '/'
  const p = path.replace(/^\//, '')
  return base.endsWith('/') ? `${base}${p}` : `${base}/${p}`
}
