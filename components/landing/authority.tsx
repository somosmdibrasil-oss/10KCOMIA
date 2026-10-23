import { Eye, Heart, MessageCircle, Share2, TrendingUp, UserPlus } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const orbitIcons = [
  { icon: Eye, label: 'Visualizações', className: 'left-0 top-6' },
  { icon: Heart, label: 'Curtidas', className: 'right-0 top-2' },
  { icon: Share2, label: 'Compartilhamentos', className: 'left-2 bottom-10' },
  { icon: MessageCircle, label: 'Comentários', className: 'right-2 bottom-4' },
]

const bars = [22, 30, 26, 42, 38, 55, 50, 68, 74, 88, 100]

export function Authority() {
  return (
    <section className="relative isolate overflow-hidden bg-ink px-5 py-20 text-white">
      <div
        className="animate-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/35 blur-[120px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-5xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
        <Reveal>
          <Eyebrow tone="light">Prova & autoridade</Eyebrow>
          <h2 className="mt-4 font-display text-[2.1rem] font-black uppercase leading-[0.95] tracking-tighter text-balance sm:text-5xl">
            Mais de meio <span className="text-glow text-brand">bilhão</span> de visualizações com conteúdos de IA.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 text-pretty">
            Eu passei por testes, tendências, ferramentas, erros e acertos até entender o que realmente funciona para
            criar conteúdos usando Inteligência Artificial.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-12 lg:mt-0">
          <div className="relative mx-auto max-w-sm px-4 py-10">
            {orbitIcons.map(({ icon: Icon, label, className }, i) => (
              <span
                key={label}
                className={`glass animate-float absolute z-10 flex size-11 items-center justify-center rounded-2xl ${className}`}
                style={{ animationDelay: `${i * 0.7}s` }}
              >
                <Icon className="size-5 text-brand" aria-hidden="true" />
                <span className="sr-only">{label}</span>
              </span>
            ))}

            <div className="glass relative overflow-hidden rounded-[2rem] p-7 shadow-[0_0_80px_-20px_rgb(229_9_20/0.8)]">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-white/50">
                <span>Total acumulado</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <TrendingUp className="size-3.5" aria-hidden="true" />
                  Crescendo
                </span>
              </div>
              <p className="mt-4 font-display text-6xl font-black leading-none tracking-tighter sm:text-7xl">
                +500
                <span className="block text-brand">milhões</span>
              </p>
              <p className="mt-2 font-display text-sm font-extrabold uppercase tracking-[0.3em] text-white/80">
                Visualizações
              </p>

              <div className="mt-7 flex h-20 items-end gap-1.5" aria-hidden="true">
                {bars.map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-brand-deep to-brand"
                    style={{ height: `${h}%`, opacity: 0.45 + (i / bars.length) * 0.55 }}
                  />
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-2xl bg-white/5 p-3 text-xs text-white/70">
                <span className="flex size-7 items-center justify-center rounded-full bg-brand">
                  <UserPlus className="size-3.5 text-white" aria-hidden="true" />
                </span>
                Crescimento de seguidores com conteúdo de IA
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
