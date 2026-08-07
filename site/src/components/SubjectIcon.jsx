import { Atom, FlaskConical, Calculator, Leaf, Globe, BookOpen } from 'lucide-react'

const ICONS = {
  Atom,
  FlaskConical,
  Calculator,
  Leaf,
  Globe,
}

/**
 * Resolves a subject icon name (as stored in content.json) to a Lucide
 * icon component. Falls back to a book icon if the name is unknown so
 * the UI never breaks on a typo in the data file.
 */
export default function SubjectIcon({ name, className = 'w-6 h-6', strokeWidth = 2 }) {
  const Icon = ICONS[name] || BookOpen
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}

export { ICONS as SUBJECT_ICONS }
