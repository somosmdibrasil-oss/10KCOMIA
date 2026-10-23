import { Check } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const items = [
  'Treinamento sobre IA',
  'Estratégias para criação de conteúdo',
  'Criação de influencers de IA',
  'Conteúdo para TikTok',
  'Estratégias relacionadas ao TikTok Shop',
  'Ideias para monetização',
  'Aplicações para negócios',
  'Estratégias para prestação de serviços',
  'Criação de sites profissionais do zero com IA',
  'Publicação e páginas online sem saber programar',
  'Landing pages e lojas virtuais de alta conversão',
  'Como precificar e vender sites para clientes',
]

export function Deliverables() {
  return (
    <section className="bg-white px-5 py-20 text-ink">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Eyebrow>O que você recebe</Eyebrow>
          <h2 className="mt-4 font-display text-[2.1rem] font-black uppercase leading-[0.95] tracking-tighter text-balance sm:text-5xl">
            Tudo isso <span className="text-brand">incluído.</span>
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal as="li" key={item} delay={(i % 4) * 60}>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-[0_12px_30px_-18px_rgb(11_11_12/0.35)] transition-colors hover:border-brand/40">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-brand">
                  <Check className="size-4" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="font-semibold leading-snug">{item}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
