import { Ban, Coins, WandSparkles } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const cards = [
  {
    icon: Ban,
    title: 'Parar de consumir',
    text: 'Chega de passar horas vendo vídeos sobre IA sem colocar nada em prática.',
  },
  {
    icon: WandSparkles,
    title: 'Começar a criar',
    text: 'Aprenda a transformar IA em conteúdo, ideias, personagens e oportunidades.',
  },
  {
    icon: Coins,
    title: 'Aprender a monetizar',
    text: 'Descubra diferentes maneiras de transformar suas habilidades em possibilidades de renda.',
  },
]

export function PatternBreak() {
  return (
    <section className="relative bg-white px-5 py-20 text-ink">
      <div className="grid-lines-dark pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <Eyebrow>Quebre o padrão</Eyebrow>
          <h2 className="mt-4 font-display text-[2.1rem] font-black uppercase leading-[0.95] tracking-tighter text-balance sm:text-5xl">
            Você não precisa de mais uma IA. <span className="text-brand">Precisa aprender o que fazer com ela.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            Todo dia surgem novas ferramentas de Inteligência Artificial. Mas consumir ferramentas não significa saber
            utilizá-las para criar algo que chama atenção.
          </p>
        </Reveal>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 100}>
              <article className="shadow-deep group relative h-full overflow-hidden rounded-3xl border border-border bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
                <div
                  className="absolute -right-10 -top-10 size-32 rounded-full bg-brand/10 blur-2xl transition-opacity group-hover:bg-brand/25"
                  aria-hidden="true"
                />
                <div className="relative flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-ink text-white">
                    <Icon className="size-5 text-brand" aria-hidden="true" />
                  </span>
                  <span className="font-display text-4xl font-black text-ink/10">0{i + 1}</span>
                </div>
                <h3 className="relative mt-6 font-display text-xl font-black uppercase tracking-tight">{title}</h3>
                <p className="relative mt-2 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
                <div className="relative mt-5 h-1 w-10 rounded-full bg-brand" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
