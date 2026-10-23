import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo', weight: ['700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Treinamento IA & Criação de Sites | Vídeos Virais e Sites Profissionais — A partir de R$ 19,90',
  description:
    'Aprenda a criar conteúdos virais com IA, influencers virtuais, TikTok Shop e a criar sites profissionais do zero sem programar para vender para clientes.',
  generator: 'v0.app',
  openGraph: {
    title: 'Pare de consumir IA. Aprenda a trabalhar com ela.',
    description: 'Treinamento prático de IA para criação de conteúdo viral e criação de sites profissionais. Acesso a partir de R$ 19,90.',
    images: ['/images/hero.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0b0b0c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${archivo.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
