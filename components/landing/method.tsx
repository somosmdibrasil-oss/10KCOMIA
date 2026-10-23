import { Coins, Lightbulb, Send, WandSparkles } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const steps = [
  { icon: Lightbulb, title: 'Ideia', text: 'Aprenda a encontrar ideias e identificar tendências.' },
  { icon: WandSparkles, title: 'Criação', text: 'Use IA para transformar a ideia em conteúdo.' },
  { icon: Send, title: 'Publicação', text: 'Entenda como adaptar e publicar o conteúdo nas redes.' },
  {
    icon: Coins,
    title: 'Monetização',
    text: 'Conheça possibilidades de monetização através de produtos, serviços, TikTok Shop e criação de conteúdo.',
  },
]

export function Method() {
  return (
    <section id="metodo" className="bg-white px-5 py-20 text-ink">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <Eyebrow>Método / como funciona</Eyebrow>
          <h2 className="mt-4 font-display text-[2.6rem] font-black uppercase leading-[0.9] tracking-tighter sm:text-6xl">
            Do zero <span className="text-brand">ao conteúdo.</span>
          </h2>
        </Reveal>

        <ol className="relative mt-12">
          <span
            className="absolute bottom-6 left-[27px] top-6 w-[3px] rounded-full bg-gradient-to-b from-brand via-brand to-brand-deep shadow-[0_0_20px_rgb(229_9_20/0.6)]"
            aria-hidden="true"
          />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 110} className="relative flex gap-5 pb-8 last:pb-0">
              <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand font-display text-lg font-black text-white shadow-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="shadow-deep flex-1 rounded-3xl border border-border bg-white p-5">
                <div className="flex items-center gap-2">
                  <Icon className="size-4 text-brand" aria-hidden="true" />
                  <h3 className="font-display text-xl font-black uppercase tracking-tight">{title}</h3>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
