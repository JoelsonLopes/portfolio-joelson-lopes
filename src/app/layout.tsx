import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import JsonLd from '@/components/SEO/JsonLd'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const title = 'Joelson Lopes | Desenvolvedor Full-Stack'

const description =
  'Desenvolvedor full-stack especializado em criar soluções web modernas e responsivas. Experiência com React, Next.js, Node.js e outras tecnologias. Transformo ideias em produtos digitais de qualidade.'

const url = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  applicationName: 'Joelson Lopes Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Desenvolvedor Full-Stack',
    'Next.js',
    'React',
    'Node.js',
    'TypeScript',
    'Programador Web',
    'Desenvolvimento de Sites',
    'Portfólio Developer',
    'Front-end',
    'Back-end',
    'JavaScript',
    'Tailwind CSS',
  ],
  authors: [
    { name: 'Joelson Lopes', url: 'https://www.linkedin.com/in/joelsonlopes/' },
  ],
  creator: 'Joelson Lopes',
  publisher: 'Joelson Lopes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'technology',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Joelson Lopes Portfolio',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@joelsonlopes',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token', // Você pode adicionar seu token aqui
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" data-theme="dark">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
        <ThemeMenu />
        <Footer />
        <JsonLd />
      </body>
    </html>
  )
}
