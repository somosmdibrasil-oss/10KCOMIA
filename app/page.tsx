import { Audience } from '@/components/landing/audience'
import { Authority } from '@/components/landing/authority'
import { Curriculum } from '@/components/landing/curriculum'
import { Deliverables } from '@/components/landing/deliverables'
import { Faq } from '@/components/landing/faq'
import { FinalCta } from '@/components/landing/final-cta'
import { Hero } from '@/components/landing/hero'
import { Method } from '@/components/landing/method'
import { Offer } from '@/components/landing/offer'
import { PatternBreak } from '@/components/landing/pattern-break'
import { SiteHeader } from '@/components/landing/site-header'
import { StickyCta } from '@/components/landing/sticky-cta'
import { Testimonials } from '@/components/landing/testimonials'
import { WebsiteCourse } from '@/components/landing/website-course'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PatternBreak />
        <Curriculum />
        <Audience />
        <Authority />
        <Method />
        <WebsiteCourse />
        <Testimonials />
        <Offer />
        <Deliverables />
        <Faq />
        <FinalCta />
      </main>
      <footer className="bg-ink px-5 pb-28 pt-8 text-center text-xs leading-relaxed text-white/45 lg:pb-8">
        <p>{`© ${new Date().getFullYear()} Treinamento IA & Criação de Sites. Todos os direitos reservados.`}</p>
        <p className="mx-auto mt-2 max-w-md">
          Os resultados variam de pessoa para pessoa e dependem de dedicação e execução. Este treinamento não garante
          ganhos financeiros.
        </p>
      </footer>
      <StickyCta />
    </>
  )
}
