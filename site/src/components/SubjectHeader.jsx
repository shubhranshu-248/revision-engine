import SubjectIcon from './SubjectIcon'

const PALETTE = {
  physics: {
    iconBg: 'bg-gradient-to-br from-violet-100 to-violet-50',
    iconRing: 'ring-violet-200/60',
    iconText: 'text-violet-600',
    stripe: 'from-violet-500 to-fuchsia-500',
    glow: 'from-violet-500/15',
    label: 'text-violet-600',
  },
  chemistry: {
    iconBg: 'bg-gradient-to-br from-red-100 to-red-50',
    iconRing: 'ring-red-200/60',
    iconText: 'text-red-600',
    stripe: 'from-red-500 to-orange-500',
    glow: 'from-red-500/15',
    label: 'text-red-600',
  },
  mathematics: {
    iconBg: 'bg-gradient-to-br from-blue-100 to-blue-50',
    iconRing: 'ring-blue-200/60',
    iconText: 'text-blue-600',
    stripe: 'from-blue-500 to-cyan-500',
    glow: 'from-blue-500/15',
    label: 'text-blue-600',
  },
  biology: {
    iconBg: 'bg-gradient-to-br from-emerald-100 to-emerald-50',
    iconRing: 'ring-emerald-200/60',
    iconText: 'text-emerald-600',
    stripe: 'from-emerald-500 to-teal-500',
    glow: 'from-emerald-500/15',
    label: 'text-emerald-600',
  },
  'social-science': {
    iconBg: 'bg-gradient-to-br from-amber-100 to-amber-50',
    iconRing: 'ring-amber-200/60',
    iconText: 'text-amber-600',
    stripe: 'from-amber-500 to-yellow-500',
    glow: 'from-amber-500/15',
    label: 'text-amber-600',
  },
}

export default function SubjectHeader({ subject, meta }) {
  const p = PALETTE[subject.slug] || PALETTE.mathematics
  return (
    <section className="relative mb-12 overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-card md:p-10">
      {/* Stripe */}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${p.stripe}`}
      />
      {/* Corner glow */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${p.glow} to-transparent blur-3xl`}
      />
      {/* Faint watermark */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -right-6 -bottom-6 ${p.iconText} opacity-[0.06]`}
      >
        <SubjectIcon
          name={subject.icon}
          className="h-56 w-56"
          strokeWidth={1.4}
        />
      </span>

      <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
        <span
          className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl shadow-md ring-1 ${p.iconBg} ${p.iconText} ${p.iconRing}`}
          aria-hidden="true"
        >
          <SubjectIcon
            name={subject.icon}
            className="h-10 w-10"
            strokeWidth={2.25}
          />
        </span>
        <div className="flex-1">
          <p className={`font-mono text-[11px] font-bold uppercase tracking-[0.18em] ${p.label}`}>
            Class 10 &middot; {subject.name}
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold leading-tight tracking-tight text-text-primary md:text-5xl">
            {subject.name}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary">
            {subject.description}
          </p>
          {meta ? <div className="mt-5">{meta}</div> : null}
        </div>
      </div>
    </section>
  )
}
