import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Joelson Lopes Portfolio',
    short_name: 'Joelson Lopes',
    description:
      'Desenvolvedor Full-Stack especializado em soluções web modernas.',
    start_url: '/',
    display: 'standalone',
    background_color: '#00071E', // Baseado na cor primary/background
    theme_color: '#00071E',
    icons: [
      {
        src: '/icon1.png', // Verifiquei que existe
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon2.png', // Verifiquei que existe
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
