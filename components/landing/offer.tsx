import { Check, Flame, Globe, Lock, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { CHECKOUT_HREF, CHECKOUT_HREF_COMBO, CtaButton } from './cta-button'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

export function Offer() {
  const checkoutUrl = CHECKOUT_HREF_COMBO && CHECKOUT_HREF_COMBO !== '#' ? CHECKOUT_HREF_COMBO : CHECKOUT_HREF

  return (
    <section
      id="oferta"
      className="relative isolate scroll-mt-20 overflow-hidden bg-brand-deep px-5 py-24 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,#e50914_0%,transparent_60%)]"
        aria-hidden="true"
      />
      <div className="grid-lines pointer-events-none absolute inset-0 -z-10 opacity-50" aria-hidden="true" />

      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <Eyebrow tone="light">OFERTA ESPECIAL • TUDO INCLUÍDO</Eyebrow>
          <h2 className="mt-4 font-display text-[2.2rem] font-black uppercase leading-[0.95] tracking-tighter text-balance sm:text-5xl lg:text-6xl">
            Acesso ao <span className="text-glow text-white">Treinamento Completo.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80">
            Domine Inteligência Artificial para vídeos virais e aprenda a criar sites profissionais do zero em um único pacote definitivo.
          </p>
        </Reveal>

        {/* CARD ÚNICO DO PACOTE COMPLETO */}
        <Reveal delay={120} className="mx-auto mt-12 max-w-4xl text-left">
          <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-brand bg-gradient-to-b from-[#2a0205] via-ink to-ink p-7 shadow-[0_0_90px_-15px_rgb(229_9_20/0.85)] ring-4 ring-brand/30 backdrop-blur-xl sm:p-10 lg:p-12">
            
            {/* SELO DE DESTAQUE NO TOPO */}
            <div className="absolute -top-0.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-b-2xl bg-gradient-to-r from-[#ff2a35] via-brand to-[#ff5252] px-6 py-2 font-display text-xs font-black uppercase tracking-wider text-white shadow-brand">
              <Sparkles className="size-4 fill-white text-white" aria-hidden="true" />
              MELHOR OFERTA • FORMAÇÃO COMPLETA
            </div>

            <div className="pt-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-brand/20 border border-brand/40 px-3.5 py-1 font-mono text-xs font-black uppercase tracking-wider text-brand">
                  CURSO DE IA + CRIAÇÃO DE SITES
                </span>
                <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-400">
                  Desconto Exclusivo Aplicado
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-black uppercase leading-tight text-white sm:text-4xl">
                Treinamento Completo: IA & Criação de Sites
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                Tudo o que você precisa em um só lugar: aprenda a criar conteúdos virais com influencers virtuais e monetize com vídeos, mais o método prático para criar e vender sites profissionais sem programar.
              </p>

              {/* BLOCO DE PREÇO */}
              <div className="my-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/50 sm:text-sm">
                    De <s className="decoration-brand decoration-2 font-bold text-white/70">R$ 297,00</s> por apenas
                  </p>
                  <span className="rounded-md bg-brand px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-sm">
                    Acesso Vitalício
                  </span>
                </div>

                <div className="mt-3 flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-base font-bold uppercase tracking-wider text-white/70 sm:text-lg">
                      12x de
                    </span>
                    <span className="font-display text-5xl font-black tracking-tight text-brand sm:text-6xl md:text-7xl text-glow">
                      R$ 10,33
                    </span>
                  </div>
                  <div className="mt-2 text-sm font-bold text-white/90 sm:mt-0 sm:text-base">
                    ou <span className="text-white underline decoration-brand decoration-2 font-black">R$ 99,90 à vista</span>
                  </div>
                </div>

                <p className="mt-3 text-xs font-bold text-emerald-400 sm:text-sm">
                  ✓ Pagamento único • Sem mensalidades • Acesso vitalício e ilimitado
                </p>
              </div>

              {/* CONTEÚDO INCLUÍDO EM 2 COLUNAS */}
              <div className="grid gap-6 border-t border-white/10 pt-8 md:grid-cols-2">
                {/* COLUNA 1: IA & VÍDEOS */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-2 text-brand">
                    <Flame className="size-5" />
                    <h4 className="font-display text-sm font-black uppercase tracking-wider text-white">
                      Módulo Vídeos & IA Viral
                    </h4>
                  </div>
                  <ul className="mt-4 space-y-3 text-xs text-white/85 sm:text-sm">
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 shrink-0 text-brand mt-0.5" strokeWidth={3} />
                      <span>Criação de vídeos virais do zero com IA</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 shrink-0 text-brand mt-0.5" strokeWidth={3} />
                      <span>Personagens e influencers virtuais realistas</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 shrink-0 text-brand mt-0.5" strokeWidth={3} />
                      <span>Estratégias de vendas para o TikTok Shop</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 shrink-0 text-brand mt-0.5" strokeWidth={3} />
                      <span>Criação de conteúdo em escala sem aparecer</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 shrink-0 text-brand mt-0.5" strokeWidth={3} />
                      <span>Roteirização magnética e retenção extrema</span>
                    </li>
                  </ul>
                </div>

                {/* COLUNA 2: SITES */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-2 text-brand">
                    <Globe className="size-5" />
                    <h4 className="font-display text-sm font-black uppercase tracking-wider text-white">
                      Módulo Criação de Sites
                    </h4>
                  </div>
                  <ul className="mt-4 space-y-3 text-xs text-white/85 sm:text-sm">
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 shrink-0 text-brand mt-0.5" strokeWidth={3} />
                      <span>Criar sites profissionais do zero com IA</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 shrink-0 text-brand mt-0.5" strokeWidth={3} />
                      <span>100% sem código e sem precisar programar</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 shrink-0 text-brand mt-0.5" strokeWidth={3} />
                      <span>Landing pages e lojas virtuais de alta conversão</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 shrink-0 text-brand mt-0.5" strokeWidth={3} />
                      <span>Publicação rápida e domínio online</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 shrink-0 text-brand mt-0.5" strokeWidth={3} />
                      <span>Como cobrar de R$ 500 a R$ 2.500 por site</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* BÔNUS INCLUSOS */}
              <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs text-white/90 sm:text-sm">
                <p className="flex items-center gap-2 font-bold text-emerald-400">
                  <Sparkles className="size-4" />
                  Bônus Inclusos: Prompts testados + Modelos de sites prontos + Suporte para dúvidas e atualizações contínuas.
                </p>
              </div>

              {/* BOTÃO DE AÇÃO */}
              <div className="mt-8">
                <CtaButton
                  href={checkoutUrl}
                  className="py-5 text-base sm:text-xl font-black shadow-[0_12px_45px_-5px_rgb(229_9_20/0.95)]"
                >
                  QUERO O TREINAMENTO COMPLETO (12x de R$ 10,33)
                </CtaButton>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-white/70">
                  <span className="flex items-center gap-1">
                    <Lock className="size-3.5 text-emerald-400" />
                    Pagamento 100% Seguro
                  </span>
                  <span className="text-white/30">•</span>
                  <span>Acesso imediato no seu e-mail</span>
                  <span className="text-white/30">•</span>
                  <span>7 dias de garantia incondicional</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* GATILHOS DE CONVERSÃO E SEGURANÇA */}
        <Reveal delay={200} className="mt-12">
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="grid gap-4 sm:grid-cols-3 text-center">
              <div className="flex flex-col items-center">
                <Zap className="size-5 text-brand" />
                <span className="mt-1 text-xs font-bold uppercase tracking-wider text-white">Acesso Imediato</span>
                <span className="text-[11px] text-white/60">Receba no e-mail na hora</span>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheck className="size-5 text-emerald-400" />
                <span className="mt-1 text-xs font-bold uppercase tracking-wider text-white">Pagamento Seguro</span>
                <span className="text-[11px] text-white/60">Checkout criptografado</span>
              </div>
              <div className="flex flex-col items-center">
                <Sparkles className="size-5 text-brand" />
                <span className="mt-1 text-xs font-bold uppercase tracking-wider text-white">Pagamento Único</span>
                <span className="text-[11px] text-white/60">Sem nenhuma mensalidade</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

