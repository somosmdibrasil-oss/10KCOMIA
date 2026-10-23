import { Quote, Star } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const testimonials = [
  'Esse cara manja muito de IA e me salva quando quero viralizar rápido kkk.',
  'De longe um dos caras mais criativos que já conheci.',
]

export function Testimonials() {
  return (
    <section className="bg-secondary px-5 py-20 text-ink">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Eyebrow>Depoimentos</Eyebrow>
          <h2 className="mt-4 font-display text-[2.1rem] font-black uppercase leading-[0.95] tracking-tighter text-balance sm:text-5xl">
            O que dizem <span className="text-brand">por aí.</span>
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {testimonials.map((quote, i) => (
            <Reveal as="li" key={quote} delay={i * 120}>
              <figure className="shadow-deep relative h-full overflow-hidden rounded-3xl bg-white p-6">
                <Quote className="absolute right-5 top-5 size-14 text-brand/10" aria-hidden="true" />
                <div className="flex gap-0.5" role="img" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-brand text-brand" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 font-display text-xl font-extrabold leading-snug tracking-tight text-pretty">
                  {`"${quote}"`}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <span
                    className="size-10 rounded-full bg-[conic-gradient(from_120deg,#e50914,#0b0b0c,#ff6b72,#e50914)]"
                    aria-hidden="true"
                  />
                  <span className="text-sm">
                    <span className="block font-semibold">Depoimento de aluno</span>
                    <span className="text-muted-foreground">Comentário recebido</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
