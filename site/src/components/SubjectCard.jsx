import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SubjectIcon from './SubjectIcon'
import Badge from './Badge'
import { availableChapterCount, totalChapterCount } from '../utils/content'

/**
 * Per-subject palette. Every class name here is present in
 * tailwind.config.js so JIT won't drop them. Colors are grouped so we
 * can decorate icon, glow, ring, and gradient background consistently.
 */
const PALETTE = {
  physics: {
    iconBg: 'bg-gradient-to-br from-violet-100 to-violet-50',
    iconRing: 'ring-violet-200/60',
    iconText: 'text-violet-600',
    glow: 'from-violet-500/20 via-fuchsia-400/10',
    stripe: 'from-violet-500 to-fuchsia-500',
    accentText: 'text-violet-600',
  },
  chemistry: {
    iconBg: 'bg-gradient-to-br from-red-100 to-red-50',
    iconRing: 'ring-red-200/60',
    iconText: 'text-red-600',
    glow: 'from-red-500/20 via-orange-400/10',
    stripe: 'from-red-500 to-orange-500',
    accentText: 'text-red-600',
  },
  mathematics: {
    iconBg: 'bg-gradient-to-br from-blue-100 to-blue-50',
    iconRing: 'ring-blue-200/60',
    iconText: 'text-blue-600',
    glow: 'from-blue-500/20 via-cyan-400/10',
    stripe: 'from-blue-500 to-cyan-500',
    accentText: 'text-blue-600',
  },
  biology: {
    iconBg: 'bg-gradient-to-br from-emerald-100 to-emerald-50',
    iconRing: 'ring-emerald-200/60',
    iconText: 'text-emerald-600',
    glow: 'from-emerald-500/20 via-teal-400/10',
    stripe: 'from-emerald-500 to-teal-500',
    accentText: 'text-emerald-600',
  },
  'social-science': {
    iconBg: 'bg-gradient-to-br from-amber-100 to-amber-50',
    iconRing: 'ring-amber-200/60',
    iconText: 'text-amber-600',
    glow: 'from-amber-500/20 via-yellow-400/10',
    stripe: 'from-amber-500 to-yellow-500',
    accentText: 'text-amber-600',
  },
}

export default function SubjectCard({ subject }) {
  const available = availableChapterCount(subject)
  const total = totalChapterCount(subject)
  const p = PALETTE[subject.slug] || PALETTE.mathematics
  const isEmpty = available === 0
  const badgeLabel = isEmpty
    ? 'Coming Soon'
    : `${available} of ${total} chapter${total === 1 ? '' : 's'}`

  return (
    <Link
      to={`/subject/${subject.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-card transition-all duration-300 ease-out-expo hover:-translate-y-1.5 hover:border-slate-300/80 hover:shadow-card-hover"
    >
      {/* Top gradient stripe (always visible, subject color signature) */}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.stripe} opacity-80`}
      />

      {/* Big soft glow that intensifies on hover */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br ${p.glow} to-transparent opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Faint watermark icon in the corner */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -right-2 -bottom-2 ${p.iconText} opacity-[0.06] transition-all duration-500 group-hover:opacity-[0.10] group-hover:-translate-y-1`}
      >
        <SubjectIcon
          name={subject.icon}
          className="h-32 w-32"
          strokeWidth={1.5}
        />
      </span>

      <div className="relative flex items-start justify-between">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ring-1 shadow-sm transition-transform duration-300 group-hover:scale-105 ${p.iconBg} ${p.iconText} ${p.iconRing}`}
        >
          <SubjectIcon name={subject.icon} className="h-7 w-7" strokeWidth={2.25} />
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-text-secondary transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent group-hover:text-white group-hover:rotate-45">
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
        </span>
      </div>

      <h3 className="relative mt-6 font-display text-xl font-bold tracking-tight text-text-primary">
        {subject.name}
      </h3>
      <p className="relative mt-2 line-clamp-3 text-sm leading-relaxed text-text-secondary">
        {subject.description}
      </p>

      <div className="relative mt-6 flex items-center justify-between gap-2 border-t border-border/70 pt-4">
        {isEmpty ? (
          <Badge variant="muted">{badgeLabel}</Badge>
        ) : (
          <Badge>{badgeLabel}</Badge>
        )}
        <span
          className={`text-xs font-semibold ${p.accentText} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        >
          Open &rarr;
        </span>
      </div>
    </Link>
  )
}
