import { 
  CheckCircle2, 
  Code2, 
  DollarSign, 
  Globe, 
  Laptop, 
  Layers, 
  Rocket, 
  ShieldCheck, 
  ShoppingBag, 
  Sparkles, 
  TrendingUp, 
  Users 
} from 'lucide-react'
import { CtaButton, CHECKOUT_HREF_SITES } from './cta-button'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const benefits = [
  {
    icon: Code2,
    badge: 'Zero Código',
    title: 'Criar site do zero com IA',
    description: 'Aprenda a construir sites completos, modernos e de alto padrão sem escrever uma única linha de código e sem precisar saber programar.',
  },
  {
    icon: Globe,
    badge: 'Passo a Passo',
    title: 'Publicar online em minutos',
    description: 'Domínio, hospedagem e publicação na nuvem explicados de forma simples e direta para colocar seu site no ar no mesmo dia.',
  },
  {
    icon: Users,
    badge: 'Alta Demanda',
    title: 'Criar sites para vender para clientes',
    description: 'Todo negócio local precisa de um site. Aprenda como oferecer e fechar contratos de criação de sites com comércios, clínicas e empresas.',
  },
  {
    icon: ShoppingBag,
    badge: 'Conversão',
    title: 'Landing Pages e Lojas Virtuais',
    description: 'Crie páginas de captura que convertem visitantes em clientes e estruture vitrines e lojas para você ou para terceiros.',
  },
  {
    icon: DollarSign,
    badge: 'Precificação',
    title: 'Como cobrar por cada site',
    description: 'Descubra como precificar seus projetos de R$ 500 até R$ 2.500+ por site e ainda criar planos recorrentes de manutenção mensal.',
  },
  {
    icon: Rocket,
    badge: 'Velocidade',
    title: 'Entrega rápida com Inteligência Artificial',
    description: 'Use prompts testados e ferramentas de IA para produzir em 2 horas o que desenvolvedores tradicionais levam semanas para entregar.',
  },
]

const revenueBars = [35, 48, 42, 60, 72, 68, 85, 92, 100]

export function WebsiteCourse() {
  const targetHref = CHECKOUT_HREF_SITES && CHECKOUT_HREF_SITES !== '#' ? CHECKOUT_HREF_SITES : '#oferta'

  return (
    <section id="curso-sites" className="relative isolate scroll-mt-20 overflow-hidden bg-ink px-5 py-24 text-white">
      {/* Background Glows & Grid */}
      <div className="grid-lines pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div
        className="animate-glow pointer-events-none absolute -top-24 right-1/4 -z-10 size-[500px] rounded-full bg-brand/35 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-1/4 -z-10 size-[500px] rounded-full bg-brand-deep/50 blur-[130px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho da Seção */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow tone="light">NOVO TREINAMENTO EXCLUSIVO</Eyebrow>
            <h2 className="mt-4 font-display text-[2.4rem] font-black uppercase leading-[0.92] tracking-tighter sm:text-6xl lg:text-7xl">
              Curso de <span className="text-glow text-brand">Criação de Sites</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Aprenda a criar sites profissionais de alto nível do absoluto zero,{' '}
              <strong className="text-white underline decoration-brand decoration-2 underline-offset-4">
                sem precisar saber programar
              </strong>
              , usando o verdadeiro poder da Inteligência Artificial.
            </p>
          </Reveal>
        </div>

        {/* PROVA SOCIAL EM DESTAQUE (Mais de 200 mil em vendas) */}
        <Reveal delay={100} className="mt-14">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/20 bg-gradient-to-br from-white/10 via-ink/90 to-brand-deep/30 p-7 shadow-[0_20px_80px_-20px_rgb(229_9_20/0.5)] backdrop-blur-xl sm:p-10">
            <div
              className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-brand/25 blur-3xl"
              aria-hidden="true"
            />

            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-emerald-400">
                  <TrendingUp className="size-4" aria-hidden="true" />
                  Prova Social Comprovada
                </span>

                <div className="mt-4">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/60">
                    Faturamento Real Validado
                  </span>
                  <p className="text-glow font-display text-[2.8rem] font-black leading-none tracking-tighter text-white sm:text-6xl md:text-7xl">
                    +<span className="text-brand">200 MIL</span>
                  </p>
                  <p className="mt-2 font-display text-xl font-extrabold uppercase tracking-tight text-white/90 sm:text-2xl">
                    em vendas de sites só neste ano
                  </p>
                </div>

                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70">
                  Criar sites com IA é hoje um dos mercados mais rentáveis da internet. Negócios físicos e digitais pagam todos os dias por páginas modernas e rápidas.
                </p>
              </div>

              {/* Card visual de validação */}
              <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs uppercase tracking-wider text-white/60">
                  <span className="flex items-center gap-1.5 font-bold text-white">
                    <Laptop className="size-4 text-brand" />
                    Mercado Ativo
                  </span>
                  <span className="text-emerald-400 font-bold">+100% Execução com IA</span>
                </div>

                {/* Gráfico visual */}
                <div className="mt-4 flex h-16 items-end gap-2" aria-hidden="true">
                  {revenueBars.map((height, idx) => (
                    <span
                      key={idx}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-brand-deep to-brand transition-all duration-500"
                      style={{ height: `${height}%`, opacity: 0.5 + (idx / revenueBars.length) * 0.5 }}
                    />
                  ))}
                </div>

                <div className="mt-4 space-y-2 text-xs text-white/75">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-brand" />
                    <span>Sem mensalidades pesadas ou equipes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-brand" />
                    <span>Sites entregues em tempo recorde</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-brand" />
                    <span>Alta margem de lucro por projeto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* GRID DE BENEFÍCIOS / O QUE VAI APRENDER */}
        <div className="mt-16">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-white/70">
              <Sparkles className="size-3 text-brand" />
              Conteúdo Prático & Estratégico
            </span>
            <h3 className="mt-3 font-display text-2xl font-black uppercase tracking-tight sm:text-4xl">
              O Que Você Vai Aprender no Curso de Sites
            </h3>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, idx) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={(idx % 3) * 80}>
                  <div className="glass group relative flex h-full flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-[0_15px_40px_-15px_rgb(229_9_20/0.5)]">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-white/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/60">
                          {item.badge}
                        </span>
                        <div className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-b from-[#ff2a35] to-brand text-white shadow-brand">
                          <Icon className="size-5" aria-hidden="true" />
                        </div>
                      </div>
                      <h4 className="mt-6 font-display text-xl font-black uppercase leading-tight tracking-tight text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2.5 text-sm leading-relaxed text-white/70">{item.description}</p>
                    </div>

                    <div className="mt-6 flex items-center gap-1.5 border-t border-white/10 pt-4 text-[12px] font-semibold text-brand">
                      <Layers className="size-3.5" />
                      <span>Módulo 100% prático</span>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* BOTÃO DE COMPRA CHAMATIVO */}
        <Reveal delay={150} className="mx-auto mt-14 max-w-md text-center">
          <CtaButton href={targetHref}>
            Quero aprender a criar sites
          </CtaButton>
          <p className="mt-3 text-xs uppercase tracking-wider text-white/60">
            Acesso imediato • Do zero ao primeiro site no ar
          </p>
        </Reveal>
      </div>
    </section>
  )
}
