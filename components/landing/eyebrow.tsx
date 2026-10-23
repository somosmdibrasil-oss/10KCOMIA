import { cn } from '@/lib/utils'

export function Eyebrow({
  children,
  tone = 'red',
  className,
}: {
  children: React.ReactNode
  tone?: 'red' | 'light' | 'dark'
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em]',
        tone === 'red' && 'bg-brand-soft text-brand',
        tone === 'light' && 'glass text-white',
        tone === 'dark' && 'bg-ink text-white',
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {children}
    </span>
  )
}
