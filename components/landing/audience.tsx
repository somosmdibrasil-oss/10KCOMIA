import { Bot, Briefcase, Clock, Smartphone, Store, Wallet } from 'lucide-react'
import { Reveal } from './reveal'

const profiles = [
  { icon: Clock, title: 'Cansou da rotina CLT', text: 'Quer desenvolver uma habilidade digital e explorar novas possibilidades.' },
  { icon: Smartphone, title: 'Quer viralizar', text: 'Quer entender como criar conteúdos que chamem atenção nas redes.' },
  { icon: Wallet, title: 'Quer uma renda extra', text: 'Quer aprender habilidades que podem ser utilizadas em diferentes projetos.' },
  { icon: Bot, title: 'Quer dominar IA', text: 'Está cansado de apenas acompanhar as novidades e quer começar a produzir.' },
  { icon: Store, title: 'Tem um negócio', text: 'Quer usar conteúdo e IA para divulgar seus próprios produtos ou serviços.' },
  {
    icon: Briefcase,
    title: 'Quer prestar serviços',
    text: 'Quer transformar conhecimento em uma habilidade que pode oferecer para outras empresas.',
  },
]

export function Audience() {
  return (
    <section className="relative isolate overflow-hidden bg-brand px-5 py-20 text-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#ff3b45_0%,transparent_60%),radial-gradient(ellipse_at_bottom,#7a0209_0%,transparent_65%)]"
        aria-hidden="true"
      />
      <div className="grid-lines pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="size-1.5 rounded-full bg-white" aria-hidden="true" />
            Para quem é?
          </span>
          <h2 className="mt-4 font-display text-[2.4rem] font-black uppercase leading-[0.92] tracking-tighter text-balance sm:text-6xl">
            Esse treinamento é para você se...
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 80}>
              <article className="flex h-full gap-4 rounded-3xl bg-white p-5 text-ink shadow-[0_24px_50px_-20px_rgb(60_0_4/0.7)] transition-transform duration-300 hover:-translate-y-1">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-black uppercase leading-tight tracking-tight">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
