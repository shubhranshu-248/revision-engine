import { Link } from 'react-router-dom'
import {
  ChevronRight,
  Presentation,
  Network,
  BookMarked,
  FileText,
  CheckSquare,
  Clock,
} from 'lucide-react'
import Badge from './Badge'

const TYPE_ICON = {
  'Quick Revision Slides': Presentation,
  Mindmap: Network,
  Cheatsheet: BookMarked,
  Worksheet: FileText,
  'Solutions Key': CheckSquare,
}

function FileTypeChip({ type }) {
  const Icon = TYPE_ICON[type] || FileText
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-2 py-1 text-[11px] font-medium text-text-secondary shadow-sm transition-colors hover:border-accent/40 hover:text-text-primary"
      title={type}
    >
      <Icon className="h-3 w-3 text-accent" strokeWidth={2.25} />
      <span className="hidden sm:inline">{type}</span>
    </span>
  )
}

export default function ChapterCard({ chapter, subjectSlug }) {
  const isAvailable = chapter.status === 'available'

  const inner = (
    <div className="flex items-start gap-4">
      <span
        className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold shadow-sm ring-1 transition-all duration-300 ${
          isAvailable
            ? 'bg-gradient-to-br from-blue-50 to-blue-100 text-accent ring-blue-200/60 group-hover:scale-105'
            : 'bg-muted-bg text-muted-text ring-slate-200'
        }`}
      >
        {String(chapter.number).padStart(2, '0')}
      </span>
      <div className="min-w-0 flex-1">
        <h3
          className={`text-base font-semibold leading-snug transition-colors ${
            isAvailable
              ? 'text-text-primary group-hover:text-accent'
              : 'text-text-primary'
          }`}
        >
          {chapter.name}
        </h3>
        {isAvailable ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {chapter.files.map((f) => (
              <FileTypeChip key={f.filename} type={f.type} />
            ))}
          </div>
        ) : (
          <div className="mt-3">
            <Badge variant="muted" icon={Clock}>
              Coming Soon
            </Badge>
          </div>
        )}
      </div>
      {isAvailable && (
        <ChevronRight
          className="mt-2 h-5 w-5 shrink-0 text-text-secondary/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
          aria-hidden="true"
        />
      )}
    </div>
  )

  if (isAvailable) {
    return (
      <Link
        to={`/subject/${subjectSlug}/chapter/${chapter.slug}`}
        className="group relative block overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-card transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-1 origin-top scale-y-0 rounded-r-full bg-gradient-to-b from-accent to-violet-500 transition-transform duration-300 ease-out-expo group-hover:scale-y-100"
        />
        {inner}
      </Link>
    )
  }

  return (
    <div
      className="relative rounded-2xl border border-dashed border-border bg-white/40 p-5 opacity-70"
      aria-disabled="true"
      title="Materials coming soon"
    >
      {inner}
    </div>
  )
}
