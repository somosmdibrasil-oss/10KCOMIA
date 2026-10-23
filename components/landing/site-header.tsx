import { Globe, Sparkles } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl !bg-ink/90 px-4 py-2.5 shadow-[0_10px_40px_-10px_rgb(0_0_0/0.6)]">
        <a
          href="#topo"
          className="flex items-center gap-2 font-display text-sm font-black uppercase tracking-tight text-white"
        >
          <span className="flex size-7 items-center justify-center rounded-lg bg-brand shadow-brand">
            <Sparkles className="size-4" aria-hidden="true" />
          </span>
          Treinamento <span className="text-brand">IA</span>
        </a>

        {/* Links de Navegação */}
        <nav className="hidden items-center gap-6 text-xs font-bold uppercase tracking-wider text-white/70 md:flex">
          <a href="#conteudo" className="transition-colors hover:text-white">
            Vídeos com IA
          </a>
          <a
            href="#curso-sites"
            className="flex items-center gap-1.5 text-white transition-colors hover:text-brand"
          >
            <span className="inline-block size-1.5 rounded-full bg-brand" />
            Criação de Sites
          </a>
          <a href="#oferta" className="transition-colors hover:text-white">
            Planos & Preços
          </a>
          <a href="#faq" className="transition-colors hover:text-white">
            Dúvidas
          </a>
        </nav>

        {/* Acesso rápido / Preço */}
        <div className="flex items-center gap-2">
          <a
            href="#curso-sites"
            className="hidden items-center gap-1 rounded-xl border border-white/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-tight text-white/90 transition-colors hover:border-brand hover:text-white sm:flex"
          >
            <Globe className="size-3 text-brand" />
            Criação de Sites
          </a>
          <a
            href="#oferta"
            className="rounded-xl bg-white px-3.5 py-2 text-xs font-black uppercase tracking-tight text-brand transition-colors hover:bg-brand-soft"
          >
            12x de R$ 10,33
          </a>
        </div>
      </div>
    </header>
  )
}
