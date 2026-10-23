import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const faqs = [
  {
    q: 'Preciso saber programar ou ter experiência técnica para criar sites?',
    a: 'Não! O Curso de Criação de Sites ensina o método prático utilizando Inteligência Artificial, onde você constrói sites profissionais do zero sem escrever nenhuma linha de código e sem precisar de computador potente.',
  },
  {
    q: 'Preciso saber usar IA para começar?',
    a: 'Não. Os treinamentos começam do absoluto básico e mostram na prática, passo a passo, como usar as melhores ferramentas do mercado de forma simples e intuitiva.',
  },
  {
    q: 'Consigo vender sites para clientes e empresas mesmo sendo iniciante?',
    a: 'Com certeza. Há milhares de comércios locais, profissionais autônomos e clínicas que necessitam de um site profissional. No treinamento, ensinamos como estruturar, publicar e como precificar seus serviços entre R$ 500 e R$ 2.500+ por projeto.',
  },
  {
    q: 'Preciso aparecer nos vídeos para criar conteúdo com IA?',
    a: 'Não. No Curso de IA, você aprende a criar personagens virtuais e influencers de IA para produzir e monetizar conteúdo sem precisar mostrar o rosto.',
  },
  {
    q: 'Qual é o valor do Treinamento Completo e as formas de pagamento?',
    a: 'O Treinamento Completo está disponível pelo valor promocional de R$ 99,90 à vista (PIX ou cartão), ou podendo dividir em até 12x de R$ 10,33 no cartão de crédito. Você leva os dois métodos completos com todos os bônus e atualizações.',
  },
  {
    q: 'O pagamento é único? Tem alguma mensalidade?',
    a: 'Sim, o pagamento é 100% único! Não existe nenhuma mensalidade, anuidade ou cobrança surpresa. Você tem acesso vitalício a toda a área de membros.',
  },
  {
    q: 'Como funciona o acesso e em quanto tempo recebo?',
    a: 'O acesso é imediato! Assim que o pagamento for aprovado, você recebe instantaneamente um e-mail com seus dados de acesso exclusivos para começar a assistir às aulas na plataforma.',
  },
  {
    q: 'Posso usar o conhecimento para meu próprio negócio?',
    a: 'Sim. Você pode aplicar tanto os vídeos virais com IA quanto a criação de sites e landing pages para divulgar e multiplicar as vendas da sua própria loja, marca ou prestação de serviços.',
  },
  {
    q: 'Quanto tempo tenho para assistir aos treinamentos?',
    a: 'Você pode assistir no seu ritmo, quantas vezes quiser, pelo computador, tablet ou celular, no horário mais conveniente para você.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-secondary px-5 py-20 text-ink">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 font-display text-[2.1rem] font-black uppercase leading-[0.95] tracking-tighter sm:text-5xl">
            Perguntas <span className="text-brand">frequentes.</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Tire todas as suas dúvidas sobre os treinamentos de IA e Criação de Sites.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <Accordion className="mt-10 flex flex-col gap-3">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem
                key={q}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-white px-5 shadow-[0_10px_30px_-20px_rgb(11_11_12/0.4)] last:border-b data-open:border-brand/40"
              >
                <AccordionTrigger className="py-5 text-left text-base font-bold hover:no-underline">{q}</AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
