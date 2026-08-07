/**
 * Rounded-pill badge. `variant` picks a color scheme; `icon` is an
 * optional Lucide component to render on the leading edge.
 */
export default function Badge({
  children,
  variant = 'default',
  icon: Icon,
  className = '',
}) {
  const styles = {
    default: 'bg-badge-bg text-badge-text',
    muted: 'bg-muted-bg text-muted-text',
    success: 'bg-green-50 text-green-700',
    warning: 'bg-amber-50 text-amber-700',
  }[variant]

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${styles} ${className}`}
    >
      {Icon ? <Icon className="h-3 w-3" strokeWidth={2.25} /> : null}
      {children}
    </span>
  )
}
