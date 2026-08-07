/**
 * Utilities for formatting content metadata.
 */

/**
 * Format a filename or URL-safe segment.
 */
export function encodeAssetPath(subjectSlug, filename) {
  return `/assets/${subjectSlug}/${encodeURIComponent(filename)}`
}

/**
 * Human-readable size passthrough. Content.json already stores a display
 * string ("4.2 MB", "320 KB"); this helper keeps the format consistent
 * if someone stores raw bytes as a number instead.
 */
export function formatSize(size) {
  if (typeof size === 'string') return size
  if (typeof size !== 'number' || !Number.isFinite(size)) return ''
  const kb = size / 1024
  if (kb < 1024) return `${kb.toFixed(kb < 10 ? 1 : 0)} KB`
  const mb = kb / 1024
  return `${mb.toFixed(mb < 10 ? 1 : 0)} MB`
}

/**
 * Available deliverable types, in preferred display order.
 */
export const FILE_TYPE_ORDER = [
  'Quick Revision Slides',
  'Mindmap',
  'Cheatsheet',
  'Worksheet',
  'Solutions Key',
]

export function sortFilesByType(files) {
  const index = (type) => {
    const idx = FILE_TYPE_ORDER.indexOf(type)
    return idx === -1 ? FILE_TYPE_ORDER.length : idx
  }
  return [...files].sort((a, b) => index(a.type) - index(b.type))
}
