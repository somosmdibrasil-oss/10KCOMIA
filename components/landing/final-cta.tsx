import Image from 'next/image'
import { CtaButton } from './cta-button'
import { Reveal } from './reveal'

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink px-5 pb-32 pt-24 text-white lg:pb-24">
      <Image
        src="/images/hero.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[50%_20%] opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/70 to-brand-deep" aria-hidden="true" />
      <div
        className="animate-glow pointer-events-none absolute bottom-0 left-1/2 -z-10 h-72 w-[120%] -translate-x-1/2 rounded-full bg-brand/50 blur-[100px]"
        aria-hidden="true"
      />

      <Reveal className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-[2.8rem] font-black uppercase leading-[0.88] tracking-tighter sm:text-7xl">
          Pare de apenas assistir.
          <span className="text-glow block text-brand">Comece a criar.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/80 text-pretty">
          Você já viu o que a Inteligência Artificial consegue fazer. Agora é hora de dominar a criação de conteúdos virais e a criação de sites profissionais.
        </p>
        <div className="mt-8">
          <CtaButton href="#oferta">Quero o Treinamento Completo por R$ 99,90</CtaButton>
        </div>
        <p className="mt-4 text-sm text-white/60">Acesso imediato • Em até 12x de R$ 10,33 • Pagamento único sem mensalidades.</p>
      </Reveal>
    </section>
  )
}
