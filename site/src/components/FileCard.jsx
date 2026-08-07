import {
  Presentation,
  Network,
  BookMarked,
  FileText,
  CheckSquare,
  Download,
} from 'lucide-react'
import { encodeAssetPath, formatSize } from '../utils/format'

const TYPE_META = {
  'Quick Revision Slides': {
    icon: Presentation,
    iconBg: 'bg-gradient-to-br from-orange-100 to-orange-50',
    iconText: 'text-orange-600',
    iconRing: 'ring-orange-200/60',
    stripe: 'from-orange-500 to-amber-500',
  },
  Mindmap: {
    icon: Network,
    iconBg: 'bg-gradient-to-br from-violet-100 to-violet-50',
    iconText: 'text-violet-600',
    iconRing: 'ring-violet-200/60',
    stripe: 'from-violet-500 to-fuchsia-500',
  },
  Cheatsheet: {
    icon: BookMarked,
    iconBg: 'bg-gradient-to-br from-cyan-100 to-cyan-50',
    iconText: 'text-cyan-600',
    iconRing: 'ring-cyan-200/60',
    stripe: 'from-cyan-500 to-blue-500',
  },
  Worksheet: {
    icon: FileText,
    iconBg: 'bg-gradient-to-br from-blue-100 to-blue-50',
    iconText: 'text-blue-600',
    iconRing: 'ring-blue-200/60',
    stripe: 'from-blue-500 to-indigo-500',
  },
  'Solutions Key': {
    icon: CheckSquare,
    iconBg: 'bg-gradient-to-br from-emerald-100 to-emerald-50',
    iconText: 'text-emerald-600',
    iconRing: 'ring-emerald-200/60',
    stripe: 'from-emerald-500 to-teal-500',
  },
}

const FORMAT_STYLES = {
  pptx: 'bg-orange-50 text-orange-700 ring-orange-200',
  docx: 'bg-blue-50 text-blue-700 ring-blue-200',
  zip: 'bg-slate-100 text-slate-700 ring-slate-300',
}

export default function FileCard({ file, subjectSlug }) {
  const meta = TYPE_META[file.type] || TYPE_META.Worksheet
  const Icon = meta.icon
  const href = encodeAssetPath(subjectSlug, file.filename)
  const formatClass = FORMAT_STYLES[file.format] || FORMAT_STYLES.zip

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 ease-out-expo hover:-translate-y-1.5 hover:border-slate-300/80 hover:shadow-card-hover">
      {/* Top stripe */}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${meta.stripe} opacity-90`}
      />

      <div className="flex items-start justify-between gap-3">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-sm ring-1 transition-transform duration-300 group-hover:scale-105 ${meta.iconBg} ${meta.iconText} ${meta.iconRing}`}
          aria-hidden="true"
        >
          <Icon className="h-6 w-6" strokeWidth={2.25} />
        </span>
        <span
          className={`inline-flex items-center rounded-lg px-2 py-1 font-mono text-[11px] font-bold uppercase tracking-wide ring-1 ring-inset ${formatClass}`}
        >
          .{file.format}
        </span>
      </div>

      <h3 className="mt-5 font-display text-lg font-bold leading-tight text-text-primary">
        {file.type}
      </h3>
      <p className="mt-1.5 text-xs text-text-secondary">
        {formatSize(file.size) || 'Static download'}
      </p>

      <a
        href={href}
        download
        className="btn-primary mt-6 w-full"
        aria-label={`Download ${file.type} (${file.format.toUpperCase()})`}
      >
        <Download className="h-4 w-4" strokeWidth={2.25} />
        Download
      </a>
    </article>
  )
}
