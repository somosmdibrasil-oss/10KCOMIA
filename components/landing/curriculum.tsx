import { Briefcase, Flame, Rocket, ShoppingBag, Store, UserRound } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const modules = [
  {
    icon: Flame,
    title: 'Trends virais com IA',
    text: 'Aprenda a criar conteúdos com potencial de viralização e adaptar tendências para o universo da IA.',
  },
  {
    icon: UserRound,
    title: 'Influencers de IA',
    text: 'Crie personagens e influencers virtuais para produzir conteúdos de forma estratégica.',
  },
  {
    icon: ShoppingBag,
    title: 'TikTok Shop',
    text: 'Aprenda como utilizar conteúdos para divulgar produtos e explorar oportunidades dentro do TikTok Shop.',
  },
  {
    icon: Store,
    title: 'Sua própria loja',
    text: 'Use conteúdo criado com IA para divulgar sua loja, produto, marca ou negócio.',
  },
  {
    icon: Briefcase,
    title: 'Venda seu serviço',
    text: 'Aprenda habilidades que também podem ser utilizadas para oferecer criação de conteúdo para empresas.',
  },
  {
    icon: Rocket,
    title: 'Conteúdo em escala',
    text: 'Use IA para acelerar ideias, roteiros, imagens, vídeos e conceitos criativos.',
  },
]

export function Curriculum() {
  return (
    <section id="conteudo" className="relative isolate overflow-hidden bg-ink px-5 py-20 text-white">
      <div className="grid-lines pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-80 w-[140%] -translate-x-1/2 rounded-full bg-brand/30 blur-[100px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Eyebrow tone="light">O que você vai aprender</Eyebrow>
          <h2 className="mt-4 font-display text-[2.1rem] font-black uppercase leading-[0.95] tracking-tighter text-balance sm:text-5xl">
            Não é sobre aprender IA. <span className="text-glow text-brand">É sobre aprender a usar IA.</span>
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 90}>
              <article className="glass group relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-[0_0_50px_-10px_rgb(229_9_20/0.7)] active:border-brand/60 active:shadow-[0_0_50px_-10px_rgb(229_9_20/0.7)]">
                <div
                  className="pointer-events-none absolute inset-x-0 -bottom-20 h-40 bg-brand/0 blur-3xl transition-colors duration-300 group-hover:bg-brand/30"
                  aria-hidden="true"
                />
                <div className="relative flex items-center justify-between">
                  <span className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white/60">
                    Módulo {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-b from-[#ff2a35] to-brand shadow-brand">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="relative mt-8 font-display text-2xl font-black uppercase leading-none tracking-tight">
                  {title}
                </h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-white/65">{text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
