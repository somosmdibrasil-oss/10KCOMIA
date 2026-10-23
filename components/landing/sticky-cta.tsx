'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('topo')
    const offer = document.getElementById('oferta')
    if (!hero) return

    let pastHero = false
    let offerInView = false
    const update = () => setVisible(pastHero && !offerInView)

    const heroObserver = new IntersectionObserver(([entry]) => {
      pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0
      update()
    })
    const offerObserver = new IntersectionObserver(
      ([entry]) => {
        offerInView = entry.isIntersecting
        update()
      },
      { threshold: 0.35 },
    )
    heroObserver.observe(hero)
    if (offer) offerObserver.observe(offer)
    return () => {
      heroObserver.disconnect()
      offerObserver.disconnect()
    }
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 transition-all duration-300 lg:hidden',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0',
      )}
      aria-hidden={!visible}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 to-transparent" aria-hidden="true" />
      <a
        href="#oferta"
        tabIndex={visible ? 0 : -1}
        className="btn-shine relative flex min-h-14 items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-b from-[#ff2a35] to-brand px-5 font-display text-base font-black uppercase tracking-tight text-white shadow-brand active:scale-[0.98]"
      >
        <span className="relative z-10">Quero o Treinamento Completo — 12x de R$ 10,33</span>
        <ArrowRight className="relative z-10 size-5" aria-hidden="true" />
      </a>
    </div>
  )
}
