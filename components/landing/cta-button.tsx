import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// Link de pagamento do Treinamento Completo (R$ 99,90 ou 12x de R$ 10,33)
export const CHECKOUT_HREF = 'https://pay.kiwify.com.br/JsYU5QL' // Adicione/mude o link da Kiwify aqui caso necessário
export const CHECKOUT_HREF_COMBO = CHECKOUT_HREF
export const CHECKOUT_HREF_IA = CHECKOUT_HREF
export const CHECKOUT_HREF_SITES = CHECKOUT_HREF

type CtaButtonProps = {
  children: React.ReactNode
  href?: string
  variant?: 'red' | 'white'
  className?: string
}

export function CtaButton({ children, href = CHECKOUT_HREF, variant = 'red', className }: CtaButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'btn-shine group relative flex min-h-16 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl px-6 py-5 text-center font-display text-base font-black uppercase tracking-tight transition-transform duration-200 active:scale-[0.98] sm:text-lg',
        'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60',
        variant === 'red' && 'bg-gradient-to-b from-[#ff2a35] to-brand text-white shadow-brand hover:brightness-110',
        variant === 'white' &&
          'bg-white text-brand shadow-[0_18px_50px_-12px_rgb(0_0_0/0.45)] hover:bg-brand-soft',
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight
        className="relative z-10 size-5 shrink-0 transition-transform group-hover:translate-x-1"
        aria-hidden="true"
      />
    </a>
  )
}
