import { Link, NavLink } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'

const navLinks = [{ to: '/', label: 'Home', end: true }]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-white/80 backdrop-blur-md">
      <div className="container-content flex h-16 items-center justify-between">
        <Link
          to="/"
          className="group flex items-center gap-2.5 text-text-primary"
          aria-label="Revio home"
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-bg-hero via-slate-800 to-slate-900 text-white shadow-md ring-1 ring-white/10 transition-transform duration-200 group-hover:scale-105">
            <GraduationCap className="h-5 w-5" strokeWidth={2.25} />
            <span className="absolute inset-x-0 -top-1 h-8 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">
            Rev<span className="text-accent">io</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-text-primary'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-[2px] h-0.5 rounded-full bg-accent" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
