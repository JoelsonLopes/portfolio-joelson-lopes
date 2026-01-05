export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Joelson Lopes',
    url: 'https://joelsonlopes.com', // Ajuste para a URL real se diferente
    sameAs: [
      'https://www.linkedin.com/in/joelsonlopes/',
      'https://github.com/joelsonlopes', // Assumindo GitHub baseado no contexto
    ],
    jobTitle: 'Desenvolvedor Full-Stack',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelancer / Consultor',
    },
    description:
      'Desenvolvedor full-stack especializado em criar soluções web modernas e responsivas com React, Next.js e Node.js.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brasil', // Ajustar cidade se souber
      addressCountry: 'BR',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
