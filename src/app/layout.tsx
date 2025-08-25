import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import EnvironmentBanner from '../components/EnvironmentBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Podologia Profissional - Em Formação | Futura Especialista em Cuidados Podológicos',
  description: 'Projeto de formação em Podologia. Site em desenvolvimento para futura especialista em cuidados podológicos e tratamentos dos pés.',
  keywords: 'podologia, formação, estudante, cuidados pés, tratamentos podológicos, futuro consultório',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <EnvironmentBanner />
        {children}
      </body>
    </html>
  )
}
