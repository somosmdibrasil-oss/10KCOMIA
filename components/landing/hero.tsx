import Image from 'next/image'
import { Bot, Flame, Globe, ShieldCheck, ShoppingBag, Zap } from 'lucide-react'
import { CtaButton } from './cta-button'

const floatingChips = [
  { icon: Bot, label: 'Conteúdo com IA', className: 'left-3 top-[18%] sm:left-6', delay: '0s' },
  { icon: Flame, label: 'Trend viral', className: 'right-3 top-[38%] sm:right-6', delay: '1.2s' },
  { icon: ShoppingBag, label: 'TikTok Shop', className: 'left-4 top-[58%] sm:left-8', delay: '2.1s' },
  { icon: Globe, label: 'Sites Profissionais', className: 'right-3 top-[65%] sm:right-7', delay: '2.8s' },
]

export function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden bg-ink text-white">
      <div className="grid-lines pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div
        className="animate-glow pointer-events-none absolute left-1/2 top-40 -z-10 size-[520px] -translate-x-1/2 rounded-full bg-brand/45 blur-[110px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-6 lg:py-16">
        <div className="relative z-10 px-5 pt-24 text-center lg:col-start-1 lg:row-start-1 lg:self-end lg:px-0 lg:pt-16 lg:text-left">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
            <Zap className="size-3.5 fill-brand text-brand" aria-hidden="true" />
            2 Cursos em 1: Vídeos Virais & Criação de Sites
          </span>

          <h1 className="mt-5 font-display text-[3.4rem] font-black uppercase leading-[0.88] tracking-tighter text-balance sm:text-7xl lg:text-8xl">
            <span className="block">10K em uma</span>
            <span className="text-glow block text-brand">semana?</span>
          </h1>
        </div>

        <div className="relative lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:pt-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xl">
            <div
              className="absolute inset-x-8 bottom-10 top-16 rounded-[3rem] bg-brand/40 blur-3xl"
              aria-hidden="true"
            />
            <Image
              src="/images/hero.png"
              alt="Criador de conteúdo em sala neon vermelha com métricas de redes sociais"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover object-top [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_72%,transparent)] lg:rounded-[2rem] lg:[mask-image:none] lg:shadow-[0_40px_120px_-30px_rgb(229_9_20/0.7)]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink lg:rounded-[2rem] lg:from-transparent lg:via-transparent lg:to-ink/70"
              aria-hidden="true"
            />
            <div
              className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink to-transparent lg:hidden"
              aria-hidden="true"
            />

            {floatingChips.map(({ icon: Icon, label, className, delay }) => (
              <div
                key={label}
                className={`glass animate-float absolute flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3 text-xs font-semibold shadow-lg ${className}`}
                style={{ animationDelay: delay }}
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-brand">
                  <Icon className="size-3.5" aria-hidden="true" />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 -mt-28 px-5 pb-14 text-center lg:col-start-1 lg:row-start-2 lg:mt-8 lg:self-start lg:px-0 lg:pb-0 lg:text-left">
          <p className="font-display text-2xl font-extrabold leading-tight tracking-tight text-balance sm:text-3xl">
            Pare de consumir IA.
            <br />
            <span className="text-brand">Aprenda a trabalhar com ela.</span>
          </p>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/75 text-pretty lg:mx-0">
            Descubra como usar Inteligência Artificial para duas grandes oportunidades: criar conteúdos virais, desenvolver influencers de IA e monetizar vídeos, ou aprender a criar sites e landing pages profissionais do zero sem programar para vender para clientes.
          </p>

          <div className="mx-auto mt-7 max-w-md lg:mx-0">
            <CtaButton href="#oferta">Quero aprender IA e Sites agora</CtaButton>
            <p className="mt-4 text-sm text-white/80">
              Acesso completo por apenas{' '}
              <strong className="font-display text-base font-black text-white">R$ 99,90</strong> ou em até{' '}
              <strong className="font-display text-base font-black text-brand">12x de R$ 10,33</strong>
            </p>
            <p className="mt-2 flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-wider text-white/50 lg:justify-start">
              <ShieldCheck className="size-3.5 text-brand" aria-hidden="true" />
              Pagamento único • Acesso imediato • Conteúdo prático
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
