import { Link } from 'react-router-dom'
import { Compass, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="container-content flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
      <div className="relative">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -m-8 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-3xl"
        />
        <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 text-accent ring-1 ring-blue-200/60 shadow-md">
          <Compass className="h-8 w-8" strokeWidth={2.25} />
        </span>
      </div>
      <p className="mt-8 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
        404 &middot; Not found
      </p>
      <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
        This page took a wrong turn.
      </h1>
      <p className="mt-4 max-w-md text-sm text-text-secondary md:text-base">
        The link you followed may be outdated, or the chapter you are looking
        for hasn&rsquo;t been uploaded yet.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </section>
  )
}
