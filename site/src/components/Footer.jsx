import { Github, Linkedin, GraduationCap } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-gradient-to-b from-white to-muted-bg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-slate opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />
      <div className="container-content relative">
        <div className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-bg-hero to-slate-800 text-white shadow-sm ring-1 ring-white/10">
              <GraduationCap className="h-5 w-5" strokeWidth={2.25} />
            </span>
            <p className="font-display text-base font-bold tracking-tight text-text-primary">
              Shubhranshu Sahu
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/shubhranshu-sahu/revio"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-3.5 py-2 text-xs font-semibold text-text-primary shadow-sm transition-all hover:border-slate-300 hover:-translate-y-0.5 hover:bg-muted-bg"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shubhranshu-b07162409"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-3.5 py-2 text-xs font-semibold text-text-primary shadow-sm transition-all hover:border-slate-300 hover:-translate-y-0.5 hover:bg-muted-bg"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="border-t border-border/70">
          <div className="py-5 text-center text-xs text-text-secondary">
            &copy; {year}{' '}
            <span className="font-semibold text-text-primary">
              Rev<span className="text-accent">io</span>
            </span>{' '}
            &middot; CBSE Class 10 revision resources
          </div>
        </div>
      </div>
    </footer>
  )
}
