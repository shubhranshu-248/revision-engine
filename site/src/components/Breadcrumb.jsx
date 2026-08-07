import { Link } from 'react-router-dom'
import { ChevronRight, Home as HomeIcon } from 'lucide-react'

/**
 * items: [{ label: string, to?: string }]
 * The first crumb renders with a home icon; the last is the current page.
 */
export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const isFirst = index === 0
          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-1.5"
            >
              {index > 0 && (
                <ChevronRight
                  className="h-3.5 w-3.5 text-text-secondary/50"
                  aria-hidden="true"
                />
              )}
              {isLast || !item.to ? (
                <span
                  className={
                    isLast
                      ? 'font-semibold text-text-primary'
                      : 'text-text-secondary'
                  }
                  aria-current={isLast ? 'page' : undefined}
                >
                  {isFirst && (
                    <HomeIcon className="mr-1 inline h-3.5 w-3.5 -translate-y-px" />
                  )}
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="inline-flex items-center gap-1 text-text-secondary transition-colors hover:text-accent"
                >
                  {isFirst && <HomeIcon className="h-3.5 w-3.5" />}
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
